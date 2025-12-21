import React from 'react';
import DownloadButton from './DownloadButton';

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
        
        <div className="flex flex-col items-center gap-6">
          <DownloadButton />
          <p className="text-sm text-gray-500 font-mono -mt-3">7-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
