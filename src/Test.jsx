import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
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
    ChevronDown,
    Zap,
    Skull
} from 'lucide-react';

// --- CUSTOM STYLES FOR BRUTALIST ANIMATIONS ---
const BrutalistStyles = () => (
    <style>{`
    @keyframes glitch {
      0% { transform: translate(0) }
      20% { transform: translate(-3px, 3px) }
      40% { transform: translate(-3px, -3px) }
      60% { transform: translate(3px, 3px) }
      80% { transform: translate(3px, -3px) }
      100% { transform: translate(0) }
    }
    .hover-glitch:hover {
      animation: glitch 0.2s cubic-bezier(.25, .46, .45, .94) both infinite;
      color: #FF3E00;
    }
    .text-stroke {
      -webkit-text-stroke: 2px #000;
      color: transparent;
    }
    .text-stroke-white {
      -webkit-text-stroke: 2px #fff;
      color: transparent;
    }
    @keyframes fast-marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee-fast {
      animation: fast-marquee 10s linear infinite;
    }
    @keyframes brutal-blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .animate-brutal-blink {
      animation: brutal-blink 1s steps(1, start) infinite;
    }
    .brutal-shadow {
      box-shadow: 8px 8px 0px 0px #000;
    }
    .brutal-shadow-hover:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px 0px #000;
    }
    .brutal-shadow-active:active {
      transform: translate(8px, 8px);
      box-shadow: 0px 0px 0px 0px #000;
    }
    
    /* Custom Scrollbar for brutalist feel */
    ::-webkit-scrollbar {
      width: 16px;
      border-left: 3px solid #000;
      background: #F4F4F0;
    }
    ::-webkit-scrollbar-thumb {
      background: #000;
      border: 3px solid #F4F4F0;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #FF3E00;
    }
  `}</style>
);

// --- THEME CONSTANTS ---
const THEME = {
    black: '#000000',
    orange: '#FF3E00',
    offwhite: '#F4F4F0',
    border: 'border-[3px] border-black',
};

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    const handleScrollToTimeline = (e) => {
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
        <nav className={`grid grid-cols-12 border-b-[3px] border-black sticky top-0 bg-white z-50`}>
            {/* Logo */}
            <Link to="/" className="col-span-12 md:col-span-4 lg:col-span-3 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black p-4 md:p-6 flex items-center bg-black text-white hover:bg-[#FF3E00] transition-none group">
                <span className="font-black uppercase tracking-tighter text-3xl group-hover:skew-x-[-10deg] transition-transform duration-100">TRCTN_26</span>
            </Link>

            {/* Links */}
            <div className="col-span-8 md:col-span-5 lg:col-span-6 border-r-[3px] border-black flex">
                <button onClick={handleScrollToTimeline} className="flex-1 p-4 border-r-[3px] border-black flex items-center justify-center font-black uppercase tracking-widest text-xs hover:bg-[#FF3E00] hover:text-white transition-none">
                    <span className="hidden sm:inline">The Plan</span>
                    <span className="sm:hidden">Plan</span>
                </button>
                <Link to="/news" className="flex-1 p-4 border-r-[3px] border-black flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-none group">
                    <span className="w-3 h-3 bg-[#FF3E00] border-2 border-black group-hover:border-white animate-brutal-blink"></span>
                    <span className="hidden sm:inline">Intel</span>
                    <span className="sm:hidden">Intel</span>
                </Link>
                <Link to="/leaderboard" className="flex-1 p-4 flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs hover:bg-[#F4F4F0] transition-none text-center">
                    <span className="hidden md:inline">Rankings</span>
                    <span className="md:hidden">Ranks</span>
                </Link>
            </div>

            {/* Registration CTA */}
            <div className="col-span-4 md:col-span-3 lg:col-span-3 flex bg-[#FF3E00] relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-multiply pointer-events-none"></div>
                <a href="https://unstop.com/p/traction-26-traction-iiitk-1652221" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full h-full p-4 flex items-center justify-center gap-2 font-black uppercase tracking-tighter text-lg md:text-2xl text-black hover:text-white hover:bg-black transition-none">
                    <span className="hidden lg:inline hover-glitch">ENLIST NOW</span>
                    <span className="lg:hidden hover-glitch">JOIN</span>
                    <ArrowUpRight className="group-hover:scale-150 transition-transform duration-100 w-6 h-6 stroke-[3px]" />
                </a>
            </div>
        </nav>
    );
}

