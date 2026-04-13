import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import ToolLogos from './ToolLogos';
import { Download } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const ResoHeroMockup = lazy(() => import('./mockups/ResoHeroMockup'));

const heroCopy = {
  en: {
    title: 'Think out loud. Work takes shape.',
    subtitle: 'Hold Option anywhere to speak. Everything stays local. Flow stays unbroken.',
    download: 'Download for macOS',
    worksWith: 'Integrates with',
  },
  zh: {
    title: '思考出声，工作成型。',
    subtitle: '按住 Option，脱口而出。全在本地，心流不断。',
    download: '下载 macOS 版',
    worksWith: '轻松接入',
  },
  ja: {
    title: '声で考え、仕事が形になる。',
    subtitle: 'Option を押して話すだけ。すべてローカル処理、フローは途切れない。',
    download: 'macOS 版をダウンロード',
    worksWith: '対応アプリ',
  },
};

const HERO_SCENES = [
  {
    id: 'capture',
    label: { en: 'Capture', zh: '捕捉', ja: 'キャプチャ' },
    caption: {
      en: 'Hold Option anywhere. Speak, and Reso refines and inserts the text.',
      zh: '随时按住 Option 说话，Reso 会自动提炼并输入文本。',
      ja: 'どこでも Option を押して話すだけ。Reso がテキストを整えて入力します。',
    },
  },
  {
    id: 'workflow',
    label: { en: 'Orchestrate', zh: '编排', ja: 'オーケストレート' },
    caption: {
      en: 'Build voice pipelines. Route your words through your own rules and scripts.',
      zh: '编排语音工作流。让你的话语穿过自定义的规则与脚本。',
      ja: '音声ワークフローを構築。話した言葉を独自のルールやスクリプトで処理します。',
    },
  },
  {
    id: 'indexing',
    label: { en: 'Memory', zh: '记忆', ja: 'メモリ' },
    caption: {
      en: 'Connect your notes. Reso reads local files to give AI your personal context.',
      zh: '连入你的笔记。Reso 通过读取本地文件，让 AI 懂你的上下文。',
      ja: 'ノートを連携。ローカルファイルを読み込み、AI にあなたの文脈を理解させます。',
    },
  },
  {
    id: 'discover',
    label: { en: 'Discover', zh: '发现', ja: 'ディスカバリー' },
    caption: {
      en: 'Explore your mind. Watch recorded thoughts cluster naturally in a 3D space.',
      zh: '漫游你的思维。看所有录音在 3D 空间中自然聚类成星云。',
      ja: '思考を探索。録音されたアイデアが 3D 空間で自然に結びつくのを眺めます。',
    },
  },
];

const SCENE_INTERVAL_MS = 4200;

const HERO_INTERNAL_WIDTH = 1080;
const HERO_INTERNAL_HEIGHT = 640;
const HERO_SCALE = 1.0;
const HERO_DISPLAY_WIDTH = Math.round(HERO_INTERNAL_WIDTH * HERO_SCALE);
const HERO_DISPLAY_HEIGHT = Math.round(HERO_INTERNAL_HEIGHT * HERO_SCALE);

const HeroSection = () => {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(heroCopy, language);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const mockupWrapperRef = useRef(null);
  const [mockupScale, setMockupScale] = useState(HERO_SCALE);

  const currentScene = HERO_SCENES[activeSceneIndex];
  const currentCaption = getLocalizedCopy(currentScene.caption, language);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches || isPaused) return undefined;

    const id = window.setInterval(() => {
      setActiveSceneIndex((current) => (current + 1) % HERO_SCENES.length);
    }, SCENE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused]);

  // Responsively scale the fixed-size 1080×640 mockup to fit the wrapper width.
  useEffect(() => {
    const node = mockupWrapperRef.current;
    if (!node || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        if (w > 0) setMockupScale(Math.min(HERO_SCALE, w / HERO_INTERNAL_WIDTH));
      }
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title + Subtitle + Button — Cursor-style focused hero */}
        <div className="mb-12 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-black dark:text-white">
            {copy.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
            {copy.subtitle}
          </p>

          <a
            href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
            download
            onClick={() => {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'download', {
                  event_category: 'Direct Download',
                  event_label: 'Reso DMG from Hero',
                  value: 1,
                });
              }
            }}
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-all px-7 py-3.5"
          >
            <span>{copy.download}</span>
            <Download size={18} />
          </a>
        </div>

        {/* Scene Caption + Tabs (above the big mockup) */}
        <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between xl:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-base md:text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100">
              {currentCaption}
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 xl:justify-end">
            {HERO_SCENES.map((scene, index) => {
              const sceneLabel = getLocalizedCopy(scene.label, language);
              const isActive = index === activeSceneIndex;
              return (
                <button
                  key={scene.id}
                  type="button"
                  onClick={() => {
                    setActiveSceneIndex(index);
                    setIsPaused(true);
                  }}
                  className={`pb-1 text-sm font-medium transition-all border-b-2 ${
                    isActive
                      ? 'text-gray-900 dark:text-white border-gray-900 dark:border-white'
                      : 'text-gray-400 dark:text-gray-500 border-transparent hover:text-gray-600 dark:hover:text-gray-300'
                  }`}
                >
                  {sceneLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Big mockup canvas — full container width on desktop, gracefully shrinks on smaller screens */}
        <div
          ref={mockupWrapperRef}
          className="relative mb-16 mx-auto"
          style={{
            width: '100%',
            maxWidth: HERO_DISPLAY_WIDTH,
            aspectRatio: `${HERO_INTERNAL_WIDTH} / ${HERO_INTERNAL_HEIGHT}`,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute -inset-16 -z-10"
            style={{
              background:
                'radial-gradient(circle at 50% 40%, rgba(120, 80, 255, 0.22) 0%, rgba(120, 80, 255, 0) 65%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderRadius: 18,
            }}
          >
            <div
              style={{
                width: HERO_INTERNAL_WIDTH,
                height: HERO_INTERNAL_HEIGHT,
                transform: `scale(${mockupScale})`,
                transformOrigin: 'top left',
              }}
            >
              <Suspense
                fallback={
                  <div
                    style={{
                      width: HERO_INTERNAL_WIDTH,
                      height: HERO_INTERNAL_HEIGHT,
                      borderRadius: 16,
                      background: '#0a0a0d',
                    }}
                  />
                }
              >
                <ResoHeroMockup activeScene={currentScene.id} />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Works Seamlessly With */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">{copy.worksWith}</span>
          <div className="mt-5 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity duration-300">
            <ToolLogos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
