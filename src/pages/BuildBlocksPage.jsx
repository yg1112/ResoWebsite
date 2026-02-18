import React from 'react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const BuildBlocksPage = () => {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy({
    en: {
      title: 'Build Blocks',
      subtitle:
        'Reusable workflow components that let users compose their own process without starting from scratch.',
      what: 'What It Is',
      whatBody:
        'Build Blocks packages recurring steps like intent parsing, refinement, and export into composable units. You can mix these units by use case instead of rebuilding the same flow each time.',
      status: 'Current Status',
      statusBody:
        'This page is the new public entry point for Build Blocks. More examples and block templates will be published here as the system evolves.',
    },
    zh: {
      title: 'Build Blocks',
      subtitle: '可复用的 workflow 组件，让用户不用从零开始就能组合自己的流程。',
      what: '它是什么',
      whatBody:
        'Build Blocks 把 intent parsing、refinement、export 等高频步骤打包成可组合单元。你可以按场景自由拼装，而不是每次重做整条链路。',
      status: '当前状态',
      statusBody: '这里是 Build Blocks 的独立入口。后续我们会在此持续发布示例与模板。',
    },
    ja: {
      title: 'Build Blocks',
      subtitle: '再利用可能な workflow コンポーネントで、ゼロから作り直さずに自分の流れを組み立てられます。',
      what: '概要',
      whatBody:
        'Build Blocks は intent parsing、refinement、export などの反復ステップを組み合わせ可能な単位として提供します。用途ごとに柔軟に構成できます。',
      status: '現在の状況',
      statusBody:
        'このページは Build Blocks の新しい公開入口です。今後、サンプルとテンプレートを順次追加します。',
    },
  }, language);

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <section className="mb-14 max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            {copy.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {copy.subtitle}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/20 p-6">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">{copy.what}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {copy.whatBody}
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/20 p-6">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">{copy.status}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {copy.statusBody}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default BuildBlocksPage;
