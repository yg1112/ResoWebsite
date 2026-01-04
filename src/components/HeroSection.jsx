import React from 'react';
import DownloadButton from './DownloadButton';
import ToolLogos from './ToolLogos';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    // 全屏Hero区域，提供充足呼吸感
    <section className="relative z-10 pt-[120px] pb-[120px] px-6 bg-white min-h-screen flex items-center justify-center">
      
      {/* 大幅增加左右间距至100px (gap-24 lg:gap-32)，营造高级感 */}
      <div className="max-w-[79rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32 items-center w-full">
        
        {/* Left Side: Text and CTA */}
        <div className="text-left">
          {/* Platform Tag - 半透明灰色，降低视觉权重 */}
          <div className="inline-block mb-8">
            <span className="px-2 py-0.5 rounded bg-gray-100/50 text-gray-500 text-[10px] font-normal tracking-wide opacity-60">
              Apple Silicon & macOS 14+ ready
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-[1.05] mb-10 text-gray-900">
            Capture thoughts. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
              Anywhere.
            </span>
          </h1>
          {/* 诗意化的副标题 - 强调本质 */}
          <p className="text-xl text-gray-500 leading-[1.8] mb-12 font-light max-w-lg">
            Your voice, perfectly transcribed. <span className="font-normal text-gray-700">Instantly.</span> <span className="font-normal" style={{ color: '#6600FF' }}>Locally.</span>
          </p>
          <p className="text-base text-gray-400 leading-[1.8] mb-12 font-light max-w-lg italic">
            The privacy-first dictation tool that flows as fast as you think.
          </p>

          <div className="flex flex-col gap-3 ml-[4.05rem]">
            <div className="flex items-center gap-4">
              {/* Download Now Button */}
              <a
                href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
                download
                className="bg-[#0A0A0A] text-white rounded-lg font-semibold text-xs hover:bg-[#111] transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 h-[52px] w-[156px]"
                style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)' }}
              >
                <Download size={16} />
                <span>Try for Free</span>
              </a>

              {/* Divider */}
              <div className="w-px h-8 bg-gray-300"></div>

              {/* App Store Badge - 优化为更清爽的浅灰色 */}
              <div className="relative group flex items-center">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="cursor-not-allowed opacity-70 hover:opacity-60 transition-opacity flex items-center h-[52px]"
                >
                  <svg width="156" height="52" viewBox="0 0 156 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                    <rect width="156" height="52" rx="8" fill="#F5F5F7" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
                    <path d="M32.85 26.3c-.03-3.17 2.59-4.7 2.71-4.78-1.48-2.16-3.77-2.46-4.59-2.49-1.94-.2-3.81 1.15-4.8 1.15-1.0 0-2.54-1.12-4.18-1.09-2.15.03-4.13 1.25-5.24 3.18-2.24 3.88-.57 9.63 1.6 12.78 1.07 1.54 2.33 3.27 4.0 3.21 1.61-.07 2.21-1.04 4.15-1.04 1.93 0 2.5 1.04 4.18 1.01 1.73-.03 2.83-1.56 3.89-3.11 1.22-1.79 1.72-3.52 1.75-3.61-.04-.02-3.36-1.29-3.39-5.11zm-3.12-9.22c.88-1.07 1.48-2.56 1.32-4.05-1.27.05-2.81.85-3.73 1.92-.82.95-1.54 2.47-1.35 3.93 1.43.11 2.88-.72 3.76-1.8z" fill="#1A1A1A"/>
                    <text x="50" y="20" fill="#1A1A1A" fontSize="11" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" fontWeight="400">Download on the</text>
                    <text x="50" y="37" fill="#1A1A1A" fontSize="18" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" fontWeight="600">App Store</text>
                  </svg>
                </button>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  Coming soon
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>

            <p className="text-[13px] text-gray-400 font-light">
              7-day unlimited trial • No credit card required
            </p>
          </div>
        </div>

        {/* Right Side: Video Demo */}
        <div className="flex flex-col gap-10 w-full">
          {/* 视频容器 - 极简设计，柔和悬浮阴影 + 环境光 */}
          <div className="relative w-full aspect-video">
            {/* 环境光晕 - 让视频看起来悬浮在能量场之上 */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
              style={{
                width: '150%',
                height: '150%',
                background: 'radial-gradient(circle, rgba(120, 80, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(80px)',
                transform: 'translate(-50%, -50%) translate(-3%, -3%)'
              }}
            />
            <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.25)] ring-1 ring-gray-900/5">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Reso_Demo_v3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Works Seamlessly With - 优化可见度和交互 */}
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-normal opacity-50">Works seamlessly with</span>
            <div className="mt-6 flex items-center justify-center scale-90 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <ToolLogos />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;