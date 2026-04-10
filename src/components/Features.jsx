import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const CapsuleShowcase = lazy(() =>
  import('./mockups/CapsuleMockup').then((m) => ({ default: m.CapsuleShowcase })),
);
const PrivacyShowcase = lazy(() =>
  import('./mockups/PrivacyMockup').then((m) => ({ default: m.PrivacyShowcase })),
);
const ResoSettingsWindow = lazy(() =>
  import('./mockups/ResoSettingsWindow').then((m) => ({ default: m.ResoSettingsWindow })),
);
const NebulaShowcase = lazy(() =>
  import('./mockups/NebulaMockup').then((m) => ({ default: m.NebulaShowcase })),
);

// Wrappers that lock the initial settings tab for each feature card.
const OrchestrateCard = (props) => <ResoSettingsWindow defaultTab="workflow" {...props} />;
const MindscapeCard = (props) => <ResoSettingsWindow defaultTab="indexing" {...props} />;

const featureCopy = {
  en: {
    sectionTitle: 'Built for how you think',
    sectionSubtitle: 'From capture to insight—a workspace that adapts to your workflow.',
    features: [
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
          'Capture only starts when you trigger it. Reso keeps recovery audio local, then routes transcription and generation through Reso Engine or your own provider based on your setup.',
        learnMoreText: 'Learn about privacy',
        learnMoreLink: '/docs#privacy',
        imageSlot: 'feature-privacy.png',
        imageHint: 'Permissions / data flow / provider routing',
      },
      {
        id: 'orchestrate',
        title: 'Don\'t just dictate. Orchestrate.',
        description:
          'Reso isn\'t a smart keyboard; it\'s a cognitive pipeline. Your voice passes through your custom rules, references your active app\'s context, and delivers a polished result exactly where you need it.',
        learnMoreText: 'See how Voice Workflow works',
        learnMoreLink: '/docs#workflow',
        imageSlot: 'feature-orchestrate.png',
        imageHint: 'Voice Workflow pipeline',
      },
      {
        id: 'discovery',
        title: 'Your thoughts, drifting in a Nebula',
        description:
          'Every recording gets embedded and placed in your private Nebula. Drift through clusters to see how your thinking has connected over time—no folders, no tags.',
        learnMoreText: 'Learn about Nebula',
        learnMoreLink: '/docs#nebula',
        imageSlot: 'feature-discovery.png',
        imageHint: 'Nebula clustering view',
      },
      {
        id: 'mindscape',
        title: 'Build your personalized AI Memory.',
        description:
          'Connect Obsidian vaults, Apple Notes, or local folders. Reso embeds them into your private Memory — the grounding source every voice workflow draws from, and the foundation Nebula clusters into a navigable galaxy of ideas.',
        learnMoreText: 'Learn about Memory',
        learnMoreLink: '/docs#memory',
        imageSlot: 'feature-memory.png',
        imageHint: 'Personalized AI memory',
      },
    ],
  },
  zh: {
    sectionTitle: '为你的思考方式而构建',
    sectionSubtitle: '从记录到洞察，一个会适应你 workflow 的工作空间。',
    features: [
      {
        id: 'capture',
        title: '在灵感出现时立即捕捉',
        description:
          '想法稍纵即逝。Reso 在后台随时待命，灵感一来就能记录。无需先打开应用，没有多余步骤，开口就能继续前进。',
        learnMoreText: '了解无摩擦捕捉',
        learnMoreLink: '/docs#capture',
        imageSlot: 'feature-capture.png',
        imageHint: 'Shadow recording / notch bar UI',
      },
      {
        id: 'privacy',
        title: '你的想法只属于你',
        description:
          '只有在你主动触发时才会开始捕捉。Reso 会把恢复用音频保留在本地，再根据你的设置把转写和生成路由到 Reso Engine 或你自己的 provider。',
        learnMoreText: '了解隐私设计',
        learnMoreLink: '/docs#privacy',
        imageSlot: 'feature-privacy.png',
        imageHint: 'Permissions / data flow / provider routing',
      },
      {
        id: 'orchestrate',
        title: '别只是听写，编排你的工作流',
        description:
          'Reso 不是一个智能键盘——它是一个认知流水线。你的声音会经过你定义的规则链、引用当前 app 的上下文，然后把精炼后的结果直接交付到你需要的地方。',
        learnMoreText: '了解 Voice Workflow',
        learnMoreLink: '/docs#workflow',
        imageSlot: 'feature-orchestrate.png',
        imageHint: 'Voice Workflow pipeline',
      },
      {
        id: 'discovery',
        title: '在你的星云里漂流',
        description:
          '每条记录都会做语义 embedding 落到你私人的星云里。漂过聚类节点，就能看到你的思考是如何随时间联结的——不用文件夹，不用标签。',
        learnMoreText: '了解 Nebula',
        learnMoreLink: '/docs#nebula',
        imageSlot: 'feature-discovery.png',
        imageHint: 'Nebula clustering view',
      },
      {
        id: 'mindscape',
        title: '构建你的私人 AI 记忆库',
        description:
          '接入 Obsidian、Apple Notes 或本地文件夹。Reso 把它们嵌入你的私人 Memory ——每一次 Voice Workflow 调用的 grounding 源，也是 Nebula 聚类成可漫游星云的地基。',
        learnMoreText: '了解 Memory',
        learnMoreLink: '/docs#memory',
        imageSlot: 'feature-memory.png',
        imageHint: 'Personalized AI memory',
      },
    ],
  },
  ja: {
    sectionTitle: '思考の流れに合わせて設計',
    sectionSubtitle: 'キャプチャから洞察まで。あなたの workflow に適応するワークスペース。',
    features: [
      {
        id: 'capture',
        title: '思いついた瞬間にキャプチャ',
        description:
          'アイデアは一瞬で消えます。Reso はバックグラウンドで待機し、ひらめいた瞬間に録音できます。アプリを開く手間は不要です。',
        learnMoreText: 'Frictionless Capture を見る',
        learnMoreLink: '/docs#capture',
        imageSlot: 'feature-capture.png',
        imageHint: 'Shadow recording / notch bar UI',
      },
      {
        id: 'privacy',
        title: 'あなたの思考はあなたのもの',
        description:
          'capture はあなたが明示的に起動したときだけ始まります。Reso は recovery 用 audio をローカルに保持し、その後の transcription と generation は設定に応じて Reso Engine か自分の provider に流します。',
        learnMoreText: 'Privacy を見る',
        learnMoreLink: '/docs#privacy',
        imageSlot: 'feature-privacy.png',
        imageHint: 'Permissions / data flow / provider routing',
      },
      {
        id: 'orchestrate',
        title: 'ただの口述ではなく、思考をオーケストレーションする',
        description:
          'Reso はスマートなキーボードではなく、認知のパイプラインです。あなたの声はカスタムルールを通り、現在の app のコンテキストを参照し、洗練された結果を必要な場所へ届けます。',
        learnMoreText: 'Voice Workflow を見る',
        learnMoreLink: '/docs#workflow',
        imageSlot: 'feature-orchestrate.png',
        imageHint: 'Voice Workflow pipeline',
      },
      {
        id: 'discovery',
        title: 'あなたの思考が、Nebula を漂う',
        description:
          'すべての録音は意味 embedding され、あなただけの Nebula に配置されます。クラスタを漂いながら、時間とともに思考がどう繋がってきたかを見渡せます — フォルダもタグも不要。',
        learnMoreText: 'Nebula を見る',
        learnMoreLink: '/docs#nebula',
        imageSlot: 'feature-discovery.png',
        imageHint: 'Nebula clustering view',
      },
      {
        id: 'mindscape',
        title: 'あなただけの AI Memory を構築',
        description:
          'Obsidian、Apple Notes、ローカルフォルダを Reso に接続。あなたの私的な Memory に embedding され、Voice Workflow の grounding 源となり、Nebula が漂える星雲としてクラスタ化する基盤になります。',
        learnMoreText: 'Memory を見る',
        learnMoreLink: '/docs#memory',
        imageSlot: 'feature-memory.png',
        imageHint: 'Personalized AI memory',
      },
    ],
  },
};

