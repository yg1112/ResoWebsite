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
              100% Offline on Apple Silicon. Your voice data never leaves your Mac. Zero data egress. <strong className="text-gray-700">Verified by Apple. Sandboxed for your security.</strong>
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

      {/* FAQ SECTION */}
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
                <p className="text-gray-600 text-sm leading-relaxed">It's your choice. We offer a flexible Annual Plan ($29.99/year) for continuous updates, or a Lifetime License ($129.99) if you prefer to pay once and own it forever.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> Does it work offline?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">100%. All processing happens locally on your Apple Silicon chip. No data ever leaves your Mac.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> What is the refund policy?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Subscriptions purchased through the Mac App Store follow Apple's standard refund policy. You can request a refund through the App Store within the applicable period.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-orange-500"/> Can I cancel anytime?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Yes. You can cancel your subscription at any time through the Mac App Store settings. Your access continues until the end of the current billing period.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
