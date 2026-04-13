/**
 * MOCKUP SYNC: This file mirrors Reso2 macOS app UI for the marketing website.
 * When the corresponding app code changes, you MUST update this file too.
 * See /Users/yukungao/github/Reso2/CLAUDE.md "Website Mockup Sync" for the full mapping.
 *
 * App source of truth:
 * - SIDEBAR_ITEMS / ResoSettingsSidebar / ShowSidebarButton ← Reso2/Views/SettingsWindowView.swift (sidebar)
 * - SETTINGS_TABS / ResoTopTabBar / ResoWindowHeader        ← Reso2/Views/SettingsWindowView.swift (segmentSelector)
 * - ResoWindowShell (Home window structure)                 ← Reso2/Views/SettingsWindowView.swift (body)
 * - RESO_TOKENS (colors, spacing)                           ← Reso2/DesignSystem/LayoutTokens.swift
 */
import React from 'react';

/**
 * Reso2 mockup design tokens, derived from /Users/yukungao/github/Reso2 source
 * (LayoutTokens.swift, Typography.swift) and the three reference screenshots.
 */
export const RESO_TOKENS = {
  brand: '#5423e7',
  brandSoft: '#6d4dff',
  brandGlow: 'rgba(120, 80, 255, 0.35)',
  capsuleAccent: '#eda900',
  capsuleAccentLight: '#ffd966',
  workflowGreen: '#22c55e',
  workflowGreenSoft: 'rgba(34, 197, 94, 0.85)',
  bgDeep: '#08080a',
  bgWindow: '#0c0c0e',
  bgCanvas: '#0a0a0d',
  bgCard: '#16161a',
  bgCardElevated: '#1c1c20',
  border: 'rgba(255,255,255,0.07)',
  borderStrong: 'rgba(255,255,255,0.12)',
  textPrimary: 'rgba(255,255,255,0.95)',
  textSecondary: 'rgba(255,255,255,0.55)',
  textTertiary: 'rgba(255,255,255,0.32)',
  textDim: 'rgba(255,255,255,0.18)',
};

/** macOS traffic light row (red / yellow / green). */
export const TrafficLights = ({ size = 12, gap = 8 }) => (
  <div className="flex items-center" style={{ gap }}>
    <span style={{
      width: size, height: size, borderRadius: '50%', background: '#ff5f57',
      boxShadow: 'inset 0 0 0 0.5px rgba(0,0,0,0.2)'
    }} />
    <span style={{
      width: size, height: size, borderRadius: '50%', background: '#febc2e',
      boxShadow: 'inset 0 0 0 0.5px rgba(0,0,0,0.2)'
    }} />
    <span style={{
      width: size, height: size, borderRadius: '50%', background: '#28c840',
      boxShadow: 'inset 0 0 0 0.5px rgba(0,0,0,0.2)'
    }} />
  </div>
);

