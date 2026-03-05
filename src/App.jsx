import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
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
  ChevronDown
} from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="grid grid-cols-12 border-b-[1.5px] border-[#111] sticky top-0 bg-white z-50">
      {/* Logo */}
      <Link to="/" className="col-span-12 md:col-span-3 border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-[#111] p-4 md:p-6 flex items-center bg-[#111] text-white hover:bg-[#333] transition-colors">
        <span className="font-black uppercase tracking-tighter text-2xl">Traction '26</span>
      </Link>
      {/* Links */}
      <div className="col-span-8 md:col-span-6 border-r-[1.5px] border-[#111] flex">
        <a href={isHome ? "#timeline" : "/#timeline"} className="flex-1 p-4 md:p-6 border-r-[1.5px] border-[#111] flex items-center justify-center font-bold uppercase tracking-widest text-xs hover:bg-[#F4F4F0] transition-colors">
          Timeline
        </a>
        <Link to="/leaderboard" className="flex-1 p-4 md:p-6 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#F4F4F0] transition-colors text-center leading-tight">
          <span className="hidden sm:inline">Leaderboard</span>
          <span className="sm:hidden">Ranks</span>
          <span className="w-2 h-2 bg-[#ee6030] rounded-full animate-pulse border border-[#111] shrink-0"></span>
        </Link>
      </div>
      {/* Registration CTA */}
      <div className="col-span-4 md:col-span-3 flex bg-[#ee6030]">
        <a href="https://unstop.com/p/traction-26-traction-iiitk-1652221" target="_blank" rel="noopener noreferrer" className="w-full h-full p-4 md:p-6 flex items-center justify-center gap-2 font-black uppercase tracking-tighter text-sm md:text-xl text-white hover:bg-[#111] transition-colors group">
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

  return (
    <div className="animate-fade-in">
      {/* ROW 2: HERO SECTION */}
      <header className="grid grid-cols-12 border-b-[1.5px] border-[#111]">
        {/* Left / Main Headline */}
        <div className="col-span-12 lg:col-span-9 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#111] p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center  min-h-[50vh] lg:min-h-[60vh] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-slide-up">
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#111] px-3 py-1 sm:px-4 sm:py-2 w-max bg-white uppercase font-bold text-[10px] sm:text-xs tracking-widest mb-10 sm:mb-12 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
            <span className="w-2 h-2 bg-[#ee6030] rounded-full animate-pulse"></span>
            Registrations Open • 100% Free
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase text-[#111]">
            Popularity <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '0.02em #111' }}>Over</span> <br />
            Perfection.
          </h1>
        </div>

        {/* Right / Quick Stats */}
        <div className="col-span-12 lg:col-span-3 flex flex-col">
          <div className="flex-1 border-b-[1.5px] border-[#111] p-8 md:p-12 bg-[#ee6030] text-white flex flex-col justify-center animate-slide-up delay-100 opacity-0">
            <Target size={32} className="mb-6 opacity-50" />
            <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">The Core Rule</div>
            <p className="font-black text-2xl uppercase leading-tight tracking-tighter mb-2">
              The best code doesn't win. The loudest product does.
            </p>
          </div>
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-[#111] text-white animate-slide-up delay-200 opacity-0">
            <div className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Global Scale</div>
            <div className="font-black text-6xl tracking-tighter leading-none mb-2">800+</div>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest opacity-80">Expected Builders</p>
          </div>
        </div>
      </header>

      {/* ROW 3: TICKER TAPE */}
      <div className="border-b-[1.5px] border-[#111] bg-[#ee6030] text-white py-3 overflow-hidden">
        <div className="animate-[ticker_20s_linear_infinite] inline-flex whitespace-nowrap text-sm md:text-base font-bold uppercase tracking-widest items-center">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-8">Code is a liability</span>
              <Plus size={16} />
              <span className="mx-8">Distribution is an asset</span>
              <Plus size={16} />
              <span className="mx-8">Validate before you build</span>
              <Plus size={16} />
              <span className="mx-8">Users &gt; Unit Tests</span>
              <Plus size={16} />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ROW 4: ABOUT & ORGANIZERS */}
      <section className="grid grid-cols-12 border-b-[1.5px] border-[#111]">
        {/* About */}
        <div className="col-span-12 lg:col-span-6 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#111] flex flex-col">
          <div className="p-8 md:p-16 flex-1 animate-slide-up border-b-[1.5px] border-[#111]">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 decoration-[#ee6030] underline decoration-[4px] underline-offset-8">
              The Reality Check
            </h2>
            <p className="text-xl font-medium leading-relaxed mb-6">
              Traction ’26 isn't just another hackathon. It is a three-round startup simulator designed to force you through the actual journey of bringing a product to market.
            </p>
            <p className="text-xl font-medium leading-relaxed text-[#444]">
              Every weekend, engineers lock themselves in rooms to build immaculate architectures that die on Monday. We are killing the "build it and they will come" myth. Figure out who is buying before you decide what you are selling.
            </p>
          </div>
          <div className="p-8 md:p-12 bg-[#111] text-white animate-slide-up delay-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#ee6030] mb-4">Organized By</h3>
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">
              Google Developer Groups <br />
              <span className="text-[#999] text-xl">On Campus IIIT Kottayam</span>
            </p>
            <div className="my-4 border-t-[1.5px] border-[#333] w-12"></div>
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">
              Mindquest <br />
              <span className="text-[#999] text-xl">IIIT Kottayam</span>
            </p>
          </div>
        </div>

        {/* For Whom / Dream Team Redesign */}
        <div className="col-span-12 lg:col-span-6 p-8 md:p-16 bg-[#F4F4F0] animate-slide-up delay-100 flex flex-col justify-center border-t-[1.5px] lg:border-t-0 border-[#111]">
          <div className="mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
              The Dream Team
            </h2>
            <p className="text-xl font-medium leading-relaxed text-[#111] max-w-lg">
              Pure coders will fail here. You need hustlers. We are looking for squads of 4 who command attention and possess the ultimate entrepreneurial trifecta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
            {/* Hacker Card */}
            <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:border-[#ee6030] transition-all duration-300 group flex flex-col justify-between cursor-default">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex shrink-0 items-center justify-center border-[1.5px] border-[#111] bg-[#F4F4F0] shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                  <Terminal size={20} className="text-[#ee6030]" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-xl tracking-tight text-[#111]">The Hacker</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#ee6030]">Architecture & Code</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#444] leading-relaxed">
                Builds the MVP. Cares about shipping fast, building robust systems, and making the core application loop work flawlessly.
              </p>
            </div>

            {/* Hustler Card */}
            <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:border-[#ee6030] transition-all duration-300 group flex flex-col justify-between cursor-default">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex shrink-0 items-center justify-center border-[1.5px] border-[#111] bg-[#F4F4F0] shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                  <Megaphone size={20} className="text-[#ee6030]" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-xl tracking-tight text-[#111]">The Hustler</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#ee6030]">Sales & Growth</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#444] leading-relaxed">
                Sells the vision. Talks to users, distributes the link, and finds exactly where the target audience lives on the internet.
              </p>
            </div>

            {/* Hipster Card */}
            <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:border-[#ee6030] transition-all duration-300 group flex flex-col justify-between cursor-default">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex shrink-0 items-center justify-center border-[1.5px] border-[#111] bg-[#F4F4F0] shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                  <PenTool size={20} className="text-[#ee6030]" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-xl tracking-tight text-[#111]">The Hipster</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#ee6030]">Design & Brand</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#444] leading-relaxed">
                Designs the brand. Ensures the product looks premium, feels intuitive, and stands out from the visual noise.
              </p>
            </div>

            {/* Hound Card */}
            <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:border-[#ee6030] transition-all duration-300 group flex flex-col justify-between cursor-default">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex shrink-0 items-center justify-center border-[1.5px] border-[#111] bg-[#F4F4F0] shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                  <TrendingUp size={20} className="text-[#ee6030]" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-xl tracking-tight text-[#111]">The Hound</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#ee6030]">Data & Metrics</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#444] leading-relaxed">
                Tracks the numbers. Analyzes user behavior, finds friction points, and validates if the product is actually working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 5: TIMELINE & ROUNDS */}
      <section id="timeline" className="flex flex-col border-b-[1.5px] border-[#111]">
        <div className="border-b-[1.5px] border-[#111] p-6 md:p-8 bg-[#111] text-white flex flex-col sm:flex-row sm:justify-between items-start sm:items-end gap-2">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">The Battle Plan</h2>
          <span className="text-xs font-bold tracking-widest uppercase opacity-50">3 Phases to Win</span>
        </div>

        {/* Vertical Accordion Container */}
        <div className="flex flex-col w-full">

          {/* Round 1 */}
          <div
            onClick={() => setExpandedRound(expandedRound === 1 ? null : 1)}
            className={`w-full border-b-[1.5px] border-[#111] transition-colors cursor-pointer group ${expandedRound === 1 ? 'bg-[#F4F4F0]' : 'bg-white hover:bg-[#F4F4F0]'}`}
          >
            {/* Header Row */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-16 relative">
              <div className="flex-shrink-0 w-32 md:w-48 border-[1.5px] border-[#111] bg-white p-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center gap-2 font-bold uppercase text-[12px] tracking-widest">
                <Calendar size={14} className="text-[#ee6030] mb-[2px]" /> March 14th
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
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-2 mb-4">Required Deliverable</div>
                      <p className="text-sm font-medium">A detailed architecture diagram, tech stack selection, and go-to-market strategy document.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(238,96,48,1)]">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-2 mb-4">Public Commitment</div>
                      <p className="text-sm font-medium">Team must publish their intent and chosen problem statement clearly on LinkedIn.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(238,96,48,1)]">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-2 mb-4">Core Evaluation</div>
                      <p className="text-sm font-medium">Viability of the idea, depth of the technical plan, and clarity of the target audience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Round 2 */}
          <div
            onClick={() => setExpandedRound(expandedRound === 2 ? null : 2)}
            className={`w-full border-b-[1.5px] border-[#111] transition-colors cursor-pointer group ${expandedRound === 2 ? 'bg-[#F4F4F0]' : 'bg-white hover:bg-[#F4F4F0]'}`}
          >
            {/* Header Row */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-16 relative">
              <div className="flex-shrink-0 w-32 md:w-48 border-[1.5px] border-[#111] bg-white p-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center gap-2 font-bold uppercase text-[12px] tracking-widest">
                <Calendar size={14} className="text-[#ee6030] mb-[2px]" /> Mar 16th - 22nd
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-1">Round 2: The Tech Prototype</h3>
                <div className="text-xs font-bold uppercase tracking-widest text-[#ee6030]">40% of Final Score</div>
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
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#666] border-b-[1.5px] border-[#333] pb-2 mb-4">Required Deliverable</div>
                      <p className="text-sm font-medium">A functional MVP deployed live. It doesn't need to be pretty, but the core mechanic *must* work.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#666] border-b-[1.5px] border-[#333] pb-2 mb-4">The Pitch</div>
                      <p className="text-sm font-medium">A 3-minute video demonstrating the product and explaining the technical architecture.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#666] border-b-[1.5px] border-[#333] pb-2 mb-4">Core Evaluation</div>
                      <p className="text-sm font-medium">Code quality, system robustness, execution speed, and direct feedback from the founder jury.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Round 3 */}
          <div
            onClick={() => setExpandedRound(expandedRound === 3 ? null : 3)}
            className={`w-full transition-colors cursor-pointer group ${expandedRound === 3 ? 'bg-[rgba(238,96,48,0.1)]' : 'bg-[#ee6030]'}`}
          >
            {/* Header Row */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-16 relative">
              <div className={`flex-shrink-0 w-32 md:w-48 border-[1.5px] border-[#111] p-2 flex items-center justify-center gap-2 font-bold uppercase text-[12px] tracking-widest shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] ${expandedRound === 3 ? 'bg-[#ee6030] text-white' : 'bg-white text-[#111]'}`}>
                <Calendar size={14} className={expandedRound === 3 ? 'text-white mb-[2px]' : 'text-[#ee6030] mb-[2px]'} /> Mar 23th - 29th
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl md:text-4xl font-black uppercase tracking-tighter mb-1 ${expandedRound === 3 ? 'text-[#111]' : 'text-white'}`}>Round 3: The Traction Test</h3>
                <div className={`text-xs font-bold uppercase tracking-widest ${expandedRound === 3 ? 'text-[#ee6030]' : 'text-[#111]'}`}>60% of Final Score</div>
              </div>
              <div className="absolute top-6 right-6 md:static">
                <ChevronDown size={32} className={`transform transition-transform duration-300 opacity-30 group-hover:opacity-100 ${expandedRound === 3 ? 'rotate-180 opacity-100 text-[#ee6030]' : 'text-[#111]'}`} />
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
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-2 mb-4">The Launch</div>
                      <p className="text-sm font-medium">Public release of the application. Go-to-market strategies go live.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transform md:-rotate-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-2 mb-4">The Hustle</div>
                      <p className="text-sm font-medium">Drive traffic, get actual signups, harvest real user reviews, and generate noise on social platforms.</p>
                    </div>
                    <div className="border-[1.5px] border-[#111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#ee6030] border-b-[1.5px] border-[#333] pb-2 mb-4">Core Evaluation</div>
                      <p className="text-sm font-medium">Hard metrics. Number of active users, organic engagement, and proof of real-world traction.</p>
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
        <div className="col-span-12 border-b-[1.5px] border-[#111] p-6 text-center">
          <h2 className="text-2xl font-black uppercase tracking-widest">Powered By</h2>
        </div>
        <div className="col-span-12 p-12 md:p-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all bg-[#F4F4F0]">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <img src="https://exampreptool.com/img/logo.png" alt="Exampreptool" className="h-24 md:h-32 w-auto object-contain" />
            <span className="font-black text-4xl md:text-6xl tracking-tighter text-[#111]">Exampreptool</span>
          </div>
        </div>
      </section>

      {/* ROW 7: Q&A */}
      <section id="qna" className="grid grid-cols-12 border-b-[1.5px] border-[#111]">
        <div className="col-span-12 md:col-span-4 border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-[#111] p-8 bg-[#111] text-white">
          <AlertCircle size={48} className="mb-6 text-[#ee6030] animate-pulse" />
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4">
            Hard <br />Questions.<br />Direct<br />Answers.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 bg-white flex flex-col">
          <div className="border-b-[1.5px] border-[#111] p-6 md:p-8 hover:bg-[#F4F4F0] transition-colors flex-1">
            <h4 className="text-xl md:text-2xl font-black uppercase mb-2">What is the catch?</h4>
            <p className="text-[#444] font-medium text-lg">There isn't one. Participation is 100% free. Bring your talent, we provide the platform.</p>
          </div>
          <div className="border-b-[1.5px] border-[#111] p-6 md:p-8 hover:bg-[#F4F4F0] transition-colors flex-1">
            <h4 className="text-xl md:text-2xl font-black uppercase mb-2">Who can I work with?</h4>
            <p className="text-[#444] font-medium text-lg">You need exactly 4 members per team. Find people who complement your skills—coders, designers, and talkers.</p>
          </div>
          <div className="border-b-[1.5px] border-[#111] p-6 md:p-8 hover:bg-[#F4F4F0] transition-colors flex-1">
            <h4 className="text-xl md:text-2xl font-black uppercase mb-2">Can we buy engagement?</h4>
            <p className="text-[#ee6030] font-bold text-lg">Absolutely not. Artificial engagement, bots, or any manipulation of metrics will result in immediate disqualification. Real users only.</p>
          </div>
          <div className="p-6 md:p-8 hover:bg-[#F4F4F0] transition-colors flex-1">
            <h4 className="text-xl md:text-2xl font-black uppercase mb-2">Is the use of AI allowed?</h4>
            <p className="text-[#444] font-medium text-lg">Yes! Use of AI is 100% allowed. We care about the product, not how it was written.</p>
          </div>
        </div>
      </section>

      {/* ROW 7.5: PRIZES */}
      <section id="prizes" className="grid grid-cols-12 border-b-[1.5px] border-[#111] bg-[#111] text-white">
        <div className="col-span-12 p-12 md:p-24 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#333] px-6 py-2 w-max bg-[#222] uppercase font-bold text-sm tracking-widest mb-8 text-[#ee6030]">
            <Trophy size={16} /> The Reward
          </div>

          <h2 className="text-[12vw] sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
            Undisclosed <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '0.02em #fff' }}>Prize Pool.</span>
          </h2>

          <p className="text-xl md:text-2xl font-medium max-w-2xl text-[#999] mt-6">
            Real cash for real startups. Build something people want and take home your share of the treasury. No equity taken.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12 w-full max-w-3xl">
            <div className="flex-1 min-w-[200px] border-[1.5px] border-[#333] p-6 bg-[#222]">
              <div className="text-sm font-bold uppercase tracking-widest text-[#ee6030] mb-2">1st Place</div>
              <div className="text-4xl font-black tracking-tighter">TBA</div>
            </div>
            <div className="flex-1 min-w-[200px] border-[1.5px] border-[#333] p-6 bg-[#1a1a1a]">
              <div className="text-sm font-bold uppercase tracking-widest text-[#999] mb-2">2nd Place</div>
              <div className="text-3xl font-black tracking-tighter">TBA</div>
            </div>
            <div className="flex-1 min-w-[200px] border-[1.5px] border-[#333] p-6 bg-[#1a1a1a]">
              <div className="text-sm font-bold uppercase tracking-widest text-[#999] mb-2">3rd Place</div>
              <div className="text-3xl font-black tracking-tighter">TBA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 8: REGISTRATION / FOOTER CTA */}
      <section id="register" className="grid grid-cols-12 bg-white">
        <div className="col-span-12 lg:col-span-8 p-8 md:p-16 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#111] flex flex-col justify-center animate-slide-up">
          <h2 className="text-[12vw] sm:text-[7vw] lg:text-[6rem] font-black uppercase tracking-tighter leading-none mb-6">
            Claim Your <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '0.02em #111' }}>Spot Now.</span>
          </h2>
          <p className="text-xl text-[#444] max-w-xl font-medium">
            Do you have what it takes to build and sell? The best products will take the prize.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex animate-slide-up delay-200 opacity-0">
          <a href="https://unstop.com/p/traction-26-traction-iiitk-1652221" target="_blank" rel="noopener noreferrer" className="w-full min-h-[300px] p-8 flex flex-col justify-center items-center bg-[#ee6030] text-white hover:bg-[#111] transition-colors group cursor-pointer text-center">
            <span className="text-3xl font-black uppercase tracking-widest mb-6 block">Register<br />Your Team</span>
            <div className="p-6 bg-white text-[#111] rounded-full group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] group-hover:shadow-[0px_0px_0px_0px_rgba(17,17,17,1)]">
              <ArrowUpRight size={48} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

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

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#ee6030] selection:text-white p-3 sm:p-4 md:p-8">

        {/* Main Structural Container - The Grid */}
        <div className="max-w-[1600px] mx-auto border-[1.5px] border-[#111] flex flex-col bg-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] transition-all">

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>

        </div>

        {/* Tiny Footer */}
        <div className="max-w-[1600px] mx-auto mt-6 flex justify-between uppercase font-bold text-[10px] tracking-widest text-[#666]">
          <span>© 2026 Traction Hackathon</span>
          <span>Validation &gt; Code</span>
        </div>
      </div>
    </BrowserRouter>
  );
}
