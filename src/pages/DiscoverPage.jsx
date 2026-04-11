import React, { useState, useEffect } from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const discoverCopy = {
  en: {
    categories: [
      { id: 'all', label: 'All Skills' },
      { id: 'productivity', label: 'Productivity' },
      { id: 'writing', label: 'Writing' },
      { id: 'code', label: 'Code' },
      { id: 'communication', label: 'Communication' },
    ],
    appNotOpened: "Reso didn't open? Make sure you have Reso installed.",
    loading: 'Loading skills...',
    title: 'Extend Reso with skills.',
    subtitle: 'Powerful skills crafted by our community to enhance your voice workflows.',
    featured: 'Featured',
    installSkill: 'Install Skill',
    install: 'Install',
    shareTitle: 'Share Your Expertise',
    shareBody: 'Built something useful? Submit your skill and help the Reso community grow.',
    submitSkill: 'Submit Your Skill',
    modalTitle: 'Submit Your Skill',
    skillName: 'Skill Name',
    skillNamePlaceholder: 'My Awesome Skill',
    description: 'Description',
    descriptionPlaceholder: 'What does your skill do?',
    email: 'Your Email',
    cancel: 'Cancel',
    submit: 'Submit',
    modalClose: 'Close',
  },
  zh: {
    categories: [
      { id: 'all', label: '全部 Skills' },
      { id: 'productivity', label: '效率' },
      { id: 'writing', label: '写作' },
      { id: 'code', label: '编程' },
      { id: 'communication', label: '沟通' },
    ],
    appNotOpened: 'Reso 没有打开？请先确认你已安装 Reso。',
    loading: '正在加载 Skills...',
    title: '用 Skills 扩展 Reso。',
    subtitle: '社区贡献的实用能力,给你的语音 workflow 加件趁手的工具。',
    featured: '精选',
    installSkill: '安装 Skill',
    install: '安装',
    shareTitle: '分享你的专长',
    shareBody: '做了一个好用的 Skill？提交给我们，让更多 Reso 用户受益。',
    submitSkill: '提交 Skill',
    modalTitle: '提交你的 Skill',
    skillName: 'Skill 名称',
    skillNamePlaceholder: 'My Awesome Skill',
    description: '描述',
    descriptionPlaceholder: '你的 Skill 能做什么？',
    email: '你的邮箱',
    cancel: '取消',
    submit: '提交',
    modalClose: '关闭',
  },
  ja: {
    categories: [
      { id: 'all', label: 'すべての Skills' },
      { id: 'productivity', label: '生産性' },
      { id: 'writing', label: 'ライティング' },
      { id: 'code', label: 'コード' },
      { id: 'communication', label: 'コミュニケーション' },
    ],
    appNotOpened: 'Reso が開きませんでしたか？Reso がインストールされているか確認してください。',
    loading: 'Skills を読み込み中...',
    title: 'Skills で Reso を拡張。',
    subtitle: 'コミュニティが作成したスキルで、音声 workflow を強化できます。',
    featured: '注目',
    installSkill: 'Skill をインストール',
    install: 'インストール',
    shareTitle: 'あなたの知見を共有',
    shareBody: '便利な Skill を作ったら、投稿して Reso コミュニティを一緒に育てましょう。',
    submitSkill: 'Skill を投稿',
    modalTitle: 'Skill を投稿',
    skillName: 'Skill 名',
    skillNamePlaceholder: 'My Awesome Skill',
    description: '説明',
    descriptionPlaceholder: 'この Skill は何をしますか？',
    email: 'メールアドレス',
    cancel: 'キャンセル',
    submit: '送信',
    modalClose: '閉じる',
  },
};

