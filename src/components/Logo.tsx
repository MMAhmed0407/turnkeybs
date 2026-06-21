import React from "react";
import { Key } from "lucide-react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  showTagline?: boolean;
  theme?: "dark" | "light"; // 'dark' theme for light backgrounds (default), 'light' theme for dark backgrounds
}

export default function Logo({
  className = "",
  iconOnly = false,
  showTagline = true,
  theme = "dark",
}: LogoProps) {
  if (iconOnly) {
    return <Key className={`w-12 h-12 ${theme === "light" ? "text-white" : "text-[#3C3C3C]"}`} />;
  }

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Logo Typography Row */}
      <div className="flex items-baseline font-sans text-[44px] sm:text-[54px] tracking-tight font-light leading-none">
        {/* "turn" in lime green */}
        <span className="text-[#8CC63F] font-semibold">turn</span>
        
        {/* "key" in charcoal (dark theme) or white (light theme) */}
        <span className={`${theme === "light" ? "text-white" : "text-[#3C3C3C]"} font-semibold`}>key</span>

        {/* Space */}
        <span className="w-2" />

        {/* "bs" in lime green */}
        <span className="text-[#8CC63F] font-semibold">bs</span>
      </div>

      {/* Brand Color Accent Dashes Row */}
      <div className="flex gap-[3px] w-[180px] sm:w-[220px] h-[3.5px] mt-2 mb-3">
        <div className={`flex-1 ${theme === "light" ? "bg-white/30" : "bg-[#3C3C3C]"} rounded-full`} />
        <div className="flex-1 bg-[#FF7A00] rounded-full" />
        <div className={`flex-1 ${theme === "light" ? "bg-white/30" : "bg-[#3C3C3C]"} rounded-full`} />
        <div className="flex-1 bg-[#8CC63F] rounded-full" />
      </div>

      {/* Tagline */}
      {showTagline && (
        <div className={`text-[12px] sm:text-[14px] ${theme === "light" ? "text-slate-400" : "text-[#3C3C3C]"} font-normal tracking-wide font-sans mt-0.5`}>
          Business Management & Training Consultancy
        </div>
      )}
    </div>
  );
}
