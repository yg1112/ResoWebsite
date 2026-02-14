import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X as XIcon, ArrowUpRight } from 'lucide-react';
import ResoIcon from '../assets/ResoIcon_512.png';

const navLinks = [
  { label: 'Product', href: '/#features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Discover', to: '/discover' },
  { label: 'Docs', to: '/docs' },
  { label: 'License Manager', href: 'https://reso.dzgapp.com/retrieve.html', external: true },
];

const Navbar = ({ isScrolled = false }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoTriggerRef = useRef(null);
  const logoIconRef = useRef(null);

  // Logo rotation animation
  useEffect(() => {
    const trigger = logoTriggerRef.current;
    const icon = logoIconRef.current;
    if (!trigger || !icon) return;

    let frameId = 0;
    let isRunning = false;
    let hovering = false;
    let angle = 0;
    let speed = 0;
    let lastTime = performance.now();
    const targetSpeedDegPerSec = 185;

    const tick = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const desiredSpeed = hovering ? targetSpeedDegPerSec : 0;
      const damping = hovering ? 5.2 : 4.0;
      speed += (desiredSpeed - speed) * Math.min(damping * dt, 1);

      angle = (angle + speed * dt) % 360;
      icon.style.transform = `rotate(${angle.toFixed(3)}deg)`;

      if (hovering || speed > 0.25) {
        frameId = requestAnimationFrame(tick);
      } else {
        isRunning = false;
        frameId = 0;
        speed = 0;
        angle = 0;
        icon.style.transform = 'rotate(0deg)';
      }
    };

    const startLoop = () => {
      if (isRunning) return;
      isRunning = true;
      lastTime = performance.now();
      frameId = requestAnimationFrame(tick);
    };

    const handleEnter = () => {
      hovering = true;
      startLoop();
    };

    const handleLeave = () => {
      hovering = false;
      startLoop();
    };

    trigger.addEventListener('pointerenter', handleEnter);
    trigger.addEventListener('pointerleave', handleLeave);

    return () => {
      trigger.removeEventListener('pointerenter', handleEnter);
      trigger.removeEventListener('pointerleave', handleLeave);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      icon.style.transform = 'rotate(0deg)';
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 dark:bg-black/86 backdrop-blur-xl border-b border-black/8 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" ref={logoTriggerRef} className="flex items-center gap-2.5">
          <div className="w-8 h-8">
            <img ref={logoIconRef} src={ResoIcon} alt="Reso" className="brand-logo-icon w-full h-full rounded-lg" />
          </div>
          <span className="text-gray-900 dark:text-gray-100 font-medium text-lg tracking-tight">Reso</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-[15px] text-gray-600 dark:text-gray-300">
          {navLinks.map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="text-gray-400" />
                </a>
              );
            }
            if (link.to) {
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`transition-colors hover:text-gray-900 dark:hover:text-white ${
                    location.pathname === link.to ? 'text-gray-900 dark:text-white' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a key={link.label} href={link.href} className="transition-colors hover:text-gray-900 dark:hover:text-white">
                {link.label}
              </a>
            );
          })}

          <a
            href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
            download
            className="px-[18px] py-2 rounded-full bg-[#1f2017] dark:bg-white text-white dark:text-black font-medium text-[14px] leading-none hover:bg-black dark:hover:bg-gray-100 transition-all"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-900 dark:text-gray-100"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-black/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 px-6 py-4 space-y-2">
          {navLinks.map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-2 text-base text-gray-700 dark:text-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} className="text-gray-400" />
                </a>
              );
            }
            if (link.to) {
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-base py-2 text-gray-700 dark:text-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className="block text-base py-2 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
            download
            className="block w-full text-center mt-2 px-5 py-2 rounded-full bg-[#1f2017] dark:bg-white text-white dark:text-black text-sm font-medium"
          >
            Download
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
