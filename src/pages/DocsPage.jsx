import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';
import { docsContent, docsNavOrder } from '../data/docsContent';

// Current docs source of truth lives in src/data/docsContent.js.
const buildHashToSectionMap = (copy) => {
  const map = new Map();

  docsNavOrder.forEach((sectionId) => {
    map.set(sectionId, sectionId);

    copy.sections[sectionId]?.entries?.forEach((entry) => {
      map.set(entry.id, sectionId);
    });
  });

  return map;
};

const DocsPage = () => {
  const location = useLocation();
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(docsContent, language);
  const [activeSection, setActiveSection] = useState('gettingStarted');

  const hashToSectionMap = useMemo(() => buildHashToSectionMap(copy), [copy]);

  useEffect(() => {
    if (!location.hash) return;

    const hash = location.hash.slice(1);
    const targetSection = hashToSectionMap.get(hash);
    if (!targetSection) return;

    setActiveSection(targetSection);

    const timeoutId = window.setTimeout(() => {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ block: 'start' });
      }
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, [hashToSectionMap, location.hash]);

  const mainNavigation = useMemo(
    () => docsNavOrder.map((sectionId) => ({ id: sectionId, label: copy.nav[sectionId] })),
    [copy]
  );

  const rightSidebarSections = copy.sections[activeSection]?.entries?.map((entry) => ({
    id: entry.id,
    label: entry.title,
  })) || [];

  const selectSection = (sectionId) => {
    setActiveSection(sectionId);

    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `${location.pathname}#${sectionId}`);
    }
  };

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            {copy.headerTitle}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {copy.headerSubtitle}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_180px] gap-8 xl:gap-10">
          <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <nav className="space-y-1">
              {mainNavigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => selectSection(item.id)}
                  className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-black/[0.06] dark:bg-white/[0.08] text-gray-900 dark:text-white font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          <article className="space-y-8">
            <DocsSectionGroup section={copy.sections[activeSection]} />
          </article>

          <aside className="hidden xl:block xl:sticky xl:top-28 xl:self-start">
            {rightSidebarSections.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  {copy.onThisPage}
                </p>
                <nav className="space-y-1">
                  {rightSidebarSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
};

const DocsSectionGroup = ({ section }) => {
  if (!section?.entries) return null;

  return (
    <div className="space-y-8">
      {section.entries.map((entry) => (
        <section key={entry.id} id={entry.id} className="scroll-mt-28">
          <h2
            className={`${entry.size === 'md' ? 'text-xl' : 'text-2xl'} font-medium text-gray-900 dark:text-gray-100 mb-4`}
          >
            {entry.title}
          </h2>
          <div className="prose-content space-y-4">
            {entry.paragraphs?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {entry.checklist && (
              <ul className="space-y-2">
                {entry.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {entry.paragraphs2?.map((paragraph, idx) => (
              <p key={`p2-${idx}`}>{paragraph}</p>
            ))}

            {entry.downloadLabel && (
              <a
                href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-black dark:hover:bg-gray-100 transition-colors"
              >
                {entry.downloadLabel}
              </a>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default DocsPage;
