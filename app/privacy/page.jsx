"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiMail, FiDatabase, FiLock, FiUserCheck, FiClock } from "react-icons/fi";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const PrivacyPolicy = () => {
  const lastUpdated = "June 18, 2026";

  const sections = [
    {
      icon: FiDatabase,
      title: "What We Collect",
      content: [
        "Worbix collects information only when you choose to give it to us, through two forms on this site: the Contact form and the Quote Request form.",
        "Depending on which form you use, this may include your name, email address, phone number, company name, project details, budget range, timeline, and any message you write to us.",
        "We do not use cookies, analytics tools, or any tracking technology on this site. We do not know who visits this site unless you submit one of our forms.",
      ],
    },
    {
      icon: FiUserCheck,
      title: "Why We Collect It",
      content: [
        "We use the information you submit for one purpose: to respond to you. When you send a message or request a quote, our team receives an email notification and your details are saved so we can follow up about your project.",
        "We never use your information for advertising, never sell it, and never share it with third parties for marketing purposes.",
      ],
    },
    {
      icon: FiLock,
      title: "How We Store and Protect It",
      content: [
        "Form submissions are stored securely in our backend database and are accessible only to the Worbix team.",
        "All data sent through our forms travels over an encrypted (SSL/HTTPS) connection. We take reasonable technical steps to protect your information from unauthorized access, but no online system can guarantee absolute security.",
      ],
    },
    {
      icon: FiClock,
      title: "How Long We Keep It",
      content: [
        "We retain submitted contact and quote information for as long as needed to respond to your inquiry and, if you become a client, for the duration of our working relationship and any reasonable period afterward for record-keeping.",
        "If you'd like your information deleted sooner, contact us using the details below and we'll remove it.",
      ],
    },
    {
      icon: FiShield,
      title: "Your Rights",
      content: [
        "You can ask us at any time what information we hold about you, ask us to correct it, or ask us to delete it entirely.",
        "Since we don't use cookies or tracking, there's no tracking preference to opt out of — the only data we have about you is what you've directly told us through a form.",
      ],
    },
    {
      icon: FiMail,
      title: "Contact Us About Privacy",
      content: [
        "If you have any questions about this policy or how your information is handled, reach out to us directly at worbixagency@gmail.com.",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section
        id="privacy"
        className="min-h-screen bg-[#0F1D32] px-4 sm:px-6 md:px-8 lg:px-20 py-24 md:py-28 relative overflow-hidden"
      >
        {/* Background gradient orbs — matches site-wide style */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl" />

        <div className="relative w-full mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[#1A2942] border border-[#1E3A5F] rounded-full px-4 py-1.5 mb-6">
              <FiShield className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider">
                Privacy Policy
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl md:leading-tight">
              Your{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
                privacy
              </span>{" "}
              matters to us
            </h1>

            <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto">
              This page explains what information Worbix collects, why, and how it&rsquo;s
              handled. We keep things simple — we only collect what you give us.
            </p>

            <p className="text-[#64748B] text-sm mt-4">
              Last updated: {lastUpdated}
            </p>
          </motion.div>

          {/* Policy sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="bg-[#1A2942] border border-[#1E3A5F] rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#38BDF8]/10 to-[#818CF8]/10 flex items-center justify-center border border-[#38BDF8]/20">
                    <section.icon className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <h2 className="text-xl font-semibold text-white pt-2.5">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-3 pl-0 md:pl-16">
                  {section.content.map((paragraph, i) => (
                    <p key={i} className="text-[#94A3B8] text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 bg-gradient-to-br from-[#38BDF8] to-[#818CF8] rounded-2xl p-6 md:p-8 text-white text-center"
          >
            <p className="text-sm md:text-base">
              This policy may be updated as Worbix grows and adds new features to
              this site. Any changes will be reflected on this page with a new
              &rsquo;last updated&rsquo; date.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;