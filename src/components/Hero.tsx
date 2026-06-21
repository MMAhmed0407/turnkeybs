"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[500px] bg-gradient-to-b from-[#8CC63F]/10 via-[#FF7A00]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#8CC63F]/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      {/* Grid Pattern overlay for tech aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#3C3C3C 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Subtle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/20 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider mb-8 animate-[slide-up_0.5s_ease-out]">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
          Launch Your Vision
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#3C3C3C] leading-[1.1] mb-6 animate-[slide-up_0.6s_ease-out]">
          Build. <span className="text-[#8CC63F]">Launch.</span> Scale.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-slate-500 text-base sm:text-xl font-normal leading-relaxed mb-10 animate-[slide-up_0.7s_ease-out]">
          Empowering startup founders, enterprise managers, and high-performance professionals through elite corporate programs, venture backing, and strategic consultancy.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-[slide-up_0.8s_ease-out]">
          <button
            onClick={() => handleScrollTo("programs")}
            className="w-full sm:w-auto py-4 px-8 bg-[#3C3C3C] hover:bg-[#8CC63F] hover:shadow-lg hover:shadow-[#8CC63F]/10 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-2xl transition-all active:scale-[0.98] cursor-pointer"
          >
            Explore Programs
          </button>
          
          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto py-4 px-8 bg-white hover:bg-slate-50 border border-slate-200 text-[#3C3C3C] font-sans text-xs font-bold uppercase tracking-wider rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer group"
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4 text-[#FF7A00] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
