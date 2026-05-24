"use client";

import React, { useState } from "react";
import { Mail, Check, AlertCircle, ArrowRight } from "lucide-react";

export default function UnderConstruction() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col items-center justify-between p-6 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-[#E2F5C8]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-72 h-72 bg-[#FFF3E0]/30 rounded-full blur-3xl pointer-events-none" />
      
      {/* Top spacer */}
      <div className="h-4" />

      {/* Main Card */}
      <div className="w-full max-w-xl flex flex-col items-center text-center z-10 py-12 px-6 sm:px-10 bg-white/70 backdrop-blur-md rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50">
        
        {/* ================= TURNKEYBS LOGO (HTML/CSS Recreation) ================= */}
        <div className="flex flex-col items-center select-none mb-8">
          <div className="flex items-baseline font-sans text-[44px] sm:text-[54px] tracking-tight font-light leading-none">
            {/* "turn" in lime green */}
            <span className="text-[#8CC63F] font-semibold">turn</span>
            
            {/* "key" in charcoal with custom key teeth on 'k' */}
            <span className="relative text-[#3C3C3C] font-semibold flex">
              <span className="relative">
                k
                {/* SVG Key Teeth overlay placed at the top of the 'k' stem */}
                <span className="absolute -top-[7px] -left-[5px] w-2.5 h-3 flex flex-col justify-between pointer-events-none">
                  <span className="w-2 h-[2px] bg-[#3C3C3C] rounded-sm" />
                  <span className="w-1.5 h-[2px] bg-[#3C3C3C] rounded-sm" />
                  <span className="w-2 h-[2px] bg-[#3C3C3C] rounded-sm" />
                </span>
              </span>
              <span>ey</span>
            </span>

            {/* Space */}
            <span className="w-2" />

            {/* "bs" in lime green */}
            <span className="text-[#8CC63F] font-semibold">bs</span>
          </div>

          {/* Color Dashes Row under logo */}
          <div className="flex gap-[3px] w-[180px] sm:w-[220px] h-[3.5px] mt-2 mb-3">
            <div className="flex-1 bg-[#3C3C3C] rounded-full" />
            <div className="flex-1 bg-[#FF7A00] rounded-full" />
            <div className="flex-1 bg-[#3C3C3C] rounded-full" />
            <div className="flex-1 bg-[#8CC63F] rounded-full" />
          </div>

          {/* Tagline */}
          <div className="text-[12px] sm:text-[14px] text-[#3C3C3C] font-normal tracking-wide font-sans mt-0.5">
            Business Management & Training Consultancy
          </div>
        </div>
        {/* ========================================================================= */}

        {/* Divider */}
        <div className="w-12 h-[1px] bg-slate-200 mb-8" />

        {/* Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2F5C8] border border-[#CDEBA1] text-xs font-semibold text-[#548018] mb-6">
          <AlertCircle className="w-3.5 h-3.5" />
          Website in Progress
        </div>

        {/* Content Heading & Subtitle */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#3C3C3C] tracking-tight mb-4">
          Our New Website is Underway
        </h1>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mb-8">
          We are currently crafting a brand new online experience to serve you better. Our core programs in entrepreneurship, startup operations, product launches, and business scaling will be fully active here soon.
        </p>

        {/* Minimal Animated Loading Line */}
        <div className="w-full max-w-xs h-[3px] bg-slate-100 rounded-full overflow-hidden mb-10">
          <div className="h-full bg-gradient-to-r from-[#FF7A00] to-[#8CC63F] rounded-full w-1/3 animate-[loading_2.5s_ease-in-out_infinite]" />
        </div>

        {/* Minimal Newsletter Sign-up */}
        <div className="w-full max-w-md">
          {!isSubmitted ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to get notified"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#8CC63F]/50 focus:bg-white outline-none text-sm text-slate-800 transition-all placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3 px-6 rounded-xl bg-[#3C3C3C] hover:bg-[#2C2C2C] text-white text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-75 flex items-center justify-center gap-1.5 active:scale-[0.98] cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Notify Me
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-2 px-4 rounded-2xl bg-[#E2F5C8]/50 border border-[#CDEBA1]/50 text-[#548018] flex items-center justify-center gap-2 text-xs font-semibold animate-[scaleUp_0.3s_ease-out_forwards]">
              <Check className="w-4 h-4 shrink-0" />
              Thank you! We will notify you as soon as the site goes live.
            </div>
          )}
        </div>

      </div>

      {/* Footer info */}
      <footer className="w-full text-center py-6 text-xs text-slate-400 z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-2">
          <span>Inquiries: <a href="mailto:info@turnkeybs.com" className="text-slate-600 hover:text-[#8CC63F] font-medium transition-colors">info@turnkeybs.com</a></span>
          <span className="hidden sm:inline text-slate-200">|</span>
          <span>© {new Date().getFullYear()} Turnkeybs. All rights reserved.</span>
        </div>
      </footer>

      {/* Custom Styles for Keyframe Animations */}
      <style jsx global>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
            width: 30%;
          }
          50% {
            width: 60%;
          }
          100% {
            transform: translateX(350%);
            width: 30%;
          }
        }
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
