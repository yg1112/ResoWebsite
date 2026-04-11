import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const BuildTogether = () => {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy({
    en: {
      tag: 'Changelog',
      title: 'Built in public.',
      subtitle: 'See exactly what we are shipping, why we are building it, and where Reso is heading next.',
      cards: [
        {
          title: 'Build Journey',
          body: 'Field notes on what we changed and why.',
          href: 'https://resoapp.xyz/build-journey',
          cta: 'View Updates',
        },
      ],
      browse: 'Browse all resources',
    },
    zh: {
      tag: '更新日志',
      title: '公开构建。',
      subtitle: '我们在做什么、为什么这么做、下一步走向何方——你都能看到。',
      cards: [
        {
          title: '开发历程',
          body: '关于每一次改动以及背后原因的笔记。',
          href: 'https://resoapp.xyz/build-journey',
          cta: '查看更新',
        },
      ],
      browse: '浏览全部资源',
    },
    ja: {
      tag: '更新履歴',
      title: 'パブリックに構築。',
      subtitle: '私たちが何をリリースし、なぜそれを作るのか。Reso の次なる展開もここで分かります。',
      cards: [
        {
          title: 'Build Journey',
          body: '何をどう変えたか、その理由のフィールドノート。',
          href: 'https://resoapp.xyz/build-journey',
          cta: 'アップデートを見る',
        },
      ],
      browse: 'すべてのリソースを見る',
    },
  }, language);

  return (
    <section className="py-24" id="build-together">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-4">{copy.tag}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-4">
            {copy.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
          {copy.cards.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6"
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{item.body}</p>
              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                <span>{item.cta}</span>
                <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>

        <a
          href="/build-blocks"
          className="mt-8 inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          <span>{copy.browse}</span>
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
};

export default BuildTogether;
