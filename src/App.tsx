import React, { useState } from 'react';
import { TabType } from './types';
import { HeaderNav } from './components/HeaderNav';
import { SidebarDrawer } from './components/SidebarDrawer';
import { HomeTab } from './components/HomeTab';
import { AboutTab } from './components/AboutTab';
import { ProductTab } from './components/ProductTab';
import { EnquiryTab } from './components/EnquiryTab';
import { ZoyaChatbot } from './components/ZoyaChatbot';
import { BackgroundSpace } from './components/BackgroundSpace';
import { Bot } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isZoyaOpen, setIsZoyaOpen] = useState<boolean>(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeTab
            onNavigateTab={(tab) => setActiveTab(tab)}
            onOpenZoya={() => setIsZoyaOpen(true)}
          />
        );
      case 'about':
        return <AboutTab />;
      case 'product':
        return <ProductTab />;
      case 'enquiry':
        return <EnquiryTab />;
      default:
        return (
          <HomeTab
            onNavigateTab={(tab) => setActiveTab(tab)}
            onOpenZoya={() => setIsZoyaOpen(true)}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#010805] text-emerald-50 selection:bg-emerald-500 selection:text-emerald-950 font-sans overflow-x-hidden">
      {/* 3D Live Space Particle & Hypercastle Radar Canvas Background */}
      <BackgroundSpace />

      {/* Main Header Navigation Bar */}
      <HeaderNav
        onToggleSidebar={() => setIsSidebarOpen(true)}
        onOpenZoya={() => setIsZoyaOpen(true)}
        activeTab={activeTab}
      />

      {/* Sliding Navigation Drawer from Left */}
      <SidebarDrawer
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
        onOpenZoya={() => setIsZoyaOpen(true)}
      />

      {/* Active Tab Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-24">
        {/* Active Tab Indicator Bar */}
        <div className="mb-6 flex items-center justify-between bg-[#03150d]/80 border border-emerald-900/40 px-4 py-2 rounded-xl backdrop-blur-md text-xs font-mono text-emerald-300 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <span className="uppercase font-bold text-white tracking-wider">
              CURRENT VIEW: {activeTab.toUpperCase()} WINDOW
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-emerald-400">
            <span className="hidden sm:inline font-bold tracking-widest">DEFENCE PORTAL v2.6</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              SECURE
            </span>
          </div>
        </div>

        {/* Render Tab Component */}
        {renderActiveTab()}
      </main>

      {/* Floating Zoya AI Chatbot Launch Widget (Bottom Right) */}
      <button
        onClick={() => setIsZoyaOpen(true)}
        id="btn-floating-zoya"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 text-emerald-950 font-black shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2 border border-emerald-200"
      >
        <Bot className="w-6 h-6 animate-bounce text-emerald-950" />
        <span className="font-mono text-xs uppercase tracking-wider hidden sm:inline">
          Zoya Assistant
        </span>
      </button>

      {/* Zoya AI Chatbot Modal Dialogue */}
      <ZoyaChatbot
        isOpen={isZoyaOpen}
        onClose={() => setIsZoyaOpen(false)}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />
    </div>
  );
}
