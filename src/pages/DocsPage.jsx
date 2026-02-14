import React, { useState } from 'react';
import {
  BookOpen,
  Zap,
  Brain,
  Shield,
  GitBranch,
  Wrench,
  Terminal,
  Code2,
  Mic,
  Eye,
  Network,
  CheckCircle2,
  AlertTriangle,
  Info,
} from 'lucide-react';

// Main navigation structure for left sidebar
const mainNavigation = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'quick-start', label: 'Quick Start & Build' },
  {
    id: 'core-features',
    label: 'Core Features',
    children: [
      { id: 'performance', label: 'Extreme Performance' },
      { id: 'architect', label: 'Architect Skill' },
      { id: 'discovery', label: 'Semantic Discovery' },
      { id: 'privacy', label: 'Privacy & Reliability' },
    ],
  },
  { id: 'advanced-config', label: 'Advanced Configuration' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
];

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState(new Set(['core-features']));

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  // Determine which subsections to show in right sidebar based on active section
  const getRightSidebarSections = () => {
    switch (activeSection) {
      case 'introduction':
        return [
          { id: 'what-is', label: 'What is Reso2?' },
          { id: 'architecture', label: 'Architecture Philosophy' },
        ];
      case 'quick-start':
        return [
          { id: 'prerequisites', label: 'Prerequisites' },
          { id: 'building', label: 'Building from Source' },
          { id: 'onboarding', label: 'First Launch' },
        ];
      case 'performance':
        return [
          { id: 'model-choice', label: 'Model Choice' },
          { id: 'coreml', label: 'CoreML Acceleration' },
          { id: 'build-optimization', label: 'Build Optimization' },
        ];
      case 'architect':
        return [
          { id: 'workflow', label: 'Workflow' },
          { id: 'why-matters', label: 'Why This Matters' },
          { id: 'implementation', label: 'Technical Implementation' },
        ];
      case 'discovery':
        return [
          { id: 'pipeline', label: 'Discovery Pipeline' },
          { id: 'clustering', label: 'Clustering Details' },
          { id: 'knowledge-graph', label: 'Knowledge Graph' },
        ];
      case 'privacy':
        return [
          { id: 'pii-shield', label: 'PII Shield' },
          { id: 'shadow-recording', label: 'Shadow Recording' },
        ];
      case 'advanced-config':
        return [
          { id: 'multi-api', label: 'Multi-API Routing' },
          { id: 'complexity-routing', label: 'Complexity Routing' },
        ];
      case 'troubleshooting':
        return [
          { id: 'slow-transcription', label: 'Slow Transcription' },
          { id: 'coreml-loading', label: 'CoreML Not Loading' },
          { id: 'architect-activation', label: 'Architect Not Activating' },
        ];
      default:
        return [];
    }
  };

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <section className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-gray-200/70 dark:border-gray-700/70 bg-white/80 dark:bg-gray-900/70 backdrop-blur text-xs tracking-[0.18em] uppercase text-gray-500 dark:text-gray-400 mb-6">
            <BookOpen size={14} />
            <span>Technical Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            Reso Documentation
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Technical guide covering architecture, performance optimization, and core features.
          </p>
        </section>

        {/* Three-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_200px] gap-8 xl:gap-10">
          {/* Left Sidebar - Main Navigation */}
          <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-3">
                Navigation
              </p>
              <nav className="space-y-1">
                {mainNavigation.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        if (item.children) {
                          toggleSection(item.id);
                        } else {
                          setActiveSection(item.id);
                        }
                      }}
                      className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                        activeSection === item.id
                          ? 'bg-black/[0.08] dark:bg-white/[0.12] text-gray-900 dark:text-white font-medium'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                    {/* Child items */}
                    {item.children && expandedSections.has(item.id) && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => setActiveSection(child.id)}
                            className={`w-full text-left rounded-lg px-3 py-1.5 text-sm transition-colors ${
                              activeSection === child.id
                                ? 'bg-black/[0.06] dark:bg-white/[0.10] text-gray-900 dark:text-white font-medium'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] hover:text-gray-900 dark:hover:text-white'
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="space-y-10">
            {activeSection === 'introduction' && <IntroductionSection />}
            {activeSection === 'quick-start' && <QuickStartSection />}
            {activeSection === 'performance' && <PerformanceSection />}
            {activeSection === 'architect' && <ArchitectSection />}
            {activeSection === 'discovery' && <DiscoverySection />}
            {activeSection === 'privacy' && <PrivacySection />}
            {activeSection === 'advanced-config' && <AdvancedConfigSection />}
            {activeSection === 'troubleshooting' && <TroubleshootingSection />}
          </article>

          {/* Right Sidebar - Page Sections */}
          <aside className="hidden xl:block xl:sticky xl:top-28 xl:self-start">
            {getRightSidebarSections().length > 0 && (
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-3">
                  On this page
                </p>
                <nav className="space-y-1.5">
                  {getRightSidebarSections().map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
};

// ============================================================================
// Section Components
// ============================================================================

const IntroductionSection = () => (
  <div className="space-y-8">
    <section id="what-is" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">What is Reso?</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Reso is a macOS-native voice workspace designed to bridge the gap between human thought and AI-assisted work.
          It's not a voice memo app—it's a specialized tool for developers and creative workflows that need to move
          from spoken ideas to structured, actionable output.
        </p>
      </div>
    </section>

    <section id="architecture" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Architecture Philosophy</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Reso follows a <strong>local-first, modular pipeline</strong> design:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-1 text-green-600 dark:text-green-400 flex-shrink-0" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Local transcription:</strong> Speech recognition runs entirely on-device using Apple Silicon's Neural
              Engine. No audio ever leaves your machine during capture.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-1 text-green-600 dark:text-green-400 flex-shrink-0" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Optional cloud processing:</strong> Text refinement and semantic analysis can use your choice of LLM
              providers (OpenAI, Anthropic, Google, Groq) with built-in privacy controls.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-1 text-green-600 dark:text-green-400 flex-shrink-0" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Modular by design:</strong> Each layer operates independently. You can use just transcription,
              or enable the full pipeline with memory and discovery features.
            </span>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

const QuickStartSection = () => (
  <div className="space-y-8">
    <section id="prerequisites" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Prerequisites</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
            macOS 14.0+
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
            Apple Silicon (M1/M2/M3/M4)
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
            8GB+ RAM (16GB recommended)
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
            ~2GB free disk space for models
          </li>
        </ul>
      </div>
    </section>

    <section id="building" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Building from Source</h2>
      <div className="rounded-2xl border border-amber-500/30 dark:border-amber-400/30 bg-amber-50/50 dark:bg-amber-900/20 backdrop-blur-md p-5 mb-4">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-900 dark:text-amber-200 mb-1">Important</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              Use the provided build script for optimal performance. Standard Xcode builds will be significantly slower.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Reso uses optimized compilation that fully leverages Apple Silicon's performance capabilities. The build script
          ensures all components are properly optimized for real-time transcription.
        </p>

        <div className="rounded-xl border border-black/10 dark:border-white/10 bg-[#101010] text-gray-200 p-4">
          <pre className="text-xs md:text-sm leading-relaxed font-mono">
            {`git clone https://github.com/yourusername/reso.git
cd reso
./build_release.sh`}
          </pre>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          The build script handles compiler optimization and installs the app to a fixed location, preserving system
          permissions across rebuilds.
        </p>
      </div>
    </section>

    <section id="onboarding" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">First Launch</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Reso handles setup automatically on first launch:
        </p>
        <ol className="space-y-3 list-decimal list-inside text-sm text-gray-700 dark:text-gray-300">
          <li>
            <strong>Permission checks:</strong> Microphone access for recording, Screen Recording for visual features
          </li>
          <li>
            <strong>Model download:</strong> Downloads required ML models for on-device transcription
          </li>
          <li>
            <strong>Verification:</strong> Ensures all components are ready
          </li>
        </ol>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          You can start using Reso immediately after granting permissions. Optional features (text refinement, discovery)
          activate when you configure your preferred LLM provider.
        </p>
      </div>
    </section>
  </div>
);

const PerformanceSection = () => (
  <div className="space-y-8">
    <section id="model-choice" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Why It's Fast</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Reso achieves real-time transcription through careful optimization of both model selection and system integration:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <Zap size={16} className="mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Optimized models:</strong> Uses quantized models that maintain accuracy while reducing size and compute requirements
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Zap size={16} className="mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Hardware acceleration:</strong> Leverages Apple Silicon's Neural Engine for GPU-accelerated inference
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Zap size={16} className="mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Native integration:</strong> Built specifically for macOS with optimized compilation
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="coreml" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Neural Engine Acceleration</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Reso offloads compute-intensive operations to Apple Silicon's dedicated Neural Engine, achieving
          dramatically faster transcription compared to CPU-only processing.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          This hardware acceleration enables real-time performance even with high-quality models, making
          Reso feel instantaneous during normal use.
        </p>
      </div>
    </section>

    <section id="build-optimization" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Build Optimization</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          The build process applies advanced compiler optimizations to ensure all components—including the
          underlying speech recognition engine—are fully optimized for Apple Silicon.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          This is why we recommend using the provided build script rather than standard development builds,
          as it ensures proper optimization throughout the entire stack.
        </p>
      </div>
    </section>
  </div>
);

const ArchitectSection = () => (
  <div className="space-y-8">
    <section id="workflow" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Workflow</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6">
        <ol className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li>
            <strong>1. Trigger:</strong> Double-tap <kbd className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs font-mono">Option</kbd> key (300ms window)
          </li>
          <li>
            <strong>2. Capture phase:</strong>
            <ul className="ml-6 mt-2 space-y-1 list-disc">
              <li>Audio recording starts (Whisper.cpp)</li>
              <li>Screen overlay appears with rubber-band selection tool</li>
              <li>Draw regions of interest on screen (UI components, layouts, etc.)</li>
              <li>Multiple screenshots supported</li>
            </ul>
          </li>
          <li>
            <strong>3. Commit:</strong> Double-tap <kbd className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs font-mono">Option</kbd> again
          </li>
          <li>
            <strong>4. Processing:</strong>
            <ul className="ml-6 mt-2 space-y-1 list-disc">
              <li>Audio → Whisper transcription</li>
              <li>Screenshots + transcription → Vision LLM (GPT-4V, Claude 3.5 Sonnet, Gemini Pro Vision)</li>
            </ul>
          </li>
          <li>
            <strong>5. Output:</strong> A structured Tech Spec with:
            <ul className="ml-6 mt-2 space-y-1 list-disc">
              <li>Context analysis (what's in the screenshot)</li>
              <li>Actionable prompt for coding agents (specific CSS/SwiftUI values, component names)</li>
              <li>Implementation notes (edge cases, suggestions)</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>

    <section id="why-matters" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Why This Matters</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          AI coding assistants require <strong>specificity</strong>. When you say "make it pop," they need to know:
        </p>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside ml-4">
          <li>Which element? (Button? Card? Header?)</li>
          <li>What kind of "pop"? (Drop shadow? Color contrast? Animation?)</li>
          <li>
            Exact values? (<code>box-shadow: 0 4px 12px rgba(0,0,0,0.1)</code>)
          </li>
        </ul>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Architect uses the screenshot to identify components and the audio to understand intent, then outputs a prompt
          like:
        </p>

        <div className="rounded-xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-gray-900/50 p-4 mt-3">
          <pre className="text-xs md:text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
            {`Update the primary CTA button in the hero section:
- Increase box-shadow from \`0 2px 4px\` to \`0 4px 12px rgba(0,0,0,0.15)\`
- Add hover state with \`transform: translateY(-2px)\` and shadow \`0 8px 16px\`
- Ensure WCAG AA contrast ratio (current: #3B82F6 on white, ratio 3.9:1 → use #2563EB, ratio 4.8:1)`}
          </pre>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          This is <strong>copy-paste ready</strong> for Cursor's chat.
        </p>
      </div>
    </section>

    <section id="implementation" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">How It Works</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6">
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li>
            <strong>Visual capture:</strong> Select UI elements with a rubber-band tool overlay
          </li>
          <li>
            <strong>Audio sync:</strong> Each screenshot is timestamped during recording for context
          </li>
          <li>
            <strong>Vision model support:</strong> Works with major vision-capable LLM providers (OpenAI, Anthropic, Google)
          </li>
          <li>
            <strong>Structured output:</strong> Generates actionable technical specs ready for AI coding assistants
          </li>
        </ul>
      </div>
    </section>
  </div>
);

