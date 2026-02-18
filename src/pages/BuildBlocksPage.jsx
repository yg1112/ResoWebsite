import React from 'react';

const BuildBlocksPage = () => {
  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <section className="mb-14 max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            Build Blocks
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Reusable workflow components that let users compose their own process without starting from scratch.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/20 p-6">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">What It Is</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Build Blocks packages recurring steps like intent parsing, refinement, and export into composable units.
              You can mix these units by use case instead of rebuilding the same flow each time.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/20 p-6">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">Current Status</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This page is the new public entry point for Build Blocks. More examples and block templates will be
              published here as the system evolves.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default BuildBlocksPage;
