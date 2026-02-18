import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

// X (Twitter) logo icon
const XIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const { language, setLanguage, setTheme, theme } = useAppPreferences();
  const copy = getLocalizedCopy({
    en: {
      privacy: 'Privacy',
      terms: 'Terms',
      light: 'Switch to light mode',
      dark: 'Switch to dark mode',
      languagePicker: 'Language',
    },
    zh: {
      privacy: '隐私',
      terms: '条款',
      light: '切换到浅色模式',
      dark: '切换到深色模式',
      languagePicker: '语言',
    },
    ja: {
      privacy: 'プライバシー',
      terms: '利用規約',
      light: 'ライトモードに切り替え',
      dark: 'ダークモードに切り替え',
      languagePicker: '言語',
    },
  }, language);

  const languageOptions = [
    { value: 'zh', label: '简体中文' },
    { value: 'zh-TW', label: '繁體中文' },
    { value: 'en', label: 'English' },
    { value: 'ja', label: '日本語' },
  ];

  return (
    <>
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; 2025 DZG STUDIO LLC.</span>
          <div className="flex items-center gap-6">
            <a href="/privacy.html" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">{copy.privacy}</a>
            <a href="/terms.html" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">{copy.terms}</a>
            <div className="w-px h-3 bg-gray-300 dark:bg-gray-700"></div>
            <a href="https://x.com/DzgStudio" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <XIcon size={14} />
            </a>
            <Link to="/contact" className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <Mail size={14} />
            </Link>
            <div className="w-px h-3 bg-gray-300 dark:bg-gray-700"></div>
            <button
              onClick={() => setTheme('light')}
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label={copy.light}
            >
              <Sun size={14} className={theme === 'light' ? 'text-amber-500' : ''} />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label={copy.dark}
            >
              <Moon size={14} className={theme === 'dark' ? 'text-blue-400' : ''} />
            </button>
            <div className="relative">
              <Globe size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                aria-label={copy.languagePicker}
                className="appearance-none bg-black/[0.04] dark:bg-white/[0.08] text-gray-700 dark:text-gray-200 text-xs rounded-full pl-8 pr-7 py-1.5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
