import React, { useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import ToolLogos from './ToolLogos';
import { Download, Search, Loader2, WifiOff, Hash, Send, Code, MessageSquarePlus } from 'lucide-react';

// App Icon
const AppIcon = ({ className }) => (
  <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="icon_grad" x1="256" y1="0" x2="256" y2="512" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FB923C"/>
        <stop offset="1" stopColor="#EA580C"/>
      </linearGradient>
      <filter id="icon_shadow" x="-20%" y="-20%" width="140%" height="140%">
         <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.15"/>
      </filter>
    </defs>
    <rect x="0" y="0" width="512" height="512" rx="110" fill="url(#icon_grad)"/>
    <rect x="8" y="8" width="496" height="496" rx="108" stroke="white" strokeOpacity="0.1" strokeWidth="8"/>
    <g stroke="white" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" filter="url(#icon_shadow)">
      <path d="M352 190H160"/>
      <path d="M210 130L150 190L210 250"/>
      <path d="M160 322H352"/>
      <path d="M302 262L362 322L302 382"/>
    </g>
  </svg>
);

// Dark Mode Mechanical Key
const DarkMechanicalKey = ({ label, active }) => (
  <div className="relative group perspective-500 w-16 h-16">
    <div className="absolute inset-x-1 bottom-0 h-full bg-black rounded-2xl transform translate-y-1.5 shadow-xl" />
    <div className={`
      absolute inset-x-1 bottom-0 h-full bg-[#111] rounded-2xl transform transition-transform duration-100
      ${active ? 'translate-y-0.5' : 'translate-y-1.5'}
    `} />
    <div className={`
      relative w-full h-full bg-[#222]
      rounded-2xl border border-white/10
      flex items-center justify-center
      transition-all duration-100 ease-out shadow-inner
      ${active ? 'translate-y-1.5 border-b-0 brightness-125' : '-translate-y-0 border-b-4 border-black/50'}
    `}>
      <span className={`
        font-sans text-2xl font-medium transition-all duration-100 select-none
        ${active ? 'text-orange-400 scale-95' : 'text-gray-400'}
      `}>
        {label}
      </span>
    </div>
  </div>
);

// Content Fade In
const ContentFadeIn = ({ children }) => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-forwards">
    {children}
  </div>
);

// Abstract Header
const AbstractHeader = ({ icon: Icon, title, color }) => (
  <div className="flex items-center gap-3 mb-6 opacity-80">
    <div className={`p-2 rounded-lg ${color} text-white shadow-lg`}>
      <Icon size={16} />
    </div>
    <span className="text-sm font-medium text-gray-400 tracking-wide">{title}</span>
  </div>
);

// Scenario Components
const Scenarios = {
  slack: ({ content }) => (
    <div className="flex flex-col h-full justify-center px-12">
      <AbstractHeader icon={Hash} title="Slack / Engineering" color="bg-[#4A154B]" />
      <div className="space-y-4">
        <div className="flex gap-4 opacity-40 blur-[1px] grayscale">
          <div className="w-10 h-10 rounded-lg bg-gray-700"></div>
          <div className="space-y-2">
            <div className="h-3 w-24 bg-gray-700 rounded"></div>
            <div className="h-3 w-64 bg-gray-700 rounded"></div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full bg-[#1A1D21] border border-gray-700 rounded-xl p-5 min-h-[100px] shadow-2xl relative overflow-hidden group">
            <div className="text-base text-gray-200 leading-relaxed font-light">
              {content ? <ContentFadeIn>{content}</ContentFadeIn> : null}
            </div>
            <div className="absolute bottom-4 right-4 text-gray-500">
              <Send size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  github: ({ content }) => (
    <div className="flex flex-col h-full justify-center px-12">
      <AbstractHeader icon={Code} title="GitHub / Code Review" color="bg-[#1F2328]" />
      <div className="space-y-4">
        <div className="border border-gray-700 rounded-lg bg-[#0d1117] p-4 font-mono text-xs text-gray-500 opacity-60 blur-[0.5px]">
          <div className="flex gap-2 mb-2 border-b border-gray-700 pb-2">
            <span className="text-blue-400">src/auth.ts</span>
          </div>
          <div className="pl-2 border-l-2 border-green-900 text-green-500/80">+ if (!session) throw new Error("Auth");</div>
          <div className="pl-2 border-l-2 border-transparent">  const user = await db.user.find(session.id);</div>
        </div>
        <div className="relative">
          <div className="w-full bg-[#0d1117] border border-gray-700 rounded-lg p-4 min-h-[100px] shadow-2xl">
            <div className="text-base text-gray-300 leading-relaxed font-sans">
              {content ? <ContentFadeIn>{content}</ContentFadeIn> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  imessage: ({ content }) => (
    <div className="flex flex-col h-full justify-end pb-12 px-12">
      <AbstractHeader icon={MessageSquarePlus} title="Messages" color="bg-green-500" />
      <div className="space-y-6">
        <div className="flex flex-col gap-2 opacity-50 blur-[0.5px]">
          <div className="self-start bg-[#333] px-4 py-2 rounded-2xl rounded-tl-sm text-sm text-gray-300 max-w-[60%]">
            Lunch?
          </div>
        </div>
        <div className="relative">
          <div className="w-full bg-[#1e1e1e] border border-gray-700 rounded-full px-5 py-3 min-h-[50px] shadow-2xl flex items-center">
            <div className="flex-1 text-base text-white">
              {content ? <ContentFadeIn>{content}</ContentFadeIn> : null}
            </div>
            <div className="bg-blue-600 rounded-full p-1.5 ml-3">
              <Send size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

const scenariosData = [
  {
    id: 'slack',
    component: Scenarios.slack,
    content: (
      <>
        <span className="text-gray-300">刚刚 merge 了 </span>
        <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-1.5 rounded text-sm font-medium mx-0.5">PR #402</span>
        <span className="text-gray-300">，修复了那个 </span>
        <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-1.5 rounded text-sm font-medium mx-0.5">race condition</span>
        <span className="text-gray-300">。</span>
      </>
    )
  },
  {
    id: 'github',
    component: Scenarios.github,
    content: (
      <>
        <span className="text-gray-300">Looks good, but potential </span>
        <span className="text-orange-400 font-semibold decoration-orange-500/30 underline decoration-2 underline-offset-2">memory leak</span>
        <span className="text-gray-300"> here if unmounted.</span>
      </>
    )
  },
  {
    id: 'imessage',
    component: Scenarios.imessage,
    content: (
      <>
        <span className="text-gray-200">Meet at </span>
        <span className="text-white font-semibold">Blue Bottle</span>
        <span className="text-gray-200"> around 1pm?</span>
      </>
    )
  },
];

const HeroSection = () => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [flowState, setFlowState] = useState(0);
  const [keyActive, setKeyActive] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const runSequence = async () => {
      if (!isMounted) return;
      setFlowState(0);
      await wait(1000);
      if (!isMounted) return;

      setFlowState(1);
      setKeyActive(true);
      await wait(150);
      setKeyActive(false);
      await wait(150);
      setKeyActive(true);
      await wait(150);
      setKeyActive(false);
      await wait(400);
      if (!isMounted) return;

      setFlowState(2);
      await wait(1500);
      if (!isMounted) return;

      setFlowState(3);
      await wait(1200);
      if (!isMounted) return;

      setFlowState(4);
      await wait(2500);
      if (!isMounted) return;

      setActiveScenario(prev => (prev + 1) % scenariosData.length);
      runSequence();
    };

    runSequence();
    return () => { isMounted = false; }
  }, []);

  const CurrentScenario = scenariosData[activeScenario].component;

  return (
    <section className="relative z-10 pt-40 pb-32 px-6 bg-white min-h-screen flex items-center">
      <div className="max-w-[79rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start w-full">
        {/* Left Side: Text and CTA */}
        <div className="text-left">
          {/* Platform Tag */}
          <div className="inline-block mb-6">
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[11px] font-semibold">
              Apple Silicon & macOS 14+ ready!
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-12 text-gray-900">
            Capture thoughts. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
              Anywhere.
            </span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 font-normal">
            Instant voice-to-text for your Mac.<br/>
            Flows into Slack, GitHub, iMessage, and more. <span className="text-orange-500 font-semibold">Locally.</span>
          </p>

          <div className="flex flex-col gap-3 ml-[4.05rem]">
            <div className="flex items-center gap-4">
              {/* Download Now Button */}
              <a
                href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
                download
                className="bg-black text-white rounded-lg font-semibold text-xs hover:bg-gray-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 h-[52px] w-[156px]"
              >
                <Download size={16} />
                <span>Download Now</span>
              </a>

              {/* Divider */}
              <div className="w-px h-8 bg-gray-300"></div>

              {/* App Store Badge */}
              <div className="relative group flex items-center">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="cursor-not-allowed opacity-70 hover:opacity-60 transition-opacity flex items-center h-[52px]"
                >
                  <svg width="156" height="52" viewBox="0 0 156 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                    {/* Background */}
                    <rect width="156" height="52" rx="8" fill="#6B7280"/>

                    {/* Apple Logo */}
                    <path d="M32.85 26.3c-.03-3.17 2.59-4.7 2.71-4.78-1.48-2.16-3.77-2.46-4.59-2.49-1.94-.2-3.81 1.15-4.8 1.15-1.0 0-2.54-1.12-4.18-1.09-2.15.03-4.13 1.25-5.24 3.18-2.24 3.88-.57 9.63 1.6 12.78 1.07 1.54 2.33 3.27 4.0 3.21 1.61-.07 2.21-1.04 4.15-1.04 1.93 0 2.5 1.04 4.18 1.01 1.73-.03 2.83-1.56 3.89-3.11 1.22-1.79 1.72-3.52 1.75-3.61-.04-.02-3.36-1.29-3.39-5.11zm-3.12-9.22c.88-1.07 1.48-2.56 1.32-4.05-1.27.05-2.81.85-3.73 1.92-.82.95-1.54 2.47-1.35 3.93 1.43.11 2.88-.72 3.76-1.8z" fill="white"/>

                    {/* Text */}
                    <text x="50" y="20" fill="white" fontSize="11" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" fontWeight="400">Download on the</text>
                    <text x="50" y="37" fill="white" fontSize="18" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" fontWeight="600">App Store</text>
                  </svg>
                </button>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  Coming soon
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>

            {/* Guarantee Text */}
            <p className="text-xs text-gray-400">
              One-time payment • Lifetime access
            </p>
          </div>
        </div>

        {/* Right Side: Demo Animation */}
        <div className="flex flex-col gap-6 mt-[4.7rem]">
          {/* THE STAGE */}
          <div className="relative w-full aspect-[4/3] bg-[#1C1C1E] rounded-3xl border border-gray-700/50 overflow-hidden scale-110">

            {/* 1. APP LAYER */}
            <div className="absolute inset-0 z-0 flex flex-col">
              {/* [Native Cue] Fake macOS Menu Bar */}
              {/* FIXED: Removed backdrop-blur-md and bg-black/20 to prevent corner bleed artifacts */}
              <div className="absolute top-0 left-0 right-0 h-7 flex items-center px-4 justify-between select-none z-20">
                {/* Left: Fake Apple Logo & Menu */}
                <div className="flex items-center gap-4 text-white/50 text-xs font-medium">
                  <span className="hover:text-white transition-colors cursor-default"></span>
                  <span className="font-bold text-white/90 cursor-default">Reso</span>
                  <span className="hidden sm:inline cursor-default">File</span>
                  <span className="hidden sm:inline cursor-default">Edit</span>
                  <span className="hidden sm:inline cursor-default">View</span>
                </div>

                {/* Right: Status Icons */}
                <div className="flex items-center gap-3 text-white/60 cursor-default">
                  {/* Reso Menu Bar Icon (Active State Animation) */}
                  <div className={`transition-all duration-200 ${flowState >= 1 && flowState <= 3 ? 'text-white scale-110' : 'text-white/40'}`}>
                    <AppIcon className="w-3.5 h-3.5 rounded-[2px]" />
                  </div>
                  <div className="w-px h-3 bg-white/10 mx-1"></div>
                  <Search size={12} strokeWidth={2.5} />
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-medium">100%</span>
                  </div>
                  <span className="text-[10px] font-medium">Mon 9:41 AM</span>
                </div>
              </div>

              {/* Scenario Content */}
              <div className="flex-1 relative bg-[#1C1C1E] pt-8">
                <CurrentScenario
                  key={activeScenario}
                  content={flowState >= 4 ? scenariosData[activeScenario].content : null}
                />
              </div>

              {/* [Local Cue] Smart HUD - 精简版 */}
              <div className={`absolute bottom-5 right-5 transition-all duration-500 transform ${flowState >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <div className="flex flex-col items-end gap-1.5">

                  {/* State A: Processing (Offline Mode Showcase) - 极简文案 */}
                  {flowState === 3 ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 shadow-lg backdrop-blur-sm animate-in fade-in slide-in-from-bottom-1">
                      <WifiOff size={12} className="text-orange-400" />
                      <span className="text-[10px] font-bold text-orange-400 tracking-widest uppercase font-mono">
                        OFFLINE
                      </span>
                    </div>
                  ) : (
                  /* State B: Ready (Native Integration Showcase) */
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${flowState === 2 ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                      <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase font-mono">
                        NEURAL ENGINE
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 2. TRIGGER OVERLAY */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-50 pointer-events-none
               ${flowState === 1 ? 'opacity-100' : 'opacity-0 scale-95'}
            `}>
              <div className="flex flex-col items-center gap-6 p-12 rounded-3xl">
                <DarkMechanicalKey label="⌥" active={keyActive} />
                <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-lg text-white font-medium shadow-xl">
                  × 2
                </div>
              </div>
            </div>

            {/* 3. RESO PILL */}
            <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-40
               ${(flowState === 2 || flowState === 3) ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}
            `}>
              <div className="bg-[#151515]/80 backdrop-blur-2xl border border-white/10 rounded-full h-14 min-w-[200px] shadow-2xl flex items-center px-2 ring-1 ring-white/5 relative overflow-hidden">
                <div className="flex items-center gap-4 px-4 w-full justify-center">
                  {flowState === 2 && (
                    <>
                      <div className="relative flex items-center justify-center w-3 h-3">
                        <div className="relative w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-[3px] h-6">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 rounded-full animate-wave"
                            style={{
                              animationDelay: `${i * 0.05}s`,
                              height: '100%',
                              backgroundColor: '#F97316',
                              opacity: i % 2 === 0 ? 0.8 : 0.4
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {flowState === 3 && (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 text-orange-500 animate-spin" />
                      <span className="text-sm font-medium text-white tracking-wide">Transcribing...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Works Seamlessly With */}
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Works seamlessly with</span>
            <div className="mt-4 flex items-center justify-center">
              <ToolLogos />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 18px; }
        }
        .animate-wave {
          animation: wave 0.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;