import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowDown,
  Terminal,
  Megaphone,
  PenTool,
  Calendar,
  Target,
  AlertCircle,
  Plus,
  Trophy,
  Radio,
  Activity,
  TrendingUp,
  BarChart2,
  ChevronDown,
  Cpu,
  Hash,
  Zap,
  Star,
  X,
  Circle,
  Square,
  Minus
} from 'lucide-react';

/* ── GLOBAL NOISE OVERLAY ── */
function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />;
}

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleTimelineClick = (e) => {
    e.preventDefault();
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="grid grid-cols-12 border-b-[2px] border-[#111] sticky top-0 bg-white z-50">
      {/* Logo */}
      <Link to="/" className="col-span-12 md:col-span-3 border-b-[2px] md:border-b-0 md:border-r-[2px] border-[#111] p-4 md:p-6 flex items-center bg-[#111] text-white hover:bg-[#ee6030] transition-colors group relative overflow-hidden">
        <span className="font-black uppercase tracking-tighter text-2xl group-hover:scale-105 transition-transform nav-glitch">Traction '26</span>
        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ee6030] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </Link>
      {/* Links */}
      <div className="col-span-8 md:col-span-6 border-r-[2px] border-[#111] flex">
        <a href="#timeline" onClick={handleTimelineClick} className={`flex-1 p-4 md:p-6 border-r-[2px] border-[#111] flex items-center justify-center font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#F4F4F0] transition-colors relative nav-glitch ${!isHome ? '' : ''}`}>
          <span className="hidden sm:inline">Timeline</span>
          <span className="sm:hidden">Plan</span>
        </a>
        <Link to="/news" className={`flex-1 p-4 md:p-6 border-r-[2px] border-[#111] flex items-center justify-center gap-1 sm:gap-2 font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#F4F4F0] transition-colors leading-tight group relative ${location.pathname === '/news' ? 'bg-[#F4F4F0]' : ''}`}>
          <span className="w-2 h-2 bg-[#ee6030] rounded-full animate-pulse border border-[#111] shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_6px_rgba(238,96,48,0.5)]"></span>
          <span className="hidden sm:inline text-[#ee6030] nav-glitch">Updates</span>
          <span className="sm:hidden text-[#ee6030]">News</span>
          {location.pathname === '/news' && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ee6030]"></span>}
        </Link>
        <Link to="/leaderboard" className={`flex-1 p-4 md:p-6 flex items-center justify-center gap-1 sm:gap-2 font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#F4F4F0] transition-colors text-center leading-tight relative ${location.pathname === '/leaderboard' ? 'bg-[#F4F4F0]' : ''}`}>
          <span className="hidden md:inline nav-glitch">Leaderboard</span>
          <span className="md:hidden">Ranks</span>
          {location.pathname === '/leaderboard' && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ee6030]"></span>}
        </Link>
      </div>
      {/* Registration CTA */}
      <div className="col-span-4 md:col-span-3 flex bg-[#ee6030] relative overflow-hidden group pulse-border">
        <div className="absolute inset-0 bg-[#111] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        <a href="https://unstop.com/p/traction-26-traction-iiitk-1652221" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full h-full p-4 md:p-6 flex items-center justify-center gap-2 font-black uppercase tracking-tighter text-sm md:text-xl text-white transition-colors">
          <span className="hidden md:inline">Register</span>
          <span className="md:hidden text-xs">Join</span>
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-4 h-4 md:w-6 md:h-6" />
        </a>
      </div>
    </nav>
  );
}

