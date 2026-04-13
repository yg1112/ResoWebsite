/**
 * NebulaMockup — Canvas-based nebula cluster animation.
 * Replicates the real app's rendering engine (nebula_graph.html):
 *   - Pure black background
 *   - globalCompositeOperation = 'screen' for additive glow blending
 *   - SuperHub: real-time radialGradient + white core arc
 *   - Hub: sprite radialGradient + white core
 *   - Star dust: sub-pixel arcs
 *   - Connecting edges: linear-gradient strokes
 * Simplified for marketing: no search/settings panels, fictional clusters only.
 */
import React, { useRef, useEffect, useState, useCallback } from 'react';

// Sentiment spectrum (from nebula_graph.html SENTIMENT_SPECTRUM)
const SPECTRUM = [
  { stop: 0.00, r: 0,   g: 242, b: 254 },
  { stop: 0.25, r: 79,  g: 172, b: 254 },
  { stop: 0.50, r: 200, g: 210, b: 222 },
  { stop: 0.75, r: 255, g: 177, b: 153 },
  { stop: 1.00, r: 246, g: 211, b: 101 },
];

function colorAtT(t) {
  t = Math.max(0, Math.min(1, t));
  for (let i = 0; i < SPECTRUM.length - 1; i++) {
    const a = SPECTRUM[i], b = SPECTRUM[i + 1];
    if (t >= a.stop && t <= b.stop) {
      const lt = (t - a.stop) / (b.stop - a.stop);
      return {
        r: Math.round(a.r + (b.r - a.r) * lt),
        g: Math.round(a.g + (b.g - a.g) * lt),
        b: Math.round(a.b + (b.b - a.b) * lt),
      };
    }
  }
  return SPECTRUM[SPECTRUM.length - 1];
}
function cs(c, a) { return `rgba(${c.r},${c.g},${c.b},${a})`; }

