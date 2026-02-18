import React, { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const marketplaceCopy = {
  en: {
    failedCatalog: 'Failed to load catalog',
    appNotOpened: "Reso app didn't open? Make sure you have Reso installed. Would you like to download it?",
    loading: 'Loading marketplace...',
    errorPrefix: 'Error:',
    title: 'Reso Marketplace',
    subtitle:
      'Discover and install powerful skills and tone presets to enhance your Reso experience',
    skills: 'Skills',
    tones: 'Tone Presets',
    empty: 'No items available at the moment. Check back soon!',
  },
  zh: {
    failedCatalog: '加载 catalog 失败',
    appNotOpened: 'Reso 没有打开？请先确认是否已安装 Reso。现在前往下载吗？',
    loading: '正在加载 Marketplace...',
    errorPrefix: '错误：',
    title: 'Reso Marketplace',
    subtitle: '发现并安装实用 Skills 与 Tone 预设，扩展你的 Reso 体验。',
    skills: 'Skills',
    tones: 'Tone Presets',
    empty: '当前暂无可用项目，请稍后再来查看。',
  },
  ja: {
    failedCatalog: 'catalog の読み込みに失敗しました',
    appNotOpened: 'Reso アプリが開きませんでしたか？インストール済みか確認し、ダウンロードしますか？',
    loading: 'Marketplace を読み込み中...',
    errorPrefix: 'エラー:',
    title: 'Reso Marketplace',
    subtitle: '便利な Skills と Tone Presets を見つけてインストールし、Reso を拡張しましょう。',
    skills: 'Skills',
    tones: 'Tone Presets',
    empty: '現在利用できる項目はありません。しばらくしてから再度ご確認ください。',
  },
};

export default function MarketplacePage() {
  const [catalog, setCatalog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(marketplaceCopy, language);

  useEffect(() => {
    fetch('/api/catalog.json')
      .then((res) => {
        if (!res.ok) throw new Error(copy.failedCatalog);
        return res.json();
      })
      .then((data) => {
        setCatalog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load catalog:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [copy.failedCatalog]);

  const handleInstall = (id, type) => {
    const deepLink = `reso://install/${type}?id=${id}`;
    window.location.href = deepLink;

    setTimeout(() => {
      const appNotOpened = window.confirm(copy.appNotOpened);
      if (appNotOpened) {
        window.location.href = '/pricing';
      }
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">{copy.loading}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">{copy.errorPrefix} {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {copy.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {copy.subtitle}
          </p>
        </div>

        {catalog?.skills && catalog.skills.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {copy.skills}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalog.skills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  onInstall={() => handleInstall(skill.id, 'skill')}
                />
              ))}
            </div>
          </section>
        )}

        {catalog?.tones && catalog.tones.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {copy.tones}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalog.tones.map((tone) => (
                <SkillCard
                  key={tone.id}
                  skill={tone}
                  onInstall={() => handleInstall(tone.id, 'tone')}
                  isTone
                />
              ))}
            </div>
          </section>
        )}

        {(!catalog?.skills || catalog.skills.length === 0) &&
          (!catalog?.tones || catalog.tones.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              {copy.empty}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
