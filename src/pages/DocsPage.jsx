import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const docsCopy = {
  en: {
    headerTitle: 'Reso Documentation',
    headerSubtitle: 'Everything you need to get started.',
    onThisPage: 'On this page',
    nav: {
      introduction: 'Introduction',
      quickStart: 'Quick Start',
      features: 'Features',
      capture: 'Frictionless Capture',
      privacy: 'Privacy',
      skills: 'Dynamic Skills',
      discovery: 'Discovery',
      routing: 'Smart Routing',
      troubleshooting: 'Troubleshooting',
    },
    sections: {
      introduction: {
        entries: [
          {
            id: 'what-is',
            title: 'What is Reso?',
            size: 'lg',
            paragraphs: [
              'Reso is a voice workspace for macOS. It runs transcription locally on Apple Silicon, so your audio never leaves your machine.',
              'Beyond transcription, Reso connects to LLMs to refine text, generate specs from screenshots, and surface patterns across your notes over time.',
            ],
          },
        ],
      },
      quickStart: {
        entries: [
          {
            id: 'requirements',
            title: 'Requirements',
            size: 'lg',
            checklist: [
              'macOS 14.0+ (Sonoma)',
              'Apple Silicon (M1, M2, M3, M4)',
              '8GB RAM minimum, 16GB recommended',
            ],
          },
          {
            id: 'installation',
            title: 'Installation',
            size: 'lg',
            paragraphs: [
              'Download the DMG, drag to Applications, done.',
              'On first launch, Reso downloads ML models (~2GB) and requests microphone access. This takes a minute or two, then you are set.',
            ],
            downloadLabel: 'Download Reso.dmg',
            terminalPrefix: 'Or via terminal:',
            terminalCommand:
              'curl -L -o Reso.dmg https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg',
          },
        ],
      },
      capture: {
        entries: [
          {
            id: 'shadow-recording',
            title: 'Frictionless Capture',
            size: 'lg',
            paragraphs: [
              'The biggest friction with note-taking apps is the ritual: open app, create note, start typing. By the time you are ready, the thought is gone.',
              'Reso runs quietly in the background, always ready. When you need to capture something, it is already listening. No windows to open, no buttons to click.',
              'The Shadow Recording system keeps a rolling buffer of audio. When you activate Reso, it can include what you said in the previous seconds, so you never lose the beginning of a thought.',
            ],
          },
          {
            id: 'activation',
            title: 'Activation',
            size: 'md',
            paragraphs: [
              'Double-tap the Option key to start recording. Double-tap again to stop. The notch bar shows recording status without taking over your screen.',
              'You can also configure custom hotkeys or use the menu bar icon. Capture should feel effortless, not like a separate task.',
            ],
          },
        ],
      },
      privacy: {
        entries: [
          {
            id: 'local-transcription',
            title: 'Privacy',
            size: 'lg',
            paragraphs: [
              'Voice recordings often contain sensitive information—names, addresses, financial details, and personal thoughts. Sending this to cloud services requires trust many people are not comfortable with.',
              'Reso runs Whisper locally on Apple Silicon Neural Engine. Your audio is transcribed on your Mac and never uploaded. Raw recordings stay in your control.',
            ],
          },
          {
            id: 'pii-masking',
            title: 'PII Masking',
            size: 'md',
            paragraphs: [
              'When you use cloud-required features like refinement or Architect mode, Reso PII Shield detects and masks sensitive data before it leaves your device.',
              'Names, emails, phone numbers, and custom terms are replaced with tokens. The LLM processes masked text, and Reso restores originals locally.',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'intent-recognition',
            title: 'Dynamic Skills',
            size: 'lg',
            paragraphs: [
              'Traditional voice memos are passive. You record, forget, and rarely revisit. Reso treats voice input as the start of a workflow, not the end.',
              'The Intent Classifier analyzes what you said and what you likely want to do with it. Brainstorms, action items, meetings, and journals each get different handling.',
            ],
          },
          {
            id: 'skill-switching',
            title: 'Skill Switching',
            size: 'md',
            paragraphs: [
              'Skills are specialized handlers for different content types. The Skill Switcher routes your input automatically, or you can invoke skills directly.',
              'Architect mode turns voice + screenshots into structured specs. Code Companion clarifies technical discussions. Quick Action extracts todos and calendar events.',
            ],
          },
        ],
      },
      discovery: {
        entries: [
          {
            id: 'semantic-clustering',
            title: 'Discovery',
            size: 'lg',
            paragraphs: [
              'Most note apps force you to organize upfront: choose folders, add tags, pick titles. This creates friction and usually ends in a cluttered archive.',
              'Reso embeds every transcription semantically. Related notes cluster over time. Themes emerge from your content automatically.',
              'After a few weeks, you may discover you have been circling the same problem from different angles. Connections become visible.',
            ],
          },
          {
            id: 'knowledge-graph',
            title: 'Knowledge Graph',
            size: 'md',
            paragraphs: [
              'Mindscape shows how your notes connect. Drag nodes, zoom, click to open. It is designed to surface useful relationships quickly.',
              'The graph updates as you add content. New notes automatically find their place based on semantic similarity.',
            ],
          },
        ],
      },
      routing: {
        entries: [
          {
            id: 'supported-providers',
            title: 'Smart Routing',
            size: 'lg',
            paragraphs: [
              'Different tasks need different models. Fast requests do not need the heaviest model, while deep analysis benefits from stronger reasoning.',
              'Reso supports Anthropic, OpenAI, Groq, and Google. You can bring your own API keys (Reso Free) or use hosted access (Reso+).',
            ],
          },
          {
            id: 'how-routing-works',
            title: 'How Routing Works',
            size: 'md',
            paragraphs: [
              'The Multi-API Routing Service evaluates each request and picks an appropriate model. Quick reformatting goes to fast models; long-form analysis goes to deeper models.',
              'Context carries across turns, so conversations stay coherent even when models switch in the background.',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'slow',
            title: 'Slow Transcription',
            size: 'lg',
            paragraphs: [
              'Reso should transcribe faster than speech. If it becomes slow, Neural Engine acceleration may not be loading correctly.',
            ],
            pathPrefix: 'Check that the CoreML model exists at',
            pathValue: '~/Library/Application Support/Reso/models/',
          },
          {
            id: 'permissions',
            title: 'Permissions',
            size: 'md',
            paragraphs: [
              'Microphone is required. Screen Recording is required for Architect mode. Grant access in System Settings → Privacy & Security.',
            ],
          },
        ],
      },
    },
  },
  zh: {
    headerTitle: 'Reso 文档',
    headerSubtitle: '从安装到进阶，你需要的都在这里。',
    onThisPage: '本页内容',
    nav: {
      introduction: '介绍',
      quickStart: '快速开始',
      features: '功能',
      capture: '无摩擦捕捉',
      privacy: '隐私',
      skills: '动态 Skills',
      discovery: 'Discovery',
      routing: '智能路由',
      troubleshooting: '故障排查',
    },
    sections: {
      introduction: {
        entries: [
          {
            id: 'what-is',
            title: '什么是 Reso？',
            size: 'lg',
            paragraphs: [
              'Reso 是一款面向 macOS 的语音工作空间。它在 Apple Silicon 本地完成转录，因此你的音频不会离开设备。',
              '除了转录，Reso 还能连接 LLM 做文本精修、基于截图生成规格说明，并在长期笔记中发现模式。',
            ],
          },
        ],
      },
      quickStart: {
        entries: [
          {
            id: 'requirements',
            title: '运行要求',
            size: 'lg',
            checklist: [
              'macOS 14.0+（Sonoma）',
              'Apple Silicon（M1、M2、M3、M4）',
              '至少 8GB 内存，推荐 16GB',
            ],
          },
          {
            id: 'installation',
            title: '安装',
            size: 'lg',
            paragraphs: [
              '下载 DMG，拖到 Applications 即可完成安装。',
              '首次启动时，Reso 会下载 ML 模型（约 2GB）并请求麦克风权限。通常只需一两分钟。',
            ],
            downloadLabel: '下载 Reso.dmg',
            terminalPrefix: '也可在终端执行：',
            terminalCommand:
              'curl -L -o Reso.dmg https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg',
          },
        ],
      },
      capture: {
        entries: [
          {
            id: 'shadow-recording',
            title: '无摩擦捕捉',
            size: 'lg',
            paragraphs: [
              '大多数笔记工具的最大阻力来自仪式感：打开应用、建新文件、再开始输入。等你准备好时，想法常常已经消散。',
              'Reso 在后台静默运行，随时可用。你需要记录时，它已经在等待，不必额外开窗或点按钮。',
              'Shadow Recording 会持续维护一个滚动音频缓冲区。激活 Reso 时，可自动包含前几秒内容，不丢开头。',
            ],
          },
          {
            id: 'activation',
            title: '激活方式',
            size: 'md',
            paragraphs: [
              '双击 Option 键开始录音，再双击一次结束。notch bar 会显示状态，但不会打断你当前的工作界面。',
              '你也可以设置自定义热键或使用菜单栏图标。目标是让记录成为自然动作，而不是额外任务。',
            ],
          },
        ],
      },
      privacy: {
        entries: [
          {
            id: 'local-transcription',
            title: '隐私',
            size: 'lg',
            paragraphs: [
              '语音里常含有姓名、地址、财务信息和私人想法。把这些直接传到云端，很多用户并不安心。',
              'Reso 在 Apple Silicon Neural Engine 本地运行 Whisper。音频转录在你的 Mac 上完成，不会上传原始录音。',
            ],
          },
          {
            id: 'pii-masking',
            title: 'PII 屏蔽',
            size: 'md',
            paragraphs: [
              '当你使用需要云端能力的功能（如 refinement、Architect mode）时，Reso 会先在本地识别并遮蔽敏感信息。',
              '姓名、邮箱、手机号和自定义敏感词会被替换成 token。云端只看到脱敏文本，原文在本地恢复。',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'intent-recognition',
            title: '动态 Skills',
            size: 'lg',
            paragraphs: [
              '传统语音备忘录通常是被动存储：录完就放着。Reso 把语音输入当作 workflow 的起点，而不是终点。',
              'Intent Classifier 会分析你说了什么、你可能想达成什么目标。头脑风暴、行动项、会议纪要和日记会被不同处理。',
            ],
          },
          {
            id: 'skill-switching',
            title: 'Skill 切换',
            size: 'md',
            paragraphs: [
              'Skills 是针对不同内容类型的处理器。Skill Switcher 可以自动路由，也支持你手动指定。',
              'Architect mode 可把语音+截图转为结构化 specs；Code Companion 用于技术表达整理；Quick Action 可提取待办与日程。',
            ],
          },
        ],
      },
      discovery: {
        entries: [
          {
            id: 'semantic-clustering',
            title: 'Discovery',
            size: 'lg',
            paragraphs: [
              '许多笔记工具要求你先分类再记录：选文件夹、打标签、写标题。这个前置步骤会带来明显阻力。',
              'Reso 会对每条转录做语义 embedding，相关笔记随时间自动聚类。主题会自己浮现。',
              '使用几周后，你会看到自己在不同时间反复思考同一问题，之前难以察觉的连接开始可见。',
            ],
          },
          {
            id: 'knowledge-graph',
            title: '知识图谱',
            size: 'md',
            paragraphs: [
              'Mindscape 视图展示笔记之间的关系。你可以拖拽节点、缩放、点击查看细节，快速发现有价值的联系。',
              '随着内容新增，图谱会自动更新。新笔记会基于语义相似度进入合适位置。',
            ],
          },
        ],
      },
      routing: {
        entries: [
          {
            id: 'supported-providers',
            title: '智能路由',
            size: 'lg',
            paragraphs: [
              '不同任务需要不同模型。简单请求不必动用最重模型，复杂分析则需要更强推理能力。',
              'Reso 支持 Anthropic、OpenAI、Groq、Google。你可以使用自己的 API key（Reso Free）或托管访问（Reso+）。',
            ],
          },
          {
            id: 'how-routing-works',
            title: '路由机制',
            size: 'md',
            paragraphs: [
              'Multi-API Routing Service 会根据请求特征自动选择模型。快速改写走高性能模型，长文本分析走深度模型。',
              '上下文会跨轮次连续保留，即使后台切换模型，对话也保持连贯。',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'slow',
            title: '转录变慢',
            size: 'lg',
            paragraphs: [
              'Reso 正常情况下应快于实时语速。如果明显变慢，通常是 Neural Engine 加速未正确加载。',
            ],
            pathPrefix: '请检查 CoreML 模型路径：',
            pathValue: '~/Library/Application Support/Reso/models/',
          },
          {
            id: 'permissions',
            title: '权限问题',
            size: 'md',
            paragraphs: [
              '麦克风权限为必需；Architect mode 还需要屏幕录制权限。请在系统设置 → 隐私与安全中授权。',
            ],
          },
        ],
      },
    },
  },
  ja: {
    headerTitle: 'Reso ドキュメント',
    headerSubtitle: '導入から運用まで、必要な情報をまとめています。',
    onThisPage: 'このページ',
    nav: {
      introduction: 'イントロダクション',
      quickStart: 'クイックスタート',
      features: '機能',
      capture: 'Frictionless Capture',
      privacy: 'プライバシー',
      skills: 'Dynamic Skills',
      discovery: 'Discovery',
      routing: 'Smart Routing',
      troubleshooting: 'トラブルシューティング',
    },
    sections: {
      introduction: {
        entries: [
          {
            id: 'what-is',
            title: 'Reso とは？',
            size: 'lg',
            paragraphs: [
              'Reso は macOS 向けの音声ワークスペースです。文字起こしは Apple Silicon 上でローカル実行され、音声データは端末外へ出ません。',
              '文字起こしに加え、LLM による文章整形、スクリーンショットからの仕様化、ノート全体のパターン発見を行えます。',
            ],
          },
        ],
      },
      quickStart: {
        entries: [
          {
            id: 'requirements',
            title: '動作要件',
            size: 'lg',
            checklist: [
              'macOS 14.0+（Sonoma）',
              'Apple Silicon（M1 / M2 / M3 / M4）',
              'メモリ 8GB 以上（16GB 推奨）',
            ],
          },
          {
            id: 'installation',
            title: 'インストール',
            size: 'lg',
            paragraphs: [
              'DMG をダウンロードし、Applications にドラッグすれば完了です。',
              '初回起動時に ML モデル（約 2GB）をダウンロードし、マイク権限を求めます。通常 1〜2 分で完了します。',
            ],
            downloadLabel: 'Reso.dmg をダウンロード',
            terminalPrefix: 'ターミナルから実行する場合：',
            terminalCommand:
              'curl -L -o Reso.dmg https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg',
          },
        ],
      },
      capture: {
        entries: [
          {
            id: 'shadow-recording',
            title: 'Frictionless Capture',
            size: 'lg',
            paragraphs: [
              '多くのメモアプリの摩擦は、開く・新規作成・入力開始という儀式にあります。準備している間にアイデアは消えます。',
              'Reso はバックグラウンドで静かに待機し、必要な瞬間にすぐ記録できます。ウィンドウ操作は不要です。',
              'Shadow Recording は直近音声のローリングバッファを保持し、起動直前の発話も取りこぼしにくくします。',
            ],
          },
          {
            id: 'activation',
            title: '起動方法',
            size: 'md',
            paragraphs: [
              'Option キーをダブルタップで録音開始、もう一度で停止。notch bar に状態を表示し、作業の邪魔をしません。',
              'ホットキーのカスタマイズやメニューバー操作にも対応。記録は別作業ではなく自然な動作であるべきです。',
            ],
          },
        ],
      },
      privacy: {
        entries: [
          {
            id: 'local-transcription',
            title: 'プライバシー',
            size: 'lg',
            paragraphs: [
              '音声には氏名・住所・金銭情報・個人的な思考など、機微情報が含まれます。クラウド送信には高い信頼が必要です。',
              'Reso は Apple Silicon Neural Engine で Whisper をローカル実行。生音声はアップロードされず、制御は手元に残ります。',
            ],
          },
          {
            id: 'pii-masking',
            title: 'PII マスキング',
            size: 'md',
            paragraphs: [
              'refinement や Architect mode のようにクラウド機能が必要な場合でも、端末外に出る前に機微情報を自動でマスクします。',
              '氏名・メール・電話番号・カスタム語彙は token 化され、LLM はマスク済みテキストのみを処理します。復元はローカルで行います。',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'intent-recognition',
            title: 'Dynamic Skills',
            size: 'lg',
            paragraphs: [
              '従来のボイスメモは受動的で、録って終わりになりがちです。Reso は音声入力を workflow の開始点として扱います。',
              'Intent Classifier が内容と意図を推定し、ブレインストーム、タスク、会議、ジャーナルをそれぞれ適した形に処理します。',
            ],
          },
          {
            id: 'skill-switching',
            title: 'Skill Switching',
            size: 'md',
            paragraphs: [
              'Skills は用途別の処理ハンドラです。Skill Switcher が自動ルーティングし、必要に応じて手動指定も可能です。',
              'Architect mode は音声＋スクリーンショットを構造化 specs に変換し、Code Companion は技術的説明を整理、Quick Action は todo と予定を抽出します。',
            ],
          },
        ],
      },
      discovery: {
        entries: [
          {
            id: 'semantic-clustering',
            title: 'Discovery',
            size: 'lg',
            paragraphs: [
              '多くのノートアプリは事前整理を要求します。フォルダ、タグ、タイトルの選択が入力前の摩擦になります。',
              'Reso は各転写を semantic embedding し、関連ノートを自動クラスタリングします。テーマは自然に立ち上がります。',
              '数週間使うと、同じ課題を別角度で繰り返し考えていたことに気づき、つながりが見えるようになります。',
            ],
          },
          {
            id: 'knowledge-graph',
            title: 'Knowledge Graph',
            size: 'md',
            paragraphs: [
              'Mindscape はノート同士の関係を可視化します。ノードを移動・拡大・選択して、重要な関連性を素早く把握できます。',
              '新しいノートを追加するとグラフは自動更新され、意味的近さに応じて適切な位置へ配置されます。',
            ],
          },
        ],
      },
      routing: {
        entries: [
          {
            id: 'supported-providers',
            title: 'Smart Routing',
            size: 'lg',
            paragraphs: [
              'タスクごとに必要なモデルは異なります。軽い処理は高速モデルで十分ですが、複雑な分析には強い推論が必要です。',
              'Reso は Anthropic / OpenAI / Groq / Google をサポート。BYOK（Reso Free）またはホストアクセス（Reso+）を選べます。',
            ],
          },
          {
            id: 'how-routing-works',
            title: 'ルーティングの仕組み',
            size: 'md',
            paragraphs: [
              'Multi-API Routing Service がリクエスト特性を評価し、適切なモデルを選択します。高速整形と深い分析を自動で使い分けます。',
              'モデル切り替えがあっても文脈は保持されるため、会話の連続性が失われません。',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'slow',
            title: '文字起こしが遅い',
            size: 'lg',
            paragraphs: [
              '通常、Reso は発話速度より速く転写します。遅い場合は Neural Engine 加速が正しく読み込まれていない可能性があります。',
            ],
            pathPrefix: 'CoreML モデルの配置を確認：',
            pathValue: '~/Library/Application Support/Reso/models/',
          },
          {
            id: 'permissions',
            title: '権限',
            size: 'md',
            paragraphs: [
              'マイク権限は必須です。Architect mode には画面収録権限も必要です。System Settings → Privacy & Security で許可してください。',
            ],
          },
        ],
      },
    },
  },
};

const navIdList = [
  'introduction',
  'quickStart',
  'features',
  'capture',
  'privacy',
  'skills',
  'discovery',
  'routing',
  'troubleshooting',
];

const DocsPage = () => {
  const location = useLocation();
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(docsCopy, language);
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState(new Set(['features']));

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.slice(1);
    if (!navIdList.includes(sectionId)) return;

    setActiveSection(sectionId);
    const featureIds = ['capture', 'privacy', 'skills', 'discovery', 'routing'];
    if (featureIds.includes(sectionId)) {
      setExpandedSections((prev) => new Set([...prev, 'features']));
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

  const mainNavigation = useMemo(
    () => [
      { id: 'introduction', label: copy.nav.introduction },
      { id: 'quickStart', label: copy.nav.quickStart },
      {
        id: 'features',
        label: copy.nav.features,
        children: [
          { id: 'capture', label: copy.nav.capture },
          { id: 'privacy', label: copy.nav.privacy },
          { id: 'skills', label: copy.nav.skills },
          { id: 'discovery', label: copy.nav.discovery },
          { id: 'routing', label: copy.nav.routing },
        ],
      },
      { id: 'troubleshooting', label: copy.nav.troubleshooting },
    ],
    [copy]
  );

  const rightSidebarSections = copy.sections[activeSection]?.entries?.map((entry) => ({
    id: entry.id,
    label: entry.title,
  })) || [];

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            {copy.headerTitle}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {copy.headerSubtitle}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_180px] gap-8 xl:gap-10">
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

          <article className="space-y-8">
            <DocsSectionGroup section={copy.sections[activeSection]} />
          </article>

          <aside className="hidden xl:block xl:sticky xl:top-28 xl:self-start">
            {rightSidebarSections.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  {copy.onThisPage}
                </p>
                <nav className="space-y-1">
                  {rightSidebarSections.map((section) => (
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

const DocsSectionGroup = ({ section }) => {
  if (!section?.entries) return null;

  return (
    <div className="space-y-8">
      {section.entries.map((entry) => (
        <section key={entry.id} id={entry.id} className="scroll-mt-28">
          <h2
            className={`${entry.size === 'md' ? 'text-xl' : 'text-2xl'} font-medium text-gray-900 dark:text-gray-100 mb-4`}
          >
            {entry.title}
          </h2>
          <div className="prose-content space-y-4">
            {entry.checklist && (
              <ul className="space-y-2">
                {entry.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {entry.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {entry.downloadLabel && (
              <a
                href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-black dark:hover:bg-gray-100 transition-colors"
              >
                {entry.downloadLabel}
              </a>
            )}

            {entry.terminalCommand && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {entry.terminalPrefix}{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">
                  {entry.terminalCommand}
                </code>
              </p>
            )}

            {entry.pathValue && (
              <p>
                {entry.pathPrefix}{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">
                  {entry.pathValue}
                </code>
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default DocsPage;