// ─── One large dense cluster (center) + two secondary clusters + scatter ─────
//
// The main cluster has ~22 hubs spread over ±380 units — enough to fill the
// canvas. Edges are AUTO-GENERATED in the render loop (same as the real app):
// any two hub/superHub nodes within MAX_EDGE_DIST connect automatically,
// creating the dense crossing-line web visible in the app screenshot.
//
// Cluster A  (center, moonlight silver ~0.48-0.56):  large, 22 hubs
// Cluster B  (far upper-left, cold cyan ~0.10-0.20):  5 hubs tight together
// Cluster C  (far lower-right, warm gold ~0.85-0.96): 5 hubs tight together
// ─────────────────────────────────────────────────────────────────────────────
const NODES = [
  // ── Cluster A — large dense main cluster ────────────────────────────────
  { id:  0, ox:   0, oy:   0, oz:   0, baseSize:22, kind:'superHub', sentiment:0.52,
    label:'Voice workflow', preview:'Drop the provider switch behind the existing flag. Smoke pack against canary before merge.' },
  { id:  1, ox:-160, oy:-130, oz: 110, baseSize:10, kind:'hub', sentiment:0.48, label:'Pipeline cleanup', preview:'Old single-pass router retires after canary holds 7 days without regressions.' },
  { id:  2, ox: 180, oy:-150, oz: -70, baseSize:11, kind:'hub', sentiment:0.55, label:'Brand voice drafts', preview:'Stop selling a microphone. Start selling a personalized thought-processor.' },
  { id:  3, ox: 140, oy: 160, oz:  90, baseSize: 9, kind:'hub', sentiment:0.44, label:'Customer interviews', preview:'3 of 4 power users built a custom Refine rule in week one. Surface this earlier.' },
  { id:  4, ox:-170, oy: 140, oz: -90, baseSize: 8, kind:'hub', sentiment:0.58, label:'Release notes', preview:'v2.4 ships: instant revision, new capsule stages, sentiment-based nebula coloring.' },
  { id:  5, ox:  90, oy: -90, oz:-170, baseSize: 7, kind:'hub', sentiment:0.50, label:'Weekly review', preview:'Mindscape interactivity, capsule rewrite, hero copy. Next: Plan & Usage + ASR tuning.' },
  { id:  6, ox:-230, oy:  60, oz: -50, baseSize: 8, kind:'hub', sentiment:0.46, label:'Product strategy', preview:'Focus on power users building custom workflows, not casual dictation users.' },
  { id:  7, ox: 260, oy:  30, oz:  80, baseSize: 7, kind:'hub', sentiment:0.54, label:'ASR correction', preview:'Edit-distance threshold at 0.15 catches most substitution errors without over-correcting.' },
  { id:  8, ox:  60, oy: 240, oz:-130, baseSize: 8, kind:'hub', sentiment:0.42, label:'Refine rule ideas', preview:'Default rule: strip filler words. Advanced: domain-specific vocabulary injection.' },
  { id:  9, ox: -80, oy:-230, oz:  60, baseSize: 7, kind:'hub', sentiment:0.56, label:'Nebula tuning', preview:'Sentiment percentile mapping smooths color transitions. Cold→neutral→warm spectrum.' },
  { id: 10, ox: 310, oy:-200, oz: -40, baseSize: 9, kind:'hub', sentiment:0.38, label:'Hiring conversations', preview:'Looking for someone who has shipped a macOS app. Pixel discipline matters.' },
  { id: 11, ox:-300, oy:-190, oz: 150, baseSize: 8, kind:'hub', sentiment:0.62, label:'Onboarding flow', preview:'Surface the Refine rule builder in week-one flow. Reduces churn significantly.' },
  { id: 12, ox: 200, oy: 310, oz:-180, baseSize: 7, kind:'hub', sentiment:0.45, label:'Design system audit', preview:'Consolidate shadow tokens into elevation.medium across all card components.' },
  { id: 13, ox:-200, oy: 300, oz: 120, baseSize: 6, kind:'hub', sentiment:0.59, label:'Q2 retrospective', preview:'Public soft-launch Friday → announcement Monday. Discovery attribution doubled.' },
  { id: 14, ox: 360, oy: 140, oz:-160, baseSize: 7, kind:'hub', sentiment:0.35, label:'Pricing experiments', preview:'Pro tier bundles Reso Engine credits. BYOK free. Friction reversed from v1.' },
  { id: 15, ox:-360, oy: -80, oz: -80, baseSize: 6, kind:'hub', sentiment:0.65, label:'Late-night journals', preview:'A thought-processor, not a recorder. Differentiation is grounding, not transcription.' },
  { id: 16, ox: 120, oy:-340, oz: 160, baseSize: 6, kind:'hub', sentiment:0.30, label:'Voice action ideas', preview:'Result Card needs an explicit Save to Diary branch for longform notes.' },
  { id: 17, ox:-130, oy: 360, oz:-160, baseSize: 6, kind:'hub', sentiment:0.70, label:'Customer feedback', preview:'Most common request: export to Notion. Second: Apple Shortcuts trigger.' },
  { id: 18, ox: 380, oy:-320, oz:  60, baseSize: 5, kind:'hub', sentiment:0.28, label:'Roadmap planning', preview:'Q3: Smart Format GA, Translate improvements, Nebula search redesign.' },
  { id: 19, ox:-380, oy: 280, oz: 100, baseSize: 5, kind:'hub', sentiment:0.72, label:'Reading notes · ML', preview:'Draft model can be 5× smaller if accept rate stays above 0.7.' },
  { id: 20, ox: 280, oy: 360, oz: 200, baseSize: 5, kind:'hub', sentiment:0.40, label:'Engine router', preview:'Drop the provider switch behind the existing flag.' },
  { id: 21, ox:-270, oy:-350, oz:-160, baseSize: 5, kind:'hub', sentiment:0.60, label:'Capsule rewrite', preview:'New stage model: recording → transcribing → processing → cleaning → inserted.' },

  // ── Cluster B  (cold cyan, upper-left) — tight group ────────────────────
  { id: 22, ox:-560, oy:-440, oz: 180, baseSize:15, kind:'superHub', sentiment:0.14,
    label:'Architecture', preview:'Move provider switch behind the existing flag. Canary must hold 7 days before retiring.' },
  { id: 23, ox:-470, oy:-520, oz: 130, baseSize: 8, kind:'hub', sentiment:0.10, label:'Code review notes', preview:'Enforce single-direction data flow. No circular dependency between service layers.' },
  { id: 24, ox:-650, oy:-380, oz: 220, baseSize: 7, kind:'hub', sentiment:0.18, label:'Performance profiling', preview:'Startup time dominated by embedding model load. Lazy-init after first use.' },
  { id: 25, ox:-620, oy:-490, oz: 100, baseSize: 6, kind:'hub', sentiment:0.12, label:'Test coverage gaps', preview:'Integration tests missing for the revise flow when context window is near limit.' },
  { id: 26, ox:-500, oy:-420, oz: 260, baseSize: 5, kind:'hub', sentiment:0.20, label:'Dependency audit', preview:'Three packages ship their own copy of lodash. Replace with native equivalents.' },

  // ── Cluster C  (warm gold, lower-right) — tight group ───────────────────
  { id: 27, ox: 520, oy: 430, oz:-150, baseSize:14, kind:'superHub', sentiment:0.92,
    label:'Reading & learning', preview:'Draft model can be 5× smaller if accept rate stays above 0.7. Revisit for capsule latency.' },
  { id: 28, ox: 610, oy: 360, oz: -90, baseSize: 8, kind:'hub', sentiment:0.96, label:'Book highlights', preview:'The best tools disappear into the workflow. Reso should feel like thinking out loud.' },
  { id: 29, ox: 430, oy: 510, oz:-200, baseSize: 8, kind:'hub', sentiment:0.88, label:'Research papers', preview:'Speculative decoding accept rate correlates strongly with domain vocabulary match.' },
  { id: 30, ox: 600, oy: 470, oz:-220, baseSize: 6, kind:'hub', sentiment:0.94, label:'Course notes', preview:'Transformer attention is O(n²) — the reason streaming works better for long transcripts.' },
  { id: 31, ox: 460, oy: 380, oz:-120, baseSize: 5, kind:'hub', sentiment:0.85, label:'Podcast insights', preview:'Every great product has a 10-second pitch. Reso: speak and it is already done.' },

  // ── Star dust — scattered wide ────────────────────────────────────────────
  { id: 32, ox: 620, oy:-200, oz: 100, baseSize:2.8, kind:'dust', sentiment:0.25 },
  { id: 33, ox:-620, oy:-300, oz:-150, baseSize:2.2, kind:'dust', sentiment:0.12 },
  { id: 34, ox: 200, oy:-560, oz:  80, baseSize:2.5, kind:'dust', sentiment:0.60 },
  { id: 35, ox:-180, oy: 600, oz:-160, baseSize:2.0, kind:'dust', sentiment:0.78 },
  { id: 36, ox: 680, oy: 120, oz:-100, baseSize:1.8, kind:'dust', sentiment:0.35 },
  { id: 37, ox:-680, oy: 120, oz: 180, baseSize:2.2, kind:'dust', sentiment:0.20 },
  { id: 38, ox: 300, oy: 620, oz: 120, baseSize:2.0, kind:'dust', sentiment:0.88 },
  { id: 39, ox:-260, oy:-620, oz:  60, baseSize:2.4, kind:'dust', sentiment:0.50 },
  { id: 40, ox: 460, oy:-440, oz:-240, baseSize:1.6, kind:'dust', sentiment:0.15 },
  { id: 41, ox:-460, oy: 460, oz: 240, baseSize:1.8, kind:'dust', sentiment:0.68 },
  { id: 42, ox: 720, oy:-320, oz: 140, baseSize:1.4, kind:'dust', sentiment:0.30 },
  { id: 43, ox:-720, oy: 260, oz:-120, baseSize:1.6, kind:'dust', sentiment:0.42 },
  { id: 44, ox:  80, oy: 720, oz: -80, baseSize:1.5, kind:'dust', sentiment:0.75 },
  { id: 45, ox: -80, oy:-720, oz: 100, baseSize:1.8, kind:'dust', sentiment:0.08 },
  { id: 46, ox: 400, oy: 680, oz: 240, baseSize:1.4, kind:'dust', sentiment:0.95 },
  { id: 47, ox:-400, oy:-680, oz:-240, baseSize:1.6, kind:'dust', sentiment:0.05 },
  { id: 48, ox: 760, oy:  80, oz:-160, baseSize:1.3, kind:'dust', sentiment:0.38 },
  { id: 49, ox:-760, oy: -80, oz: 160, baseSize:1.5, kind:'dust', sentiment:0.55 },
  { id: 50, ox: 220, oy:-760, oz: 220, baseSize:1.4, kind:'dust', sentiment:0.22 },
  { id: 51, ox:-220, oy: 760, oz:-220, baseSize:1.3, kind:'dust', sentiment:0.82 },
  { id: 52, ox: 560, oy: 560, oz:-360, baseSize:1.2, kind:'dust', sentiment:0.65 },
  { id: 53, ox:-560, oy:-560, oz: 360, baseSize:1.4, kind:'dust', sentiment:0.32 },
  { id: 54, ox: 820, oy:-420, oz: 100, baseSize:1.1, kind:'dust', sentiment:0.18 },
  { id: 55, ox:-820, oy: 420, oz:-100, baseSize:1.2, kind:'dust', sentiment:0.72 },
  { id: 56, ox: 360, oy:-820, oz:-180, baseSize:1.0, kind:'dust', sentiment:0.48 },
  { id: 57, ox:-360, oy: 820, oz: 180, baseSize:1.1, kind:'dust', sentiment:0.90 },
  { id: 58, ox: 880, oy: 160, oz: 240, baseSize:1.0, kind:'dust', sentiment:0.28 },
  { id: 59, ox:-880, oy:-160, oz:-240, baseSize:1.2, kind:'dust', sentiment:0.60 },
];

