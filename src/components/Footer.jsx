import React, { useState } from 'react';
import { Twitter, Mail, CheckCircle2, Shield, Check } from 'lucide-react';
import DownloadButton from './DownloadButton';

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
    window.open('https://reso.lemonsqueezy.com/checkout', '_blank');
  };

  return (
    <>
      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 px-6 border-t border-gray-200 bg-gray-50 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 mb-12">Start free, then pay only if you love it</p>
          
          <div className="flex justify-center">
            {/* Annual Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-10 hover:border-orange-500 hover:shadow-lg transition-all relative max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Plan</h3>
              <div className="flex items-baseline justify-center gap-1 my-6">
                <span className="text-5xl font-bold text-gray-900 tracking-tight">$29.99</span>
                <span className="text-gray-500 font-medium text-xl">/ year</span>
              </div>
              <ul className="text-left space-y-4 mb-8 text-gray-600">
                <li className="flex gap-3"><Check size={18} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span><strong>Full access</strong> to all features</span></li>
                <li className="flex gap-3"><Check size={18} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span><strong>Continuous updates</strong> & improvements</span></li>
                <li className="flex gap-3"><Check size={18} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span><strong>30-day money-back guarantee</strong> for Direct License purchases</span></li>
                <li className="flex gap-3"><Check size={18} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span><strong>Cancel anytime</strong> — no questions asked</span></li>
              </ul>
              <div className="flex justify-center">
                <button 
                  onClick={handleBuy}
                  className="w-full justify-center text-lg py-4 px-8 bg-black text-white rounded-2xl font-semibold text-base hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Subscribe Now
                </button>
              </div>
            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm text-gray-400 font-medium" title="Pending Review">
                <span className="text-black"></span>
                <span>Coming soon to Mac App Store</span>
              </span>
            </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-8 flex items-center justify-center gap-2">
            <Shield size={12}/> Secure billing via Paddle • Verified by Apple
          </p>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
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

      {/* FOOTER */}
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
    </>
  );
};

export default Footer;
