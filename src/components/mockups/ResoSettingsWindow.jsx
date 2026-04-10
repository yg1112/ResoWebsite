/**
 * MOCKUP SYNC: This file mirrors Reso2 macOS app UI for the marketing website.
 * When the corresponding app code changes, you MUST update this file too.
 * See /Users/yukungao/github/Reso2/CLAUDE.md "Website Mockup Sync" for the full mapping.
 *
 * App source of truth:
 * - SystemContent     ← Reso2/Views/SettingsWindowView.swift (System tab rows: Launch at Login,
 *                       Sound Effects, Microphone Priority, Accessibility, Recording Shortcut,
 *                       Nebula Shortcut, Indicator Style, Pause Media)
 * - PlanUsageContent  ← Reso2/Views/StatusTabView.swift (Plan & Usage)
 * - NebulaContent     ← Reso2/Views/NebulaTabView.swift (in-window WKWebView nebula)
 * - sidebar mode routing ← Reso2/Views/SettingsWindowView.swift (selectedSidebarMode)
 */
import React, { useState, lazy, Suspense } from 'react';
import { ResoWindowShell, RESO_TOKENS, DottedBackdrop } from './ResoMockupBase';
import { WorkflowContent } from './WorkflowMockup';
import { IndexingContent } from './IndexingMockup';

const NebulaShowcase = lazy(() =>
  import('./NebulaMockup').then((m) => ({ default: m.NebulaShowcase })),
);

/**
 * Stateful "Home" window for Reso2.
 *
 * Two layers of navigation:
 *   1. Sidebar — Search / Nebula / Settings
 *   2. Settings tabs — System / Workflow / Mindscape / Plan & Usage
 *
 * Plus a hide-sidebar button for immersive Nebula viewing.
 */

/* ─────────────────────────────────────────────────────────── */
/* System content — matches the real screenshot                */
/* ─────────────────────────────────────────────────────────── */

const SectionLabel = ({ children, marginTop = 0 }) => (
  <div
    style={{
      fontSize: 11,
      fontWeight: 600,
      color: RESO_TOKENS.textTertiary,
      letterSpacing: 0.5,
      marginTop,
      marginBottom: 12,
    }}
  >
    {children}
  </div>
);

const SystemRow = ({ icon, title, subtitle, right }) => (
  <div
    className="flex items-center"
    style={{
      padding: '12px 4px',
      gap: 14,
      borderBottom: `1px solid ${RESO_TOKENS.border}`,
    }}
  >
    {icon && (
      <div
        className="flex items-center justify-center"
        style={{
          width: 26,
          height: 26,
          borderRadius: 7,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: RESO_TOKENS.textSecondary,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
    )}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: RESO_TOKENS.textPrimary, letterSpacing: -0.1 }}>
        {title}
      </div>
      {subtitle && (
        <div style={{ fontSize: 10, color: RESO_TOKENS.textTertiary, marginTop: 2 }}>
          {subtitle}
        </div>
      )}
    </div>
    {right}
  </div>
);

const Toggle = ({ on }) => (
  <div
    style={{
      width: 30,
      height: 17,
      borderRadius: 999,
      background: on ? '#22c55e' : 'rgba(255,255,255,0.16)',
      position: 'relative',
      flexShrink: 0,
      transition: 'background 0.2s',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 2,
        left: on ? 15 : 2,
        width: 13,
        height: 13,
        borderRadius: '50%',
        background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        transition: 'left 0.2s',
      }}
    />
  </div>
);

const Pill = ({ children, accent = 'neutral' }) => {
  const styles =
    accent === 'green'
      ? { background: 'rgba(34,197,94,0.14)', border: '1px solid rgba(34,197,94,0.4)', color: '#86efac' }
      : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: RESO_TOKENS.textPrimary };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '4px 10px',
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 500,
        ...styles,
      }}
    >
      {children}
    </span>
  );
};

