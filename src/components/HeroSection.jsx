import React, { useState, useEffect, lazy, Suspense } from 'react';
import ToolLogos from './ToolLogos';
import { Download } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const ResoHeroMockup = lazy(() => import('./mockups/ResoHeroMockup'));

const heroCopy = {
  en: {
    titleA: 'Capture thoughts.',
    titleB: 'Anywhere.',
    titleC: 'Thoughtfully.',
    download: 'Download for macOS',
    worksWith: 'Works seamlessly with',
  },
  zh: {
    titleA: '捕捉想法。',
    titleB: '随时随地。',
    titleC: '用心地。',
    download: '下载 macOS 版本',
    worksWith: '无缝兼容',
  },
  ja: {
    titleA: '思考をキャプチャ。',
    titleB: 'どこでも。',
    titleC: '思慮深く。',
    download: 'macOS 版をダウンロード',
    worksWith: 'シームレスに連携',
  },
};

const HERO_SCENES = [
  {
    id: 'capture',
    label: { en: 'Capture', zh: '捕捉', ja: 'キャプチャ' },
    caption: {
      en: 'Hold Option. The capsule listens, refines, and lands the action.',
      zh: '按住 Option，胶囊开始听、提炼、然后落地动作。',
      ja: 'Option を押すだけ。カプセルが聞き取り、磨き上げて、行動に落とします。',
    },
  },
  {
    id: 'workflow',
    label: { en: 'Orchestrate', zh: '编排', ja: 'オーケストレート' },
    caption: {
      en: 'Don\'t just dictate. Orchestrate every voice through rules you control.',
      zh: '别只是听写——把每一段语音编排进你定义的规则链。',
      ja: 'ただの口述ではなく、あなたのルールで声をオーケストレーションする。',
    },
  },
  {
    id: 'indexing',
    label: { en: 'Memory', zh: '记忆库', ja: 'メモリ' },
    caption: {
      en: 'Embed files for context. All files stay on your Mac.',
      zh: '把文件嵌入做上下文理解，所有文件都留在你的 Mac 上。',
      ja: 'ファイルを文脈理解のために embedding。ファイルは Mac に残る。',
    },
  },
  {
    id: 'discover',
    label: { en: 'Discover', zh: '星云', ja: 'ディスカバリー' },
    caption: {
      en: 'Drift through your private Nebula — see how your thoughts cluster on their own.',
      zh: '在你私人的星云里漂流——看你的想法如何自己聚成片。',
      ja: 'あなただけの Nebula を漂い、思考がどう自然に繋がるかを眺める。',
    },
  },
];

const SCENE_INTERVAL_MS = 4200;

const HERO_INTERNAL_WIDTH = 1080;
const HERO_INTERNAL_HEIGHT = 640;
const HERO_SCALE = 0.65;
const HERO_DISPLAY_WIDTH = Math.round(HERO_INTERNAL_WIDTH * HERO_SCALE);
const HERO_DISPLAY_HEIGHT = Math.round(HERO_INTERNAL_HEIGHT * HERO_SCALE);

const HeroSection = () => {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(heroCopy, language);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  return (
    <section className="relative z-10 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title + Button */}
        <div className="mb-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-5 text-black dark:text-white">
            {copy.titleA}{' '}
            {copy.titleB}{' '}
            <span className="text-gray-500 dark:text-gray-400">{copy.titleC}</span>
          </h1>

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
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all px-6 py-3"
          >
            <span>{copy.download}</span>
            <Download size={16} />
          </a>
        </div>

        {/* Caption + Scene Tabs */}
        <div className="mb-3 flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between xl:gap-8">
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

        {/* Mockup canvas — sized exactly to scaled content so there is no blank gutter */}
        <div
          className="relative mb-12 mx-auto"
          style={{
            width: '100%',
            maxWidth: HERO_DISPLAY_WIDTH,
            height: HERO_DISPLAY_HEIGHT,
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
                transform: `scale(${HERO_SCALE})`,
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
