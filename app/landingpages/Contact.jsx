"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiMessageSquare,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email Us",
      info: "worbixagency@gmail.com",
      subInfo: "We'll respond within 1 hour",
      href: "mailto:worbixagency@gmail.com.",
      action: "email",
    },
    {
      icon: FiPhone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri, 9am-6pm EST",
      href: "tel:+15551234567",
      action: "call",
    },
    {
      icon: FiMapPin,
      title: "Visit Us",
      info: "123 Design Street",
      subInfo: "San Francisco, CA 94105",
      href: "https://maps.google.com/?q=123+Design+Street+San+Francisco+CA+94105",
      action: "map",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: FiClock,
      title: "Working Hours",
      info: "Monday - Friday",
      subInfo: "9:00 AM - 6:00 PM",
      action: "info",
    },
  ];

  const handleContactAction = (item) => {
    if (item.action === "email") {
      window.location.href = item.href;
    } else if (item.action === "call") {
      window.location.href = item.href;
    } else if (item.action === "map") {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
    // For "info" action, no click action needed
  };

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-[#1E3A5F] bg-[#0F1D32] text-white placeholder-[#94A3B8] transition-all duration-200 focus:outline-none focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/10 hover:border-[#38BDF8]/50";
  const labelClasses = "block text-sm font-medium text-[#E2E8F0] mb-2";

  return (
    <section id="Contact" className="min-h-screen bg-[#0F1D32] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-20 py-16 md:py-24 relative overflow-hidden">
      
      {/* Background gradient orbs - EXACT MATCH to hero */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl" />

      <div className="relative w-full mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#38BDF8] mb-8 md:mb-10 font-medium text-center">
            ✦ Get in Touch
          </p>

          <h1 className="mb-4 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl md:leading-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              build something
            </span>{" "}
            great together
          </h1>
          
          <p className="text-[#94A3B8] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a
            message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left sidebar - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#1A2942] border border-[#1E3A5F] rounded-2xl p-6 shadow-lg">
              <h3 className="mb-6 text-lg font-semibold text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => item.action !== "info" && handleContactAction(item)}
                    className={`group flex gap-4 p-3 rounded-xl transition-all duration-200 border border-transparent ${
                      item.action !== "info"
                        ? "cursor-pointer hover:bg-[#0F1D32] hover:border-[#38BDF8]/20"
                        : "cursor-default"
                    }`}
                    role={item.action !== "info" ? "button" : undefined}
                    tabIndex={item.action !== "info" ? 0 : undefined}
                    onKeyDown={(e) => {
                      if (item.action !== "info" && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        handleContactAction(item);
                      }
                    }}
                    aria-label={item.action === "email" ? `Send email to ${item.info}` : item.action === "call" ? `Call ${item.info}` : item.action === "map" ? `View location on map` : undefined}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#38BDF8]/10 to-[#818CF8]/10 flex items-center justify-center border border-[#38BDF8]/20 group-hover:border-[#38BDF8]/40 transition-colors">
                      <item.icon className="w-5 h-5 text-[#38BDF8] group-hover:text-[#0EA5E9] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white mb-0.5 group-hover:text-[#38BDF8] transition-colors">
                        {item.title}
                      </h4>
                      <p className={`text-sm font-medium ${
                        item.action !== "info" 
                          ? "text-[#38BDF8] group-hover:underline" 
                          : "text-[#94A3B8]"
                      }`}>
                        {item.info}
                      </p>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        {item.subInfo}
                      </p>
                      {item.action !== "info" && (
                        <div className="mt-1 transition-opacity opacity-0 group-hover:opacity-100">
                          <span className="text-xs text-[#38BDF8] flex items-center gap-1">
                            {item.action === "email" && "Click to email →"}
                            {item.action === "call" && "Click to call →"}
                            {item.action === "map" && "Click to view map →"}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick response badge */}
            <div className="bg-gradient-to-br from-[#38BDF8] to-[#818CF8] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Quick Response</p>
                  <p className="text-xs text-white/80">
                    Average response time: 2 hours
                  </p>
                </div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 border-2 rounded-full border-white/30 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm"
                  />
                ))}
                <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold border-2 rounded-full border-white/30 bg-white/20 backdrop-blur-sm">
                  +12
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#1A2942] border border-[#1E3A5F] rounded-2xl shadow-lg overflow-hidden">
              {/* Form header */}
              <div className="border-b border-[#1E3A5F] px-8 py-6">
                <h3 className="text-xl font-semibold text-white">
                  Send us a message
                </h3>
                <p className="text-sm text-[#94A3B8] mt-1">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      placeholder=""
                      required
                      className={`${inputClasses} ${
                        activeField === "name"
                          ? "border-[#38BDF8] ring-4 ring-[#38BDF8]/10"
                          : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      placeholder=""
                      required
                      className={`${inputClasses} ${
                        activeField === "email"
                          ? "border-[#38BDF8] ring-4 ring-[#38BDF8]/10"
                          : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      onFocus={() => setActiveField("phone")}
                      onBlur={() => setActiveField(null)}
                      placeholder=""
                      className={`${inputClasses} ${
                        activeField === "phone"
                          ? "border-[#38BDF8] ring-4 ring-[#38BDF8]/10"
                          : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className={labelClasses}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      onFocus={() => setActiveField("subject")}
                      onBlur={() => setActiveField(null)}
                      placeholder=""
                      required
                      className={`${inputClasses} ${
                        activeField === "subject"
                          ? "border-[#38BDF8] ring-4 ring-[#38BDF8]/10"
                          : ""
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className={`${inputClasses} resize-none ${
                      activeField === "message"
                        ? "border-[#38BDF8] ring-4 ring-[#38BDF8]/10"
                        : ""
                    }`}
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                  <p className="text-xs text-[#64748B]">* Required fields</p>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 w-full sm:w-auto justify-center ${
                      isSubmitted
                        ? "bg-emerald-500"
                        : "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] hover:shadow-lg hover:shadow-blue-500/25"
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <FiCheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Message
                        <FiArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-[#64748B]">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#38BDF8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>SSL Secure Connection</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#818CF8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Your data is protected</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#38BDF8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>No spam, ever</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;