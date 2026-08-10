import React, { useState, useRef } from 'react';
import { Shield, Eye, Target, Cpu, ArrowRight, Zap, CheckCircle2, Award, Radar, Volume2, VolumeX, Play, Pause, Maximize } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { TabType } from '../types';

interface HomeTabProps {
  onNavigateTab: (tab: TabType) => void;
  onOpenZoya: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigateTab, onOpenZoya }) => {
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
  };

  return (
    <div className="space-y-8 animate-fadeIn">
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
            </div>
          )}
        </div>

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
          </button>

          <button
            onClick={() => onNavigateTab('about')}
            id="btn-home-view-team"
            className="px-6 py-3 rounded-xl bg-black/60 hover:bg-black/80 border border-emerald-500/40 text-emerald-200 hover:text-white font-bold text-sm font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md"
          >
            <Shield className="w-5 h-5 text-emerald-400" />
            <span>Leadership & Team</span>
          </button>

          <button
            onClick={() => onNavigateTab('enquiry')}
            id="btn-home-send-enquiry"
            className="px-6 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md"
          >
            <Zap className="w-5 h-5 text-emerald-400" />
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
