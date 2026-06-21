"use client";

import React from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#3C3C3C] text-slate-300 pt-20 pb-8 px-6 relative overflow-hidden">
      
      {/* Decorative Blur BG */}
      <div className="absolute bottom-0 right-[-10%] w-[300px] h-[300px] bg-[#8CC63F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-700/50">
          
          {/* Brand Info (Left Column) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Logo showTagline={false} theme="light" className="scale-[0.8] origin-left" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Business Management &amp; Training Consultancy. High-performance accelerators bridging the gap to entrepreneurial excellence.
            </p>
          </div>

          {/* Quick Links (Center Column) */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3 font-sans text-sm font-medium">
              <button
                onClick={() => handleScrollTo("home")}
                className="text-left text-slate-400 hover:text-[#8CC63F] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollTo("programs")}
                className="text-left text-slate-400 hover:text-[#8CC63F] transition-colors cursor-pointer"
              >
                Programs
              </button>
              <button
                onClick={() => handleScrollTo("about")}
                className="text-left text-slate-400 hover:text-[#8CC63F] transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="text-left text-slate-400 hover:text-[#8CC63F] transition-colors cursor-pointer"
              >
                Join Waitlist
              </button>
            </nav>
          </div>

          {/* Contact Info (Right Column) */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-slate-400 font-sans">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8CC63F]" />
                <a href="mailto:info@turnkeybs.com" className="hover:text-white transition-colors">
                  info@turnkeybs.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and Scroll-to-Top bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-slate-500 font-sans gap-4">
          <div>
            © {new Date().getFullYear()} TurnKey BS. All rights reserved.
          </div>
          <button
            onClick={() => handleScrollTo("home")}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-800 text-slate-400 hover:text-[#8CC63F] hover:bg-slate-700/80 transition-all cursor-pointer font-semibold uppercase tracking-wider text-[10px]"
          >
            Back to Top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
