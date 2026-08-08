import React from 'react';
import { Cpu, Radar, Activity, Layers, Radio, Shield, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/companyData';

export const ProductTab: React.FC = () => {
  const product = PRODUCTS[0]; // CERON OS

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Product Banner */}
      <div className="rounded-2xl bg-[#03150d]/80 backdrop-blur-xl border border-emerald-900/40 p-6 sm:p-8 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>FLAGSHIP DEFENCE PLATFORM</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
              {product.name}
            </h1>
            <span className="text-xs font-mono font-bold text-emerald-400 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              {product.status}
            </span>
          </div>

          <p className="text-base sm:text-lg font-mono text-emerald-300 font-semibold">
            "{product.tagline}"
          </p>

          <p className="text-emerald-100/80 text-sm leading-relaxed font-sans pt-2">
            {product.overview}
          </p>
        </div>
      </div>

      {/* LIVE SECTION: Non-Interactive Visual Live-Feed Display */}
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 sm:p-6 space-y-4 shadow-2xl font-mono text-emerald-300">
        {/* Live Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-500/30 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wider flex items-center gap-2">
                <span>LIVE TACTICAL FEED</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  REAL-TIME DISPLAY
                </span>
              </h2>
              <p className="text-xs text-emerald-400/80">
                CERON OS SENSOR SURVEILLANCE & MULTI-SPECTRAL OPTICAL STREAM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-bold">STREAM: ACTIVE 60FPS</span>
          </div>
        </div>

        {/* Visual Live Feed Display Container (Non-Interactive Display) */}
        <div className="relative w-full rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-video max-h-[480px] shadow-2xl flex items-center justify-center select-none pointer-events-none">
          {/* Tactical Background Visual Feed */}
          <img
            src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200"
            alt="Live Tactical Feed Display"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity filter brightness-90 contrast-125"
          />

          {/* Green Radar/Thermal Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-black/80" />

          {/* Scanning Sweep Grid Line */}
          <div className="absolute inset-0 bg-emerald-500/5 bg-[linear-gradient(to_bottom,transparent_0%,rgba(16,185,129,0.15)_50%,transparent_100%)] animate-[pulse_3s_ease-in-out_infinite]" />

          {/* Grid Overlay Lines */}
          <div className="absolute inset-0 border border-emerald-500/20 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]">
            <div className="w-full h-full border-t border-b border-emerald-500/20 grid grid-cols-4 grid-rows-4">
              <div className="border-r border-emerald-500/10" />
              <div className="border-r border-emerald-500/10" />
              <div className="border-r border-emerald-500/10" />
              <div className="border-r border-emerald-500/10" />
            </div>
          </div>

          {/* Central Target Reticle HUD */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48 rounded-full border border-emerald-400/40 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-dashed border-emerald-400/60 animate-[spin_12s_linear_infinite]" />
              <div className="w-16 h-16 rounded-full border border-emerald-400/80 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
              </div>
              <div className="absolute -top-3 text-[10px] bg-black/80 px-2 py-0.5 rounded border border-emerald-500/40 text-emerald-300 font-mono font-bold">
                LOCK: LAT 13.0827° N / LONG 80.2707° E
              </div>
            </div>
          </div>

          {/* Corner Telemetry HUD Labels */}
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-emerald-500/40 p-2.5 rounded-lg text-[11px] space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Eye className="w-3.5 h-3.5" />
              <span>CAM_01: MULTI-SPECTRAL IR</span>
            </div>
            <div className="text-emerald-200">ALTITUDE: 1,240m AGL</div>
            <div className="text-emerald-200">FPS: 60.0 [LATENCY: 12ms]</div>
          </div>

          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-emerald-500/40 p-2.5 rounded-lg text-[11px] text-right space-y-1">
            <div className="text-emerald-400 font-bold">CERON_AI_VISION</div>
            <div className="text-emerald-200">TARGETS DETECTED: 03</div>
            <div className="text-emerald-400 font-bold">CONFIDENCE: 98.4%</div>
          </div>

          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-lg text-[11px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold tracking-wider">LIVE FEED DISPLAY</span>
          </div>

          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-lg text-[11px] text-emerald-300 font-mono">
            REC 🔴 [00:42:19]
          </div>
        </div>
      </div>

      {/* CERON OS Key Features Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white font-sans flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          <span>Core Capabilities of CERON OS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 hover:border-emerald-400/60 transition-all space-y-2"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-white font-sans">
                {feat.title}
              </h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed font-sans">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications Table */}
      <div className="rounded-2xl bg-emerald-950/60 border border-emerald-500/30 p-6 space-y-4">
        <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-400" />
          <span>CERON OS System Specifications</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          {product.specifications.map((spec, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-500/20 flex flex-col justify-between"
            >
              <span className="text-emerald-400 text-[10px] uppercase font-bold">
                {spec.label}
              </span>
              <span className="text-white font-bold text-sm pt-1">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
