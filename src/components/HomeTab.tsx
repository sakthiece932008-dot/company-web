import React, { useState, useEffect } from 'react';
import { Shield, Eye, Target, Cpu, Play, RotateCcw, ArrowRight, Zap, CheckCircle2, Award, Radar } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { TabType } from '../types';

interface HomeTabProps {
  onNavigateTab: (tab: TabType) => void;
  onOpenZoya: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigateTab, onOpenZoya }) => {
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
  };

  return (
    <div className="space-y-8 animate-fadeIn">
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
            </div>
          )}
        </div>

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
          </button>

          <button
            onClick={() => onNavigateTab('about')}
            id="btn-home-view-team"
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-200 hover:text-white font-bold text-sm font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Leadership & Team</span>
          </button>

          <button
            onClick={() => onNavigateTab('enquiry')}
            id="btn-home-send-enquiry"
            className="px-5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-sm font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4 text-emerald-400" />
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
