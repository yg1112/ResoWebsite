import React, { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';

export default function MarketplacePage() {
  const [catalog, setCatalog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/catalog.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load catalog');
        return res.json();
      })
      .then(data => {
        setCatalog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load catalog:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleInstall = (id, type) => {
    // Deep link to app
    const deepLink = `reso://install/${type}?id=${id}`;
    window.location.href = deepLink;

    // Optional: Show fallback message after delay
    setTimeout(() => {
      const appNotOpened = window.confirm(
        "Reso app didn't open? Make sure you have Reso installed. Would you like to download it?"
      );
      if (appNotOpened) {
        window.location.href = '/pricing';
      }
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading marketplace...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Reso Marketplace
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover and install powerful skills and tone presets to enhance your Reso experience
          </p>
        </div>

        {/* Skills Section */}
        {catalog?.skills && catalog.skills.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalog.skills.map(skill => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  onInstall={() => handleInstall(skill.id, 'skill')}
                />
              ))}
            </div>
          </section>
        )}

        {/* Tones Section */}
        {catalog?.tones && catalog.tones.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Tone Presets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalog.tones.map(tone => (
                <SkillCard
                  key={tone.id}
                  skill={tone}
                  onInstall={() => handleInstall(tone.id, 'tone')}
                  isTone
                />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {(!catalog?.skills || catalog.skills.length === 0) &&
         (!catalog?.tones || catalog.tones.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No items available at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
