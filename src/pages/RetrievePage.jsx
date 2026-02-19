import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';
import ResoIcon from '../assets/ResoIcon_512.png';

const retrieveCopy = {
  en: {
    backToHome: 'Back to Home',
    title: 'Recover Your License',
    subtitle: 'Enter the email you used during purchase to retrieve your license key.',
    emailLabel: 'Email Address',
    emailPlaceholder: 'name@example.com',
    emailError: 'Please enter a valid email.',
    findLicense: 'Find License',
    searching: 'Searching...',
    licenseFound: 'License Found',
    status: 'Status',
    copy: 'Copy',
    copied: 'Copied!',
    openApp: 'Open App to Activate',
    error: 'Error',
    needHelp: 'Need help?',
    contactSupport: 'Contact Support',
  },
  zh: {
    backToHome: '返回首页',
    title: '找回你的许可证',
    subtitle: '输入你购买时使用的邮箱来找回许可证密钥。',
    emailLabel: '邮箱地址',
    emailPlaceholder: 'name@example.com',
    emailError: '请输入有效的邮箱地址。',
    findLicense: '查找许可证',
    searching: '搜索中...',
    licenseFound: '已找到许可证',
    status: '状态',
    copy: '复制',
    copied: '已复制！',
    openApp: '打开 App 激活',
    error: '错误',
    needHelp: '需要帮助？',
    contactSupport: '联系支持',
  },
  ja: {
    backToHome: 'ホームに戻る',
    title: 'ライセンスを復元',
    subtitle: '購入時に使用したメールアドレスを入力して、ライセンスキーを取得してください。',
    emailLabel: 'メールアドレス',
    emailPlaceholder: 'name@example.com',
    emailError: '有効なメールアドレスを入力してください。',
    findLicense: 'ライセンスを検索',
    searching: '検索中...',
    licenseFound: 'ライセンスが見つかりました',
    status: 'ステータス',
    copy: 'コピー',
    copied: 'コピーしました！',
    openApp: 'アプリを開いて有効化',
    error: 'エラー',
    needHelp: 'ヘルプが必要ですか？',
    contactSupport: 'サポートに連絡',
  },
};

const WORKER_URL = 'https://reso-verify.gaoyukun1205.workers.dev';

const RetrievePage = () => {
  const { theme, setTheme, language } = useAppPreferences();
  const copy = getLocalizedCopy(retrieveCopy, language);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [copied, setCopied] = useState(false);

  const findLicense = async () => {
    const trimmedEmail = email.trim();

    setResult(null);
    setError('');
    setEmailError(false);

    if (!trimmedEmail || !trimmedEmail.includes('@')) {
      setEmailError(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'retrieve', email: trimmedEmail }),
      });

      const data = await response.json();

      if (data.success && data.license_key) {
        setResult({
          licenseKey: data.license_key,
          status: data.status || 'Active',
        });
      } else {
        throw new Error(data.error || 'No license found for this email.');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Unable to connect to server.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyCode = () => {
    if (!result?.licenseKey) return;
    navigator.clipboard.writeText(result.licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      findLicense();
    }
  };

  return (
    <div className="min-h-screen grid-paper-bg text-gray-900 dark:text-gray-100 font-sans">
      {/* Back to Home - Top Left */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all shadow-sm"
        >
          <ArrowLeft size={18} />
          <span>{copy.backToHome}</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="max-w-md w-full text-center">
          {/* App Icon */}
          <Link to="/" className="inline-flex items-center justify-center mb-8">
            <img
              src={ResoIcon}
              alt="Reso"
              className="w-28 h-28 rounded-3xl"
            />
          </Link>

          <h1 className="text-3xl font-bold mb-3 tracking-tight text-gray-900 dark:text-gray-100">
            {copy.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-base leading-relaxed">
            {copy.subtitle}
          </p>

          {/* Form Area */}
          <div className="mb-6 text-left">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 ml-1"
            >
              {copy.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              placeholder={copy.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-lg rounded-xl block p-4 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#5423e7] focus:shadow-[0_0_0_3px_rgba(84,35,231,0.1)]"
              required
            />
            {emailError && (
              <p className="mt-2 text-sm text-red-500 pl-1">{copy.emailError}</p>
            )}
          </div>

          <button
            onClick={findLicense}
            disabled={isLoading}
            className={`w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black font-semibold text-base py-4 rounded-xl transition-all shadow-lg flex items-center justify-center hover:shadow-[0_0_30px_rgba(84,35,231,0.5)] ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            <span>{isLoading ? copy.searching : copy.findLicense}</span>
            {isLoading && (
              <svg
                className="w-5 h-5 ml-2 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
          </button>

          {/* Result Area */}
          {result && (
            <div className="mt-8">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-100 dark:border-green-800 text-left">
                <p className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {copy.licenseFound}
                </p>
                <div className="bg-white dark:bg-gray-800 border border-green-100 dark:border-green-800 rounded-lg p-3 flex items-center justify-between">
                  <code className="font-mono text-sm text-gray-800 dark:text-gray-200 break-all select-all">
                    {result.licenseKey}
                  </code>
                  <button
                    onClick={copyCode}
                    className="ml-3 text-sm font-bold text-[#5423e7] hover:text-purple-600 uppercase tracking-wider"
                  >
                    {copied ? copy.copied : copy.copy}
                  </button>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                  {copy.status}: <span className="font-medium">{result.status}</span>
                </p>
              </div>

              <a
                href={`reso://activate?key=${encodeURIComponent(result.licenseKey)}`}
                className="block mt-6 font-medium hover:underline text-[#5423e7]"
              >
                {copy.openApp} &rarr;
              </a>
            </div>
          )}

          {/* Error Area */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-xl text-sm text-left">
              <span className="font-bold">{copy.error}:</span> <span>{error}</span>
            </div>
          )}

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {copy.needHelp}{' '}
              <Link
                to="/contact"
                className="underline hover:opacity-70 transition-opacity text-[#5423e7]"
              >
                {copy.contactSupport}
              </Link>
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => setTheme('light')}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Switch to light mode"
              >
                <Sun size={14} className={theme === 'light' ? 'text-amber-500' : ''} />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Switch to dark mode"
              >
                <Moon size={14} className={theme === 'dark' ? 'text-blue-400' : ''} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetrievePage;
