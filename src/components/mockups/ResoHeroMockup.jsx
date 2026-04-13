import React, { lazy, Suspense, useState, useEffect } from 'react';
import { RESO_TOKENS } from './ResoMockupBase';
import { FloatingCapsule } from './CapsuleMockup';

// Heavy scenes are loaded only when their tab becomes active.
const ResoSettingsWindowLazy = lazy(() =>
  import('./ResoSettingsWindow').then((m) => ({ default: m.ResoSettingsWindow })),
);
const NebulaShowcaseLazy = lazy(() =>
  import('./NebulaMockup').then((m) => ({ default: m.NebulaShowcase })),
);

/**
 * The composite hero mockup.
 *
 * It always renders into a fixed internal canvas (1080×640). HeroSection
 * scales it down via CSS transform to fit the viewport. Different scenes swap
 * the inner composition entirely so we can show both window-style screens
 * (Workflow / Indexing) and full-bleed compositions (Capture / Discover).
 */

export const HERO_INTERNAL_WIDTH = 1080;
export const HERO_INTERNAL_HEIGHT = 640;

/* ────────────────────────────────────────────────────────────────────────── */
/* Scene 1: Capture — desktop fragment with the floating capsule + result card */
/* ────────────────────────────────────────────────────────────────────────── */

const NotchBar = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 30,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(20px)',
    }}
  >
    {/* Apple logo + menu items left */}
    <div
      className="flex items-center"
      style={{ position: 'absolute', left: 18, top: 0, height: '100%', gap: 18, fontSize: 11, color: 'rgba(255,255,255,0.62)' }}
    >
      <svg width="13" height="13" viewBox="0 0 14 14" fill="rgba(255,255,255,0.78)">
        <path d="M9.6 7.4c0-1.4 1.2-2.1 1.2-2.1-.7-1-1.7-1.1-2.1-1.1-.9-.1-1.7.5-2.2.5s-1.1-.5-1.9-.5c-1 0-1.9.6-2.4 1.5-1 1.8-.3 4.4.7 5.9.5.7 1.1 1.5 1.9 1.4.7 0 1-.5 1.9-.5s1.1.5 1.9.5c.8 0 1.3-.7 1.8-1.4.4-.5.6-1 .8-1.6-1.4-.5-1.6-2-1.6-2.1zM8 3.7c.4-.5.7-1.1.6-1.7-.6 0-1.2.4-1.6.8-.3.4-.6 1-.6 1.6.6 0 1.2-.3 1.6-.7z" />
      </svg>
      <span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>Notes</span>
      <span>File</span>
      <span>Edit</span>
      <span>View</span>
      <span>Format</span>
      <span>Window</span>
      <span>Help</span>
    </div>
    {/* Center notch */}
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translateX(-50%)',
        width: 180,
        height: 30,
        background: '#000',
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
      }}
    />
    {/* Status icons right */}
    <div
      className="flex items-center"
      style={{ position: 'absolute', right: 18, top: 0, height: '100%', gap: 12, color: 'rgba(255,255,255,0.7)' }}
    >
      <svg width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M1 6a9 9 0 0 1 14 0M3 8a6 6 0 0 1 10 0M5 10a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
      <svg width="16" height="9" viewBox="0 0 18 10" fill="none"><rect x="0.6" y="0.6" width="14" height="8.8" rx="1.6" stroke="currentColor" strokeWidth="1" fill="none" /><rect x="2" y="2" width="9" height="6" rx="0.5" fill="currentColor" /><path d="M16 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
      <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.78)' }}>9:41</span>
    </div>
  </div>
);

const DICTATION_LINES = [
  'Can we retire the legacy fallback after a full canary week?',
  'Need the provider switch behind one seam before merge.',
  'Smoke pack should run on staging for every PR.',
  'Confirm rollout notes and owner by Monday standup',
];

const BlinkingCursor = () => (
  <span
    style={{
      display: 'inline-block',
      width: 2,
      height: '1.1em',
      background: 'rgba(255,255,255,0.92)',
      boxShadow: '0 0 8px rgba(255,255,255,0.35)',
      verticalAlign: 'text-bottom',
      animation: 'cursorBlink 1s step-end infinite',
    }}
  />
);

