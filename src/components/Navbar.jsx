import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X as XIcon, FileText, Map, BookOpen, KeyRound, ArrowUpRight } from 'lucide-react';
import ResoIcon from '../assets/ResoIcon_512.png';

const resourcesLinks = [
  {
    title: 'Build Journey',
    description: 'The story behind Reso—engineering decisions and lessons learned.',
    to: '/resources',
    hash: 'journey',
    icon: Map,
  },
  {
    title: 'Docs',
    description: 'Technical guide covering architecture and features.',
    to: '/docs',
    icon: BookOpen,
  },
  {
    title: 'Roadmap',
    description: 'What we are building next.',
    to: '/resources',
    hash: 'roadmap',
    icon: FileText,
  },
  {
    title: 'License Manager',
    description: 'Retrieve and manage your license key.',
    href: 'https://reso.dzgapp.com/retrieve.html',
    external: true,
    icon: KeyRound,
  },
];

const navLinks = [
  { label: 'Product', href: '/#features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Discover', to: '/discover' },
];

const Navbar = ({ isScrolled = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [desktopResourcesOpen, setDesktopResourcesOpen] = useState(false);
  const logoTriggerRef = useRef(null);
  const logoIconRef = useRef(null);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const isResourcesPage = location.pathname === '/resources' || location.pathname === '/docs';

  const closeDropdown = useCallback(() => {
    setDesktopResourcesOpen(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDesktopResourcesOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setDesktopResourcesOpen(false);
    }, 150);
  }, []);

  const handleLinkClick = useCallback((item, isMobile = false) => {
    if (isMobile) {
      setMobileResourcesOpen(false);
      setMobileMenuOpen(false);
    } else {
      closeDropdown();
    }

    if (item.to) {
      navigate(item.to);
      if (item.hash) {
        setTimeout(() => {
          const el = document.getElementById(item.hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [navigate, closeDropdown]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeDropdown();
    };
    if (desktopResourcesOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [desktopResourcesOpen, closeDropdown]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    if (desktopResourcesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [desktopResourcesOpen, closeDropdown]);

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

        <div className="hidden md:flex items-center gap-10 text-[15px] text-gray-600 dark:text-gray-300">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`transition-colors hover:text-gray-900 dark:hover:text-white ${
                  location.pathname === link.to ? 'text-gray-900 dark:text-white' : ''
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="transition-colors hover:text-gray-900 dark:hover:text-white">
                {link.label}
              </a>
            )
          )}

          {/* Resources Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 transition-colors hover:text-gray-900 dark:hover:text-white ${
                isResourcesPage ? 'text-gray-900 dark:text-white' : ''
              }`}
              onClick={() => setDesktopResourcesOpen((prev) => !prev)}
              aria-expanded={desktopResourcesOpen}
              aria-haspopup="true"
            >
              <span>Resources</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${desktopResourcesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full pt-3 -left-4 transition-all duration-200 ease-out ${
                desktopResourcesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="w-[320px] rounded-xl border border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#141414] shadow-xl shadow-black/8 dark:shadow-black/40 overflow-hidden">
                <div className="p-1.5">
                  {resourcesLinks.map((item) => {
                    const Icon = item.icon;

                    if (item.external) {
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                          onClick={closeDropdown}
                        >
                          <div className="mt-0.5 p-1.5 rounded-md bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-white/12 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                            <Icon size={16} strokeWidth={1.75} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[13px] font-medium text-gray-900 dark:text-gray-100">
                                {item.title}
                              </span>
                              <ArrowUpRight size={12} className="text-gray-400 dark:text-gray-500" />
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      );
                    }

                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => handleLinkClick(item)}
                        className="group w-full flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left"
                      >
                        <div className="mt-0.5 p-1.5 rounded-md bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-white/12 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                          <Icon size={16} strokeWidth={1.75} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[13px] font-medium text-gray-900 dark:text-gray-100 block">
                            {item.title}
                          </span>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://github.com/yg1112/reso-releases/releases/latest/download/Reso.dmg"
            download
            className="px-[18px] py-2 rounded-full bg-[#1f2017] dark:bg-white text-white dark:text-black font-medium text-[14px] leading-none hover:bg-black dark:hover:bg-gray-100 transition-all"
          >
            Download
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-900 dark:text-gray-100"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-black/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 px-6 py-4 space-y-2">
          <a href="/#features" className="block text-base py-2 text-gray-700 dark:text-gray-200">
            Product
          </a>
          <Link
            to="/pricing"
            className="block text-base py-2 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <button
            type="button"
            onClick={() => setMobileResourcesOpen((prev) => !prev)}
            className="w-full text-left text-base py-2 text-gray-700 dark:text-gray-200 inline-flex items-center justify-between"
          >
            <span>Resources</span>
            <ChevronDown size={16} className={`transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
          </button>

          {mobileResourcesOpen && (
            <div className="rounded-xl border border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.03] p-1.5 space-y-0.5">
              {resourcesLinks.map((item) => {
                const Icon = item.icon;

                if (item.external) {
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 active:bg-gray-100 dark:active:bg-white/5"
                      onClick={() => {
                        setMobileResourcesOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <div className="p-1.5 rounded-md bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400">
                        <Icon size={16} strokeWidth={1.75} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.title}</span>
                          <ArrowUpRight size={12} className="text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                      </div>
                    </a>
                  );
                }

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => handleLinkClick(item, true)}
                    className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 active:bg-gray-100 dark:active:bg-white/5 text-left"
                  >
                    <div className="p-1.5 rounded-md bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400">
                      <Icon size={16} strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100 block">{item.title}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

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
