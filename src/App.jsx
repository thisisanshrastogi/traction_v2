import React from 'react';
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
  Radio
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
        <Link to={isHome ? "#timeline" : "/"} className="flex-1 p-4 md:p-6 border-r-[1.5px] border-[#111] flex items-center justify-center font-bold uppercase tracking-widest text-xs hover:bg-[#F4F4F0] transition-colors">
          Timeline
        </Link>
        <Link to="/leaderboard" className="flex-1 p-4 md:p-6 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs hover:bg-[#F4F4F0] transition-colors">
          Leaderboard <span className="w-2 h-2 bg-[#ee6030] rounded-full animate-pulse border border-[#111]"></span>
        </Link>
      </div>
      {/* Registration CTA */}
      <div className="col-span-4 md:col-span-3 flex bg-[#ee6030]">
        <Link to={isHome ? "#register" : "/"} className="w-full h-full p-4 md:p-6 flex items-center justify-center gap-2 font-black uppercase tracking-tighter text-sm md:text-xl text-white hover:bg-[#111] transition-colors group">
          <span className="hidden md:inline">Register</span>
          <span className="md:hidden">Join</span>
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="animate-fade-in">
      {/* ROW 2: HERO SECTION */}
      <header className="grid grid-cols-12 border-b-[1.5px] border-[#111]">
        {/* Left / Main Headline */}
        <div className="col-span-12 lg:col-span-9 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#111] p-8 md:p-16 lg:p-24 flex flex-col justify-between min-h-[60vh] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-slide-up">
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#111] px-4 py-2 w-max bg-white uppercase font-bold text-xs tracking-widest mb-12 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
            <span className="w-2 h-2 bg-[#ee6030] rounded-full animate-pulse"></span>
            Registrations Open • 100% Free
          </div>

          <h1 className="text-[12vw] lg:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase text-[#111]">
            Popularity <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>Over</span> <br />
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

      {/* ROW 4: ABOUT & FOR WHOM */}
      <section className="grid grid-cols-12 border-b-[1.5px] border-[#111]">
        {/* About */}
        <div className="col-span-12 lg:col-span-6 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#111] p-8 md:p-16 animate-slide-up">
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

        {/* For Whom */}
        <div className="col-span-12 lg:col-span-6 p-8 md:p-16 bg-[#F4F4F0] animate-slide-up delay-100 opacity-0">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            The Dream Team
          </h2>
          <p className="text-xl font-medium leading-relaxed mb-8">
            Pure coders will fail here. You need hustlers. We are looking for teams of 4 who command attention and possess the ultimate entrepreneurial trifecta:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-[1.5px] border-[#111] bg-white p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all">
              <Terminal size={24} className="mb-4 text-[#ee6030]" />
              <h3 className="font-black uppercase text-lg">The Hacker</h3>
              <p className="text-xs font-bold uppercase tracking-widest mt-2 text-[#666]">Builds the MVP</p>
            </div>
            <div className="border-[1.5px] border-[#111] bg-white p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all">
              <Megaphone size={24} className="mb-4 text-[#ee6030]" />
              <h3 className="font-black uppercase text-lg">The Hustler</h3>
              <p className="text-xs font-bold uppercase tracking-widest mt-2 text-[#666]">Sells the Vision</p>
            </div>
            <div className="border-[1.5px] border-[#111] bg-white p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all">
              <PenTool size={24} className="mb-4 text-[#ee6030]" />
              <h3 className="font-black uppercase text-lg">The Hipster</h3>
              <p className="text-xs font-bold uppercase tracking-widest mt-2 text-[#666]">Designs the Brand</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 5: TIMELINE & ROUNDS */}
      <section id="timeline" className="grid grid-cols-12 border-b-[1.5px] border-[#111]">
        <div className="col-span-12 border-b-[1.5px] border-[#111] p-6 md:p-8 bg-[#111] text-white flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">The Battle Plan</h2>
          <span className="text-xs font-bold tracking-widest uppercase opacity-50">3 Phases to Win</span>
        </div>

        {/* Round 1 */}
        <div className="col-span-12 lg:col-span-4 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#111] p-8 hover:bg-[#F4F4F0] transition-colors animate-slide-up delay-100 opacity-0">
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#111] px-3 py-1 bg-white uppercase font-bold text-[10px] tracking-widest mb-6 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] text-[#111]">
            <Calendar size={12} /> March 14th
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Round 1</h3>
          <div className="text-sm font-bold uppercase tracking-widest text-[#ee6030] mb-6">The Pitch & Plan</div>
          <p className="text-base font-medium leading-relaxed text-[#444] mb-6">
            Pick your poison (1 of 4 problem statements). Map your architecture, craft an execution strategy, and post your manifesto on LinkedIn to prove you exist.
          </p>
          <div className="text-xs font-bold uppercase tracking-widest bg-[#111] text-white p-2 inline-block">
            Qualifying Round
          </div>
        </div>

        {/* Round 2 */}
        <div className="col-span-12 lg:col-span-4 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#111] p-8 hover:bg-[#F4F4F0] transition-colors animate-slide-up delay-200 opacity-0">
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#111] px-3 py-1 bg-white uppercase font-bold text-[10px] tracking-widest mb-6 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] text-[#111]">
            <Calendar size={12} /> March 16th - 22nd
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Round 2</h3>
          <div className="text-sm font-bold uppercase tracking-widest text-[#ee6030] mb-6">The Technical Prototype</div>
          <p className="text-base font-medium leading-relaxed text-[#444] mb-6">
            Stop talking and start building. Develop a working engine. Judged purely by startup founders on core functionality, robustness, and how well you pitch it.
          </p>
          <div className="text-xs font-bold uppercase tracking-widest border-[1.5px] border-[#111] p-2 inline-block">
            40% of Final Score
          </div>
        </div>

        {/* Round 3 */}
        <div className="col-span-12 lg:col-span-4 p-8 hover:bg-[#F4F4F0] transition-colors bg-[#F4F4F0] animate-slide-up delay-300 opacity-0">
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#111] px-3 py-1 bg-[#ee6030] text-white uppercase font-bold text-[10px] tracking-widest mb-6 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
            <Calendar size={12} /> March 28th - 29th
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Round 3</h3>
          <div className="text-sm font-bold uppercase tracking-widest text-[#ee6030] mb-6">The Traction Test</div>
          <p className="text-base font-medium leading-relaxed text-[#444] mb-6">
            The market decides your fate. Launch publicly. Hustle for real user reviews, social media reach, and prove that people actually want what you built.
          </p>
          <div className="text-xs font-bold uppercase tracking-widest bg-[#ee6030] text-white border-[1.5px] border-[#111] p-2 inline-block shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
            60% of Final Score
          </div>
        </div>
      </section>

      {/* ROW 6: SPONSORSHIP */}
      <section className="grid grid-cols-12 border-b-[1.5px] border-[#111] bg-white animate-fade-in">
        <div className="col-span-12 border-b-[1.5px] border-[#111] p-6 text-center">
          <h2 className="text-2xl font-black uppercase tracking-widest">Powered By</h2>
        </div>
        {/* Sponsors Grid - Placeholders */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="col-span-6 md:col-span-3 border-r-[1.5px] border-b-[1.5px] md:border-b-0 border-[#111] last:border-r-0 h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all bg-[#F4F4F0]">
            <div className="font-black text-2xl tracking-tighter text-[#ccc]">SPONSOR {i}</div>
          </div>
        ))}
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
          <div className="p-6 md:p-8 hover:bg-[#F4F4F0] transition-colors flex-1">
            <h4 className="text-xl md:text-2xl font-black uppercase mb-2">Can we buy engagement?</h4>
            <p className="text-[#ee6030] font-bold text-lg">Absolutely not. Artificial engagement, bots, or any manipulation of metrics will result in immediate disqualification. Real users only.</p>
          </div>
        </div>
      </section>

      {/* ROW 8: REGISTRATION / FOOTER CTA */}
      <section id="register" className="grid grid-cols-12 bg-white">
        <div className="col-span-12 lg:col-span-8 p-8 md:p-16 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#111] flex flex-col justify-center animate-slide-up">
          <h2 className="text-[7vw] lg:text-[6rem] font-black uppercase tracking-tighter leading-none mb-6">
            Claim Your <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>Spot Now.</span>
          </h2>
          <p className="text-xl text-[#444] max-w-xl font-medium">
            Only the top 3 teams per problem statement walk away as winners. 12 winning teams out of 300. Do you have what it takes to build and sell?
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex animate-slide-up delay-200 opacity-0">
          <a href="#" className="w-full min-h-[300px] p-8 flex flex-col justify-center items-center bg-[#ee6030] text-white hover:bg-[#111] transition-colors group cursor-pointer text-center">
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
    <div className="animate-fade-in flex-1 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] min-h-[80vh] flex flex-col items-center justify-center p-8">

      <div className="max-w-2xl w-full border-[1.5px] border-[#111] bg-white p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] animate-slide-up text-center relative overflow-hidden">
        {/* Pulsing broadcast icon */}
        <div className="absolute top-6 right-6 text-[#ee6030] animate-pulse">
          <Radio size={32} />
        </div>

        <div className="flex justify-center mb-8">
          <Trophy size={64} className="text-[#ee6030] -rotate-12 animate-pulse" />
        </div>

        <div className="inline-flex items-center gap-2 border-[1.5px] border-[#111] px-4 py-2 w-max bg-white uppercase font-bold text-xs tracking-widest mb-6 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] mx-auto">
          <span className="w-2 h-2 bg-[#ee6030] rounded-full animate-pulse"></span>
          Live Leaderboard
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-[#111] leading-none">
          Broad<br />casting<br />Soon.
        </h1>

        <p className="text-lg md:text-xl font-medium text-[#444] mb-8 leading-relaxed max-w-md mx-auto">
          The battle for traction hasn't begun. Once Round 3 goes live, this page will track real-time engagement and sales metrics.
        </p>

        <div className="border-[1.5px] border-[#111] p-4 bg-[#F4F4F0] flex flex-col items-center justify-center max-w-sm mx-auto shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all">
          <span className="text-xs font-bold tracking-widest uppercase opacity-70 mb-1">Status</span>
          <span className="font-black uppercase tracking-tight text-xl text-[#ee6030]">Awaiting Teams</span>
        </div>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#ee6030] selection:text-white p-4 md:p-8">

        {/* Main Structural Container - The Grid */}
        <div className="max-w-[1600px] mx-auto border-[1.5px] border-[#111] flex flex-col bg-white shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] transition-all">

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
