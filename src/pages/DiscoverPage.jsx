import React, { useState, useEffect } from 'react';
import { Download, ArrowUpRight } from 'lucide-react';

export default function DiscoverPage() {
  const [catalog, setCatalog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'writing', label: 'Writing' },
    { id: 'code', label: 'Code' },
    { id: 'communication', label: 'Communication' },
  ];

  useEffect(() => {
    fetch('/api/catalog.json')
      .then(res => res.json())
      .then(data => {
        setCatalog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load catalog:', err);
        setLoading(false);
      });
  }, []);

  const handleInstall = (id, type = 'skill') => {
    const deepLink = `reso://install/${type}?id=${id}`;
    window.location.href = deepLink;

    setTimeout(() => {
      const appNotOpened = window.confirm(
        "Reso didn't open? Make sure you have Reso installed."
      );
      if (appNotOpened) {
        window.location.href = '/pricing';
      }
    }, 2000);
  };

  const filteredSkills = catalog?.skills?.filter(
    skill => selectedCategory === 'all' || skill.category === selectedCategory
  ) || [];

  const featuredSkill = catalog?.skills?.[0];

  if (loading) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-gray-300 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Loading skills...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <section className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-5">Discover</p>
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            Extend Reso with skills.
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Powerful skills crafted by our community to enhance your voice workflows.
          </p>
        </section>

        {/* Featured Skill */}
        {featuredSkill && (
          <FeaturedSkillCard
            skill={featuredSkill}
            onInstall={() => handleInstall(featuredSkill.id)}
          />
        )}

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-black/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.slice(1).map((skill) => (
              <SkillGridCard
                key={skill.id}
                skill={skill}
                onInstall={() => handleInstall(skill.id)}
              />
            ))}
          </div>
        </section>

        {/* Submit Your Skill CTA */}
        <section>
          <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4">
              Share Your Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              Built something useful? Submit your skill and help the Reso community grow.
            </p>
            <button
              onClick={() => setShowSubmitForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <span>Submit Your Skill</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </section>
      </div>

      {/* Submit Form Modal */}
      {showSubmitForm && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowSubmitForm(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-black/10 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                Submit Your Skill
              </h2>
              <button
                onClick={() => setShowSubmitForm(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              window.open('https://tally.so/r/obDo51', '_blank');
              setShowSubmitForm(false);
            }} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skill Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                  placeholder="My Awesome Skill"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all resize-none"
                  placeholder="What does your skill do?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitForm(false)}
                  className="flex-1 px-6 py-2.5 rounded-xl border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

// Featured Skill Hero Card
function FeaturedSkillCard({ skill, onInstall }) {
  return (
    <div className="mb-12 rounded-3xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-8 md:p-10">
      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10">
        <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
        <span className="text-xs uppercase tracking-[0.16em] text-gray-700 dark:text-gray-300 font-medium">
          Featured
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
        {skill.name}
      </h2>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl">
        {skill.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {skill.keywords.slice(0, 4).map((keyword, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 text-xs text-gray-700 dark:text-gray-300 font-medium"
          >
            {keyword}
          </span>
        ))}
      </div>

      <button
        onClick={onInstall}
        className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
      >
        <Download size={16} />
        <span>Install Skill</span>
      </button>
    </div>
  );
}

// Grid Skill Card
function SkillGridCard({ skill, onInstall }) {
  return (
    <article className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6 hover:border-black/20 dark:hover:border-white/20 transition-all">
      {/* Icon & Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-2xl">
          {getIconEmoji(skill.icon)}
        </div>
        {skill.requiresPro && (
          <span className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-medium text-gray-700 dark:text-gray-300">
            PRO
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
        {skill.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
        {skill.description}
      </p>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skill.keywords.slice(0, 3).map((keyword, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs text-gray-600 dark:text-gray-400"
          >
            {keyword}
          </span>
        ))}
      </div>

      {/* Install Button */}
      <button
        onClick={onInstall}
        className="w-full py-2.5 rounded-lg bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white text-sm font-medium hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
      >
        Install
      </button>
    </article>
  );
}

// Icon helper
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
