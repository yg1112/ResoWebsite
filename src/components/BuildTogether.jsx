import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';
import { getJourneyPosts } from '../data/journeyPosts';

const sectionCopy = {
  en: {
    tag: 'Changelog',
    title: 'Built in public.',
    subtitle: 'See exactly what we are shipping, why we are building it, and where Reso is heading next.',
    browse: 'See all updates',
    readMore: 'Read',
  },
  zh: {
    tag: '更新日志',
    title: '公开构建。',
    subtitle: '我们在做什么、为什么这么做、下一步走向何方——你都能看到。',
    browse: '查看全部更新',
    readMore: '阅读',
  },
  ja: {
    tag: '更新履歴',
    title: 'パブリックに構築。',
    subtitle: '私たちが何をリリースし、なぜそれを作るのか。Reso の次なる展開もここで分かります。',
    browse: 'すべての更新を見る',
    readMore: '読む',
  },
};

const BuildTogether = () => {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(sectionCopy, language);
  const posts = getJourneyPosts(language).slice(0, 3);

  return (
    <section className="py-24" id="build-together">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-4">{copy.tag}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-4">
            {copy.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              to="/build-journey"
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 flex flex-col hover:border-black/20 dark:hover:border-white/20 transition-colors"
            >
              <span className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                {post.category}
              </span>
              <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {post.summary}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                <span>{copy.readMore}</span>
                <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/build-journey"
          className="mt-8 inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          <span>{copy.browse}</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
};

export default BuildTogether;
