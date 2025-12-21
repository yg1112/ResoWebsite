import React from 'react';
import { ArrowRight } from 'lucide-react';

const DownloadButton = ({ variant = 'primary', size = 'lg', className = '', children, ...props }) => {
  const downloadUrl = "https://github.com/yg1112/reso/releases/latest/download/Reso.dmg";

  const variantStyles = {
    primary: 'px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5',
    secondary: 'px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors',
    nav: 'px-4 py-2 rounded-full bg-transparent text-gray-600 hover:text-gray-900 transition-colors cursor-pointer'
  };

  const handleClick = () => {
    if (typeof window.gtag === 'function') {
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
      className={`inline-flex items-center gap-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children || (
        <>
          Start Free Trial
          <ArrowRight size={18} />
        </>
      )}
    </a>
  );
};

export default DownloadButton;
