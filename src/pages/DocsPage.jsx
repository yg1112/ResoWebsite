import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const docsCopy = {
  en: {
    headerTitle: 'Reso Documentation',
    headerSubtitle: 'Learn how to capture ideas with your voice, process them with AI, and build your personal knowledge system.',
    onThisPage: 'On this page',
    nav: {
      gettingStarted: 'Getting Started',
      requirements: 'Requirements',
      installation: 'Installation',
      coreFeatures: 'Core Features',
      voiceCapture: 'Voice Capture',
      transcription: 'Transcription',
      workflows: 'Workflows',
      skills: 'Skills',
      privacySecurity: 'Privacy & Security',
      dataFlow: 'How Your Data Flows',
      permissions: 'Permissions Guide',
      processingModes: 'Processing Modes',
      troubleshooting: 'Troubleshooting',
    },
    sections: {
      gettingStarted: {
        entries: [
          {
            id: 'what-is-reso',
            title: 'What is Reso?',
            size: 'lg',
            paragraphs: [
              'Reso is a voice-first AI workspace for macOS. Speak your thoughts, and Reso transcribes, refines, and organizes them—all while keeping your data private.',
              'Unlike traditional voice memos that sit forgotten, Reso treats your voice as the starting point of intelligent workflows. Dictate notes, generate documents, translate content, or build structured specs from screenshots—all through natural speech.',
            ],
          },
          {
            id: 'key-principles',
            title: 'Key Principles',
            size: 'md',
            checklist: [
              'Local-first: Transcription runs on your Mac, not in the cloud',
              'Privacy by design: Your raw audio never leaves your device',
              'Flexible processing: Use Reso Engine or bring your own API keys',
              'Workflow-driven: Voice input triggers intelligent processing pipelines',
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
            checklist: [
              'macOS 14.0 or later (Sonoma)',
              'Apple Silicon (M1, M2, M3, M4)',
              '8GB RAM minimum, 16GB recommended',
              '3GB disk space for ML models',
            ],
            paragraphs: [
              'Reso is optimized exclusively for Apple Silicon. The Neural Engine accelerates transcription to faster-than-real-time speeds while using minimal battery.',
            ],
          },
        ],
      },
      installation: {
        entries: [
          {
            id: 'install-steps',
            title: 'Installation',
            size: 'lg',
            paragraphs: [
              'Download the DMG file, drag Reso to your Applications folder, and launch. On first run, Reso will download the speech recognition model (~2GB) and request necessary permissions.',
              'The entire setup takes about 2 minutes. Once complete, double-tap the Option key to start your first recording.',
            ],
            downloadLabel: 'Download Reso',
          },
          {
            id: 'first-launch',
            title: 'First Launch',
            size: 'md',
            checklist: [
              'Grant Microphone permission when prompted',
              'Wait for model download to complete',
              'Configure your preferred activation method',
              'Choose your processing mode (Reso Engine or Personal API)',
            ],
          },
        ],
      },
      voiceCapture: {
        entries: [
          {
            id: 'how-capture-works',
            title: 'How Voice Capture Works',
            size: 'lg',
            paragraphs: [
              'Reso runs quietly in the background, ready whenever inspiration strikes. No need to open windows or navigate menus—your voice is the interface.',
              'The default activation is a double-tap of the Option key. You can also configure custom hotkeys or click the menu bar icon. Recording status appears in the notch bar without interrupting your workflow.',
            ],
          },
          {
            id: 'shadow-recording',
            title: 'Shadow Recording',
            size: 'md',
            paragraphs: [
              'Shadow Recording maintains a brief rolling buffer of audio. When you activate Reso, it can capture the few seconds before you pressed the hotkey—so you never lose the beginning of a thought.',
              'This buffer exists only in memory and is never saved to disk. It is discarded immediately after use.',
            ],
          },
        ],
      },
      transcription: {
        entries: [
          {
            id: 'local-transcription',
            title: 'On-Device Transcription',
            size: 'lg',
            paragraphs: [
              'Reso uses Whisper Large v3 Turbo running locally on Apple Silicon Neural Engine. Your audio is processed entirely on your Mac—nothing is uploaded for transcription.',
              'This approach ensures your voice data stays private while delivering faster-than-real-time performance. Most recordings transcribe before you finish speaking.',
            ],
          },
          {
            id: 'accuracy',
            title: 'Accuracy & Languages',
            size: 'md',
            paragraphs: [
              'Whisper supports 100+ languages with automatic detection. Accuracy rivals cloud services while maintaining complete privacy.',
              'For best results, speak naturally at a moderate pace. Background noise is handled well, but quiet environments produce the cleanest transcripts.',
            ],
          },
        ],
      },
      workflows: {
        entries: [
          {
            id: 'what-are-workflows',
            title: 'What Are Workflows?',
            size: 'lg',
            paragraphs: [
              'Workflows define how Reso processes your voice input. Each workflow combines specific Skills, output destinations, and AI behaviors tailored to different use cases.',
              'For example, a "Quick Note" workflow might just transcribe and save, while an "Email Draft" workflow transcribes, refines the tone, and formats for email.',
            ],
          },
          {
            id: 'workflow-types',
            title: 'Built-in Workflow Types',
            size: 'md',
            checklist: [
              'Dictation: Direct voice-to-text with optional refinement',
              'Ghost Writer: Speak instructions, AI writes the content',
              'Architect: Voice + screenshot → structured specifications',
              'Translate: Speak in any language, output in your target language',
            ],
          },
          {
            id: 'workflow-matching',
            title: 'Automatic Workflow Matching',
            size: 'md',
            paragraphs: [
              'Reso can automatically select the right workflow based on what you say. Mention a translation, and it activates Translation mode. Describe a technical feature, and it may suggest Architect mode.',
              'You can also lock a specific workflow or manually switch between them at any time.',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'what-are-skills',
            title: 'What Are Skills?',
            size: 'lg',
            paragraphs: [
              'Skills are modular capabilities that enhance your workflows. Each Skill handles a specific task—translation, formatting, memory retrieval, or context awareness.',
              'Skills run in a defined order (pipeline phases) to transform your voice input step by step.',
            ],
          },
          {
            id: 'free-skills',
            title: 'Free Skills',
            size: 'md',
            checklist: [
              'Auto-Insertion: Insert text at cursor or copy to clipboard',
              'Translation: Convert output to 200+ languages',
              'Smart Format: Apply templates (email, meeting notes, journal)',
              'Ghost Writer: AI generates content from your instructions',
              'Writing Style: Apply custom tone and voice to output',
            ],
          },
          {
            id: 'pro-skills',
            title: 'Pro Skills',
            size: 'md',
            checklist: [
              'Context Awareness: Read on-screen content for context-aware responses',
              'Text Memory: Reference your imported notes while writing',
              'Visual Memory: Attach relevant screenshots or photos',
              'Auto-Tagging: AI categorizes notes using your tag library',
              'Auto-Reference: Discover connections between notes',
              'Clustering: Group related notes into themes',
            ],
            paragraphs: [
              'Pro Skills require a Reso Pro subscription and use Reso Engine for processing.',
            ],
          },
        ],
      },
      dataFlow: {
        entries: [
          {
            id: 'data-flow-overview',
            title: 'How Your Data Flows',
            size: 'lg',
            paragraphs: [
              'Understanding exactly what happens to your data builds trust. Here is the complete flow:',
            ],
          },
          {
            id: 'step-1-capture',
            title: '1. Voice Capture',
            size: 'md',
            paragraphs: [
              "When you activate Reso, audio streams directly to Apple's Neural Engine on your Mac. The raw audio is processed in memory—never written to disk, never uploaded.",
            ],
          },
          {
            id: 'step-2-transcription',
            title: '2. Local Transcription',
            size: 'md',
            paragraphs: [
              'Whisper converts speech to text locally. The audio is discarded immediately after transcription. Only the text continues through the pipeline.',
            ],
          },
          {
            id: 'step-3-processing',
            title: '3. AI Processing',
            size: 'md',
            paragraphs: [
              'If your workflow requires AI refinement (translation, formatting, etc.), the text is sent to an LLM. This can be:',
            ],
            checklist: [
              'Reso Engine: Our hosted service with zero data retention',
              'Your personal API: Direct connection to OpenAI, Anthropic, Google, or Groq',
            ],
          },
          {
            id: 'step-4-output',
            title: '4. Output',
            size: 'md',
            paragraphs: [
              'The processed text is delivered to your chosen destination: inserted at cursor, copied to clipboard, or saved to your local notes. Reso never stores your content on remote servers.',
            ],
          },
        ],
      },
      permissions: {
        entries: [
          {
            id: 'permissions-overview',
            title: 'Permissions Guide',
            size: 'lg',
            paragraphs: [
              'Reso requests only the permissions necessary for its features. Here is what each permission enables and exactly what it can access.',
            ],
          },
          {
            id: 'microphone',
            title: 'Microphone (Required)',
            size: 'md',
            paragraphs: [
              'Required for voice recording. Without this, Reso cannot capture audio.',
            ],
            checklist: [
              '✓ Captures audio when you activate recording',
              '✓ Processes audio locally for transcription',
              '✗ Does not record continuously in background',
              '✗ Does not save raw audio to disk',
              '✗ Does not upload audio to servers',
            ],
          },
          {
            id: 'accessibility',
            title: 'Accessibility (Optional)',
            size: 'md',
            paragraphs: [
              'Enables Auto-Insertion and Context Awareness features.',
            ],
            checklist: [
              '✓ Reads active app name and window title',
              '✓ Detects editable text fields for insertion',
              '✓ Reads selected text for context',
              '✗ Cannot access passwords or secure fields (blocked by macOS)',
              '✗ Cannot read content from other apps',
              '✗ Cannot access your file system',
            ],
          },
          {
            id: 'screen-recording',
            title: 'Screen Recording (Optional)',
            size: 'md',
            paragraphs: [
              'Enables full-screen context awareness and Architect mode.',
            ],
            checklist: [
              '✓ Captures single screenshot when you trigger specific features',
              '✓ Extracts text via OCR locally',
              '✓ Screenshot processed in memory, then discarded',
              '✗ Does not record video',
              '✗ Does not capture continuously',
              '✗ Does not store screenshots to disk',
            ],
          },
        ],
      },
      processingModes: {
        entries: [
          {
            id: 'modes-overview',
            title: 'Processing Modes',
            size: 'lg',
            paragraphs: [
              'Reso offers two ways to process AI requests. Choose based on your preferences for convenience versus control.',
            ],
          },
          {
            id: 'reso-cloud',
            title: 'Reso Engine',
            size: 'md',
            paragraphs: [
              'Our hosted service routes requests to premium AI models without you managing API keys.',
            ],
            checklist: [
              'Zero setup required—works immediately',
              'Access to Claude, GPT-4o, Gemini',
              'Zero data retention: requests are processed and discarded',
              'Usage-based pricing with balance tracking',
              'Required for Pro Skills (Context, Memory, etc.)',
            ],
          },
          {
            id: 'personal-api',
            title: 'Personal API Keys (BYOK)',
            size: 'md',
            paragraphs: [
              'Connect your own API keys from OpenAI, Anthropic, Google, or Groq.',
            ],
            checklist: [
              'Full control over your API usage and billing',
              'Direct connection to provider—Reso never sees requests',
              'Add multiple providers with priority-based fallback',
              'Free to use with Reso—you only pay your provider',
            ],
          },
          {
            id: 'hybrid',
            title: 'Hybrid Approach',
            size: 'md',
            paragraphs: [
              'Many users combine both modes: personal API for everyday tasks, Reso Engine for Pro features. You can switch between modes at any time in Settings.',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'slow-transcription',
            title: 'Slow Transcription',
            size: 'lg',
            paragraphs: [
              'Reso should transcribe faster than you speak. If it slows down, the Neural Engine may not be loading correctly.',
            ],
            checklist: [
              'Restart Reso to reload ML models',
              'Ensure no other apps are heavily using Neural Engine',
              'Check model files exist at ~/Library/Application Support/Reso2/models/',
            ],
          },
          {
            id: 'permission-issues',
            title: 'Permission Issues',
            size: 'md',
            paragraphs: [
              'If features are not working, check System Settings → Privacy & Security.',
            ],
            checklist: [
              'Microphone: Required for all voice features',
              'Accessibility: Required for Auto-Insertion',
              'Screen Recording: Required for Context and Architect mode',
            ],
            paragraphs2: [
              'After granting permissions, you may need to restart Reso for changes to take effect.',
            ],
          },
          {
            id: 'api-errors',
            title: 'API Connection Issues',
            size: 'md',
            paragraphs: [
              'If AI processing fails, check your API configuration in Settings → Engine.',
            ],
            checklist: [
              'Verify API key is correct and has available credits',
              'Test connection using the built-in API test button',
              'Check if your provider has service disruptions',
              'Try switching to a different provider temporarily',
            ],
          },
        ],
      },
    },
  },
  zh: {
    headerTitle: 'Reso 文档',
    headerSubtitle: '了解如何用语音捕捉想法，通过 AI 处理，并构建你的个人知识系统。',
    onThisPage: '本页内容',
    nav: {
      gettingStarted: '快速开始',
      requirements: '系统要求',
      installation: '安装',
      coreFeatures: '核心功能',
      voiceCapture: '语音捕捉',
      transcription: '转录',
      workflows: '工作流',
      skills: '技能',
      privacySecurity: '隐私与安全',
      dataFlow: '数据流向',
      permissions: '权限指南',
      processingModes: '处理模式',
      troubleshooting: '故障排除',
    },
    sections: {
      gettingStarted: {
        entries: [
          {
            id: 'what-is-reso',
            title: '什么是 Reso？',
            size: 'lg',
            paragraphs: [
              'Reso 是一款面向 macOS 的语音优先 AI 工作空间。说出你的想法，Reso 会转录、优化并整理它们——同时保护你的隐私。',
              '与传统语音备忘录不同，Reso 将你的语音视为智能工作流的起点。你可以口述笔记、生成文档、翻译内容，或通过截图构建结构化规格说明——一切都通过自然语音完成。',
            ],
          },
          {
            id: 'key-principles',
            title: '核心理念',
            size: 'md',
            checklist: [
              '本地优先：转录在你的 Mac 上运行，而非云端',
              '隐私设计：原始音频永不离开你的设备',
              '灵活处理：使用 Reso Engine 或自带 API 密钥',
              '工作流驱动：语音输入触发智能处理管道',
            ],
          },
        ],
      },
      requirements: {
        entries: [
          {
            id: 'system-requirements',
            title: '系统要求',
            size: 'lg',
            checklist: [
              'macOS 14.0 或更高版本 (Sonoma)',
              'Apple Silicon (M1, M2, M3, M4)',
              '最低 8GB 内存，推荐 16GB',
              '3GB 磁盘空间用于 ML 模型',
            ],
            paragraphs: [
              'Reso 专为 Apple Silicon 优化。神经引擎加速转录至超实时速度，同时电池消耗极低。',
            ],
          },
        ],
      },
      installation: {
        entries: [
          {
            id: 'install-steps',
            title: '安装步骤',
            size: 'lg',
            paragraphs: [
              '下载 DMG 文件，将 Reso 拖入应用程序文件夹，然后启动。首次运行时，Reso 会下载语音识别模型（约 2GB）并请求必要权限。',
              '整个设置过程约 2 分钟。完成后，双击 Option 键即可开始首次录音。',
            ],
            downloadLabel: '下载 Reso',
          },
          {
            id: 'first-launch',
            title: '首次启动',
            size: 'md',
            checklist: [
              '在提示时授予麦克风权限',
              '等待模型下载完成',
              '配置你喜欢的激活方式',
              '选择处理模式（Reso Engine 或个人 API）',
            ],
          },
        ],
      },
      voiceCapture: {
        entries: [
          {
            id: 'how-capture-works',
            title: '语音捕捉工作原理',
            size: 'lg',
            paragraphs: [
              'Reso 在后台安静运行，随时准备捕捉灵感。无需打开窗口或浏览菜单——你的声音就是界面。',
              '默认激活方式是双击 Option 键。你也可以配置自定义热键或点击菜单栏图标。录音状态会显示在刘海栏中，不会打断你的工作流。',
            ],
          },
          {
            id: 'shadow-recording',
            title: 'Shadow Recording',
            size: 'md',
            paragraphs: [
              'Shadow Recording 维护一个简短的滚动音频缓冲区。当你激活 Reso 时，它可以捕捉你按下热键前几秒的内容——这样你永远不会丢失想法的开头。',
              '这个缓冲区只存在于内存中，从不保存到磁盘。使用后立即丢弃。',
            ],
          },
        ],
      },
      transcription: {
        entries: [
          {
            id: 'local-transcription',
            title: '本地转录',
            size: 'lg',
            paragraphs: [
              'Reso 使用在 Apple Silicon 神经引擎上本地运行的 Whisper Large v3 Turbo。你的音频完全在 Mac 上处理——没有任何内容被上传用于转录。',
              '这种方法确保你的语音数据保持私密，同时提供超实时的性能。大多数录音在你说完之前就已转录完成。',
            ],
          },
          {
            id: 'accuracy',
            title: '准确性与语言支持',
            size: 'md',
            paragraphs: [
              'Whisper 支持 100 多种语言的自动检测。准确性可与云服务媲美，同时保持完全的隐私。',
              '为获得最佳效果，请以适中的语速自然说话。背景噪音处理得很好，但安静的环境能产生更清晰的转录文本。',
            ],
          },
        ],
      },
      workflows: {
        entries: [
          {
            id: 'what-are-workflows',
            title: '什么是工作流？',
            size: 'lg',
            paragraphs: [
              '工作流定义了 Reso 如何处理你的语音输入。每个工作流组合了特定的技能、输出目标和 AI 行为，针对不同的使用场景进行定制。',
              '例如，"快速笔记"工作流可能只转录并保存，而"邮件草稿"工作流会转录、优化语气并格式化为邮件。',
            ],
          },
          {
            id: 'workflow-types',
            title: '内置工作流类型',
            size: 'md',
            checklist: [
              '听写：直接语音转文字，可选优化',
              'Ghost Writer：说出指令，AI 撰写内容',
              'Architect：语音 + 截图 → 结构化规格说明',
              '翻译：用任何语言说话，输出目标语言',
            ],
          },
          {
            id: 'workflow-matching',
            title: '自动工作流匹配',
            size: 'md',
            paragraphs: [
              'Reso 可以根据你说的内容自动选择合适的工作流。提到翻译，它会激活翻译模式。描述技术功能，它可能建议 Architect 模式。',
              '你也可以锁定特定工作流或随时手动切换。',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'what-are-skills',
            title: '什么是技能？',
            size: 'lg',
            paragraphs: [
              '技能是增强工作流的模块化能力。每个技能处理特定任务——翻译、格式化、记忆检索或上下文感知。',
              '技能按定义的顺序（管道阶段）运行，逐步转换你的语音输入。',
            ],
          },
          {
            id: 'free-skills',
            title: '免费技能',
            size: 'md',
            checklist: [
              'Auto-Insertion：在光标处插入文本或复制到剪贴板',
              '翻译：将输出转换为 200 多种语言',
              'Smart Format：应用模板（邮件、会议记录、日记）',
              'Ghost Writer：AI 根据你的指令生成内容',
              'Writing Style：为输出应用自定义语气和风格',
            ],
          },
          {
            id: 'pro-skills',
            title: 'Pro 技能',
            size: 'md',
            checklist: [
              'Context Awareness：读取屏幕内容以提供上下文感知响应',
              'Text Memory：写作时引用你导入的笔记',
              'Visual Memory：附加相关截图或照片',
              'Auto-Tagging：AI 使用你的标签库对笔记进行分类',
              'Auto-Reference：发现笔记之间的联系',
              'Clustering：将相关笔记分组为主题',
            ],
            paragraphs: [
              'Pro 技能需要 Reso Pro 订阅，并使用 Reso Engine 进行处理。',
            ],
          },
        ],
      },
      dataFlow: {
        entries: [
          {
            id: 'data-flow-overview',
            title: '你的数据如何流动',
            size: 'lg',
            paragraphs: [
              '准确了解你的数据发生了什么能建立信任。以下是完整的流程：',
            ],
          },
          {
            id: 'step-1-capture',
            title: '1. 语音捕捉',
            size: 'md',
            paragraphs: [
              '当你激活 Reso 时，音频直接流向 Mac 上的 Apple 神经引擎。原始音频在内存中处理——从不写入磁盘，从不上传。',
            ],
          },
          {
            id: 'step-2-transcription',
            title: '2. 本地转录',
            size: 'md',
            paragraphs: [
              'Whisper 在本地将语音转换为文字。转录后音频立即被丢弃。只有文本继续通过管道。',
            ],
          },
          {
            id: 'step-3-processing',
            title: '3. AI 处理',
            size: 'md',
            paragraphs: [
              '如果你的工作流需要 AI 优化（翻译、格式化等），文本会被发送到 LLM。可以是：',
            ],
            checklist: [
              'Reso Engine：我们的托管服务，零数据保留',
              '你的个人 API：直接连接 OpenAI、Anthropic、Google 或 Groq',
            ],
          },
          {
            id: 'step-4-output',
            title: '4. 输出',
            size: 'md',
            paragraphs: [
              '处理后的文本被发送到你选择的目标：插入光标位置、复制到剪贴板或保存到本地笔记。Reso 从不在远程服务器上存储你的内容。',
            ],
          },
        ],
      },
      permissions: {
        entries: [
          {
            id: 'permissions-overview',
            title: '权限指南',
            size: 'lg',
            paragraphs: [
              'Reso 只请求其功能所需的权限。以下是每个权限启用的功能及其具体可访问的内容。',
            ],
          },
          {
            id: 'microphone',
            title: '麦克风（必需）',
            size: 'md',
            paragraphs: [
              '语音录制所必需。没有此权限，Reso 无法捕获音频。',
            ],
            checklist: [
              '✓ 在你激活录音时捕获音频',
              '✓ 本地处理音频进行转录',
              '✗ 不会在后台持续录音',
              '✗ 不会将原始音频保存到磁盘',
              '✗ 不会将音频上传到服务器',
            ],
          },
          {
            id: 'accessibility',
            title: '辅助功能（可选）',
            size: 'md',
            paragraphs: [
              '启用 Auto-Insertion 和 Context Awareness 功能。',
            ],
            checklist: [
              '✓ 读取活动应用名称和窗口标题',
              '✓ 检测可编辑的文本字段以进行插入',
              '✓ 读取选中的文本作为上下文',
              '✗ 无法访问密码或安全字段（被 macOS 阻止）',
              '✗ 无法读取其他应用的内容',
              '✗ 无法访问你的文件系统',
            ],
          },
          {
            id: 'screen-recording',
            title: '屏幕录制（可选）',
            size: 'md',
            paragraphs: [
              '启用全屏上下文感知和 Architect 模式。',
            ],
            checklist: [
              '✓ 在你触发特定功能时捕获单张截图',
              '✓ 本地通过 OCR 提取文字',
              '✓ 截图在内存中处理，然后丢弃',
              '✗ 不录制视频',
              '✗ 不持续捕获',
              '✗ 不将截图存储到磁盘',
            ],
          },
        ],
      },
      processingModes: {
        entries: [
          {
            id: 'modes-overview',
            title: '处理模式',
            size: 'lg',
            paragraphs: [
              'Reso 提供两种处理 AI 请求的方式。根据你对便利性与控制权的偏好进行选择。',
            ],
          },
          {
            id: 'reso-cloud',
            title: 'Reso Engine',
            size: 'md',
            paragraphs: [
              '我们的托管服务将请求路由到高级 AI 模型，无需你管理 API 密钥。',
            ],
            checklist: [
              '零设置——立即可用',
              '访问 Claude、GPT-4o、Gemini',
              '零数据保留：请求处理后立即丢弃',
              '按用量计费，带余额追踪',
              'Pro 技能必需（Context、Memory 等）',
            ],
          },
          {
            id: 'personal-api',
            title: '个人 API 密钥 (BYOK)',
            size: 'md',
            paragraphs: [
              '连接你自己的 OpenAI、Anthropic、Google 或 Groq API 密钥。',
            ],
            checklist: [
              '完全控制你的 API 使用和账单',
              '直接连接提供商——Reso 从不看到请求',
              '添加多个提供商，支持优先级回退',
              '免费使用 Reso——你只需支付提供商费用',
            ],
          },
          {
            id: 'hybrid',
            title: '混合方案',
            size: 'md',
            paragraphs: [
              '许多用户结合使用两种模式：日常任务用个人 API，Pro 功能用 Reso Engine。你可以随时在设置中切换模式。',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'slow-transcription',
            title: '转录速度慢',
            size: 'lg',
            paragraphs: [
              'Reso 应该比你说话更快地完成转录。如果变慢，可能是神经引擎没有正确加载。',
            ],
            checklist: [
              '重启 Reso 以重新加载 ML 模型',
              '确保没有其他应用大量使用神经引擎',
              '检查模型文件是否存在于 ~/Library/Application Support/Reso2/models/',
            ],
          },
          {
            id: 'permission-issues',
            title: '权限问题',
            size: 'md',
            paragraphs: [
              '如果功能无法使用，请检查系统设置 → 隐私与安全。',
            ],
            checklist: [
              '麦克风：所有语音功能必需',
              '辅助功能：Auto-Insertion 必需',
              '屏幕录制：Context 和 Architect 模式必需',
            ],
            paragraphs2: [
              '授予权限后，你可能需要重启 Reso 才能生效。',
            ],
          },
          {
            id: 'api-errors',
            title: 'API 连接问题',
            size: 'md',
            paragraphs: [
              '如果 AI 处理失败，请在设置 → 引擎中检查你的 API 配置。',
            ],
            checklist: [
              '验证 API 密钥正确且有可用额度',
              '使用内置的 API 测试按钮测试连接',
              '检查你的提供商是否有服务中断',
              '尝试临时切换到其他提供商',
            ],
          },
        ],
      },
    },
  },
  ja: {
    headerTitle: 'Reso ドキュメント',
    headerSubtitle: '音声でアイデアをキャプチャし、AIで処理し、パーソナルナレッジシステムを構築する方法を学びましょう。',
    onThisPage: 'このページ',
    nav: {
      gettingStarted: 'はじめに',
      requirements: 'システム要件',
      installation: 'インストール',
      coreFeatures: 'コア機能',
      voiceCapture: '音声キャプチャ',
      transcription: '文字起こし',
      workflows: 'ワークフロー',
      skills: 'スキル',
      privacySecurity: 'プライバシーとセキュリティ',
      dataFlow: 'データの流れ',
      permissions: '権限ガイド',
      processingModes: '処理モード',
      troubleshooting: 'トラブルシューティング',
    },
    sections: {
      gettingStarted: {
        entries: [
          {
            id: 'what-is-reso',
            title: 'Reso とは？',
            size: 'lg',
            paragraphs: [
              'Reso は macOS 向けの音声ファーストAIワークスペースです。思いついたことを話すと、Reso が文字起こし、洗練、整理を行います—すべてプライバシーを守りながら。',
              '従来のボイスメモと異なり、Reso は音声をインテリジェントなワークフローの出発点として扱います。メモの口述、ドキュメント生成、コンテンツ翻訳、スクリーンショットからの構造化仕様作成—すべて自然な音声で。',
            ],
          },
          {
            id: 'key-principles',
            title: '主要原則',
            size: 'md',
            checklist: [
              'ローカルファースト：文字起こしはクラウドではなくMac上で実行',
              'プライバシー設計：生の音声はデバイスの外に出ません',
              '柔軟な処理：Reso Engine または独自のAPIキーを使用',
              'ワークフロー駆動：音声入力がインテリジェントな処理パイプラインをトリガー',
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
            checklist: [
              'macOS 14.0 以降（Sonoma）',
              'Apple Silicon（M1、M2、M3、M4）',
              'RAM 8GB 以上、16GB 推奨',
              'MLモデル用に3GBのディスク空き容量',
            ],
            paragraphs: [
              'Reso は Apple Silicon 専用に最適化されています。Neural Engine がリアルタイムより高速な文字起こしを実現し、バッテリー消費を最小限に抑えます。',
            ],
          },
        ],
      },
      installation: {
        entries: [
          {
            id: 'install-steps',
            title: 'インストール',
            size: 'lg',
            paragraphs: [
              'DMGファイルをダウンロードし、Reso をアプリケーションフォルダにドラッグして起動します。初回起動時、Reso は音声認識モデル（約2GB）をダウンロードし、必要な権限をリクエストします。',
              'セットアップ全体で約2分です。完了したら、Option キーをダブルタップして最初の録音を開始します。',
            ],
            downloadLabel: 'Reso をダウンロード',
          },
          {
            id: 'first-launch',
            title: '初回起動',
            size: 'md',
            checklist: [
              'プロンプトが表示されたらマイク権限を許可',
              'モデルのダウンロード完了を待つ',
              '好みの起動方法を設定',
              '処理モードを選択（Reso Engine または個人API）',
            ],
          },
        ],
      },
      voiceCapture: {
        entries: [
          {
            id: 'how-capture-works',
            title: '音声キャプチャの仕組み',
            size: 'lg',
            paragraphs: [
              'Reso はバックグラウンドで静かに動作し、インスピレーションが湧いたときにいつでも対応します。ウィンドウを開いたりメニューを操作する必要はありません—声がインターフェースです。',
              'デフォルトの起動方法は Option キーのダブルタップです。カスタムホットキーの設定やメニューバーアイコンのクリックも可能です。録音状態はノッチバーに表示され、ワークフローを中断しません。',
            ],
          },
          {
            id: 'shadow-recording',
            title: 'シャドウレコーディング',
            size: 'md',
            paragraphs: [
              'シャドウレコーディングは短いローリング音声バッファを維持します。Reso を起動すると、ホットキーを押す数秒前の音声もキャプチャできます—思考の始まりを見逃しません。',
              'このバッファはメモリ内にのみ存在し、ディスクに保存されることはありません。使用後すぐに破棄されます。',
            ],
          },
        ],
      },
      transcription: {
        entries: [
          {
            id: 'local-transcription',
            title: 'オンデバイス文字起こし',
            size: 'lg',
            paragraphs: [
              'Reso は Apple Silicon Neural Engine 上でローカル実行される Whisper Large v3 Turbo を使用します。音声は完全にMac上で処理され、文字起こしのためにアップロードされることはありません。',
              'このアプローチにより、リアルタイムより高速なパフォーマンスを維持しながら、音声データのプライバシーを確保します。',
            ],
          },
          {
            id: 'accuracy',
            title: '精度と言語',
            size: 'md',
            paragraphs: [
              'Whisper は自動検出で100以上の言語をサポートします。精度はクラウドサービスに匹敵しながら、完全なプライバシーを維持します。',
              '最良の結果を得るには、適度なペースで自然に話してください。背景ノイズにも対応しますが、静かな環境ではより鮮明な文字起こしが得られます。',
            ],
          },
        ],
      },
      workflows: {
        entries: [
          {
            id: 'what-are-workflows',
            title: 'ワークフローとは？',
            size: 'lg',
            paragraphs: [
              'ワークフローは Reso が音声入力をどのように処理するかを定義します。各ワークフローは、異なるユースケースに合わせて特定のスキル、出力先、AI動作を組み合わせます。',
              '例えば、「クイックノート」ワークフローは文字起こしして保存するだけですが、「メール下書き」ワークフローは文字起こし、トーンの洗練、メール形式へのフォーマットを行います。',
            ],
          },
          {
            id: 'workflow-types',
            title: '組み込みワークフロータイプ',
            size: 'md',
            checklist: [
              'ディクテーション：オプションの洗練付き直接音声テキスト変換',
              'Ghost Writer：指示を話すと、AIがコンテンツを書く',
              'Architect：音声 + スクリーンショット → 構造化仕様',
              '翻訳：任意の言語で話し、ターゲット言語で出力',
            ],
          },
          {
            id: 'workflow-matching',
            title: '自動ワークフローマッチング',
            size: 'md',
            paragraphs: [
              'Reso は話した内容に基づいて適切なワークフローを自動的に選択できます。翻訳に言及すると翻訳モードが起動します。技術的な機能を説明すると、Architect モードを提案することがあります。',
              '特定のワークフローをロックしたり、いつでも手動で切り替えることもできます。',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'what-are-skills',
            title: 'スキルとは？',
            size: 'lg',
            paragraphs: [
              'スキルはワークフローを強化するモジュール式の機能です。各スキルは翻訳、フォーマット、メモリ検索、コンテキスト認識など、特定のタスクを処理します。',
              'スキルは定義された順序（パイプラインフェーズ）で実行され、音声入力を段階的に変換します。',
            ],
          },
          {
            id: 'free-skills',
            title: '無料スキル',
            size: 'md',
            checklist: [
              'Auto-Insertion：カーソル位置にテキストを挿入またはクリップボードにコピー',
              '翻訳：200以上の言語に出力を変換',
              'Smart Format：テンプレート適用（メール、会議メモ、日記）',
              'Ghost Writer：指示からAIがコンテンツを生成',
              'Writing Style：出力にカスタムトーンとスタイルを適用',
            ],
          },
          {
            id: 'pro-skills',
            title: 'Pro スキル',
            size: 'md',
            checklist: [
              'Context Awareness：コンテキスト対応レスポンスのために画面コンテンツを読み取り',
              'Text Memory：執筆中にインポートしたノートを参照',
              'Visual Memory：関連するスクリーンショットや写真を添付',
              'Auto-Tagging：AIがタグライブラリを使用してノートを分類',
              'Auto-Reference：ノート間の関連を発見',
              'Clustering：関連ノートをテーマごとにグループ化',
            ],
            paragraphs: [
              'Pro スキルには Reso Pro サブスクリプションが必要で、処理に Reso Engine を使用します。',
            ],
          },
        ],
      },
      dataFlow: {
        entries: [
          {
            id: 'data-flow-overview',
            title: 'データの流れ',
            size: 'lg',
            paragraphs: [
              'データに何が起こるかを正確に理解することで信頼が生まれます。完全なフローは以下の通りです：',
            ],
          },
          {
            id: 'step-1-capture',
            title: '1. 音声キャプチャ',
            size: 'md',
            paragraphs: [
              'Reso を起動すると、音声は Mac の Apple Neural Engine に直接ストリーミングされます。生の音声はメモリ内で処理され、ディスクへの書き込みやアップロードは行われません。',
            ],
          },
          {
            id: 'step-2-transcription',
            title: '2. ローカル文字起こし',
            size: 'md',
            paragraphs: [
              'Whisper がローカルで音声をテキストに変換します。文字起こし後、音声は直ちに破棄されます。テキストのみがパイプラインを通過します。',
            ],
          },
          {
            id: 'step-3-processing',
            title: '3. AI 処理',
            size: 'md',
            paragraphs: [
              'ワークフローがAI洗練（翻訳、フォーマットなど）を必要とする場合、テキストはLLMに送信されます。以下のいずれかです：',
            ],
            checklist: [
              'Reso Engine：データ保持ゼロの当社ホスティングサービス',
              '個人API：OpenAI、Anthropic、Google、Groq への直接接続',
            ],
          },
          {
            id: 'step-4-output',
            title: '4. 出力',
            size: 'md',
            paragraphs: [
              '処理されたテキストは選択した出力先に配信されます：カーソル位置への挿入、クリップボードへのコピー、またはローカルノートへの保存。Reso はリモートサーバーにコンテンツを保存しません。',
            ],
          },
        ],
      },
      permissions: {
        entries: [
          {
            id: 'permissions-overview',
            title: '権限ガイド',
            size: 'lg',
            paragraphs: [
              'Reso は機能に必要な権限のみをリクエストします。各権限で有効になる機能とアクセス可能な内容を説明します。',
            ],
          },
          {
            id: 'microphone',
            title: 'マイク（必須）',
            size: 'md',
            paragraphs: [
              '音声録音に必須です。この権限がないと、Reso は音声をキャプチャできません。',
            ],
            checklist: [
              '✓ 録音起動時に音声をキャプチャ',
              '✓ 文字起こしのためにローカルで音声を処理',
              '✗ バックグラウンドで継続的に録音しない',
              '✗ 生の音声をディスクに保存しない',
              '✗ 音声をサーバーにアップロードしない',
            ],
          },
          {
            id: 'accessibility',
            title: 'アクセシビリティ（オプション）',
            size: 'md',
            paragraphs: [
              'Auto-Insertion と Context Awareness 機能を有効にします。',
            ],
            checklist: [
              '✓ アクティブなアプリ名とウィンドウタイトルを読み取り',
              '✓ 挿入用の編集可能テキストフィールドを検出',
              '✓ コンテキスト用に選択テキストを読み取り',
              '✗ パスワードやセキュアフィールドにアクセス不可（macOSがブロック）',
              '✗ 他のアプリのコンテンツを読み取り不可',
              '✗ ファイルシステムにアクセス不可',
            ],
          },
          {
            id: 'screen-recording',
            title: '画面収録（オプション）',
            size: 'md',
            paragraphs: [
              'フルスクリーンコンテキスト認識と Architect モードを有効にします。',
            ],
            checklist: [
              '✓ 特定機能トリガー時に単一スクリーンショットをキャプチャ',
              '✓ ローカルでOCRによりテキストを抽出',
              '✓ スクリーンショットはメモリ内で処理後、破棄',
              '✗ ビデオは録画しない',
              '✗ 継続的にキャプチャしない',
              '✗ スクリーンショットをディスクに保存しない',
            ],
          },
        ],
      },
      processingModes: {
        entries: [
          {
            id: 'modes-overview',
            title: '処理モード',
            size: 'lg',
            paragraphs: [
              'Reso はAIリクエストを処理する2つの方法を提供します。利便性と制御のどちらを重視するかで選択してください。',
            ],
          },
          {
            id: 'reso-cloud',
            title: 'Reso Engine',
            size: 'md',
            paragraphs: [
              '当社のホスティングサービスがAPIキー管理なしでプレミアムAIモデルにリクエストをルーティングします。',
            ],
            checklist: [
              'セットアップ不要—すぐに使用可能',
              'Claude、GPT-4o、Gemini にアクセス',
              'データ保持ゼロ：リクエストは処理後に破棄',
              '使用量ベースの料金、残高追跡付き',
              'Pro スキル（Context、Memory など）に必須',
            ],
          },
          {
            id: 'personal-api',
            title: '個人APIキー（BYOK）',
            size: 'md',
            paragraphs: [
              'OpenAI、Anthropic、Google、Groq の独自APIキーを接続します。',
            ],
            checklist: [
              'API使用量と請求を完全にコントロール',
              'プロバイダーへの直接接続—Reso はリクエストを見ない',
              '優先度ベースのフォールバックで複数プロバイダーを追加',
              'Reso は無料—プロバイダーへの支払いのみ',
            ],
          },
          {
            id: 'hybrid',
            title: 'ハイブリッドアプローチ',
            size: 'md',
            paragraphs: [
              '多くのユーザーは両モードを組み合わせています：日常タスクには個人API、Pro機能にはReso Engine。設定でいつでもモードを切り替えられます。',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'slow-transcription',
            title: '文字起こしが遅い',
            size: 'lg',
            paragraphs: [
              'Reso は話すより速く文字起こしするはずです。遅くなった場合、Neural Engine が正しくロードされていない可能性があります。',
            ],
            checklist: [
              'Reso を再起動してMLモデルをリロード',
              '他のアプリが Neural Engine を大量使用していないか確認',
              'モデルファイルが ~/Library/Application Support/Reso2/models/ に存在するか確認',
            ],
          },
          {
            id: 'permission-issues',
            title: '権限の問題',
            size: 'md',
            paragraphs: [
              '機能が動作しない場合、システム設定 → プライバシーとセキュリティを確認してください。',
            ],
            checklist: [
              'マイク：すべての音声機能に必須',
              'アクセシビリティ：Auto-Insertion に必須',
              '画面収録：Context と Architect モードに必須',
            ],
            paragraphs2: [
              '権限を付与した後、変更を反映するために Reso の再起動が必要な場合があります。',
            ],
          },
          {
            id: 'api-errors',
            title: 'API接続の問題',
            size: 'md',
            paragraphs: [
              'AI処理が失敗した場合、設定 → エンジンでAPI設定を確認してください。',
            ],
            checklist: [
              'APIキーが正しく、利用可能なクレジットがあるか確認',
              '組み込みのAPIテストボタンで接続をテスト',
              'プロバイダーにサービス障害がないか確認',
              '一時的に別のプロバイダーに切り替えてみる',
            ],
          },
        ],
      },
    },
  },
  'zh-TW': {
    headerTitle: 'Reso 說明文件',
    headerSubtitle: '了解如何用語音捕捉想法，透過 AI 處理，並建立你的個人知識系統。',
    onThisPage: '本頁內容',
    nav: {
      gettingStarted: '快速開始',
      requirements: '系統需求',
      installation: '安裝',
      coreFeatures: '核心功能',
      voiceCapture: '語音捕捉',
      transcription: '轉錄',
      workflows: '工作流程',
      skills: '技能',
      privacySecurity: '隱私與安全',
      dataFlow: '資料流向',
      permissions: '權限指南',
      processingModes: '處理模式',
      troubleshooting: '疑難排解',
    },
    sections: {
      gettingStarted: {
        entries: [
          {
            id: 'what-is-reso',
            title: '什麼是 Reso？',
            size: 'lg',
            paragraphs: [
              'Reso 是一款面向 macOS 的語音優先 AI 工作空間。說出你的想法，Reso 會轉錄、優化並整理它們——同時保護你的隱私。',
              '與傳統語音備忘錄不同，Reso 將你的語音視為智慧工作流程的起點。你可以口述筆記、產生文件、翻譯內容，或透過截圖建立結構化規格說明——一切都透過自然語音完成。',
            ],
          },
          {
            id: 'key-principles',
            title: '核心理念',
            size: 'md',
            checklist: [
              '本地優先：轉錄在你的 Mac 上執行，而非雲端',
              '隱私設計：原始音訊永不離開你的裝置',
              '靈活處理：使用 Reso Engine 或自備 API 金鑰',
              '工作流程驅動：語音輸入觸發智慧處理管道',
            ],
          },
        ],
      },
      requirements: {
        entries: [
          {
            id: 'system-requirements',
            title: '系統需求',
            size: 'lg',
            checklist: [
              'macOS 14.0 或更高版本 (Sonoma)',
              'Apple Silicon (M1, M2, M3, M4)',
              '最低 8GB 記憶體，建議 16GB',
              '3GB 磁碟空間用於 ML 模型',
            ],
            paragraphs: [
              'Reso 專為 Apple Silicon 最佳化。神經引擎加速轉錄至超即時速度，同時電池消耗極低。',
            ],
          },
        ],
      },
      installation: {
        entries: [
          {
            id: 'install-steps',
            title: '安裝步驟',
            size: 'lg',
            paragraphs: [
              '下載 DMG 檔案，將 Reso 拖入應用程式資料夾，然後啟動。首次執行時，Reso 會下載語音辨識模型（約 2GB）並請求必要權限。',
              '整個設定過程約 2 分鐘。完成後，雙擊 Option 鍵即可開始首次錄音。',
            ],
            downloadLabel: '下載 Reso',
          },
          {
            id: 'first-launch',
            title: '首次啟動',
            size: 'md',
            checklist: [
              '在提示時授予麥克風權限',
              '等待模型下載完成',
              '設定你偏好的啟動方式',
              '選擇處理模式（Reso Engine 或個人 API）',
            ],
          },
        ],
      },
      voiceCapture: {
        entries: [
          {
            id: 'how-capture-works',
            title: '語音捕捉工作原理',
            size: 'lg',
            paragraphs: [
              'Reso 在背景安靜執行，隨時準備捕捉靈感。無需開啟視窗或瀏覽選單——你的聲音就是介面。',
              '預設啟動方式是雙擊 Option 鍵。你也可以設定自訂快捷鍵或點擊選單列圖示。錄音狀態會顯示在瀏海列中，不會打斷你的工作流程。',
            ],
          },
          {
            id: 'shadow-recording',
            title: 'Shadow Recording',
            size: 'md',
            paragraphs: [
              'Shadow Recording 維護一個簡短的滾動音訊緩衝區。當你啟動 Reso 時，它可以捕捉你按下快捷鍵前幾秒的內容——這樣你永遠不會遺失想法的開頭。',
              '這個緩衝區只存在於記憶體中，從不儲存到磁碟。使用後立即丟棄。',
            ],
          },
        ],
      },
      transcription: {
        entries: [
          {
            id: 'local-transcription',
            title: '本地轉錄',
            size: 'lg',
            paragraphs: [
              'Reso 使用在 Apple Silicon 神經引擎上本地執行的 Whisper Large v3 Turbo。你的音訊完全在 Mac 上處理——沒有任何內容被上傳用於轉錄。',
              '這種方法確保你的語音資料保持私密，同時提供超即時的效能。大多數錄音在你說完之前就已轉錄完成。',
            ],
          },
          {
            id: 'accuracy',
            title: '準確性與語言支援',
            size: 'md',
            paragraphs: [
              'Whisper 支援 100 多種語言的自動偵測。準確性可與雲端服務媲美，同時保持完全的隱私。',
              '為獲得最佳效果，請以適中的語速自然說話。背景雜音處理得很好，但安靜的環境能產生更清晰的轉錄文字。',
            ],
          },
        ],
      },
      workflows: {
        entries: [
          {
            id: 'what-are-workflows',
            title: '什麼是工作流程？',
            size: 'lg',
            paragraphs: [
              '工作流程定義了 Reso 如何處理你的語音輸入。每個工作流程組合了特定的技能、輸出目標和 AI 行為，針對不同的使用情境進行訂製。',
              '例如，「快速筆記」工作流程可能只轉錄並儲存，而「郵件草稿」工作流程會轉錄、優化語氣並格式化為郵件。',
            ],
          },
          {
            id: 'workflow-types',
            title: '內建工作流程類型',
            size: 'md',
            checklist: [
              '聽寫：直接語音轉文字，可選最佳化',
              'Ghost Writer：說出指令，AI 撰寫內容',
              'Architect：語音 + 截圖 → 結構化規格說明',
              '翻譯：用任何語言說話，輸出目標語言',
            ],
          },
          {
            id: 'workflow-matching',
            title: '自動工作流程配對',
            size: 'md',
            paragraphs: [
              'Reso 可以根據你說的內容自動選擇合適的工作流程。提到翻譯，它會啟動翻譯模式。描述技術功能，它可能建議 Architect 模式。',
              '你也可以鎖定特定工作流程或隨時手動切換。',
            ],
          },
        ],
      },
      skills: {
        entries: [
          {
            id: 'what-are-skills',
            title: '什麼是技能？',
            size: 'lg',
            paragraphs: [
              '技能是增強工作流程的模組化能力。每個技能處理特定任務——翻譯、格式化、記憶檢索或情境感知。',
              '技能按定義的順序（管道階段）執行，逐步轉換你的語音輸入。',
            ],
          },
          {
            id: 'free-skills',
            title: '免費技能',
            size: 'md',
            checklist: [
              'Auto-Insertion：在游標處插入文字或複製到剪貼簿',
              '翻譯：將輸出轉換為 200 多種語言',
              'Smart Format：套用範本（郵件、會議紀錄、日記）',
              'Ghost Writer：AI 根據你的指令產生內容',
              'Writing Style：為輸出套用自訂語氣和風格',
            ],
          },
          {
            id: 'pro-skills',
            title: 'Pro 技能',
            size: 'md',
            checklist: [
              'Context Awareness：讀取螢幕內容以提供情境感知回應',
              'Text Memory：寫作時參考你匯入的筆記',
              'Visual Memory：附加相關截圖或照片',
              'Auto-Tagging：AI 使用你的標籤庫對筆記進行分類',
              'Auto-Reference：發現筆記之間的關聯',
              'Clustering：將相關筆記分組為主題',
            ],
            paragraphs: [
              'Pro 技能需要 Reso Pro 訂閱，並使用 Reso Engine 進行處理。',
            ],
          },
        ],
      },
      dataFlow: {
        entries: [
          {
            id: 'data-flow-overview',
            title: '你的資料如何流動',
            size: 'lg',
            paragraphs: [
              '準確了解你的資料發生了什麼能建立信任。以下是完整的流程：',
            ],
          },
          {
            id: 'step-1-capture',
            title: '1. 語音捕捉',
            size: 'md',
            paragraphs: [
              '當你啟動 Reso 時，音訊直接串流至 Mac 上的 Apple 神經引擎。原始音訊在記憶體中處理——從不寫入磁碟，從不上傳。',
            ],
          },
          {
            id: 'step-2-transcription',
            title: '2. 本地轉錄',
            size: 'md',
            paragraphs: [
              'Whisper 在本地將語音轉換為文字。轉錄後音訊立即被丟棄。只有文字繼續通過管道。',
            ],
          },
          {
            id: 'step-3-processing',
            title: '3. AI 處理',
            size: 'md',
            paragraphs: [
              '如果你的工作流程需要 AI 最佳化（翻譯、格式化等），文字會被發送到 LLM。可以是：',
            ],
            checklist: [
              'Reso Engine：我們的託管服務，零資料保留',
              '你的個人 API：直接連接 OpenAI、Anthropic、Google 或 Groq',
            ],
          },
          {
            id: 'step-4-output',
            title: '4. 輸出',
            size: 'md',
            paragraphs: [
              '處理後的文字被發送到你選擇的目標：插入游標位置、複製到剪貼簿或儲存到本地筆記。Reso 從不在遠端伺服器上儲存你的內容。',
            ],
          },
        ],
      },
      permissions: {
        entries: [
          {
            id: 'permissions-overview',
            title: '權限指南',
            size: 'lg',
            paragraphs: [
              'Reso 只請求其功能所需的權限。以下是每個權限啟用的功能及其具體可存取的內容。',
            ],
          },
          {
            id: 'microphone',
            title: '麥克風（必要）',
            size: 'md',
            paragraphs: [
              '語音錄製所必需。沒有此權限，Reso 無法捕獲音訊。',
            ],
            checklist: [
              '✓ 在你啟動錄音時捕獲音訊',
              '✓ 本地處理音訊進行轉錄',
              '✗ 不會在背景持續錄音',
              '✗ 不會將原始音訊儲存到磁碟',
              '✗ 不會將音訊上傳到伺服器',
            ],
          },
          {
            id: 'accessibility',
            title: '輔助使用（選用）',
            size: 'md',
            paragraphs: [
              '啟用 Auto-Insertion 和 Context Awareness 功能。',
            ],
            checklist: [
              '✓ 讀取使用中 App 名稱和視窗標題',
              '✓ 偵測可編輯的文字欄位以進行插入',
              '✓ 讀取選取的文字作為情境',
              '✗ 無法存取密碼或安全欄位（被 macOS 封鎖）',
              '✗ 無法讀取其他 App 的內容',
              '✗ 無法存取你的檔案系統',
            ],
          },
          {
            id: 'screen-recording',
            title: '螢幕錄製（選用）',
            size: 'md',
            paragraphs: [
              '啟用全螢幕情境感知和 Architect 模式。',
            ],
            checklist: [
              '✓ 在你觸發特定功能時捕獲單張截圖',
              '✓ 本地透過 OCR 擷取文字',
              '✓ 截圖在記憶體中處理，然後丟棄',
              '✗ 不錄製影片',
              '✗ 不持續捕獲',
              '✗ 不將截圖儲存到磁碟',
            ],
          },
        ],
      },
      processingModes: {
        entries: [
          {
            id: 'modes-overview',
            title: '處理模式',
            size: 'lg',
            paragraphs: [
              'Reso 提供兩種處理 AI 請求的方式。根據你對便利性與控制權的偏好進行選擇。',
            ],
          },
          {
            id: 'reso-cloud',
            title: 'Reso Engine',
            size: 'md',
            paragraphs: [
              '我們的託管服務將請求路由到高級 AI 模型，無需你管理 API 金鑰。',
            ],
            checklist: [
              '零設定——立即可用',
              '存取 Claude、GPT-4o、Gemini',
              '零資料保留：請求處理後立即丟棄',
              '按用量計費，帶餘額追蹤',
              'Pro 技能必需（Context、Memory 等）',
            ],
          },
          {
            id: 'personal-api',
            title: '個人 API 金鑰 (BYOK)',
            size: 'md',
            paragraphs: [
              '連接你自己的 OpenAI、Anthropic、Google 或 Groq API 金鑰。',
            ],
            checklist: [
              '完全控制你的 API 使用和帳單',
              '直接連接供應商——Reso 從不看到請求',
              '新增多個供應商，支援優先順序遞補',
              '免費使用 Reso——你只需支付供應商費用',
            ],
          },
          {
            id: 'hybrid',
            title: '混合方案',
            size: 'md',
            paragraphs: [
              '許多使用者結合使用兩種模式：日常任務用個人 API，Pro 功能用 Reso Engine。你可以隨時在設定中切換模式。',
            ],
          },
        ],
      },
      troubleshooting: {
        entries: [
          {
            id: 'slow-transcription',
            title: '轉錄速度慢',
            size: 'lg',
            paragraphs: [
              'Reso 應該比你說話更快地完成轉錄。如果變慢，可能是神經引擎沒有正確載入。',
            ],
            checklist: [
              '重新啟動 Reso 以重新載入 ML 模型',
              '確保沒有其他 App 大量使用神經引擎',
              '檢查模型檔案是否存在於 ~/Library/Application Support/Reso2/models/',
            ],
          },
          {
            id: 'permission-issues',
            title: '權限問題',
            size: 'md',
            paragraphs: [
              '如果功能無法使用，請檢查系統設定 → 隱私權與安全性。',
            ],
            checklist: [
              '麥克風：所有語音功能必需',
              '輔助使用：Auto-Insertion 必需',
              '螢幕錄製：Context 和 Architect 模式必需',
            ],
            paragraphs2: [
              '授予權限後，你可能需要重新啟動 Reso 才能生效。',
            ],
          },
          {
            id: 'api-errors',
            title: 'API 連線問題',
            size: 'md',
            paragraphs: [
              '如果 AI 處理失敗，請在設定 → 引擎中檢查你的 API 設定。',
            ],
            checklist: [
              '驗證 API 金鑰正確且有可用額度',
              '使用內建的 API 測試按鈕測試連線',
              '檢查你的供應商是否有服務中斷',
              '嘗試暫時切換到其他供應商',
            ],
          },
        ],
      },
    },
  },
};

const navIdList = [
  'gettingStarted',
  'requirements',
  'installation',
  'coreFeatures',
  'voiceCapture',
  'transcription',
  'workflows',
  'skills',
  'privacySecurity',
  'dataFlow',
  'permissions',
  'processingModes',
  'troubleshooting',
];

const DocsPage = () => {
  const location = useLocation();
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(docsCopy, language);
  const [activeSection, setActiveSection] = useState('gettingStarted');
  const [expandedSections, setExpandedSections] = useState(new Set(['coreFeatures', 'privacySecurity']));

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.slice(1);
    if (!navIdList.includes(sectionId)) return;

    setActiveSection(sectionId);
    const featureIds = ['voiceCapture', 'transcription', 'workflows', 'skills'];
    const privacyIds = ['dataFlow', 'permissions', 'processingModes'];
    if (featureIds.includes(sectionId)) {
      setExpandedSections((prev) => new Set([...prev, 'coreFeatures']));
    }
    if (privacyIds.includes(sectionId)) {
      setExpandedSections((prev) => new Set([...prev, 'privacySecurity']));
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
      { id: 'gettingStarted', label: copy.nav.gettingStarted },
      { id: 'requirements', label: copy.nav.requirements },
      { id: 'installation', label: copy.nav.installation },
      {
        id: 'coreFeatures',
        label: copy.nav.coreFeatures,
        children: [
          { id: 'voiceCapture', label: copy.nav.voiceCapture },
          { id: 'transcription', label: copy.nav.transcription },
          { id: 'workflows', label: copy.nav.workflows },
          { id: 'skills', label: copy.nav.skills },
        ],
      },
      {
        id: 'privacySecurity',
        label: copy.nav.privacySecurity,
        children: [
          { id: 'dataFlow', label: copy.nav.dataFlow },
          { id: 'permissions', label: copy.nav.permissions },
          { id: 'processingModes', label: copy.nav.processingModes },
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
            {entry.paragraphs?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {entry.checklist && (
              <ul className="space-y-2">
                {entry.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    {item.startsWith('✓') || item.startsWith('✗') ? (
                      <span className={item.startsWith('✓') ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}>
                        {item}
                      </span>
                    ) : (
                      <>
                        <CheckCircle2 size={14} className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {entry.paragraphs2?.map((paragraph, idx) => (
              <p key={`p2-${idx}`}>{paragraph}</p>
            ))}

            {entry.downloadLabel && (
              <a
                href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-black dark:hover:bg-gray-100 transition-colors"
              >
                {entry.downloadLabel}
              </a>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default DocsPage;
