/**
 * MOCKUP SYNC: This file mirrors Reso2 macOS app UI for the marketing website.
 * When the corresponding app code changes, you MUST update this file too.
 * See /Users/yukungao/github/Reso2/CLAUDE.md "Website Mockup Sync" for the full mapping.
 *
 * App source of truth:
 * - NODES, CONNECTIONS, WorkflowCanvas, WorkflowContent ← Reso2/Views/WorkflowBuilder/*.swift
 *   (Voice Workflow nodes: Voice Input, Revise Last Result, Context Awareness, Clean, Refine,
 *   Translate, Auto Insert, Result Card; bezier connections; INPUT/RULES/DELIVER column labels)
 */
import React, { useState } from 'react';
import {
  RESO_TOKENS,
  ResoWindowShell,
  DottedBackdrop,
} from './ResoMockupBase';

/**
 * High-fidelity recreation of Reso2's Settings → Workflow page (Voice Workflow canvas).
 * Layout reverse-engineered from the original macOS app screenshot.
 */

const NODE_WIDTH = 174;
const NODE_HEIGHT = 54;
const CHART_CENTER_Y = 222;

// Layout matches Reso2/Models/WorkflowBuilder/PipelineGraph.swift:
//   INPUT (Voice Input) → BRANCH (Context + Revise stacked) → RULES → merge → DELIVER
// All columns are vertically centered around CHART_CENTER_Y so the main path
// stays visually straight, exactly like PipelineGraphView's alignment guide.
const NODES = [
  // INPUT column — Voice Input alone (centered)
  {
    id: 'voice-input',
    title: 'Voice Input',
    subtitle: 'Hold Option · capture + transcribe',
    x: 30,
    y: 195,
    column: 'INPUT',
  },
  // BRANCH column (no label) — Context Awareness + Revise stacked, 44pt apart
  {
    id: 'context',
    title: 'Context Awareness',
    subtitle: 'Bring in live app and text context',
    x: 254,
    y: 146,
    column: '',
  },
  {
    id: 'revise',
    title: 'Revise Last Result',
    subtitle: 'Update the previous result',
    x: 254,
    y: 244,
    column: '',
  },
  // RULES column — Clean / Refine / Translate, 8pt apart
  {
    id: 'clean',
    title: 'Clean',
    subtitle: 'Faithful dictation cleanup rule',
    x: 478,
    y: 133,
    column: 'RULES',
    cog: false,
  },
  {
    id: 'refine',
    title: 'Refine',
    subtitle: 'Structure rule inside the same pass',
    x: 478,
    y: 195,
    column: 'RULES',
    cog: true,
  },
  {
    id: 'translate',
    title: 'Translate',
    subtitle: 'Language rule inside the same pass',
    x: 478,
    y: 257,
    column: 'RULES',
    cog: true,
    disabled: true,
  },
  // JUNCTION column (no label) — small merge dot, sits on the chart center
  {
    id: 'merge',
    kind: 'junction',
    x: 690,
    y: CHART_CENTER_Y,
  },
  // DELIVER column — Auto Insert / Result Card, 8pt apart
  {
    id: 'auto-insert',
    title: 'Auto Insert',
    subtitle: 'Insert at cursor when safe',
    x: 720,
    y: 164,
    column: 'DELIVER',
  },
  {
    id: 'result-card',
    title: 'Result Card',
    subtitle: 'Show result card notification',
    x: 720,
    y: 226,
    column: 'DELIVER',
    cog: true,
  },
];

// Edges match buildEdges() in PipelineGraph.swift:
const CONNECTIONS = [
  // Voice Input → Context Awareness + Revise (both branches off the same input)
  { from: 'voice-input', to: 'context' },
  { from: 'voice-input', to: 'revise' },
  // Context Awareness → Clean / Refine / Translate (rules are applied to the main branch)
  { from: 'context', to: 'clean' },
  { from: 'context', to: 'refine' },
  { from: 'context', to: 'translate', dim: true },
  // Rules → merge → Deliver
  { from: 'clean', to: 'merge' },
  { from: 'refine', to: 'merge' },
  { from: 'translate', to: 'merge', dim: true },
  { from: 'merge', to: 'auto-insert' },
  { from: 'merge', to: 'result-card' },
  // Revise Last Result → Result Card (long arc bypassing rules)
  { from: 'revise', to: 'result-card', curve: 'low' },
];

const lookupNode = (id) => NODES.find((n) => n.id === id);

const JUNCTION_RADIUS = 6;

/** Right-edge anchor (where outgoing edges leave a node). */
const rightAnchor = (node) =>
  node.kind === 'junction'
    ? { x: node.x + JUNCTION_RADIUS, y: node.y }
    : { x: node.x + NODE_WIDTH, y: node.y + NODE_HEIGHT / 2 };

/** Left-edge anchor (where incoming edges enter a node). */
const leftAnchor = (node) =>
  node.kind === 'junction'
    ? { x: node.x - JUNCTION_RADIUS, y: node.y }
    : { x: node.x, y: node.y + NODE_HEIGHT / 2 };

