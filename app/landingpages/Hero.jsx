"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="relative min-h-screen overflow-hidden bg-[#0F1D32] flex items-center"
    >
      {/* ── Video Background ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ── Dark gradient overlay — heavier on left so text pops ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F1D32] via-[#0F1D32]/80 to-[#0F1D32]/40" />

      {/* ── Content ── */}
      <div className="relative z-20 w-full flex items-end justify-between gap-10 px-8 sm:px-14 lg:px-24 py-24 sm:py-32">

        {/* LEFT — giant heading split across two display lines */}
        <div className="flex-shrink-0 max-w-[55%]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#38BDF8] mb-6 font-medium opacity-80">
            ✦ Opening for Business
          </p>

          <h1
            className="font-black leading-[0.9] tracking-tight text-[#38BDF8]"
            style={{ fontSize: "clamp(72px, 11vw, 130px)" }}
          >
            <span className="block">Are You</span>
            <span className="block">Frustrated</span>
          </h1>

          <Link
            href="/Quote"
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
          >
            Get a Free Mockup →
          </Link>
        </div>

        {/* RIGHT — full question + body copy */}
        <div className="hidden md:flex flex-col justify-center max-w-xs lg:max-w-sm self-center gap-4">
          <p className="text-white/90 text-[15px] italic leading-relaxed font-medium">
            Are You Frustrated That Your Business Looks Unprofessional Online
            and Isn&rsquo;t Generating Enough Leads?
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            We design high-converting websites that build trust, attract
            qualified customers, and turn visitors into inquiries. Every project
            includes clean code, mobile-first design, and dedicated support to
            help your business grow online with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}