export default function DiscoverPage() {
  const [catalog, setCatalog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(discoverCopy, language);

  useEffect(() => {
    fetch('/api/catalog.json')
      .then((res) => res.json())
      .then((data) => {
        setCatalog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load catalog:', err);
        setLoading(false);
      });
  }, []);

  const handleInstall = (id, type = 'skill') => {
    const deepLink = `reso://install/${type}?id=${id}`;
    window.location.href = deepLink;

    setTimeout(() => {
      const appNotOpened = window.confirm(copy.appNotOpened);
      if (appNotOpened) {
        window.location.href = '/pricing';
      }
    }, 2000);
  };

  const filteredSkills =
    catalog?.skills?.filter(
      (skill) => selectedCategory === 'all' || skill.category === selectedCategory
    ) || [];

  const featuredSkill = catalog?.skills?.[0];

  if (loading) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-gray-300 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-gray-600 dark:text-gray-400">{copy.loading}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            {copy.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {copy.subtitle}
          </p>
        </section>

        {featuredSkill && (
          <FeaturedSkillCard
            skill={featuredSkill}
            onInstall={() => handleInstall(featuredSkill.id)}
            copy={copy}
          />
        )}

        <section className="mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {copy.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-black/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.slice(1).map((skill) => (
              <SkillGridCard
                key={skill.id}
                skill={skill}
                onInstall={() => handleInstall(skill.id)}
                copy={copy}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4">
              {copy.shareTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              {copy.shareBody}
            </p>
            <button
              onClick={() => setShowSubmitForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <span>{copy.submitSkill}</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </section>
      </div>

      {showSubmitForm && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowSubmitForm(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-black/10 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                {copy.modalTitle}
              </h2>
              <button
                onClick={() => setShowSubmitForm(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl"
                aria-label={copy.modalClose}
              >
                ×
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open('https://tally.so/r/obDo51', '_blank');
                setShowSubmitForm(false);
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {copy.skillName}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                  placeholder={copy.skillNamePlaceholder}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {copy.description}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all resize-none"
                  placeholder={copy.descriptionPlaceholder}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {copy.email}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitForm(false)}
                  className="flex-1 px-6 py-2.5 rounded-xl border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  {copy.cancel}
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  {copy.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function FeaturedSkillCard({ skill, onInstall, copy }) {
  return (
    <div className="mb-12 rounded-3xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-8 md:p-10">
      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10">
        <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
        <span className="text-xs uppercase tracking-[0.16em] text-gray-700 dark:text-gray-300 font-medium">
          {copy.featured}
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
        {skill.name}
      </h2>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl">
        {skill.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {skill.keywords.slice(0, 4).map((keyword, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 text-xs text-gray-700 dark:text-gray-300 font-medium"
          >
            {keyword}
          </span>
        ))}
      </div>

      <button
        onClick={onInstall}
        className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
      >
        <Download size={16} />
        <span>{copy.installSkill}</span>
      </button>
    </div>
  );
}

function SkillGridCard({ skill, onInstall, copy }) {
  return (
    <article className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 hover:border-black/20 dark:hover:border-white/20 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-2xl">
          {getIconEmoji(skill.icon)}
        </div>
        {skill.requiresPro && (
          <span className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-medium text-gray-700 dark:text-gray-300">
            PRO
          </span>
        )}
      </div>

      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
        {skill.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
        {skill.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {skill.keywords.slice(0, 3).map((keyword, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs text-gray-600 dark:text-gray-400"
          >
            {keyword}
          </span>
        ))}
      </div>

      <button
        onClick={onInstall}
        className="w-full py-2.5 rounded-lg bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white text-sm font-medium hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
      >
        {copy.install}
      </button>
    </article>
  );
}

function getIconEmoji(sfSymbol) {
  const iconMap = {
    'calendar.badge.plus': '📅',
    magnifyingglass: '🔍',
    'envelope.fill': '✉️',
    'star.fill': '⭐',
    'wand.and.stars': '✨',
    'paintbrush.fill': '🎨',
    'doc.text.fill': '📄',
    'speaker.wave.3.fill': '🔊',
  };
  return iconMap[sfSymbol] || '✨';
}
