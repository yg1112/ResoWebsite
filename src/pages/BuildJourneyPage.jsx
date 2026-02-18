import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { journeyPosts } from '../data/journeyPosts';
import JourneyPostContent, { extractJourneyHeadings } from '../components/JourneyPostContent';

const BuildJourneyPage = () => {
  const location = useLocation();
  const [activePostId, setActivePostId] = useState(`journey-${journeyPosts[0]?.id || ''}`);

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.slice(1);
    const targetPost = journeyPosts.find((post) => `journey-${post.id}` === sectionId);

    if (targetPost) {
      setActivePostId(sectionId);
    }
  }, [location.hash]);

  const activePost =
    journeyPosts.find((post) => `journey-${post.id}` === activePostId) || journeyPosts[0];

  const postHeadings = useMemo(
    () => extractJourneyHeadings(activePost?.content, activePostId),
    [activePost, activePostId]
  );

  const switchPost = (postId) => {
    setActivePostId(postId);
    window.history.replaceState(null, '', `${location.pathname}#${postId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            Build Journey
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Field notes on design, tradeoffs, and the product decisions behind Reso.
          </p>
        </section>

        <div className="mb-6 lg:hidden">
          <label htmlFor="journey-post-select" className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
            Select a post
          </label>
          <select
            id="journey-post-select"
            value={activePostId}
            onChange={(event) => switchPost(event.target.value)}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-800 dark:text-gray-100"
          >
            {journeyPosts.map((post) => (
              <option key={post.id} value={`journey-${post.id}`}>
                {post.title}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_180px] gap-8 xl:gap-10">
          <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              Posts
            </p>
            <nav className="space-y-1">
              {journeyPosts.map((post) => {
                const postId = `journey-${post.id}`;
                const isActive = activePostId === postId;

                return (
                  <button
                    key={post.id}
                    onClick={() => switchPost(postId)}
                    className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-black/[0.06] dark:bg-white/[0.08] text-gray-900 dark:text-white font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-wide opacity-70 mb-1">{post.date}</p>
                    <p>{post.title}</p>
                  </button>
                );
              })}
            </nav>
          </aside>

          <article>
            {activePost && (
              <section id={`journey-${activePost.id}`} className="scroll-mt-28">
                <JourneyPostContent post={activePost} headingPrefix={activePostId} />
              </section>
            )}
          </article>

          <aside className="hidden xl:block xl:sticky xl:top-28 xl:self-start">
            {postHeadings.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  On this post
                </p>
                <nav className="space-y-1">
                  {postHeadings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {heading.label}
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

export default BuildJourneyPage;
