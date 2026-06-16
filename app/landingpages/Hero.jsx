"use client";

import Link from "next/link";
import Radar from "../component/Radar";

export default function Hero() {
  return (
    <section id="Hero" className="min-h-screen bg-[#0F1D32] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-20 py-16 md:py-24 font-sans relative overflow-hidden">
      
      {/* Radar Background - positioned absolutely */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Radar
          speed={0.5}
          scale={0.6}
          ringCount={8}
          spokeCount={8}
          ringThickness={0.04}
          spokeThickness={0.008}
          sweepSpeed={0.8}
          sweepWidth={1.5}
          sweepLobes={2}
          color="#38BDF8"
          backgroundColor="#0F1D32"
          falloff={2.5}
          brightness={0.8}
          enableMouseInteraction={true}
          mouseInfluence={0.05}
        />
      </div>

      {/* Background gradient orbs - reduced opacity to blend with radar */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#818CF8]/5 rounded-full blur-3xl z-0" />

      {/* Content - positioned above radar */}
      <div className="relative z-10 w-full">
        {/* Opening tag */}
        <p className="text-xs tracking-[0.2em] uppercase text-[#38BDF8] mb-8 md:mb-10 font-medium text-center">
          ✦ Opening for Business
        </p>

        {/* Main statement */}
        <div className="w-full max-w-4xl mx-auto space-y-6 text-center md:space-y-8">

          <h1 className="text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-5xl lg:text-4xl md:leading-tight">
              Are You Frustrated That Your{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
                Business Looks Unprofessional Online
              </span>{" "}
              and Isn't Generating Enough Leads?
            </h1>

                <p className="text-[#ffff] text-[6px] italic sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
        We design high-converting websites that build trust, attract qualified
        customers, and turn visitors into inquiries. Every project includes
        clean code, mobile-first design, and dedicated support to help your
        business grow online with confidence.
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
      </div>
    </section>
  );
}