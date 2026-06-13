"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section id="Hero" className="min-h-screen bg-[#0F1D32] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-20 py-16 md:py-24 font-sans relative overflow-hidden">
      
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl" />

      {/* Opening tag */}
      <p className="text-xs tracking-[0.2em] uppercase text-[#38BDF8] mb-8 md:mb-10 font-medium text-center">
        ✦ Opening for Business
      </p>

      {/* Main statement */}
      <div className="w-full max-w-4xl space-y-6 text-center md:space-y-8">

        <h1 className="text-2xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-5xl lg:text-4xl md:leading-tight">
          We  help{" "}
          <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
            founders, small businesses, and brands
          </span>{" "}
          get a professional online presence fast.
        </h1>

        <p className="text-[#94A3B8] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          After hiring us, you'll receive a{" "}
          <span className="font-medium text-white">high-converting website</span> that
          looks credible and drives real inquiries plus{" "}
          <span className="font-medium text-white">
            clean code, mobile-first design, and 30-day support
          </span>{" "}
          so you're never left on your own after launch.
        </p>

        {/* CTA */}
        <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row md:pt-6">
          <Link
            href="/Quote"
            className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto text-center"
          >
            Get a Free Mockup →
          </Link>
        
        </div>
      </div>

     
    </section>
  );
}