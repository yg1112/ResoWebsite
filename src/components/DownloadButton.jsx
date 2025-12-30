import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const DownloadButton = ({ variant = 'primary', size = 'lg', className = '', children, ...props }) => {
  // TODO: Replace with actual App Store URL when available
  const appStoreUrl = "https://apps.apple.com/app/reso/idXXXXXXXXX"; // Placeholder URL
  
  // For development/testing, fall back to DMG download
  const downloadUrl = appStoreUrl.includes('idXXXXXXXXX') 
    ? "https://github.com/yg1112/reso-releases/releases/latest/download/Reso_1.0.2.dmg"
    : appStoreUrl;

  const variantStyles = {
    primary: 'px-8 py-4 bg-black text-white rounded-2xl font-semibold text-base hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5',
    secondary: 'px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors',
    nav: 'px-4 py-2 rounded-full bg-transparent text-gray-600 hover:text-gray-900 transition-colors cursor-pointer'
  };

  const handleClick = (e) => {
    // Only track if going to real App Store
    if (!downloadUrl.includes('github.com') && typeof window.gtag === 'function') {
      window.gtag('event', 'app_store_click', {
        'event_category': 'App Store',
        'event_label': 'Mac App Store Link',
        'value': 1
      });
    } else if (typeof window.gtag === 'function') {
      window.gtag('event', 'download', {
        'event_category': 'App',
        'event_label': 'Reso 1.0 DMG',
        'value': 1
      });
    }
  };

  return (
    <a
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center gap-3 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children || (
        <>
          <Download size={20} />
          <span>Download on the Mac App Store</span>
        </>
      )}
    </a>
  );
};

export default DownloadButton;
