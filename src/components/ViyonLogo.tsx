import React from 'react';

interface ViyonLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  animated?: boolean;
}

export const ViyonLogo: React.FC<ViyonLogoProps> = ({
  className = '',
  size = 40,
  showText = true,
  animated = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* V Shield Emblem SVG */}
      <div className={`relative flex items-center justify-center ${animated ? 'animate-pulse' : ''}`}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]"
        >
          <defs>
            {/* Metallic Silver Gradient */}
            <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#CBD5E1" />
              <stop offset="70%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Tactical Emerald/Cyan Gradient */}
            <linearGradient id="cyberGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#065F46" />
            </linearGradient>

            {/* Electric Blue Ring Accent */}
            <linearGradient id="blueRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Tactical Outer Radar Ring */}
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="url(#blueRing)"
            strokeWidth="3.5"
            strokeDasharray="8 4"
            className={animated ? 'animate-[spin_20s_linear_infinite]' : ''}
          />
          <circle
            cx="60"
            cy="60"
            r="42"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />

          {/* V Wing - Left Wing */}
          <path
            d="M 22 34 L 52 88 L 60 76 L 38 34 Z"
            fill="url(#silverGrad)"
            stroke="#10B981"
            strokeWidth="0.8"
          />

          {/* V Wing - Right Wing */}
          <path
            d="M 98 34 L 68 88 L 60 76 L 82 34 Z"
            fill="url(#silverGrad)"
            stroke="#10B981"
            strokeWidth="0.8"
          />

          {/* Outer Sharp Accents */}
          <path
            d="M 18 28 L 38 28 L 52 58 L 44 62 Z"
            fill="url(#silverGrad)"
            opacity="0.9"
          />
          <path
            d="M 102 28 L 82 28 L 68 58 L 76 62 Z"
            fill="url(#silverGrad)"
            opacity="0.9"
          />

          {/* Central Arrow Spearhead */}
          <path
            d="M 60 14 L 69 48 L 60 42 L 51 48 Z"
            fill="url(#cyberGreenGrad)"
            stroke="#ECFDF5"
            strokeWidth="1"
          />
          <path
            d="M 60 42 L 65 92 L 60 98 L 55 92 Z"
            fill="url(#silverGrad)"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-xl font-black tracking-[0.2em] text-white font-mono">
              VIY
            </span>
            <span className="relative flex items-center justify-center w-5 h-5 border border-emerald-400/80 bg-emerald-950/60 rounded-xs">
              <span className="w-2 h-2 bg-emerald-400 rounded-xs animate-pulse"></span>
            </span>
            <span className="text-xl font-black tracking-[0.2em] text-white font-mono">
              N
            </span>
          </div>
          <span className="text-[9px] font-bold tracking-[0.25em] text-emerald-400 uppercase font-mono leading-none">
            DEFENCE TECH
          </span>
        </div>
      )}
    </div>
  );
};