function Home() {
  const [expandedRound, setExpandedRound] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;

    const initDevfolio = () => {
      if (window.devfolio) {
        window.devfolio.init();
      }
    };

    script.onload = initDevfolio;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="animate-fade-in">
      {/* ROW 2: HERO SECTION */}
      <header className="grid grid-cols-12 border-b-[2px] border-[#111]">
        {/* Left / Main Headline */}
        <div className="col-span-12 lg:col-span-9 border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-[#111] p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-[50vh] lg:min-h-[60vh] bg-[#F4F4F0] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative overflow-hidden">

          <Link to="/news" className="inline-flex items-center gap-2 border-[2px] border-[#111] px-3 py-1 sm:px-4 sm:py-2 w-max bg-[#ee6030] text-white uppercase font-bold text-[10px] sm:text-xs tracking-widest mb-8 sm:mb-12 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all cursor-pointer relative z-10 group animate-stagger-in stagger-1">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse border border-[#111] shadow-[0_0_6px_rgba(255,255,255,0.5)]"></span>
            SCHEDULE UPDATE: REVISED EVENT TIMELINE
          </Link>

          <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.85] font-black tracking-tighter uppercase text-[#111] relative z-10 mix-blend-multiply">
            <span className="inline-block animate-stagger-in stagger-2">Popularity </span><br />
            <span className="inline-block animate-stagger-in stagger-3 text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px #111' }}>Over</span> <br />
            <span className="inline-block animate-stagger-in stagger-4">Perfection.</span>
          </h1>

          <p className="mt-8 text-xs md:text-sm sm:text-base font-bold uppercase tracking-widest text-[#666] relative z-10 animate-stagger-in stagger-5">
            <span className="text-[#ee6030]">// </span>Where distribution beats perfection<span className="typewriter-cursor"></span>
          </p>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-stagger-in stagger-6">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#999]">Scroll</span>
            <ArrowDown size={20} className="text-[#ee6030] scroll-indicator" />
          </div> */}
        </div>

        {/* Right / Quick Stats */}
        <div className="col-span-12 lg:col-span-3 flex flex-col">
          <div className="flex-1 border-b-[2px] border-[#111] p-8 md:p-12 bg-[#ee6030] hover:bg-[#111] transition-colors duration-300 text-white flex flex-col justify-center relative overflow-hidden group cursor-crosshair">
            <Target size={120} className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-20 transition-all duration-500" />
            <div className="relative z-10">
              <div className="text-xs font-bold uppercase tracking-widest mb-3 text-[#111] bg-white group-hover:bg-[#ee6030] group-hover:text-white transition-colors duration-300 w-max px-2 py-1 border-[1.5px] border-[#111] shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">The Core Rule</div>
              <p className="font-black text-2xl md:text-3xl uppercase leading-tight tracking-tighter">
                The best code doesn't win. The loudest product does.
              </p>
            </div>
          </div>
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-[#111] text-white relative overflow-hidden">
            <span className="stamp stamp-orange absolute -right-4 top-1/2 -translate-y-1/2 rotate-[-90deg]">800+</span>
            <div className="text-sm font-bold uppercase tracking-widest mb-4 text-[#ee6030] relative z-10">Global Scale</div>
            <div className="font-black text-6xl md:text-7xl tracking-tighter leading-none mb-2 number-label relative z-10">800<span className="text-[#ee6030]">+</span></div>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest opacity-70 relative z-10">Expected Builders</p>
          </div>
        </div>
      </header>

      {/* ROW 3: TICKER TAPE — DUAL DIRECTION */}
      <div className="border-b-[2px] border-[#111] bg-[#111] text-[#ee6030] overflow-hidden">
        {/* Row 1 → */}
        <div className="py-3 border-b border-[#333]">
          <div className="animate-[ticker_20s_linear_infinite] inline-flex whitespace-nowrap text-sm md:text-base font-black uppercase tracking-widest items-center">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="mx-8">Code is a liability</span>
                <Zap size={14} className="text-white" />
                <span className="mx-8">Distribution is an asset</span>
                <Zap size={14} className="text-[#ee6030]" />
                <span className="mx-8 text-white">Validate before you build</span>
                <Zap size={14} className="text-white" />
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Row 2 ← (Reverse) */}
        <div className="py-3">
          <div className="animate-[ticker-reverse_25s_linear_infinite] inline-flex whitespace-nowrap text-sm md:text-base font-black uppercase tracking-widest items-center text-[#666]">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="mx-8">Ship fast or die slow</span>
                <Star size={12} className="text-[#ee6030]" />
                <span className="mx-8 text-[#555]">Users &gt; Features</span>
                <Star size={12} className="text-[#444]" />
                <span className="mx-8 text-[#ee6030]">Traction is everything</span>
                <Star size={12} className="text-[#666]" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ROW 4: ABOUT & ORGANIZERS */}
      <section className="grid grid-cols-12 border-b-[2px] border-[#111]">
        {/* About */}
        <div className="col-span-12 lg:col-span-6 border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-[#111] flex flex-col bg-white relative overflow-hidden">
          <span className="stamp absolute -right-8 top-4 select-none" style={{ fontSize: 'clamp(10rem, 25vw, 20rem)' }}>01</span>
          <div className="p-8 md:p-16 flex-1 border-b-[2px] border-[#111] relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 decoration-[#ee6030] underline decoration-[6px] underline-offset-8">
              The Reality Check
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-[#111]">
              Traction '26 isn't just another hackathon. It is a three-round startup simulator designed to force you through the actual journey of bringing a product to market.
            </p>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-[#666]">
              Every weekend, engineers lock themselves in rooms to build immaculate architectures that die on Monday. We are killing the "build it and they will come" myth. Figure out who is buying before you decide what you are selling.
            </p>
          </div>
          <div className="p-8 md:p-12  text-[#111] flex flex-col justify-center relative z-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#ee6030] mb-6 border-[2px] border-[#111] w-max px-3 py-1 bg-white shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">Organized By</h3>
            <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-6">
              GOOGLE DEVELOPER GROUPS ON CAMPUS <br />

              <span className="text-[#666] text-xl md:text-2xl tracking-widest">IIIT Kottayam</span>
            </p>
            <div className="border-t-[2px] border-[#111] w-full max-w-[100px] mb-6"></div>
            <p className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none">
              Mindquest <br />

              <span className="text-[#666] text-xl md:text-2xl tracking-widest">Traction Team</span>
            </p>
          </div>
        </div>

        {/* REDESIGNED DREAM TEAM SECTION */}
        <div className="col-span-12 lg:col-span-6 p-8 md:p-16 bg-[#111] text-white flex flex-col border-t-[2px] lg:border-t-0 border-[#111] relative overflow-hidden">
          <div className="mb-12 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-white">
              The Dream <br /><span className="text-[#ee6030]">Squad.</span>
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-[#999] max-w-md">
              Pure coders will fail here. You need hustlers. We are looking for squads of 4 who command attention and possess the ultimate entrepreneurial trifecta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto relative z-10">
            {/* Hacker Card */}
            <div className="relative overflow-hidden border-[2px] border-[#333] bg-[#0a0a0a] p-6 shadow-[6px_6px_0px_0px_rgba(238,96,48,1)] hover:-translate-y-2 hover:rotate-[-1deg] hover:shadow-[10px_10px_0px_0px_rgba(238,96,48,1)] hover:border-[#ee6030] transition-all duration-300 group cursor-crosshair h-full flex flex-col animate-stagger-in stagger-1">
              <span className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-widest bg-[#ee6030] text-white px-2 py-0.5 border border-[#111] z-20 rotate-2">Essential</span>
              <span className="absolute -bottom-4 -right-2 text-[8rem] font-black text-[#1a1a1a] leading-none z-0 group-hover:scale-110 transition-transform select-none">01</span>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border-[2px] border-[#ee6030] bg-[#111] text-[#ee6030]">
                    <Terminal size={24} />
                  </div>
                  <span className="text-[#ee6030] font-black tracking-widest text-xs uppercase border border-[#ee6030] px-2 py-1">Code</span>
                </div>
                <h3 className="font-black uppercase text-2xl tracking-tight text-white mb-2">The Hacker</h3>
                <p className="text-sm font-medium text-[#999] leading-relaxed mt-auto">
                  Builds the MVP. Cares about shipping fast, building robust systems, and making the core application loop work flawlessly.
                </p>
              </div>
            </div>

            {/* Hustler Card */}
            <div className="relative overflow-hidden border-[2px] border-[#111] bg-[#ee6030] p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-2 hover:rotate-[1deg] hover:shadow-[10px_10px_0px_0px_rgba(17,17,17,1)] transition-all duration-300 group cursor-crosshair h-full flex flex-col animate-stagger-in stagger-2">
              <span className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-widest bg-[#111] text-white px-2 py-0.5 border border-[#333] z-20 -rotate-1">Critical</span>
              <span className="absolute -bottom-4 -right-2 text-[8rem] font-black text-[#d3542a] leading-none z-0 group-hover:scale-110 transition-transform select-none">02</span>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border-[2px] border-[#111] bg-white text-[#111] shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                    <Megaphone size={24} />
                  </div>
                  <span className="text-[#111] font-black tracking-widest text-xs uppercase border-[2px] border-[#111] bg-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">Sales</span>
                </div>
                <h3 className="font-black uppercase text-2xl tracking-tight text-[#111] mb-2">The Hustler</h3>
                <p className="text-sm font-bold text-[#111] leading-relaxed mt-auto opacity-90">
                  Sells the vision. Talks to users, distributes the link, and finds exactly where the target audience lives on the internet.
                </p>
              </div>
            </div>

            {/* Hipster Card */}
            <div className="relative overflow-hidden border-[2px] border-[#111] bg-white p-6 shadow-[6px_6px_0px_0px_rgba(238,96,48,1)] hover:-translate-y-2 hover:rotate-[1.5deg] hover:shadow-[10px_10px_0px_0px_rgba(238,96,48,1)] transition-all duration-300 group cursor-crosshair h-full flex flex-col animate-stagger-in stagger-3">
              <span className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-widest bg-white text-[#111] px-2 py-0.5 border-[1.5px] border-[#111] z-20 rotate-1 shadow-[2px_2px_0px_0px_rgba(238,96,48,1)]">Key</span>
              <span className="absolute -bottom-4 -right-2 text-[8rem] font-black text-[#f4f4f0] leading-none z-0 group-hover:scale-110 transition-transform select-none">03</span>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border-[2px] border-[#111] bg-[#111] text-white shadow-[2px_2px_0px_0px_rgba(238,96,48,1)]">
                    <PenTool size={24} />
                  </div>
                  <span className="text-[#111] font-black tracking-widest text-xs uppercase border-[2px] border-[#111] px-2 py-1">Design</span>
                </div>
                <h3 className="font-black uppercase text-2xl tracking-tight text-[#111] mb-2">The Hipster</h3>
                <p className="text-sm font-bold text-[#666] leading-relaxed mt-auto">
                  Designs the brand. Ensures the product looks premium, feels intuitive, and stands out from the visual noise.
                </p>
              </div>
            </div>

            {/* Hound Card */}
            <div className="relative overflow-hidden border-[2px] border-[#111] bg-[#F4F4F0] p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-2 hover:rotate-[-1.5deg] hover:shadow-[10px_10px_0px_0px_rgba(17,17,17,1)] transition-all duration-300 group cursor-crosshair h-full flex flex-col animate-stagger-in stagger-4">
              <span className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-widest bg-[#ee6030] text-white px-2 py-0.5 border border-[#111] z-20 -rotate-2">Vital</span>
              <span className="absolute -bottom-4 -right-2 text-[8rem] font-black text-white leading-none z-0 group-hover:scale-110 transition-transform select-none">04</span>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border-[2px] border-[#111] bg-[#ee6030] text-white shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                    <TrendingUp size={24} />
                  </div>
                  <span className="text-[#ee6030] font-black tracking-widest text-xs uppercase border-[2px] border-[#111] bg-[#111] px-2 py-1 shadow-[2px_2px_0px_0px_rgba(238,96,48,1)]">Data</span>
                </div>
                <h3 className="font-black uppercase text-2xl tracking-tight text-[#111] mb-2">The Hound</h3>
                <p className="text-sm font-bold text-[#666] leading-relaxed mt-auto">
                  Tracks the numbers. Analyzes user behavior, finds friction points, and validates if the product is actually working.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ROW 5: TIMELINE & ROUNDS */}
      <section id="timeline" className="flex flex-col border-b-[1.5px] border-[#111]">
        <div className="border-b-[1.5px] border-[#111] p-6 md:p-8 bg-[#111] text-white flex flex-col sm:flex-row sm:justify-between items-start sm:items-end gap-2 relative overflow-hidden">
          <span className="stamp stamp-orange absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">PLAN</span>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">The Battle Plan</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-[#666] mt-1"><span className="text-[#ee6030]">// </span>Your roadmap to victory</p>
          </div>
          <span className="text-xs font-bold tracking-widest uppercase opacity-50 relative z-10">3 Phases to Win</span>
        </div>

        {/* Vertical Accordion Container */}
        <div className="flex flex-col w-full">

          {/* Round 1 */}
          <div
            onClick={() => setExpandedRound(expandedRound === 1 ? null : 1)}
            className={`w-full border-b-[1.5px] border-[#111] transition-colors cursor-pointer group ${expandedRound === 1 ? 'bg-white' : 'bg-white hover:bg-[#F4F4F0]'}`}
          >
            {/* Header Row */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-16 relative overflow-hidden">
              {/* <spa  n className="absolute -right-4 top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-black text-[#F4F4F0] leading-none select-none number-label pointer-events-none">01</span> */}
              <div className="flex-shrink-0 w-32 md:w-48 border-[1.5px] border-[#111] bg-white p-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center gap-2 font-bold uppercase text-[12px] tracking-widest">
                <Calendar size={14} className="text-[#ee6030] mb-[2px]" /> Summer '26
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-1">Round 1: The Pitch & Plan</h3>
                <div className="text-xs font-bold uppercase tracking-widest text-[#ee6030]">Qualifying Phase</div>
              </div>
              <div className="absolute top-6 right-6 md:static">
                <ChevronDown size={32} className={`transform transition-transform duration-300 opacity-30 group-hover:opacity-100 ${expandedRound === 1 ? 'rotate-180 opacity-100 text-[#ee6030]' : ''}`} />
              </div>
            </div>

            {/* Expandable Content */}
            <div className={`grid transition-all duration-300 ease-in-out ${expandedRound === 1 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="p-6 md:p-8 pt-0 md:pt-0 lg:ml-56 md:ml-[13.5rem] border-t-[1.5px] border-[#111] md:border-t-0">
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-[#111] mb-8 mt-6">
                    Pick your poison (1 of 4 problem statements). Map your architecture, craft an execution strategy, and post your manifesto on LinkedIn to prove you exist.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(238,96,48,1)]">
                      <div className="text-xs font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-3 mb-4">Required Deliverable</div>
                      <p className="text-base md:text-lg font-medium text-[#444] leading-relaxed">A detailed architecture diagram, tech stack selection, and go-to-market strategy document.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(238,96,48,1)]">
                      <div className="text-xs font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-3 mb-4">Public Commitment</div>
                      <p className="text-base md:text-lg font-medium text-[#444] leading-relaxed">Team must publish their intent and chosen problem statement clearly on LinkedIn.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(238,96,48,1)]">
                      <div className="text-xs font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-3 mb-4">Core Evaluation</div>
                      <p className="text-base md:text-lg font-medium text-[#444] leading-relaxed">Viability of the idea, depth of the technical plan, and clarity of the target audience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Round 2 */}
          <div
            onClick={() => setExpandedRound(expandedRound === 2 ? null : 2)}
            className={`w-full border-b-[1.5px] border-[#111] transition-colors cursor-pointer group ${expandedRound === 2 ? 'bg-white' : 'bg-white hover:bg-[#F4F4F0]'}`}
          >
            {/* Header Row */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-16 relative overflow-hidden">
              {/* <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-black text-[#F4F4F0] leading-none select-none number-label pointer-events-none">02</span> */}
              <div className="flex-shrink-0 w-32 md:w-48 border-[1.5px] border-[#111] bg-white p-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center gap-2 font-bold uppercase text-[12px] tracking-widest">
                <Calendar size={14} className="text-[#ee6030] mb-[2px]" /> Summer '26
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-1">Round 2: The Tech Prototype</h3>

                <div className="text-xs font-bold uppercase tracking-widest text-[#ee6030]">Build your Product</div>
              </div>

              <div className="absolute top-6 right-6 md:static">
                <ChevronDown size={32} className={`transform transition-transform duration-300 opacity-30 group-hover:opacity-100 ${expandedRound === 2 ? 'rotate-180 opacity-100 text-[#ee6030]' : ''}`} />
              </div>
            </div>

            {/* Expandable Content */}
            <div className={`grid transition-all duration-300 ease-in-out ${expandedRound === 2 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="p-6 md:p-8 pt-0 md:pt-0 lg:ml-56 md:ml-[13.5rem] border-t-[1.5px] border-[#111] md:border-t-0">
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-[#111] mb-8 mt-6">
                    Stop talking and start building. Develop a working engine. Judged purely by startup founders on core functionality, robustness, and how well you pitch it.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                      <div className="text-xs font-black uppercase tracking-widest text-[#666] border-b-[1.5px] border-[#333] pb-3 mb-4">Required Deliverable</div>
                      <p className="text-base md:text-lg font-medium text-[#444] leading-relaxed">A functional MVP deployed live. It doesn't need to be pretty, but the core mechanic *must* work.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                      <div className="text-xs font-black uppercase tracking-widest text-[#666] border-b-[1.5px] border-[#333] pb-3 mb-4">The Pitch</div>
                      <p className="text-base md:text-lg font-medium text-[#444] leading-relaxed">A 3-minute video demonstrating the product and explaining the technical architecture.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                      <div className="text-xs font-black uppercase tracking-widest text-[#666] border-b-[1.5px] border-[#333] pb-3 mb-4">Core Evaluation</div>
                      <p className="text-base md:text-lg font-medium text-[#444] leading-relaxed">Code quality, system robustness, execution speed, and direct feedback from the founder jury.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Round 3 */}
          <div
            onClick={() => setExpandedRound(expandedRound === 3 ? null : 3)}
            className={`w-full border-b-[1.5px] border-[#111] transition-colors cursor-pointer group ${expandedRound === 3 ? 'bg-white' : 'bg-[#ee6030]'}`}
          >
            {/* Header Row */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-16 relative overflow-hidden">
              {/* <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-black leading-none select-none number-label pointer-events-none" style={{ color: expandedRound === 3 ? '#F4F4F0' : 'rgba(255,255,255,0.1)' }}>03</span> */}
              <div className={`flex-shrink-0 w-32 md:w-48 border-[1.5px] border-[#111] p-2 flex items-center justify-center gap-2 font-bold uppercase text-[12px] tracking-widest shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] ${expandedRound === 3 ? 'bg-[#ee6030] text-white' : 'bg-white text-[#111]'}`}>
                <Calendar size={14} className={expandedRound === 3 ? 'text-white mb-[2px]' : 'text-[#ee6030] mb-[2px]'} /> Summer '26
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl md:text-4xl font-black uppercase tracking-tighter mb-1 ${expandedRound === 3 ? 'text-[#111]' : 'text-white'}`}>Round 3: The Traction Test</h3>
                <div className={`text-xs font-bold uppercase tracking-widest ${expandedRound === 3 ? 'text-[#ee6030]' : 'text-[#111]'}`}>Get Real Users</div>
              </div>
              <div className="absolute top-6 right-6 md:static">
                <ChevronDown size={32} className={`https://meet.google.com/bvb-dkkp-oiutransform transition-transform duration-300 opacity-30 group-hover:opacity-100 ${expandedRound === 3 ? 'rotate-180 opacity-100 text-[#ee6030]' : 'text-[#111]'}`} />
              </div>
            </div>

            {/* Expandable Content */}
            <div className={`grid transition-all duration-300 ease-in-out ${expandedRound === 3 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="p-6 md:p-8 pt-0 md:pt-0 lg:ml-56 md:ml-[13.5rem] border-t-[1.5px] border-[#ee6030] md:border-t-0">
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-[#111] mb-8 mt-6">
                    The market decides your fate. Launch publicly. Hustle for real user reviews, social media reach, and prove that people actually want what you built.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                      <div className="text-xs font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-3 mb-4">The Launch</div>
                      <p className="text-base md:text-lg font-medium text-[#444] leading-relaxed">Public release of the application. Go-to-market strategies go live.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transform md:-rotate-1">
                      <div className="text-xs font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-3 mb-4">The Hustle</div>
                      <p className="text-base md:text-lg font-medium text-[#444] leading-relaxed">Drive traffic, get actual signups, harvest real user reviews, and generate noise on social platforms.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                      <div className="text-xs font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-3 mb-4">Core Evaluation</div>
                      <p className="text-base md:text-lg font-medium text-[#444] leading-relaxed">Hard metrics. Number of active users, organic engagement, and proof of real-world traction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ROW 6: SPONSORSHIP */}
      <section className="grid grid-cols-12 border-b-[1.5px] border-[#111] bg-white animate-fade-in">
        <div className="col-span-12 border-b-[1.5px] border-[#111] p-6 text-center relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold tracking-widest text-[#ccc] hidden md:block number-label">SEC.06</span>
          <h2 className="text-2xl font-black uppercase tracking-widest">Powered By</h2>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold tracking-widest text-[#ccc] hidden md:block number-label">SPONSOR</span>
        </div>
        <div className="col-span-12 p-12 md:p-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all bg-[#F4F4F0] crop-marks relative">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <img src="https://exampreptool.com/img/logo.png" alt="Exampreptool" className="h-24 md:h-32 w-auto object-contain" />
            <a href="https://exampreptool.com" target="_blank" rel="noopener noreferrer" className="font-black text-4xl md:text-6xl tracking-tighter text-[#111] hover:opacity-80 transition-opacity">Exampreptool</a>
          </div>
        </div>
      </section>

      {/* ROW 7: Q&A */}
      <section id="qna" className="grid grid-cols-12 border-b-[1.5px] border-[#111]">
        <div className="col-span-12 md:col-span-4 border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-[#111] p-8 bg-[#111] text-white relative overflow-hidden">
          {/* <span className="stamp stamp-orange absolute -right-4 bottom-4 rotate-[-15deg] hidden md:block" style={{ fontSize: '5rem' }}>CLASSIFIED</span> */}
          <AlertCircle size={48} className="mb-6 text-[#ee6030] animate-pulse relative z-10" />
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4 relative z-10">
            Hard <br />Questions.<br />Direct<br />Answers.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 bg-white flex flex-col">
          {[
            { q: 'What is the catch?', a: "There isn't one. Participation is 100% free. Bring your talent, we provide the platform.", warn: false },
            { q: 'Who can I work with?', a: 'You need exactly 4 members per team. Find people who complement your skills\u2014coders, designers, and talkers.', warn: false },
            { q: 'Can we buy engagement?', a: 'Absolutely not. Artificial engagement, bots, or any manipulation of metrics will result in immediate disqualification. Real users only.', warn: true },
            { q: 'Is the use of AI allowed?', a: 'Yes! Use of AI is 100% allowed. We care about the product, not how it was written.', warn: false }
          ].map((item, i) => (
            <div key={i} className={`${i < 3 ? 'border-b-[1.5px] border-[#111]' : ''} p-6 md:p-8 hover:bg-[#F4F4F0] transition-colors flex-1 flex gap-4 md:gap-6 items-start group`}>
              {/* <span className="number-label text-2xl md:text-3xl font-black text-[#F4F4F0] group-hover:text-[#ee6030] transition-colors shrink-0 leading-none mt-1 select-none border-[1.5px] border-[#eee] group-hover:border-[#ee6030] w-14 h-14 flex items-center justify-center">Q{String(i + 1).padStart(2, '0')}</span> */}
              <div>
                <h4 className="text-xl md:text-2xl font-black uppercase mb-2">{item.q}</h4>
                <p className={`${item.warn ? 'text-[#ee6030] font-bold' : 'text-[#444] font-medium'} text-lg`}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ROW 7.5: PRIZES */}
      <section id="prizes" className="grid grid-cols-12 border-b-[2px] border-[#111] bg-[#111] text-white">
        <div className="col-span-12 p-12 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Trophy Watermark */}
          <Trophy size={300} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.02] pointer-events-none" strokeWidth={1} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 border-[2px] border-[#ee6030] px-6 py-2 w-max bg-[#111] uppercase font-bold text-sm tracking-widest mb-8 text-white shadow-[4px_4px_0px_0px_rgba(238,96,48,1)]">
              <Trophy size={16} className="text-[#ee6030]" /> The Reward
            </div>

            <h2 className="text-[12vw] sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
              Cash Prizes <br />
              <span className="text-transparent bg-clip-text " style={{ WebkitTextStroke: '1px #fff' }}>and Goodies.</span>
            </h2>

            <p className="text-xl md:text-2xl font-medium max-w-2xl text-[#999] mt-6 mx-auto">
              Real cash for real startups. Build something people want and take home your share of the treasury. No equity taken.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-16 w-full max-w-4xl mx-auto">
              {/* Prize Crates */}
              <div className="flex-1 min-w-[220px] border-[2px] border-[#333] p-8 bg-[#0a0a0a] relative group hover:border-[#ee6030] transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ee6030]"></div>
                <span className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-widest bg-[#ee6030] text-white px-2 py-0.5 border border-[#111]">★ Gold</span>
                <div className="text-sm font-black uppercase tracking-widest text-[#ee6030] mb-4 border-b border-[#333] pb-2">1st Place</div>
                <div className="text-5xl font-black tracking-tighter text-white group-hover:scale-110 transition-transform number-label" data-text="TBA">TBA</div>
              </div>
              <div className="flex-1 min-w-[220px] border-[2px] border-[#333] p-8 bg-[#151515] relative group hover:border-white transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
                <span className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-widest bg-white text-[#111] px-2 py-0.5 border border-[#333]">Silver</span>
                <div className="text-sm font-black uppercase tracking-widest text-[#999] mb-4 border-b border-[#333] pb-2">2nd Place</div>
                <div className="text-4xl font-black tracking-tighter text-[#ccc] group-hover:scale-110 transition-transform number-label">TBA</div>
              </div>
              <div className="flex-1 min-w-[220px] border-[2px] border-[#333] p-8 bg-[#1a1a1a] relative group hover:border-[#999] transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#666]"></div>
                <span className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-widest bg-[#333] text-[#999] px-2 py-0.5 border border-[#444]">Bronze</span>
                <div className="text-sm font-black uppercase tracking-widest text-[#666] mb-4 border-b border-[#333] pb-2">3rd Place</div>
                <div className="text-4xl font-black tracking-tighter text-[#999] group-hover:scale-110 transition-transform number-label">TBA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 8: REGISTRATION / FOOTER CTA */}
      <section id="register" className="grid grid-cols-12 bg-[#ee6030] text-white">
        <div className="col-span-12 lg:col-span-8 p-8 md:p-16 border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-[#111] flex flex-col justify-center bg-[#F4F4F0] text-[#111] relative overflow-hidden">
          {/* <span className="stamp absolute right-4 top-4 hidden lg:block rotate-[-8deg]" style={{ fontSize: '6rem', color: 'rgba(238,96,48,0.08)' }}>NOW</span> */}
          <div className="inline-flex items-center gap-2 border-[2px] border-[#111] px-3 py-1 w-max bg-[#ee6030] text-white uppercase font-black text-[10px] tracking-widest mb-6 shadow-[3px_3px_0px_0px_rgba(17,17,17,1)] animate-pulse relative z-10">
            <Zap size={12} /> Final Call
          </div>
          <h2 className="text-[12vw] sm:text-[7vw] lg:text-[6rem] font-black uppercase tracking-tighter leading-none mb-6 relative z-10">
            Claim Your <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>Spot Now.</span>
          </h2>
          <p className="text-xl text-[#444] max-w-xl font-bold relative z-10">
            Do you have what it takes to build and sell? The best products will take the prize.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex">
          <a href="https://unstop.com/p/traction-26-traction-iiitk-1652221" target="_blank" rel="noopener noreferrer" className="w-full min-h-[300px] p-8 flex flex-col justify-center items-center bg-[#111] text-white hover:bg-[#ee6030] transition-colors duration-300 group cursor-pointer text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <span className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-8 block relative z-10 group-hover:scale-105 transition-transform">Register<br />Your Team</span>
            <div className="p-6 bg-white text-[#111] rounded-full group-hover:rotate-45 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(238,96,48,1)] relative z-10 pulse-border">
              <ArrowUpRight size={48} className="text-[#111] " />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
// ... (App and Leaderboard components remain)

function Leaderboard() {
  return (
    <div className="animate-fade-in flex-1 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] min-h-[80vh] flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[#ee6030] rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[#111] rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-6 md:gap-8 relative z-10 animate-slide-up">

        {/* Left Side: Notice */}
        <div className="flex-1 border-[1.5px] border-[#111] bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-6 right-6 text-[#ee6030] animate-pulse">
            <Radio size={32} />
          </div>

          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#111] px-4 py-2 w-max bg-[#111] text-white uppercase font-bold text-xs tracking-widest mb-8 shadow-[4px_4px_0px_0px_rgba(238,96,48,1)]">
            <span className="w-2 h-2 bg-[#ee6030] rounded-full animate-pulse shadow-[0_0_8px_#ee6030]"></span>
            System Offline
          </div>

          <h1 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 sm:mb-6 text-[#111] leading-[0.85]">
            Live<br />Metrics<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '0.02em #111' }}>Soon.</span>
          </h1>

          <p className="text-lg font-medium text-[#444] leading-relaxed max-w-sm mb-8">
            The battle for traction hasn't begun. When Round 3 goes live, this dashboard will stream real-time user engagement and sales metrics.
          </p>

          <div className="border-[1.5px] border-[#111] p-4 bg-[#F4F4F0] flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] mt-auto">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-50">Current Phase</span>
              <span className="font-black uppercase tracking-tight text-[#111]">Awaiting Teams</span>
            </div>
            <Activity className="text-[#ee6030] animate-pulse" size={32} />
          </div>
        </div>

        {/* Right Side: Skeleton Leaderboard */}
        <div className="flex-1 border-[1.5px] border-[#111] bg-[#111] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(238,96,48,1)] flex flex-col gap-4">
          <div className="flex items-center justify-between border-b-[1.5px] border-[#333] pb-4 mb-4">
            <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm">
              <TrendingUp size={20} className="text-[#ee6030]" />
              Projected Ranks
            </div>
            <BarChart2 size={20} className="text-[#666]" />
          </div>

          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`border-[1.5px] border-[#333] p-4 flex items-center gap-4 ${i === 1 ? 'bg-[#222] border-[#ee6030]/50' : 'bg-[#1a1a1a]'}`}>
              <div className={`font-black text-2xl w-8 text-center ${i === 1 ? 'text-[#ee6030]' : 'text-[#444]'}`}>
                {i}
              </div>
              <div className="flex-1">
                <div className="h-4 bg-[#333] w-2/3 mb-2 rounded-none animate-pulse"></div>
                <div className="h-2 bg-[#222] w-1/3 rounded-none"></div>
              </div>
              <div className="flex flex-col items-end">
                <div className="h-5 bg-[#333] w-16 mb-2 rounded-none animate-pulse delay-75"></div>
                <div className="h-2 bg-[#222] w-10 rounded-none"></div>
              </div>
            </div>
          ))}

          <div className="mt-auto pt-6 flex justify-center border-t-[1.5px] border-[#333]">
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#ee6030] animate-pulse">Initializing Data Stream...</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function News() {
  const [expandedNews, setExpandedNews] = useState(null);

  const newsItems = [
    {
      id: 1,
      date: 'March 17, 2026',
      title: 'Schedule Revision',
      category: 'Official Notice',
      content: 'Please be advised that the event schedule has been updated. The new tentative date for the commencement of Traction \'26 is slated for May 16th. Further details regarding the revised timeline and subsequent rounds will be communicated in due course.',
      important: true
    },
    {
      id: 2,
      date: 'March 4, 2026',
      title: 'Registration Commencement',
      category: 'Announcement',
      content: 'Registrations for Traction \'26 are now officially open. We invite all prospective participants to assemble their teams and prepare for the upcoming phases. The competition seeks comprehensive skill sets across engineering, design, marketing, and analytics.',
      important: false
    }
  ];

  return (
    <div className="animate-fade-in flex-1 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] min-h-[80vh] flex flex-col items-center p-4 md:p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[20%] w-64 h-64 bg-[#ee6030] rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10 animate-slide-up flex flex-col gap-6">

        {/* Header */}
        <div className="border-[1.5px] border-[#111] bg-[#111] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(238,96,48,1)] flex flex-col relative overflow-hidden text-white">
          <Megaphone className="absolute -right-6 -bottom-6 opacity-10" size={160} />

          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#ee6030] px-3 py-1 sm:px-4 sm:py-2 w-max bg-white text-[#111] uppercase font-bold text-[10px] sm:text-xs tracking-widest mb-6 shadow-[4px_4px_0px_0px_rgba(238,96,48,1)]">
            <Radio size={14} className="text-[#ee6030] animate-pulse" />
            Official Notices
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none text-white">
            Press <br />
            <span className="text-[#ee6030]">Room.</span>
          </h1>

          <p className="text-base sm:text-lg font-medium text-[#999] max-w-xl">
            Latest announcements, schedule updates, and official communications from the Traction organizing committee.
          </p>
        </div>

        {/* News Feed */}
        <div className="flex flex-col w-full shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] border-[1.5px] border-[#111] bg-white">
          {newsItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setExpandedNews(expandedNews === item.id ? null : item.id)}
              className={`w-full border-b-[1.5px] border-[#111] last:border-b-0 transition-colors cursor-pointer group ${expandedNews === item.id ? 'bg-[#ffffff]' : 'hover:bg-[#F4F4F0]'}`}
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 relative">
                <div className={`flex-shrink-0 w-28 md:w-32 border-[1.5px] border-[#111] p-2 flex items-center justify-center gap-2 font-bold uppercase text-[10px] tracking-widest shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] ${item.important ? 'bg-[#ee6030] text-white' : 'bg-white text-[#111]'}`}>
                  {item.date}
                </div>
                <div className="flex-1 md:pr-12">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#ee6030] mb-1">{item.category}</div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                </div>
                <div className="absolute top-6 right-6 md:static">
                  <ChevronDown size={24} className={`transform transition-transform duration-300 opacity-50 group-hover:opacity-100 ${expandedNews === item.id ? 'rotate-180 opacity-100 text-[#ee6030]' : 'text-[#111]'}`} />
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`grid transition-all duration-300 ease-in-out ${expandedNews === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="p-6 md:p-8 pt-0 md:pt-0 md:ml-[9rem] mt-2">
                    <p className="text-base md:text-lg font-medium leading-relaxed text-[#444]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#ee6030] selection:text-white p-3 sm:p-4 md:p-8">

        {/* Global Noise Grain Overlay */}
        <NoiseOverlay />

        {/* Main Structural Container - The Grid */}
        <div className="max-w-[1600px] mx-auto border-[1.5px] border-[#111] flex flex-col bg-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] transition-all">

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>

        </div>

        {/* Tiny Footer */}
        <div className="max-w-[1600px] mx-auto mt-6 flex justify-between uppercase font-bold text-[10px] tracking-widest text-[#666]">
          <span className="number-label">© 2026 Traction Hackathon</span>
          <span className="flex items-center gap-2"><Minus size={10} className="text-[#ee6030]" /> Validation &gt; Code <Minus size={10} className="text-[#ee6030]" /></span>
        </div>
      </div>
    </BrowserRouter>
  );
}

