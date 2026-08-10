import React from 'react';
import { Home, Users, Cpu, Mail, Bot, X, Shield, ChevronRight, Zap } from 'lucide-react';
import { TabType } from '../types';
import { ViyonLogo } from './ViyonLogo';
import { COMPANY_INFO } from '../data/companyData';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenZoya: () => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  onSelectTab,
  onOpenZoya,
}) => {
  if (!isOpen) return null;

  const navItems = [
    {
      id: 'home' as TabType,
      label: 'Home',
      icon: Home,
      subtext: 'Vision, Mission, Motto & Core Values',
    },
    {
      id: 'about' as TabType,
      label: 'About',
      icon: Users,
      subtext: 'Founders, Engineers & Leadership Team',
    },
    {
      id: 'product' as TabType,
      label: 'Product',
      icon: Cpu,
      subtext: 'CERON OS & Defence AI Platform',
    },
    {
      id: 'enquiry' as TabType,
      label: 'Enquiry',
      icon: Mail,
      subtext: 'Direct Mail Contact & Defense Requests',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        id="sidebar-backdrop"
      />

      {/* Sliding Tab Drawer Panel */}
      <div className="relative w-72 max-w-[85vw] h-full bg-[#03150d]/95 border-r border-emerald-900/40 backdrop-blur-xl text-white shadow-[0_0_50px_rgba(16,185,129,0.3)] flex flex-col justify-between z-10 transition-transform duration-300 transform translate-x-0 overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-emerald-900/30 bg-emerald-950/40">
            <ViyonLogo size={36} showText={true} />
            <button
              onClick={onClose}
              id="btn-close-sidebar"
              className="p-1.5 rounded-lg bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-5 space-y-2">
            <p className="text-[10px] font-mono font-bold tracking-widest text-emerald-500 uppercase mb-3 px-2">
              NAVIGATION PORTAL
            </p>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => {
                    onSelectTab(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                    isActive
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                      : 'bg-transparent border-transparent text-emerald-100/60 hover:bg-emerald-500/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive
                          ? 'bg-emerald-500 text-emerald-950 font-black'
                          : 'bg-emerald-900/30 text-emerald-400 group-hover:text-emerald-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium text-sm block font-sans">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-emerald-300/60 block leading-tight font-sans">
                        {item.subtext}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-emerald-400 translate-x-1' : 'text-emerald-700 group-hover:text-emerald-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Zoya Assistant Special Quick Link */}
          <div className="p-4 pt-2">
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-900/80 via-teal-950 to-emerald-950 border border-emerald-400/40 shadow-inner">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300">
                  <Bot className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-emerald-300">
                    ZOYA AI ASSISTANT
                  </h4>
                  <p className="text-[10px] text-emerald-200/80">
                    Natural Language Site Navigation
                  </p>
                </div>
              </div>
              <p className="text-xs text-emerald-100/90 mb-3 leading-relaxed">
                Type simple commands to query founders, CERON OS features, vision, or jump directly to windows.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenZoya();
                }}
                id="btn-launch-zoya-sidebar"
                className="w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.5)]"
              >
                <Zap className="w-3.5 h-3.5" />
                Launch Zoya Chat
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-emerald-500/30 bg-emerald-950/80 text-[11px] font-mono text-emerald-400/80 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-emerald-300">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>{COMPANY_INFO.name}</span>
          </div>
          <p className="text-emerald-400/60">{COMPANY_INFO.motto}</p>
          <p className="text-[10px] text-emerald-500/60 pt-1">
            © 2026 VIYON DEFENCE TECH. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};
