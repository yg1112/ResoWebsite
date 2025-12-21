import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Menu, 
  X as XIcon, 
  Mic,
  ArrowRight,
  Twitter,
  Mail,
  Lock,
  Zap,
  Hash,
  Send,
  ChevronLeft,
  Video,
  Github,
  CheckCircle2,
  FileDiff,
  MessageSquarePlus,
  WifiOff,
  Cpu,
  Command,
  TextCursor,
  Keyboard,
  Globe,
  Code,
  Timer,
  TrendingUp,
  BarChart3,
  Brain,
  Camera,
  ArrowUp,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  RotateCw,
  Search,
  MoreHorizontal,
  Loader2,
  MessageSquarePlus as MessageSquarePlusIcon,
  CreditCard,
  Check,
  Server,
  Coins,
  Activity,
  FileText,
  HelpCircle,
  Plus,
  Infinity,
  Workflow,
  Hand
} from 'lucide-react';

// --- Custom Components ---

// 1. App Icon
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

// 2. Light Mode Mechanical Key
const MechanicalKey = ({ label, active }) => (
  <div className="relative group perspective-500 w-20 h-20">
    <div className="absolute inset-x-1 bottom-0 h-full bg-gray-200 rounded-2xl transform translate-y-2 shadow-lg" />
    <div className={`
      absolute inset-x-1 bottom-0 h-full bg-gray-300 rounded-2xl transform transition-transform duration-100
      ${active ? 'translate-y-1' : 'translate-y-2'}
    `} />
    <div className={`
      relative w-full h-full bg-white
      rounded-2xl border border-gray-200
      flex items-center justify-center 
      transition-all duration-100 ease-out shadow-sm
      ${active ? 'translate-y-2 shadow-none border-b-0 brightness-95' : '-translate-y-0 hover:-translate-y-0.5 border-b-4 border-gray-100'}
    `}>
      <span className={`
        font-sans text-3xl font-medium transition-all duration-100 select-none
        ${active ? 'text-orange-500 scale-95' : 'text-gray-600'}
      `}>
        {label}
      </span>
    </div>
  </div>
);

