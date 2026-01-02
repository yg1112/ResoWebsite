import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Lock,
  Zap,
  Brain,
  Workflow,
  FileText,
  Hand,
  Activity,
  HelpCircle,
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
        ${active ? 'text-orange-500 scale-95' : 'text-gray-600'}
      `}>
        {label}
      </span>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[79rem] mx-auto space-y-24">
        
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
            <div className="relative bg-white rounded-3xl p-10 border border-gray-200 shadow-xl w-full max-w-sm flex flex-col gap-4 h-64 items-center justify-center overflow-hidden">
              <div className="absolute -inset-24 bg-gradient-to-r from-blue-100 to-purple-100 opacity-20 blur-3xl -z-10"></div>
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="bg-red-50 rounded-xl border border-red-100 p-3 shadow-sm flex flex-col gap-2">
                  <div className="text-[9px] uppercase font-bold text-red-400 tracking-wider">Others</div>
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

        {/* Pillar 3: Direct Input */}
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

        {/* Pillar 4: The Full-Stack Engine */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider">
              04. The Architecture
            </div>
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">Born for the silicon.</h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              We bypassed standard layers to build directly on the metal. By unifying the Neural Engine with our custom core, Reso feels less like an app and more like a natural extension of your Mac.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            {/* CARD CONTAINER */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl flex items-center justify-center relative overflow-hidden w-full max-w-sm h-80 group">
              
              {/* Subtle Tech Grid Background */}
              <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(#4f46e5 0.5px, transparent 0.5px), linear-gradient(90deg, #4f46e5 0.5px, transparent 0.5px)', backgroundSize: '20px 20px'}}></div>
              
              {/* THE ENGINE STACK VISUALIZATION */}
              <div className="relative z-10 w-64 flex flex-col gap-2">
                
                {/* Layer 3: Cognitive (Top) */}
                <div className="bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-xl p-3 flex items-center justify-between shadow-sm group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Brain size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Cognitive Layer</div>
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
                <div className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-xl p-3 flex items-center justify-between shadow-sm group-hover:scale-105 transition-transform duration-500 z-10 ring-1 ring-purple-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-200">
                      <Zap size={16} fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Metal™ Core</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">GPU</div>
                </div>

                {/* Connecting Lines */}
                <div className="h-4 flex justify-center gap-1">
                  <div className="w-px h-full bg-indigo-200"></div>
                  <div className="w-px h-full bg-indigo-200"></div>
                </div>

                {/* Layer 1: Acoustic (Bottom) */}
                <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-3 flex items-center justify-between shadow-sm group-hover:translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Activity size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Acoustic Prism™</div>
                    </div>
                  </div>
                  <Check size={12} className="text-blue-500" />
                </div>

                {/* Scanning Light Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent h-full w-full -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
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
              All voice processing happens locally on Apple Silicon. Your recordings never leave your Mac. <strong className="text-gray-700">Verified by Apple. Sandboxed for your security.</strong>
            </p>
            <p className="text-xs text-gray-400 italic">
              Optional: You can choose to share anonymous usage statistics to help us improve the app.
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

      {/* STATS SECTION */}
      <section id="stats" className="py-24 px-6 border-t border-gray-100 bg-white relative z-10 mt-24">
        <div className="max-w-[79rem] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Backed by Science.</h2>
            <p className="text-gray-500 text-lg">Why voice is the future of work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3.0x Faster</h3>
              <p className="text-gray-500 text-sm mb-6">"Speech input is 3.0x faster than standard keyboard entry for English & Mandarin."</p>
              <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wide font-medium">
                <Brain size={12} /> Stanford Research
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Workflow size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Cognitive Flow</h3>
              <p className="text-gray-500 text-sm mb-6">"Dictation frees up working memory, allowing for better complex thinking and flow."</p>
              <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wide font-medium">
                <FileText size={12} /> Journal of Writing Research
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
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

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 px-6 border-t border-gray-100 bg-gray-50 relative z-10">
        <div className="max-w-[79rem] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> Can I use it on multiple Macs?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">For Direct License purchases, your key is valid for activation on 2 personal Macs (e.g., your desktop and laptop).<br/><br/>For App Store downloads, you can use it on any Mac signed in with your personal Apple ID.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> Is this a subscription?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">No! Reso is a one-time purchase. Pay $29.99 once and own it forever. You get lifetime access to the app with 1 year of free updates included.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> Does it work offline?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Yes! All voice processing happens locally on your Apple Silicon chip. Your recordings and transcriptions stay on your Mac. <span className="text-gray-500 italic">You may optionally share anonymous usage stats to help us improve.</span></p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> What is the refund policy?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">For Direct License purchases, we offer a 30-day money-back guarantee. Just email us for a full refund, no questions asked.<br/><br/>For purchases via the Mac App Store, refunds are subject to Apple's policy and must be requested through Apple.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> What happens after 1 year of updates?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">You keep using the app forever. After the first year, you can choose to extend updates for another year at a discounted rate, but it's completely optional. Your license never expires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
