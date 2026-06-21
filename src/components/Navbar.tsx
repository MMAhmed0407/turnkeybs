"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleScrollTo("home")} 
          className="cursor-pointer flex items-center"
        >
          {/* We show logo without the bottom tagline in the header to keep it sleek */}
          <Logo showTagline={false} className="scale-[0.8] origin-left" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-[#3C3C3C]">
          <button
            onClick={() => handleScrollTo("home")}
            className="hover:text-[#8CC63F] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollTo("programs")}
            className="hover:text-[#8CC63F] transition-colors cursor-pointer"
          >
            Programs
          </button>
          <button
            onClick={() => handleScrollTo("about")}
            className="hover:text-[#8CC63F] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="hover:text-[#8CC63F] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleScrollTo("contact")}
            className="py-2.5 px-5 bg-[#3C3C3C] hover:bg-[#8CC63F] text-white hover:text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#3C3C3C] hover:text-[#8CC63F] transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 transition-all duration-300 origin-top ${
          isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col p-6 gap-5 font-sans font-medium text-base text-[#3C3C3C]">
          <button
            onClick={() => handleScrollTo("home")}
            className="text-left py-2 border-b border-slate-50 hover:text-[#8CC63F] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollTo("programs")}
            className="text-left py-2 border-b border-slate-50 hover:text-[#8CC63F] transition-colors cursor-pointer"
          >
            Programs
          </button>
          <button
            onClick={() => handleScrollTo("about")}
            className="text-left py-2 border-b border-slate-50 hover:text-[#8CC63F] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="text-left py-2 border-b border-slate-50 hover:text-[#8CC63F] transition-colors cursor-pointer"
          >
            Contact
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full text-center py-3 bg-[#3C3C3C] hover:bg-[#8CC63F] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}
