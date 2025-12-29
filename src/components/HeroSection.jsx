import React from 'react';
import DownloadButton from './DownloadButton';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative z-10 pt-40 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text and CTA */}
        <div className="text-left">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-gray-900">
            Capture thoughts. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
              Anywhere.
            </span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-10 font-normal">
            Instant voice-to-text for your Mac.<br/>
            Flows into Slack, GitHub, iMessage, and more. <span className="text-orange-500 font-semibold">Locally.</span>
          </p>
          
          <div className="flex flex-col gap-4">
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

        {/* Right Side: Hero Visual */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Placeholder for Hero Image/Video - Replace with actual demo screenshot or video */}
            <div className="w-96 h-64 bg-black rounded-lg shadow-2xl flex items-center justify-center">
              <span className="text-white text-lg">Hero Demo Placeholder</span>
            </div>
            {/* Add bleed effect or 3D tilt as suggested */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-gray-500/20 rounded-lg blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;