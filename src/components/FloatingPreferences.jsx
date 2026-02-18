import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { languageLabels, useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const controlCopy = {
  en: {
    appearance: 'Appearance',
    language: 'Language',
    light: 'Light mode',
    dark: 'Dark mode',
  },
  zh: {
    appearance: '显示模式',
    language: '语言',
    light: '浅色模式',
    dark: '深色模式',
  },
  ja: {
    appearance: '表示モード',
    language: '言語',
    light: 'ライトモード',
    dark: 'ダークモード',
  },
  'zh-TW': {
    appearance: '顯示模式',
    language: '語言',
    light: '淺色模式',
    dark: '深色模式',
  },
};

const FloatingPreferences = () => {
  const { language, setLanguage, theme, setTheme } = useAppPreferences();
  const copy = getLocalizedCopy(controlCopy, language);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/88 dark:bg-black/78 backdrop-blur-xl shadow-lg p-3 w-[210px]">
        <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          {copy.appearance}
        </p>
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          <button
            onClick={() => setTheme('light')}
            aria-label={copy.light}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs transition-colors ${
              theme === 'light'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-black/[0.04] dark:bg-white/[0.08] text-gray-700 dark:text-gray-300'
            }`}
          >
            <Sun size={13} />
          </button>
          <button
            onClick={() => setTheme('dark')}
            aria-label={copy.dark}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs transition-colors ${
              theme === 'dark'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-black/[0.04] dark:bg-white/[0.08] text-gray-700 dark:text-gray-300'
            }`}
          >
            <Moon size={13} />
          </button>
        </div>

        <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          {copy.language}
        </p>
        <div className="grid grid-cols-4 gap-1.5">
          {Object.keys(languageLabels).map((option) => (
            <button
              key={option}
              onClick={() => setLanguage(option)}
              className={`rounded-lg py-1.5 text-xs font-medium transition-colors ${
                language === option
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-black/[0.04] dark:bg-white/[0.08] text-gray-700 dark:text-gray-300'
              }`}
              aria-label={option}
            >
              {languageLabels[option]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingPreferences;