const FauxNotesDocument = ({ inserted = false }) => (
  <div
    style={{
      position: 'absolute',
      top: 84,
      left: 90,
      right: 90,
      bottom: 70,
      borderRadius: 14,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.012) 100%)',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '20px 24px',
      backdropFilter: 'blur(2px)',
    }}
  >
    <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: 0.3,
          color: 'rgba(255,255,255,0.78)',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.14)',
          borderRadius: 999,
          padding: '4px 10px',
        }}
      >
        Draft Input
      </div>
      {inserted && (
        <div style={{ fontSize: 10, color: 'rgba(150,255,186,0.82)', letterSpacing: 0.2 }}>
          Inserted
        </div>
      )}
    </div>
    <div
      style={{
        height: '100%',
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(3,5,16,0.64)',
        backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%), repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 34px)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 0 1px rgba(0,0,0,0.3)',
        padding: '18px 22px',
        color: 'rgba(235,240,255,0.84)',
        fontSize: 13,
        lineHeight: 1.9,
      }}
    >
      <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>
        Saturday - engine router
      </div>
      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)', marginBottom: 8 }}>
        April 9 · live dictation
      </div>
      {!inserted && (
        <div><BlinkingCursor /></div>
      )}
      {inserted && (
        <div style={{ opacity: 0, animation: 'textAppear 0.35s ease forwards' }}>
          {DICTATION_LINES.map((line, i) => (
            <div key={i}>
              {i === DICTATION_LINES.length - 1 ? (
                <span>{line}<BlinkingCursor /></span>
              ) : (
                line
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    <style>{`
      @keyframes cursorBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes textAppear {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `}</style>
  </div>
);

const CAPSULE_STAGES = ['recording', 'transcribing', 'processing', 'cleaning', 'inserted'];
// 5 capsule stages + 1 extra tick to hold the inserted state, then loop
const TOTAL_TICKS = CAPSULE_STAGES.length + 2;

const CaptureScene = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return undefined;
    const id = window.setInterval(
      () => setTick((t) => (t + 1) % TOTAL_TICKS),
      2200,
    );
    return () => window.clearInterval(id);
  }, []);

  const capsuleStageIndex = Math.min(tick, CAPSULE_STAGES.length - 1);
  const inserted = tick >= CAPSULE_STAGES.length;
  const capsuleDone = inserted;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 100%, #1a1430 0%, #07060d 55%, #020205 100%)',
      }}
    >
      {/* Ambient stars */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255,255,255,0.45) 0.6px, transparent 0.8px),
                            radial-gradient(rgba(255,255,255,0.32) 0.5px, transparent 0.7px)`,
          backgroundSize: '70px 90px, 110px 130px',
          backgroundPosition: '0 0, 35px 45px',
          opacity: 0.4,
        }}
      />
      {/* Purple ambient */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 60,
          transform: 'translateX(-50%)',
          width: 620,
          height: 340,
          background: 'radial-gradient(ellipse, rgba(120,80,255,0.55) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      <NotchBar />
      <FauxNotesDocument inserted={inserted} />

      {/* Capsule — fades out after insertion completes */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 140,
          transform: 'translateX(-50%)',
          zIndex: 3,
          opacity: capsuleDone ? 0.3 : 1,
          transition: 'opacity 0.6s ease',
        }}
      >
        <FloatingCapsule scale={1.7} state={CAPSULE_STAGES[capsuleStageIndex]} />
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────── */
/* Scene 2: Workflow — full settings window with workflow tab                 */
/* Scene 3: Indexing — full settings window with indexing tab                 */
/* Scene 4: Discover — nebula full bleed                                      */
/* ────────────────────────────────────────────────────────────────────────── */

const SceneSkeleton = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      borderRadius: 16,
      background: 'linear-gradient(180deg, #0c0c0e 0%, #08080a 100%)',
      border: '1px solid rgba(255,255,255,0.07)',
    }}
  />
);

const SettingsWindowScene = ({ defaultTab }) => (
  <Suspense fallback={<SceneSkeleton />}>
    <div style={{ width: '100%', height: '100%' }}>
      <ResoSettingsWindowLazy defaultTab={defaultTab} />
    </div>
  </Suspense>
);

const WorkflowScene = () => <SettingsWindowScene defaultTab="workflow" />;
const IndexingScene = () => <SettingsWindowScene defaultTab="indexing" />;

const DiscoverScene = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      borderRadius: 16,
      overflow: 'hidden',
      background: '#000',
      position: 'relative',
    }}
  >
    <Suspense fallback={<SceneSkeleton />}>
      <NebulaShowcaseLazy width={HERO_INTERNAL_WIDTH} height={HERO_INTERNAL_HEIGHT} />
    </Suspense>
  </div>
);

const SCENE_RENDERERS = {
  capture: CaptureScene,
  workflow: WorkflowScene,
  indexing: IndexingScene,
  discover: DiscoverScene,
};

const ResoHeroMockup = ({ activeScene = 'capture' }) => {
  const Scene = SCENE_RENDERERS[activeScene] || CaptureScene;
  return (
    <div
      style={{
        width: HERO_INTERNAL_WIDTH,
        height: HERO_INTERNAL_HEIGHT,
        position: 'relative',
      }}
    >
      <Scene />
    </div>
  );
};

export default ResoHeroMockup;
