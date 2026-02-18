import React from 'react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

export default function SkillCard({ skill, onInstall, isTone = false }) {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy({
    en: {
      pro: 'Pro',
      more: 'more',
      install: 'Install',
      tone: 'Tone',
      skill: 'Skill',
    },
    zh: {
      pro: 'Pro',
      more: '更多',
      install: '安装',
      tone: 'Tone',
      skill: 'Skill',
    },
    ja: {
      pro: 'Pro',
      more: '件',
      install: 'インストール',
      tone: 'Tone',
      skill: 'Skill',
    },
  }, language);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
      {/* Icon & Title */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* Icon placeholder - SF Symbols don't render in web, use emoji/icon library instead */}
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
            {getIconEmoji(skill.icon)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {skill.name}
            </h3>
            {skill.category && (
              <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                {skill.category}
              </span>
            )}
          </div>
        </div>
        {skill.requiresPro && (
          <span className="px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
            {copy.pro}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {skill.description}
      </p>

      {/* Keywords */}
      {skill.keywords && skill.keywords.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {skill.keywords.slice(0, 3).map((keyword, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {keyword}
            </span>
          ))}
          {skill.keywords.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
              +{skill.keywords.length - 3} {copy.more}
            </span>
          )}
        </div>
      )}

      {/* Install Button */}
      <button
        onClick={onInstall}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>{copy.install} {isTone ? copy.tone : copy.skill}</span>
      </button>
    </div>
  );
}

// Helper function to map SF Symbol names to emoji
function getIconEmoji(sfSymbol) {
  const iconMap = {
    'calendar.badge.plus': '📅',
    'magnifyingglass': '🔍',
    'envelope.fill': '✉️',
    'star.fill': '⭐',
    'wand.and.stars': '✨',
    'paintbrush.fill': '🎨',
    'doc.text.fill': '📄',
    'speaker.wave.3.fill': '🔊',
  };

  return iconMap[sfSymbol] || '✨';
}
