import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X as XIcon } from 'lucide-react';
import ResoIcon from '../assets/ResoIcon_512.png';

const Navbar = ({ isScrolled = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8">
            <img src={ResoIcon} alt="Reso" className="w-full h-full rounded-lg" />
          </div>
          <span className="text-gray-900 dark:text-gray-100 font-medium text-base">Reso</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 dark:text-gray-200">
          <a href="/#features" className="hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
          <Link to="/pricing" className="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</Link>
          <a href="https://reso.dzgapp.com/retrieve.html" className="hover:text-gray-900 dark:hover:text-white transition-colors">License Manager</a>
          <a
            href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
            download
            className="px-5 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-900 dark:text-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 space-y-3">
          <a href="/#features" className="block text-sm text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Features</a>
          <Link to="/pricing" className="block text-sm text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <a href="https://reso.dzgapp.com/retrieve.html" className="block text-sm text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">License Manager</a>
          <a
            href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
            download
            className="block w-full text-center px-5 py-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-medium"
          >
            Download
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
