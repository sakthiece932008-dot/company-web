import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, MessageSquare, Shield, ArrowRight, CornerDownLeft } from 'lucide-react';
import { ChatMessage, TabType } from '../types';
import { COMPANY_INFO, ZOYA_FAQS, TEAM_MEMBERS, PRODUCTS } from '../data/companyData';

interface ZoyaChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: TabType) => void;
}

export const ZoyaChatbot: React.FC<ZoyaChatbotProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'zoya',
      text: `Hello! I am Zoya, your AI Assistant for VIYON Defence Technologies. You can ask me about our Founders, CERON OS, Vision, Mission, or ask me to navigate the website directly with a single prompt!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    'Take me to Products',
    'Who is the Founder?',
    'What is CERON OS?',
    'Show Vision & Mission',
    'How do I send an Enquiry?',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const promptText = (textToSend || inputPrompt).trim();
    if (!promptText) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputPrompt('');

    // Process Rule-Based Intelligence
    setTimeout(() => {
      const lower = promptText.toLowerCase();
      let responseText = '';
      let targetTab: TabType | undefined;
      let actionLabelText: string | undefined;

      // Intent Matching - Priority checks for specific team members and roles
      if (
        lower.includes('co-founder') ||
        lower.includes('cofounder') ||
        lower.includes('co founder') ||
        lower.includes('sanjay') ||
        lower.includes('cto')
      ) {
        targetTab = 'about';
        responseText = `Sanjay Deivasigamani is the Co-Founder & CTO of VIYON Defence Technologies. He leads hardware-software integration, autonomous systems engineering, and multi-sensor edge intelligence.`;
        actionLabelText = 'View Co-Founder Profile';
      } else if (
        lower.includes('software engineer') ||
        lower.includes('software developer') ||
        lower.includes('platform architect') ||
        lower.includes('rohith')
      ) {
        targetTab = 'about';
        responseText = `Rohith Varatharaj is the Lead Software Engineer & CERON OS Platform Architect. He is responsible for the core high-performance kernel, real-time command dashboard, and low-latency tactical pipelines.`;
        actionLabelText = 'View Software Engineer Profile';
      } else if (
        lower.includes('ai engineer') ||
        lower.includes('ai developer') ||
        lower.includes('ai specialist') ||
        lower.includes('threat perception') ||
        lower.includes('rubesh')
      ) {
        targetTab = 'about';
        responseText = `Rubesh Chinnasamy is the Lead AI Engineer & Threat Perception Specialist. He pioneers real-time deep learning models, neural threat evaluation, and multi-sensor target classification algorithms for CERON OS.`;
        actionLabelText = 'View AI Engineer Profile';
      } else if (
        lower.includes('founder') ||
        lower.includes('ceo') ||
        lower.includes('sakthi') ||
        lower.includes('who started')
      ) {
        targetTab = 'about';
        responseText = `Sakthi Saravanan is the Founder & CEO of VIYON Defence Technologies. He leads core strategic vision, defence AI architecture, and enterprise growth.`;
        actionLabelText = 'View Founder Profile';
      } else if (
        lower.includes('team') ||
        lower.includes('leadership') ||
        lower.includes('members') ||
        lower.includes('who built')
      ) {
        targetTab = 'about';
        responseText = `VIYON Defence Technologies Leadership & Engineering Team:\n• Founder & CEO: Sakthi Saravanan\n• Co-Founder & CTO: Sanjay Deivasigamani\n• Lead AI Engineer: Rubesh Chinnasamy\n• Lead Software Engineer: Rohith Varatharaj`;
        actionLabelText = 'View Complete Team';
      } else if (
        lower.includes('product') ||
        lower.includes('ceron') ||
        lower.includes('os') ||
        lower.includes('platform')
      ) {
        targetTab = 'product';
        responseText = `CERON OS is VIYON's flagship AI tactical command operating system. It processes multi-sensor radar, thermal, and RF feeds in real-time (<50ms latency) to evaluate operational threats and recommend Electronic Counter Measures (ECM).`;
        actionLabelText = 'Open CERON OS Window';
      } else if (
        lower.includes('enquiry') ||
        lower.includes('contact') ||
        lower.includes('mail') ||
        lower.includes('reach')
      ) {
        targetTab = 'enquiry';
        responseText = `You can submit your enquiry directly via our Enquiry form, which opens your visitor mail client pre-filled to viyondefencetech@gmail.com.`;
        actionLabelText = 'Go to Enquiry Portal';
      } else if (
        lower.includes('vision') ||
        lower.includes('mission') ||
        lower.includes('motto') ||
        lower.includes('home') ||
        lower.includes('tagline')
      ) {
        targetTab = 'home';
        responseText = `Motto: "${COMPANY_INFO.motto}" | Tagline: "${COMPANY_INFO.tagline}"\nVision: "${COMPANY_INFO.vision}"`;
        actionLabelText = 'Go to Home Dashboard';
      } else {
        // Fallback matched FAQ or general answer
        const match = ZOYA_FAQS.find((faq) => faq.keywords.some((kw) => lower.includes(kw)));
        if (match) {
          responseText = match.answer;
          targetTab = match.tab;
          actionLabelText = `Navigate to ${match.tab.toUpperCase()}`;
        } else {
          responseText = `I am Zoya AI. I can answer questions about our team: Sakthi Saravanan (Founder & CEO), Sanjay Deivasigamani (Co-Founder & CTO), Rubesh Chinnasamy (Lead AI Engineer), and Rohith Varatharaj (Lead Software Engineer), or show you CERON OS details.`;
        }
      }

      // If a navigation tab action was triggered, navigate automatically!
      if (targetTab) {
        onNavigateTab(targetTab);
      }

      const zoyaMsg: ChatMessage = {
        id: `zoy-${Date.now()}`,
        sender: 'zoya',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionRequired: targetTab,
        actionLabel: actionLabelText,
      };

      setMessages((prev) => [...prev, zoyaMsg]);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Zoya Dialogue Window Container */}
      <div className="relative w-full max-w-lg h-[580px] max-h-[90vh] bg-[#03150d]/95 border border-emerald-900/40 backdrop-blur-2xl rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.2)] flex flex-col overflow-hidden text-white">
        {/* Header */}
        <div className="p-4 bg-emerald-950/80 border-b border-emerald-900/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Bot className="w-6 h-6 animate-pulse text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-mono font-black text-base text-white tracking-wider">
                  ZOYA AI ASSISTANT
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
              </div>
              <p className="text-[11px] text-emerald-400/80 font-mono">
                VIYON Intelligent Web Guide
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            id="btn-close-zoya"
            className="p-1.5 rounded-lg bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-white rounded-br-none shadow-md'
                    : 'bg-white/5 border border-white/10 text-emerald-100 rounded-bl-none shadow-inner'
                }`}
              >
                <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

                {msg.actionRequired && (
                  <button
                    onClick={() => {
                      onNavigateTab(msg.actionRequired!);
                      onClose();
                    }}
                    className="mt-2 w-full py-1.5 px-2.5 rounded bg-emerald-500 text-emerald-950 font-mono font-bold text-[10px] uppercase flex items-center justify-between hover:bg-emerald-400 cursor-pointer transition-all"
                  >
                    <span>{msg.actionLabel || 'Jump to Window'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
              <span className="text-[9px] font-mono text-emerald-500/80 px-1 pt-0.5">
                {msg.timestamp}
              </span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Prompts Bar */}
        <div className="p-2 border-t border-emerald-500/20 bg-emerald-950/80 overflow-x-auto whitespace-nowrap flex items-center gap-1.5 text-[10px] font-mono">
          <span className="text-emerald-400 font-bold px-1 shrink-0">QUICK:</span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-2.5 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-all shrink-0 cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Field */}
        <div className="p-3 bg-emerald-950 border-t border-emerald-500/30 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask Zoya or type 'Take me to CERON OS'..."
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-emerald-900/40 border border-emerald-500/40 text-white placeholder-emerald-500/60 text-xs outline-none focus:border-emerald-400 font-sans"
          />
          <button
            onClick={() => handleSendMessage()}
            id="btn-zoya-send-prompt"
            className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold transition-all cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.5)]"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
