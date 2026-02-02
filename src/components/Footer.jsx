import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Twitter, Mail, CheckCircle2, Sun, Moon } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isPricingPage = location.pathname === '/pricing';
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 从 localStorage 读取主题偏好
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' ||
                       (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    const formBody = `email=${encodeURIComponent(email)}&userGroup=Newsletter`;
    try {
      const response = await fetch("https://app.loops.so/api/newsletter-form/cmjdjf36l00dd0izhwc34oz2l", {
        method: "POST",
        body: formBody,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      if (response.ok) {
        setSubscribed(true);
        setEmail('');
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* NEWSLETTER SECTION - Hidden on Pricing page */}
      {!isPricingPage && (
        <section className="py-16 px-6">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Stay updated</h2>
            <p className="text-sm text-gray-500 mb-6">
              Get notified about new features and updates.
            </p>

            {subscribed ? (
              <div className="flex flex-col items-center justify-center p-5 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">You're on the list!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-gray-300 dark:focus:border-gray-600 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm text-gray-900 dark:text-gray-100"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; 2025 DZG STUDIO LLC.</span>
          <div className="flex items-center gap-6">
            <a href="/privacy.html" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Privacy</a>
            <a href="/terms.html" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Terms</a>
            <div className="w-px h-3 bg-gray-300 dark:bg-gray-700"></div>
            <a href="https://x.com/DzgStudio" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <Twitter size={14} />
            </a>
            <a href="https://tally.so/r/obDo51" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <Mail size={14} />
            </a>
            <div className="w-px h-3 bg-gray-300 dark:bg-gray-700"></div>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Toggle light mode"
            >
              <Sun size={14} />
            </button>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              <Moon size={14} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
