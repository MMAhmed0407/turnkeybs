"use client";

import React from "react";
import { Users, GraduationCap, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Visual Accent BG */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#8CC63F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mission Content Column (Left on Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/20 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider mb-6">
              Our Mission
            </div>
            
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#3C3C3C] mb-6 leading-tight">
              Bridging the Gap to High Performance
            </h2>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
              TurnKey Business Solutions (TurnKey BS) was founded to accelerate corporate talent and entrepreneurial ventures. We combine academic excellence with high-performance practical training, empowering candidates to master startup operations, strategic SOPs, and VC fundraising.
            </p>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Whether you are launching your first startup, scaling your brand, or optimizing enterprise productivity, our programs provide the tools, network, and guidance necessary to turn ambition into real-world market success.
            </p>
          </div>

          {/* Highlights Column (Right on Desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Highlight 1: Expert Mentors */}
            <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-100 hover:border-[#8CC63F]/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#8CC63F]/10 text-[#8CC63F] flex items-center justify-center mb-6 group-hover:bg-[#8CC63F] group-hover:text-white transition-colors duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#3C3C3C] mb-3">
                Expert Mentors
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Learn directly from venture capitalists, serial entrepreneurs, and corporate operations veterans.
              </p>
            </div>

            {/* Highlight 2: Hands-On Learning */}
            <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-100 hover:border-[#8CC63F]/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center mb-6 group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#3C3C3C] mb-3">
                Hands-On Learning
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Build real landing pages, construct working business plans, and execute live testing sprints.
              </p>
            </div>

            {/* Highlight 3: Real-World Results */}
            <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-100 hover:border-[#8CC63F]/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#8CC63F]/10 text-[#8CC63F] flex items-center justify-center mb-6 group-hover:bg-[#8CC63F] group-hover:text-white transition-colors duration-300">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#3C3C3C] mb-3">
                Real-World Results
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Accelerate program graduates into incubator placement, direct angel network intros, and corporate hiring.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