/** Build a smooth horizontal Bezier between two node anchors. */
const buildPath = (a, b, curve) => {
  const start = rightAnchor(a);
  const end = leftAnchor(b);
  const ax = start.x;
  const ay = start.y;
  const bx = end.x;
  const by = end.y;
  const dx = Math.max(40, (bx - ax) * 0.55);
  if (curve === 'low') {
    // Bypass arc that drops below the rules column to avoid visual collision
    const dropY = Math.max(ay, by) + 110;
    return `M ${ax} ${ay} C ${ax + dx * 1.4} ${dropY}, ${bx - dx * 1.4} ${dropY}, ${bx} ${by}`;
  }
  return `M ${ax} ${ay} C ${ax + dx} ${ay}, ${bx - dx} ${by}, ${bx} ${by}`;
};

const Cog = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M8 2.6l1 1.4 1.7.1.5 1.6 1.4.9-.5 1.6.5 1.6-1.4.9-.5 1.6-1.7.1-1 1.4-1-1.4-1.7-.1-.5-1.6-1.4-.9.5-1.6-.5-1.6 1.4-.9.5-1.6 1.7-.1L8 2.6z"
      stroke={RESO_TOKENS.textTertiary}
      strokeWidth="1.1"
      fill="none"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="8" r="1.7" stroke={RESO_TOKENS.textTertiary} strokeWidth="1.1" fill="none" />
  </svg>
);

/**
 * Pure-SVG workflow chart. Uses a fixed 920×460 viewBox so it scales
 * crisply at any container width without manual transform math.
 */
const VIEW_BOX_WIDTH = 920;
const VIEW_BOX_HEIGHT = 460;

const SvgCog = ({ x, y }) => (
  <g transform={`translate(${x},${y})`} opacity="0.55">
    <path
      d="M0 -5 L1.4 -3.6 L3.5 -3.5 L4 -1.4 L5.6 0 L4 1.4 L3.5 3.5 L1.4 3.6 L0 5 L-1.4 3.6 L-3.5 3.5 L-4 1.4 L-5.6 0 L-4 -1.4 L-3.5 -3.5 L-1.4 -3.6 Z"
      fill="none"
      stroke={RESO_TOKENS.textTertiary}
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <circle cx="0" cy="0" r="1.6" fill="none" stroke={RESO_TOKENS.textTertiary} strokeWidth="0.9" />
  </g>
);

const SvgWorkflowNode = ({ node, selected, onSelect }) => {
  // Junction merge dot — small filled circle with no label, sits on its center.
  if (node.kind === 'junction') {
    return (
      <g transform={`translate(${node.x},${node.y})`} style={{ pointerEvents: 'none' }}>
        <circle
          cx="0"
          cy="0"
          r={JUNCTION_RADIUS}
          fill={RESO_TOKENS.bgCard}
          stroke={RESO_TOKENS.border}
          strokeWidth="1"
        />
        <circle cx="0" cy="0" r="2.4" fill={RESO_TOKENS.textTertiary} opacity="0.8" />
      </g>
    );
  }

  const opacity = node.disabled ? 0.42 : 1;
  const greenColor = node.disabled
    ? 'rgba(34, 197, 94, 0.35)'
    : selected
      ? '#4ade80'
      : RESO_TOKENS.workflowGreen;
  const borderColor = selected ? 'rgba(74, 222, 128, 0.65)' : RESO_TOKENS.border;
  const borderWidth = selected ? 1.5 : 1;
  const cardFill = selected ? 'rgba(34,197,94,0.08)' : RESO_TOKENS.bgCard;
  return (
    <g
      transform={`translate(${node.x},${node.y})`}
      opacity={opacity}
      onClick={(e) => {
        e.stopPropagation();
        if (!node.disabled) onSelect?.(node.id);
      }}
      style={{ cursor: node.disabled ? 'default' : 'pointer' }}
    >
      {/* Card background */}
      <rect
        x="0"
        y="0"
        width={NODE_WIDTH}
        height={NODE_HEIGHT}
        rx="10"
        ry="10"
        fill={cardFill}
        stroke={borderColor}
        strokeWidth={borderWidth}
        style={{ transition: 'fill 0.18s, stroke 0.18s, stroke-width 0.18s' }}
      />
      {/* Selected glow */}
      {selected && (
        <rect
          x="-1"
          y="-1"
          width={NODE_WIDTH + 2}
          height={NODE_HEIGHT + 2}
          rx="11"
          ry="11"
          fill="none"
          stroke="#4ade80"
          strokeWidth="1"
          opacity="0.4"
          style={{ filter: 'blur(2px)' }}
        />
      )}
      {/* Green accent bar */}
      <rect
        x="6"
        y="8"
        width="3"
        height={NODE_HEIGHT - 16}
        rx="1.5"
        fill={greenColor}
        style={{ transition: 'fill 0.18s' }}
      />
      {/* Title */}
      <text
        x="18"
        y="22"
        fontSize="12"
        fontWeight="600"
        fill={RESO_TOKENS.textPrimary}
        letterSpacing="-0.1"
        style={{ pointerEvents: 'none' }}
      >
        {node.title}
      </text>
      {/* Subtitle */}
      <text
        x="18"
        y="38"
        fontSize="10"
        fill={RESO_TOKENS.textTertiary}
        style={{ pointerEvents: 'none' }}
      >
        {node.subtitle}
      </text>
      {node.cog && <SvgCog x={NODE_WIDTH - 14} y={NODE_HEIGHT / 2} />}
    </g>
  );
};