const Dropdown = ({ children, leadingIcon }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 8,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: RESO_TOKENS.textPrimary,
      fontSize: 11,
      fontWeight: 500,
    }}
  >
    {leadingIcon}
    <span>{children}</span>
    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Segmented = ({ options, value, onChange }) => (
  <div
    className="flex"
    style={{
      padding: 2,
      borderRadius: 8,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      gap: 1,
    }}
  >
    {options.map((opt) => {
      const isActive = opt.id === value;
      return (
        <button
          key={opt.id}
          type="button"
          onClick={(e) => { e.stopPropagation(); onChange?.(opt.id); }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '4px 9px',
            borderRadius: 6,
            background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
            border: 'none',
            color: isActive ? RESO_TOKENS.textPrimary : RESO_TOKENS.textSecondary,
            fontSize: 10,
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {opt.icon}
          {opt.label}
        </button>
      );
    })}
  </div>
);

const PowerIcon = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5v5.5M3.6 3.4a5 5 0 1 0 6.8 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
const SoundIcon = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 5h2.5L8 2.5v9L4.5 9H2V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" /><path d="M10 5a3 3 0 0 1 0 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
const MicIcon2 = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="5" y="2" width="4" height="6.5" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" /><path d="M3 7a4 4 0 0 0 8 0M7 11v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
const A11yIcon = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="3.5" r="1.4" fill="currentColor" /><path d="M2.5 5l4 1 4-1M7 6v3.5l-1.5 3M7 9.5l1.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
const KeyIcon = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3.5" width="11" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M3.5 5.5h.01M5 5.5h.01M6.5 5.5h.01M8 5.5h.01M9.5 5.5h.01M3.5 8h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>;
const SparklesIcon = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5l1 2.5 2.5 1-2.5 1L7 8.5 6 5l-2.5-1L6 3l1-1.5z" fill="currentColor" /><circle cx="11" cy="9.5" r="0.7" fill="currentColor" /><circle cx="3" cy="10" r="0.5" fill="currentColor" /></svg>;
const IndicatorIcon = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="2" y="6" width="10" height="2" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none" /></svg>;
const PauseIcon = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="4" y="3" width="2.2" height="8" rx="0.5" fill="currentColor" /><rect x="7.8" y="3" width="2.2" height="8" rx="0.5" fill="currentColor" /></svg>;
const PlayIcon = () => <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" /><path d="M5.8 4.8L9.2 7l-3.4 2.2V4.8z" fill="rgba(255,255,255,0.78)" /></svg>;

const SystemContent = () => {
  const [indicatorStyle, setIndicatorStyle] = useState('island');
  const [pauseMedia, setPauseMedia] = useState(true);
  const [launchAtLogin, setLaunchAtLogin] = useState(false);
  const [menuBarRecent, setMenuBarRecent] = useState(5);

  return (
    <DottedBackdrop>
      <div style={{ padding: '20px 28px 20px 28px', maxHeight: '100%', overflow: 'auto' }}>
        <p
          style={{
            fontSize: 12,
            color: RESO_TOKENS.textSecondary,
            marginBottom: 18,
            lineHeight: 1.55,
          }}
        >
          Manage capture modes, audio devices, and general app behavior.
        </p>

        <SectionLabel>PREFERENCE</SectionLabel>

        <SystemRow
          icon={<PowerIcon />}
          title="Launch at Login"
          right={
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLaunchAtLogin((v) => !v); }}
              style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <Toggle on={launchAtLogin} />
            </button>
          }
        />

        <SystemRow
          icon={<SoundIcon />}
          title="Sound Effects"
          right={
            <div className="flex items-center" style={{ gap: 6 }}>
              <Dropdown>Bottle</Dropdown>
              <PlayIcon />
            </div>
          }
        />

        <SystemRow
          icon={<MicIcon2 />}
          title="Microphone Priority"
          subtitle="Drag to reorder · Auto-selects best available"
          right={<Pill accent="green"><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e' }} />Shure MV7+ ▾</Pill>}
        />

        <SystemRow
          icon={<A11yIcon />}
          title="Accessibility"
          subtitle="Auto-paste and app context"
          right={<Pill accent="green"><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e' }} />Granted</Pill>}
        />

        <SectionLabel marginTop={18}>DICTATION</SectionLabel>

        <SystemRow
          icon={<KeyIcon />}
          title="Recording Shortcut"
          subtitle="Start or stop capture from anywhere."
          right={
            <div className="flex items-center" style={{ gap: 4 }}>
              <Pill>Hold</Pill>
              <Dropdown>⌥ Option</Dropdown>
            </div>
          }
        />

        <SystemRow
          icon={<SparklesIcon />}
          title="Nebula Shortcut"
          subtitle="Double-tap to toggle the Nebula desktop view."
          right={<Dropdown>Double-tap Control</Dropdown>}
        />

        <SystemRow
          icon={<IndicatorIcon />}
          title="Indicator Style"
          subtitle="Where recording status is displayed"
          right={
            <Segmented
              value={indicatorStyle}
              onChange={setIndicatorStyle}
              options={[
                { id: 'float', label: 'Float', icon: <svg width="11" height="9" viewBox="0 0 14 11" fill="none"><rect x="3" y="3" width="8" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg> },
                { id: 'island', label: 'Island', icon: <svg width="11" height="9" viewBox="0 0 14 11" fill="none"><path d="M3 1h8v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V1z" fill="currentColor" /></svg> },
              ]}
            />
          }
        />

        <SystemRow
          icon={<PauseIcon />}
          title="Pause Media While Speaking"
          subtitle="Auto-pause music/video during recording"
          right={
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setPauseMedia((v) => !v); }}
              style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <Toggle on={pauseMedia} />
            </button>
          }
        />

        <SystemRow
          icon={<svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <rect x="1.5" y="3.5" width="11" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.3" fill="none" />
            <path d="M3.5 6h7M3.5 8h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>}
          title="Menu Bar Recent Captures"
          subtitle="How many recent dictations show in the menu bar"
          right={
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 500, color: RESO_TOKENS.textPrimary, minWidth: 18, textAlign: 'right' }}>
                {menuBarRecent}
              </span>
              <div className="flex flex-col" style={{ gap: 2 }}>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setMenuBarRecent((v) => Math.min(20, v + 1)); }}
                  style={{
                    width: 20,
                    height: 11,
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                  }}
                >
                  <svg width="7" height="5" viewBox="0 0 8 6" fill="none">
                    <path d="M1 5l3-3 3 3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setMenuBarRecent((v) => Math.max(1, v - 1)); }}
                  style={{
                    width: 20,
                    height: 11,
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                  }}
                >
                  <svg width="7" height="5" viewBox="0 0 8 6" fill="none">
                    <path d="M1 1l3 3 3-3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          }
        />
      </div>
    </DottedBackdrop>
  );
};

