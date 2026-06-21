"use client";

import React from "react";
import { 
  Rocket, 
  Coins, 
  Award, 
  Briefcase, 
  Building,
  Sparkles
} from "lucide-react";

interface Program {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const programsData: Program[] = [
  {
    title: "Startup Fundamentals & Business Model",
    description: "Master validation techniques, lean canvas architecture, and operations to turn early ideas into scalable business ventures.",
    icon: Rocket,
  },
  {
    title: "Fundraising & Investor Readiness",
    description: "Construct premium pitch decks, calculate key metrics, understand cap table dynamics, and rehearse real pitching scenarios.",
    icon: Coins,
  },
  {
    title: "Leadership & Executive Presence",
    description: "Refine corporate communication skills, public speaking authority, conflict resolution strategies, and strategic decision-making.",
    icon: Award,
  },
  {
    title: "Strategic Business Management",
    description: "Structure standard operating procedures (SOPs), optimize unit economics, and manage scaling teams with high efficiency.",
    icon: Briefcase,
  },
  {
    title: "Startup Incubator — Mentorship & Business Support",
    description: "Access hands-on legal consultancy, dedicated product design advisors, co-working opportunities, and direct VC network intros.",
    icon: Building,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-[#8CC63F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#3C3C3C] mb-4">
            Our Programs
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Meticulously structured accelerators and executive courses designed to fast-track your business growth, startup scaling, and operational leadership.
          </p>
        </div>

        {/* Responsive Grid - 3 cols desktop, 1 col mobile, handles the 5 cards beautifully */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {programsData.map((program, index) => {
            const IconComponent = program.icon;
            
            // Adjust card span to center the last row if needed, or keep it standard.
            // With 5 cards, in lg (3 cols): first 3 fill row 1, next 2 fill row 2. 
            // We can center the last two cards on larger screens by styling:
            const isLastTwo = index >= 3;
            
            return (
              <div
                key={index}
                className="flex flex-col bg-white border border-slate-100 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#8CC63F]/30 hover:shadow-lg hover:shadow-[#8CC63F]/5 group relative overflow-hidden"
              >
                {/* Visual Top Glow on Card Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8CC63F] to-[#FF7A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Icon & Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#8CC63F]/10 text-[#8CC63F] group-hover:bg-[#8CC63F] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {/* Accent Colored Waitlist/Coming Soon Badge */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-[#FF7A00] rounded-full shadow-sm">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    Coming Soon
                  </span>
                </div>

                {/* Card Content */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#3C3C3C] mb-3 group-hover:text-[#8CC63F] transition-colors leading-snug">
                  {program.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {program.description}
                </p>
                
                {/* Card Footer Detail */}
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-[#FF7A00] transition-colors">
                  Learn More
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
