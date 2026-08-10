import React, { useState } from 'react';
import { Users, Mail, Shield, Cpu, Code, Wrench, Award, CheckCircle2, ChevronRight, Sparkles, X } from 'lucide-react';
import { TEAM_MEMBERS, COMPANY_INFO } from '../data/companyData';
import { TeamMember } from '../types';

export const AboutTab: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const getRoleBadgeColor = (category: string) => {
    switch (category) {
      case 'Founder':
        return 'bg-gradient-to-r from-emerald-500 to-teal-500 text-emerald-950 border-emerald-300';
      case 'Co-Founder':
        return 'bg-gradient-to-r from-teal-500 to-cyan-500 text-teal-950 border-cyan-300';
      default:
        return 'bg-emerald-900/80 text-emerald-300 border-emerald-500/40';
    }
  };

  const getRoleIcon = (role: string) => {
    if (role.includes('Founder')) return <Shield className="w-4 h-4 text-emerald-400" />;
    if (role.includes('AI')) return <Cpu className="w-4 h-4 text-teal-400" />;
    if (role.includes('Software')) return <Code className="w-4 h-4 text-emerald-300" />;
    return <Award className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="rounded-2xl bg-[#03150d]/80 backdrop-blur-xl border border-emerald-900/40 p-6 sm:p-8 relative overflow-hidden shadow-[0_0_25px_rgba(16,185,129,0.2)]">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>Leadership & Engineering Command</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Pioneers Behind VIYON Defence
          </h1>

          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
            Meet the founders, AI architects, software engineers, and hardware specialists building next-generation autonomous defence intelligence for national security.
          </p>
        </div>
      </div>

      {/* Leadership & Key Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            id={`team-card-${member.id}`}
            onClick={() => setSelectedMember(member)}
            className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 p-5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] cursor-pointer overflow-hidden flex flex-col justify-between backdrop-blur-sm"
          >
            {/* Top Badge & Position */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase border tracking-wider shadow-sm flex items-center gap-1.5 ${getRoleBadgeColor(
                    member.category
                  )}`}
                >
                  {getRoleIcon(member.role)}
                  <span>{member.role}</span>
                </span>

                <span className="text-[11px] font-mono text-emerald-400/80 group-hover:text-emerald-300 flex items-center gap-1">
                  <span>View Bio</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>

              {/* Photo & Profile Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Photo / Avatar Box */}
                <div className="relative w-24 h-28 shrink-0 rounded-xl overflow-hidden border-2 border-emerald-500/40 group-hover:border-emerald-400 shadow-md bg-emerald-950 flex items-center justify-center">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const src = target.src;
                      if (src.endsWith('.jpeg')) {
                        target.src = `/team/${member.id}.jpg`;
                      } else if (src.endsWith('.jpg')) {
                        target.src = `/team/${member.id}.png`;
                      } else if (src.endsWith('.png')) {
                        target.src = `/team/${member.id}.webp`;
                      } else if (src.endsWith('.webp')) {
                        target.src = `/team/${member.id}.JPEG`;
                      } else if (src.endsWith('.JPEG')) {
                        target.src = `/team/${member.id}.JPG`;
                      } else {
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          member.name
                        )}&background=022c22&color=10b981&bold=true&size=256`;
                      }
                    }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-1 text-center">
                    <span className="text-[9px] font-mono font-bold text-emerald-300 uppercase tracking-tighter">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Name, Position & Details */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-emerald-400 uppercase">
                    {member.position}
                  </p>
                  <p className="text-xs text-emerald-100/90 line-clamp-3 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="pt-3 border-t border-emerald-500/20 flex flex-wrap gap-1.5">
              {member.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-emerald-900/50 border border-emerald-500/20 text-[10px] font-mono text-emerald-300"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Organizational Matrix & Technical Positions */}
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 space-y-4">
        <div className="flex items-center gap-3 border-b border-white/10 pb-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-sans">
              Specialized Defence Engineering Positions
            </h3>
            <p className="text-xs font-mono text-emerald-400">
              CROSS-FUNCTIONAL DEEP-TECH DISCIPLINE MATRIX
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">
              FOUNDER & CEO
            </span>
            <p className="text-xs text-emerald-100/70">
              Strategic vision, defence AI roadmap, investor relations & corporate governance.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">
              CO-FOUNDER & CTO
            </span>
            <p className="text-xs text-emerald-100/70">
              Hardware-software integration, autonomous robotics & field operations.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-300 uppercase block">
              AI SYSTEMS ENGINEER
            </span>
            <p className="text-xs text-emerald-100/70">
              Multi-sensor deep learning models, threat perception & ECM algorithms.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-300 uppercase block">
              SOFTWARE ENGINEER (CERON OS)
            </span>
            <p className="text-xs text-emerald-100/70">
              Low-latency command dashboard, real-time telemetry kernel & radar displays.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">
              HARDWARE & EMBEDDED ENGINEER
            </span>
            <p className="text-xs text-emerald-100/70">
              FPGA acceleration, RF sensor arrays, tactical radio telemetry & edge compute.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">
              DEFENCE RESEARCH ANALYST
            </span>
            <p className="text-xs text-emerald-100/70">
              Threat intelligence modeling, NATO/Defence compliance & mission protocols.
            </p>
          </div>
        </div>
      </div>

      {/* Selected Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#051a10]/95 border border-emerald-500/30 rounded-2xl p-6 shadow-2xl text-white space-y-4">
            <button
              onClick={() => setSelectedMember(null)}
              id="btn-close-team-modal"
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-20 h-24 rounded-xl overflow-hidden border-2 border-emerald-400 shrink-0 bg-emerald-950">
                <img
                  src={selectedMember.photoUrl}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const src = target.src;
                    if (src.endsWith('.jpeg')) {
                      target.src = `/team/${selectedMember.id}.jpg`;
                    } else if (src.endsWith('.jpg')) {
                      target.src = `/team/${selectedMember.id}.png`;
                    } else if (src.endsWith('.png')) {
                      target.src = `/team/${selectedMember.id}.webp`;
                    } else if (src.endsWith('.webp')) {
                      target.src = `/team/${selectedMember.id}.JPEG`;
                    } else if (src.endsWith('.JPEG')) {
                      target.src = `/team/${selectedMember.id}.JPG`;
                    } else {
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        selectedMember.name
                      )}&background=022c22&color=10b981&bold=true&size=256`;
                    }
                  }}
                />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase block">
                  {selectedMember.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-mono text-emerald-300">
                  {selectedMember.position}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-900/40 border border-emerald-500/20 text-xs text-emerald-100 leading-relaxed">
              <p className="mb-2">{selectedMember.description}</p>
              <p className="text-[11px] font-mono text-emerald-400">
                Setting: {selectedMember.photoSetting}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-2">
                Core Engineering Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedMember.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-emerald-900/60 border border-emerald-500/30 text-xs font-mono text-emerald-200"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setSelectedMember(null)}
                className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs font-mono uppercase cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