const SvgColumnLabel = ({ text, x, y }) => (
  <text
    x={x}
    y={y}
    fontSize="9"
    letterSpacing="1.4"
    fontWeight="600"
    fill={RESO_TOKENS.textDim}
  >
    {text}
  </text>
);

/**
 * Responsive workflow chart. Renders at any width via SVG viewBox.
 * Nodes are clickable — clicking selects/deselects them with visual highlight.
 */
export const WorkflowCanvas = ({ maxWidth }) => {
  const [selectedId, setSelectedId] = useState('refine');

  // Highlight any connection touching the selected node
  const isConnectionLit = (c) =>
    selectedId && (c.from === selectedId || c.to === selectedId);

  return (
    <svg
      viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: maxWidth || '100%',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif',
      }}
    >
      <defs>
        <linearGradient id="connStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.22)" />
        </linearGradient>
        <linearGradient id="connStrokeLit" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(74,222,128,0.95)" />
          <stop offset="100%" stopColor="rgba(74,222,128,0.45)" />
        </linearGradient>
      </defs>

      {/* Connections (drawn first so nodes sit on top) */}
      {CONNECTIONS.map((c, i) => {
        const a = lookupNode(c.from);
        const b = lookupNode(c.to);
        if (!a || !b) return null;
        const lit = isConnectionLit(c);
        return (
          <path
            key={i}
            d={buildPath(a, b, c.curve)}
            fill="none"
            stroke={lit ? 'url(#connStrokeLit)' : 'url(#connStroke)'}
            strokeWidth={lit ? 1.4 : 1.1}
            opacity={c.dim ? 0.18 : lit ? 0.95 : 0.6}
            strokeLinecap="round"
            style={{ transition: 'stroke-width 0.18s, opacity 0.18s' }}
          />
        );
      })}

      {/* Column labels — branch (Context+Revise) and junction columns intentionally have no label.
          Each label sits ~22pt above its column's topmost node, exactly like the real app. */}
      <SvgColumnLabel text="INPUT" x={30 + NODE_WIDTH / 2 - 14} y={173} />
      <SvgColumnLabel text="RULES" x={478 + NODE_WIDTH / 2 - 14} y={111} />
      <SvgColumnLabel text="DELIVER" x={720 + NODE_WIDTH / 2 - 22} y={142} />

      {/* Nodes */}
      {NODES.map((node) => (
        <SvgWorkflowNode
          key={node.id}
          node={node}
          selected={selectedId === node.id}
          onSelect={(id) => setSelectedId(selectedId === id ? null : id)}
        />
      ))}
    </svg>
  );
};

export const WorkflowContent = () => (
  <DottedBackdrop>
    <div style={{ padding: '20px 36px 0 36px', maxHeight: '100%' }}>
      {/* Crisp tab description — the tab title already says "Workflow"
          so we don't need a redundant section header. */}
      <p
        style={{
          fontSize: 12,
          lineHeight: 1.55,
          color: RESO_TOKENS.textSecondary,
          marginBottom: 18,
          maxWidth: 720,
        }}
      >
        Control how your voice is processed, transformed, and delivered.
      </p>
      <WorkflowCanvas />
    </div>
  </DottedBackdrop>
);

/**
 * Compact card variant used in the Features section. Strips the window
 * chrome and the long description paragraphs and renders only the chart on a
 * dotted dark canvas — naturally responsive thanks to the SVG viewBox.
 */
export const WorkflowFeatureCard = () => (
  <div
    style={{
      width: '100%',
      borderRadius: 16,
      background: RESO_TOKENS.bgCanvas,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
      backgroundSize: '14px 14px',
      border: `1px solid ${RESO_TOKENS.border}`,
      padding: '24px 28px 26px 28px',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 18px 60px -28px rgba(0,0,0,0.7)',
    }}
  >
    <div
      style={{
        fontSize: 12,
        fontWeight: 700,
        color: RESO_TOKENS.textPrimary,
        letterSpacing: -0.1,
        marginBottom: 6,
      }}
    >
      Voice Workflow
    </div>
    <div
      style={{
        fontSize: 10,
        color: RESO_TOKENS.textTertiary,
        marginBottom: 14,
      }}
    >
      Hold Option · capture · clean · deliver
    </div>
    <WorkflowCanvas />
  </div>
);

const WorkflowMockup = ({ width = 1080, height = 660 }) => (
  <ResoWindowShell activeTab="workflow" width={width} height={height}>
    <WorkflowContent />
  </ResoWindowShell>
);

export default WorkflowMockup;
