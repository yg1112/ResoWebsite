import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Sun, Moon } from 'lucide-react';

// X (Twitter) logo icon
const XIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark';
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

  return (
    <>
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; 2025 DZG STUDIO LLC.</span>
          <div className="flex items-center gap-6">
            <a href="/privacy.html" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Privacy</a>
            <a href="/terms.html" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Terms</a>
            <div className="w-px h-3 bg-gray-300 dark:bg-gray-700"></div>
            <a href="https://x.com/DzgStudio" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <XIcon size={14} />
            </a>
            <Link to="/contact" className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <Mail size={14} />
            </Link>
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
