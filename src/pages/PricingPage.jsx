import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Download } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const CHECKOUT_LINKS = {
  free: 'https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg',
  plus: 'https://reso.lemonsqueezy.com/checkout/buy/ba6f74ba-5444-4488-98c1-9402f4c59e00',
};

const pricingCopy = {
  en: {
    titleLine1: 'Pick the workflow.',
    titleLine2: 'Keep the speed.',
    subtitle:
      'A voice-first dictation and writing workflow: capture diary notes, shape drafts, and write with commands.',
    tiers: [
      {
        id: 'free',
        name: 'Reso',
        mode: 'Free',
        priceMain: 'Free',
        priceSup: '',
        cadence: '',
        description: 'For developers or users who already have API keys',
        features: [
          'Bring your own API for LLM access.',
          'Core dictation, text processing, and command drafting.',
          'Local-first. Voice never leaves your device.',
        ],
        cta: 'Download Free',
        checkoutUrl: CHECKOUT_LINKS.free,
        footnote: 'Free forever',
      },
      {
        id: 'plus',
        name: 'Reso Pro',
        mode: 'All-in-One',
        priceMain: '$19',
        priceSup: '.99',
        cadence: '/month',
        description: 'Premium model credits included, with all productivity tools unlocked.',
        features: [
          'No API setup needed. Ready out of the box.',
          'Long-term memory & smart workflows: generate reports, tweets, or code instantly.',
          'Local-first. Zero data retention. Your thoughts stay yours.',
        ],
        cta: 'Start Subscription',
        checkoutUrl: CHECKOUT_LINKS.plus,
        footnote: 'Cancel anytime · 30-day refund · Supporting indie development',
        featured: true,
      },
    ],
    mostPopular: 'Most Popular',
    checkoutPending: 'Checkout link pending update.',
    privacyPromise: "Your thoughts stay yours. We don't train on your data.",
    howItWorks: 'How it works',
    steps: ['Get your key', 'Paste in Reso', "You're all set"],
    stepDescription:
      'Reso Free starts with your own API key. Reso Pro connects your subscription instantly for an all-in-one workflow.',
    faqTitle: 'Questions & Answers',
    faqs: [
      {
        q: 'How should I choose between Reso Free and Reso Pro?',
        a: "Choose Reso Free if you're a developer or already have API keys for core voice dictation and writing. Choose Reso Pro for instant setup with premium models and unlocked productivity tools.",
      },
      {
        q: 'Do I need to configure API keys?',
        a: 'For Reso Free, yes. You can use Anthropic, OpenAI, Groq, or Google keys. For Reso Pro, no. API access is integrated and ready out of the box.',
      },
      {
        q: 'What can I do with Reso as a voice tool?',
        a: 'Reso is built for diary and dictation capture, shadow writing, and write-with-command workflows.',
      },
      {
        q: 'Which model providers are supported?',
        a: 'Reso currently supports Anthropic, OpenAI, Groq, and Google.',
      },
      {
        q: 'How does activation work after payment?',
        a: 'Reso Free is free and can be used right away with your own API key. Reso Pro issues a LemonSqueezy license key that unlocks the all-in-one subscription.',
      },
      {
        q: 'Are model API costs included?',
        a: 'Reso Free does not include model costs because usage is billed directly by your provider account. Reso Pro includes API costs during subscription, subject to fair use.',
      },
      {
        q: 'Can I switch tiers later?',
        a: 'Yes. You can purchase the other tier at any time, then activate it with the new license key.',
      },
    ],
    ctaTitle: 'Start with Reso today.',
    ctaButton: 'Download for macOS',
  },
  zh: {
    titleLine1: '选择你的 workflow。',
    titleLine2: '保留你的速度。',
    subtitle: '语音优先的写作与记录流程：捕捉日记灵感、整理草稿、用命令完成写作。',
    tiers: [
      {
        id: 'free',
        name: 'Reso',
        mode: 'Free',
        priceMain: '免费',
        priceSup: '',
        cadence: '',
        description: '适合开发者或已有 API Key 的极客用户',
        features: [
          '使用你自己的 API 访问大语言模型。',
          '核心听写、文本处理与命令草拟能力。',
          '本地优先，语音永不离开设备。',
        ],
        cta: '免费下载',
        checkoutUrl: CHECKOUT_LINKS.free,
        footnote: '永久免费',
      },
      {
        id: 'plus',
        name: 'Reso Pro',
        mode: 'All-in-One',
        priceMain: '$19',
        priceSup: '.99',
        cadence: '/月',
        description: '包含高级模型额度，并解锁所有自动化生产力工具。',
        features: [
          '无需配置 API Key，开箱即用。',
          '解锁长期记忆与智能工作流：一键生成周报、推文或代码。',
          '本地优先，零数据留存，想法只属于你。',
        ],
        cta: '开始订阅',
        checkoutUrl: CHECKOUT_LINKS.plus,
        footnote: '随时取消 · 30 天退款 · 支持独立开发',
        featured: true,
      },
    ],
    mostPopular: '最受欢迎',
    checkoutPending: 'Checkout 链接待更新。',
    privacyPromise: '你的想法只属于你。我们不会用你的数据做训练。',
    howItWorks: '如何开始',
    steps: ['获取密钥', '粘贴到 Reso', '即可开始使用'],
    stepDescription: 'Reso Free 使用你自己的 API key。Reso Pro 订阅开通后即可一站式使用。',
    faqTitle: '常见问题',
    faqs: [
      {
        q: 'Reso Free 和 Reso Pro 该如何选择？',
        a: '如果你是开发者或已有 API Key，需要核心听写与写作能力，选 Reso Free。若你想要开箱即用的高级模型与完整生产力工具，选 Reso Pro。',
      },
      {
        q: '需要自己配置 API key 吗？',
        a: 'Reso Free 需要。支持 Anthropic、OpenAI、Groq、Google。Reso Pro 不需要，开通后即可直接使用。',
      },
      {
        q: 'Reso 作为语音工具可以做什么？',
        a: 'Reso 适用于日记与听写记录、shadow writing 以及 write-with-command workflows。',
      },
      {
        q: '支持哪些模型服务商？',
        a: '目前支持 Anthropic、OpenAI、Groq、Google。',
      },
      {
        q: '支付后如何激活？',
        a: 'Reso Free 可直接使用并绑定你的 API key。Reso Pro 会通过 LemonSqueezy 发放 license key，用于激活订阅。',
      },
      {
        q: '模型 API 成本是否包含在内？',
        a: 'Reso Free 不包含模型成本，按你在服务商账号中的实际用量计费。Reso Pro 在订阅期间包含 API 使用，遵循合理使用原则。',
      },
      {
        q: '之后可以切换套餐吗？',
        a: '可以。你随时可购买另一套餐，并用新的 license key 激活。',
      },
    ],
    ctaTitle: '现在开始使用 Reso。',
    ctaButton: '下载 macOS 版本',
  },
  ja: {
    titleLine1: 'workflow を選ぶ。',
    titleLine2: 'スピードはそのまま。',
    subtitle: '音声優先の記録・執筆フロー。日記メモを捉え、下書きを整え、コマンドで仕上げます。',
    tiers: [
      {
        id: 'free',
        name: 'Reso',
        mode: 'Free',
        priceMain: '無料',
        priceSup: '',
        cadence: '',
        description: '開発者や既に API キーをお持ちのユーザー向け',
        features: [
          '自分の API で LLM にアクセス。',
          'コアなディクテーション、テキスト処理、コマンド下書き機能。',
          'ローカル優先。音声はデバイスから出ません。',
        ],
        cta: '無料でダウンロード',
        checkoutUrl: CHECKOUT_LINKS.free,
        footnote: 'ずっと無料',
      },
      {
        id: 'plus',
        name: 'Reso Pro',
        mode: 'All-in-One',
        priceMain: '$19',
        priceSup: '.99',
        cadence: '/月',
        description: 'プレミアムモデルクレジット込み、全生産性ツール解放。',
        features: [
          'API 設定不要。すぐに使える。',
          '長期記憶＆スマートワークフロー：レポート、ツイート、コード生成が即座に。',
          'ローカル優先。データ保持ゼロ。思考は自分だけのもの。',
        ],
        cta: 'サブスクを開始',
        checkoutUrl: CHECKOUT_LINKS.plus,
        footnote: 'いつでも解約可 · 30日返金 · インディー開発支援',
        featured: true,
      },
    ],
    mostPopular: '人気プラン',
    checkoutPending: 'Checkout リンクは更新待ちです。',
    privacyPromise: 'あなたの思考はあなたのもの。データを学習に利用しません。',
    howItWorks: '利用開始まで',
    steps: ['キーを取得', 'Reso に貼り付け', '準備完了'],
    stepDescription: 'Reso Free は自分の API key で開始。Reso Pro は購読後すぐに一体型 workflow を利用できます。',
    faqTitle: 'よくある質問',
    faqs: [
      {
        q: 'Reso Free と Reso Pro はどう選べばよいですか？',
        a: '開発者または既に API キーをお持ちで、コアな dictation と執筆機能が必要なら Reso Free。すぐに使えるプレミアムモデルと完全な生産性ツールをお求めなら Reso Pro が適しています。',
      },
      {
        q: 'API key の設定は必要ですか？',
        a: 'Reso Free は必要です。Anthropic / OpenAI / Groq / Google に対応。Reso Pro は不要で、すぐに使えます。',
      },
      {
        q: 'Reso を音声ツールとして何に使えますか？',
        a: '日記・dictation の記録、shadow writing、write-with-command workflows に最適化されています。',
      },
      {
        q: '対応しているモデルプロバイダは？',
        a: 'Anthropic、OpenAI、Groq、Google をサポートしています。',
      },
      {
        q: '支払い後のアクティベーションは？',
        a: 'Reso Free はすぐ利用でき、API key を設定します。Reso Pro は LemonSqueezy の license key でサブスク機能を有効化します。',
      },
      {
        q: 'モデル API コストは含まれますか？',
        a: 'Reso Free は含まれず、各プロバイダのアカウントで課金されます。Reso Pro はサブスク期間中の API 利用を含みます（公正利用範囲内）。',
      },
      {
        q: '後からプラン変更できますか？',
        a: 'はい。別プランを購入後、新しい license key で切り替え可能です。',
      },
    ],
    ctaTitle: 'Reso を今すぐ始める。',
    ctaButton: 'macOS 版をダウンロード',
  },
};

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(pricingCopy, language);

  return (
    <main className="pt-28 min-h-screen pb-20">
      <section>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
              {copy.titleLine1}
              <br />
              {copy.titleLine2}
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {copy.subtitle}
            </p>
          </div>

          <div className="relative mb-24">
            <div className="pointer-events-none absolute -inset-4 md:-inset-x-20 top-20 h-72 bg-gradient-to-r from-orange-500/15 via-sky-400/15 to-emerald-400/15 blur-3xl opacity-50 dark:opacity-40"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
              {copy.tiers.map((tier) => {
                const isDisabled = !tier.checkoutUrl;

                return (
                  <article
                    key={tier.id}
                    className={`group relative rounded-3xl p-8 md:p-10 backdrop-blur-xl transition-all duration-300 ${
                      tier.featured
                        ? 'text-white hover:-translate-y-1'
                        : 'bg-white/80 dark:bg-[#0A0A0A]/90 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1'
                    }`}
                    style={tier.featured ? { background: 'linear-gradient(to bottom, #111111, #050505)' } : undefined}
                  >
                    {tier.featured && (
                      <>
                        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/25 via-white/10 to-transparent opacity-100 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#111111] to-[#050505]" />
                        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                      </>
                    )}

                    <div className="relative">
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <p className={`text-xs tracking-[0.2em] uppercase mb-3 font-mono ${tier.featured ? 'text-gray-400' : 'text-gray-500 dark:text-gray-500'}`}>
                            {tier.mode}
                          </p>
                          <h3 className="text-2xl font-medium mb-2">{tier.name}</h3>
                          <p className={`text-sm leading-relaxed max-w-xs ${tier.featured ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'}`}>
                            {tier.description}
                          </p>
                        </div>
                        {tier.featured && (
                          <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-wider border border-white/20 bg-white/5 text-gray-300 backdrop-blur-sm">
                            {copy.mostPopular}
                          </span>
                        )}
                      </div>

                      <div className="flex items-baseline gap-1.5 mb-7 pb-7 relative">
                        <span className="text-5xl font-medium tracking-tight font-mono tabular-nums">
                          {tier.priceMain}
                        </span>
                        {tier.priceSup && (
                          <span className="text-lg font-mono tabular-nums -translate-y-3 opacity-70">
                            {tier.priceSup}
                          </span>
                        )}
                        {tier.cadence && (
                          <span className={`text-sm ml-1 ${tier.featured ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                            {tier.cadence}
                          </span>
                        )}

                        <div className={`absolute bottom-0 left-0 right-0 h-px ${
                          tier.featured
                            ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent'
                        }`} />
                      </div>

                      <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3 items-start group/item">
                            <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                              tier.featured
                                ? 'bg-white/10 ring-1 ring-white/20 group-hover/item:bg-white/15'
                                : 'bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 group-hover/item:ring-gray-300 dark:group-hover/item:ring-gray-600'
                            }`}>
                              <Check size={11} strokeWidth={2.5} className={tier.featured ? 'text-white' : 'text-gray-600 dark:text-gray-400'} />
                            </div>
                            <span className={`text-sm leading-relaxed transition-colors ${
                              tier.featured
                                ? 'text-gray-300 group-hover/item:text-gray-200'
                                : 'text-gray-600 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-200'
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col gap-3">
                        {isDisabled ? (
                          <span className="w-full group flex items-center justify-center gap-2 text-sm py-3 px-6 rounded-full font-medium bg-gray-300 text-gray-500 cursor-not-allowed">
                            <span>{tier.cta}</span>
                            <ArrowRight size={16} />
                          </span>
                        ) : (
                          <a
                            href={tier.checkoutUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative w-full flex items-center justify-center gap-2 text-sm py-3 px-6 rounded-full font-medium transition-all overflow-hidden ${
                              tier.featured
                                ? 'bg-white text-black hover:bg-gray-50'
                                : 'bg-[#0A0A0A] text-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-gray-100'
                            }`}
                            style={{
                              boxShadow: tier.featured
                                ? 'inset 0 1px 0 0 rgba(255,255,255,0.2), inset 0 -1px 0 0 rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'
                                : 'inset 0 1px 0 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.2)',
                            }}
                          >
                            <span>{tier.cta}</span>
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                          </a>
                        )}
                        <p className={`text-[11px] text-center ${tier.featured ? 'text-gray-500' : 'text-gray-400 dark:text-gray-500'}`}>
                          {isDisabled ? copy.checkoutPending : tier.footnote}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-16">
            {copy.privacyPromise}
          </p>

          <div className="mb-24 py-8">
            <p className="text-xs tracking-[0.18em] uppercase text-gray-400 dark:text-gray-500 mb-10 font-mono text-center">{copy.howItWorks}</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mb-10">
              {copy.steps.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm font-mono text-gray-900 dark:text-gray-100">
                      {index + 1}
                    </span>
                    <span className="text-gray-900 dark:text-gray-100 font-medium">{step}</span>
                  </div>

                  {index < copy.steps.length - 1 && (
                    <>
                      <div className="hidden md:block w-16 border-b border-dashed border-gray-300 dark:border-gray-700 mx-4" />
                      <div className="md:hidden h-4 border-l border-dashed border-gray-300 dark:border-gray-700" />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-xl mx-auto leading-relaxed">
              {copy.stepDescription}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                {copy.faqTitle}
              </h2>
              <div className="space-y-0">
                {copy.faqs.map((faq, index) => (
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

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-medium text-gray-900 dark:text-gray-100 mb-8">
              {copy.ctaTitle}
            </h2>
            <a
              href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
              download
              className="inline-flex items-center gap-2 bg-[#0A0A0A] dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-black dark:hover:bg-gray-100 transition-all px-6 py-3"
              style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.2)' }}
            >
              <Download size={16} />
              <span>{copy.ctaButton}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
