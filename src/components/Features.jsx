import React from 'react';
import {
  CheckCircle2,
  Lock,
  Zap,
  Brain,
  Activity,
  Check,
} from 'lucide-react';

// Light Mode Mechanical Key
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
        ${active ? 'text-orange-500 scale-95' : 'text-gray-600 dark:text-gray-400'}
      `}>
        {label}
      </span>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-32 px-6">
      {/* 大幅增加max-w，并使用巨大的垂直间距 */}
      <div className="max-w-4xl mx-auto space-y-40">
        
        {/* Pillar 1: Deep Context - 左图右文 */}
        <div className="flex flex-col md:flex-row items-center gap-24">
          {/* 左侧：可视化 */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_80px_-20px_rgba(255,255,255,0.05)] w-full max-w-md flex flex-col gap-4 h-72 items-center justify-center overflow-hidden">
              <div className="absolute -inset-24 bg-gradient-to-r from-blue-100 to-brand-light opacity-20 blur-3xl -z-10"></div>
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="bg-red-50 rounded-xl p-3 shadow-sm flex flex-col gap-2">
                  <div className="text-[9px] uppercase font-bold text-red-400 tracking-wider opacity-50">Others</div>
                  <div className="flex flex-col gap-1.5">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-red-50 text-red-600 line-through font-mono text-xs">app dot tea sx</span>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-red-50 text-red-600 line-through font-mono text-xs">quarterly e bit da</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl border-l-4 border-green-200 p-3 shadow-lg flex flex-col gap-2 items-start">
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-green-600 tracking-wider"><CheckCircle2 size={12} className="text-green-600"/> <span>Reso</span></div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-mono text-xs">App.tsx</div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-mono text-xs">Quarterly EBITDA</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右侧：文字内容 */}
          <div className="flex-1 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">
              01. Deep Context
            </div>
            <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100 leading-snug mb-4">It doesn't just listen. It understands.</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">Don't train the model—just steer it. Tell Reso "I'm coding in Swift" or "Q3 Report," and it instantly adapts to your jargon and syntax.</p>
          </div>
        </div>

        {/* Pillar 2: Instant Trigger - 右图左文 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-24">
          {/* 右侧：可视化 */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_80px_-20px_rgba(255,255,255,0.05)] w-full max-w-md flex items-center justify-center h-72">
              <MechanicalKey label="⌥" active={true} />
              <span className="mx-4 text-2xl text-gray-300 dark:text-gray-600">+</span>
              <MechanicalKey label="⌥" active={true} />
            </div>
          </div>
          
          {/* 左侧：文字内容 */}
          <div className="flex-1 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">
              02. Instant Access
            </div>
            <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100 leading-snug mb-4">Invisible until needed.</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Double-tap <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono text-sm text-gray-800 dark:text-gray-200">Option</code> (⌥ ⌥) to summon Reso instantly. No dock icon cluttering your space.
            </p>
          </div>
        </div>

        {/* Pillar 3: Direct Input - 左图右文 */}
        <div className="flex flex-col md:flex-row items-center gap-24">
          {/* 左侧：可视化 */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_80px_-20px_rgba(255,255,255,0.05)] w-full max-w-md flex items-center justify-center h-72">
              <div className="text-3xl font-serif text-gray-800 dark:text-gray-200 flex items-center">
                Hello World
                <div className="w-0.5 h-8 bg-orange-500 ml-1 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* 右侧：文字内容 */}
          <div className="flex-1 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">
              03. Direct Input
            </div>
            <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100 leading-snug mb-4">Direct Insertion.</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Text flows directly into your cursor, no copy-paste needed. It acts like a ghost keyboard typing for you.
            </p>
          </div>
        </div>

        {/* Pillar 4: The Full-Stack Engine - 右图左文 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-24">
          {/* 右侧：可视化 */}
          <div className="flex-1 flex justify-center md:justify-end">
            {/* CARD CONTAINER */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_80px_-20px_rgba(255,255,255,0.05)] flex items-center justify-center relative overflow-hidden w-full max-w-md h-80 group">
              
              {/* Subtle Tech Grid Background */}
              <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(#5423e7 0.5px, transparent 0.5px), linear-gradient(90deg, #5423e7 0.5px, transparent 0.5px)', backgroundSize: '20px 20px'}}></div>
              
              {/* THE ENGINE STACK VISUALIZATION */}
              <div className="relative z-10 w-64 flex flex-col gap-2">
                
                {/* Layer 3: Cognitive (Top) */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between shadow-sm group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Brain size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 dark:text-gray-100">Cognitive Layer</div>
                    </div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                </div>

                {/* Connecting Lines */}
                <div className="h-4 flex justify-center gap-1">
                  <div className="w-px h-full bg-indigo-200"></div>
                  <div className="w-px h-full bg-indigo-200"></div>
                </div>

                {/* Layer 2: Compute (Middle) */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between shadow-sm group-hover:scale-105 transition-transform duration-500 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white shadow-lg shadow-brand-light">
                      <Zap size={16} fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 dark:text-gray-100">Metal™ Core</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-brand-primary bg-brand-light px-1.5 py-0.5 rounded">GPU</div>
                </div>

                {/* Connecting Lines */}
                <div className="h-4 flex justify-center gap-1">
                  <div className="w-px h-full bg-indigo-200"></div>
                  <div className="w-px h-full bg-indigo-200"></div>
                </div>

                {/* Layer 1: Acoustic (Bottom) */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between shadow-sm group-hover:translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Activity size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 dark:text-gray-100">Acoustic Prism™</div>
                    </div>
                  </div>
                  <Check size={12} className="text-blue-500" />
                </div>

                {/* Scanning Light Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent h-full w-full -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
              </div>

            </div>
          </div>
          
          {/* 左侧：文字内容 */}
          <div className="flex-1 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">
              04. The Architecture
            </div>
            <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100 leading-snug mb-4">Born for the silicon.</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We bypassed standard layers to build directly on the metal. By unifying the Neural Engine with our custom core, Reso feels less like an app and more like a natural extension of your Mac.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed italic border-l-2 border-gray-200 pl-4">
              Why rent intelligence? Your Mac is already a genius. Stop paying monthly for cloud AI—Reso unlocks the Neural Engine you already paid for.
            </p>
          </div>
        </div>

        {/* Pillar 5: Local Privacy - 左图右文 */}
        <div className="flex flex-col md:flex-row items-center gap-24">
          {/* 左侧：可视化 */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="bg-gray-900 rounded-3xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)] flex items-center justify-center relative overflow-hidden w-full max-w-md h-80">
              {/* Dark Gradient BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#111] to-black"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_var(--tw-gradient-stops))] from-green-900/40 to-transparent"></div>
              
              {/* The Chip/Vault */}
              <div className="relative z-10 w-40 h-40 bg-[#1A1A1A] rounded-[2rem] shadow-2xl flex flex-col items-center justify-center gap-3 group">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-green-500/5 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Lock Icon */}
                <div className="p-4 bg-black/50 rounded-2xl shadow-inner">
                  <Lock size={32} className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                </div>
                
                {/* Status */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-green-900/30 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest opacity-50">Secure Core</span>
                </div>
              </div>

              {/* Data Particles */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-white/20 rounded-full blur-[1px]"></div>
              <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-white/10 rounded-full blur-[1px]"></div>
            </div>
          </div>
          
          {/* 右侧：文字内容 */}
          <div className="flex-1 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">
              05. Privacy
            </div>
            <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100 leading-snug mb-4">Sovereign Data.</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              Your thoughts are your own. No cloud processing, ever. <span className="text-gray-900 dark:text-gray-100">Verified by Apple. Sandboxed for your security.</span>
            </p>
            <p className="text-sm text-gray-400 italic">
              Optional: You can choose to share anonymous usage statistics to help us improve the app.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
