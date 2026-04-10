/**
 * MOCKUP SYNC: This file mirrors Reso2 macOS app UI for the marketing website.
 * When the corresponding app code changes, you MUST update this file too.
 * See /Users/yukungao/github/Reso2/CLAUDE.md "Website Mockup Sync" for the full mapping.
 *
 * App source of truth: This is a conceptual privacy diagram, not a 1:1 mirror of any
 * single app file. Update if Reso2's privacy posture / data flow changes (e.g., recovery
 * audio storage location, BYOK provider routing).
 */
import React from 'react';
import { RESO_TOKENS } from './ResoMockupBase';

/**
 * Privacy / data-flow mockup. Shows the on-device path for voice capture
 * and how transcription/generation can stay local or route to a chosen
 * provider — matching the privacy copy in Features.jsx.
 */

const Pill = ({ children, tone = 'neutral' }) => {
  const styles =
    tone === 'green'
      ? { background: 'rgba(34,197,94,0.14)', border: '1px solid rgba(34,197,94,0.45)', color: '#86efac' }
      : tone === 'purple'
        ? { background: 'rgba(84,35,231,0.14)', border: '1px solid rgba(84,35,231,0.45)', color: '#c4b6ff' }
        : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' };
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '3px 8px',
        borderRadius: 999,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 0.2,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

const LockIcon = ({ size = 11, color = '#86efac' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <rect x="2.5" y="6" width="9" height="6" rx="1.4" stroke={color} strokeWidth="1.4" fill="none" />
    <path d="M4.5 6V4a2.5 2.5 0 1 1 5 0v2" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const MicGlyph = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="3.5" width="6" height="11" rx="3" stroke="#fff" strokeWidth="1.6" fill="none" />
    <path d="M6 11.5a6 6 0 0 0 12 0M12 17.5v3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  </svg>
);

const ChipGlyph = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="6" y="6" width="12" height="12" rx="2" stroke="#fff" strokeWidth="1.6" fill="none" />
    <rect x="9" y="9" width="6" height="6" rx="1" stroke="#fff" strokeWidth="1.4" fill="none" />
    <path d="M3 10v0M3 14v0M21 10v0M21 14v0M10 3v0M14 3v0M10 21v0M14 21v0" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M3 10h3M3 14h3M18 10h3M18 14h3M10 3v3M14 3v3M10 18v3M14 18v3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const CloudGlyph = ({ dim = false }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" opacity={dim ? 0.5 : 1}>
    <path
      d="M7.5 18.5a4 4 0 0 1 0-8 5 5 0 0 1 9.7-.5 3.5 3.5 0 0 1-.7 8.5z"
      stroke="#fff"
      strokeWidth="1.6"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

const Step = ({ icon, title, sub, pill, accent = '#fff' }) => (
  <div
    className="flex flex-col items-center"
    style={{
      width: 130,
      gap: 8,
    }}
  >
    <div
      className="flex items-center justify-center"
      style={{
        width: 56,
        height: 56,
        borderRadius: 14,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.14)',
        boxShadow: `0 0 24px -4px ${accent}55`,
        color: accent,
      }}
    >
      {icon}
    </div>
    <div
      style={{
        fontSize: 12,
        fontWeight: 600,
        color: RESO_TOKENS.textPrimary,
        textAlign: 'center',
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontSize: 10,
        color: RESO_TOKENS.textTertiary,
        textAlign: 'center',
        lineHeight: 1.4,
      }}
    >
      {sub}
    </div>
    {pill}
  </div>
);

export const PrivacyShowcase = ({ width = 760, height = 420 }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      maxWidth: width,
      aspectRatio: `${width} / ${height}`,
      borderRadius: 18,
      overflow: 'hidden',
      background: 'radial-gradient(circle at 30% 30%, #0f1414 0%, #050706 60%, #020303 100%)',
      border: '1px solid rgba(255,255,255,0.06)',
    }}
  >
    {/* Soft mint glow */}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        left: '20%',
        top: '40%',
        width: '60%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 60%)',
        filter: 'blur(40px)',
      }}
    />
    {/* Subtle dotted backdrop */}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '14px 14px',
        opacity: 0.6,
      }}
    />

    {/* Title row */}
    <div
      style={{
        position: 'absolute',
        top: 28,
        left: 0,
        right: 0,
        textAlign: 'center',
      }}
    >
      <Pill tone="green">
        <LockIcon /> 100% On-Device by Default
      </Pill>
    </div>

    {/* Steps row */}
    <div
      className="flex items-start justify-center"
      style={{
        position: 'absolute',
        top: '40%',
        left: 0,
        right: 0,
        transform: 'translateY(-50%)',
        gap: 18,
      }}
    >
      <Step
        icon={<MicGlyph />}
        title="Capture"
        sub="Hold Option · Audio held in memory only"
        pill={<Pill tone="green"><LockIcon /> Local</Pill>}
        accent="#86efac"
      />
      {/* Connector */}
      <div
        style={{
          width: 36,
          height: 1.5,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(134,239,172,0.5), rgba(255,255,255,0.05))',
          marginTop: 32,
          borderRadius: 999,
        }}
      />
      <Step
        icon={<ChipGlyph />}
        title="Reso Engine"
        sub="On-device transcribe + intent classification"
        pill={<Pill tone="green"><LockIcon /> Local</Pill>}
        accent="#86efac"
      />
      <div
        style={{
          width: 36,
          height: 1.5,
          background: 'linear-gradient(90deg, rgba(134,239,172,0.5), rgba(196,182,255,0.5))',
          marginTop: 32,
          borderRadius: 999,
        }}
      />
      <Step
        icon={<CloudGlyph dim />}
        title="Optional Provider"
        sub="Only when you opt in for heavier generation"
        pill={<Pill tone="purple">Your choice</Pill>}
        accent="#c4b6ff"
      />
    </div>

    {/* Bottom note */}
    <div
      style={{
        position: 'absolute',
        bottom: 22,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 11,
        color: 'rgba(255,255,255,0.42)',
        letterSpacing: 0.3,
      }}
    >
      Recovery audio stays in <span style={{ color: 'rgba(255,255,255,0.8)' }}>~/Library/Application Support/Reso2/</span> — never uploaded.
    </div>
  </div>
);

const PrivacyMockup = (props) => <PrivacyShowcase {...props} />;
export default PrivacyMockup;
