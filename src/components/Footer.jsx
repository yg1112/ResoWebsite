import React, { useState } from 'react';
import { Twitter, Mail, CheckCircle2, Shield, Zap, Cpu, Lock, ArrowRight } from 'lucide-react';
// import DownloadButton from './DownloadButton';

// App Icon (保持不变)
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
      {/* PRICING SECTION */}
      <section id="pricing" className="py-10 px-6 border-t border-gray-200 bg-gray-50 relative z-10 text-center font-sans">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Headings */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Type at the speed of thought.
          </h2>
          <p className="text-lg text-gray-500 mb-5 leading-relaxed max-w-2xl mx-auto">
            The optimized local client for macOS.<br className="hidden md:block"/>
            <span className="text-gray-900 font-medium">No clouds. No delays. Absolutely no subscriptions.</span>
          </p>
          
          <div className="flex justify-center">
            {/* Pricing Card */}
            <div className="bg-white border border-gray-200 rounded-[2rem] p-10 md:p-12 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 relative max-w-sm w-full group">
              
              {/* Card Header */}
              <div className="mb-3 text-left">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.25em] mb-2">
                  Lifetime License
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">$29.99</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  One-time payment. Includes 1 year of updates.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-6"></div>

              {/* Features List */}
              <ul className="text-left space-y-2 mb-8">
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-orange-50 rounded-lg shrink-0 mt-0.5">
                    <Zap size={20} className="text-orange-600" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium leading-relaxed">
                    Instant speed. Engineered for Apple Silicon.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0 mt-0.5">
                    <Cpu size={20} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium leading-relaxed">
                    Smart enough to understand your context.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-green-50 rounded-lg shrink-0 mt-0.5">
                    <Lock size={20} className="text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium leading-relaxed">
                    100% Offline. Zero data leaves your Mac.
                  </span>
                </li>
              </ul>

              {/* Action Button */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleBuy}
                  className="w-full group flex items-center justify-center gap-2 text-lg py-4 px-8 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Buy Now</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  30-day money-back guarantee
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-16 px-6 bg-white border-t border-gray-100 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Be the first to know</h2>
          <p className="text-gray-500 text-sm mb-6">
            Get the latest apps and deals. We hate spam as much as you do.
          </p>

          {subscribed ? (
            <div className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-2xl border border-green-100 animate-in fade-in zoom-in duration-300">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 size={20} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">You're on the list!</h3>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 justify-center max-w-sm mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-8 px-6 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 opacity-50 grayscale">
              <AppIcon className="w-full h-full rounded-[4px]" />
            </div>
            <span>&copy; 2025 DZG STUDIO LLC.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy.html" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="/terms.html" className="hover:text-gray-900 transition-colors">Terms</a>
            <div className="w-px h-3 bg-gray-300"></div>
            <a href="https://x.com/DzgStudio" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <Twitter size={14} />
              <span>@DzgStudio</span>
            </a>
            <a href="https://tally.so/r/obDo51" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <Mail size={14} />
              <span>Support</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;