const DiscoverySection = () => (
  <div className="space-y-8">
    <section id="pipeline" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">How Discovery Works</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6">
        <ol className="space-y-3 text-sm text-gray-700 dark:text-gray-300 list-decimal list-inside">
          <li>
            <strong>Embedding:</strong> Each transcription is converted into a semantic representation
          </li>
          <li>
            <strong>Clustering:</strong> Related notes are automatically grouped based on semantic similarity
          </li>
          <li>
            <strong>Theme extraction:</strong> Significant clusters emerge as themes with auto-generated names
          </li>
          <li>
            <strong>Graph visualization:</strong> Visual connections show how your ideas relate to each other
          </li>
        </ol>
      </div>
    </section>

    <section id="clustering" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Semantic Clustering</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Reso analyzes the semantic content of your transcriptions to find natural groupings. When enough
          related notes accumulate, they surface as discoverable themes—helping you see patterns in your thinking
          over time.
        </p>
      </div>
    </section>

    <section id="knowledge-graph" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Knowledge Graph</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          The graph view visualizes connections between your notes using an organic layout algorithm that
          positions related content closer together.
        </p>

        <div className="mt-4">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Interactions:</p>
          <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside ml-4">
            <li>Drag nodes to rearrange the layout</li>
            <li>Zoom and pan to explore different areas</li>
            <li>Click nodes to open the corresponding transcription</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Node size reflects connection count—more connected ideas appear larger. Edge thickness shows
          relationship strength.
        </p>
      </div>
    </section>
  </div>
);