// No hardcoded EDGES — auto-generated in render loop (same as the real app):
// every pair of hub/superHub nodes within MAX_EDGE_DIST connects automatically.
const MAX_EDGE_DIST = 520;

function rotateY(x, y, z, angle) {
  const cos = Math.cos(angle), sin = Math.sin(angle);
  return { x: x * cos + z * sin, y, z: -x * sin + z * cos };
}
function rotateX(x, y, z, angle) {
  const cos = Math.cos(angle), sin = Math.sin(angle);
  return { x, y: y * cos - z * sin, z: y * sin + z * cos };
}

// Pre-build sprite canvases for hub nodes (same as createNodeSprite in the app)
function buildSprite(color, size = 128) {
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const sctx = c.getContext('2d');
  const center = size / 2;
  const grad = sctx.createRadialGradient(center, center, 0, center, center, center);
  grad.addColorStop(0, cs(color, 0.85));
  grad.addColorStop(0.5, cs(color, 0.32));
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  sctx.fillStyle = grad;
  sctx.fillRect(0, 0, size, size);
  sctx.beginPath();
  sctx.arc(center, center, center * 0.28, 0, Math.PI * 2);
  sctx.fillStyle = 'rgba(240,248,255,0.85)';
  sctx.fill();
  return c;
}

