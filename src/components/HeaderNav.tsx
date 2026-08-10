import React from 'react';
import { Menu, Bot, Smartphone, Monitor, ShieldCheck, Activity, Zap } from 'lucide-react';
import { ViyonLogo } from './ViyonLogo';

interface HeaderNavProps {
  onToggleSidebar: () => void;
  onOpenZoya: () => void;
  activeTab: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onToggleSidebar,
  onOpenZoya,
  activeTab,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#03150d]/90 backdrop-blur-xl border-b border-emerald-900/40 px-3 sm:px-6 py-3 transition-all">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Section: Menu Bar (3 lines) fixed + Logo fixed */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button (3 lines) */}
          <button
            onClick={onToggleSidebar}
            id="btn-sidebar-hamburger"
            aria-label="Open Navigation Drawer"
            className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:text-white hover:bg-emerald-500/20 transition-all cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.2)] active:scale-95 flex items-center justify-center"
          >
            <Menu className="w-5 h-5 text-emerald-400" />
          </button>

          {/* Company Logo */}
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ViyonLogo size={36} showText={true} animated={true} />
          </div>
        </div>

        {/* Right Section: Zoya AI Assistant Quick Button */}
        <div className="flex items-center gap-2">
          {/* Zoya AI Chatbot Trigger Button */}
          <button
            onClick={onOpenZoya}
            id="btn-open-zoya-header"
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)] border border-emerald-300/40 active:scale-95 cursor-pointer"
          >
            <Bot className="w-4 h-4 text-emerald-100 animate-bounce" />
            <span className="font-mono uppercase tracking-wider">Zoya AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};
