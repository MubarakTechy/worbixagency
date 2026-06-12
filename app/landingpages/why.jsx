"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import max from "../images/front-view-smiley-businesswoman-holding-laptop.jpg";
import { FiZap, FiShield, FiSmartphone, FiHeadphones } from "react-icons/fi";

const reasons = [
  {
    icon: FiZap,
    title: "Fast Turnaround",
    description:
      "Get a professional, ready-to-launch website in days, not months. We respect your time.",
  },
  {
    icon: FiShield,
    title: "Reliable & Trusted",
    description:
      "Clean code, secure setup, and tested performance so your site works flawlessly 24/7.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile-First Design",
    description:
      "Every site we build looks and works perfectly on phones, tablets, and desktops.",
  },
  {
    icon: FiHeadphones,
    title: "30-Day Support",
    description:
      "We don't disappear after launch. You get ongoing support to keep things running smoothly.",
  },
];

const Why = () => {
  return (
    <section id="Why" className="relative bg-[#0F1D32] py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-20 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#818CF8]/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#38BDF8] mb-4 font-medium">
            Why Worbix
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              business owners
            </span>
          </h2>
          <p className="text-[#94A3B8] text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            We understand what small businesses and founders actually need — no fluff, just results.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden border border-white/5">
              <Image
                src={max}
                alt="Why choose Worbix agency"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1D32]/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right - Reasons */}
          <div className="space-y-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-colors duration-300"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#38BDF8]" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-white md:text-base">
                      {reason.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;