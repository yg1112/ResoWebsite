import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

// Build Journey posts data
const journeyPosts = [
  { id: 'journey-10', date: 'Feb 2026', title: "Onboarding that doesn't suck", category: 'Product' },
  { id: 'journey-9', date: 'Jan 2026', title: 'The UI you never think about', category: 'Design' },
  { id: 'journey-8', date: 'Dec 2025', title: 'Making ideas visible', category: 'Engineering' },
  { id: 'journey-7', date: 'Nov 2025', title: 'Teaching an app to find patterns', category: 'Engineering' },
  { id: 'journey-6', date: 'Oct 2025', title: "When one API isn't enough", category: 'Infrastructure' },
  { id: 'journey-5', date: 'Sep 2025', title: 'Privacy by design', category: 'Security' },
  { id: 'journey-4', date: 'Aug 2025', title: 'From vibe to code', category: 'Product' },
  { id: 'journey-3', date: 'Jul 2025', title: 'The recording that never dies', category: 'Engineering' },
  { id: 'journey-2', date: 'Jun 2025', title: 'Obsessing over 10x', category: 'Performance' },
  { id: 'journey-1', date: 'May 2025', title: 'Why I built this', category: 'Vision' },
];

// Navigation structure
const mainNavigation = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'quick-start', label: 'Quick Start' },
  {
    id: 'features',
    label: 'Features',
    children: [
      { id: 'capture', label: 'Frictionless Capture' },
      { id: 'privacy', label: 'Privacy' },
      { id: 'skills', label: 'Dynamic Skills' },
      { id: 'discovery', label: 'Discovery' },
      { id: 'routing', label: 'Smart Routing' },
    ],
  },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  {
    id: 'build-journey',
    label: 'Build Journey',
    children: journeyPosts.map(post => ({ id: post.id, label: post.title })),
  },
];

const DocsPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState(new Set(['features']));

  // Handle hash navigation from "Learn more" links
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.slice(1);
      setActiveSection(sectionId);
      // Auto-expand parent sections
      const featureIds = ['capture', 'privacy', 'skills', 'discovery', 'routing'];
      const journeyIds = journeyPosts.map(p => p.id);
      if (featureIds.includes(sectionId)) {
        setExpandedSections(prev => new Set([...prev, 'features']));
      }
      if (journeyIds.includes(sectionId)) {
        setExpandedSections(prev => new Set([...prev, 'build-journey']));
      }
    }
  }, [location.hash]);

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getRightSidebarSections = () => {
    switch (activeSection) {
      case 'introduction':
        return [{ id: 'what-is', label: 'What is Reso?' }];
      case 'quick-start':
        return [
          { id: 'requirements', label: 'Requirements' },
          { id: 'installation', label: 'Installation' },
        ];
      case 'capture':
        return [
          { id: 'shadow-recording', label: 'Shadow Recording' },
          { id: 'activation', label: 'Activation' },
        ];
      case 'privacy':
        return [
          { id: 'local-transcription', label: 'Local Transcription' },
          { id: 'pii-masking', label: 'PII Masking' },
        ];
      case 'skills':
        return [
          { id: 'intent-recognition', label: 'Intent Recognition' },
          { id: 'skill-switching', label: 'Skill Switching' },
        ];
      case 'discovery':
        return [
          { id: 'semantic-clustering', label: 'Semantic Clustering' },
          { id: 'knowledge-graph', label: 'Knowledge Graph' },
        ];
      case 'routing':
        return [
          { id: 'supported-providers', label: 'Supported Providers' },
          { id: 'how-routing-works', label: 'How Routing Works' },
        ];
      case 'troubleshooting':
        return [
          { id: 'slow', label: 'Slow Transcription' },
          { id: 'permissions', label: 'Permissions' },
        ];
      default:
        return [];
    }
  };

  // Check if current section is a journey post
  const isJourneyPost = activeSection.startsWith('journey-');

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <section className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            Reso Documentation
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Everything you need to get started.
          </p>
        </section>

        {/* Three-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_180px] gap-8 xl:gap-10">
          {/* Left Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
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
                        ? 'bg-black/[0.06] dark:bg-white/[0.08] text-gray-900 dark:text-white font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.children && expandedSections.has(item.id) && (
                    <div className="ml-3 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-3">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => setActiveSection(child.id)}
                          className={`w-full text-left rounded-lg px-3 py-1.5 text-sm transition-colors ${
                            activeSection === child.id
                              ? 'text-gray-900 dark:text-white font-medium'
                              : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'
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
          </aside>

          {/* Main Content */}
          <article className="space-y-8">
            {activeSection === 'introduction' && <IntroductionSection />}
            {activeSection === 'quick-start' && <QuickStartSection />}
            {activeSection === 'capture' && <CaptureSection />}
            {activeSection === 'privacy' && <PrivacySection />}
            {activeSection === 'skills' && <SkillsSection />}
            {activeSection === 'discovery' && <DiscoverySection />}
            {activeSection === 'routing' && <RoutingSection />}
            {activeSection === 'troubleshooting' && <TroubleshootingSection />}
            {isJourneyPost && <JourneyPostSection postId={activeSection} />}
          </article>

          {/* Right Sidebar */}
          <aside className="hidden xl:block xl:sticky xl:top-28 xl:self-start">
            {getRightSidebarSections().length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  On this page
                </p>
                <nav className="space-y-1">
                  {getRightSidebarSections().map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
// Sections
// ============================================================================

const IntroductionSection = () => (
  <div className="space-y-6">
    <section id="what-is" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">What is Reso?</h2>
      <div className="prose-content space-y-4">
        <p>
          Reso is a voice workspace for macOS. It runs transcription locally on Apple Silicon,
          so your audio never leaves your machine.
        </p>
        <p>
          Beyond transcription, Reso connects to LLMs to refine text, generate specs from screenshots,
          and surface patterns across your notes over time.
        </p>
      </div>
    </section>
  </div>
);

const QuickStartSection = () => (
  <div className="space-y-8">
    <section id="requirements" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Requirements</h2>
      <div className="prose-content">
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
            <span>macOS 14.0+ (Sonoma)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
            <span>Apple Silicon (M1, M2, M3, M4)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
            <span>8GB RAM minimum, 16GB recommended</span>
          </li>
        </ul>
      </div>
    </section>

    <section id="installation" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Installation</h2>
      <div className="prose-content space-y-4">
        <p>Download the DMG, drag to Applications, done.</p>
        <a
          href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-black dark:hover:bg-gray-100 transition-colors"
        >
          Download Reso.dmg
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Or via terminal: <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">curl -L -o Reso.dmg https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg</code>
        </p>
        <p>
          On first launch, Reso downloads ML models (~2GB) and requests microphone access.
          This takes a minute or two, then you're set.
        </p>
      </div>
    </section>
  </div>
);

// ============================================================================
// Feature Deep-Dives
// ============================================================================

const CaptureSection = () => (
  <div className="space-y-8">
    <section id="shadow-recording" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Frictionless Capture</h2>
      <div className="prose-content space-y-4">
        <p>
          The biggest friction with note-taking apps is the ritual: open app, create new note, start typing.
          By the time you're ready, the thought is gone.
        </p>
        <p>
          Reso takes a different approach. It runs quietly in the background, always ready. When you need
          to capture something, it's already listening. No windows to open, no buttons to click.
        </p>
        <p>
          The Shadow Recording system keeps a rolling buffer of audio. When you activate Reso,
          it can include what you said in the last few seconds—so you never lose the beginning
          of a thought.
        </p>
      </div>
    </section>

    <section id="activation" className="scroll-mt-28">
      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Activation</h2>
      <div className="prose-content space-y-4">
        <p>
          Double-tap the Option key to start recording. Double-tap again to stop.
          The notch bar shows recording status without taking over your screen.
        </p>
        <p>
          You can also configure custom hotkeys or use the menu bar icon. The point is:
          capture should feel effortless, not like a separate task.
        </p>
      </div>
    </section>
  </div>
);

const PrivacySection = () => (
  <div className="space-y-8">
    <section id="local-transcription" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Privacy</h2>
      <div className="prose-content space-y-4">
        <p>
          Voice recordings often contain sensitive information—names, addresses, financial details,
          personal thoughts. Sending this to cloud services requires a level of trust most people
          aren't comfortable with.
        </p>
        <p>
          Reso runs Whisper locally on Apple Silicon's Neural Engine. Your audio is transcribed
          on your Mac and never uploaded anywhere. The raw recordings stay in your control.
        </p>
      </div>
    </section>

    <section id="pii-masking" className="scroll-mt-28">
      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">PII Masking</h2>
      <div className="prose-content space-y-4">
        <p>
          When you use features that require cloud processing—like text refinement or
          Architect mode—Reso's PII Shield automatically detects and masks sensitive data
          before it leaves your device.
        </p>
        <p>
          Names, emails, phone numbers, and custom terms get replaced with tokens. The LLM
          processes the masked text, and Reso restores the original values locally. The cloud
          model never sees your actual data.
        </p>
      </div>
    </section>
  </div>
);

const SkillsSection = () => (
  <div className="space-y-8">
    <section id="intent-recognition" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Dynamic Skills</h2>
      <div className="prose-content space-y-4">
        <p>
          Traditional voice memos are passive—they just store audio. You record, forget,
          and rarely revisit. Reso treats voice input as the start of a workflow, not the end.
        </p>
        <p>
          The Intent Classifier analyzes what you said and what you likely want to do with it.
          A brainstorm gets one treatment. A list of action items gets another. Meeting notes
          get structured differently than a personal journal entry.
        </p>
      </div>
    </section>

    <section id="skill-switching" className="scroll-mt-28">
      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Skill Switching</h2>
      <div className="prose-content space-y-4">
        <p>
          Skills are specialized handlers for different types of content. The Skill Switcher
          routes your input to the right skill automatically, or you can invoke them directly.
        </p>
        <p>
          Architect mode turns voice + screenshots into structured specs for AI coding assistants.
          Code Companion formats technical discussions for clarity. Quick Action extracts
          todos and calendar events. Each skill transforms raw voice into something actionable.
        </p>
      </div>
    </section>
  </div>
);

const DiscoverySection = () => (
  <div className="space-y-8">
    <section id="semantic-clustering" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Discovery</h2>
      <div className="prose-content space-y-4">
        <p>
          Most note apps force you to organize upfront: choose a folder, add tags, pick a title.
          This creates friction and usually results in a junk drawer of unsorted notes.
        </p>
        <p>
          Reso embeds every transcription semantically. Related notes cluster automatically
          over time. Themes emerge from your content—you don't have to create them.
        </p>
        <p>
          After a few weeks, you might discover you've been circling the same problem from
          different angles. Connections become visible that you wouldn't have noticed otherwise.
        </p>
      </div>
    </section>

    <section id="knowledge-graph" className="scroll-mt-28">
      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Knowledge Graph</h2>
      <div className="prose-content space-y-4">
        <p>
          The Mindscape view shows how your notes connect. Drag nodes, zoom around, click to open.
          It's not meant to be comprehensive—just useful for spotting relationships you might have missed.
        </p>
        <p>
          The graph updates as you add content. New notes automatically find their place
          in the existing structure based on semantic similarity.
        </p>
      </div>
    </section>
  </div>
);

const RoutingSection = () => (
  <div className="space-y-8">
    <section id="supported-providers" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Smart Routing</h2>
      <div className="prose-content space-y-4">
        <p>
          Different tasks need different models. Fast, simple queries don't need the most powerful
          (and expensive) model. Complex analysis benefits from deeper reasoning.
        </p>
        <p>
          Reso supports multiple providers: Anthropic, OpenAI, Groq, and Google. You bring your
          own API keys (Reso Pro) or use our hosted access (Reso+).
        </p>
      </div>
    </section>

    <section id="how-routing-works" className="scroll-mt-28">
      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">How Routing Works</h2>
      <div className="prose-content space-y-4">
        <p>
          The Multi-API Routing Service analyzes each request and picks the best model for the job.
          Quick reformatting goes to Groq for speed. Long-form analysis routes to Claude for depth.
          Local models handle privacy-sensitive content.
        </p>
        <p>
          Context carries across requests. If you're in a multi-turn conversation, Reso maintains
          continuity even when switching between models. You get the best of each without
          managing the complexity yourself.
        </p>
      </div>
    </section>
  </div>
);

const TroubleshootingSection = () => (
  <div className="space-y-8">
    <section id="slow" className="scroll-mt-28">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Slow Transcription</h2>
      <div className="prose-content space-y-4">
        <p>
          Reso should transcribe faster than you speak. If it's slow, the Neural Engine
          acceleration might not be loading properly.
        </p>
        <p>
          Try relaunching. If it persists, check that the CoreML model exists at{' '}
          <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">
            ~/Library/Application Support/Reso/models/
          </code>
        </p>
      </div>
    </section>

    <section id="permissions" className="scroll-mt-28">
      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Permissions</h2>
      <div className="prose-content space-y-4">
        <p>
          <strong>Microphone</strong> is required. <strong>Screen Recording</strong> is needed
          for Architect mode. Grant these in System Settings → Privacy & Security.
        </p>
      </div>
    </section>
  </div>
);

// ============================================================================
// Build Journey Posts Content
// ============================================================================

const journeyContent = {
  'journey-10': {
    title: "Onboarding that doesn't suck",
    date: 'Feb 2026',
    category: 'Product',
    content: (
      <div className="prose-content space-y-4">
        <p>
          Most app onboarding is terrible. You download something, and before you can do anything useful,
          you're hit with a carousel of feature explanations, permission requests, and account creation forms.
        </p>
        <p>
          We took a different approach with Reso. The first launch downloads ML models in the background
          while you're already using the app. Microphone permission is requested the moment you actually
          try to record—not before. No account required to start.
        </p>
        <p>
          The goal: useful output within 60 seconds of first launch. Everything else can wait.
        </p>
      </div>
    ),
  },
  'journey-9': {
    title: 'The UI you never think about',
    date: 'Jan 2026',
    category: 'Design',
    content: (
      <div className="prose-content space-y-4">
        <p>
          The best interface is one you forget exists. For a voice app, that means getting out of the way
          during recording and only appearing when you need to review or edit.
        </p>
        <p>
          The notch bar was born from this principle. It lives in the space that's already "dead" on
          MacBooks with notches, shows just enough status to confirm Reso is listening, and disappears
          when you're done.
        </p>
        <p>
          No floating windows. No dock icons bouncing. Just a subtle indicator that your thoughts are being captured.
        </p>
      </div>
    ),
  },
  'journey-8': {
    title: 'Making ideas visible',
    date: 'Dec 2025',
    category: 'Engineering',
    content: (
      <div className="prose-content space-y-4">
        <p>
          The knowledge graph started as a debugging tool. We needed to visualize how embeddings clustered
          to tune the semantic chunking parameters. Turns out, seeing your thoughts as connected nodes
          is genuinely useful.
        </p>
        <p>
          The hard part wasn't the visualization—force-directed graphs are well-understood. It was deciding
          what edges to show. Too many connections and it's noise. Too few and you miss insights.
        </p>
        <p>
          We settled on showing edges above a similarity threshold, with the threshold adjustable.
          Simple, but it took months of user testing to get right.
        </p>
      </div>
    ),
  },
  'journey-7': {
    title: 'Teaching an app to find patterns',
    date: 'Nov 2025',
    category: 'Engineering',
    content: (
      <div className="prose-content space-y-4">
        <p>
          Clustering algorithms are easy. Clustering that matches human intuition is hard.
        </p>
        <p>
          Early versions would group notes by surface-level keywords. "Meeting with John" and "John's birthday"
          would cluster together because of "John." Users found this useless.
        </p>
        <p>
          The breakthrough was semantic chunking before embedding. Instead of embedding whole transcripts,
          we break them into coherent thought units first. Now "Meeting with John about Q4 budget" clusters
          with other financial discussions, not other mentions of John.
        </p>
      </div>
    ),
  },
  'journey-6': {
    title: "When one API isn't enough",
    date: 'Oct 2025',
    category: 'Infrastructure',
    content: (
      <div className="prose-content space-y-4">
        <p>
          Different models are good at different things. Groq is blazing fast for simple reformatting.
          Claude excels at nuanced analysis. Local models are the only option for truly private content.
        </p>
        <p>
          The multi-API router was supposed to be simple: classify the task, pick the best model, done.
          In practice, we spent months on edge cases. What if the user's Anthropic quota is exhausted?
          What if a task needs both speed and depth?
        </p>
        <p>
          The current system uses a priority queue with fallbacks, cost awareness, and user preferences.
          It's complex, but users just see "it works."
        </p>
      </div>
    ),
  },
  'journey-5': {
    title: 'Privacy by design',
    date: 'Sep 2025',
    category: 'Security',
    content: (
      <div className="prose-content space-y-4">
        <p>
          "We take your privacy seriously" is the most meaningless phrase in tech. Everyone says it.
          Few build systems where privacy is architecturally enforced.
        </p>
        <p>
          PII Shield wasn't in the original spec. We added it after realizing that cloud-powered features
          would be useless if users were afraid to send their real thoughts.
        </p>
        <p>
          The system detects names, emails, phone numbers, and custom terms, replaces them with tokens
          before cloud processing, then restores them locally. The LLM literally cannot see your sensitive data.
        </p>
      </div>
    ),
  },
  'journey-4': {
    title: 'From vibe to code',
    date: 'Aug 2025',
    category: 'Product',
    content: (
      <div className="prose-content space-y-4">
        <p>
          Architect mode started with a frustration: AI coding assistants are powerful, but they need
          precise instructions. "Make this button pop" doesn't cut it.
        </p>
        <p>
          The insight was combining voice with visual context. You see a UI element that needs work,
          you describe what you want, Reso captures both the screenshot and your words, and a vision
          model produces a spec that an AI coder can actually execute.
        </p>
        <p>
          It's a bridge between human intuition ("this feels off") and machine precision
          ("adjust box-shadow to 0 4px 12px rgba(0,0,0,0.15)").
        </p>
      </div>
    ),
  },
  'journey-3': {
    title: 'The recording that never dies',
    date: 'Jul 2025',
    category: 'Engineering',
    content: (
      <div className="prose-content space-y-4">
        <p>
          Shadow recording was a happy accident. We implemented a rolling audio buffer for a different
          feature (real-time transcription preview) and realized it solved a bigger problem.
        </p>
        <p>
          How many times have you had a thought, reached for your phone to record it, and by the time
          the app opened, you'd forgotten the first part? Shadow recording means Reso can "rewind"
          a few seconds when you activate it.
        </p>
        <p>
          The buffer is kept in memory, encrypted, and never persisted until you explicitly save.
          Privacy maintained, thoughts captured.
        </p>
      </div>
    ),
  },
  'journey-2': {
    title: 'Obsessing over 10x',
    date: 'Jun 2025',
    category: 'Performance',
    content: (
      <div className="prose-content space-y-4">
        <p>
          The original Whisper implementation was... fine. It worked. But "fine" meant waiting
          several seconds for transcription to complete after you stopped speaking.
        </p>
        <p>
          We spent two months on CoreML optimization. Custom model conversion. Neural Engine scheduling.
          Memory mapping tricks. The result: transcription now completes faster than you can read it.
        </p>
        <p>
          Performance isn't a feature. It's the absence of friction. When transcription is instant,
          you stop thinking about the tool and focus on your thoughts.
        </p>
      </div>
    ),
  },
  'journey-1': {
    title: 'Why I built this',
    date: 'May 2025',
    category: 'Vision',
    content: (
      <div className="prose-content space-y-4">
        <p>
          I talk to myself a lot. Not in a concerning way—in a "thinking out loud" way. The best ideas
          come when I'm pacing around, not sitting at a keyboard.
        </p>
        <p>
          Existing voice memo apps felt like dead ends. You record, the file sits there, you never listen
          to it again. I wanted something that would turn spoken thoughts into useful artifacts.
        </p>
        <p>
          Reso is the tool I needed: voice capture that leads somewhere. Transcripts that connect.
          A second brain that listens.
        </p>
      </div>
    ),
  },
};

const JourneyPostSection = ({ postId }) => {
  const post = journeyContent[postId];
  if (!post) return null;

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span>{post.category}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100">
          {post.title}
        </h2>
      </div>
      {post.content}
    </div>
  );
};

export default DocsPage;
