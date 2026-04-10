/**
 * MOCKUP SYNC: This file mirrors Reso2 macOS app UI for the marketing website.
 * When the corresponding app code changes, you MUST update this file too.
 * See /Users/yukungao/github/Reso2/CLAUDE.md "Website Mockup Sync" for the full mapping.
 *
 * App source of truth:
 * - NebulaShowcase / CLUSTERS ← Reso2/Resources/nebula_graph.html (3D Three.js nebula)
 *   This is a CSS/SVG approximation since the WebGL view is too heavy and data-bound.
 *   The cluster sample data is fictional (PII-safe) but the visual style should match.
 */
import React, { useState } from 'react';

/**
 * Recreation of Reso2's Nebula view (the 3D knowledge-graph visualization).
 * Original lives at /Users/yukungao/github/Reso2/Reso2/Resources/nebula_graph.html
 * and is rendered with Three.js / WebGL — too heavy and data-bound to embed
 * directly. This is a CSS/SVG approximation that captures the same dreamy
 * starfield aesthetic with deterministic, fictional cluster labels.
 *
 * Each cluster is clickable: tapping a star opens a small note card preview.
 */

// Fictional clusters — PII-safe, cleared for the public marketing page.
// Each cluster has a sample note preview shown on click.
const CLUSTERS = [
  {
    x: 18, y: 32, label: 'Architecture decisions', color: '#6ad0ff',
    preview: { date: 'Mar 28', title: 'Engine router seam', body: 'Move provider switch behind the existing flag. Smoke pack against canary before merge.' },
  },
  {
    x: 33, y: 58, label: 'Design system audit', color: '#9aa6ff',
    preview: { date: 'Apr 02', title: 'Token drift', body: 'Three card components ship slightly different shadow tokens. Consolidate into elevation.medium.' },
  },
  {
    x: 49, y: 24, label: 'Q2 launch retrospective', color: '#c8a8ff',
    preview: { date: 'Apr 04', title: 'What worked', body: 'Public soft-launch on Friday > announcement Monday. Discovery tab attribution doubled vs Q1.' },
  },
  {
    x: 64, y: 45, label: 'Voice → action ideas', color: '#ffc4d6',
    preview: { date: 'Mar 30', title: 'Save to Diary node', body: 'Result Card needs an explicit "Save to Diary" branch so longform notes do not need a manual paste.' },
  },
  {
    x: 72, y: 18, label: 'Reading notes · ML', color: '#7fe7c4',
    preview: { date: 'Mar 22', title: 'Speculative decoding', body: 'Draft model can be 5x smaller as long as accept rate stays above 0.7. Revisit for capsule latency.' },
  },
  {
    x: 82, y: 38, label: 'Hiring conversations', color: '#ffd690',
    preview: { date: 'Apr 06', title: 'Founding designer', body: 'Looking for someone who has shipped a macOS app, not just web. Pixel discipline matters here.' },
  },
  {
    x: 24, y: 78, label: 'Late-night journals', color: '#b8c8ff',
    preview: { date: 'Apr 01', title: 'Why this matters', body: 'A thought-processor, not a recorder. The differentiation is grounding, not transcription quality.' },
  },
  {
    x: 44, y: 84, label: 'Pricing experiments', color: '#9affc8',
    preview: { date: 'Mar 25', title: 'BYOK + Pro', body: 'Pro tier should bundle Reso Engine credits, BYOK should be free. Friction reversed from the v1 plan.' },
  },
  {
    x: 68, y: 72, label: 'Brand voice drafts', color: '#ffb3a8',
    preview: { date: 'Apr 03', title: 'Anti-Whisper positioning', body: 'Stop selling a microphone. Start selling a personalized thought-processor.' },
  },
  {
    x: 86, y: 70, label: 'Customer interviews', color: '#a4e3ff',
    preview: { date: 'Apr 07', title: 'Power user pattern', body: 'Three out of four heavy users built a custom Refine rule in week one. Onboarding should surface this earlier.' },
  },
  {
    x: 12, y: 54, label: 'Weekly review', color: '#d6c2ff',
    preview: { date: 'Apr 05', title: 'This week', body: 'Mindscape interactivity, capsule rewrite, hero copy. Next: Plan & Usage tab + ASR correction tuning.' },
  },
  {
    x: 56, y: 62, label: 'Pipeline cleanup ideas', color: '#9af0ff',
    preview: { date: 'Mar 31', title: 'Drop legacy fallback', body: 'Old single-pass router can retire after the canary holds for 7 days without regressions.' },
  },
];

const EDGES = [
  // Index pairs into CLUSTERS — connect related clusters
  [0, 1], [0, 2], [1, 4], [2, 3], [2, 5], [3, 5],
  [3, 7], [4, 9], [5, 9], [6, 10], [7, 11], [8, 11],
  [10, 11], [1, 11], [3, 11], [6, 7], [7, 8],
];

// Tiny background dust particles for the depth illusion
const DUST = Array.from({ length: 80 }).map((_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  const r2 = ((i * 49297 + 9301) % 233280) / 233280;
  const r3 = ((i * 31337 + 12345) % 233280) / 233280;
  return {
    x: r * 100,
    y: r2 * 100,
    size: 0.4 + r3 * 1.2,
    opacity: 0.18 + r3 * 0.42,
  };
});

