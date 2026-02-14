import React from 'react';
import { ArrowRight, Check, Lock, Sparkles } from 'lucide-react';

const featureRows = [
  {
    id: 'privacy',
    kicker: 'Privacy First',
    title: 'Keep sensitive voice data under your control.',
    summary:
      'Reso 2 handles sensitive processing on your Mac first. If a remote model is needed, data is protected before it leaves your device.',
    points: [
      'Voice fingerprint handling stays local.',
      'Sensitive fields are protected before remote requests.',
      'API keys are stored in your secure local keychain.',
    ],
    imageSlot: 'feature-privacy.png',
    imageHint: 'Security flow / privacy UI screenshot',
    imageSrc: '',
  },
  {
    id: 'local',
    kicker: 'On-Device Intelligence',
    title: 'More than dictation: it understands related context.',
    summary:
      'Reso 2 connects related notes and conversations, so follow-up requests stay aware of what you already said.',
    points: [
      'Finds related notes across sessions.',
      'Runs directly on Apple Silicon for low latency.',
      'Stays responsive during long work sessions.',
    ],
    imageSlot: 'feature-local-engine.png',
    imageHint: 'Local processing / timeline or clustering screenshot',
    imageSrc: '',
  },
  {
    id: 'skills',
    kicker: 'Smart Skills',
    title: 'Turn rough thoughts into clear agent prompts.',
    summary:
      'Reso 2 helps users describe problems clearly, especially when coding or debugging, so agents can respond with fewer retries.',
    points: [
      'Adjust tone: Direct, Friendly, Structured, Precise.',
      'Use workflows like Architect and Code Companion.',
      'Generate clearer prompts for Cursor and other agents.',
    ],
    imageSlot: 'feature-skills.png',
    imageHint: 'Skill picker / prompt transformation screenshot',
    imageSrc: '',
  },
  {
    id: 'routing',
    kicker: 'Adaptive Routing',
    title: 'Use the right model for the right task.',
    summary:
      'Reso 2 routes simple tasks to lighter models and reserves stronger models for hard tasks, while keeping context continuity.',
    points: [
      'Supports Anthropic, OpenAI, GROQ, and Gemini.',
      'Avoids spending premium tokens on simple requests.',
      'Keeps references and context across follow-up steps.',
    ],
    imageSlot: 'feature-routing.png',
    imageHint: 'Model routing / continuity screenshot',
    imageSrc: '',
  },
];

const PlaceholderWindow = ({ row }) => {
  return (
    <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 dark:from-gray-900 dark:via-black dark:to-gray-900"></div>

      <div className="relative h-full p-4 md:p-5">
        <div className="h-9 rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-white/5 px-3 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20"></span>
        </div>

        <div className="mt-3 h-[calc(100%-3.25rem)] rounded-2xl border border-dashed border-black/20 dark:border-white/20 bg-white/60 dark:bg-black/30 flex items-center justify-center">
          {row.imageSrc ? (
            <img
              src={row.imageSrc}
              alt={row.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center px-6">
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 mb-1">Screenshot Placeholder</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{row.imageHint}</p>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs border border-black/10 dark:border-white/15 text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-white/10">
                /public/{row.imageSlot}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-4">Core Capability Stack</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-4">
            Product-level intelligence, explained with real surfaces.
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Four focused capabilities: privacy, local intelligence, prompt clarity, and adaptive model routing.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {featureRows.map((row, index) => {
            const isReverse = index % 2 === 1;
            return (
              <article
                key={row.id}
                className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/75 dark:bg-black/45 backdrop-blur-xl p-5 md:p-8"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-center ${isReverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="lg:col-span-7">
                    <PlaceholderWindow row={row} />
                  </div>

                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 mb-3">
                      {row.id === 'privacy' && <Lock size={14} />}
                      {row.id === 'skills' && <Sparkles size={14} />}
                      {row.id === 'routing' && <ArrowRight size={14} />}
                      {row.id === 'local' && <span className="w-3 h-3 rounded-full bg-gray-400"></span>}
                      <span>{row.kicker}</span>
                    </div>

                    <h3 className="text-2xl md:text-[2rem] leading-tight font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-3">
                      {row.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {row.summary}
                    </p>

                    <ul className="space-y-2.5">
                      {row.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span className="mt-0.5 shrink-0 p-1 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10">
                            <Check size={11} className="text-gray-700 dark:text-gray-300" />
                          </span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
