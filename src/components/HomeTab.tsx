<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Shield, Eye, Target, Cpu, Play, RotateCcw, ArrowRight, Zap, CheckCircle2, Award, Radar } from 'lucide-react';
=======
import React, { useState, useRef } from 'react';
import { Shield, Eye, Target, Cpu, ArrowRight, Zap, CheckCircle2, Award, Radar, Volume2, VolumeX, Play, Pause, Maximize } from 'lucide-react';
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
import { COMPANY_INFO } from '../data/companyData';
import { TabType } from '../types';

interface HomeTabProps {
  onNavigateTab: (tab: TabType) => void;
  onOpenZoya: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigateTab, onOpenZoya }) => {
<<<<<<< HEAD
  const [introStep, setIntroStep] = useState<number>(0);
  const [isPlayingIntro, setIsPlayingIntro] = useState<boolean>(true);

  // Animated intro sequence simulation
  useEffect(() => {
    if (!isPlayingIntro) return;

    const timer1 = setTimeout(() => setIntroStep(1), 1000); // Logo & Motto reveal
    const timer2 = setTimeout(() => setIntroStep(2), 2500); // Vision reveal
    const timer3 = setTimeout(() => setIntroStep(3), 4200); // Mission reveal
    const timer4 = setTimeout(() => setIntroStep(4), 6000); // Full Portal Unlocked

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isPlayingIntro]);

  const handleReplayIntro = () => {
    setIntroStep(0);
    setIsPlayingIntro(true);
=======
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
  };

  return (
    <div className="space-y-8 animate-fadeIn">
<<<<<<< HEAD
      {/* Hero Section with Animated High-Tech Defence Intro */}
      <div className="relative rounded-2xl bg-[#03150d]/80 backdrop-blur-xl border border-emerald-900/40 p-6 sm:p-10 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        {/* Background Radar / Cyber grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_0.5px,transparent_0.5px)] [background-size:30px_30px] opacity-20 pointer-events-none" />

        {/* Top Control Bar for Intro Replay */}
        <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-emerald-900/40">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            <span className="font-bold tracking-[0.2em] uppercase">VIYON DEFENCE TECHNOLOGIES</span>
          </div>

          <button
            onClick={handleReplayIntro}
            id="btn-replay-intro"
            className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-500/20 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Animated Intro</span>
          </button>
        </div>

        {/* Animated Intro Container */}
        <div className="relative z-10 min-h-[220px] flex flex-col justify-center items-center text-center py-4">
          {introStep === 0 && (
            <div className="space-y-4 animate-pulse">
              <div className="w-16 h-16 mx-auto rounded-full border-2 border-emerald-400 border-t-transparent animate-spin flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <Radar className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="font-mono text-sm text-emerald-400 tracking-widest uppercase">
                INITIALIZING VIYON DEFENCE AI KERNEL...
              </p>
            </div>
          )}

          {introStep >= 1 && (
            <div className="space-y-4 max-w-3xl mx-auto animate-fadeIn">
              <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
                INTELLIGENCE BEYOND DEFENCE
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight font-sans">
                Next-Gen <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
                  Autonomous Defence
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-mono font-bold text-emerald-300 tracking-wider">
                "{COMPANY_INFO.motto}"
              </p>
            </div>
          )}

          {introStep >= 2 && (
            <div className="mt-6 max-w-2xl mx-auto p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-fadeIn">
              <div className="flex items-center justify-center gap-2 mb-1.5 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>Our Vision</span>
              </div>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-sans">
                "{COMPANY_INFO.vision}"
              </p>
            </div>
          )}

          {introStep >= 3 && (
            <div className="mt-4 max-w-2xl mx-auto p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-fadeIn">
              <div className="flex items-center justify-center gap-2 mb-1.5 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Our Mission</span>
              </div>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-sans">
                "{COMPANY_INFO.mission}"
              </p>
=======
      {/* FULL PAGE / FULL VIEWPORT HERO VIDEO INTRO CONTAINER */}
      <div className="relative w-full min-h-[550px] sm:h-[80vh] rounded-3xl overflow-hidden border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.3)] bg-[#021109] flex flex-col justify-between p-6 sm:p-12">
        {/* Background Video Element */}
        {!hasVideoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700"
            onError={() => setHasVideoError(true)}
          >
            <source src="/video/intro.mp4" type="video/mp4" />
            <source src="/video/intro.webm" type="video/webm" />
            <source src="/video/intro.mov" type="video/quicktime" />
          </video>
        ) : null}

        {/* High-Tech Animated Canvas Grid Overlay if video missing */}
        {hasVideoError && (
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        )}

        {/* Cinematic Gradient Backdrop Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#010805] via-[#010805]/65 to-black/40 pointer-events-none" />

        {/* Top Header Bar */}
        <div className="relative z-20 flex items-center justify-between pb-4 border-b border-emerald-500/20">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
            <span className="font-bold tracking-[0.2em] uppercase text-white sm:text-sm">
              VIYON DEFENCE TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* Hero Video Main Content Text Overlay */}
        <div className="relative z-20 max-w-4xl space-y-4 my-auto py-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-mono font-bold tracking-widest uppercase shadow-lg">
            <Radar className="w-4 h-4 text-emerald-400 animate-spin" />
            <span>INTELLIGENCE BEYOND DEFENCE</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight font-sans drop-shadow-md">
            Next-Generation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500">
              Autonomous Defence Intelligence
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-mono font-bold text-emerald-300 tracking-wider">
            "{COMPANY_INFO.motto}"
          </p>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl font-sans drop-shadow">
            {COMPANY_INFO.vision}
          </p>

          {/* Banner notification if intro.mp4 needs to be added */}
          {hasVideoError && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-xs font-mono text-emerald-300 inline-block">
              ℹ️ To play your custom intro video, place <code className="bg-black/50 px-2 py-0.5 rounded text-white">intro.mp4</code> into the <code className="bg-black/50 px-2 py-0.5 rounded text-emerald-400">public/video/</code> folder!
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
            </div>
          )}
        </div>

<<<<<<< HEAD
        {/* Quick CTA buttons */}
        <div className="relative z-10 pt-6 mt-6 border-t border-emerald-900/40 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigateTab('product')}
            id="btn-home-explore-ceron"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black text-sm font-mono uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all cursor-pointer active:scale-95"
          >
            <Cpu className="w-4 h-4" />
            <span>Explore CERON OS</span>
            <ArrowRight className="w-4 h-4" />
=======
        {/* Hero Call-To-Action Navigation Bar */}
        <div className="relative z-20 pt-4 border-t border-emerald-500/20 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigateTab('product')}
            id="btn-home-explore-ceron"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-black text-sm font-mono uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all cursor-pointer active:scale-95"
          >
            <Cpu className="w-5 h-5 text-emerald-950" />
            <span>Explore CERON OS</span>
            <ArrowRight className="w-5 h-5" />
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
          </button>

          <button
            onClick={() => onNavigateTab('about')}
            id="btn-home-view-team"
<<<<<<< HEAD
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-200 hover:text-white font-bold text-sm font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
=======
            className="px-6 py-3 rounded-xl bg-black/60 hover:bg-black/80 border border-emerald-500/40 text-emerald-200 hover:text-white font-bold text-sm font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md"
          >
            <Shield className="w-5 h-5 text-emerald-400" />
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
            <span>Leadership & Team</span>
          </button>

          <button
            onClick={() => onNavigateTab('enquiry')}
            id="btn-home-send-enquiry"
<<<<<<< HEAD
            className="px-5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-sm font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4 text-emerald-400" />
=======
            className="px-6 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md"
          >
            <Zap className="w-5 h-5 text-emerald-400" />
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
            <span>Send Defence Enquiry</span>
          </button>
        </div>
      </div>

      {/* About Company Detailed Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main About Card */}
        <div className="md:col-span-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 space-y-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-sans">
                About VIYON Defence Technologies
              </h2>
              <p className="text-xs font-mono text-emerald-400">
                DEEP-TECH DEFENCE STARTUP
              </p>
            </div>
          </div>

          <p className="text-emerald-100/80 text-sm leading-relaxed font-sans">
            {COMPANY_INFO.about}
          </p>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-emerald-300 font-mono">
                  Autonomous Intelligence
                </h4>
                <p className="text-[11px] text-emerald-100/70">
                  AI-powered real-time data integration for threat prediction.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-emerald-300 font-mono">
                  Human-In-The-Loop
                </h4>
                <p className="text-[11px] text-emerald-100/70">
                  Commanders maintain ultimate decision authority and operational control.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-emerald-300 font-mono">
                  Multi-Sensor Fusion
                </h4>
                <p className="text-[11px] text-emerald-100/70">
                  Combines 3D Radar, IR camera, RF telemetry & IFF data seamlessly.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-emerald-300 font-mono">
                  Modular & Scalable
                </h4>
                <p className="text-[11px] text-emerald-100/70">
                  Future-proof architecture accommodating next-gen hardware.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Motto & Snapshot Specs Card */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-sm p-6 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-white">Core Creed</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#010805]/80 border-l-4 border-emerald-400">
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold block">
                  PREDICT
                </span>
                <p className="text-xs text-emerald-100/90">
                  Anticipate multi-domain threats before strike latency expires.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#010805]/80 border-l-4 border-green-500">
                <span className="text-xs font-mono text-green-400 uppercase font-bold block">
                  PROTECT
                </span>
                <p className="text-xs text-emerald-100/90">
                  Safeguard critical national security assets and human lives.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#010805]/80 border-l-4 border-emerald-300">
                <span className="text-xs font-mono text-emerald-300 uppercase font-bold block">
                  PREVAIL
                </span>
                <p className="text-xs text-emerald-100/90">
                  Achieve tactical air, land & RF domain superiority.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-500/30 text-center">
              <p className="text-[11px] font-mono text-emerald-300/80">
                OFFICIAL INQUIRY MAIL
              </p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-xs font-mono font-bold text-white hover:text-emerald-300 underline underline-offset-4"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