// 3. Dark Mode Mechanical Key
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
        ${active ? 'text-orange-400 scale-95 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]' : 'text-gray-400'}
      `}>
        {label}
      </span>
    </div>
  </div>
);

// 4. Tool Logos
const ToolLogos = () => (
  <div className="flex gap-6 sm:gap-10 items-center justify-center">
    {/* Cursor */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/cursor.svg" 
        alt="Cursor" 
        width="36" 
        height="36"
        style={{ filter: 'invert(0)' }}
      />
    </div>
    {/* Linear */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/linear.svg" 
        alt="Linear" 
        width="36" 
        height="36"
      />
    </div>
    {/* Slack */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/slack.svg" 
        alt="Slack" 
        width="36" 
        height="36"
      />
    </div>
    {/* Discord */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/discord.svg" 
        alt="Discord" 
        width="36" 
        height="36"
      />
    </div>
    {/* Notion */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/notion.svg" 
        alt="Notion" 
        width="36" 
        height="36"
      />
    </div>
    {/* GitHub */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/github.svg" 
        alt="GitHub" 
        width="36" 
        height="36"
      />
    </div>
  </div>
);

// --- Abstracted App Scenarios ---

const AbstractHeader = ({ icon: Icon, title, color }) => (
  <div className="flex items-center gap-3 mb-6 opacity-80">
    <div className={`p-2 rounded-lg ${color} text-white shadow-lg`}>
      <Icon size={16} />
    </div>
    <span className="text-sm font-medium text-gray-400 tracking-wide">{title}</span>
  </div>
);

// 文字出现的淡入上浮动画
const ContentFadeIn = ({ children }) => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-forwards">
    {children}
  </div>
);

// --- DARK MODE SCENARIOS ---
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
           {/* Focus Glow */}
           <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-20 pointer-events-none"></div>
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
           {/* Focus Glow */}
           <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg blur opacity-20 pointer-events-none"></div>
        </div>
      </div>
    </div>
  ),
  imessage: ({ content }) => (
    <div className="flex flex-col h-full justify-end pb-12 px-12">
      <AbstractHeader icon={MessageSquarePlusIcon} title="Messages" color="bg-green-500" />
      <div className="space-y-6">
        <div className="flex flex-col gap-2 opacity-50 blur-[0.5px]">
           <div className="self-start bg-[#333] px-4 py-2 rounded-2xl rounded-tl-sm text-sm text-gray-300 max-w-[60%]">
             Lunch? 🍜
           </div>
        </div>
        <div className="relative">
           <div className="w-full bg-[#1e1e1e] border border-gray-700 rounded-full px-5 py-3 min-h-[50px] shadow-2xl flex items-center">
              <div className="flex-1 text-base text-white">
                 {content ? <ContentFadeIn>{content}</ContentFadeIn> : null}
              </div>
              <div className="bg-blue-600 rounded-full p-1.5 ml-3">
                 <ArrowUp size={14} className="text-white" />
              </div>
           </div>
        </div>
      </div>
    </div>
  ),
  gmail: ({ content }) => (
    <div className="flex flex-col h-full justify-center px-12">
      <AbstractHeader icon={Mail} title="Gmail" color="bg-[#EA4335]" />
      <div className="bg-[#1e1e1e] rounded-xl border border-gray-700 shadow-2xl overflow-hidden relative">
         <div className="bg-[#2d2e30] px-4 py-3 border-b border-gray-700 flex justify-between items-center">
            <span className="text-xs font-medium text-gray-400">New Message</span>
            <XIcon size={12} className="text-gray-500" />
         </div>
         <div className="p-6 min-h-[160px]">
            <div className="text-base text-gray-200 leading-relaxed font-sans">
               {content ? <ContentFadeIn>{content}</ContentFadeIn> : null}
            </div>
         </div>
         {/* Focus Glow */}
         <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl blur opacity-30 pointer-events-none"></div>
      </div>
    </div>
  )
};

// --- Scenarios Configuration ---
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
        <span className="text-gray-200"> around 1pm? ☕️</span>
      </>
    )
  },
  {
    id: 'gmail',
    component: Scenarios.gmail,
    content: (
      <>
        <span className="text-gray-300">Attached is the </span>
        <span className="text-orange-400 border-b border-orange-500/50 pb-0.5">Q4_Report.pdf</span>
        <span className="text-gray-300">. We hit </span>
        <span className="text-white font-bold">120%</span>
        <span className="text-gray-300"> of target! 🚀</span>
      </>
    )
  }
];

const ResoLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeScenario, setActiveScenario] = useState(0);
  
  // Animation States: 0:Idle, 1:Trigger, 2:Listening, 3:Processing, 4:Output
  const [flowState, setFlowState] = useState(0); 
  const [keyActive, setKeyActive] = useState(false);

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main Loop - Refined Timings
  useEffect(() => {
    let isMounted = true;
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const runSequence = async () => {
      if (!isMounted) return;
      // 0. IDLE
      setFlowState(0);
      await wait(1000);
      if (!isMounted) return;
      
      // 1. TRIGGER (Double Tap)
      // 稍微放慢按键间隔 (120ms -> 150ms)，让双击更扎实
      setFlowState(1); 
      setKeyActive(true); await wait(150);
      setKeyActive(false); await wait(150);
      setKeyActive(true); await wait(150);
      setKeyActive(false);
      await wait(400);
      if (!isMounted) return;
      
      // 2. LISTENING
      setFlowState(2);
      await wait(1500);
      if (!isMounted) return;
      
      // 3. PROCESSING
      // 延长处理展示时间 (600ms -> 1200ms)，让用户看清 Offline 字样
      setFlowState(3);
      await wait(1200);
      if (!isMounted) return;
      
      // 4. OUTPUT
      setFlowState(4);
      await wait(2500);
      if (!isMounted) return;

      setActiveScenario(prev => (prev + 1) % scenariosData.length);
      runSequence();
    };
    
    runSequence();
    return () => { isMounted = false; }
  }, []);

  const handleDownload = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'download', {
        'event_category': 'App',
        'event_label': 'Reso 1.0 DMG',
        'value': 1
      });
    }
    (async () => {
      const GITHUB_OWNER = 'YOUR_GITHUB_USERNAME'; // <- 替换为你的 GitHub 用户名
      const GITHUB_REPO = 'YOUR_REPO_NAME'; // <- 替换为你的仓库名

      let cachedDmg = null;
      async function fetchLatestDmgUrl() {
        if (cachedDmg) return cachedDmg;
        try {
          const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`);
          if (res.ok) {
            const data = await res.json();
            const asset = (data.assets || []).find(a => a.name && a.name.endsWith('.dmg'));
            if (asset && asset.browser_download_url) {
              cachedDmg = asset.browser_download_url;
              return cachedDmg;
            }
          }
        } catch (err) {
          console.warn('fetchLatestDmgUrl failed', err);
        }
        return `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest/download/Reso.dmg`;
      }

      const url = await fetchLatestDmgUrl();
      const link = document.createElement('a');
      link.href = url;
      link.rel = 'nofollow';
      link.download = 'Reso.dmg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })();
  };

  const handleBuy = () => {
    window.open('https://reso.lemonsqueezy.com/checkout', '_blank');
  };

  useEffect(() => {
    const navBtn = document.getElementById('navPrimaryCta');
    const pricingSection = document.getElementById('pricing');
    if (!navBtn || !pricingSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navBtn.textContent = 'Buy License — $29.99';
          navBtn.onclick = handleBuy;
          navBtn.classList.add('bg-orange-500','text-white');
          navBtn.classList.remove('bg-transparent','text-gray-600');
        } else {
          navBtn.textContent = 'Start Free Trial';
          navBtn.onclick = handleDownload;
          navBtn.classList.remove('bg-orange-500','text-white');
          navBtn.classList.add('bg-transparent','text-gray-600');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(pricingSection);
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    const formBody = `email=${encodeURIComponent(email)}&userGroup=Newsletter`;
    try {
      const response = await fetch("https://app.loops.so/api/newsletter-form/cmjdjf56l00dd0izhwc34oz2l", {
        method: "POST",
        body: formBody,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      if (response.ok) { setSubscribed(true); setEmail(''); } 
      else { alert("Something went wrong. Please try again."); }
    } catch (error) { console.error("Error:", error); alert("Something went wrong. Please try again."); }
  };

  const CurrentScenario = scenariosData[activeScenario].component;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 scroll-smooth overflow-x-hidden">
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
            <div className="w-9 h-9">
              <AppIcon className="w-full h-full rounded-[10px] shadow-sm" />
            </div>
            <span className="text-gray-900">Reso</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a
              id="navPrimaryCta"
              href="https://github.com/yg1112/reso/releases/latest/download/Reso.dmg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-transparent text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
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
            <a
              href="https://github.com/yg1112/reso/releases/latest/download/Reso.dmg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 items-center gap-2 cursor-pointer"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </a>
            
            <p className="text-sm text-gray-500 font-mono -mt-3">7-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* --- CINEMATIC DEMO --- */}
      <section className="px-4 pb-32 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* THE STAGE */}
          <div className="relative w-full aspect-[16/10] bg-[#1C1C1E] rounded-3xl border border-gray-700/50 shadow-2xl shadow-black/30 overflow-hidden">
            
            {/* 1. APP LAYER */}
            <div className="absolute inset-0 z-0 flex flex-col">
               {/* [Native Cue] Fake macOS Menu Bar */}
               <div className="absolute top-0 left-0 right-0 h-7 backdrop-blur-md bg-black/20 flex items-center px-4 justify-between select-none z-20">
                 {/* Left: Fake Apple Logo & Menu */}
                 <div className="flex items-center gap-4 text-white/50 text-xs font-medium">
                    <span className="hover:text-white transition-colors cursor-default"></span>
                    <span className="font-bold text-white/90 cursor-default">Reso</span>
                    <span className="hidden sm:inline cursor-default">File</span>
                    <span className="hidden sm:inline cursor-default">Edit</span>
                    <span className="hidden sm:inline cursor-default">View</span>
                 </div>

                 {/* Right: Status Icons */}
                 <div className="flex items-center gap-3 text-white/60 cursor-default">
                   {/* Reso Menu Bar Icon (Active State Animation) */}
                   <div className={`transition-all duration-200 ${flowState >= 1 && flowState <= 3 ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-white/40'}`}>
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
                  {/* 使用 key 强制 React 在 activeScenario 变化时重新挂载组件，触发 fade-in 动画 */}
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

            {/* 2. TRIGGER OVERLAY - 还原旧版 x2 样式 */}
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
                           <div className="absolute w-full h-full bg-orange-500/40 rounded-full animate-ping"></div>
                           <div className="relative w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_8px_orange]"></div>
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
        </div>
      </section>

      {/* --- HERO LOGOS --- */}
      <section className="px-4 pb-8 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Works seamlessly with</span>
          <div className="mt-4 flex items-center justify-center">
            <ToolLogos />
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto space-y-24">
          
           {/* Pillar 1: Deep Context */}
           <div className="flex flex-col md:flex-row-reverse items-center gap-16">
             <div className="flex-1 space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                01. Deep Context
               </div>
                <h3 className="text-4xl font-bold text-gray-900 leading-tight">It doesn't just listen. It understands.</h3>
                <p className="text-lg text-gray-500 leading-relaxed">Don't train the model—just steer it. Tell Reso "I'm coding in Swift" or "Q3 Report," and it instantly adapts to your jargon and syntax.</p>
             </div>
             <div className="flex-1 flex justify-center">
               <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 shadow-inner w-full max-w-2xl flex flex-col gap-4 h-80 items-center justify-center relative overflow-hidden">
                   <div className="grid grid-cols-2 gap-6 w-full">
                     <div className="bg-red-50 rounded-xl border border-red-100 p-6 shadow-sm flex flex-col gap-3">
                       <div className="text-[10px] uppercase font-bold text-red-400 tracking-wider mb-1">Others</div>
                       <div className="flex flex-col gap-2">
                         <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 line-through font-mono text-sm">app dot tea sx</span>
                         <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 line-through font-mono text-sm">quarterly e bit da</span>
                       </div>
                     </div>
                     <div className="bg-gradient-to-br from-green-50 to-white rounded-xl border-l-4 border-green-200 p-6 shadow-lg flex flex-col gap-3 items-start">
                       <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 tracking-wider mb-1"><CheckCircle2 size={14} className="text-green-600"/> <span>Reso</span></div>
                       <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 font-mono text-sm">App.tsx</div>
                       <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 font-mono text-sm">Quarterly EBITDA</div>
                     </div>
                   </div>
               </div>
             </div>
           </div>

           {/* Pillar 2: Instant Trigger */}
           <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  02. Instant Access
                </div>
               <h3 className="text-4xl font-bold text-gray-900 leading-tight">Invisible until needed.</h3>
               <p className="text-lg text-gray-500 leading-relaxed">
                 Double-tap <code className="bg-white border border-gray-200 px-1.5 rounded font-mono text-sm text-gray-800">Option</code> (⌥ ⌥) to summon Reso instantly. No dock icon cluttering your space.
               </p>
             </div>
             <div className="flex-1 flex justify-center">
               <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-xl w-full max-w-sm flex items-center justify-center h-64">
                 <MechanicalKey label="⌥" active={true} />
                 <span className="mx-4 text-2xl text-gray-300">+</span>
                 <MechanicalKey label="⌥" active={true} />
               </div>
             </div>
           </div>

          {/* Pillar 3: The Magic Paste */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
             <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  03. Direct Input
                </div>
                <h3 className="text-4xl font-bold text-gray-900 leading-tight">Direct Insertion.</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                   Text flows directly into your cursor, no copy-paste needed. It acts like a ghost keyboard typing for you.
                </p>
             </div>
             <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-xl w-full max-w-sm flex items-center justify-center h-64">
                   <div className="text-3xl font-serif text-gray-800 flex items-center">
                      Hello World
                      <div className="w-0.5 h-8 bg-orange-500 ml-1 animate-pulse"></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Pillar 4: Dual Engine Power */}
          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  04. Performance
                </div>
                <h3 className="text-4xl font-bold text-gray-900 leading-tight">Speed vs Fidelity.</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                   Switch between <strong>Standard</strong> model for instant speed (perfect for chats) and <strong>Pro</strong> model for high-fidelity document drafting.
                </p>
             </div>
             <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-lg flex flex-col p-8 relative overflow-hidden w-full max-w-sm h-80">
                   {/* Background Grid */}
                   <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

                   {/* Standard Mode */}
                   <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex justify-between items-center">
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Standard Mode</span>
                         <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full">INSTANT</span>
                      </div>
                      <div className="h-12 flex items-end gap-1.5 opacity-80">
                         {[...Array(15)].map((_, i) => (
                            <div key={i} className="w-full bg-orange-400 rounded-t-sm" style={{height: `${30 + Math.random() * 40}%`}}></div>
                         ))}
                      </div>
                   </div>

                   <div className="h-px w-full bg-gray-100 my-2"></div>

                   {/* Pro Mode */}
                   <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex justify-between items-center">
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pro Mode</span>
                         <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-full">HIGH FIDELITY</span>
                      </div>
                      <div className="h-16 flex items-end gap-[2px]">
                         {[...Array(30)].map((_, i) => (
                            <div key={i} className="w-full bg-purple-600 rounded-t-sm" style={{height: `${20 + Math.random() * 80}%`}}></div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Pillar 5: Local Privacy */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
             <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  05. Privacy
                </div>
                <h3 className="text-4xl font-bold text-gray-900 leading-tight">100% Offline.</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                   100% Offline on Apple Silicon. Your voice data never leaves your Mac. Zero data egress.
                </p>
             </div>
             <div className="flex-1 flex justify-center">
                <div className="bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl flex items-center justify-center relative overflow-hidden w-full max-w-sm h-80">
                   {/* Dark Gradient BG */}
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#111] to-black"></div>
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_var(--tw-gradient-stops))] from-green-900/40 to-transparent"></div>
                   
                   {/* The Chip/Vault */}
                   <div className="relative z-10 w-40 h-40 bg-[#1A1A1A] rounded-[2rem] border border-gray-700 shadow-2xl flex flex-col items-center justify-center gap-3 group">
                      {/* Inner Glow */}
                      <div className="absolute inset-0 bg-green-500/5 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Lock Icon */}
                      <div className="p-4 bg-black/50 rounded-2xl border border-green-500/20 shadow-inner">
                         <Lock size={32} className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                      </div>
                      
                      {/* Status */}
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-green-900/30 rounded-full border border-green-500/20">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Secure Core</span>
                      </div>
                   </div>

                   {/* Data Particles */}
                   <div className="absolute top-10 right-10 w-2 h-2 bg-white/20 rounded-full blur-[1px]"></div>
                   <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-white/10 rounded-full blur-[1px]"></div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section id="stats" className="py-24 px-6 border-t border-gray-100 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">Backed by Science.</h2>
             <p className="text-gray-500 text-lg">Why voice is the future of work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                  <Zap size={24} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">3.0x Faster</h3>
               <p className="text-gray-500 text-sm mb-6">"Speech input is 3.0x faster than standard keyboard entry for English & Mandarin."</p>
               <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wide font-medium">
                  <Brain size={12} /> Stanford Research
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Workflow size={24} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Cognitive Flow</h3>
               <p className="text-gray-500 text-sm mb-6">"Dictation frees up working memory, allowing for better complex thinking and flow."</p>
               <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wide font-medium">
                  <FileText size={12} /> Journal of Writing Research
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                  <Hand size={24} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Health & RSI</h3>
               <p className="text-gray-500 text-sm mb-6">"Reduces repetitive strain on wrists and improves posture during long drafting sessions."</p>
               <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wide font-medium">
                  <Activity size={12} /> Ergonomics Health
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-24 px-6 border-t border-gray-100 bg-gray-50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-8">
                <div>
                   <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> Can I use it on multiple Macs?</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">Yes! Your license allows you to activate Reso on up to 2 personal devices.</p>
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> Is this a subscription?</h4>
                     <p className="text-gray-600 text-sm leading-relaxed">No, it is not a subscription. You pay once and own the app forever. The license includes 1 year of free updates.</p>
                </div>
             </div>
             <div className="space-y-8">
                <div>
                   <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> Does it work offline?</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">100%. All processing happens locally on your Apple Silicon chip. No data ever leaves your Mac.</p>
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> What is the refund policy?</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">We offer a 30-day money-back guarantee. If you're not happy, just email us.</p>
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> What happens after 1 year?</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">The app will continue to work. You just won't receive new feature updates until you renew your license.</p>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 px-6 border-t border-gray-200 bg-gray-50 relative z-10 text-center">
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-3xl p-10 hover:border-orange-200 transition-all shadow-xl">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Perpetual License</h2>
           <p className="text-sm text-gray-500 mb-2">Buy it once. Use it for life. The way software used to be.</p>
           <div className="flex items-baseline justify-center gap-1 my-6">
             <span className="text-5xl font-bold text-gray-900 tracking-tight">$29.99</span>
             <span className="text-gray-500 font-medium text-xl">/ seat</span>
           </div>
           <ul className="text-left space-y-3 mb-6 text-gray-500 text-sm max-w-xs mx-auto">
             <li className="flex gap-3"><Check size={16} className="text-orange-500" /> No monthly subscriptions</li>
             <li className="flex gap-3"><Check size={16} className="text-orange-500" /> Unlimited local transcription</li>
             <li className="flex gap-3"><Check size={16} className="text-orange-500" /> Includes 1 year of updates</li>
             <li className="flex gap-3"><Check size={16} className="text-orange-500" /> Keep your version forever</li>
             <li className="flex gap-3 text-gray-400"><Check size={16} className="text-orange-200" /> Optional renewal at discounted price</li>
           </ul>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
             <button
               onClick={handleBuy}
               aria-label="Buy Reso License"
               className="w-full inline-flex items-center justify-center gap-3 py-3 px-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-semibold shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all transform hover:-translate-y-0.5"
             >
               <CreditCard size={16} />
               <span>Buy License</span>
             </button>

            <a
              href="https://github.com/yg1112/reso/releases/latest/download/Reso.dmg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start 7-day free trial"
              className="w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              Or start a 7-day free trial
            </a>
           </div>
           <p className="text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
             <Check size={12}/> 30-day money-back guarantee • Secure payment
           </p>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="py-24 px-6 bg-white border-t border-gray-100 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Be the first to know</h2>
          <p className="text-gray-500 text-lg mb-8">
            Get the latest apps and deals. We hate spam as much as you do.
          </p>

          {subscribed ? (
            <div className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-2xl border border-green-100 animate-in fade-in zoom-in duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircle2 size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">You're on the list!</h3>
              <p className="text-gray-500">Thanks for subscribing.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-12 px-6 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 opacity-40 grayscale hover:grayscale-0 transition-all">
                  <AppIcon className="w-full h-full rounded-[4px]" />
              </div>
              <span>&copy; 2025 DZG STUDIO LLC.</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
             <a href="/privacy.html" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
             <a href="/terms.html" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Terms of Service</a>
             <div className="w-px h-3 bg-gray-300"></div>
             <a href="https://x.com/DzgStudio" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                <Twitter size={16} />
                <span>@DzgStudio</span>
             </a>
             <a href="https://tally.so/r/obDo51" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                <Mail size={16} />
                <span>Support</span>
             </a>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 18px; }
        }
        .animate-wave {
          animation: wave 0.8s ease-in-out infinite;
        }
        .tool-icon {
          opacity: 0.4;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .tool-icon:hover {
          opacity: 1;
          transform: translateY(-2px);
        }
        .tool-icon img {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default ResoLanding;