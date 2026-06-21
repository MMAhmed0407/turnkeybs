"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Programs Cards Grid */}
      <Programs />

      {/* About Mission & Highlights */}
      <About />

      {/* Contact / Waitlist Form */}
      <ContactForm />

      {/* Footer Branding Bar */}
      <Footer />
    </div>
  );
}
