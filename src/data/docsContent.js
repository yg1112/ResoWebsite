export const docsNavOrder = [
  'gettingStarted',
  'requirements',
  'installation',
  'capture',
  'skills',
  'routing',
  'privacy',
  'discovery',
  'troubleshooting',
];

export const docsContent = {
  en: {
    headerTitle: 'Docs',
    headerSubtitle:
      'Practical reference for the current Reso release: capture, workflows, engines, permissions, and discovery.',
    onThisPage: 'On this page',
    nav: {
      gettingStarted: 'Getting Started',
      requirements: 'Requirements',
      installation: 'Installation',
      capture: 'Capture',
      skills: 'Skills & Workflows',
      routing: 'Engines & Routing',
      privacy: 'Privacy & Data',
      discovery: 'Nebula & Discovery',
      troubleshooting: 'Troubleshooting',
    },
    sections: {
      gettingStarted: {
        entries: [
          {
            id: 'what-is-reso',
            title: 'What Is Reso?',
            size: 'lg',
            paragraphs: [
              'Reso is a macOS voice workspace. It captures speech, routes it through workflows, and delivers the result as inserted text, saved notes, or downstream actions.',
              'The current product is best understood as three layers: fast capture, workflow-based processing, and a knowledge layer that surfaces connections through Nebula and discovery features.',
            ],
          },
          {
            id: 'mental-model',
            title: 'The Right Mental Model',
            size: 'md',
            checklist: [
              'Capture: start with the main recording shortcut or a focused quick action',
              'Workflow: every run has an input mode, available skills, and an output path',
              'Engine: use Reso Engine for the managed path or bring your own providers',
              'Discovery: imported notes and captured history can later become links, tags, threads, and insight cards',
            ],
          },
        ],
      },
      requirements: {
        entries: [
          {
            id: 'system-requirements',
            title: 'System Requirements',
            size: 'lg',
            paragraphs: [
              'Reso targets macOS 14 or later and is designed around native Mac integrations such as global shortcuts, Accessibility, Screen Recording, and local workflow state.',
            ],
            checklist: [
              'macOS 14 or later',
              'Best experience on Apple Silicon',
              'Microphone permission for all voice capture',
              'Internet connection for Reso Engine or any remote API provider',
              'Accessibility and Screen Recording only for the skills that need them',
            ],
          },
        ],
      },
      installation: {
        entries: [
          {
            id: 'install-and-launch',
            title: 'Install And First Launch',
            size: 'lg',
            paragraphs: [
              'Install Reso in your Applications folder and launch it once to finish onboarding.',
              'The first-run flow is about permissions, shortcut setup, and engine choice. You do not need to configure every optional feature before your first dictation.',
            ],
            downloadLabel: 'Download Reso',
          },
          {
            id: 'first-five-minutes',
            title: 'Recommended In Your First Five Minutes',
            size: 'md',
            checklist: [
              'Grant Microphone permission',
              'Confirm or change the main recording shortcut (default: Option + Space)',
              'Choose Reso Engine or Personal API in Engine settings',
              'Enable Accessibility if you want Insert at Cursor',
              'Enable Screen Recording if you want full OCR-based screen context',
            ],
          },
        ],
      },
      capture: {
        entries: [
          {
            id: 'recording-shortcuts',
            title: 'Recording Entry Points',
            size: 'lg',
            paragraphs: [
              'Main capture starts from a global recording shortcut. In the current app build, the default is Option + Space, and you can rebind it in settings.',
              'Reso also supports long-hold activation, plus a separate Nebula shortcut to jump straight into the 3D thought space.',
            ],
          },
          {
            id: 'output-delivery',
            title: 'How Results Are Delivered',
            size: 'md',
            paragraphs: [
              'When Insert at Cursor is available, Reso tries to place the final result directly into the focused editable field.',
              'If the target app cannot accept insertion, Reso falls back to clipboard or result-card style delivery instead of silently failing.',
            ],
            checklist: [
              'Insert at Cursor: requires Accessibility and a real editable field',
              'Diary-style flows can save output into your chosen storage pattern',
              'Selection-based quick actions operate on currently selected text when required',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'workflow-builder',
            title: 'Workflow Builder',
            size: 'lg',
            paragraphs: [
              'Workflows are the real unit of behavior in Reso. Each workflow combines an input mode, enabled skills, and terminal actions.',
              'The visual Workflow Builder lets you reorder skill nodes, dry-run a workflow, and attach local actions such as Shortcuts or shell-based steps.',
              'The current release ships three built-in presets — Dictation, Diary, and External Save — each a pre-tuned pipeline built from the same core skills (Context Awareness, Clean, Revise, Writing Style, Translate), differing mainly in how the final text is delivered.',
            ],
          },
          {
            id: 'core-skills',
            title: 'Core Skills In The Current Release',
            size: 'md',
            checklist: [
              'Insert at Cursor: place output into the focused app',
              'Screen Context: read the active app, selected text, and optional OCR context',
              'Intent Drafting: treat your voice as instructions instead of literal dictation',
              'Generated Skills: create app automations backed by AppleScript or deep links',
            ],
          },
          {
            id: 'dictation-vs-intent',
            title: 'Dictation vs Intent Drafting',
            size: 'md',
            paragraphs: [
              'Dictation preserves what you said. Intent Drafting rewrites your spoken instruction into the target output.',
              'In the current release, explicit workflow choice is the reliable mental model. Legacy Smart mode still exists, but the product is moving toward clearer workflow activation.',
            ],
          },
        ],
      },
      routing: {
        entries: [
          {
            id: 'engines-overview',
            title: 'Engines Overview',
            size: 'lg',
            paragraphs: [
              'Reso separates capture from model routing. Speech is transcribed by your configured transcription provider, then generation flows use either Reso Engine or your own APIs.',
              'In the current build, Reso Engine STT is the default managed transcription path when it is enabled. BYOK cloud providers can be selected in Engine settings.',
            ],
            checklist: [
              'Reso Engine: managed setup, no personal key, required for managed discovery features',
              'Personal API: OpenAI, Anthropic, Google, or Groq with your own billing and model choice',
            ],
          },
          {
            id: 'byok-vs-reso-engine',
            title: 'When To Use BYOK vs Reso Engine',
            size: 'md',
            paragraphs: [
              'Choose Personal API if you want direct provider control or already have existing keys.',
              'Choose Reso Engine if you want the product-managed path, hosted inference, and fewer moving parts. Pricing, trial, and quota details can change, so the Pricing page is the current commercial source of truth.',
            ],
          },
          {
            id: 'routing-behavior',
            title: 'Routing Behavior',
            size: 'md',
            paragraphs: [
              'Reso can use different providers for different steps, and some product-managed routing still exists outside full Pro discovery.',
              'If a workflow needs a provider or entitlement you have not configured, the app surfaces that blocker instead of sending the job into a black box.',
            ],
          },
        ],
      },
      privacy: {
        entries: [
          {
            id: 'data-handling',
            title: 'How Data Flows Today',
            size: 'lg',
            paragraphs: [
              'Reso only captures audio when you explicitly trigger it through a shortcut, long hold, or manual action. There is no passive background listening mode.',
              'The current app keeps a local shadow recording in Application Support so sessions can recover cleanly after interruptions or be reprocessed later. Those local recordings are cleaned up on a rolling basis.',
            ],
            checklist: [
              'Voice capture is user-triggered, not always-on',
              'Shadow recordings are stored locally for recovery and rolling cleanup',
              'Reso Engine promises zero data retention for managed inference payloads',
              'Personal API traffic follows the privacy policy of your chosen provider',
            ],
          },
          {
            id: 'permissions-guide',
            title: 'Permissions Guide',
            size: 'md',
            checklist: [
              'Microphone: required for all voice capture',
              'Accessibility: required for Insert at Cursor and app-context reads',
              'Screen Recording: required only when you enable OCR-based screen context in a workflow',
            ],
            paragraphs: [
              'Accessibility does not bypass macOS secure-field protections, and Screen Recording is used for snapshots when context features are triggered, not continuous video capture.',
            ],
          },
          {
            id: 'knowledge-import',
            title: 'Knowledge Import',
            size: 'md',
            paragraphs: [
              'Imported notes are selected folder by folder. Reso does not bulk-scan your disk and does not bulk-upload your library.',
              'The local index stays on your Mac. When a workflow needs knowledge grounding, Reso sends only the smallest relevant slices instead of entire documents.',
            ],
          },
        ],
      },
      discovery: {
        entries: [
          {
            id: 'nebula',
            title: 'Nebula: Visualizing Thoughts',
            size: 'lg',
            paragraphs: [
              'Nebula is an immersive 3D space where every recording and imported note is embedded and placed by meaning. Related ideas drift toward each other and form clusters you can explore without folders or tags.',
              'Open Nebula from the sidebar or its dedicated shortcut. Grab a cluster to navigate into it, or let it float and notice which themes have been gathering weight lately.',
            ],
          },
          {
            id: 'memory-grounding',
            title: 'Memory As Grounding',
            size: 'md',
            paragraphs: [
              'Every Voice Workflow can pull from the same local Memory that Nebula visualizes. Instead of repeating context to the model, Reso retrieves only the smallest relevant slices of your notes and history for each run.',
              'Memory grows the more you capture and import. Both Nebula and the grounding retrieval benefit from real history — they become noticeably sharper after a few dozen real records or an Obsidian vault import.',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'recording-not-starting',
            title: 'Recording Does Not Start',
            size: 'lg',
            checklist: [
              'Verify the recording shortcut is set and not colliding with another app',
              'Grant Microphone permission in System Settings',
              'Make sure an STT path is available: Reso Engine enabled or a valid BYOK provider configured',
            ],
          },
          {
            id: 'insertion-or-context',
            title: 'Insert At Cursor Or Context Is Not Working',
            size: 'md',
            checklist: [
              'Grant Accessibility if output should land in the focused app',
              'Place the cursor in a standard editable field before recording',
              'Grant Screen Recording if OCR-based screen context is enabled',
              'Restart Reso after new permissions if macOS has not refreshed access yet',
            ],
          },
          {
            id: 'engine-or-discovery',
            title: 'Engine Or Discovery Problems',
            size: 'md',
            checklist: [
              'Re-check your API key or provider selection in Engine settings',
              'If you rely on Reso Engine, confirm your current plan or trial status',
              'If discovery outputs are thin, import more real notes and history first',
            ],
          },
        ],
      },
    },
  },
  zh: {
    headerTitle: 'Docs',
    headerSubtitle: '围绕当前 Reso release 的实用参考：捕捉、workflow、引擎、权限与 discovery。',
    onThisPage: '本页内容',
    nav: {
      gettingStarted: '快速开始',
      requirements: '系统要求',
      installation: '安装',
      capture: '捕捉',
      skills: '技能与工作流',
      routing: '引擎与路由',
      privacy: '隐私与数据',
      discovery: 'Nebula 与 Discovery',
      troubleshooting: '排障',
    },
    sections: {
      gettingStarted: {
        entries: [
          {
            id: 'what-is-reso',
            title: '什么是 Reso？',
            size: 'lg',
            paragraphs: [
              'Reso 是一个 macOS 语音工作空间。它负责捕捉语音，把输入送进 workflow，再把结果落到光标位置、笔记存储或下游动作里。',
              '理解当前产品，最有效的方式是把它看成三层：快速捕捉、基于 workflow 的处理，以及通过 Nebula 与 discovery 功能浮现关联的知识层。',
            ],
          },
          {
            id: 'mental-model',
            title: '更准确的使用心智模型',
            size: 'md',
            checklist: [
              'Capture：从主录音快捷键或某个 quick action 开始',
              'Workflow：每次运行都会带着输入模式、可用 skills 和输出路径',
              'Engine：可以走 Reso Engine，也可以接你自己的 provider',
              'Discovery：导入的笔记和历史记录会进一步变成 links、tags、threads 和 insight cards',
            ],
          },
        ],
      },
      requirements: {
        entries: [
          {
            id: 'system-requirements',
            title: '运行条件',
            size: 'lg',
            paragraphs: [
              'Reso 目标平台是 macOS 14+，产品设计依赖原生 Mac 能力，比如全局快捷键、辅助功能、屏幕录制和本地 workflow 状态。',
            ],
            checklist: [
              'macOS 14 或更高版本',
              'Apple Silicon 上体验最佳',
              '所有语音捕捉都需要麦克风权限',
              '使用 Reso Engine 或远程 API provider 时需要网络',
              '辅助功能和屏幕录制只在对应 skills 需要时才开启',
            ],
          },
        ],
      },
      installation: {
        entries: [
          {
            id: 'install-and-launch',
            title: '安装与首次启动',
            size: 'lg',
            paragraphs: [
              '把 Reso 放进 Applications 后启动一次，完成 onboarding 即可。',
              '首次启动主要是配置权限、快捷键和默认引擎。你不需要在第一次听写前把所有可选能力都配完。',
            ],
            downloadLabel: '下载 Reso',
          },
          {
            id: 'first-five-minutes',
            title: '前五分钟建议完成的设置',
            size: 'md',
            checklist: [
              '授予麦克风权限',
              '确认或修改主录音快捷键（默认是 Option + Space）',
              '在 Engine 设置里选择 Reso Engine 或 Personal API',
              '如果你想直接写到光标位置，开启辅助功能',
              '如果你想用完整 OCR 屏幕上下文，开启屏幕录制',
            ],
          },
        ],
      },
      capture: {
        entries: [
          {
            id: 'recording-shortcuts',
            title: '录音入口与快捷键',
            size: 'lg',
            paragraphs: [
              '主捕捉入口是全局录音快捷键。当前 app build 里默认值是 Option + Space，而且可以在设置里重新绑定。',
              'Reso 还支持 long-hold 触发，以及一个独立的 Nebula 快捷键——直接跳进 3D 思维空间。',
            ],
          },
          {
            id: 'output-delivery',
            title: '结果如何落地',
            size: 'md',
            paragraphs: [
              '当 Insert at Cursor 可用时，Reso 会优先把最终结果直接写进当前聚焦的可编辑输入框。',
              '如果目标 app 不能接受插入，Reso 会回退到剪贴板或结果卡片，而不是静默失败。',
            ],
            checklist: [
              'Insert at Cursor：需要辅助功能权限和真实可编辑输入框',
              'Diary 类 workflow 可以按你设定的命名和存储策略保存',
              '依赖选中文本的 quick action 会直接作用于当前 selection',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'workflow-builder',
            title: 'Workflow Builder',
            size: 'lg',
            paragraphs: [
              '在 Reso 里，真正决定行为的单位是 workflow。每个 workflow 组合了输入模式、启用的 skills 和终端动作。',
              '可视化 Workflow Builder 允许你重排 skill nodes、先做 dry run，再接入本地动作，比如 macOS Shortcuts 或 shell steps。',
              '当前 release 自带三个预设：Dictation、Diary、External Save。它们共享同一组核心 skills（Context Awareness、Clean、Revise、Writing Style、Translate），区别只在最终输出落到哪里。',
            ],
          },
          {
            id: 'core-skills',
            title: '当前 release 的核心 skills',
            size: 'md',
            checklist: [
              'Insert at Cursor：把结果送进当前 app',
              'Screen Context：读取当前 app、选中文本和可选的 OCR 上下文',
              'Intent Drafting：把你的语音当成指令，而不是逐字听写',
              'Generated Skills：生成基于 AppleScript 或 deep link 的 app 自动化',
            ],
          },
          {
            id: 'dictation-vs-intent',
            title: 'Dictation 与 Intent Drafting 的区别',
            size: 'md',
            paragraphs: [
              'Dictation 更接近忠实转写你说的话。Intent Drafting 则会把你的口头指令改写成目标输出。',
              '对当前 release 来说，最可靠的使用方式是明确选择 workflow。Legacy Smart mode 仍然存在，但产品正在往更清晰的 workflow activation 演进。',
            ],
          },
        ],
      },
      routing: {
        entries: [
          {
            id: 'engines-overview',
            title: '引擎模式总览',
            size: 'lg',
            paragraphs: [
              'Reso 把 capture 和 model routing 分开。语音先走你配置的转写 provider，再由 Reso Engine 或你自己的 API 完成生成链路。',
              '当前 build 里，只要 Reso Engine 可用，它就是默认的托管 STT 路径。你也可以在 Engine 设置里改成 BYOK 的云端 provider。',
            ],
            checklist: [
              'Reso Engine：托管配置、无需个人 key、也是托管 discovery 能力的前提',
              'Personal API：支持 OpenAI、Anthropic、Google、Groq，由你控制账单和模型选择',
            ],
          },
          {
            id: 'byok-vs-reso-engine',
            title: '什么时候选 BYOK，什么时候选 Reso Engine',
            size: 'md',
            paragraphs: [
              '如果你已经有稳定的 provider 和 API key，或者你更在意直接控制权，选 Personal API。',
              '如果你想减少配置项、直接走产品托管路径，并使用完整的托管 inference 与 discovery，选 Reso Engine。价格、trial 和 quota 可能会变，所以商业信息以 Pricing 页面为准。',
            ],
          },
          {
            id: 'routing-behavior',
            title: '当前的路由行为',
            size: 'md',
            paragraphs: [
              'Reso 可以在不同步骤上使用不同 provider，而且有些产品托管的 routing 即使不在完整 Pro discovery 下也会继续存在。',
              '如果某个 workflow 依赖你尚未配置的 provider 或 entitlement，app 会明确暴露这个 blocker，而不是把请求丢进黑箱。',
            ],
          },
        ],
      },
      privacy: {
        entries: [
          {
            id: 'data-handling',
            title: '当前版本的数据流',
            size: 'lg',
            paragraphs: [
              'Reso 只会在你显式触发时捕捉音频，比如快捷键、long hold 或手动动作。它不是一个被动常开监听器。',
              '当前 app 会在本地 Application Support 中保存 shadow recording，用于中断恢复和后续重处理。这些本地录音会按滚动策略清理。',
            ],
            checklist: [
              '语音捕捉是用户触发，不是永远常开',
              'Shadow recordings 只存本地，用于恢复与滚动清理',
              'Reso Engine 对托管推理 payload 承诺零数据保留',
              'Personal API 的隐私边界以你选择的 provider 政策为准',
            ],
          },
          {
            id: 'permissions-guide',
            title: '权限说明',
            size: 'md',
            checklist: [
              'Microphone：所有语音捕捉都需要',
              'Accessibility：Insert at Cursor 和 app context 读取需要',
              'Screen Recording：仅当你在 workflow 中启用 OCR 型屏幕上下文时需要',
            ],
            paragraphs: [
              '辅助功能不会绕过 macOS 对安全输入框的保护；屏幕录制也只在你触发上下文能力时用于截图，不是持续录像。',
            ],
          },
          {
            id: 'knowledge-import',
            title: '知识导入',
            size: 'md',
            paragraphs: [
              '导入笔记是按文件夹显式选择的。Reso 不会批量扫描你的磁盘，也不会整库上传你的知识库。',
              '本地索引保留在你的 Mac 上。当 workflow 需要知识 grounding 时，Reso 只发送最小相关片段，而不是整篇文档。',
            ],
          },
        ],
      },
      discovery: {
        entries: [
          {
            id: 'nebula',
            title: 'Nebula：思维可视化',
            size: 'lg',
            paragraphs: [
              'Nebula 是一个沉浸式的 3D 空间：每段录音与导入的笔记都会按语义嵌入、落到各自的位置，关联的想法会自然聚拢成簇——无需文件夹，也无需标签。',
              '从侧边栏或专用快捷键进入 Nebula。抓住某个簇就能钻进去看，或者让它自己漂浮，看看最近哪几条主题在悄悄变重。',
            ],
          },
          {
            id: 'memory-grounding',
            title: '把 Memory 作为 grounding 源',
            size: 'md',
            paragraphs: [
              '每次 Voice Workflow 运行都可以从同一个本地 Memory 中取上下文——也就是 Nebula 在可视化的那份。Reso 不会把整篇笔记扔给模型，而是只检索与当次任务最相关的片段。',
              'Memory 会随着你的捕捉与导入不断生长。Nebula 的聚类和 grounding 的检索都会随真实历史变得更准——积累几十条真实记录或导入一次 Obsidian 库之后，差别会非常明显。',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'recording-not-starting',
            title: '录音没有开始',
            size: 'lg',
            checklist: [
              '确认录音快捷键已经设置好，而且没有和别的 app 冲突',
              '在系统设置里授予麦克风权限',
              '确保至少有一条 STT 路径可用：Reso Engine 已启用，或者 BYOK provider 配置有效',
            ],
          },
          {
            id: 'insertion-or-context',
            title: 'Insert at Cursor 或上下文不工作',
            size: 'md',
            checklist: [
              '如果你希望结果直接写回 app，先授予辅助功能',
              '开始录音前把光标放进标准可编辑输入框',
              '如果开启 OCR 型屏幕上下文，授予屏幕录制',
              '新增权限后如果 macOS 还没刷新，重启一次 Reso',
            ],
          },
          {
            id: 'engine-or-discovery',
            title: '引擎或 Discovery 出问题',
            size: 'md',
            checklist: [
              '重新检查 Engine 设置里的 provider 选择和 API key',
              '如果你依赖 Reso Engine，确认当前 plan 或 trial 状态',
              '如果 discovery 结果很薄，先导入更多真实笔记和历史记录',
            ],
          },
        ],
      },
    },
  },
  ja: {
    headerTitle: 'Docs',
    headerSubtitle:
      '現在の Reso release を前提にした実用リファレンスです。capture、workflow、engine、permissions、discovery をまとめています。',
    onThisPage: 'このページ',
    nav: {
      gettingStarted: 'はじめに',
      requirements: '要件',
      installation: 'インストール',
      capture: 'Capture',
      skills: 'Skills と Workflow',
      routing: 'Engine と Routing',
      privacy: 'Privacy と Data',
      discovery: 'Nebula と Discovery',
      troubleshooting: 'トラブルシュート',
    },
    sections: {
      gettingStarted: {
        entries: [
          {
            id: 'what-is-reso',
            title: 'Reso とは',
            size: 'lg',
            paragraphs: [
              'Reso は macOS 向けの voice workspace です。音声を capture し、workflow に流し、結果をカーソル位置、保存先メモ、または次の action に届けます。',
              '現在の製品は、fast capture、workflow-based processing、そして Nebula と discovery 機能によって繋がりを浮かび上がらせる knowledge layer の三層で理解するのが正確です。',
            ],
          },
          {
            id: 'mental-model',
            title: '使い方のメンタルモデル',
            size: 'md',
            checklist: [
              'Capture: メイン録音ショートカットか quick action から始める',
              'Workflow: すべての実行には input mode、skills、output path がある',
              'Engine: Reso Engine か自分の provider を使う',
              'Discovery: 取り込んだノートや履歴が links、tags、threads、insight cards へ育つ',
            ],
          },
        ],
      },
      requirements: {
        entries: [
          {
            id: 'system-requirements',
            title: 'システム要件',
            size: 'lg',
            paragraphs: [
              'Reso は macOS 14 以降を対象にしており、グローバルショートカット、Accessibility、Screen Recording、ローカル workflow state など Mac の統合機能を前提にしています。',
            ],
            checklist: [
              'macOS 14 以降',
              'Apple Silicon で最良の体験',
              '音声 capture には Microphone permission が必要',
              'Reso Engine やリモート API provider を使う場合はネット接続が必要',
              'Accessibility と Screen Recording は必要な skill のときだけ有効化すればよい',
            ],
          },
        ],
      },
      installation: {
        entries: [
          {
            id: 'install-and-launch',
            title: 'インストールと初回起動',
            size: 'lg',
            paragraphs: [
              'Reso を Applications に入れ、一度起動して onboarding を完了してください。',
              '初回起動では permissions、shortcut、default engine を決めます。最初の dictation 前にすべての optional feature を設定する必要はありません。',
            ],
            downloadLabel: 'Reso をダウンロード',
          },
          {
            id: 'first-five-minutes',
            title: '最初の 5 分でやっておくとよいこと',
            size: 'md',
            checklist: [
              'Microphone permission を許可する',
              'メイン録音ショートカットを確認または変更する（デフォルトは Option + Space）',
              'Engine settings で Reso Engine か Personal API を選ぶ',
              'Insert at Cursor を使うなら Accessibility を有効にする',
              'OCR ベースの screen context を使うなら Screen Recording を有効にする',
            ],
          },
        ],
      },
      capture: {
        entries: [
          {
            id: 'recording-shortcuts',
            title: '録音の入口',
            size: 'lg',
            paragraphs: [
              'メインの capture はグローバル録音ショートカットから始まります。現在の app build ではデフォルトが Option + Space で、settings から再割り当てできます。',
              'Reso には long-hold activation に加え、3D 思考空間へ直接飛び込める専用の Nebula ショートカットも用意されています。',
            ],
          },
          {
            id: 'output-delivery',
            title: '結果の届け方',
            size: 'md',
            paragraphs: [
              'Insert at Cursor が使える場合、Reso は最終結果をフォーカス中の editable field へ直接入れようとします。',
              '対象 app が挿入を受け付けない場合でも、静かに失敗せず、clipboard や result card にフォールバックします。',
            ],
            checklist: [
              'Insert at Cursor: Accessibility と editable field が必要',
              'Diary 系 workflow は保存先や命名ルールに従って保存できる',
              'selection ベースの quick action は必要に応じて現在の選択テキストを使う',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'workflow-builder',
            title: 'Workflow Builder',
            size: 'lg',
            paragraphs: [
              'Reso で実際の振る舞いを決める単位は workflow です。各 workflow は input mode、enabled skills、terminal actions の組み合わせです。',
              '視覚的な Workflow Builder では skill node の並び替え、dry run、Shortcuts や shell-based steps の接続ができます。',
              '現在の release には Dictation、Diary、External Save の 3 つのプリセットが同梱されています。いずれも Context Awareness、Clean、Revise、Writing Style、Translate という共通の core skills で構成され、違いは出力をどこへ届けるかにあります。',
            ],
          },
          {
            id: 'core-skills',
            title: '現在の release で中心になる skills',
            size: 'md',
            checklist: [
              'Insert at Cursor: 出力をフォーカス中の app に入れる',
              'Screen Context: active app、selected text、必要なら OCR context を読む',
              'Intent Drafting: 音声を逐語入力ではなく指示として扱う',
              'Generated Skills: AppleScript や deep link を使う app automation を作る',
            ],
          },
          {
            id: 'dictation-vs-intent',
            title: 'Dictation と Intent Drafting',
            size: 'md',
            paragraphs: [
              'Dictation は話した内容を保ちます。Intent Drafting は話した指示を目的の出力へ書き換えます。',
              '現在の release では、明示的に workflow を選ぶのが最も信頼できる使い方です。Legacy Smart mode は残っていますが、製品はより明確な workflow activation に向かっています。',
            ],
          },
        ],
      },
      routing: {
        entries: [
          {
            id: 'engines-overview',
            title: 'Engine の全体像',
            size: 'lg',
            paragraphs: [
              'Reso は capture と model routing を分けています。音声はまず設定済みの transcription provider に送られ、その後の生成は Reso Engine か自分の API が担当します。',
              '現在の build では、Reso Engine が有効ならそれがデフォルトの managed STT path です。Engine settings で BYOK の cloud provider に切り替えることもできます。',
            ],
            checklist: [
              'Reso Engine: managed setup、個人 key 不要、managed discovery に必要',
              'Personal API: OpenAI、Anthropic、Google、Groq を自分の課金で使う',
            ],
          },
          {
            id: 'byok-vs-reso-engine',
            title: 'BYOK と Reso Engine の選び分け',
            size: 'md',
            paragraphs: [
              '既に安定した provider や API key を持っているなら Personal API が向いています。',
              '設定項目を減らし、製品側が管理する inference と discovery を使いたいなら Reso Engine が向いています。価格、trial、quota は変わり得るので、商用条件は Pricing ページを参照してください。',
            ],
          },
          {
            id: 'routing-behavior',
            title: '現在の routing の振る舞い',
            size: 'md',
            paragraphs: [
              'Reso はステップごとに別の provider を使えます。また、完全な Pro discovery 以外でも一部の product-managed routing は存在します。',
              'workflow が未設定の provider や entitlement を必要とする場合、app はその blocker を明示し、ブラックボックス的に処理を進めません。',
            ],
          },
        ],
      },
      privacy: {
        entries: [
          {
            id: 'data-handling',
            title: '現在のデータフロー',
            size: 'lg',
            paragraphs: [
              'Reso が音声を capture するのは、ショートカット、long hold、手動 action など、あなたが明示的に開始したときだけです。常時リッスンする設計ではありません。',
              '現在の app は interruption recovery や再処理のために、Application Support にローカルの shadow recording を保持します。これらはローカルでローテーション清掃されます。',
            ],
            checklist: [
              '音声 capture は user-triggered であり、always-on ではない',
              'Shadow recording は recovery と cleanup のためにローカル保存される',
              'Reso Engine は managed inference payload に zero data retention を掲げる',
              'Personal API の privacy 境界は選んだ provider の方針に従う',
            ],
          },
          {
            id: 'permissions-guide',
            title: 'Permissions ガイド',
            size: 'md',
            checklist: [
              'Microphone: すべての voice capture に必要',
              'Accessibility: Insert at Cursor と app context read に必要',
              'Screen Recording: workflow で OCR ベースの screen context を有効にしたときのみ必要',
            ],
            paragraphs: [
              'Accessibility でも macOS の secure field 保護は突破できません。Screen Recording も context feature を起動したときの snapshot 用であり、連続録画ではありません。',
            ],
          },
          {
            id: 'knowledge-import',
            title: 'Knowledge Import',
            size: 'md',
            paragraphs: [
              'ノートの取り込みは folder 単位で明示的に選びます。Reso がディスク全体を走査したり、ライブラリ全体をアップロードしたりすることはありません。',
              'ローカル index は Mac 上に残ります。workflow が knowledge grounding を必要とするときも、送られるのは最小限の relevant slice だけです。',
            ],
          },
        ],
      },
      discovery: {
        entries: [
          {
            id: 'nebula',
            title: 'Nebula：思考の視覚化',
            size: 'lg',
            paragraphs: [
              'Nebula は没入型の 3D 空間です。すべての録音と取り込んだノートは意味ごとに埋め込まれ、関連するアイデアは自然と寄り合い、クラスタを形成していきます——フォルダもタグも不要。',
              'サイドバーまたは専用ショートカットから Nebula に入れます。クラスタを掴んで中に飛び込むもよし、漂わせながら最近どのテーマが重くなってきたかを眺めるもよし。',
            ],
          },
          {
            id: 'memory-grounding',
            title: 'Memory を grounding 源として使う',
            size: 'md',
            paragraphs: [
              'すべての Voice Workflow は、Nebula が可視化しているのと同じローカル Memory から文脈を取得できます。Reso はノート全体をモデルに渡すのではなく、その実行に最も関連する断片だけを取り出します。',
              'Memory はあなたの capture と import に応じて育ちます。Nebula のクラスタリングも grounding の検索も、実際の履歴が増えるほど精度が上がります——数十件の実データや Obsidian vault の取り込みを経ると、違いがはっきりと現れます。',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'recording-not-starting',
            title: '録音が始まらない',
            size: 'lg',
            checklist: [
              '録音ショートカットが設定済みで、他 app と衝突していないか確認する',
              'System Settings で Microphone permission を許可する',
              '使える STT path があるか確認する。Reso Engine が有効か、BYOK provider が正しく設定されている必要がある',
            ],
          },
          {
            id: 'insertion-or-context',
            title: 'Insert at Cursor や context が動かない',
            size: 'md',
            checklist: [
              '出力を app に戻したいなら Accessibility を許可する',
              '録音前にカーソルを標準的な editable field に置く',
              'OCR ベースの screen context を使うなら Screen Recording を許可する',
              '新しい permission を付与した直後は Reso を再起動する',
            ],
          },
          {
            id: 'engine-or-discovery',
            title: 'Engine や Discovery の問題',
            size: 'md',
            checklist: [
              'Engine settings で provider と API key を再確認する',
              'Reso Engine 依存なら current plan や trial status を確認する',
              'Discovery の出力が薄い場合は、まず本物のノートや履歴を増やす',
            ],
          },
        ],
      },
    },
  },
};
