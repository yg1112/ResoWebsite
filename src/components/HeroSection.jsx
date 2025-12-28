import React from 'react';
import DownloadButton from './DownloadButton';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative z-10 pt-40 pb-20 px-6 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-gray-900">
          Capture thought. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
            Anywhere.
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          Instant voice-to-text for your Mac.<br/>
          Flows into Slack, GitHub, iMessage, and more. <span className="text-orange-500 font-semibold">Locally.</span>
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <DownloadButton>
            <Download size={20} />
            <span>Download for Mac</span>
          </DownloadButton>
          <p className="text-xs text-gray-400 font-mono">v1.0.0 | macOS 14+ | Apple Silicon</p>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm text-gray-400 font-medium" title="Pending Review">
            <span className="text-gray-400"></span>
            <span>Coming soon to Mac App Store</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;