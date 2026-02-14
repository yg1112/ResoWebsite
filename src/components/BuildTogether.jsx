import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const previewItems = [
  {
    title: 'Docs',
    body: 'Product architecture and workflow guides.',
    href: '/docs',
    cta: 'Open Docs',
  },
];

const BuildTogether = () => {
  return (
    <section className="py-24" id="build-together">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-4">Build Together</p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-4">
            Transparent progress, shipped in public.
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Follow what changed, why we changed it, and what is next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
          {previewItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md p-6"
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{item.body}</p>
              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                <span>{item.cta}</span>
                <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>

        <a
          href="/resources"
          className="mt-8 inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          <span>Browse all resources</span>
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
};

export default BuildTogether;
