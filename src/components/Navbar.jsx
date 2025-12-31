import React, { useState } from 'react';
import { Menu, X as XIcon } from 'lucide-react';
import DownloadButton from './DownloadButton';

// App Icon
const AppIcon = ({ className }) => (
  <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="icon_grad_nav" x1="256" y1="0" x2="256" y2="512" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FB923C"/>
        <stop offset="1" stopColor="#EA580C"/>
      </linearGradient>
      <filter id="icon_shadow_nav" x="-20%" y="-20%" width="140%" height="140%">
         <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.15"/>
      </filter>
    </defs>
    <rect x="0" y="0" width="512" height="512" rx="110" fill="url(#icon_grad_nav)"/>
    <rect x="8" y="8" width="496" height="496" rx="108" stroke="white" strokeOpacity="0.1" strokeWidth="8"/>
    <g stroke="white" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" filter="url(#icon_shadow_nav)">
      <path d="M352 190H160"/>
      <path d="M210 130L150 190L210 250"/>
      <path d="M160 322H352"/>
      <path d="M302 262L362 322L302 382"/>
    </g>
  </svg>
);

const Navbar = ({ isScrolled = false, onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-[79rem] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
          <div className="w-9 h-9">
            <AppIcon className="w-full h-full rounded-[10px] shadow-sm" />
          </div>
          <span className="text-gray-900">Reso</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="https://reso.dzgapp.com/retrieve.html" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">License Manager</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <button
            id="navPrimaryCta"
            className="px-8 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg cursor-pointer"
            onClick={onNavClick}
          >
            Buy Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-4">
          <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
          <a href="https://reso.dzgapp.com/retrieve.html" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-900">License Manager</a>
          <a href="#faq" className="block text-gray-600 hover:text-gray-900">FAQ</a>
          <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
          <DownloadButton variant="primary" size="md" className="w-full justify-center" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
