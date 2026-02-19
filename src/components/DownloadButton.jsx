import React from 'react';
import { Download } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const DownloadButton = ({ variant = 'primary', size = 'lg', className = '', children, ...props }) => {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy({
    en: 'Download for macOS',
    zh: '下载 macOS 版本',
    ja: 'macOS 版をダウンロード',
  }, language);

  const downloadUrl = "https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg";

  const variantStyles = {
    primary: 'px-8 py-4 bg-black text-white rounded-2xl font-semibold text-base hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5',
    secondary: 'px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors',
    nav: 'px-4 py-2 rounded-full bg-transparent text-gray-600 hover:text-gray-900 transition-colors cursor-pointer'
  };

  const handleClick = (e) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'download', {
        'event_category': 'Direct Download',
        'event_label': 'Reso DMG from Website',
        'value': 1
      });
    }
  };

  return (
    <a
      href={downloadUrl}
      download
      onClick={handleClick}
      className={`inline-flex items-center gap-3 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children || (
        <>
          <Download size={20} />
          <span>{copy}</span>
        </>
      )}
    </a>
  );
};

export default DownloadButton;
