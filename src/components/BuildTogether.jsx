import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const BuildTogether = () => {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy({
    en: {
      tag: 'Build Together',
      title: 'Transparent progress, shipped in public.',
      subtitle: 'Follow what changed, why we changed it, and what is next.',
      cards: [
        {
          title: 'Docs',
          body: 'Product architecture and workflow guides.',
          href: '/docs',
          cta: 'Open Docs',
        },
        {
          title: 'Build Journey',
          body: 'Development updates and product evolution.',
          href: '/changelog',
          cta: 'View Updates',
        },
      ],
      browse: 'Browse all resources',
    },
    zh: {
      tag: '共建中',
      title: '公开迭代，透明推进。',
      subtitle: '你可以看到我们改了什么、为什么改、下一步做什么。',
      cards: [
        {
          title: '文档',
          body: '产品架构与 workflow 指南。',
          href: '/docs',
          cta: '查看文档',
        },
        {
          title: '开发历程',
          body: '开发更新与产品演进记录。',
          href: '/changelog',
          cta: '查看更新',
        },
      ],
      browse: '浏览全部资源',
    },
    ja: {
      tag: 'Build Together',
      title: '進捗を公開しながら継続的に出荷。',
      subtitle: '何を変えたか、なぜ変えたか、次に何をするかを追えます。',
      cards: [
        {
          title: 'Docs',
          body: 'プロダクト設計と workflow ガイド。',
          href: '/docs',
          cta: 'Docs を開く',
        },
        {
          title: 'Build Journey',
          body: '開発アップデートと製品の進化。',
          href: '/changelog',
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
