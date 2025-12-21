import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DemoSection from './components/DemoSection';
import ToolLogos from './components/ToolLogos';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 scroll-smooth overflow-x-hidden">
      <Navbar isScrolled={isScrolled} onNavClick={handleNavClick} />
      <HeroSection />
      
      {/* --- CINEMATIC DEMO --- */}
      <DemoSection />

      {/* --- HERO LOGOS --- */}
      <section className="px-4 pb-8 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Works seamlessly with</span>
          <div className="mt-4 flex items-center justify-center">
            <ToolLogos />
          </div>
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
}

export default App;
