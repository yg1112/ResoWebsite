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
  Infinity
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
    {/* VS Code */}
    <div className="tool-icon">
      <svg viewBox="0 0 100 100" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M95.3 27.7L73.4 6.4c-1.6-1.5-4-1.5-5.6 0L38 32.8 18.2 18.5c-1.1-.8-2.6-.8-3.7 0l-9.1 7.5c-1.4 1.2-1.4 3.3 0 4.5L24.5 50 5.4 69.5c-1.4 1.2-1.4 3.3 0 4.5l9.1 7.5c1.1.8 2.6.8 3.7 0L38 67.2l29.8 26.4c1.6 1.5 4 1.5 5.6 0l21.9-21.3c1.5-1.5 1.5-3.8 0-5.3L73.4 50l21.9-17c1.5-1.5 1.5-3.8 0-5.3zM68.3 62.5L68.3 37.5 84.7 50 68.3 62.5z" fill="#007ACC"/>
      </svg>
    </div>
    {/* Linear */}
    <div className="tool-icon">
      <svg viewBox="0 0 100 100" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 75l35.4-35.4 5.3 5.3L50 85.7 9.3 44.9l5.3-5.3L50 75z" fill="#5E6AD2"/>
        <path d="M50 25L14.6 60.4 9.3 55.1 50 14.3l40.7 40.8-5.3 5.3L50 25z" fill="#5E6AD2"/>
      </svg>
    </div>
    {/* Slack */}
    <div className="tool-icon">
      <svg viewBox="0 0 127 127" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/>
        <path d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36C5F0"/>
        <path d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z" fill="#2EB67D"/>
        <path d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z" fill="#ECB22E"/>
      </svg>
    </div>
    {/* Discord */}
    <div className="tool-icon">
      <svg viewBox="0 0 127.14 96.36" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M107.7 8.07A105.15 105.15 0 0081.47 0a72.06 72.06 0 00-3.36 6.83 97.68 97.68 0 00-29.11 0A72.37 72.37 0 0045.64 0a105.89 105.89 0 00-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0032.17 16.15 77.7 77.7 0 006.89-11.11 68.42 68.42 0 01-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0064.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 01-10.87 5.19 77 77 0 006.89 11.1 105.25 105.25 0 0032.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15zM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69z" fill="#5865F2"/>
      </svg>
    </div>
    {/* Notion */}
    <div className="tool-icon">
      <svg viewBox="0 0 100 100" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z" fill="#ffffff"/>
        <path d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z" fill="#000000"/>
      </svg>
    </div>
    {/* GitHub */}
    <div className="tool-icon">
      <svg viewBox="0 0 98 96" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#181717"/>
      </svg>
    </div>
  </div>
);

// --- Abstracted App Scenarios (Cleaner, Focused) ---

