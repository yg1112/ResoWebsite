import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
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
    window.open('https://buy.stripe.com/00w7sKeoFfNQ5bAftF6AM00', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 scroll-smooth overflow-x-hidden">
      <Navbar isScrolled={isScrolled} onNavClick={handleNavClick} />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