const PrivacySection = () => (
  <div className="space-y-8">
    <section id="pii-shield" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Privacy Protection</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          When using cloud-based text refinement, Reso automatically detects and masks sensitive information
          before sending anything to external APIs.
        </p>

        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">What's Protected:</p>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside ml-4">
            <li>Names, organizations, and locations</li>
            <li>Email addresses and phone numbers</li>
            <li>Financial information (credit cards, SSNs)</li>
            <li>Custom sensitive terms you define</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">How It Works:</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Sensitive data is temporarily replaced with placeholder tokens during processing, then restored
            in the final output—ensuring your private information never leaves your device in readable form.
          </p>
        </div>
      </div>
    </section>

    <section id="shadow-recording" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">
        Crash-Resilient Recording
      </h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Traditional recording apps only save audio after you stop recording. If the app crashes,
          your recording is lost. Reso writes audio continuously during capture.
        </p>

        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">How It Works:</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Audio is saved incrementally as you speak—not buffered in memory. Even if Reso crashes or your system
            loses power, your recording is preserved up to the moment of failure.
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Shadow recordings are automatically cleaned up after a week to prevent storage buildup.
        </p>
      </div>
    </section>
  </div>
);

const AdvancedConfigSection = () => (
  <div className="space-y-8">
    <section id="multi-api" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Multi-Provider Routing</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Reso handles API rate limits and failures automatically by failing over between configured providers.
        </p>

        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">How It Works:</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Configure multiple LLM providers in order of preference. If one hits a rate limit or becomes unavailable,
            Reso automatically switches to the next provider—ensuring uninterrupted service without manual intervention.
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Providers become available again after a brief cooldown period.
        </p>
      </div>
    </section>

    <section id="complexity-routing" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Smart Routing</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Reso can analyze task complexity and route to appropriate models, balancing speed and capability.
        </p>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside ml-4">
          <li>
            <strong>Light tasks</strong> (tagging, quick summaries): Routed to faster models
          </li>
          <li>
            <strong>Heavy tasks</strong> (detailed refinement, technical specs): Routed to more capable models
          </li>
        </ul>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          This optimization happens automatically based on content analysis, reducing API costs while
          maintaining output quality.
        </p>
      </div>
    </section>
  </div>
);

