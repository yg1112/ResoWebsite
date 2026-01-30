import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import ToolLogos from './ToolLogos';
import { Download } from 'lucide-react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalVideoRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.play();
    }
    if (!isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  }, [isModalOpen]);

  return (
    <section className="relative z-10 pt-32 pb-20 px-6 bg-[#FAFAF9] min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Title + Button */}
        <div className="mb-14">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.3] mb-6 text-gray-900">
            Capture thoughts. Anywhere. <span className="text-gray-400">Locally.</span>
          </h1>

          <a
            href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
            download
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white rounded-lg font-medium text-sm hover:bg-[#2a2a2a] transition-all px-5 py-3"
          >
            <span>Download for macOS</span>
            <Download size={16} />
          </a>
        </div>

        {/* Video */}
        <div className="relative w-full mb-16">
          {/* 环境光晕 */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            style={{
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(120, 80, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/Reso_Demo_v3.mp4" type="video/mp4" />
            </video>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_32px_rgba(102,0,255,0.25)]">
                <svg className="w-5 h-5 md:w-6 md:h-6 ml-0.5" viewBox="0 0 24 24" fill="none">
                  <path d="M8.5 5.5C8.5 4.89 9.18 4.52 9.7 4.86L19.2 11.36C19.67 11.67 19.67 12.33 19.2 12.64L9.7 19.14C9.18 19.48 8.5 19.11 8.5 18.5V5.5Z" fill="#7850FF" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Works Seamlessly With */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-wider text-gray-400">Works seamlessly with</span>
          <div className="mt-5 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity duration-300">
            <ToolLogos />
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isModalOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-[90vw] max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              controls
              playsInline
              className="w-full h-full object-contain bg-black"
            >
              <source src="/Reso_Demo_v3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default HeroSection;
