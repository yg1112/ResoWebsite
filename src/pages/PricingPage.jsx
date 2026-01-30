import React, { useState } from 'react';
import { Zap, Cpu, Lock, ArrowRight, ChevronDown, Download } from 'lucide-react';

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleBuy = () => {
    window.open('https://reso.lemonsqueezy.com/checkout/buy/80d0e623-d94c-4a19-a4c9-afee9451a146', '_blank');
  };

  const faqs = [
    {
      q: "Can I use it on multiple Macs?",
      a: "For Direct License purchases, your key is valid for activation on 2 personal Macs (e.g., your desktop and laptop). For App Store downloads, you can use it on any Mac signed in with your personal Apple ID."
    },
    {
      q: "Is this a subscription?",
      a: "No! Reso is a one-time purchase. Pay $29.99 once and own it forever. You get lifetime access to the app with 1 year of free updates included."
    },
    {
      q: "Does it work offline?",
      a: "Yes! All voice processing happens locally on your Apple Silicon chip. Your recordings and transcriptions stay on your Mac."
    },
    {
      q: "What is the refund policy?",
      a: "For Direct License purchases, we offer a 30-day money-back guarantee. Just email us for a full refund, no questions asked. For purchases via the Mac App Store, refunds are subject to Apple's policy."
    },
    {
      q: "What happens after 1 year of updates?",
      a: "You keep using the app forever. After the first year, you can choose to extend updates for another year at a discounted rate, but it's completely optional. Your license never expires."
    }
  ];

  return (
    <main className="pt-20 bg-[#FAFAF9] min-h-screen">
      {/* PRICING SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium text-gray-900 mb-4">Unlock what your Mac already knows.</h1>
            <p className="text-base text-gray-500">Pay once. Own forever.</p>
          </div>

          {/* Pricing Card */}
          <div className="flex justify-center mb-24">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 max-w-sm w-full">
              {/* Card Header */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                  Lifetime License
                </div>
                <div className="flex items-baseline mb-3">
                  <span className="text-4xl font-medium text-gray-900">$29</span>
                  <span className="text-2xl text-gray-900">.99</span>
                </div>
                <p className="text-sm text-gray-500">
                  One-time purchase. No subscription.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-6"></div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 items-start">
                  <div className="p-1.5 bg-gray-100 rounded-lg shrink-0 mt-0.5">
                    <Zap size={14} className="text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-600">Instant speed on Apple Silicon</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="p-1.5 bg-gray-100 rounded-lg shrink-0 mt-0.5">
                    <Cpu size={14} className="text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-600">Context-aware transcription</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="p-1.5 bg-gray-100 rounded-lg shrink-0 mt-0.5">
                    <Lock size={14} className="text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-600">100% offline. Zero data leaves your Mac.</span>
                </li>
              </ul>

              {/* Action Button */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleBuy}
                  className="w-full group flex items-center justify-center gap-2 text-sm py-3 px-6 bg-[#1a1a1a] text-white rounded-lg font-medium hover:bg-[#2a2a2a] transition-all"
                >
                  <span>Purchase License</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-gray-400 text-center">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12">
              <h2 className="text-2xl font-medium text-gray-900">
                Questions & Answers
              </h2>
              <div className="space-y-0">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-t border-gray-200">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full py-5 flex items-center justify-between text-left group"
                    >
                      <span className="text-sm text-gray-900 group-hover:text-gray-600 transition-colors pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="pb-5 pr-8">
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <div className="border-t border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED CTA */}
      <section className="py-24 px-6 bg-[#FAFAF9]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-medium text-gray-900 mb-8">
            Get started with Reso.
          </h2>
          <a
            href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
            download
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white rounded-lg font-medium text-sm hover:bg-[#2a2a2a] transition-all px-6 py-3"
          >
            <Download size={16} />
            <span>Download for macOS</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