const nebulaKeyframes = `
@keyframes resoNebulaPulse {
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
}
@keyframes resoNebulaTwinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.8; }
}
@keyframes resoNebulaDrift {
  0% { transform: translate(0, 0); }
  50% { transform: translate(-6px, 4px); }
  100% { transform: translate(0, 0); }
}
@keyframes resoNebulaCardIn {
  from { opacity: 0; transform: translate(-50%, -4px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
}
`;

export const NebulaShowcase = ({
  width = 760,
  height = 420,
  showHint = true,
}) => {
  const [activeIdx, setActiveIdx] = useState(null);
  const activeCluster = activeIdx != null ? CLUSTERS[activeIdx] : null;
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        borderRadius: 18,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 30% 30%, #0a0820 0%, #050510 30%, #000000 80%)',
        cursor: 'grab',
      }}
    >
      <style>{nebulaKeyframes}</style>

      {/* Background nebula glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '15%',
          left: '20%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(84,35,231,0.18) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(circle, rgba(80,180,255,0.14) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Dust */}
      {DUST.map((d, i) => (
        <div
          key={`dust-${i}`}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            borderRadius: '50%',
            background: '#fff',
            opacity: d.opacity,
            animation: `resoNebulaTwinkle ${3 + (i % 5)}s ease-in-out infinite`,
            animationDelay: `${(i % 7) * 0.3}s`,
            willChange: 'opacity',
            transform: 'translateZ(0)',
          }}
        />
      ))}

      {/* Edges (drawn first so nodes sit on top) */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <defs>
          <linearGradient id="nebulaEdge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(106,208,255,0.45)" />
            <stop offset="100%" stopColor="rgba(154,166,255,0.18)" />
          </linearGradient>
        </defs>
        {EDGES.map(([a, b], i) => {
          const A = CLUSTERS[a];
          const B = CLUSTERS[b];
          return (
            <line
              key={`edge-${i}`}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="url(#nebulaEdge)"
              strokeWidth="0.12"
              opacity="0.6"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* Cluster nodes + labels — clickable */}
      {CLUSTERS.map((c, i) => {
        const isActive = activeIdx === i;
        return (
          <button
            key={`node-${i}`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx(isActive ? null : i);
            }}
            style={{
              position: 'absolute',
              left: `${c.x}%`,
              top: `${c.y}%`,
              transform: 'translate(-50%, -50%)',
              animation: `resoNebulaDrift ${10 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              willChange: 'transform',
              background: 'transparent',
              border: 'none',
              padding: 4,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: isActive ? 9 : 6,
                height: isActive ? 9 : 6,
                borderRadius: '50%',
                background: c.color,
                boxShadow: isActive
                  ? `0 0 14px ${c.color}, 0 0 28px ${c.color}, 0 0 42px ${c.color}80`
                  : `0 0 8px ${c.color}, 0 0 18px ${c.color}80`,
                animation: `resoNebulaPulse ${4 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                transition: 'width 0.18s, height 0.18s, box-shadow 0.18s',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: isActive ? 16 : 12,
                top: -2,
                whiteSpace: 'nowrap',
                fontSize: isActive ? 10.5 : 9.5,
                letterSpacing: 0.2,
                color: isActive ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.78)',
                textShadow: '0 0 8px rgba(0,0,0,0.85)',
                fontWeight: isActive ? 600 : 500,
                transition: 'left 0.18s, font-size 0.18s, color 0.18s',
              }}
            >
              {c.label}
            </div>
          </button>
        );
      })}

      {/* Note preview popover */}
      {activeCluster && (
        <div
          style={{
            position: 'absolute',
            left: `${Math.min(Math.max(activeCluster.x, 24), 70)}%`,
            top: `${Math.min(Math.max(activeCluster.y + 8, 18), 60)}%`,
            transform: 'translate(-50%, 0)',
            width: 246,
            padding: '12px 14px',
            borderRadius: 12,
            background: 'linear-gradient(180deg, rgba(28,28,32,0.96) 0%, rgba(18,18,22,0.96) 100%)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${activeCluster.color}55`,
            boxShadow: `0 18px 40px -12px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04), 0 0 22px ${activeCluster.color}25`,
            color: 'rgba(255,255,255,0.95)',
            fontSize: 11,
            fontWeight: 500,
            zIndex: 5,
            animation: 'resoNebulaCardIn 0.22s ease-out',
            transformOrigin: 'top',
          }}
        >
          <div className="flex items-center" style={{ gap: 6, marginBottom: 6 }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: activeCluster.color,
                boxShadow: `0 0 6px ${activeCluster.color}`,
              }}
            />
            <span style={{ fontSize: 9, fontWeight: 600, color: activeCluster.color, letterSpacing: 0.2, textTransform: 'uppercase' }}>
              {activeCluster.label}
            </span>
            <span style={{ marginLeft: 'auto', fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
              {activeCluster.preview.date}
            </span>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.95)', marginBottom: 4 }}>
            {activeCluster.preview.title}
          </div>
          <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            {activeCluster.preview.body}
          </div>
        </div>
      )}

      {showHint && !activeCluster && (
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            left: 0,
            right: 0,
            textAlign: 'center',
            fontSize: 10,
            color: 'rgba(255,255,255,0.32)',
            letterSpacing: 0.5,
          }}
        >
          Tap any star to peek at the cluster's notes
        </div>
      )}
    </div>
  );
};

const NebulaMockup = (props) => <NebulaShowcase {...props} />;
export default NebulaMockup;