const PlanUsageContent = () => {
  const usage = 1840;
  const total = 4000;
  const pct = (usage / total) * 100;

  const sectionLabel = (text) => (
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        color: RESO_TOKENS.textTertiary,
        letterSpacing: 0.5,
        marginBottom: 12,
      }}
    >
      {text}
    </div>
  );

  const divider = (
    <div
      style={{
        height: 1,
        background: RESO_TOKENS.border,
        margin: '20px 0',
      }}
    />
  );

  return (
    <DottedBackdrop>
      <div style={{ padding: '20px 28px 28px 28px', maxHeight: '100%', overflow: 'auto' }}>
        <p style={{ fontSize: 12, color: RESO_TOKENS.textSecondary, marginBottom: 22, lineHeight: 1.55 }}>
          Manage your plan and track monthly usage.
        </p>

        {/* SECTION 1: ABOUT */}
        {sectionLabel('ABOUT')}
        <div className="flex items-center" style={{ gap: 16, marginBottom: 4 }}>
          <div
            className="flex items-center justify-center"
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: 'rgba(84,35,231,0.14)',
              border: '1px solid rgba(84,35,231,0.34)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M16 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" fill={RESO_TOKENS.brand} opacity="0.95" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="flex items-baseline" style={{ gap: 8 }}>
              <span style={{ fontSize: 18, fontWeight: 600, color: RESO_TOKENS.textPrimary }}>Reso</span>
              <span style={{ fontSize: 11, color: RESO_TOKENS.textTertiary, fontFamily: '"SF Mono", monospace' }}>1.0 (42a885)</span>
            </div>
            <div className="flex items-center" style={{ gap: 6, marginTop: 8 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: RESO_TOKENS.textPrimary,
                }}
              >
                Check for Updates
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: RESO_TOKENS.textPrimary,
                }}
              >
                License Manager
              </span>
            </div>
          </div>
        </div>

        {divider}

        {/* SECTION 2: MONTHLY USAGE */}
        {sectionLabel('MONTHLY USAGE')}
        <div style={{ marginBottom: 6 }}>
          <div className="flex items-baseline" style={{ gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 600, color: RESO_TOKENS.textPrimary, letterSpacing: -0.5 }}>
              {(pct / 4).toFixed(1)}%
            </span>
            <span style={{ fontSize: 12, color: RESO_TOKENS.textTertiary }}>
              used this month
            </span>
          </div>
          <div
            style={{
              height: 3,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.06)',
              overflow: 'hidden',
              width: '50%',
            }}
          >
            <div
              style={{
                width: `${pct / 4}%`,
                height: '100%',
                background: `linear-gradient(90deg, ${RESO_TOKENS.brand}, ${RESO_TOKENS.brandSoft})`,
                borderRadius: 999,
              }}
            />
          </div>
          <div style={{ fontSize: 10, color: RESO_TOKENS.textTertiary, marginTop: 8 }}>
            Only tracks requests processed by Reso Engine.
          </div>
        </div>

        {divider}

        {/* SECTION 3: ENGINE CONFIGURATION */}
        {sectionLabel('ENGINE CONFIGURATION')}
        {[
          { label: 'Reso Engine', tier: 'Off', sub: 'Fully managed speech, text, and embeddings.', toneOff: true },
          { label: 'Bring Your Own API', tier: 'STT: Groq · 1 text', sub: 'Connect your own API keys and providers.' },
        ].map((row, i) => (
          <div
            key={i}
            className="flex items-center"
            style={{
              height: 44,
              padding: '0 4px',
              borderBottom: i < 1 ? `1px solid ${RESO_TOKENS.border}` : '1px solid transparent',
              gap: 12,
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: RESO_TOKENS.textPrimary }}>
                {row.label}
              </div>
              <div style={{ fontSize: 10, color: RESO_TOKENS.textTertiary, marginTop: 1 }}>
                {row.sub}
              </div>
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                padding: '3px 8px',
                borderRadius: 6,
                background: row.toneOff ? 'rgba(255,255,255,0.04)' : 'rgba(84,35,231,0.18)',
                border: row.toneOff ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(84,35,231,0.32)',
                color: row.toneOff ? RESO_TOKENS.textTertiary : '#c4b6ff',
              }}
            >
              {row.tier}
            </span>
          </div>
        ))}

        {divider}

        {/* SECTION 4: PRIVACY & DIAGNOSTICS */}
        {sectionLabel('PRIVACY & DIAGNOSTICS')}
        <div style={{ fontSize: 12, fontWeight: 500, color: RESO_TOKENS.textPrimary, marginBottom: 4 }}>
          Share anonymous analytics
        </div>
        <div style={{ fontSize: 10, color: RESO_TOKENS.textTertiary, marginBottom: 12, lineHeight: 1.5 }}>
          Anonymous app stats only — your files are never uploaded.
        </div>
        <div className="flex items-center" style={{ gap: 6 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: '5px 12px',
              borderRadius: 6,
              background: 'rgba(255,140,0,0.18)',
              border: '1px solid rgba(255,140,0,0.4)',
              color: '#ffb878',
            }}
          >
            Run Diagnostics
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              padding: '5px 10px',
              borderRadius: 6,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: RESO_TOKENS.textSecondary,
            }}
          >
            More ▾
          </span>
        </div>
      </div>
    </DottedBackdrop>
  );
};

