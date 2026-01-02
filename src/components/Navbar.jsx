import React, { useState } from 'react';
import { Menu, X as XIcon } from 'lucide-react';
import DownloadButton from './DownloadButton';
import ResoIcon from '../assets/ResoIcon_512.png';

const Navbar = ({ isScrolled = false, onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-[79rem] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
          <div className="w-9 h-9">
            <img src={ResoIcon} alt="Reso" className="w-full h-full rounded-[10px] shadow-sm" />
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
