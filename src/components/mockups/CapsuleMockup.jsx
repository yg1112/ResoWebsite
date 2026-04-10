/**
 * MOCKUP SYNC: This file mirrors Reso2 macOS app UI for the marketing website.
 * When the corresponding app code changes, you MUST update this file too.
 * See /Users/yukungao/github/Reso2/CLAUDE.md "Website Mockup Sync" for the full mapping.
 *
 * App source of truth:
 * - FloatingCapsule / PulseCells / StageText ← Reso2/Views/NotchBarView.swift
 *   (10 pulse cells with audio-reactive opacity, mic icon, stage ticker text)
 * - Stage states (recording / transcribing / processing / cleaning / inserted) ← MainViewModel processingState
 * - Legacy reference: Reso2/Views/FloatingCapsuleView.swift (compact mode)
 */
import React, { useEffect, useState } from 'react';

/**
 * High-fidelity recreation of Reso2's processing capsule (the floating dictation HUD).
 *
 * Source: /Users/yukungao/github/Reso2/Reso2/Views/NotchBarView.swift
 *         (also referenced in FloatingCapsuleView.swift for the legacy compact mode)
 *
 * This is a fully-rounded pill capsule (NOT the notch shape) with:
 *   - Mic icon on the LEFT (warm cream rgb(0.93,0.86,0.70))
 *   - Title + subtitle on the right
 *   - States auto-cycle: Recording (pulse cells) → Transcribing → Model Processing → Cleaning → Inserted
 *
 * The recording state shows the same audio-reactive pulse cells as the notch bar:
 *   10 cells × 5 px wide × ~16 px tall, spacing 3, radius 2.
 */

const ICON_ACCENT = '#EDD9B3'; // rgb(0.93, 0.86, 0.70)
const TITLE_COLOR = 'rgba(255,255,255,0.95)';
const SUBTITLE_COLOR = 'rgba(255,255,255,0.72)';

const animationCSS = `
@keyframes resoCellRise {
  0%, 100% { transform: scaleY(0.35); opacity: 0.30; }
  50% { transform: scaleY(1); opacity: 0.95; }
}
@keyframes resoCellMid {
  0%, 100% { transform: scaleY(0.25); opacity: 0.22; }
  35% { transform: scaleY(0.78); opacity: 0.78; }
  65% { transform: scaleY(1); opacity: 0.95; }
}
@keyframes resoCellLow {
  0%, 100% { transform: scaleY(0.20); opacity: 0.20; }
  40% { transform: scaleY(0.62); opacity: 0.62; }
}
@keyframes resoIconPulse {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(237,217,179,0.4)); }
  50% { filter: drop-shadow(0 0 12px rgba(237,217,179,0.85)); }
}
@keyframes resoCapsuleFlip {
  0%   { transform: translateY(8px); opacity: 0; }
  18%  { transform: translateY(0); opacity: 1; }
  82%  { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-8px); opacity: 0; }
}
`;

const MicGlyph = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <rect
      x="7"
      y="2.6"
      width="6"
      height="10"
      rx="3"
      fill={ICON_ACCENT}
    />
    <path
      d="M4 9.5a6 6 0 0 0 12 0M10 15v3"
      stroke={ICON_ACCENT}
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/** Pulse cells — audio-reactive equalizer (10 vertical bars). */
const PulseCells = ({ scale = 1 }) => {
  const cellCount = 10;
  const cellWidth = 5 * scale;
  const cellHeight = 18 * scale;
  const cellSpacing = 3 * scale;
  const cellRadius = 2 * scale;

  const animations = ['resoCellLow', 'resoCellMid', 'resoCellRise', 'resoCellMid', 'resoCellLow'];
  return (
    <div
      className="flex items-end"
      style={{ gap: cellSpacing, height: cellHeight }}
    >
      {Array.from({ length: cellCount }).map((_, i) => {
        const animName = animations[i % animations.length];
        return (
          <div
            key={i}
            style={{
              width: cellWidth,
              height: cellHeight,
              borderRadius: cellRadius,
              background: 'rgba(245,245,247,0.95)',
              opacity: 0.2,
              transformOrigin: 'bottom',
              animation: `${animName} ${0.7 + (i % 3) * 0.15}s ease-in-out infinite`,
              animationDelay: `${i * 0.07}s`,
              willChange: 'transform, opacity',
            }}
          />
        );
      })}
    </div>
  );
};

