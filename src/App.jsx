import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Shield, 
  Download, 
  Menu, 
  X as XIcon, 
  Mic,
  WifiOff, 
  Cpu,
  ArrowRight,
  Twitter,
  Command,
  TextCursor,
  Send,
  Keyboard, 
  Zap,
  Globe, 
  Code,
  Mail 
} from 'lucide-react';

// --- Internal Asset Generation ---
// Fallback SVG if image is missing
const generateFallbackIcon = () => {
  const svgString = `
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="30" fill="url(#paint0_linear)"/>
      <path d="M38 64.01L38 64" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M38 54V74" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M55.3333 44V84" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M72.6667 34V94" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M90 49V79" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FB923C"/> <!-- Orange-400 -->
          <stop offset="1" stop-color="#EA580C"/> <!-- Orange-600 -->
        </linearGradient>
      </defs>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

const ResoLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [iconSrc, setIconSrc] = useState('app-icon.png');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image Error Handler
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = generateFallbackIcon();
  };

  // --- ANALYTICS HANDLER ---
  const handleDownload = () => {
    console.log("Tracking download event...");
    // GA4 Event Trigger
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'file_download', {
        'file_name': 'Reso-1.0.dmg',
        'file_extension': 'dmg'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30 scroll-smooth overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1C1C1E]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 font-semibold text-xl tracking-tight">
            {/* Real App Icon - Navbar */}
            <div className="w-10 h-10 shadow-lg shadow-orange-500/10 transition-transform hover:scale-105">
              <img 
                src={iconSrc} 
                alt="Reso App Icon" 
                className="w-full h-full object-contain rounded-[10px]" 
                onError={handleImageError}
              />
            </div>
            <span>Reso</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
            <a href="#design" className="hover:text-white transition-colors">Design</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            {/* Navbar Download button */}
            <a 
              href="#download" 
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Download size={16} />
              Download
            </a>
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg text-gray-300">
            <a href="#design" onClick={() => setMobileMenuOpen(false)}>Design</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)} className="text-white">Download</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Capture thought.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400">
              Instantly.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            One hotkey. Speak. Done.
            <br />
            It types directly into your active app, then disappears.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#design" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5">
              See the Flow
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* DESIGN SECTION */}
      <section id="design" className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-4xl font-bold mb-4">Fluent in every language.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              English, Mandarin, Japanese, or Python code. <br />
              Mix them freely. Reso understands the context and transcribes perfectly.
            </p>
          </div>

          {/* 1. THE FLOW INTERFACE VISUAL */}
          <div className="mb-32 relative h-[600px] flex flex-col items-center justify-center">
             
             {/* Abstract Background - Orange Glow */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-900/10 to-red-900/5 rounded-full blur-[100px] -z-10" />

             {/* The Flow Container */}
             <div className="relative z-20 w-full max-w-lg mx-auto h-full flex flex-col items-center justify-center">

                {/* --- LAYER 1: FALLING LANGUAGE PARTICLES (INPUT) --- */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none mask-image-gradient">
                    {/* Left Column - English/Code */}
                    <div className="absolute left-[20%] animate-[fall_8s_linear_infinite] opacity-40">
                        <div className="flex flex-col gap-16">
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-orange-200/50 backdrop-blur-sm border border-orange-500/10">function main()</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-orange-200/50 backdrop-blur-sm border border-orange-500/10">Hello World</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-orange-200/50 backdrop-blur-sm border border-orange-500/10">Variable</span>
                        </div>
                    </div>
                    {/* Center Column - Mixed */}
                    <div className="absolute left-[50%] transform -translate-x-1/2 animate-[fall_6s_linear_infinite] opacity-60 top-[-50px]">
                        <div className="flex flex-col gap-20">
                            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 animate-pulse">
                                <Mic size={20} className="text-orange-400" />
                            </div>
                            <div className="w-8 h-20 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent rounded-full blur-md"></div>
                        </div>
                    </div>
                    {/* Right Column - Asian Languages */}
                    <div className="absolute right-[20%] animate-[fall_9s_linear_infinite] opacity-40 top-[-100px]">
                        <div className="flex flex-col gap-24">
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-orange-200/50 backdrop-blur-sm border border-orange-500/10">你好</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-orange-200/50 backdrop-blur-sm border border-orange-500/10">こんにちは</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-orange-200/50 backdrop-blur-sm border border-orange-500/10">안녕하세요</span>
                        </div>
                    </div>
                </div>

                {/* --- LAYER 2: THE WINDOW (PROCESSOR) --- */}
                {/* The Lens that transforms the particles */}
                <div className="w-[360px] bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col gap-6 relative z-10 animate-[float_6s_ease-in-out_infinite]">
                   
                   {/* Scanning Beam Effect inside the window */}
                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.5)] animate-[scan_3s_ease-in-out_infinite]"></div>

                   {/* Header */}
                   <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                         {/* Real App Icon - Flow Window */}
                         <div className="w-8 h-8 shadow-lg shadow-orange-500/20">
                            <img 
                                src={iconSrc}
                                alt="Reso App Icon" 
                                className="w-full h-full object-contain rounded-[8px]" 
                                onError={handleImageError}
                            />
                         </div>
                         <div>
                            <div className="text-sm font-semibold text-gray-200">Reso</div>
                            <div className="text-[10px] text-gray-500">Local Neural Engine</div>
                         </div>
                      </div>
                      <div className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded-md flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                         <span className="text-[10px] text-orange-400 font-medium uppercase tracking-wide">Processing</span>
                      </div>
                   </div>

                   {/* Visualization of "Passing Through" */}
                   <div className="h-24 bg-black/20 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                      {/* Background grid lines moving */}
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #f97316 25%, #f97316 26%, transparent 27%, transparent 74%, #f97316 75%, #f97316 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #f97316 25%, #f97316 26%, transparent 27%, transparent 74%, #f97316 75%, #f97316 76%, transparent 77%, transparent)', backgroundSize: '30px 30px' }}></div>
                      
                      {/* Active Waveform */}
                      <div className="flex items-center gap-1">
                          {[...Array(20)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-1 bg-gradient-to-t from-orange-600 to-orange-400 rounded-full animate-[wave_1s_ease-in-out_infinite]"
                              style={{ 
                                height: `${Math.random() * 40 + 10}px`,
                                animationDelay: `${i * 0.05}s`,
                                opacity: Math.random() * 0.5 + 0.5
                              }} 
                            />
                          ))}
                      </div>
                   </div>
                </div>

                {/* --- LAYER 3: THE OUTPUT STREAM --- */}
                <div className="relative h-16 w-[2px] bg-gradient-to-b from-orange-500/30 to-transparent">
                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500/20 blur-md rounded-full animate-[drop_1s_linear_infinite]"></div>
                </div>

                {/* --- LAYER 4: THE TYPING RESULT --- */}
                <div className="w-[420px] bg-[#050505]/95 backdrop-blur-xl rounded-xl p-5 border border-orange-500/30 flex items-start gap-4 shadow-2xl shadow-orange-500/20 relative z-20">
                      <div className="pt-1">
                          <div className="p-2 bg-orange-500/10 rounded-lg">
                             <TextCursor size={18} className="text-orange-400" />
                          </div>
                      </div>
                      <div className="space-y-1 min-w-0 flex-1">
                         <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-orange-500 font-bold uppercase tracking-wider">Direct Input • Active App</span>
                            <div className="flex gap-2 text-gray-500">
                                <Globe size={12} />
                                <Code size={12} />
                            </div>
                         </div>
                         {/* Typing Animation Text - Updated for Elegant Multilingual Example */}
                         <div className="text-sm text-gray-200 font-mono leading-relaxed relative">
                            <span className="opacity-60">我们的设计哲学遵循 </span>
                            <span className="text-orange-300">Dieter Rams</span>
                            <span> 的原则：</span>
                            <br />
                            <span className="text-orange-300 italic">"Less, but better"</span>
                            <span className="opacity-60"> (更少，但更好)。</span>
                            
                            {/* Blinking Cursor */}
                            <span className="absolute bottom-1 right-2 w-2 h-4 bg-orange-500 animate-pulse"></span>
                         </div>
                      </div>
                </div>

                {/* Security Perimeter Ring */}
                <div className="absolute inset-0 -m-16 border border-white/5 rounded-[4rem] -z-10 flex items-center justify-center pointer-events-none">
                   <div className="absolute top-0 bg-[#080808] px-3 -mt-3 text-[10px] text-gray-600 font-mono tracking-wider uppercase flex items-center gap-2">
                      <WifiOff size={10} /> Local Sandbox Environment
                   </div>
                </div>
                
                {/* Floating Tech Specs */}
                <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 bg-[#1C1C1E] border border-white/10 px-3 py-2 rounded-lg shadow-lg flex flex-col gap-1 animate-[float_5s_ease-in-out_infinite_1s]">
                   <div className="flex items-center gap-2 text-[10px] text-gray-400">
                      <Shield size={10} /> No Cloud
                   </div>
                   <div className="w-full h-[1px] bg-white/5"></div>
                   <div className="flex items-center gap-2 text-[10px] text-orange-400">
                      <Zap size={10} /> 12ms Latency
                   </div>
                </div>

             </div>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* 1. Seamless Flow */}
            <div className="p-8 rounded-3xl bg-[#151515] border border-white/5 hover:border-orange-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Keyboard className="text-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seamless Flow</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trigger with a hotkey. Speak. Reso types the result directly into your active text field. Zero copy-pasting required.
              </p>
            </div>

            {/* 2. Context Priming */}
            <div className="p-8 rounded-3xl bg-[#151515] border border-white/5 hover:border-blue-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Brain className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Context Priming</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                It knows "Jira" isn't "Jeera". By learning from your hints, Reso understands your jargon before you even say it.
              </p>
            </div>

            {/* 3. Zero Telemetry */}
            <div className="p-8 rounded-3xl bg-[#151515] border border-white/5 hover:border-purple-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                <Shield className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Telemetry</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We don't know what you say. We don't want to know. There is no server. Your thoughts stay entirely on your machine.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION - UPDATED with Two Side-by-Side Boxes */}
      <section id="contact" className="py-24 px-6 relative z-10 bg-[#0a0a0a] border-t border-white/5">
         <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-gray-400">
               Direct access to the builder. No marketing team.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center pt-4">
               {/* Twitter Box */}
               <a href="https://x.com/DzgStudio" target="_blank" rel="noreferrer" className="block w-full group">
                  <div className="p-6 bg-[#1C1C1E] rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-[#252528] transition-all flex items-center justify-between h-full">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
                           <Twitter className="text-white w-6 h-6 fill-current" />
                        </div>
                        <div className="text-left">
                           <div className="text-white font-semibold">@DzgStudio</div>
                           <div className="text-sm text-gray-500 group-hover:text-orange-400 transition-colors">On X (Twitter)</div>
                        </div>
                     </div>
                     <ArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
               </a>

               {/* Email Box */}
               <a href="mailto:dev@dzgapp.com" className="block w-full group">
                  <div className="p-6 bg-[#1C1C1E] rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-[#252528] transition-all flex items-center justify-between h-full">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
                           <Mail className="text-white w-6 h-6" />
                        </div>
                        <div className="text-left">
                           <div className="text-white font-semibold">dev@dzgapp.com</div>
                           <div className="text-sm text-gray-500 group-hover:text-orange-400 transition-colors">Email Us</div>
                        </div>
                     </div>
                     <ArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
               </a>
            </div>
         </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section id="download" className="py-32 px-6 text-center bg-[#050505] border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <h2 className="text-4xl font-bold">Get Reso 1.0</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Simple. Local. Fast.
            <br />
            <span className="text-sm text-gray-500">
              macOS 12+ • Apple Silicon Only
            </span>
          </p>

          <div className="pt-8">
            <a 
              href="/Reso-1.0.dmg" 
              download 
              onClick={handleDownload}
              className="px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-transform hover:scale-105 shadow-xl shadow-white/10 flex items-center justify-center gap-3 mx-auto"
            >
              <Download size={20} />
              Download
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            {/* Real App Icon - Footer */}
            <div className="w-6 h-6 rounded flex items-center justify-center shadow-sm">
                <img 
                    src={iconSrc} 
                    alt="Reso App Icon" 
                    className="w-full h-full object-contain rounded-[6px]" 
                    onError={handleImageError}
                />
            </div>
            <span className="font-semibold text-gray-300">Reso</span>
          </div>
          <div className="text-gray-600">
            &copy; 2025 DZG STUDIO LLC.
          </div>
        </div>
      </footer>

      {/* Styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fall {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(300px); opacity: 0; }
        }
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes wave {
          0%, 100% { height: 10px; }
          50% { height: 30px; }
        }
        @keyframes drop {
          0% { top: 0; opacity: 1; height: 10px; }
          100% { top: 100%; opacity: 0; height: 30px; }
        }
        .mask-image-gradient {
            mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
    </div>
  );
};

export default ResoLanding;