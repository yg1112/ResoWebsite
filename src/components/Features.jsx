import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

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
          '转录在 Apple Silicon 本地完成。只有在需要云端能力时，敏感信息才会先被遮蔽，再离开你的 Mac。',
        learnMoreText: '了解隐私设计',
        learnMoreLink: '/docs#privacy',
        imageSlot: 'feature-privacy.png',
        imageHint: 'PII Shield / local processing flow',
      },
      {
        id: 'skills',
        title: '它理解你想做什么',
        description:
          'Reso 不只是转录，它会识别意图。会议笔记、快速任务、深度思考会进入不同处理路径。',
        learnMoreText: '了解动态 Skills',
        learnMoreLink: '/docs#skills',
        imageSlot: 'feature-skills.png',
        imageHint: 'Intent classification / skill switching',
      },
      {
        id: 'discovery',
        title: '想法会自己连接起来',
        description:
          '每条记录都会做语义 embedding。相关想法会随着时间自动聚类。你不用手动整理，模式会自然浮现。',
        learnMoreText: '了解 Discovery',
        learnMoreLink: '/docs#discovery',
        imageSlot: 'feature-discovery.png',
        imageHint: 'Knowledge graph / Mindscape view',
      },
      {
        id: 'routing',
        title: '每项任务都走最合适的模型',
        description:
          '简单请求走快速模型，复杂分析走强推理模型。Reso 在后台完成 orchestration，你只专注输出。',
        learnMoreText: '了解 Smart Routing',
        learnMoreLink: '/docs#routing',
        imageSlot: 'feature-routing.png',
        imageHint: 'Multi-LLM routing diagram',
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
          '文字起こしは Apple Silicon 上でローカル実行。クラウド機能が必要な場合も、機微情報はマスクしてから送信されます。',
        learnMoreText: 'Privacy を見る',
        learnMoreLink: '/docs#privacy',
        imageSlot: 'feature-privacy.png',
        imageHint: 'PII Shield / local processing flow',
      },
      {
        id: 'skills',
        title: 'やりたいことを理解する',
        description:
          'Reso は単なる文字起こしではなく intent を認識します。会議メモ、短いタスク、深い思考で処理を切り替えます。',
        learnMoreText: 'Dynamic Skills を見る',
        learnMoreLink: '/docs#skills',
        imageSlot: 'feature-skills.png',
        imageHint: 'Intent classification / skill switching',
      },
      {
        id: 'discovery',
        title: 'アイデア同士が自動でつながる',
        description:
          '各ノートは semantic embedding され、関連する思考が時間とともに自動でクラスタ化されます。整理しなくてもパターンが浮かび上がります。',
        learnMoreText: 'Discovery を見る',
        learnMoreLink: '/docs#discovery',
        imageSlot: 'feature-discovery.png',
        imageHint: 'Knowledge graph / Mindscape view',
      },
      {
        id: 'routing',
        title: 'タスクごとに最適なモデルへ',
        description:
          '軽い依頼は高速モデルへ、複雑な分析は高性能モデルへ。Reso が orchestration を担うため、あなたは作業に集中できます。',
        learnMoreText: 'Smart Routing を見る',
        learnMoreLink: '/docs#routing',
        imageSlot: 'feature-routing.png',
        imageHint: 'Multi-LLM routing diagram',
      },
    ],
  },
};

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
