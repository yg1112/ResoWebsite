import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import ResoIcon from '../assets/ResoIcon_512.png';

const WORKER_URL = 'https://reso-verify.gaoyukun1205.workers.dev';

const RetrievePage = () => {
  const { theme, setTheme } = useAppPreferences();
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
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="max-w-md w-full text-center">
          {/* App Icon - clean style like Navbar */}
          <Link to="/" className="inline-flex items-center justify-center gap-2.5 mb-8">
            <img
              src={ResoIcon}
              alt="Reso"
              className="w-10 h-10 rounded-xl"
            />
            <span className="text-gray-900 dark:text-gray-100 font-medium text-2xl tracking-tight">Reso</span>
          </Link>

          <h1 className="text-3xl font-bold mb-3 tracking-tight text-gray-900 dark:text-gray-100">
            Recover Your License
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-base leading-relaxed">
            Enter the email you used during purchase to retrieve your license key.
          </p>

          {/* Form Area */}
          <div className="mb-6 text-left">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 ml-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-lg rounded-xl block p-4 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#5423e7] focus:shadow-[0_0_0_3px_rgba(84,35,231,0.1)]"
              required
            />
            {emailError && (
              <p className="mt-2 text-sm text-red-500 pl-1">Please enter a valid email.</p>
            )}
          </div>

          <button
            onClick={findLicense}
            disabled={isLoading}
            className={`w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black font-semibold text-base py-4 rounded-xl transition-all shadow-lg flex items-center justify-center hover:shadow-[0_0_30px_rgba(84,35,231,0.5)] ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            <span>{isLoading ? 'Searching...' : 'Find License'}</span>
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
                  License Found
                </p>
                <div className="bg-white dark:bg-gray-800 border border-green-100 dark:border-green-800 rounded-lg p-3 flex items-center justify-between">
                  <code className="font-mono text-sm text-gray-800 dark:text-gray-200 break-all select-all">
                    {result.licenseKey}
                  </code>
                  <button
                    onClick={copyCode}
                    className="ml-3 text-sm font-bold text-[#5423e7] hover:text-purple-600 uppercase tracking-wider"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                  Status: <span className="font-medium">{result.status}</span>
                </p>
              </div>

              <a
                href={`reso://activate?key=${encodeURIComponent(result.licenseKey)}`}
                className="block mt-6 font-medium hover:underline text-[#5423e7]"
              >
                Open App to Activate &rarr;
              </a>
            </div>
          )}

          {/* Error Area */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-xl text-sm text-left">
              <span className="font-bold">Error:</span> <span>{error}</span>
            </div>
          )}

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Need help?{' '}
              <a
                href="https://tally.so/r/obDo51"
                target="_blank"
                rel="noreferrer"
                className="underline hover:opacity-70 transition-opacity text-[#5423e7]"
              >
                Contact Support
              </a>
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