/* ─────────────────────────────────────────────────────────── */
/* Nebula content — embedded NebulaShowcase, fills the area    */
/* ─────────────────────────────────────────────────────────── */

const NebulaContent = () => (
  <div style={{ flex: 1, position: 'relative', background: '#000', overflow: 'hidden' }}>
    <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#000' }} />}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <NebulaShowcase width={1080} height={520} showHint />
      </div>
    </Suspense>
  </div>
);

const TAB_CONTENTS = {
  system: SystemContent,
  workflow: WorkflowContent,
  indexing: IndexingContent,
  plan: PlanUsageContent,
};

export const ResoSettingsWindow = ({
  defaultTab = 'workflow',
  defaultSidebar = 'settings',
  width = '100%',
  height = '100%',
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [activeSidebar, setActiveSidebar] = useState(defaultSidebar);
  const [sidebarHidden, setSidebarHidden] = useState(false);

  // The top tab bar only makes sense in Settings sidebar mode
  const showHeader = activeSidebar === 'settings';

  let content;
  if (activeSidebar === 'nebula') {
    content = <NebulaContent />;
  } else {
    const TabContent = TAB_CONTENTS[activeTab] || WorkflowContent;
    content = <TabContent />;
  }

  return (
    <ResoWindowShell
      activeTab={activeTab}
      onTabChange={setActiveTab}
      activeSidebar={activeSidebar}
      onSidebarChange={setActiveSidebar}
      sidebarHidden={sidebarHidden}
      onSidebarHide={() => setSidebarHidden(true)}
      onSidebarShow={() => setSidebarHidden(false)}
      showHeader={showHeader}
      width={width}
      height={height}
      responsive
    >
      {content}
    </ResoWindowShell>
  );
};

export default ResoSettingsWindow;