function Home() {
    const [expandedRound, setExpandedRound] = useState(null);

    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <header className={`grid grid-cols-12 border-b-[3px] border-black relative`}>
                {/* Background Noise Image/Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] opacity-20 pointer-events-none z-0"></div>

                {/* Left / Main Headline */}
                <div className="col-span-12 lg:col-span-8 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-[60vh] bg-[#F4F4F0] relative z-10">

                    <Link to="/news" className="brutal-shadow brutal-shadow-hover brutal-shadow-active border-[3px] border-black px-4 py-2 w-max bg-[#FF3E00] text-black uppercase font-black text-xs tracking-widest mb-12 flex items-center gap-3 transition-all duration-100 cursor-pointer">
                        <span className="w-3 h-3 bg-white border-2 border-black animate-brutal-blink"></span>
                        ALERT: MAY 16 SCHEDULE DROP
                    </Link>

                    <h1 className="text-[14vw] sm:text-[6rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.8] font-black tracking-tighter uppercase text-black">
                        <span className="hover-glitch inline-block">Popularity</span><br />
                        <span className="text-stroke">Over</span><br />
                        <span className="hover-glitch inline-block text-[#FF3E00]">Perfection.</span>
                    </h1>
                </div>

                {/* Right / Quick Stats */}
                <div className="col-span-12 lg:col-span-4 flex flex-col z-10">
                    <div className="flex-1 border-b-[3px] border-black p-8 md:p-12 bg-[#FF3E00] text-black flex flex-col justify-center relative group hover:bg-black hover:text-white transition-none cursor-crosshair">
                        <Skull size={180} className="absolute -right-10 -bottom-10 opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200" />
                        <div className="relative z-10">
                            <div className="text-xs font-black uppercase tracking-widest mb-4 bg-white text-black w-max px-3 py-1 border-[3px] border-black brutal-shadow group-hover:bg-[#FF3E00] group-hover:shadow-[4px_4px_0px_0px_#fff]">PRIME DIRECTIVE</div>
                            <p className="font-black text-3xl md:text-4xl uppercase leading-[0.9] tracking-tighter">
                                The best code rots. <br />The loudest product wins.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-black text-white relative group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <div className="text-xs font-black uppercase tracking-widest mb-4 text-[#FF3E00] border border-[#FF3E00] w-max px-2 py-1">THREAT LEVEL</div>
                            <div className="font-black text-7xl md:text-8xl tracking-tighter leading-none mb-2 hover-glitch">800<span className="text-[#FF3E00]">X</span></div>
                            <p className="text-sm font-bold uppercase tracking-widest opacity-80 mt-4">Expected Competitors</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* FAST TICKER TAPE */}
            <div className="border-b-[3px] border-black bg-[#FF3E00] text-black py-4 overflow-hidden relative flex">
                <div className="animate-marquee-fast flex whitespace-nowrap font-black uppercase tracking-[0.2em] text-xl items-center">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="mx-8">CODE IS A LIABILITY</span>
                            <Skull size={24} className="stroke-[3px]" />
                            <span className="mx-8">DISTRIBUTION IS AN ASSET</span>
                            <Zap size={24} className="stroke-[3px]" />
                        </React.Fragment>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="animate-marquee-fast flex whitespace-nowrap font-black uppercase tracking-[0.2em] text-xl items-center absolute top-4 left-full">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="mx-8">CODE IS A LIABILITY</span>
                            <Skull size={24} className="stroke-[3px]" />
                            <span className="mx-8">DISTRIBUTION IS AN ASSET</span>
                            <Zap size={24} className="stroke-[3px]" />
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* REALITY CHECK & SQUAD */}
            <section className={`grid grid-cols-12 border-b-[3px] border-black`}>
                {/* Left: About */}
                <div className="col-span-12 xl:col-span-5 border-b-[3px] xl:border-b-0 xl:border-r-[3px] border-black flex flex-col bg-white">
                    <div className="p-8 md:p-12 lg:p-16 flex-1 border-b-[3px] border-black relative overflow-hidden group">
                        <div className="absolute -left-10 top-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 bg-black text-white inline-block px-4 py-2 brutal-shadow transform -rotate-2">
                            REALITY <br />CHECK.
                        </h2>
                        <p className="text-xl md:text-2xl font-bold leading-tight mb-8 text-black uppercase tracking-tight">
                            Traction ’26 is a startup simulator designed to force you through the meat-grinder of bringing a product to market.
                        </p>
                        <p className="text-lg font-bold leading-tight text-black border-l-[6px] border-[#FF3E00] pl-6 py-2 bg-[#F4F4F0] uppercase">
                            Engineers lock themselves in rooms to build immaculate architectures that die on Monday. We are killing the "build it and they will come" myth.
                        </p>
                    </div>
                    <div className="p-8 md:p-12 bg-black text-white flex flex-col justify-center">
                        <h3 className="text-xs font-black uppercase tracking-widest text-black mb-6 border-[3px] border-black w-max px-3 py-1 bg-[#FF3E00]">AUTHORITY</h3>
                        <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-8 hover-glitch cursor-default">
                            GDGC <br />
                            <span className="text-stroke-white text-4xl">IIIT KOTTAYAM</span>
                        </p>
                        <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] hover-glitch cursor-default text-[#FF3E00]">
                            MINDQUEST <br />
                            <span className="text-stroke-white text-4xl">TRACTION TEAM</span>
                        </p>
                    </div>
                </div>

                {/* Right: The Squad Cards */}
                <div className="col-span-12 xl:col-span-7 p-8 md:p-12 lg:p-16 bg-[#F4F4F0] flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    <div className="mb-12 relative z-10 flex justify-between items-end">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-[0.85]">
                            REQUIRED <br /><span className="text-[#FF3E00]">ASSETS.</span>
                        </h2>
                        <Target size={80} className="text-black stroke-[3px] hidden sm:block animate-pulse" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-auto relative z-10">
                        {/* Hacker Card */}
                        <div className="border-[4px] border-black bg-white p-6 brutal-shadow brutal-shadow-hover brutal-shadow-active transition-all duration-100 flex flex-col relative">
                            <span className="absolute -top-6 -right-4 text-[6rem] font-black text-[#FF3E00] leading-none z-0 mix-blend-multiply opacity-50">01</span>
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="w-16 h-16 flex items-center justify-center border-[3px] border-black bg-[#FF3E00] text-black">
                                    <Terminal size={32} strokeWidth={3} />
                                </div>
                                <span className="text-black font-black tracking-widest text-sm uppercase bg-yellow-300 border-[3px] border-black px-3 py-1 brutal-shadow">CODE</span>
                            </div>
                            <h3 className="font-black uppercase text-3xl tracking-tighter text-black mb-4">THE HACKER</h3>
                            <p className="text-base font-bold text-black uppercase leading-snug mt-auto border-t-[3px] border-black pt-4">
                                Builds the MVP. Cares about shipping fast and making the core application loop flawless.
                            </p>
                        </div>

                        {/* Hustler Card */}
                        <div className="border-[4px] border-black bg-black text-white p-6 brutal-shadow brutal-shadow-hover brutal-shadow-active transition-all duration-100 flex flex-col relative">
                            <span className="absolute -top-6 -right-4 text-[6rem] font-black text-[#333] leading-none z-0 mix-blend-screen">02</span>
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="w-16 h-16 flex items-center justify-center border-[3px] border-white bg-black text-white">
                                    <Megaphone size={32} strokeWidth={3} />
                                </div>
                                <span className="text-black font-black tracking-widest text-sm uppercase bg-white px-3 py-1">SALES</span>
                            </div>
                            <h3 className="font-black uppercase text-3xl tracking-tighter mb-4 text-[#FF3E00]">THE HUSTLER</h3>
                            <p className="text-base font-bold text-white uppercase leading-snug mt-auto border-t-[3px] border-[#FF3E00] pt-4">
                                Sells the vision. Talks to users, distributes the link, dominates the target audience.
                            </p>
                        </div>

                        {/* Hipster Card */}
                        <div className="border-[4px] border-black bg-[#FF3E00] text-black p-6 brutal-shadow brutal-shadow-hover brutal-shadow-active transition-all duration-100 flex flex-col relative">
                            <span className="absolute -top-6 -right-4 text-[6rem] font-black text-black/20 leading-none z-0 mix-blend-multiply">03</span>
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="w-16 h-16 flex items-center justify-center border-[3px] border-black bg-white text-black">
                                    <PenTool size={32} strokeWidth={3} />
                                </div>
                                <span className="text-white font-black tracking-widest text-sm uppercase bg-black px-3 py-1">VIBE</span>
                            </div>
                            <h3 className="font-black uppercase text-3xl tracking-tighter mb-4">THE HIPSTER</h3>
                            <p className="text-base font-bold text-black uppercase leading-snug mt-auto border-t-[3px] border-black pt-4">
                                Designs the brand. Ensures the product looks premium and cuts through visual noise.
                            </p>
                        </div>

                        {/* Hound Card */}
                        <div className="border-[4px] border-black bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] bg-white text-black p-6 brutal-shadow brutal-shadow-hover brutal-shadow-active transition-all duration-100 flex flex-col relative">
                            <span className="absolute -top-6 -right-4 text-[6rem] font-black text-[#ccc] leading-none z-0">04</span>
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="w-16 h-16 flex items-center justify-center border-[3px] border-black bg-black text-[#FF3E00]">
                                    <TrendingUp size={32} strokeWidth={3} />
                                </div>
                                <span className="text-black font-black tracking-widest text-sm uppercase border-[3px] border-black bg-white px-3 py-1 brutal-shadow">DATA</span>
                            </div>
                            <h3 className="font-black uppercase text-3xl tracking-tighter mb-4">THE HOUND</h3>
                            <p className="text-base font-bold text-black uppercase leading-snug mt-auto border-t-[3px] border-black pt-4 bg-white/80 backdrop-blur-sm">
                                Tracks the numbers. Analyzes behavior, finds friction points, proves the concept works.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* TIMELINE ACCORDION */}
            <section id="timeline" className="flex flex-col border-b-[3px] border-black bg-white">
                <div className="border-b-[3px] border-black p-6 md:p-12 bg-black text-white flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-[#FF3E00] blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter relative z-10">EXECUTION<br /><span className="text-[#FF3E00]">PHASES.</span></h2>
                    <div className="text-xl font-black tracking-widest uppercase border-[3px] border-white px-4 py-2 relative z-10 animate-brutal-blink">3 STAGES TO WIN</div>
                </div>

                <div className="flex flex-col w-full">
                    {[
                        {
                            id: 1,
                            title: "THE PITCH & PLAN",
                            subtitle: "QUALIFYING PHASE / PAPER ARCHITECTURE",
                            desc: "Map your architecture, craft an execution strategy, and post your manifesto on LinkedIn to prove you exist.",
                            reqs: ["Architecture Diagram", "Public LinkedIn Committment", "Viability & Tech Depth"]
                        },
                        {
                            id: 2,
                            title: "THE PROTOTYPE",
                            subtitle: "40% WEIGHT / BUILD THE ENGINE",
                            desc: "Develop a working engine. Judged purely by startup founders on core functionality and your 3-minute pitch.",
                            reqs: ["Live Functional MVP", "3-Min Demo Video", "Code & System Robustness"]
                        },
                        {
                            id: 3,
                            title: "THE TRACTION TEST",
                            subtitle: "60% WEIGHT / MARKET DECIDES",
                            desc: "Launch publicly. Hustle for real user reviews, social media reach, and prove that people want what you built.",
                            reqs: ["Public Release", "Aggressive Distribution", "Hard Active User Metrics"]
                        }
                    ].map((round) => (
                        <div
                            key={round.id}
                            onClick={() => setExpandedRound(expandedRound === round.id ? null : round.id)}
                            className={`w-full border-b-[3px] border-black transition-none cursor-pointer group ${expandedRound === round.id ? (round.id === 3 ? 'bg-[#FF3E00]' : 'bg-black text-white') : 'bg-white hover:bg-[#F4F4F0]'}`}
                        >
                            <div className="p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative">
                                <div className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 border-[4px] border-black flex items-center justify-center font-black text-5xl md:text-6xl tracking-tighter ${expandedRound === round.id ? 'bg-white text-black brutal-shadow' : 'bg-[#FF3E00] text-black brutal-shadow group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[4px_4px_0px_0px_#000]'}`}>
                                    0{round.id}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">{round.title}</h3>
                                    <div className={`text-sm md:text-base font-black uppercase tracking-widest ${expandedRound === round.id ? (round.id === 3 ? 'text-black' : 'text-[#FF3E00]') : 'text-gray-500'}`}>
                                        {round.subtitle}
                                    </div>
                                </div>
                                <div className="absolute top-8 right-8 md:static">
                                    <Plus size={48} strokeWidth={3} className={`transform transition-transform duration-200 ${expandedRound === round.id ? 'rotate-45' : ''} ${expandedRound === round.id && round.id !== 3 ? 'text-[#FF3E00]' : 'text-black'}`} />
                                </div>
                            </div>

                            <div className={`overflow-hidden transition-all duration-200 ease-in-out ${expandedRound === round.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className={`p-6 md:p-10 pt-0 md:pt-0 border-t-[3px] ${round.id === 3 ? 'border-black' : 'border-[#FF3E00]'}`}>
                                    <p className={`text-xl md:text-3xl font-black uppercase leading-tight mb-10 mt-8 ${expandedRound === round.id && round.id !== 3 ? 'text-white' : 'text-black'}`}>
                                        {round.desc}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                        {round.reqs.map((req, i) => (
                                            <div key={i} className={`border-[3px] border-black p-6 brutal-shadow flex items-center ${expandedRound === round.id && round.id !== 3 ? 'bg-[#111] text-white' : 'bg-white text-black'}`}>
                                                <div className="w-4 h-4 bg-[#FF3E00] border-2 border-black mr-4 flex-shrink-0"></div>
                                                <p className="text-lg font-black uppercase tracking-tight">{req}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRIZES */}
            <section id="prizes" className="grid grid-cols-12 border-b-[3px] border-black bg-[#FF3E00] text-black">
                <div className="col-span-12 p-12 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 pointer-events-none"></div>

                    <div className="relative z-10 w-full max-w-6xl">
                        <div className="inline-flex items-center gap-3 border-[4px] border-black px-6 py-2 w-max bg-white uppercase font-black text-xl tracking-widest mb-12 brutal-shadow transform -rotate-2">
                            <Trophy size={24} strokeWidth={3} className="text-[#FF3E00]" /> THE LOOT
                        </div>

                        <h2 className="text-[12vw] sm:text-[7rem] md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] mb-8 hover-glitch">
                            CASH <br />
                            <span className="text-stroke-white text-black">MONEY.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
                            {/* 2nd Place */}
                            <div className="border-[4px] border-black p-8 bg-black text-white brutal-shadow transform translate-y-8 md:translate-y-12">
                                <div className="text-xl font-black uppercase tracking-widest text-[#FF3E00] mb-6 border-b-[3px] border-[#FF3E00] pb-4">RUNNER UP</div>
                                <div className="text-6xl font-black tracking-tighter">TBA</div>
                            </div>
                            {/* 1st Place */}
                            <div className="border-[6px] border-black p-10 bg-white text-black brutal-shadow transform hover:-translate-y-4 transition-transform duration-200 z-10">
                                <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-300 border-[3px] border-black rounded-full flex items-center justify-center font-black animate-spin-slow">1</div>
                                <div className="text-2xl font-black uppercase tracking-widest text-black mb-6 border-b-[4px] border-black pb-4">CHAMPION</div>
                                <div className="text-7xl md:text-8xl font-black tracking-tighter text-[#FF3E00] hover-glitch">TBA</div>
                            </div>
                            {/* 3rd Place */}
                            <div className="border-[4px] border-black p-8 bg-black text-white brutal-shadow transform translate-y-8 md:translate-y-16">
                                <div className="text-xl font-black uppercase tracking-widest text-gray-500 mb-6 border-b-[3px] border-gray-500 pb-4">THIRD</div>
                                <div className="text-6xl font-black tracking-tighter text-gray-400">TBA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPONSOR & FOOTER CTA */}
            <section className="grid grid-cols-12 bg-black text-white">
                <div className="col-span-12 lg:col-span-6 p-12 md:p-24 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[#333] flex flex-col justify-center relative">
                    <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-8 border-[2px] border-[#333] w-max px-3 py-1">POWERED BY</div>
                    <div className="flex items-center gap-8 group cursor-pointer">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 border-[4px] border-[#333] group-hover:border-white transition-colors">
                            <img src="https://exampreptool.com/img/logo.png" alt="Exampreptool" className="w-full h-auto object-contain grayscale group-hover:grayscale-0" />
                        </div>
                        <span className="font-black text-5xl md:text-6xl tracking-tighter uppercase group-hover:text-[#FF3E00] transition-colors">EXAM<br />PREP<br />TOOL</span>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-6 flex">
                    <a href="https://unstop.com/p/traction-26-traction-iiitk-1652221" target="_blank" rel="noopener noreferrer" className="w-full min-h-[400px] p-12 flex flex-col justify-center items-center bg-[#FF3E00] text-black hover:bg-white transition-colors duration-100 group cursor-crosshair text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 block relative z-10 group-hover:scale-110 transition-transform duration-200">DEPLOY<br />TEAM</span>
                        <div className="p-6 bg-black text-[#FF3E00] rounded-none group-hover:rotate-90 transition-transform duration-200 brutal-shadow relative z-10">
                            <ArrowUpRight size={64} strokeWidth={3} />
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
}

function Leaderboard() {
    return (
        <div className="bg-[#F4F4F0] min-h-[85vh] flex flex-col items-center justify-center p-4 md:p-12 relative overflow-hidden border-b-[3px] border-black">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] opacity-30"></div>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">

                {/* Notice Panel */}
                <div className="border-[4px] border-black bg-white p-8 md:p-12 brutal-shadow flex flex-col justify-between">
                    <div>
                        <div className="inline-flex items-center gap-3 border-[3px] border-black px-4 py-2 w-max bg-[#FF3E00] text-black uppercase font-black text-sm tracking-widest mb-10 brutal-shadow transform -rotate-2">
                            <Activity size={20} className="animate-pulse stroke-[3px]" />
                            SYSTEM OFFLINE
                        </div>
                        <h1 className="text-[10vw] sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-black leading-[0.85]">
                            METRICS<br />
                            <span className="text-stroke">AWAITING.</span>
                        </h1>
                        <p className="text-xl font-bold text-black uppercase leading-tight max-w-md border-l-[6px] border-black pl-6">
                            The battle hasn't begun. When Phase 3 initiates, this dashboard will stream raw, unadulterated traction data.
                        </p>
                    </div>

                    <div className="mt-12 border-[3px] border-black p-6 bg-black text-white flex justify-between items-center brutal-shadow">
                        <div className="flex flex-col">
                            <span className="text-xs font-black tracking-widest uppercase text-gray-500 mb-1">CURRENT STATUS</span>
                            <span className="font-black text-2xl uppercase tracking-tighter text-[#FF3E00] animate-brutal-blink">AWAITING DEPLOYMENT</span>
                        </div>
                        <Radio className="text-white" size={40} strokeWidth={2} />
                    </div>
                </div>

                {/* Skeleton Board */}
                <div className="border-[4px] border-black bg-black p-8 brutal-shadow flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b-[4px] border-[#333] pb-6 mb-2">
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-white">LIVE RANKS</h2>
                        <BarChart2 size={32} className="text-[#FF3E00]" strokeWidth={3} />
                    </div>

                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`border-[3px] p-4 flex items-center gap-6 ${i === 1 ? 'border-[#FF3E00] bg-[#FF3E00]/10' : 'border-[#333] bg-[#111]'}`}>
                            <div className={`font-black text-4xl w-10 text-center ${i === 1 ? 'text-[#FF3E00]' : 'text-gray-600'}`}>
                                0{i}
                            </div>
                            <div className="flex-1">
                                <div className="h-6 bg-[#333] w-3/4 mb-3 rounded-none animate-pulse"></div>
                                <div className="h-3 bg-[#222] w-1/2 rounded-none"></div>
                            </div>
                            <div className="w-24 h-12 bg-[#333] border-[2px] border-[#444] rounded-none animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function News() {
    const newsItems = [
        {
            id: 1,
            date: 'MAR 17 26',
            title: 'CRITICAL: SCHEDULE REVISION',
            type: 'DIRECTIVE',
            content: 'Launch sequence delayed. New tentative commencement date: MAY 16. Prepare assets accordingly. Further intel drops pending.',
            urgent: true
        },
        {
            id: 2,
            date: 'MAR 04 26',
            title: 'REGISTRATION PORTAL OPEN',
            type: 'COMMUNIQUE',
            content: 'Traction \'26 enlistment is live. Assemble your 4-person squad: Hacker, Hustler, Hipster, Hound. Zero exceptions on team size.',
            urgent: false
        }
    ];

    return (
        <div className="bg-[#F4F4F0] min-h-[85vh] flex flex-col items-center p-4 md:p-12 relative overflow-hidden border-b-[3px] border-black">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30"></div>

            <div className="max-w-4xl w-full relative z-10 flex flex-col gap-8">

                {/* Header Block */}
                <div className="border-[4px] border-black bg-black p-8 md:p-16 brutal-shadow relative overflow-hidden">
                    <Megaphone className="absolute -right-10 -bottom-10 opacity-20 text-white" size={240} strokeWidth={1} />

                    <div className="inline-flex items-center gap-3 border-[3px] border-black px-4 py-2 w-max bg-white text-black uppercase font-black text-sm tracking-widest mb-8 brutal-shadow">
                        <Radio size={20} className="text-[#FF3E00] animate-brutal-blink" strokeWidth={3} />
                        INTEL FEED
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.85] text-white">
                        COMM<br />
                        <span className="text-[#FF3E00] hover-glitch">LINK.</span>
                    </h1>
                </div>

                {/* Feed List */}
                <div className="flex flex-col gap-6">
                    {newsItems.map((item) => (
                        <div key={item.id} className="border-[4px] border-black bg-white p-6 md:p-8 brutal-shadow brutal-shadow-hover transition-transform duration-100 flex flex-col md:flex-row gap-6 md:gap-12 group cursor-crosshair">

                            <div className="flex flex-col md:w-48 flex-shrink-0">
                                <div className={`border-[3px] border-black p-3 text-center font-black uppercase tracking-widest text-lg brutal-shadow mb-4 ${item.urgent ? 'bg-[#FF3E00] text-black' : 'bg-black text-white'}`}>
                                    {item.date}
                                </div>
                                <div className="text-sm font-black uppercase tracking-widest text-gray-400">CLASS: {item.type}</div>
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className={`text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-none group-hover:text-[#FF3E00] transition-colors ${item.urgent ? 'text-black' : 'text-black'}`}>
                                    {item.title}
                                </h3>
                                <p className="text-xl font-bold uppercase leading-tight text-gray-700 bg-[#F4F4F0] p-4 border-l-[4px] border-black">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Test() {
    return (
        <HashRouter>
            <BrutalistStyles />
            <div className="min-h-screen bg-gray-300 text-black font-sans selection:bg-[#FF3E00] selection:text-black p-2 sm:p-4 md:p-8 flex flex-col items-center">

                {/* Outer Brutalist Frame */}
                <div className="w-full max-w-[1600px] border-[4px] md:border-[6px] border-black bg-white brutal-shadow relative overflow-hidden flex flex-col">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                    </Routes>
                </div>

                {/* Footer Bar */}
                <div className="w-full max-w-[1600px] mt-8 flex justify-between items-center bg-black text-white border-[4px] border-black p-4 brutal-shadow uppercase font-black text-sm tracking-widest">
                    <span className="animate-brutal-blink text-[#FF3E00]">SYSTEM ONLINE</span>
                    <span>©26 TRCTN</span>
                </div>
            </div>
        </HashRouter>
    );
}