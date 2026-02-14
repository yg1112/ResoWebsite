import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Compass, GitCommitHorizontal, Calendar } from 'lucide-react';
import { journeyPosts } from '../data/journeyPosts';

// Parse inline markdown (bold, italic, code)
const parseInlineMarkdown = (text) => {
  if (!text) return text;

  const parts = [];
  let remaining = text;
  let key = 0;

  // Pattern to match **bold**, *italic*, or `code`
  const pattern = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(remaining)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(remaining.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold **text**
      parts.push(<strong key={key++} className="font-semibold">{match[2]}</strong>);
    } else if (match[3]) {
      // Italic *text*
      parts.push(<em key={key++}>{match[4]}</em>);
    } else if (match[5]) {
      // Code `text`
      parts.push(
        <code key={key++} className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">
          {match[6]}
        </code>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < remaining.length) {
    parts.push(remaining.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const resourceBlocks = [
  {
    id: 'roadmap',
    icon: Compass,
    title: 'Roadmap',
    description: 'See what we are building next and what is currently in progress.',
    linkText: 'Share feature requests',
    href: 'https://tally.so/r/obDo51',
    external: true,
  },
  {
    id: 'docs',
    icon: BookOpen,
    title: 'Docs',
    description: 'Product architecture and workflow guides.',
    linkText: 'Open Docs',
    href: '/docs',
  },
  {
    id: 'release-notes',
    icon: GitCommitHorizontal,
    title: 'Release Notes',
    description: 'Raw release artifacts and historical notes for every build.',
    linkText: 'Open GitHub releases',
    href: 'https://github.com/yg1112/reso-releases/releases',
    external: true,
  },
];

const ResourcesPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const location = useLocation();

  // Handle hash scrolling after page load
  useEffect(() => {
    if (location.hash) {
      // Wait for DOM to be fully rendered
      const timer = setTimeout(() => {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-5">Resources</p>
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            Building in public.
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            The journey behind Reso—from initial idea to production. These are the engineering decisions,
            design tradeoffs, and lessons learned along the way.
          </p>
        </section>

        <section id="journey" className="mb-20 scroll-mt-28">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">Build Journey</h2>
          </div>

          <div className="space-y-4">
            {journeyPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md px-6 py-5 cursor-pointer hover:border-black/20 dark:hover:border-white/20 transition-all"
                onClick={() => setSelectedPost(post)}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{post.summary}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-200">
                  <span>Read more</span>
                  <ArrowUpRight size={14} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="scroll-mt-28">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-8">More Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resourceBlocks.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  id={item.id}
                  className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-5"
                >
                  <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center mb-4">
                    <Icon size={17} className="text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* Full Post Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 px-8 py-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-medium">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    <span>{selectedPost.date}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">{selectedPost.title}</h2>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="px-8 py-8">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-xl font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
                        {parseInlineMarkdown(paragraph.replace('### ', ''))}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('```')) {
                    const code = paragraph.replace(/```.*\n?/g, '');
                    return (
                      <pre key={idx} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 overflow-x-auto mb-4">
                        <code className="text-sm text-gray-800 dark:text-gray-200">{code}</code>
                      </pre>
                    );
                  }
                  if (paragraph.match(/^\d+\.\s/)) {
                    const items = paragraph.split('\n').filter(line => line.match(/^\d+\.\s/));
                    return (
                      <ol key={idx} className="list-decimal list-outside ml-6 mb-4 space-y-1">
                        {items.map((item, i) => (
                          <li key={i} className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {parseInlineMarkdown(item.replace(/^\d+\.\s*/, ''))}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                      <ul key={idx} className="list-disc list-outside ml-6 mb-4 space-y-1">
                        {items.map((item, i) => (
                          <li key={i} className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {parseInlineMarkdown(item.replace(/^-\s*/, ''))}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.startsWith('>')) {
                    return (
                      <blockquote key={idx} className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
                        {parseInlineMarkdown(paragraph.replace(/^>\s*/, ''))}
                      </blockquote>
                    );
                  }
                  return (
                    <p key={idx} className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {parseInlineMarkdown(paragraph)}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ResourcesPage;
