import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Compass, GitCommitHorizontal, Calendar } from 'lucide-react';

// Parse inline markdown (bold, italic, code)
const parseInlineMarkdown = (text) => {
  if (!text) return text;

  const parts = [];
  let remaining = text;
  let key = 0;

  // Pattern to match **bold**, *italic*, or `code`
  const pattern = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(remaining)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(remaining.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold **text**
      parts.push(<strong key={key++} className="font-semibold">{match[2]}</strong>);
    } else if (match[3]) {
      // Italic *text*
      parts.push(<em key={key++}>{match[4]}</em>);
    } else if (match[5]) {
      // Code `text`
      parts.push(
        <code key={key++} className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">
          {match[6]}
        </code>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < remaining.length) {
    parts.push(remaining.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

// Build Journey posts - ordered chronologically (most recent first)
const journeyPosts = [
  {
    id: 10,
    date: 'Feb 2026',
    title: "Onboarding That Doesn't Get in the Way",
    category: 'Product',
    summary: 'How we automated the painful parts of first launch—model downloads, permission checks, and service warmup—while keeping users in control.',
    content: `I've always hated onboarding flows that feel like obstacle courses. You download an app, and suddenly you're clicking through 5 screens of permissions, manually configuring things that should "just work," and waiting for progress bars with no context.

When I started building Reso, I knew the first launch would be complex: we need microphone access, we need to download ~2GB of ML models, we need to initialize services. But I refused to make users babysit this process.

The core principle was simple: **Do the heavy lifting in the background, but stay transparent.**

### The Problem

Our transcription engine relies on two ML models that live on-device:
- A quantized Whisper model (~550MB)
- A CoreML encoder for Neural Engine acceleration (~1.1GB)

Without these, Reso is a paperweight. But forcing users to sit through a "please wait" screen while we download 2GB felt wrong.

### The Solution

We built a three-tier onboarding system:

1. **Critical path first**: Request microphone permission immediately—this is the only blocker. If you grant it, you can start recording right away with CPU-only transcription.

2. **Background bootstrap**: While you're exploring the app, we quietly download models, validate checksums, and warm up services. No modal dialogs. Just a subtle indicator in settings.

3. **Graceful degradation**: If models aren't ready yet, we show real-time performance (e.g., "0.3x speed - models downloading"). Users understand the tradeoff and can still use the app.

### The Details That Matter

- **Resumable downloads**: Network drops? We pick up where we left off.
- **SHA-256 validation**: Corrupted download? We catch it before trying to load garbage into CoreML.
- **Permission guidance**: Instead of a cryptic system alert, we show users *exactly* where to go in System Settings if they denied access.

### What I Learned

Users don't mind waiting for things to download. They mind *not knowing why* or *being forced to wait*.

By making the critical path instant (microphone → record → transcribe) and deferring optimization (Neural Engine acceleration) to the background, first launch went from "this is broken" to "wow, it's already working."

The best onboarding is the one you barely notice.`,
  },
  {
    id: 9,
    date: 'Jan 2026',
    title: 'The UI You Never Think About',
    category: 'Design',
    summary: 'Designing a global hotkey system that feels native to macOS—from floating capsules to dark mode that actually respects your workflow.',
    content: `Good UI is invisible. You notice it when it's bad, but when it's right, it just *feels* like part of the system.

I spent weeks on Reso's UI not to make it "pretty," but to make it **forgettable**—in the best way.

### The Hotkey Problem

Reso lives in your menu bar. You trigger it with ⌘⇧R. The app needs to appear instantly, record your voice, then disappear just as fast.

But here's the thing: macOS has specific expectations for how apps should behave when summoned globally. If you violate these patterns, users won't consciously notice—but they'll *feel* that something's off.

**What I learned:**
- **Respect focus**: When Reso captures audio, it shouldn't steal focus from your current app. You should be able to keep typing in your editor while speaking.
- **Instant feedback**: The floating capsule (our recording indicator) must appear within 50ms of the hotkey press. Any slower and it feels laggy.
- **Escape hatch**: Pressing the hotkey again should always stop recording, no matter what state the app is in. No modals, no confirmations.

### Dark Mode Done Right

Every macOS app says it supports dark mode. Most do it lazily—they just invert colors and call it done.

I wanted Reso's dark mode to feel *intentional*. Here's what that meant:

- **It follows your system**: We don't force a setting. If macOS is in dark mode, Reso is too.
- **Gradients, not flat blacks**: Pure black (#000) looks cheap. We use subtle gradients (black/5% opacity) that give depth without distraction.
- **Grid backgrounds**: The timeline and graph views have subtle grid patterns that work in both modes—visible enough to provide structure, invisible enough to fade into the background.

### The Floating Capsule

This was the hardest part. When you're recording, you need *some* indicator, but it can't be intrusive.

I tried:
1. A menu bar icon that pulses (too subtle—people forgot they were recording)
2. A large overlay window (too aggressive—blocked content)
3. A notification banner (felt like an error message)

What worked: **A small, draggable capsule with a waveform.**

- It floats above all windows but doesn't steal focus
- You can drag it out of the way if it's blocking something
- The waveform gives you real-time feedback that audio is being captured
- It's just translucent enough to see through, but opaque enough to be noticeable

### What I Learned

UI work is 90% restraint. Every feature wants to be a button, every state wants to be a modal.

The best interface is the one that gets out of your way—but is there exactly when you need it.`,
  },
  {
    id: 8,
    date: 'Dec 2025',
    title: 'Making Ideas Visible: The Knowledge Graph',
    category: 'Engineering',
    summary: 'Building a force-directed graph to visualize connections between notes—and learning why "organic layout" is harder than it sounds.',
    content: `I've always loved knowledge graphs. The idea that scattered thoughts could self-organize into a visual web is genuinely exciting.

But building one that *doesn't* look like a tangled mess? That's the hard part.

### Why Graphs?

Reso's Discovery feature automatically groups related notes into themes. But showing users a list of themes felt... flat. I wanted them to *see* how their ideas connect.

A graph made sense: nodes are notes, edges show similarity. Simple, right?

### The Layout Problem

Force-directed graphs work like physics simulations:
- Nodes repel each other (like magnets)
- Connected nodes attract (like springs)
- You let it "settle" into an organic shape

In theory, this produces beautiful layouts. In practice, I spent two weeks fighting an algorithm that kept producing:
1. **Hairballs**: Everything clumped in the center
2. **Runaways**: Nodes flying off to infinity
3. **Jitter**: The graph never actually settled—it vibrated forever

### What Worked

After reading papers and debugging endlessly, here's what stabilized it:

1. **Center gravity**: A gentle pull toward the canvas center prevents runaways
2. **Velocity damping**: Nodes slow down over time (like friction)
3. **Iteration limits**: Stop after 150 iterations even if it's not "perfect"—users don't care about mathematical convergence

The trick was realizing **the graph doesn't need to be optimal**. It just needs to be *readable*. Nodes that are related should be close. That's it.

### Making It Interactive

A static graph is boring. I added:
- **Drag nodes**: Rearrange the layout manually
- **Zoom/pan**: Explore large graphs
- **Click to open**: Jump to the actual note

The hardest part was making dragging feel natural. macOS has specific expectations for how drag interactions should work (acceleration curves, edge snapping). If you get it wrong, it feels "floaty."

### What I Learned

Visualization is about **tradeoffs**. A perfectly optimal layout that takes 10 seconds to compute is worse than a "good enough" layout that appears instantly.

The graph doesn't need to reveal every connection—it just needs to show enough that users think, "Huh, I didn't realize I'd been thinking about that so much."

That moment of recognition is the goal.`,
  },
  {
    id: 7,
    date: 'Nov 2025',
    title: 'Teaching an App to Find Patterns',
    category: 'Engineering',
    summary: 'How semantic clustering turns scattered voice notes into discoverable themes—and why I had to resist the urge to over-engineer it.',
    content: `One of Reso's early users told me: "I have 200 voice notes and I can't remember what half of them are about."

This is the problem with capture-focused tools. They make it *easy* to record thoughts, but then what? You're drowning in data.

I wanted Reso to help you **discover patterns** in your thinking over time—without requiring manual tagging or folder organization.

### The Core Idea

Every transcription gets converted into a semantic representation (an embedding). Notes with similar embeddings are related.

If enough related notes accumulate, they surface as a "theme" with an auto-generated name.

**Example**: You record five different thoughts about "API design" over two weeks. Reso groups them automatically and labels the theme "API Design Patterns."

### The Clustering Challenge

The algorithm itself is straightforward. But tuning it felt impossible:

- **Too aggressive**: Everything becomes one giant theme ("Work Stuff")
- **Too conservative**: Every note is its own theme (useless)

I spent days tweaking similarity thresholds before realizing: **There's no perfect threshold**.

What worked: **Adaptive clustering**.

Instead of a fixed threshold, we look at the distribution of similarity scores. If there's a natural gap (e.g., scores are either >0.75 or <0.3), we use that gap as the cutoff.

This means the "right" threshold emerges from your data, not from my arbitrary tuning.

### Naming Themes

This was surprisingly hard. How do you generate a theme name from note contents?

I tried:
1. **LLM summaries**: Accurate but slow and expensive
2. **Keyword extraction**: Fast but generic ("Project Update #47")
3. **First note title**: Simple but often misleading

What I settled on: **Hybrid approach**.

We extract frequent keywords, then use a lightweight LLM call to combine them into a coherent phrase. Cost: ~$0.001 per theme. Fast enough to run on-demand.

### What I Learned

The best AI features don't feel like AI. They feel like the app is just... paying attention.

When a theme surfaces, users don't think "wow, cool clustering algorithm." They think "huh, I *have* been thinking about that a lot."

That's the magic—making the invisible visible.`,
  },
  {
    id: 6,
    date: 'Oct 2025',
    title: "When One API Isn't Enough",
    category: 'Infrastructure',
    summary: 'Building a multi-provider routing system that automatically fails over between OpenAI, Anthropic, and Google—because rate limits are a fact of life.',
    content: `Here's a problem I didn't expect: **Reso works too well**.

Early users loved the text refinement feature—it takes raw transcriptions and cleans them up with an LLM. But they were hitting rate limits constantly.

"Error: Rate limit exceeded. Try again in 60 seconds."

This is a terrible user experience. You're in flow, recording thoughts, and suddenly... nothing works.

### The Naive Solution

"Just handle errors and show a retry button!"

No. That's pushing the problem onto the user. If I have to *think* about which API to use, the tool has failed.

### The Real Solution: Automatic Failover

I wanted this to be invisible:
1. User has multiple API providers configured (OpenAI, Anthropic, Google)
2. Reso tries the first one
3. If it hits a rate limit, automatically try the next
4. Temporarily mark the rate-limited provider as "on cooldown"
5. Retry it after a brief period

**The result**: Uninterrupted service. You never see an error.

### The Hard Part: State Management

This sounds simple, but the edge cases are brutal:

- What if *all* providers are rate-limited?
- What if a provider fails for a different reason (network error vs. rate limit)?
- What if a provider comes back online mid-cooldown?
- How do you avoid "request storms" where all users retry simultaneously?

I spent a week on edge case handling. The core routing logic is ~50 lines. The error handling is 200+.

### What I Learned

**Reliability isn't a feature—it's the absence of broken states.**

Users don't praise apps for "not crashing." They just stop using apps that *do* crash.

Good infrastructure is invisible. It's the thing you build so users never have to think about it.

Multi-provider routing isn't sexy. It doesn't make it into marketing slides. But it's the difference between "this tool is flaky" and "this tool just works."`,
  },
  {
    id: 5,
    date: 'Sep 2025',
    title: 'Privacy by Design: The PII Shield',
    category: 'Security',
    summary: 'Building a privacy layer that masks sensitive data before it touches any cloud API—because trust is earned, not assumed.',
    content: `I had a realization while building Reso: **If users don't trust it with sensitive data, they won't use it for anything important.**

Voice notes are personal. People record passwords, phone numbers, internal project names. If Reso sends that straight to OpenAI or Anthropic, it's a privacy disaster waiting to happen.

I needed a solution that was both effective and transparent.

### The Problem

Reso's text refinement feature sends transcriptions to LLMs for cleanup. But what if the transcription contains:
- Your name, email, phone number
- Credit card numbers
- Internal project codenames

Standard practice: "Just tell users not to record sensitive stuff."

**That's not good enough.** People forget. People make mistakes.

### The Solution: Automatic Masking

Before any text leaves your device, Reso scans for sensitive patterns:
- Names (detected via NLP)
- Emails, phone numbers, credit cards (regex + validation)
- Custom sensitive terms you define

It replaces them with placeholder tokens:
\`\`\`
Original: "Call John at 555-1234 about Project Phoenix"
Masked:   "Call [NAME_1] at [PHONE_1] about [SENSITIVE_1]"
\`\`\`

The LLM processes the masked version. When it responds, Reso restores the original values.

**Net result**: Your private data never leaves your Mac in readable form.

### The Hard Part: LLM Compliance

LLMs are *really* bad at preserving exact tokens. They paraphrase. They translate. They "fix" things.

I had to add verification:
1. Count tokens before sending
2. Count tokens in the response
3. If any are missing or modified, reject the response

This sounds paranoid, but I tested it: GPT-4 would occasionally "translate" tokens to different cases (like changing NAME_1 to name_1), breaking the unmask step.

Now we catch that and either auto-correct it or fail safely (return the masked version rather than risk data leakage).

### What I Learned

**Privacy can't be an afterthought.** You can't bolt it on later.

The PII Shield isn't perfect—no automated system is. But it's a commitment: Reso will never blindly send your raw transcriptions to a third party.

Users notice this. Not because they read the docs, but because they *feel* safe using it for sensitive work.

That trust is worth way more than any feature.`,
  },
  {
    id: 4,
    date: 'Aug 2025',
    title: 'From Vision to Code: Building Architect Mode',
    category: 'Product',
    summary: 'How I built a feature that eliminates the friction between seeing exactly what needs to change and communicating it to AI coding assistants.',
    content: `As developers, we often know *exactly* what we want to build. The bottleneck isn't understanding—it's communication.

When I'm polishing UI details in Cursor or Windsurf, I can see precisely what needs adjustment: this shadow needs 2px more blur, that spacing is 4px too tight, this hover state needs a subtle lift animation. I know the exact CSS properties. I know the design rationale.

But typing all of that out? Describing which element I'm referring to, its location, the surrounding context? That's where time gets wasted.

**Architect mode exists to eliminate that friction.**

### The Problem: Context Is Expensive to Type

Consider a typical refinement task: adjusting a button's visual weight.

Without Architect mode, I'd write something like:

> "In the hero section, there's a primary CTA button with the text 'Get Started'. It currently has a subtle shadow. I want to increase the shadow to make it more prominent—something like 0 4px 12px rgba(0,0,0,0.15). Also add a hover state that lifts it slightly, maybe translateY(-1px) with a transition..."

That's 60+ words just to describe what I could *point at* in 2 seconds.

### The Solution: Point, Speak, Execute

Architect mode combines screen capture with voice input:

1. **Double-tap Option** → Overlay appears
2. **Draw a box** around the exact element (no ambiguity about "which button")
3. **Speak your intent**: "Stronger shadow, subtle lift on hover, 200ms ease-out"
4. **Double-tap Option** → Structured spec generated

The output is precise and actionable:

> "Update the primary CTA button in the hero section:
> - box-shadow: 0 4px 12px rgba(0,0,0,0.15)
> - hover: translateY(-1px), box-shadow: 0 6px 16px rgba(0,0,0,0.18)
> - transition: all 200ms ease-out
> - Verify WCAG AA contrast ratio maintained"

This drops directly into Cursor. No reformatting. No clarification needed.

### Engineering Challenges

Building this required solving several hard problems:

**1. Latency budget**: Multimodal LLMs (GPT-4V, Claude 3.5 Sonnet) are slow. I implemented aggressive image compression and streaming responses to keep the interaction feeling snappy.

**2. Prompt precision**: Early iterations produced generic suggestions. The final system prompt (~300 words) enforces specific output: exact CSS values, component identification, and accessibility considerations.

**3. Context preservation**: The LLM needs to understand not just what you're pointing at, but the surrounding design system context. I extract color palettes and spacing patterns from the visible UI.

### Why This Matters

This isn't about replacing technical knowledge—it's about **removing the translation layer** between vision and execution.

When you're deep in a polishing session, iterating on micro-interactions and visual details, the last thing you want is to context-switch into "prompt writing mode." Architect mode keeps you in flow.

The best tools don't change how you think. They just remove the friction between thinking and doing.`,
  },
  {
    id: 3,
    date: 'Jul 2025',
    title: 'The Recording That Never Dies',
    category: 'Engineering',
    summary: "Why I built Shadow Recording—a crash-resilient audio system that writes incrementally, so even kernel panics can't kill your ideas.",
    content: `I've lost voice recordings before. App crashes, battery dies, system freezes—poof, gone.

That sinking feeling of "I just spent 10 minutes articulating something important and now it's lost" is devastating.

When I started building Reso, I made a promise: **This will never happen.**

### The Traditional Approach (And Why It Fails)

Most recording apps work like this:
1. Start recording → audio buffered in memory
2. Stop recording → write audio file to disk
3. Return the file path

**Problem**: If the app crashes between steps 1 and 2, the audio is gone forever.

macOS apps crash. Power cables get yanked. Kernel panics happen (rarely, but they do).

### The Solution: Incremental Writes

What if we wrote audio *while recording*, not after?

Here's how Shadow Recording works:
1. Recording starts → create a timestamped M4A file immediately
2. As audio chunks arrive, append them to the file *on disk*
3. If the app crashes, the file is already there

**Result**: Even if Reso explodes mid-sentence, your recording survives.

### The Implementation Details

This sounds simple, but M4A is a complex format. You can't just naively append raw audio bytes—the file would be corrupted.

I had to:
1. Use a streaming audio encoder that supports incremental writes
2. Ensure the M4A container is "valid" even if writing stops abruptly
3. Handle file cleanup (old shadow recordings can't pile up forever)

We keep shadow recordings for 7 days. After that, they're auto-deleted. This prevents unbounded storage growth while giving you a safety net.

### What I Learned

**The best features are the ones users never notice.**

Shadow Recording has saved dozens of recordings from crashes. But users don't think "wow, shadow recording is great!" They just think "Reso is reliable."

That's exactly what I wanted.

Reliability isn't sexy. It doesn't make for good demos. But it's the foundation of trust.

When you know your ideas are safe, you use the tool differently—you're willing to capture half-formed thoughts, experiments, mistakes.

That's when a tool stops being a utility and becomes part of your thinking process.`,
  },
  {
    id: 2,
    date: 'Jun 2025',
    title: 'Obsessing Over 10x',
    category: 'Performance',
    summary: 'How I spent two weeks hunting down compiler flags and CoreML optimizations to make transcription 10x faster than standard builds.',
    content: `I'll admit it: I'm obsessed with performance.

Not in a "premature optimization" way—I know the rule. But Reso's entire value proposition is **real-time transcription**. If it lags, it's useless.

When I first got Whisper.cpp running on Apple Silicon, I was excited. It worked! But then I checked the metrics:

**0.12x real-time speed.**

Translation: An 8-second audio clip took 66 seconds to transcribe.

That's... not real-time.

### The First Breakthrough: CoreML

Whisper has two parts: an encoder (heavy) and a decoder (lighter).

The encoder is what crushes CPUs. But Apple Silicon has a dedicated Neural Engine for exactly this kind of work.

I found a CoreML-compiled version of the Whisper encoder. Adding it was straightforward:
- CPU encoder: 0.12x speed
- **CoreML encoder: 3.2x speed**

Better! But still not enough. I wanted **10x**.

### The Second Breakthrough: Compiler Optimization

Here's where it got weird.

Whisper.cpp is written in C++. When you build a Swift app in Xcode, it optimizes *Swift code* aggressively—but treats C++ dependencies like third-party libraries and barely touches them.

I discovered you can pass custom compiler flags to the C++ build:
\`\`\`bash
-Xcc -O3           # Max optimization level
-Xcc -flto=thin    # Link-time optimization
\`\`\`

**LTO (Link-Time Optimization)** is the secret sauce. It analyzes the entire compiled program and inlines functions across file boundaries, eliminating overhead.

After adding these flags:
- Xcode build: 3.2x speed
- **Optimized build: 10.6x speed**

I nearly fell out of my chair.

### The Cost of Knowledge

Here's the frustrating part: This isn't documented anywhere obvious.

I found it by:
1. Reading Whisper.cpp GitHub issues
2. Experimenting with compiler flags
3. Profiling dozens of builds with Instruments

It took two weeks of trial and error.

But the result: Reso transcribes audio **faster than you can speak it**. On an M2 Pro, an 8-second clip processes in 0.75 seconds.

### Why This Matters

Speed isn't just a feature—it changes *how* you use a tool.

When transcription is instant, you stop thinking about it. You just record, and the text appears.

That's the difference between a tool you *use* and a tool you *forget is even running*.

The best tools disappear.`,
  },
  {
    id: 1,
    date: 'May 2025',
    title: 'Why I Built This',
    category: 'Vision',
    summary: 'Reso exists to handle the wording and structuring, so you can spend more time contemplating, creating, and building.',
    content: `There's an inherent tension in how we express ideas: speaking is fragmented, scattered, full of pauses and restarts. But writing—typing—is one of the most fluent forms of human expression.

The gap between the two is where ideas get lost.

### The Real Problem

I wanted to free up more time for building. Not transcription—*building*. The kind of deep work where you're creating, thinking, designing.

Typing takes time. Editing takes more. And when your thoughts come out messy (as spoken thoughts always do), you end up spending hours polishing what should have taken minutes.

**What if someone else handled the wording and structuring?** What if you could just *think*, and the clean output appeared?

That's what Reso does. We take care of the typing so you can focus on contemplating.

### More Than a Voice Recorder

There are plenty of recording tools and transcription APIs out there. But going from a raw thought to a usable artifact—and eventually to a *thought partner*—that journey matters.

Reso helps you:
- **Discover ideas** you didn't know you had
- **Reflect** on how you think, not just what you think
- **Track** how your time flows and what you're building

When I look back at my voice notes from months ago, I'm not just reading words. I'm seeing where my time went. What I got right. How my thinking evolved. It's a record of building—and a tool for self-discovery.

### Why Voice Is Different

Voice carries emotion in ways typing never can. That's exactly why it should stay private.

You don't want your raw recordings floating around the internet. But sharing polished text? That's depersonalized. Desensitized. Safe.

So Reso is built around three principles:
1. **Lighten the output burden** — speak freely, get clean results
2. **Privacy-first architecture** — your voice stays on your device
3. **Smart enough to understand** — learns your workflows and adapts

### The Long Game

Sometimes you'll record a scattered thought while holding your cat, hands-free, not thinking much of it. A year later, you'll look back and realize: *that was the seed of something important*.

Fragmented voice notes become fascinating over time. Where did my time go? What did I build? What patterns emerge?

I've always needed something like this. Drawing from my background in scientific research, I know that the best insights often come from revisiting raw observations with fresh eyes.

### Not Just a Recorder—A Thought Partner

This is why we named it Reso—short for *Resonate*.

We're not building a voice memo app. We're building a workflow that understands you. One that helps you succeed by getting out of your way and letting you think.

The goal isn't to capture your voice. It's to **resonate with how you work**.`,
  },
];

const resourceBlocks = [
  {
    id: 'roadmap',
    icon: Compass,
    title: 'Roadmap',
    description: 'See what we are building next and what is currently in progress.',
    linkText: 'Share feature requests',
    href: 'https://tally.so/r/obDo51',
    external: true,
  },
  {
    id: 'docs',
    icon: BookOpen,
    title: 'Docs',
    description: 'Product architecture and workflow guides.',
    linkText: 'Open Docs',
    href: '/docs',
  },
  {
    id: 'release-notes',
    icon: GitCommitHorizontal,
    title: 'Release Notes',
    description: 'Raw release artifacts and historical notes for every build.',
    linkText: 'Open GitHub releases',
    href: 'https://github.com/yg1112/reso-releases/releases',
    external: true,
  },
];

const ResourcesPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const location = useLocation();

  // Handle hash scrolling after page load
  useEffect(() => {
    if (location.hash) {
      // Wait for DOM to be fully rendered
      const timer = setTimeout(() => {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-5">Resources</p>
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            Building in public.
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            The journey behind Reso—from initial idea to production. These are the engineering decisions,
            design tradeoffs, and lessons learned along the way.
          </p>
        </section>

        <section id="journey" className="mb-20 scroll-mt-28">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">Build Journey</h2>
          </div>

          <div className="space-y-4">
            {journeyPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md px-6 py-5 cursor-pointer hover:border-black/20 dark:hover:border-white/20 transition-all"
                onClick={() => setSelectedPost(post)}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{post.summary}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-200">
                  <span>Read more</span>
                  <ArrowUpRight size={14} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="scroll-mt-28">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-8">More Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resourceBlocks.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  id={item.id}
                  className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-5"
                >
                  <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center mb-4">
                    <Icon size={17} className="text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* Full Post Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 px-8 py-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-medium">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    <span>{selectedPost.date}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">{selectedPost.title}</h2>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="px-8 py-8">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
                        {parseInlineMarkdown(paragraph.replace('### ', ''))}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('```')) {
                    const code = paragraph.replace(/```.*\n?/g, '');
                    return (
                      <pre key={idx} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 overflow-x-auto mb-4">
                        <code className="text-sm text-gray-800 dark:text-gray-200">{code}</code>
                      </pre>
                    );
                  }
                  if (paragraph.match(/^\d+\.\s/)) {
                    const items = paragraph.split('\n').filter(line => line.match(/^\d+\.\s/));
                    return (
                      <ol key={idx} className="list-decimal list-outside ml-6 mb-4 space-y-1">
                        {items.map((item, i) => (
                          <li key={i} className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {parseInlineMarkdown(item.replace(/^\d+\.\s*/, ''))}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                      <ul key={idx} className="list-disc list-outside ml-6 mb-4 space-y-1">
                        {items.map((item, i) => (
                          <li key={i} className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {parseInlineMarkdown(item.replace(/^-\s*/, ''))}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.startsWith('>')) {
                    return (
                      <blockquote key={idx} className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
                        {parseInlineMarkdown(paragraph.replace(/^>\s*/, ''))}
                      </blockquote>
                    );
                  }
                  return (
                    <p key={idx} className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {parseInlineMarkdown(paragraph)}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ResourcesPage;
