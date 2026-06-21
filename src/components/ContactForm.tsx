"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.program) return;

    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#8CC63F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto z-10 relative">
        
        {/* Form Card wrapper with glass-like styling */}
        <div className="bg-white/90 backdrop-blur-md border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-100/50">
          
          {!isSubmitted ? (
            <>
              {/* Form Heading & Intro */}
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-extrabold text-[#3C3C3C] mb-3">
                  Be the First to Know
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our elite programs are launching soon. Register your interest today to secure early access.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#3C3C3C] font-sans">
                    Full Name <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#8CC63F]/50 focus:bg-white outline-none text-sm text-slate-800 transition-all placeholder:text-slate-400 font-sans"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#3C3C3C] font-sans">
                    Email Address <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#8CC63F]/50 focus:bg-white outline-none text-sm text-slate-800 transition-all placeholder:text-slate-400 font-sans"
                  />
                </div>

                {/* Phone Number (Optional) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#3C3C3C] font-sans">
                    Phone Number <span className="text-slate-400 text-[10px] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#8CC63F]/50 focus:bg-white outline-none text-sm text-slate-800 transition-all placeholder:text-slate-400 font-sans"
                  />
                </div>

                {/* Program Dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="program" className="text-xs font-bold uppercase tracking-wider text-[#3C3C3C] font-sans">
                    Which program interests you? <span className="text-[#FF7A00]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="program"
                      name="program"
                      required
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#8CC63F]/50 focus:bg-white outline-none text-sm text-slate-800 transition-all font-sans appearance-none"
                    >
                      <option value="" disabled>Select a program</option>
                      <option value="fundamentals">Startup Fundamentals & Business Model</option>
                      <option value="fundraising">Fundraising & Investor Readiness</option>
                      <option value="leadership">Leadership & Executive Presence</option>
                      <option value="management">Strategic Business Management</option>
                      <option value="incubator">Startup Incubator — Mentorship & Business Support</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tell us about yourself */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#3C3C3C] font-sans">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your startup or corporate background..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#8CC63F]/50 focus:bg-white outline-none text-sm text-slate-800 transition-all placeholder:text-slate-400 font-sans resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 px-6 bg-[#3C3C3C] hover:bg-[#8CC63F] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all disabled:opacity-75 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Interest
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

              </form>
            </>
          ) : (
            // Success State
            <div className="text-center py-10 flex flex-col items-center animate-[scaleUp_0.3s_ease-out_forwards]">
              <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 text-[#8CC63F] flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-heading text-3xl font-extrabold text-[#3C3C3C] mb-4">
                Thank You!
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
                Thanks! We'll be in touch soon with exclusive program updates, schedules, and incubation opportunities.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="py-3 px-6 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#3C3C3C] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Submit another response
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