const AbstractHeader = ({ icon: Icon, title, color }) => (
  <div className="flex items-center gap-3 mb-6 opacity-80">
    <div className={`p-2 rounded-lg ${color} text-white shadow-lg`}>
      <Icon size={16} />
    </div>
    <span className="text-sm font-medium text-gray-400 tracking-wide">{title}</span>
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
                 {content}
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
                 {content}
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
                 {content}
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
               {content}
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

// Data Card (Bento Style)
const DataCard = ({ label, value, sub, icon: Icon }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:border-orange-500/20 transition-colors group h-full shadow-lg">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2.5 bg-gray-50 rounded-xl text-gray-500 group-hover:text-orange-400 group-hover:bg-orange-50 transition-colors">
        <Icon size={20} />
      </div>
    </div>
    <div>
      <div className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{value}</div>
      <div className="text-sm font-semibold text-gray-700 mb-1">{label}</div>
      <div className="text-xs text-gray-500 leading-relaxed">{sub}</div>
    </div>
  </div>
);

const ResoLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Animation States: 0:Idle, 1:Trigger, 2:Listening, 3:Processing, 4:Output
  const [flowState, setFlowState] = useState(0); 
  const [activeScenario, setActiveScenario] = useState(0);
  const [keyActive, setKeyActive] = useState(false);

  // Newsletter form state
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main Loop
  useEffect(() => {
    let timeout;
    let isMounted = true;

    const runSequence = async () => {
      if (!isMounted) return;
      // 0. IDLE
      setFlowState(0);
      await wait(1000);
      if (!isMounted) return;
      // 1. TRIGGER
      setFlowState(1); 
      setKeyActive(true); await wait(120); if (!isMounted) return;
      setKeyActive(false); await wait(120); if (!isMounted) return;
      setKeyActive(true); await wait(120); if (!isMounted) return;
      setKeyActive(false);
      await wait(400);
      if (!isMounted) return;
      // 2. LISTENING
      setFlowState(2);
      await wait(1800); 
      if (!isMounted) return;
      // 3. PROCESSING
      setFlowState(3);
      await wait(800); 
      if (!isMounted) return;
      // 4. OUTPUT
      setFlowState(4);
      await wait(4000); 
      if (!isMounted) return;

      setActiveScenario(prev => (prev + 1) % scenariosData.length);
      runSequence();
    };
    runSequence();
    return () => {
        isMounted = false;
        clearTimeout(timeout);
    }
  }, []);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const handleDownload = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'download', {
        'event_category': 'App',
        'event_label': 'Reso 1.0 DMG',
        'value': 1
      });
    }
    const link = document.createElement('a');
    link.href = '/Reso.dmg';
    link.download = 'Reso.dmg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    const formBody = `email=${encodeURIComponent(email)}&userGroup=Newsletter`;

    try {
      const response = await fetch("https://app.loops.so/api/newsletter-form/cmjdjf56l00dd0izhwc34oz2l", {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      
      if (response.ok) {
        setSubscribed(true);
        setEmail('');
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const CurrentScenario = scenariosData[activeScenario].component;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 scroll-smooth overflow-x-hidden">
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
            {/* Real App Icon - Navbar */}
            <div className="w-9 h-9">
              <AppIcon className="w-full h-full rounded-[10px] shadow-sm" />
            </div>
            <span className="text-gray-900">Reso</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#stats" className="hover:text-gray-900 transition-colors">Benefits</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a 
              onClick={handleDownload}
              className="text-white bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
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
              onClick={handleDownload}
              className="inline-flex px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 items-center gap-2 cursor-pointer"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </a>
            
            <p className="text-sm text-gray-500 font-mono -mt-3">7-day free trial. No credit card required.</p>

            <div className="flex flex-col items-center gap-4 mt-8">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">WORKS SEAMLESSLY WITH YOUR FAVORITE TOOLS</span>
              <ToolLogos />
            </div>
          </div>
        </div>
      </section>

      {/* --- CINEMATIC DEMO --- */}
      <section className="px-4 pb-32 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* THE STAGE - DARK MODE WINDOW ON LIGHT BACKGROUND */}
          <div className="relative w-full aspect-[16/10] bg-[#1C1C1E] rounded-3xl border border-gray-700/50 shadow-2xl shadow-black/30 overflow-hidden">
            
            {/* 1. APP LAYER (Focused View) */}
            <div className="absolute inset-0 z-0 flex flex-col">
               {/* App Header Bar Simulation (Dark) */}
               <div className="h-10 bg-[#2C2C2E] border-b border-white/5 flex items-center px-5 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               
               {/* Scenario Content (Dark Mode) */}
               <div className="flex-1 relative bg-[#1C1C1E]">
                  <CurrentScenario content={flowState >= 4 ? scenariosData[activeScenario].content : null} />
               </div>
            </div>

            {/* 2. TRIGGER OVERLAY (Centered) */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-50 pointer-events-none
               ${flowState === 1 ? 'opacity-100' : 'opacity-0 scale-95'}
            `}>
               <div className="flex flex-col items-center gap-6 p-12 rounded-3xl">
                  {/* Dark Mode Key for Overlay */}
                  <DarkMechanicalKey label="⌥" active={keyActive} />
                  <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-lg text-white font-medium shadow-xl">
                     × 2
                  </div>
               </div>
            </div>

            {/* 3. RESO PILL (Floating Dynamic Island Style - Dark Mode) */}
            <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-40
               ${(flowState === 2 || flowState === 3) ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}
            `}>
               {/* THE PILL */}
               <div className="bg-[#151515]/90 backdrop-blur-xl border border-white/10 rounded-full h-14 min-w-[200px] shadow-2xl flex items-center px-2 ring-1 ring-white/5 relative overflow-hidden">
                  
                  {/* Internal Padding Container */}
                  <div className="flex items-center gap-4 px-4 w-full justify-center">
                    
                    {/* STATE: LISTENING */}
                    {flowState === 2 && (
                      <>
                        <div className="relative flex items-center justify-center w-3 h-3">
                           <div className="absolute w-full h-full bg-orange-500/40 rounded-full animate-ping"></div>
                           <div className="relative w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_8px_orange]"></div>
                        </div>
                        
                        {/* Audio Waveform */}
                        <div className="flex items-center gap-[3px] h-6">
                           {[...Array(12)].map((_, i) => (
                              <div 
                                 key={i}
                                 className="w-1 rounded-full animate-wave"
                                 style={{ 
                                   animationDelay: `${i * 0.05}s`, 
                                   height: '100%',
                                   backgroundColor: '#F97316', // Orange
                                   opacity: i % 2 === 0 ? 0.8 : 0.4
                                 }}
                              />
                           ))}
                        </div>
                      </>
                    )}

                    {/* STATE: PROCESSING (Minimal Spinner) */}
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

      {/* --- FEATURES SECTION (5 Pillars - Z Pattern) --- */}
      <section id="features" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* Pillar 1: Instant Trigger */}
          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  01. Trigger
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

          {/* Pillar 2: Context Intelligence */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
             <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  02. Context Priming
                </div>
                <h3 className="text-4xl font-bold text-gray-900 leading-tight">It reads the room.</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                   Reso reads your active window to bias the model. It recognizes your unique variable names in Xcode and project jargon in Slack, ensuring 100% accuracy.
                </p>
             </div>
             <div className="flex-1 flex justify-center">
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-inner w-full max-w-sm flex flex-col gap-6 h-80 items-center justify-center relative overflow-hidden">
                   {/* Card 1: Without */}
                   <div className="w-full bg-white rounded-xl border border-gray-200 p-4 shadow-sm opacity-60 flex flex-col gap-1.5 transform scale-95">
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Without Context</div>
                      <div className="font-mono text-sm text-gray-500">Fix the race condition in auth.ts</div>
                   </div>
                   
                   {/* Arrow Down */}
                   <div className="text-gray-300">
                      <ArrowRightIcon size={20} className="transform rotate-90" />
                   </div>

                   {/* Card 2: With Reso */}
                   <div className="w-full bg-white rounded-xl border-l-4 border-blue-500 p-5 shadow-lg transform hover:scale-[1.02] transition-transform">
                      <div className="flex justify-between items-center mb-2">
                         <div className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">With Reso</div>
                         <CheckCircle2 size={14} className="text-blue-500" />
                      </div>
                      <div className="font-mono text-sm text-gray-900">
                         Fix the <span className="bg-blue-50 text-blue-700 px-1 rounded font-semibold border border-blue-100">raceCondition</span> in <span className="bg-blue-50 text-blue-700 px-1 rounded font-semibold border border-blue-100">Auth.ts</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Pillar 3: The Magic Paste */}
          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  03. Workflow
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
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
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
          <div className="flex flex-col md:flex-row items-center gap-16">
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

                   {/* Data Particles (Bouncing back) */}
                   <div className="absolute top-10 right-10 w-2 h-2 bg-white/20 rounded-full blur-[1px]"></div>
                   <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-white/10 rounded-full blur-[1px]"></div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- STATS SECTION (Why Voice?) --- */}
      <section id="stats" className="py-24 px-6 border-t border-gray-100 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">Backed by Science.</h2>
             <p className="text-gray-500 text-lg">Why voice is the future of work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                  <TrendingUp size={24} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">3.0x Faster</h3>
               <p className="text-gray-500 text-sm mb-6">"Speech input is 3.0x faster than standard keyboard entry for English & Mandarin."</p>
               <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wide font-medium">
                  <Brain size={12} /> Stanford Research
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Activity size={24} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Cognitive Flow</h3>
               <p className="text-gray-500 text-sm mb-6">"Dictation frees up working memory, allowing for better complex thinking and flow."</p>
               <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wide font-medium">
                  <FileText size={12} /> Journal of Writing Research
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                  <Activity size={24} />
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
                   <p className="text-gray-600 text-sm leading-relaxed">Yes! Your license allows you to activate Reso on up to 3 personal devices.</p>
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> Is this a subscription?</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">No. It's a one-time payment for a lifetime license. You own it forever.</p>
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
             </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 px-6 border-t border-gray-200 bg-gray-50 relative z-10 text-center">
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-3xl p-10 hover:border-orange-200 transition-all shadow-xl">
           <div className="inline-block p-3 rounded-2xl bg-orange-50 mb-6 text-orange-500 shadow-sm">
             <Infinity size={32} />
           </div>
           <h2 className="text-3xl font-bold text-gray-900 mb-2">Lifetime License</h2>
           <div className="flex items-baseline justify-center gap-1 my-6">
             <span className="text-5xl font-bold text-gray-900 tracking-tight">$29.99</span>
             <span className="text-gray-500 font-medium text-xl">/ once</span>
           </div>
           <ul className="text-left space-y-3 mb-8 text-gray-500 text-sm max-w-xs mx-auto">
             <li className="flex gap-3"><Check size={16} className="text-orange-500" /> No monthly subscriptions</li>
             <li className="flex gap-3"><Check size={16} className="text-orange-500" /> Unlimited local transcription</li>
             <li className="flex gap-3"><Check size={16} className="text-orange-500" /> Free updates for v1.x</li>
           </ul>
           <a 
              onClick={handleDownload}
              className="block w-full py-4 bg-[#F97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
           >
             Start Free Trial
           </a>
           <p className="text-xs text-gray-400 mt-6 flex items-center justify-center gap-1">
              <Check size={12}/> 30-day money-back guarantee.
           </p>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION (Pre-footer) --- */}
      <section className="py-24 px-6 bg-white border-t border-gray-100 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Be the first to know</h2>
          <p className="text-gray-500 text-lg mb-8">
            Get the latest apps and deals. We hate spam as much as you do.
          </p>

          {/* Success State */}
          {subscribed ? (
            <div className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-2xl border border-green-100 animate-in fade-in zoom-in duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircle2 size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">You're on the list!</h3>
              <p className="text-gray-500">Thanks for subscribing.</p>
            </div>
          ) : (
            /* Form State */
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
            {/* Copyright */}
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
        .animate-typewriter {
          animation: typewriter 0.05s ease-out forwards;
        }
        @keyframes typewriter {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .tool-icon {
          filter: grayscale(100%) opacity(0.5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .tool-icon:hover {
          filter: grayscale(0%) opacity(1);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default ResoLanding;