/** Stage text — title + subtitle stacked, with vertical flip animation on mount. */
const StageText = ({ title, subtitle, scale = 1, animKey }) => (
  <div
    key={animKey}
    style={{
      animation: 'resoCapsuleFlip 2.2s ease-in-out forwards',
      willChange: 'transform, opacity',
    }}
  >
    <div
      style={{
        fontSize: 14 * scale,
        fontWeight: 700,
        color: TITLE_COLOR,
        letterSpacing: -0.15,
        lineHeight: 1.15,
        whiteSpace: 'nowrap',
      }}
    >
      {title}
    </div>
    {subtitle && (
      <div
        style={{
          fontSize: 11 * scale,
          fontWeight: 500,
          color: SUBTITLE_COLOR,
          letterSpacing: 0.05,
          lineHeight: 1.2,
          marginTop: 1 * scale,
          whiteSpace: 'nowrap',
        }}
      >
        {subtitle}
      </div>
    )}
  </div>
);

/**
 * The capsule pill itself. Pure CSS — fully rounded pill shape.
 * Width auto-sizes to content with a min width.
 *
 * `state` cycles through the real Reso processing stages.
 */
export const FloatingCapsule = ({ scale = 1, state = 'recording' }) => {
  const padX = 18 * scale;
  const padY = 12 * scale;
  const gap = 12 * scale;
  const minWidth = 230 * scale;

  let rightContent;
  if (state === 'recording') {
    rightContent = <PulseCells scale={scale} />;
  } else if (state === 'transcribing') {
    rightContent = (
      <StageText
        animKey="transcribing"
        title="Transcribing"
        subtitle="Step 1/6 · Running"
        scale={scale}
      />
    );
  } else if (state === 'processing') {
    rightContent = (
      <StageText
        animKey="processing"
        title="Model Processing"
        subtitle="Applying workflow"
        scale={scale}
      />
    );
  } else if (state === 'cleaning') {
    rightContent = (
      <StageText
        animKey="cleaning"
        title="Cleaning"
        subtitle="Step 4/6 · Running"
        scale={scale}
      />
    );
  } else if (state === 'inserted') {
    rightContent = (
      <StageText
        animKey="inserted"
        title="Inserted"
        subtitle="done 5 · fail 1"
        scale={scale}
      />
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap,
        padding: `${padY}px ${padX + 4 * scale}px ${padY}px ${padX}px`,
        minWidth,
        borderRadius: 999,
        background: 'linear-gradient(180deg, #1a1a1d 0%, #0a0a0c 100%)',
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.08),
          inset 0 -1px 0 rgba(0,0,0,0.4),
          0 8px 28px -8px rgba(0,0,0,0.85),
          0 0 0 1px rgba(255,255,255,0.06)
        `,
      }}
    >
      <style>{animationCSS}</style>
      {/* Mic icon — left */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          animation: 'resoIconPulse 2s ease-in-out infinite',
        }}
      >
        <MicGlyph size={18 * scale} />
      </div>
      {/* Right side content (stage text or pulse cells) */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          minHeight: 32 * scale,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {rightContent}
      </div>
    </div>
  );
};

// Backwards-compat alias for ResoHeroMockup which still imports `Capsule`.
export const Capsule = FloatingCapsule;
export const NotchBar = FloatingCapsule;

/**
 * Showcase composition for the Capture feature card and Hero capture scene.
 * Shows the floating capsule near the BOTTOM of a stylized desktop area,
 * cycling through real processing states with auto-flip animations.
 */
export const CapsuleShowcase = ({
  width = 720,
  height = 380,
  scale = 1.5,
}) => {
  const STAGES = ['recording', 'transcribing', 'processing', 'cleaning', 'inserted'];
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return undefined;
    const id = window.setInterval(
      () => setStageIndex((i) => (i + 1) % STAGES.length),
      2200,
    );
    return () => window.clearInterval(id);
  }, []);

  const currentState = STAGES[stageIndex];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        borderRadius: 18,
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 100%, #1a1430 0%, #07060d 55%, #020205 100%)',
      }}
    >
      {/* Stars */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 0.5px, transparent 0.7px),
                            radial-gradient(rgba(255,255,255,0.3) 0.5px, transparent 0.7px)`,
          backgroundSize: '70px 90px, 110px 130px',
          backgroundPosition: '0 0, 35px 45px',
          opacity: 0.45,
        }}
      />

      {/* Purple ambient glow rising from bottom (where capsule lives) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '12%',
          transform: 'translateX(-50%)',
          width: '85%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(120,80,255,0.55) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle text hint at very top */}
      <div
        style={{
          position: 'absolute',
          top: 22,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 11,
          color: 'rgba(255,255,255,0.32)',
          letterSpacing: 0.4,
        }}
      >
        Hold <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Option</span> · the capsule listens
      </div>

      {/* Capsule positioned near the bottom */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '18%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <FloatingCapsule scale={scale} state={currentState} />
      </div>
    </div>
  );
};

const CapsuleMockup = (props) => <CapsuleShowcase {...props} />;
export default CapsuleMockup;