/**
 * Feature mockup configuration — each Component is a self-sized "card" that
 * stretches to its container width. No transform scaling needed; SVG viewBox
 * and percentage layouts handle the responsiveness.
 */
const FEATURE_MOCKUP_COMPONENTS = {
  capture: CapsuleShowcase,
  privacy: PrivacyShowcase,
  orchestrate: OrchestrateCard,
  discovery: NebulaShowcase,
  mindscape: MindscapeCard,
};

// Features that need an explicit window aspect ratio (since ResoSettingsWindow stretches).
const FEATURE_ASPECT_OVERRIDE = {
  orchestrate: '16 / 11',
  mindscape: '16 / 11',
};

const MockupSkeleton = () => (
  <div
    style={{
      width: '100%',
      aspectRatio: '760 / 420',
      borderRadius: 16,
      background: 'linear-gradient(180deg, #0c0c0e 0%, #08080a 100%)',
      border: '1px solid rgba(255,255,255,0.07)',
    }}
  />
);

const FeatureMockup = ({ feature }) => {
  const Component = FEATURE_MOCKUP_COMPONENTS[feature.id];
  if (!Component) return null;
  const aspect = FEATURE_ASPECT_OVERRIDE[feature.id];

  // ResoSettingsWindow needs an explicit aspect-ratio container since it
  // stretches to fill its parent. Other showcases bring their own aspect.
  if (aspect) {
    return (
      <div className="relative w-full">
        <div
          aria-hidden
          className="absolute -inset-8 -z-10"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, rgba(120, 80, 255, 0.16) 0%, rgba(120, 80, 255, 0) 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div style={{ width: '100%', aspectRatio: aspect }}>
          <Suspense fallback={<MockupSkeleton />}>
            <Component />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(120, 80, 255, 0.16) 0%, rgba(120, 80, 255, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
      <Suspense fallback={<MockupSkeleton />}>
        <Component />
      </Suspense>
    </div>
  );
};

const Features = () => {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(featureCopy, language);
  const features = copy.features;

  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-4">
            {copy.sectionTitle}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {copy.sectionSubtitle}
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

                {/* Mockup */}
                <div>
                  <FeatureMockup feature={feature} />
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
