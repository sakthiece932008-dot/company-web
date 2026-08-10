import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, RefreshCw, ShieldCheck, Building2, Phone, User, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { EnquiryForm } from '../types';

export const EnquiryTab: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryForm>({
    name: '',
    email: '',
    contact: '',
    organization: '',
    subject: 'CERON OS Partnership & Product Enquiry',
    details: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate unique reference ID
    const refNum = `VY-ENQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(refNum);

    // Construct Mailto Link to send directly to viyondefencetech@gmail.com
    const mailSubject = encodeURIComponent(`[${refNum}] ${formData.subject} - ${formData.name}`);
    const mailBody = encodeURIComponent(
      `OFFICIAL DEFENCE & PARTNERSHIP ENQUIRY\n` +
      `Reference Code: ${refNum}\n` +
      `----------------------------------------\n` +
      `Sender Name: ${formData.name}\n` +
      `Email Address: ${formData.email}\n` +
      `Contact Number: ${formData.contact || 'N/A'}\n` +
      `Organization/Ministry: ${formData.organization || 'Independent/Defence Sector'}\n` +
      `Subject Category: ${formData.subject}\n\n` +
      `ENQUIRY DETAILS & MESSAGE:\n` +
      `${formData.details}\n\n` +
      `----------------------------------------\n` +
      `Sent via VIYON Defence Technologies Web Portal`
    );

    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${mailSubject}&body=${mailBody}`;

    // Open user's email client directly
    window.location.href = mailtoUrl;

    // Show instant confirmation overlay inside the app
    setSubmitted(true);
  };

  const handleCopyText = () => {
    const fullText =
      `VIYON DEFENCE ENQUIRY [${referenceId}]\n` +
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.contact}\nOrg: ${formData.organization}\nDetails:\n${formData.details}`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      contact: '',
      organization: '',
      subject: 'CERON OS Partnership & Product Enquiry',
      details: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-2xl bg-[#03150d]/80 backdrop-blur-xl border border-emerald-900/40 p-6 sm:p-8 relative overflow-hidden shadow-[0_0_25px_rgba(16,185,129,0.2)]">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>Official Defense Communications</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Direct Corporate Enquiry Portal
          </h1>

          <p className="text-emerald-100/80 text-sm leading-relaxed">
            Submit your enquiry regarding CERON OS deployment, defence procurement, joint R&D partnerships, or investment. Hitting Send opens your email client pre-filled to send directly to{' '}
            <strong className="text-emerald-400 underline font-mono">{COMPANY_INFO.email}</strong>.
          </p>
        </div>
      </div>

      {/* Main Enquiry Form Card */}
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-8 space-y-6 shadow-xl">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Commander Vikram Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 text-white placeholder-emerald-500/40 text-sm outline-none font-sans"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Official Email Address *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. name@defence.gov.in"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 text-white placeholder-emerald-500/40 text-sm outline-none font-sans"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Contact Number *</span>
                </label>
                <input
                  type="tel"
                  name="contact"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 text-white placeholder-emerald-500/40 text-sm outline-none font-sans"
                />
              </div>

              {/* Organization / Ministry */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Organization / Ministry / Entity</span>
                </label>
                <input
                  type="text"
                  name="organization"
                  placeholder="e.g. Defence Research Org / Armed Forces"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 text-white placeholder-emerald-500/40 text-sm outline-none font-sans"
                />
              </div>
            </div>

            {/* Subject Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-emerald-300 uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enquiry Category</span>
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-emerald-900/80 border border-emerald-500/30 focus:border-emerald-400 text-white text-sm outline-none font-sans"
              >
                <option value="CERON OS Partnership & Product Enquiry">CERON OS Partnership & Product Demonstration</option>
                <option value="Defence Procurement & Licensing">Defence Procurement & Technology Licensing</option>
                <option value="R&D Co-Development & Autonomous AI">R&D Co-Development & Autonomous AI Integration</option>
                <option value="Investor Relations & Founder Meeting">Investor Relations & Executive Founder Meeting</option>
                <option value="General Defence Query">General Defence Technology Query</option>
              </select>
            </div>

            {/* Message Details */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-emerald-300 uppercase flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enquiry Content & Detailed Requirements *</span>
              </label>
              <textarea
                name="details"
                required
                rows={5}
                placeholder="Provide detailed specifications, mission parameters, timeline, or questions for VIYON Defence Technologies..."
                value={formData.details}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-emerald-900/40 border border-emerald-500/30 focus:border-emerald-400 text-white placeholder-emerald-500/50 text-sm outline-none font-sans leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              id="btn-submit-enquiry-form"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 font-black text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Send Enquiry Direct to viyondefencetech@gmail.com</span>
            </button>
          </form>
        ) : (
          /* Submission Receipt Box */
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-900 border border-emerald-400 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest">
                REF CODE: {referenceId}
              </span>
              <h2 className="text-2xl font-bold text-white">
                Email Client Launched Successfully!
              </h2>
              <p className="text-emerald-100 text-sm max-w-lg mx-auto">
                Your enquiry details have been prepared and opened in your visitor email client to send directly to{' '}
                <strong className="text-emerald-300 font-mono">{COMPANY_INFO.email}</strong>.
              </p>
            </div>

            {/* Form Summary Card */}
            <div className="max-w-lg mx-auto p-4 rounded-xl bg-emerald-900/30 border border-emerald-500/30 text-left text-xs font-mono space-y-2">
              <p><strong className="text-emerald-400">Name:</strong> {formData.name}</p>
              <p><strong className="text-emerald-400">Email:</strong> {formData.email}</p>
              <p><strong className="text-emerald-400">Contact:</strong> {formData.contact}</p>
              <p><strong className="text-emerald-400">Category:</strong> {formData.subject}</p>
              <p><strong className="text-emerald-400">Message:</strong> {formData.details}</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleCopyText}
                className="px-4 py-2 rounded-xl bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 hover:text-white text-xs font-mono flex items-center gap-2 transition-all cursor-pointer"
              >
                <Copy className="w-4 h-4 text-emerald-400" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Form Summary'}</span>
              </button>

              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-emerald-950 font-bold text-xs font-mono uppercase flex items-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Send Another Enquiry</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
