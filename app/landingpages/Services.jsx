"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheck, FiMonitor, FiCode, FiLayers, FiTrendingUp } from "react-icons/fi";

const iconMap = {
  "Website Design": FiMonitor,
  "Web Applications": FiCode,
  "Web3 Solutions": FiLayers,
  "Digital Growth": FiTrendingUp,
};

const services = [
  {
    title: "Website Design",
    description:
      "Custom, conversion-focused websites that establish credibility and drive measurable business results.",
    deliverables: ["UI/UX Design", "Responsive Development", "CMS Integration", "SEO Foundation"],
    timeline: "2–3 weeks",
    price: "From $500",
    featured: true,
  },
  {
    title: "Web Applications",
    description:
      "Scalable web apps, admin dashboards, and internal tools engineered for performance under load.",
    deliverables: ["Custom Architecture", "API Development", "Database Design", "Cloud Deployment"],
    timeline: "4–12 weeks",
    price: "Custom Quote",
    featured: false,
  },
  {
    title: "Web3 Solutions",
    description:
      "Blockchain-integrated products including dApps, smart contract interfaces, and NFT platforms.",
    deliverables: ["Smart Contract UI", "Wallet Integration", "Token Systems", "Security Audits"],
    timeline: "6–16 weeks",
    price: "Custom Quote",
    featured: false,
  },
  {
    title: "Digital Growth",
    description:
      "Data-driven content strategy and marketing support to expand your digital footprint and audience.",
    deliverables: ["Content Strategy", "Performance Marketing", "Analytics Setup", "Monthly Reports"],
    timeline: "Ongoing",
    price: "From $500/mo",
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-6 py-20 overflow-hidden bg-white md:py-24 md:px-20"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#818CF8]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 text-center md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#818CF8]/15 shadow-sm shadow-[#818CF8]/5 mb-6"
          >
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#818CF8] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#818CF8]"></span>
            </span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#818CF8]">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            We build
            <span className="relative inline-block mx-2">
              <span className="relative z-10 bg-gradient-to-r from-[#818CF8] to-[#38BDF8] bg-clip-text text-transparent">
                digital products
              </span>
              <svg
                className="absolute left-0 w-full -bottom-2"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5C60 1 140 1 197 5"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.3"
                />
              </svg>
            </span>
            that drive growth.
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-base leading-relaxed text-gray-500 md:text-lg">
            From strategy to deployment we partner with ambitious brands to design, build, and scale exceptional digital experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.title];
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`group relative rounded-xl p-5 md:p-6 transition-all duration-500 flex flex-col cursor-default
                  ${service.featured 
                    ? 'bg-gradient-to-br from-[#818CF8] to-[#6366F1] shadow-lg shadow-[#818CF8]/20 border-0' 
                    : 'bg-white border border-gray-100 hover:border-[#818CF8]/20 hover:shadow-lg hover:shadow-gray-200/50'
                  }`}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute -top-3 right-6">
                    <div className="bg-[#38BDF8] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg shadow-[#38BDF8]/30">
                      Popular
                    </div>
                  </div>
                )}

                {/* Icon + Title Row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0
                    ${service.featured
                      ? 'bg-white/20 text-white'
                      : 'bg-[#38BDF8]/10 text-[#818CF8] group-hover:bg-[#818CF8]/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-bold transition-colors duration-300
                    ${service.featured ? 'text-white' : 'text-gray-900 group-hover:text-[#818CF8]'}
                  `}>
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-4 flex-1
                  ${service.featured ? 'text-white/80' : 'text-gray-500'}
                `}>
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className={`border-t pt-4 mb-4
                  ${service.featured ? 'border-white/15' : 'border-gray-100'}
                `}>
                  <p className={`text-[11px] font-semibold uppercase tracking-wider mb-2.5
                    ${service.featured ? 'text-white/60' : 'text-gray-400'}
                  `}>
                    What's Included
                  </p>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                          ${service.featured ? 'bg-white/20' : 'bg-[#38BDF8]/10'}
                        `}>
                          <FiCheck className={`w-2.5 h-2.5 ${service.featured ? 'text-white' : 'text-[#818CF8]'}`} />
                        </div>
                        <span className={`text-xs ${service.featured ? 'text-white/80' : 'text-gray-600'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-[11px] mb-0.5 ${service.featured ? 'text-white/50' : 'text-gray-400'}`}>Timeline</p>
                    <p className={`text-xs font-semibold ${service.featured ? 'text-white' : 'text-gray-700'}`}>
                      {service.timeline}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-[11px] mb-0.5 ${service.featured ? 'text-white/50' : 'text-gray-400'}`}>Starting at</p>
                    <p className={`text-base font-bold ${service.featured ? 'text-white' : 'text-[#818CF8]'}`}>
                      {service.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 gap-3 mt-12 md:grid-cols-4"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "4+", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-[#38BDF8]/5 border border-[#38BDF8]/10 hover:bg-[#38BDF8]/10 transition-colors duration-300"
            >
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#818CF8] to-[#38BDF8] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-[11px] md:text-xs text-gray-500 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#818CF8] hover:bg-[#6B7BF7] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#818CF8]/25 hover:shadow-xl hover:shadow-[#818CF8]/30 text-sm"
          >
            Start Your Project
            <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-xs text-gray-400">
            No commitment • Response within 1 hour
          </p>
        </motion.div>
      </div>
    </section>
  );
}