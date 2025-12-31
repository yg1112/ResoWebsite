import React from 'react';
import { Check, Shield, Zap, Cpu, HelpCircle, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const handleBuy = () => {
    window.open('https://buy.stripe.com/7sY14m2FX9ps7jIcht6AM01', '_blank');
  };

  return (
    <section id="pricing" className="relative py-24 px-6 overflow-hidden bg-gray-50/50 border-t border-gray-200">
      
      {/* 背景装饰：模拟 M-Series 芯片的辉光 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        
        {/* 标题区域：主打“释放硬件潜能” */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Put your Neural Engine to work.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            You invested in Apple Silicon. Now use it. 
            <br className="hidden md:block"/>
            Get highly optimized, local intelligence that flies on your M-series chip.
          </p>
        </div>

        <div className="flex justify-center">
          
          {/* PRICING CARD */}
          <div className="relative group w-full max-w-[440px] bg-white rounded-[2rem] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
            
            {/* 顶部高光条 */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

            <div className="p-8 md:p-10">
              
              {/* Header: License Type */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                    Perpetual License
                  </h3>
                  {/* Tooltip hint regarding the CleanShot model */}
                  <div className="group/tooltip relative">
                    <HelpCircle size={14} className="text-gray-400 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-[10px] rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none text-center">
                      Own version 1.0 forever. Includes 1 year of updates. Renewal is optional.
                    </div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[3.5rem] leading-none font-bold text-gray-900 tracking-tighter">$29.99</span>
                <span className="text-base text-gray-500 font-medium ml-1">/ once</span>
              </div>
              <p className="text-sm text-gray-400 mb-8">
                Less than the cost of a dongle.
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-gray-100 mb-8" />

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center mt-0.5 border border-orange-100">
                    <Zap size={12} className="text-orange-600 fill-orange-600" />
                  </div>
                  <span className="text-gray-700 text-[15px] font-medium">
                    Engineered for instant speed
                  </span>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 border border-blue-100">
                    <Cpu size={12} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-[15px]">
                    100% Local Neural Engine processing
                  </span>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5 border border-green-100">
                    <Check size={12} className="text-green-600 stroke-[3]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-700 text-[15px]">
                      Keep the app forever
                    </span>
                    <span className="text-xs text-gray-400 mt-0.5">
                      + 1 year of updates included
                    </span>
                  </div>
                </li>
              </ul>

              {/* CTA Button */}
              <button
                onClick={handleBuy}
                className="group relative w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#111] text-white font-medium text-[15px] shadow-xl shadow-gray-900/10 hover:shadow-2xl hover:shadow-gray-900/20 hover:scale-[1.02] transition-all duration-200 overflow-hidden uppercase"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
                <span className="relative z-10 flex items-center gap-2">
                  Buy Now <ArrowRight size={16} className="opacity-50 group-hover:translate-x-0.5 transition-transform"/>
                </span>
              </button>

              <p className="text-[11px] text-gray-400 text-center mt-5">
                30-day money-back guarantee • Secure checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;