"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop", // team around laptops
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop", // designer reviewing UI
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop", // dev workspace, code on screen
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop", // dev workspace, code on screen
  "https://images.unsplash.com/photo-1547658719-da2b5eb3ae2d?q=80&w=2000&auto=format&fit=crop", // team working on website, code on screen
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="Hero"
      className="relative min-h-screen overflow-hidden bg-[#0F1D32] flex items-center justify-center"
    >
      {/* ── Sliding background images ── */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
            style={{ opacity: active === i ? 1 : 0 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${src})`,
                animation:
                  active === i ? "heroZoom 9s ease-out forwards" : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Dark overlay so centered text stays legible on every slide ── */}
      <div className="absolute inset-0 z-10 bg-[#0F1D32]/75" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F1D32] via-[#0F1D32]/40 to-[#0F1D32]/70" />

      {/* ── Content — centered ── */}
      <div className="relative z-20 w-full flex flex-col items-center text-center px-6 sm:px-10 py-28">
        {/* <p className="text-[11px] tracking-[0.2em] uppercase text-[#38BDF8] mb-6 font-medium opacity-90">
          ✦ Opening for Business
        </p> */}

        <h1
          className="font-black leading-[0.95] tracking-tight text-white max-w-xl"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          <span className="block">Are You</span>
          <span className="block bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
            Frustrated?
          </span>
        </h1>

        <p className="mt-6 text-white/90 text-base sm:text-lg italic leading-relaxed font-medium max-w-2xl">
          Your business looks unprofessional online and isn&rsquo;t
          generating enough leads?
        </p>

        <p className="mt-4 text-white/50  text-[15px]  leading-relaxed max-w-xl">
          We design high-converting websites that build trust, attract
          qualified customers, and turn visitors into inquiries. Every
          project includes clean code, mobile-first design, and dedicated
          support to help your business grow online with confidence.
        </p>

        <Link
          href="/Quote"
          className="mt-9 inline-flex items-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
        >
          Get a Free Mockup →
        </Link>

        {/* ── Slide indicators ── */}
        <div className="mt-12 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                active === i ? "w-8 bg-[#38BDF8]" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes heroZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}