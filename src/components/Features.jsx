import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const CapsuleShowcase = lazy(() =>
  import('./mockups/CapsuleMockup').then((m) => ({ default: m.CapsuleShowcase })),
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
    sectionTitle: 'Think out loud. We handle the rest.',
    sectionSubtitle:
      'A workspace that adapts to your mind, from first thought to final output.',
    features: [
      {
        id: 'capture',
        title: 'Speak your mind, anywhere.',
        description:
          'Press Option in any app to start talking. Reso captures your voice, reads your screen context, and drops polished text right at your cursor.',
        learnMoreText: 'See how capture works',
        learnMoreLink: '/docs#capture',
        imageSlot: 'feature-capture.png',
        imageHint: 'Shadow recording / notch bar UI',
      },
      {
        id: 'orchestrate',
        title: 'Build pipelines, not just prompts.',
        description:
          'Route your voice through custom workflows. Translate, format, or pipe the output straight into shell scripts and macOS Shortcuts.',
        learnMoreText: 'See how Voice Workflow works',
        learnMoreLink: '/docs#workflow',
        imageSlot: 'feature-orchestrate.png',
        imageHint: 'Voice Workflow pipeline',
      },
      {
        id: 'mindscape',
        title: 'Your knowledge, strictly local.',
        description:
          'Connect Obsidian or Apple Notes to give Reso your personal context. Everything stays on your Mac — your private data never trains a public model.',
        learnMoreText: 'Learn about Memory',
        learnMoreLink: '/docs#memory',
        imageSlot: 'feature-memory.png',
        imageHint: 'Personalized AI memory',
      },
      {
        id: 'discovery',
        title: 'Watch your ideas connect.',
        description:
          'Every recording lands in Nebula, a 3D space where thoughts cluster by meaning. Drift through your ideas and find connections without folders or tags.',
        learnMoreText: 'Explore Nebula',
        learnMoreLink: '/docs#nebula',
        imageSlot: 'feature-discovery.png',
        imageHint: 'Nebula clustering view',
      },
    ],
  },
  zh: {
    sectionTitle: '大声思考，剩下的交给我们。',
    sectionSubtitle: '从闪念到输出，一个顺应你思维直觉的工作空间。',
    features: [
      {
        id: 'capture',
        title: '随时随地，开口即写。',
        description:
          '在任何软件里按住 Option 即可说话。Reso 会捕捉语音、读取屏幕上下文，把精炼后的文字直接落到光标处。',
        learnMoreText: '看看捕捉怎么用',
        learnMoreLink: '/docs#capture',
        imageSlot: 'feature-capture.png',
        imageHint: 'Shadow recording / notch bar UI',
      },
      {
        id: 'orchestrate',
        title: '编排工作流，不只是写提示词。',
        description:
          '让语音穿过你定义的处理管线。翻译、格式化，或者把结果直接交给 Shell 脚本与快捷指令——一气呵成。',
        learnMoreText: '了解 Voice Workflow',
        learnMoreLink: '/docs#workflow',
        imageSlot: 'feature-orchestrate.png',
        imageHint: 'Voice Workflow pipeline',
      },
      {
        id: 'mindscape',
        title: '你的知识库，绝对本地。',
        description:
          '接入 Obsidian 或 Apple Notes，让 Reso 拥有你的专属语境。所有文件都留在 Mac 上，你的私人数据永远不会被用于训练公开模型。',
        learnMoreText: '了解 Memory',
        learnMoreLink: '/docs#memory',
        imageSlot: 'feature-memory.png',
        imageHint: 'Personalized AI memory',
      },
      {
        id: 'discovery',
        title: '看见想法自然生长。',
        description:
          '每段录音都会落进 Nebula——一个按语义自动聚类的 3D 空间。没有文件夹，没有标签，在漫游中发现思维的隐秘关联。',
        learnMoreText: '走进 Nebula',
        learnMoreLink: '/docs#nebula',
        imageSlot: 'feature-discovery.png',
        imageHint: 'Nebula clustering view',
      },
    ],
  },
  ja: {
    sectionTitle: '声に出して考える。あとはお任せ。',
    sectionSubtitle: 'ひらめきから出力まで、あなたの思考に寄り添うワークスペース。',
    features: [
      {
        id: 'capture',
        title: 'どこでも、話すだけで書き留める。',
        description:
          'どのアプリでも Option を押して話すだけ。Reso が音声を捉え、画面の文脈を読み取り、洗練されたテキストをカーソル位置に直接入力します。',
        learnMoreText: 'Capture の仕組みを見る',
        learnMoreLink: '/docs#capture',
        imageSlot: 'feature-capture.png',
        imageHint: 'Shadow recording / notch bar UI',
      },
      {
        id: 'orchestrate',
        title: 'プロンプトではなく、パイプラインを組む。',
        description:
          '音声を独自のワークフローで処理。翻訳やフォーマット調整はもちろん、結果を Shell スクリプトやショートカットへそのまま渡せます。',
        learnMoreText: 'Voice Workflow を見る',
        learnMoreLink: '/docs#workflow',
        imageSlot: 'feature-orchestrate.png',
        imageHint: 'Voice Workflow pipeline',
      },
      {
        id: 'mindscape',
        title: 'あなたの知識は、完全にローカル。',
        description:
          'Obsidian や Apple Notes を連携し、Reso にあなただけの文脈を与えます。すべてのファイルは Mac 内に留まり、プライバシーは守られます。',
        learnMoreText: 'Memory を見る',
        learnMoreLink: '/docs#memory',
        imageSlot: 'feature-memory.png',
        imageHint: 'Personalized AI memory',
      },
      {
        id: 'discovery',
        title: 'アイデアが繋がる瞬間を眺める。',
        description:
          'すべての録音は Nebula に配置され、意味ごとに 3D 空間で自然にまとまります。フォルダやタグなしで、思考の繋がりを探索できます。',
        learnMoreText: 'Nebula を探索する',
        learnMoreLink: '/docs#nebula',
        imageSlot: 'feature-discovery.png',
        imageHint: 'Nebula clustering view',
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
  orchestrate: OrchestrateCard,
  mindscape: MindscapeCard,
  discovery: NebulaShowcase,
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
