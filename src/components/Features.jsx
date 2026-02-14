import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    id: 'capture',
    title: 'Capture thoughts as they happen',
    description:
      'Ideas are fleeting. Reso runs in the background, ready to record whenever inspiration strikes. No app to open, no friction—just speak and move on.',
    learnMoreText: 'Learn about frictionless capture',
    learnMoreLink: '/docs#capture',
    imageSlot: 'feature-capture.png',
    imageHint: 'Shadow recording / notch bar UI',
  },
  {
    id: 'privacy',
    title: 'Your thoughts stay yours',
    description:
      'Transcription runs locally on Apple Silicon. When cloud features are needed, sensitive data is masked before it ever leaves your Mac.',
    learnMoreText: 'Learn about privacy',
    learnMoreLink: '/docs#privacy',
    imageSlot: 'feature-privacy.png',
    imageHint: 'PII Shield / local processing flow',
  },
  {
    id: 'skills',
    title: 'It understands what you want to do',
    description:
      'Reso doesn\'t just transcribe—it recognizes intent. Meeting notes, quick tasks, deep thinking sessions: each gets handled differently.',
    learnMoreText: 'Learn about dynamic skills',
    learnMoreLink: '/docs#skills',
    imageSlot: 'feature-skills.png',
    imageHint: 'Intent classification / skill switching',
  },
  {
    id: 'discovery',
    title: 'Ideas connect themselves',
    description:
      'Every note gets embedded. Related thoughts cluster automatically over time. You don\'t organize—patterns emerge on their own.',
    learnMoreText: 'Learn about discovery',
    learnMoreLink: '/docs#discovery',
    imageSlot: 'feature-discovery.png',
    imageHint: 'Knowledge graph / Mindscape view',
  },
  {
    id: 'routing',
    title: 'The right model for every task',
    description:
      'Simple requests go to fast models. Complex analysis routes to powerful ones. Reso handles the orchestration so you don\'t have to.',
    learnMoreText: 'Learn about smart routing',
    learnMoreLink: '/docs#routing',
    imageSlot: 'feature-routing.png',
    imageHint: 'Multi-LLM routing diagram',
  },
];

const FeatureImagePlaceholder = ({ feature }) => (
  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center px-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center">
          <div className="w-8 h-8 rounded-lg bg-black/10 dark:bg-white/15" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{feature.imageHint}</p>
        <span className="text-xs text-gray-400 dark:text-gray-500">{feature.imageSlot}</span>
      </div>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-4">
            Built for how you think
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            From capture to insight—a workspace that adapts to your workflow.
          </p>
        </div>

        {/* Feature Rows */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const isReverse = index % 2 === 1;
            return (
              <article
                key={feature.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isReverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Text Content */}
                <div className="max-w-lg">
                  <h3 className="text-2xl md:text-[2.25rem] leading-tight font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.learnMoreLink}
                    className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-medium hover:text-amber-700 dark:hover:text-amber-400 transition-colors group"
                  >
                    <span>{feature.learnMoreText}</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Image */}
                <div>
                  <FeatureImagePlaceholder feature={feature} />
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
