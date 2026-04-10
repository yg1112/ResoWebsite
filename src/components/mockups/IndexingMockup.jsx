/**
 * MOCKUP SYNC: This file mirrors Reso2 macOS app UI for the marketing website.
 * When the corresponding app code changes, you MUST update this file too.
 * See /Users/yukungao/github/Reso2/CLAUDE.md "Website Mockup Sync" for the full mapping.
 *
 * App source of truth:
 * - IndexingContent / FOLDERS ← Reso2/Views/IndexingTabView.swift
 *   (Memory Status card with progress, Folders list with checkboxes, Speech Learning toggle,
 *   Sync All button)
 */
import React, { useState, useRef, useEffect } from 'react';
import {
  RESO_TOKENS,
  ResoWindowShell,
  DottedBackdrop,
} from './ResoMockupBase';

/**
 * High-fidelity recreation of Reso2's Settings → Indexing page.
 * Reverse-engineered from the original macOS app screenshot.
 * Sample folder data is fictional (PII safe).
 */

const RESO_PURPLE = RESO_TOKENS.brand;

/** Indexing-status icon (drive). */
const DriveGlyph = ({ size = 22 }) => (
  <div
    className="flex items-center justify-center"
    style={{
      width: 38,
      height: 38,
      borderRadius: 10,
      background: 'rgba(84,35,231,0.16)',
      border: `1px solid rgba(84,35,231,0.34)`,
    }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 9l1.6-3.4A2 2 0 0 1 8.5 4.5h7a2 2 0 0 1 1.9 1.1L19 9"
        stroke={RESO_PURPLE}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="3.5" y="9" width="17" height="9.5" rx="2.4" stroke={RESO_PURPLE} strokeWidth="1.8" fill="none" />
      <circle cx="16.5" cy="13.7" r="1" fill={RESO_PURPLE} />
    </svg>
  </div>
);

const FolderGlyph = ({ size = 16, color = 'rgba(255,255,255,0.6)' }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <path
      d="M2 5.5a1.5 1.5 0 0 1 1.5-1.5h3.4l1.4 1.6h6.2A1.5 1.5 0 0 1 16 7.1V13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 2 13V5.5z"
      stroke={color}
      strokeWidth="1.4"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <div
    className="flex items-center justify-center"
    style={{
      width: 18,
      height: 18,
      borderRadius: 9,
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.18)',
    }}
  >
    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
      <path d="M2.4 6.2l2.4 2.3 4.8-5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

/** Interactive checkbox — purple when checked. */
const Checkbox = ({ checked }) => (
  <div
    className="flex items-center justify-center"
    style={{
      width: 18,
      height: 18,
      borderRadius: 9,
      background: checked ? RESO_TOKENS.brand : 'rgba(255,255,255,0.04)',
      border: checked
        ? '1px solid rgba(196,182,255,0.55)'
        : '1px solid rgba(255,255,255,0.18)',
      transition: 'background 0.18s ease, border-color 0.18s ease',
      boxShadow: checked ? '0 0 12px rgba(84,35,231,0.4)' : 'none',
    }}
  >
    {checked && (
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path d="M2.4 6.2l2.4 2.3 4.8-5" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </div>
);

const RefreshIcon = () => (
  <div
    className="flex items-center justify-center"
    style={{
      width: 22,
      height: 22,
      color: RESO_TOKENS.textTertiary,
    }}
  >
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
      <path
        d="M11.5 5.5A4.5 4.5 0 1 0 12 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M11.6 2.6v3.1h-3.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const TrashIcon = ({ color = 'inherit' }) => (
  <div
    className="flex items-center justify-center"
    style={{
      width: 22,
      height: 22,
      color,
    }}
  >
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
      <path d="M3 4h8M5.5 4V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1M4 4l.6 7.2a1 1 0 0 0 1 .9h2.8a1 1 0 0 0 1-.9L10 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  </div>
);

const PillButton = ({ children, kind = 'default' }) => {
  const styles = kind === 'danger'
    ? {
      background: 'rgba(239, 68, 68, 0.12)',
      border: '1px solid rgba(239, 68, 68, 0.34)',
      color: '#fca5a5',
    }
    : {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: RESO_TOKENS.textPrimary,
    };
  return (
    <div
      className="inline-flex items-center"
      style={{
        gap: 6,
        padding: '5px 12px',
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 500,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

const SyncIcon = ({ color = 'currentColor' }) => (
  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
    <path d="M2 7a5 5 0 0 1 8.5-3.5L13 6" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
    <path d="M13 2v4h-4" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7a5 5 0 0 1-8.5 3.5L1 8" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
    <path d="M1 12V8h4" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Toggle = ({ on = true }) => (
  <div
    style={{
      width: 34,
      height: 19,
      borderRadius: 999,
      background: on ? RESO_TOKENS.workflowGreen : 'rgba(255,255,255,0.18)',
      position: 'relative',
      transition: 'background 0.25s',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 2,
        left: on ? 17 : 2,
        width: 15,
        height: 15,
        borderRadius: '50%',
        background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        transition: 'left 0.25s',
      }}
    />
  </div>
);

const FOLDERS = [
  {
    id: 'documents',
    title: 'Documents',
    badge: 'Obsidian',
    subtitle: '3,062 indexed · 434 discovered',
    actions: ['refresh', 'unlink', 'trash'],
    checked: true,
  },
  {
    id: 'evaluation',
    title: 'evaluation',
    subtitle: '11 indexed · 11 discovered',
    actions: ['refresh', 'unlink', 'trash'],
    checked: true,
  },
  {
    id: 'apple-notes',
    title: 'Apple Notes',
    subtitle: 'Ready to import',
    actions: ['import'],
  },
];

const SectionHeading = ({ children, marginTop = 28 }) => (
  <div
    style={{
      fontSize: 13,
      fontWeight: 700,
      color: RESO_TOKENS.textPrimary,
      marginTop,
      marginBottom: 10,
      letterSpacing: -0.1,
    }}
  >
    {children}
  </div>
);

export const IndexingContent = () => {
  // Per-folder checkbox state
  const [folderState, setFolderState] = useState({
    documents: true,
    evaluation: true,
    'apple-notes': false,
  });
  // Sync progress: starts at 100, animates 0 → 100 when Sync All is clicked
  const [syncPct, setSyncPct] = useState(100);
  const [isSyncing, setIsSyncing] = useState(false);
  const syncTimerRef = useRef(null);

  useEffect(() => () => {
    if (syncTimerRef.current) clearInterval(syncTimerRef.current);
  }, []);

  const startSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncPct(0);
    let pct = 0;
    syncTimerRef.current = setInterval(() => {
      pct += 4 + Math.random() * 6;
      if (pct >= 100) {
        pct = 100;
        clearInterval(syncTimerRef.current);
        syncTimerRef.current = null;
        setSyncPct(100);
        setIsSyncing(false);
        return;
      }
      setSyncPct(pct);
    }, 90);
  };

  const toggleFolder = (id) => {
    setFolderState((s) => ({ ...s, [id]: !s[id] }));
  };

  const totalFiles = 3073;
  const filesIndexed = Math.round(totalFiles * (syncPct / 100));
  const folderCount = Object.values(folderState).filter((v) => v && v !== false).length;

  return (
    <DottedBackdrop>
      <div style={{ padding: '20px 28px 24px 28px', maxHeight: '100%', overflow: 'hidden' }}>
        {/* Crisp tab description (matches the other tabs) */}
        <p
          style={{
            fontSize: 12,
            color: RESO_TOKENS.textSecondary,
            marginBottom: 18,
            lineHeight: 1.55,
          }}
        >
          Embed files for contextual understanding and knowledge. All files stay on your Mac.
        </p>

        {/* Memory Status — flat, no card wrapper. Status text on the left,
            Sync All / Delete All buttons aligned right. Progress bar below
            is the hero element. */}
        <div>
          <div className="flex items-center" style={{ gap: 14 }}>
            <DriveGlyph />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: RESO_TOKENS.textPrimary, letterSpacing: -0.1 }}>
                Memory Status
              </div>
              <div style={{ fontSize: 11, color: RESO_TOKENS.textTertiary, marginTop: 2 }}>
                {Math.round(syncPct)}% · {filesIndexed.toLocaleString()} of {totalFiles.toLocaleString()} files · {folderCount} folders
              </div>
            </div>
            {/* Action buttons inline right */}
            <div className="flex items-center" style={{ gap: 6 }}>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); startSync(); }}
                style={{
                  background: 'transparent',
                  border: isSyncing ? '1px solid rgba(84,35,231,0.5)' : '1px solid rgba(255,255,255,0.14)',
                  color: isSyncing ? '#c4b6ff' : RESO_TOKENS.textSecondary,
                  padding: '4px 10px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.18s ease',
                }}
              >
                <SyncIcon />
                <span>{isSyncing ? `Syncing… ${Math.round(syncPct)}%` : 'Sync All'}</span>
              </button>
              <PillButton kind="danger">
                <TrashIcon />
                <span>Delete All</span>
              </PillButton>
            </div>
          </div>
          {/* Progress bar — the hero element */}
          <div
            style={{
              marginTop: 14,
              height: 4,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${syncPct}%`,
                height: '100%',
                background: `linear-gradient(90deg, ${RESO_PURPLE}, ${RESO_TOKENS.brandSoft})`,
                boxShadow: `0 0 18px rgba(84,35,231,0.55)`,
                borderRadius: 999,
                transition: 'width 0.16s ease-out',
              }}
            />
          </div>
        </div>

      {/* Folders section — uppercase label, matches the System tab style */}
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: RESO_TOKENS.textTertiary,
          letterSpacing: 0.5,
          marginTop: 22,
          marginBottom: 12,
        }}
      >
        FOLDERS
      </div>

      {/* Folder add input — dashed border signals "tap to fill" without
          adding another solid card to the page. Browse button sits OUTSIDE
          the dashed border, matching the real app. */}
      <div className="flex items-center" style={{ gap: 8, marginBottom: 8 }}>
        <div
          className="flex items-center"
          style={{
            flex: 1,
            height: 34,
            borderRadius: 8,
            background: 'transparent',
            border: `1px dashed ${RESO_TOKENS.borderStrong}`,
            padding: '0 12px',
            gap: 8,
          }}
        >
          <FolderGlyph color="rgba(255,255,255,0.35)" size={12} />
          <span style={{ fontSize: 12, color: RESO_TOKENS.textTertiary, flex: 1 }}>
            Add a folder path or browse…
          </span>
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            width: 30,
            height: 30,
            color: RESO_TOKENS.textTertiary,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
            <path
              d="M2 5.5a1.5 1.5 0 0 1 1.5-1.5h3.4l1.4 1.6h6.2A1.5 1.5 0 0 1 16 7.1V13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 2 13V5.5z"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
              strokeLinejoin="round"
            />
            <path d="M9 9v3M7.5 10.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Folder rows — completely flat. No row backgrounds. The only visual
          affordance is the checkbox glyph (purple when checked). Rows are
          separated by hairline dividers between items only. */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {FOLDERS.map((folder, idx) => {
          const checked = !!folderState[folder.id];
          return (
            <div
              key={folder.id}
              className="flex items-center"
              style={{
                height: 44,
                background: 'transparent',
                borderBottom: idx < FOLDERS.length - 1
                  ? `1px solid ${RESO_TOKENS.border}`
                  : '1px solid transparent',
                padding: '0 4px',
                gap: 10,
                transition: 'background 0.18s ease',
              }}
            >
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); toggleFolder(folder.id); }}
                aria-pressed={checked}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
                <Checkbox checked={checked} />
              </button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="flex items-center" style={{ gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: RESO_TOKENS.textPrimary }}>
                    {folder.title}
                  </span>
                  {folder.badge && (
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 600,
                        padding: '1px 5px',
                        borderRadius: 4,
                        background: 'rgba(84,35,231,0.18)',
                        border: '1px solid rgba(84,35,231,0.32)',
                        color: '#c4b6ff',
                        letterSpacing: 0.2,
                      }}
                    >
                      {folder.badge}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 10, color: RESO_TOKENS.textTertiary, marginTop: 1 }}>
                  {folder.subtitle}
                </div>
              </div>
              {folder.actions.includes('refresh') && <RefreshIcon />}
              {folder.actions.includes('unlink') && (
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: RESO_TOKENS.textTertiary,
                    padding: '4px 8px',
                  }}
                >
                  Unlink
                </div>
              )}
              {folder.actions.includes('trash') && <TrashIcon color={RESO_TOKENS.textTertiary} />}
              {folder.actions.includes('import') && (
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: RESO_PURPLE,
                    padding: '4px 9px',
                  }}
                >
                  Import
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: RESO_TOKENS.textTertiary,
          letterSpacing: 0.5,
          marginTop: 22,
          marginBottom: 12,
        }}
      >
        SPEECH LEARNING
      </div>
      <div
        className="flex items-center"
        style={{
          height: 48,
          background: 'transparent',
          padding: '0 4px',
          gap: 12,
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M2 4v8M5 6.5v3M8 3v10M11 5.5v5M14 7v2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: RESO_TOKENS.textPrimary }}>
            Global ASR Correction
          </div>
          <div style={{ fontSize: 10, color: RESO_TOKENS.textTertiary, marginTop: 1 }}>
            Learns recurring mis-hearings and auto-corrects them.
          </div>
        </div>
        <Toggle on />
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5l3 3 3-3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </DottedBackdrop>
  );
};

/**
 * Compact card variant for the Features section. Drops the window chrome and
 * renders the indexing settings content directly in a fluid dark card.
 */
export const IndexingFeatureCard = () => (
  <div
    style={{
      width: '100%',
      borderRadius: 16,
      background: RESO_TOKENS.bgCanvas,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
      backgroundSize: '14px 14px',
      border: `1px solid ${RESO_TOKENS.border}`,
      padding: '20px 22px',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 18px 60px -28px rgba(0,0,0,0.7)',
      color: RESO_TOKENS.textPrimary,
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    }}
  >
    {/* Memory Status card */}
    <div
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${RESO_TOKENS.border}`,
        borderRadius: 12,
        padding: '14px 16px',
      }}
    >
      <div className="flex items-center" style={{ gap: 12 }}>
        <DriveGlyph />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: RESO_TOKENS.textPrimary, letterSpacing: -0.1 }}>
            Memory Status
          </div>
          <div style={{ fontSize: 10, color: RESO_TOKENS.textTertiary, marginTop: 2 }}>
            100% · 3,073 of 3,073 files · 2 folders
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 12,
          height: 4,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `linear-gradient(90deg, ${RESO_PURPLE}, ${RESO_TOKENS.brandSoft})`,
            boxShadow: `0 0 18px rgba(84,35,231,0.55)`,
            borderRadius: 999,
          }}
        />
      </div>
    </div>

    {/* Folders heading */}
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        color: RESO_TOKENS.textPrimary,
        marginTop: 18,
        marginBottom: 8,
        letterSpacing: -0.1,
      }}
    >
      Folders
    </div>

    {/* Folder rows — only show first two for compactness */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {FOLDERS.slice(0, 3).map((folder) => (
        <div
          key={folder.id}
          className="flex items-center"
          style={{
            height: 42,
            borderRadius: 10,
            background: 'rgba(255,255,255,0.02)',
            border: `1px solid ${RESO_TOKENS.border}`,
            padding: '0 12px',
            gap: 10,
          }}
        >
          {folder.checked ? <CheckIcon /> : <div style={{ width: 18 }} />}
          <div style={{ minWidth: 0, flex: 1 }}>
            <div className="flex items-center" style={{ gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: RESO_TOKENS.textPrimary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {folder.title}
              </span>
              {folder.badge && (
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 600,
                    padding: '1px 5px',
                    borderRadius: 4,
                    background: 'rgba(84,35,231,0.18)',
                    border: '1px solid rgba(84,35,231,0.32)',
                    color: '#c4b6ff',
                    letterSpacing: 0.2,
                    flexShrink: 0,
                  }}
                >
                  {folder.badge}
                </span>
              )}
            </div>
            <div style={{ fontSize: 9, color: RESO_TOKENS.textTertiary, marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {folder.subtitle}
            </div>
          </div>
          {folder.actions.includes('refresh') && <RefreshIcon />}
          {folder.actions.includes('import') && (
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: RESO_PURPLE,
                padding: '4px 8px',
                flexShrink: 0,
              }}
            >
              Import
            </div>
          )}
        </div>
      ))}
    </div>

    {/* ASR toggle row */}
    <div
      className="flex items-center"
      style={{
        marginTop: 14,
        height: 44,
        borderRadius: 12,
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${RESO_TOKENS.border}`,
        padding: '0 12px',
        gap: 10,
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 26,
          height: 26,
          borderRadius: 7,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          flexShrink: 0,
        }}
      >
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path d="M2 4v8M5 6.5v3M8 3v10M11 5.5v5M14 7v2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: RESO_TOKENS.textPrimary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Global ASR Correction
        </div>
        <div style={{ fontSize: 9, color: RESO_TOKENS.textTertiary, marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Learns recurring mis-hearings and auto-corrects them.
        </div>
      </div>
      <Toggle on />
    </div>
  </div>
);

const IndexingMockup = ({ width = 1080, height = 660 }) => (
  <ResoWindowShell activeTab="indexing" width={width} height={height}>
    <IndexingContent />
  </ResoWindowShell>
);

export default IndexingMockup;
