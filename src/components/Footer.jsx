import React, { useState } from 'react';
import { Twitter, Mail, CheckCircle2, Shield, Check, ArrowRight, Cpu, Zap, Lock, Wand2 } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

  const handleBuy = () => {
    window.open('https://buy.stripe.com/7sY14m2FX9ps7jIcht6AM01', '_blank');
  };

  return (
    <>
      {/* =========================================
          PRICING SECTION: The "Flow State" Pitch
         ========================================= */}
      <section id="pricing" className="relative py-32 px-6 overflow-hidden bg-[#FAFAFA] border-t border-gray-200">
        
        {/* 背景光晕：极淡，几乎不可见，只为了增加一点点空气感 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-gray-100 via-blue-50/10 to-orange-50/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          
          {/* 标题区域：改为用户视角的“心流体验” */}
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-tight">
              Type at the speed of thought.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              The optimized local client for macOS.
              <br className="hidden md:block"/>
              <span className="text-gray-900 font-medium">No clouds. No delays. Absolutely no subscriptions.</span>
            </p>
          </div>

          <div className="flex justify-center">
            
            {/* PRICING CARD: 纯净版 (去掉了顶部的光条和多余装饰) */}
            <div className="relative group w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-500 hover:shadow-[0_30px_80px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-2">
              
              <div className="p-10 md:p-12">
                
                {/* Header: 极简左对齐 */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-[0.2em]">
                    Lifetime License
                  </h3>
                  {/* 这里没有任何多余的标签，极其干净 */}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[4.5rem] leading-none font-bold text-gray-900 tracking-tighter">$29.99</span>
                </div>
                
                <p className="text-base text-gray-400 mb-12 font-medium">
                  One-time payment. Includes 1 year of updates.
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-gray-100 mb-12" />

                {/* Features List: 单句式，聚焦“爽快感” */}
                <ul className="space-y-8 mb-14">
                  
                  {/* Item 1: 速度 */}
                  <li className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center shadow-md shadow-gray-900/10">
                      <Zap size={22} className="text-white" />
                    </div>
                    <span className="text-gray-900 font-medium text-lg leading-snug">
                      Instant speed. Engineered for Apple Silicon.
                    </span>
                  </li>

                  {/* Item 2: 智能 */}
                  <li className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center border border-gray-200">
                      <Wand2 size={22} className="text-gray-900" />
                    </div>
                    <span className="text-gray-900 font-medium text-lg leading-snug">
                      Smart enough to understand your context.
                    </span>
                  </li>

                  {/* Item 3: 隐私 */}
                  <li className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center border border-gray-200">
                      <Lock size={22} className="text-gray-900" />
                    </div>
                    <span className="text-gray-900 font-medium text-lg leading-snug">
                      100% Offline. Zero data leaves your Mac.
                    </span>
                  </li>
                </ul>

                {/* CTA Button: 纯黑，极简，有力 */}
                <button
                  onClick={handleBuy}
                  className="group relative w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-gray-900 text-white font-semibold text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:scale-[1.01] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
                  <span className="relative z-10 flex items-center gap-2 tracking-wide">
                    Buy Now <ArrowRight size={18} className="opacity-70 group-hover:translate-x-1 transition-transform"/>
                  </span>
                </button>

                <div className="flex items-center justify-center gap-4 mt-8 opacity-60">
                   <div className="flex items-center gap-1.5 text-[11px] text-gray-500 uppercase tracking-widest font-semibold">
                      <Shield size={12} /> 30-Day Guarantee
                   </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section (Preserved) */}
      <section className="py-24 px-6 bg-white border-t border-gray-100 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 mb-6 text-gray-600">
            <Mail size={20} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Be the first to know</h2>
          <p className="text-gray-500 text-base mb-8">
            We'll inform you about new apps and deals, but no spam, we promise.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-full border border-green-100 animate-in fade-in zoom-in">
              <CheckCircle2 size={18} />
              <span className="font-medium">You're on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="relative max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Your e-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3.5 pr-32 rounded-full bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-[#007AFF] hover:bg-[#0051D5] text-white text-sm font-semibold rounded-full transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer Links (Preserved) */}
      <footer id="contact" className="py-12 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 font-medium">&copy; 2025 DZG STUDIO LLC.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
             <a href="https://x.com/DzgStudio" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
               <Twitter size={15} /> @DzgStudio
             </a>
             <a href="https://tally.so/r/obDo51" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
               <Mail size={15} /> Support
             </a>
             <a href="/privacy.html" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
             <a href="/terms.html" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;