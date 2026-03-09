import React, { useState, useEffect } from 'react';
import { Settings, Type, MousePointer2, Target, Terminal, Zap, Crosshair, Download, Calendar } from 'lucide-react';

export default function App() {
    // State for editable banner content
    const [bannerData, setBannerData] = useState({
        eyebrow: "Registrations Open • 100% Free",
        title1: "Popularity",
        title2: "Over",
        title3: "Perfection.",
        subtitle: "The best code doesn't win. The loudest product does.",
        info1: "MARCH 14-29, 2026", // Replaced CTA text
        info2: "GLOBAL ONLINE ARENA", // Replaced CTA subtext
        theme: "light",
    });

    // State for viewport scaling & download status
    const [scale, setScale] = useState(0.5);
    const [isDownloading, setIsDownloading] = useState(false);

    // Dynamically load html2canvas for the download feature
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBannerData(prev => ({ ...prev, [name]: value }));
    };

    const handleDownload = async () => {
        if (!window.html2canvas) {
            alert("Export engine is still loading. Please try again in a few seconds.");
            return;
        }

        setIsDownloading(true);
        const element = document.getElementById('export-banner');

        try {
            const canvas = await window.html2canvas(element, {
                scale: 2, // 2x scale for high-res crisp text
                useCORS: true,
                backgroundColor: bannerData.theme === 'dark' ? '#151515' : '#FFFFFF',
            });

            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'traction-banner-export.png';
            link.href = url;
            link.click();
        } catch (err) {
            console.error("Failed to export image:", err);
            alert("Failed to export image. Check console for details.");
        } finally {
            setIsDownloading(false);
        }
    };

    const isDark = bannerData.theme === 'dark';

    return (
        <div className="min-h-screen bg-[#e5e5e5] flex flex-col font-sans text-[#111] selection:bg-[#ee6030] selection:text-white">
            {/* Top Navigation / App Header - Brutalist Style */}
            <header className="bg-white border-b-[3px] border-[#111] px-6 py-4 flex items-center justify-between z-10 sticky top-0 shadow-[0_4px_0_0_rgba(17,17,17,1)] relative">
                <div className="flex items-center gap-3">
                    <div className="bg-[#111] p-2 text-[#ee6030] shadow-[2px_2px_0_0_#ee6030]">
                        <Terminal className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-black uppercase tracking-tighter">Banner Studio<span className="text-[#ee6030]">.</span></h1>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 bg-[#F4F4F0] border-[2px] border-[#111] px-4 py-2 shadow-[4px_4px_0_0_#111]">
                        <label className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest text-[#111]">
                            <MousePointer2 className="w-4 h-4" />
                            Scale: {Math.round(scale * 100)}%
                        </label>
                        <input
                            type="range"
                            min="0.2"
                            max="1"
                            step="0.05"
                            value={scale}
                            onChange={(e) => setScale(parseFloat(e.target.value))}
                            className="w-32 accent-[#ee6030] cursor-crosshair"
                        />
                    </div>

                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="flex items-center gap-2 bg-[#111] text-white border-[2px] border-[#111] px-6 py-2 font-black uppercase tracking-widest text-sm shadow-[4px_4px_0_0_#ee6030] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#ee6030] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Download className="w-5 h-5" />
                        {isDownloading ? 'Exporting...' : 'Download Image'}
                    </button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar - Editor Panel */}
                <aside className="w-80 bg-white border-r-[3px] border-[#111] flex flex-col overflow-y-auto shrink-0 z-10">
                    <div className="p-6 border-b-[3px] border-[#111] bg-[#111] text-white">
                        <h2 className="text-sm font-black uppercase tracking-widest flex items-center gap-2 mb-2">
                            <Settings className="w-4 h-4 text-[#ee6030]" /> Control Panel
                        </h2>
                        <p className="text-xs font-bold text-[#999] uppercase tracking-widest">
                            Live edit 1926x556 canvas
                        </p>
                    </div>

                    <div className="p-6 space-y-8 bg-[#ffffff] flex-1">
                        {/* Theme Toggle */}
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-[#111]">
                                <Crosshair className="w-4 h-4" /> Mode
                            </label>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setBannerData({ ...bannerData, theme: 'light' })}
                                    className={`flex-1 py-2 text-xs font-black uppercase tracking-widest border-[2px] border-[#111] transition-all ${!isDark ? 'bg-[#111] text-white shadow-[4px_4px_0_0_#ee6030]' : 'bg-white text-[#111] shadow-[4px_4px_0_0_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#111]'}`}
                                >
                                    Light
                                </button>
                                <button
                                    onClick={() => setBannerData({ ...bannerData, theme: 'dark' })}
                                    className={`flex-1 py-2 text-xs font-black uppercase tracking-widest border-[2px] border-[#111] transition-all ${isDark ? 'bg-[#ee6030] text-[#111] shadow-[4px_4px_0_0_#111]' : 'bg-[#111] text-white shadow-[4px_4px_0_0_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#111]'}`}
                                >
                                    Dark
                                </button>
                            </div>
                        </div>

                        {/* Typography Section */}
                        <div className="space-y-4 pt-4 border-t-[2px] border-[#111] border-dashed">
                            <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-[#111]">
                                <Type className="w-4 h-4" /> Content
                            </h3>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#666]">Eyebrow Tag</label>
                                <input
                                    type="text" name="eyebrow" value={bannerData.eyebrow} onChange={handleInputChange}
                                    className="w-full px-3 py-2 bg-white border-[2px] border-[#111] text-sm font-bold shadow-[2px_2px_0_0_#111] focus:outline-none focus:border-[#ee6030] focus:shadow-[4px_4px_0_0_#ee6030] transition-all rounded-none"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#666]">Title Line 1</label>
                                <input
                                    type="text" name="title1" value={bannerData.title1} onChange={handleInputChange}
                                    className="w-full px-3 py-2 bg-white border-[2px] border-[#111] text-sm font-black uppercase shadow-[2px_2px_0_0_#111] focus:outline-none focus:border-[#ee6030] focus:shadow-[4px_4px_0_0_#ee6030] transition-all rounded-none"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#ee6030]">Title Line 2 (Outlined)</label>
                                <input
                                    type="text" name="title2" value={bannerData.title2} onChange={handleInputChange}
                                    className="w-full px-3 py-2 bg-white border-[2px] border-[#111] text-sm font-black uppercase shadow-[2px_2px_0_0_#111] focus:outline-none focus:border-[#ee6030] focus:shadow-[4px_4px_0_0_#ee6030] transition-all rounded-none"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#666]">Title Line 3</label>
                                <input
                                    type="text" name="title3" value={bannerData.title3} onChange={handleInputChange}
                                    className="w-full px-3 py-2 bg-white border-[2px] border-[#111] text-sm font-black uppercase shadow-[2px_2px_0_0_#111] focus:outline-none focus:border-[#ee6030] focus:shadow-[4px_4px_0_0_#ee6030] transition-all rounded-none"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#666]">Body / Subtitle</label>
                                <textarea
                                    name="subtitle" value={bannerData.subtitle} onChange={handleInputChange} rows={3}
                                    className="w-full px-3 py-2 bg-white border-[2px] border-[#111] text-sm font-bold shadow-[2px_2px_0_0_#111] focus:outline-none focus:border-[#ee6030] focus:shadow-[4px_4px_0_0_#ee6030] transition-all resize-none rounded-none"
                                />
                            </div>

                            {/* Static Info Block inputs (Replacing the CTA inputs) */}
                            <div className="space-y-1 pt-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#111] bg-[#ee6030] px-2 py-0.5 inline-block mb-1">Static Info Block</label>
                                <input
                                    type="text" name="info1" value={bannerData.info1} onChange={handleInputChange}
                                    placeholder="Line 1 (e.g. MARCH 14-29)"
                                    className="w-full px-3 py-2 bg-white border-[2px] border-[#111] text-sm font-black uppercase shadow-[2px_2px_0_0_#111] focus:outline-none focus:border-[#ee6030] focus:shadow-[4px_4px_0_0_#ee6030] transition-all rounded-none mb-2"
                                />
                                <input
                                    type="text" name="info2" value={bannerData.info2} onChange={handleInputChange}
                                    placeholder="Line 2 (e.g. GLOBAL ONLINE)"
                                    className="w-full px-3 py-2 bg-white border-[2px] border-[#111] text-sm font-bold uppercase shadow-[2px_2px_0_0_#111] focus:outline-none focus:border-[#ee6030] focus:shadow-[4px_4px_0_0_#ee6030] transition-all rounded-none"
                                />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Preview Area */}
                <main className="flex-1 overflow-auto flex items-center justify-center p-8 relative wrapper-container bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-50">

                    {/* Scalable Container */}
                    <div
                        style={{
                            transform: `scale(${scale})`,
                            transformOrigin: 'center center',
                            transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        className="flex-shrink-0"
                    >
                        {/* THE ACTUAL BANNER - Strict Dimensions: 1926px x 556px */}
                        <div
                            id="export-banner"
                            style={{ width: '1926px', height: '556px' }}
                            className={`relative flex box-border shadow-[24px_24px_0_0_rgba(17,17,17,1)] transition-colors duration-300 ${isDark ? 'bg-[#151515] border-[6px] border-[#ee6030]' : 'bg-[#FFFFFF] border-[6px] border-[#111]'}`}
                        >

                            {/* Left Column - Main Typography (65% width) */}
                            <div className={`w-[65%] flex flex-col justify-center px-24 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] ${isDark ? 'border-r-[6px] border-[#ee6030] bg-[#111]' : 'border-r-[6px] border-[#111] bg-white'}`}>

                                {/* Background Decor */}
                                <Zap className={`absolute -left-20 top-10 w-96 h-96 opacity-[0.03] ${isDark ? 'text-white' : 'text-[#111]'}`} />

                                {/* Eyebrow tag */}
                                <div className={`inline-flex items-center gap-3 border-[3px] px-6 py-3 w-max uppercase font-bold text-lg tracking-widest mb-12 relative z-10 ${isDark ? 'bg-[#1a1a1a] text-white border-[#ee6030] shadow-[6px_6px_0_0_#ee6030]' : 'bg-[#F4F4F0] text-[#111] border-[#111] shadow-[6px_6px_0_0_#111]'}`}>
                                    <span className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#ee6030] shadow-[0_0_12px_#ee6030]' : 'bg-[#ee6030] border-2 border-[#111]'}`}></span>
                                    {bannerData.eyebrow || "ENTER EYEBROW"}
                                </div>

                                {/* Main Title Stack */}
                                <h1 className={`text-[130px] leading-[0.85] font-black tracking-tighter uppercase relative z-10 ${isDark ? 'text-white' : 'text-[#111]'}`}>
                                    {bannerData.title1} <br />
                                    <span
                                        className="text-transparent bg-clip-text inline-block my-2"
                                        style={{ WebkitTextStroke: isDark ? '4px #ee6030' : '4px #111' }}
                                    >
                                        {bannerData.title2}
                                    </span> <br />
                                    {bannerData.title3}
                                </h1>
                            </div>

                            {/* Right Column - Split 50/50 vertically (35% width) */}
                            <div className="w-[35%] flex flex-col">

                                {/* Top Half - Subtitle/Stat box */}
                                <div className={`h-[55%] p-14 flex flex-col justify-center relative overflow-hidden ${isDark ? 'bg-[#1a1a1a] border-b-[6px] border-[#ee6030] text-white' : 'bg-[#ee6030] border-b-[6px] border-[#111] text-[#111]'}`}>
                                    <Target className={`absolute -right-16 -bottom-16 w-80 h-80 opacity-10 transform -rotate-12 ${isDark ? 'text-[#ee6030]' : 'text-[#111]'}`} />

                                    <div className={`text-sm font-black uppercase tracking-widest mb-6 w-max px-3 py-1 border-[2px] ${isDark ? 'border-[#ee6030] text-[#ee6030] bg-[#111]' : 'border-[#111] text-[#111] bg-white shadow-[4px_4px_0_0_#111]'}`}>
                                        The Core Rule
                                    </div>

                                    <p className={`font-black text-4xl uppercase leading-tight tracking-tighter relative z-10 ${isDark ? 'text-white' : 'text-white drop-shadow-[2px_2px_0_#111]'}`}>
                                        {bannerData.subtitle || "Enter your subtitle text here"}
                                    </p>
                                </div>

                                {/* Bottom Half - Static Info Block (Replaced CTA) */}
                                <div className={`h-[45%] p-12 flex items-center justify-center relative ${isDark ? 'bg-[#111]' : 'bg-[#FFFFFF]'}`}>
                                    <div className={`w-full h-full flex flex-col justify-center p-8 border-[6px] relative overflow-hidden ${isDark
                                            ? 'bg-[#1a1a1a] border-[#ee6030] shadow-[12px_12px_0_0_#ee6030]'
                                            : 'bg-[#F4F4F0] border-[#111] shadow-[12px_12px_0_0_rgba(238,96,48,1)]'
                                        }`}>

                                        <Calendar className={`absolute -right-4 -top-4 w-32 h-32 opacity-[0.04] ${isDark ? 'text-white' : 'text-[#111]'}`} />

                                        <h3 className={`text-5xl 2xl:text-6xl font-black uppercase tracking-tighter mb-2 relative z-10 ${isDark ? 'text-white' : 'text-[#111]'}`}>
                                            {bannerData.info1 || "ENTER INFO 1"}
                                        </h3>
                                        <h4 className={`text-2xl 2xl:text-3xl font-bold uppercase tracking-widest relative z-10 ${isDark ? 'text-[#ee6030]' : 'text-[#ee6030] drop-shadow-[1px_1px_0_#111]'}`}>
                                            {bannerData.info2 || "ENTER INFO 2"}
                                        </h4>

                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* END OF BANNER */}

                        <div className="text-left mt-6 text-[#111] font-black tracking-widest text-sm opacity-60 flex items-center justify-between">
                            <span>OUTPUT DIMENSIONS: 1926 x 556 PX</span>
                            <span>AESTHETIC: NEO-BRUTALISM (STATIC)</span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}