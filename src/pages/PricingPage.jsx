import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Download, Sparkles } from 'lucide-react';

const CHECKOUT_LINKS = {
  pro: 'https://reso.lemonsqueezy.com/checkout/buy/80d0e623-d94c-4a19-a4c9-afee9451a146',
  plus: 'https://reso.lemonsqueezy.com/checkout/buy/ba6f74ba-5444-4488-98c1-9402f4c59e00',
};

const TIERS = [
  {
    id: 'pro',
    name: 'Reso Pro',
    mode: 'BYOK',
    price: '$40',
    cadence: '/year',
    description: 'For power users who already have their own API keys.',
    features: [
      'Bring Your Own Key: Connect Anthropic, OpenAI, GROQ, or Gemini (Google).',
      'Pay for what you use: No markup. Pay only base token cost to model providers.',
      '1-Year Updates: Includes all new skill packs and product updates for one year.',
    ],
    cta: 'Get Pro License',
    checkoutUrl: CHECKOUT_LINKS.pro,
    footnote: 'Best for dev-heavy workflows and full token-cost control.',
  },
  {
    id: 'plus',
    name: 'Reso+',
    mode: 'All-in-One',
    price: '$10',
    cadence: '/month',
    description: 'Zero setup. Everything just works out of the box.',
    features: [
      'No API Key needed: Built-in top-tier models with no manual configuration.',
      'All API costs included: Model token usage covered by us (fair use applies).',
      'Always up to date: Unlock the newest skill packs during active subscription.',
    ],
    cta: 'Subscribe to Reso+',
    checkoutUrl: CHECKOUT_LINKS.plus,
    footnote: 'Built for users who want pure speed and zero setup overhead.',
    featured: true,
  },
];

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How should I choose between Reso Pro and Reso+?',
      a: 'Choose Reso Pro if you already manage your own model keys and want lowest raw token cost. Choose Reso+ if you want zero setup and bundled model access.',
    },
    {
      q: 'Do I need to configure API keys?',
      a: 'For Reso Pro, yes. You can use Anthropic, OpenAI, GROQ, or Gemini (Google) keys. For Reso+, no. API access is integrated and ready out of the box.',
    },
    {
      q: 'Which model providers are supported?',
      a: 'Reso currently supports Anthropic, OpenAI, GROQ, and Gemini (Google).',
    },
    {
      q: 'How does activation work after payment?',
      a: 'Both tiers issue a LemonSqueezy license key. Enter it in Reso, and your tier is verified automatically to unlock the right experience.',
    },
    {
      q: 'Are model API costs included?',
      a: 'Reso Pro does not include model costs because usage is billed directly by your provider account. Reso+ includes API costs during subscription, subject to fair use.',
    },
    {
      q: 'Can I switch tiers later?',
      a: 'Yes. You can purchase the other tier at any time, then activate it with the new license key.',
    },
  ];

  return (
    <main className="pt-28 min-h-screen pb-20">
      {/* PRICING SECTION */}
      <section>
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
              Pick the workflow.
              <br />
              Keep the speed.
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Two products, two outcomes: bring your own keys for maximum control, or go all-in-one for zero setup.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="relative mb-24">
            <div className="pointer-events-none absolute -inset-4 md:-inset-x-20 top-20 h-72 bg-gradient-to-r from-orange-500/15 via-sky-400/15 to-emerald-400/15 blur-3xl opacity-50 dark:opacity-40"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
              {TIERS.map((tier) => {
                const isDisabled = !tier.checkoutUrl;

                return (
                  <article
                    key={tier.id}
                    className={`rounded-3xl p-8 md:p-10 border backdrop-blur-xl transition-all duration-300 ${
                      tier.featured
                        ? 'bg-gradient-to-b from-gray-900 to-black text-white border-white/20 shadow-[0_25px_80px_-25px_rgba(255,255,255,0.25)]'
                        : 'bg-white/80 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <p className={`text-xs tracking-[0.2em] uppercase mb-3 ${tier.featured ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                          {tier.mode}
                        </p>
                        <h3 className="text-2xl font-medium mb-2">{tier.name}</h3>
                        <p className={`text-sm leading-relaxed max-w-xs ${tier.featured ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                          {tier.description}
                        </p>
                      </div>
                      {tier.featured && (
                        <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-wider border border-white/25 bg-white/10 text-white">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <div className={`flex items-end gap-2 mb-7 pb-7 border-b ${tier.featured ? 'border-white/15' : 'border-gray-200 dark:border-gray-800'}`}>
                      <span className="text-5xl font-medium tracking-tight">{tier.price}</span>
                      <span className={`text-sm pb-1 ${tier.featured ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>{tier.cadence}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-3 items-start">
                          <div className={`mt-0.5 shrink-0 rounded-lg p-1.5 ${tier.featured ? 'bg-white/15' : 'bg-gray-100 dark:bg-gray-800'}`}>
                            <Check size={14} className={tier.featured ? 'text-white' : 'text-gray-700 dark:text-gray-300'} />
                          </div>
                          <span className={`text-sm leading-relaxed ${tier.featured ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-3">
                      {isDisabled ? (
                        <span
                          className={`w-full group flex items-center justify-center gap-2 text-sm py-3 px-6 rounded-full font-medium bg-gray-300 text-gray-500 cursor-not-allowed`}
                        >
                          <span>{tier.cta}</span>
                          <ArrowRight size={16} />
                        </span>
                      ) : (
                        <a
                          href={tier.checkoutUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full group flex items-center justify-center gap-2 text-sm py-3 px-6 rounded-full font-medium transition-all ${
                            tier.featured
                              ? 'bg-white text-black hover:bg-gray-100'
                              : 'bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100'
                          }`}
                        >
                          <span>{tier.cta}</span>
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                      <p className={`text-xs text-center ${tier.featured ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                        {isDisabled ? 'Checkout link pending update.' : tier.footnote}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Activation Flow */}
          <div className="mb-24 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-6 md:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-gray-500 dark:text-gray-400 mb-3">Activation Flow</p>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Both plans issue a LemonSqueezy license key. Enter that key in Reso, and we automatically detect your tier to unlock either BYOK setup (Reso Pro) or built-in hosted access (Reso+).
            </p>
          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                Questions & Answers
              </h2>
              <div className="space-y-0">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full py-4 flex items-center justify-between text-left group"
                    >
                      <span className="text-sm text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="pb-4 pr-8">
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-medium text-gray-900 dark:text-gray-100 mb-8">
            Start with Reso today.
          </h2>
          <a
            href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
            download
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all px-6 py-3"
          >
            <Download size={16} />
            <span>Download for macOS</span>
          </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