const TabIcon = ({ name }) => {
  const stroke = 'currentColor';
  switch (name) {
    case 'system':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M2 4.5h12M2 8h8M2 11.5h12" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="13" cy="8" r="1.2" stroke={stroke} strokeWidth="1.4" fill="none" />
        </svg>
      );
    case 'workflow':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 3v10l9-5z" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'indexing':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="3" width="12" height="9" rx="1.4" stroke={stroke} strokeWidth="1.3" fill="none" />
          <path d="M2 7h12M5 10h2" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case 'plan':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="5.5" stroke={stroke} strokeWidth="1.3" fill="none" />
          <path d="M8 5v3l2 1.5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

export const SETTINGS_TABS = [
  { id: 'system', label: 'System' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'indexing', label: 'Memory' },
  { id: 'plan', label: 'Plan & Usage' },
];

/**
 * Clickable pill-style top tab bar. Calls onChange(tabId) when a tab is tapped.
 */
export const ResoTopTabBar = ({ active = 'workflow', onChange, compact = false }) => {
  return (
    <div
      className="inline-flex items-center"
      style={{
        gap: compact ? 1 : 2,
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
      }}
    >
      {SETTINGS_TABS.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange?.(tab.id);
            }}
            className="flex items-center"
            style={{
              gap: compact ? 3 : 6,
              padding: compact ? '4px 6px' : '6px 12px',
              borderRadius: 8,
              background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: isActive ? RESO_TOKENS.textPrimary : RESO_TOKENS.textSecondary,
              fontSize: compact ? 10 : 12,
              fontWeight: isActive ? 600 : 500,
              letterSpacing: -0.1,
              transition: 'background 0.18s ease, color 0.18s ease',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.background = 'transparent';
            }}
          >
            <TabIcon name={tab.id} />
            <span style={{ whiteSpace: 'nowrap', lineHeight: 1.1 }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

/**
 * The full window header: traffic lights + center top tabs.
 * The right-side search + theme controls have been removed.
 */
export const ResoWindowHeader = ({
  activeTab = 'workflow',
  onTabChange,
  compact = false,
}) => (
  <div
    className="relative flex items-center"
    style={{
      height: compact ? 42 : 50,
      paddingLeft: compact ? 14 : 18,
      paddingRight: compact ? 10 : 14,
      borderBottom: `1px solid ${RESO_TOKENS.border}`,
      background: '#000000',
      flexShrink: 0,
    }}
  >
    <TrafficLights size={compact ? 10 : 12} gap={compact ? 6 : 8} />
    <div
      style={{
        position: 'absolute',
        left: compact ? 66 : 94,
        right: compact ? 12 : 16,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div style={{ pointerEvents: 'auto' }}>
        <ResoTopTabBar active={activeTab} onChange={onTabChange} compact={compact} />
      </div>
    </div>
  </div>
);

/**
 * The left sidebar shown in the Settings window: Search / Settings vertical buttons + Pro badge.
 */
export const SIDEBAR_ITEMS = [
  { id: 'nebula', label: 'Nebula' },
  { id: 'settings', label: 'Settings' },
];

const SidebarIcon = ({ id, size }) => {
  switch (id) {
    case 'nebula':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path d="M10 2.5l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5L10 2.5z" fill="currentColor" opacity="0.92" />
          <circle cx="15" cy="14" r="1.1" fill="currentColor" opacity="0.7" />
          <circle cx="5" cy="14.5" r="0.7" fill="currentColor" opacity="0.55" />
          <circle cx="16" cy="6" r="0.6" fill="currentColor" opacity="0.55" />
        </svg>
      );
    case 'settings':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2.5l1.4 2 2.4.2 1 2.2 2 1.3-.7 2.3 1 2.2-2 1.3-1 2.2-2.4.2L10 18l-1.4-2-2.4-.2-1-2.2-2-1.3.7-2.3-1-2.2 2-1.3 1-2.2 2.4-.2L10 2.5z"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
      );
    default:
      return null;
  }
};

export const ResoSettingsSidebar = ({
  activeItem = 'settings',
  onItemChange,
  compact = false,
  onHide,
}) => {
  const iconSize = compact ? 16 : 18;
  return (
    <div
      className="flex flex-col"
      style={{
        width: compact ? 64 : 86,
        flexShrink: 0,
        borderRight: `1px solid ${RESO_TOKENS.border}`,
        // Pure black to match the Nebula visualization background.
        background: '#000000',
        padding: compact ? '8px 8px 8px 8px' : '12px 10px 12px 10px',
      }}
    >
      {/* Hide sidebar chevron — collapses panel for immersive mode */}
      {onHide && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onHide(); }}
          aria-label="Hide sidebar"
          style={{
            width: '100%',
            padding: compact ? '4px 0' : '6px 0',
            marginBottom: compact ? 6 : 8,
            background: 'transparent',
            border: 'none',
            color: RESO_TOKENS.textTertiary,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 8,
            transition: 'color 0.18s, background 0.18s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = RESO_TOKENS.textPrimary;
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = RESO_TOKENS.textTertiary;
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <div className="flex flex-col" style={{ gap: 4 }}>
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = item.id === activeItem;
          return (
            <button
              key={item.id}
              type="button"
              onClick={(e) => { e.stopPropagation(); onItemChange?.(item.id); }}
              className="flex flex-col items-center"
              style={{
                padding: compact ? '7px 0 5px 0' : '10px 0 8px 0',
                borderRadius: 10,
                gap: 3,
                background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                color: isActive ? RESO_TOKENS.textPrimary : RESO_TOKENS.textSecondary,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.18s, color 0.18s',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = 'transparent';
              }}
            >
              <SidebarIcon id={item.id} size={iconSize} />
              <span style={{ fontSize: compact ? 9 : 11, fontWeight: 500, letterSpacing: -0.1 }}>{item.label}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-auto">
        <div
          className="flex items-center justify-center"
          style={{
            padding: compact ? '3px 0' : '4px 0',
            background: RESO_TOKENS.brand,
            borderRadius: 6,
            color: '#ffffff',
            fontSize: compact ? 9 : 10,
            fontWeight: 700,
            letterSpacing: 0.6,
            boxShadow: '0 6px 18px -8px rgba(84,35,231,0.6)',
          }}
        >
          PRO
        </div>
      </div>
    </div>
  );
};

/** Floating button to bring the sidebar back when hidden. */
export const ShowSidebarButton = ({ onClick, compact = false }) => (
  <button
    type="button"
    onClick={(e) => { e.stopPropagation(); onClick?.(); }}
    aria-label="Show sidebar"
    style={{
      position: 'absolute',
      left: compact ? 10 : 14,
      top: compact ? 50 : 60,
      width: compact ? 26 : 30,
      height: compact ? 26 : 30,
      borderRadius: 8,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: RESO_TOKENS.textSecondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontFamily: 'inherit',
      backdropFilter: 'blur(12px)',
      zIndex: 5,
      transition: 'background 0.18s, color 0.18s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
      e.currentTarget.style.color = RESO_TOKENS.textPrimary;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
      e.currentTarget.style.color = RESO_TOKENS.textSecondary;
    }}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

/**
 * Subtle dotted background used inside the workflow / indexing canvas.
 * Background is pure black to match the Nebula visualization for visual unity.
 */
export const DottedBackdrop = ({ children, style = {} }) => (
  <div
    style={{
      position: 'relative',
      flex: 1,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
      backgroundSize: '14px 14px',
      backgroundColor: '#000000',
      overflow: 'hidden',
      ...style,
    }}
  >
    {children}
  </div>
);

/**
 * Outer "stage" wrapper that gives the window its hovering / glow look in hero contexts.
 * Children should be the window itself.
 */
export const ResoStage = ({ children, glow = true, padding = 22, radius = 24 }) => (
  <div
    className="relative mx-auto"
    style={{
      background: '#050507',
      padding,
      borderRadius: radius,
      boxShadow: '0 30px 80px -30px rgba(0,0,0,0.7)',
    }}
  >
    {glow && (
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: -40,
          background: `radial-gradient(circle at 50% 30%, ${RESO_TOKENS.brandGlow} 0%, transparent 60%)`,
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    )}
    <div className="relative" style={{ zIndex: 1 }}>{children}</div>
  </div>
);

/**
 * Reso2 Home window shell.
 *
 * Two modes:
 *   - Settings mode (showHeader=true, default): top tab bar visible,
 *     content sits below it.
 *   - Nebula mode (showHeader=false): segment selector hidden, content
 *     extends all the way to the top of the window so the visualization
 *     fills the entire right side. Traffic lights overlay on top of content.
 */
export const ResoWindowShell = ({
  activeTab = 'workflow',
  onTabChange,
  activeSidebar = 'settings',
  onSidebarChange,
  sidebarHidden = false,
  onSidebarHide,
  onSidebarShow,
  showHeader = true,
  width = 1080,
  height = 660,
  responsive = false,
  children,
}) => {
  const isResponsive = responsive || width === '100%';
  const compact = isResponsive;
  const headerHeight = compact ? 42 : 50;
  const trafficClearance = compact ? 32 : 38;

  return (
    <div
      style={{
        width,
        height,
        // Pure black to match the Nebula visualization — single unified
        // dark surface across the whole Home window.
        background: '#000000',
        borderRadius: 14,
        border: `1px solid ${RESO_TOKENS.borderStrong}`,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.04), 0 18px 60px -20px rgba(0,0,0,0.85)',
        overflow: 'hidden',
        color: RESO_TOKENS.textPrimary,
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {showHeader ? (
        <>
          <ResoWindowHeader activeTab={activeTab} onTabChange={onTabChange} compact={compact} />
          <div className="flex" style={{ flex: 1, minHeight: 0, position: 'relative' }}>
            {!sidebarHidden && (
              <ResoSettingsSidebar
                activeItem={activeSidebar}
                onItemChange={onSidebarChange}
                compact={compact}
                onHide={onSidebarHide}
              />
            )}
            {sidebarHidden && onSidebarShow && (
              <ShowSidebarButton onClick={onSidebarShow} compact={compact} />
            )}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
              {children}
            </div>
          </div>
        </>
      ) : (
        // Nebula / immersive mode: content fills the full window height.
        // Traffic lights overlay on top so the visualization reaches the top.
        <div className="flex" style={{ flex: 1, minHeight: 0, position: 'relative' }}>
          {!sidebarHidden && (
            <div style={{ paddingTop: trafficClearance, display: 'flex', flexDirection: 'column' }}>
              <ResoSettingsSidebar
                activeItem={activeSidebar}
                onItemChange={onSidebarChange}
                compact={compact}
                onHide={onSidebarHide}
              />
            </div>
          )}
          {sidebarHidden && onSidebarShow && (
            <ShowSidebarButton onClick={onSidebarShow} compact={compact} />
          )}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
            {children}
          </div>
          {/* Traffic lights overlay — sits above the immersive content */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: trafficClearance,
              paddingLeft: compact ? 14 : 18,
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          >
            <TrafficLights size={compact ? 10 : 12} gap={compact ? 6 : 8} />
          </div>
        </div>
      )}
    </div>
  );
};