const TroubleshootingSection = () => (
  <div className="space-y-8">
    <section id="slow-transcription" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Slow Transcription</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <div className="p-4 rounded-xl border border-amber-500/30 dark:border-amber-400/30 bg-amber-50/50 dark:bg-amber-900/20">
          <p className="text-sm font-medium text-amber-900 dark:text-amber-200 mb-2">Common Cause</p>
          <p className="text-sm text-amber-800 dark:text-amber-300">
            Built using standard development tools instead of the optimized build script
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Solution:</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Rebuild using the provided build script to ensure all optimizations are applied:
          </p>
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-[#101010] text-gray-200 p-4 mt-2">
            <pre className="text-xs md:text-sm leading-relaxed font-mono">
              {`rm -rf .build
./build_release.sh`}
            </pre>
          </div>
        </div>
      </div>
    </section>

    <section id="coreml-loading" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Model Loading Issues</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <div className="p-4 rounded-xl border border-amber-500/30 dark:border-amber-400/30 bg-amber-50/50 dark:bg-amber-900/20">
          <p className="text-sm font-medium text-amber-900 dark:text-amber-200 mb-2">Symptoms</p>
          <p className="text-sm text-amber-800 dark:text-amber-300">
            Transcription is unusably slow or fails to start
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Solution:</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            The required ML models may not have downloaded correctly. Try relaunching Reso to trigger
            automatic model verification and re-download if needed.
          </p>
        </div>
      </div>
    </section>

    <section id="architect-activation" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Architect Not Activating</h2>
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Check Permissions:</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            System Settings → Privacy & Security → Screen Recording → Enable Reso
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Check Settings:</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Reso Settings → Skills → Ensure Architect is enabled
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default DocsPage;