export const NebulaShowcase = ({ width = 760, height = 420 }) => {
  const canvasRef = useRef(null);
  const stateRef = useRef({ rotY: 0, rotX: 0 });
  const spritesRef = useRef(null);
  const rafRef = useRef(null);
  const [hovered, setHovered] = useState(null); // { node, screenX, screenY }

  // Build sprites once
  useEffect(() => {
    spritesRef.current = {};
    NODES.forEach(n => {
      if (n.kind === 'hub') {
        spritesRef.current[n.id] = buildSprite(colorAtT(n.sentiment));
      }
    });
  }, []);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    const w = canvas.width, h = canvas.height;
    const FOV = 400, CAM_Z = 700;
    const { rotY, rotX } = stateRef.current;
    const now = Date.now();

    let best = null, bestDist = Infinity;
    for (const n of NODES) {
      if (n.kind === 'dust') continue;
      const noise = n.kind === 'superHub' ? 18 : 10;
      const nx = n.ox + Math.sin(now * 0.0002 + n.id) * noise;
      const ny = n.oy + Math.cos(now * 0.00027 + n.id) * noise;
      const nz = n.oz + Math.sin(now * 0.00031 + n.id) * noise;
      let r = rotateY(nx, ny, nz, rotY);
      r = rotateX(r.x, r.y, r.z, rotX);
      const z = r.z + CAM_Z;
      if (z <= 1) continue;
      const s = FOV / z;
      const px = r.x * s + w / 2;
      const py = r.y * s + h / 2;
      const drawRad = n.baseSize * s * (n.kind === 'superHub' ? 4.5 : 2.8);
      const dx = mx - px, dy = my - py;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < Math.max(drawRad, 14) && dist < bestDist) {
        bestDist = dist;
        best = { node: n, screenX: px / scaleX + rect.left, screenY: py / scaleY + rect.top };
      }
    }
    setHovered(best);
  }, []);

  const handleMouseLeave = useCallback(() => setHovered(null), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    const w = canvas.width, h = canvas.height;
    const FOV = 400, CAM_Z = 700;
    const sprites = spritesRef.current || {};

    const loop = () => {
      const now = Date.now();
      stateRef.current.rotY += 0.00012;
      stateRef.current.rotX += 0.000036;
      const { rotY, rotX } = stateRef.current;

      // --- Background ---
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      // Screen blending — additive glow (key to the JWST nebula look)
      ctx.globalCompositeOperation = 'screen';

      // Project all nodes
      const proj = [];
      for (const n of NODES) {
        const noise = n.kind === 'superHub' ? 18 : n.kind === 'hub' ? 10 : 4;
        const nx = n.ox + Math.sin(now * 0.0002 + n.id) * noise;
        const ny = n.oy + Math.cos(now * 0.00027 + n.id) * noise;
        const nz = n.oz + Math.sin(now * 0.00031 + n.id) * noise;
        let r = rotateY(nx, ny, nz, rotY);
        r = rotateX(r.x, r.y, r.z, rotX);
        const z = r.z + CAM_Z;
        if (z <= 1) continue;
        const s = FOV / z;
        const px = r.x * s + w / 2;
        const py = r.y * s + h / 2;
        const pulse = 1 + Math.sin(now * 0.0008 + n.ox) * (n.kind === 'superHub' ? 0.07 : 0.04);
        const radius = n.baseSize * s * pulse;
        const alpha = Math.max(0.05, Math.min(1, Math.pow(FOV / z, 1.8) * 2.5));
        const color = colorAtT(n.sentiment);
        proj.push({ n, px, py, z, s, radius, alpha, color });
      }
      proj.sort((a, b) => b.z - a.z);

      // --- Edges — auto-generated (same as real app) ---
      // Connect every hub/superHub pair within MAX_EDGE_DIST in 3-D space.
      const hubProj = proj.filter(p => p.n.kind !== 'dust');
      for (let ei = 0; ei < hubProj.length; ei++) {
        for (let ej = ei + 1; ej < hubProj.length; ej++) {
          const pa = hubProj[ei], pb = hubProj[ej];
          const dx = pa.n.ox - pb.n.ox, dy = pa.n.oy - pb.n.oy, dz = pa.n.oz - pb.n.oz;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist >= MAX_EDGE_DIST) continue;
          const aD = 1 - dist / MAX_EDGE_DIST;
          const aZ = Math.max(0.02, Math.min(1, FOV / ((pa.z + pb.z) * 0.5)));
          const edgeAlpha = aD * aZ * 0.45;
          if (edgeAlpha < 0.015) continue;
          ctx.lineWidth = Math.max(0.4, Math.min(1.5, (FOV / ((pa.z + pb.z) * 0.5)) * 1.2));
          ctx.beginPath();
          ctx.moveTo(pa.px, pa.py);
          ctx.lineTo(pb.px, pb.py);
          const grad = ctx.createLinearGradient(pa.px, pa.py, pb.px, pb.py);
          grad.addColorStop(0, cs(pa.color, edgeAlpha));
          grad.addColorStop(1, cs(pb.color, edgeAlpha));
          ctx.strokeStyle = grad;
          ctx.stroke();
        }
      }

      // --- Nodes ---
      for (const { n, px, py, radius, alpha, color } of proj) {
        const isHov = hovered?.node.id === n.id;
        const r = isHov ? radius * 1.5 : radius;
        const a = isHov ? 1 : alpha;

        if (n.kind === 'superHub') {
          const drawRad = r * 4.5;
          ctx.globalAlpha = a;
          const g = ctx.createRadialGradient(px, py, 0, px, py, drawRad);
          g.addColorStop(0, cs(color, 1.0));
          g.addColorStop(0.4, cs(color, 0.5));
          g.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = g;
          ctx.fillRect(px - drawRad, py - drawRad, drawRad * 2, drawRad * 2);
          ctx.beginPath();
          ctx.arc(px, py, drawRad * 0.26, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,0.95)';
          ctx.fill();
        } else if (n.kind === 'hub') {
          const sprite = sprites[n.id];
          if (sprite) {
            const drawRad = r * 2.8;
            ctx.globalAlpha = a;
            ctx.drawImage(sprite, px - drawRad, py - drawRad, drawRad * 2, drawRad * 2);
          }
        } else {
          // Star dust
          ctx.globalAlpha = 1.0;
          const dustR = Math.max(0.5, r * a * 1.2);
          ctx.beginPath();
          ctx.arc(px, py, dustR, 0, Math.PI * 2);
          ctx.fillStyle = a > 0.6
            ? `rgba(220,240,255,${a})`
            : cs(color, a * 0.7);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hovered]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        borderRadius: 18,
        overflow: 'hidden',
        background: '#000',
        cursor: hovered ? 'pointer' : 'default',
      }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ display: 'block', width: '100%', height: '100%' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />

      {/* Hover tooltip — HTML overlay, same glass style as the app */}
      {hovered?.node.label && (
        <div
          style={{
            position: 'absolute',
            left: Math.min(hovered.screenX - canvasRef.current?.getBoundingClientRect().left + 16, width - 260),
            top: Math.max(hovered.screenY - canvasRef.current?.getBoundingClientRect().top - 20, 8),
            width: 240,
            padding: '11px 13px',
            borderRadius: 13,
            background: 'linear-gradient(180deg, rgba(28,28,26,0.96) 0%, rgba(14,14,12,0.97) 100%)',
            backdropFilter: 'blur(24px)',
            border: `1px solid rgba(255,255,255,0.08)`,
            boxShadow: '0 18px 48px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.95)',
            pointerEvents: 'none',
            zIndex: 10,
            animation: 'nebulaCardIn 0.15s ease-out',
          }}
        >
          <style>{`@keyframes nebulaCardIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}`}</style>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 5 }}>
            {hovered.node.label}
          </div>
          <div style={{ fontSize: 11.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)' }}>
            {hovered.node.preview}
          </div>
        </div>
      )}
    </div>
  );
};

const NebulaMockup = (props) => <NebulaShowcase {...props} />;
export default NebulaMockup;
