"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiHelpCircle, FiMessageSquare, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("general");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { id: "general", name: "General" },
    { id: "process", name: "Process" },
    { id: "pricing", name: "Pricing" },
    { id: "support", name: "Support" },
  ];

  const faqs = {
    general: [
      {
        question: "What does Worbix do?",
        answer:
          "Worbix helps founders, small businesses, and brands get a professional online presence fast. We design and build high-converting websites that look credible and drive real inquiries. From clean code to mobile-first design, we handle everything so you can focus on your business.",
      },
      {
        question: "How is Worbix different from other agencies?",
        answer:
          "Unlike traditional agencies that take months and charge premium prices, we deliver professional websites quickly without compromising quality. We focus on what matters: clean code, mobile-first design, fast loading speeds, and 30-day post-launch support to ensure your success.",
      },
      {
        question: "What type of businesses do you work with?",
        answer:
          "We work with founders, startups, small businesses, and established brands across various industries. Whether you're launching a new venture or refreshing your existing online presence, we tailor our approach to your specific needs and goals.",
      },
      {
        question: "Do you work with clients worldwide?",
        answer:
          "Absolutely! We work remotely with clients across the globe. Our process is designed for seamless collaboration regardless of time zones. We use modern communication tools to keep you updated throughout the project.",
      },
    ],
    process: [
      {
        question: "What is your typical project timeline?",
        answer:
          "Most projects are completed within 1-3 weeks, depending on complexity. After our initial consultation, we provide a detailed timeline with clear milestones. We pride ourselves on delivering fast without sacrificing quality.",
      },
      {
        question: "What does the design process look like?",
        answer:
          "Our process is simple and transparent: 1) Discovery call to understand your needs, 2) We create a free mockup for your approval, 3) Design and development phase, 4) Review and revisions, 5) Launch and 30-day support. We keep you involved at every stage.",
      },
      {
        question: "Will I be able to update the website myself?",
        answer:
          "Yes! We build websites on user-friendly platforms (like Webflow or WordPress) that allow you to easily update content, add blog posts, and make basic changes without any coding knowledge. We also provide training during our 30-day support period.",
      },
      {
        question: "What if I need changes after the website is live?",
        answer:
          "We offer 30 days of post-launch support included with every project. During this time, we handle any tweaks, fixes, or questions you have. After that, we offer ongoing maintenance packages or can make updates on an as-needed basis.",
      },
    ],
    pricing: [
      {
        question: "How much does a website cost?",
        answer:
          "Our projects typically range from $2,000 to $8,000 depending on complexity, number of pages, and features needed. We provide transparent, upfront pricing with no hidden fees. Every project starts with a free consultation and mockup so you know exactly what you're getting.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment options. Typically, we split payments into milestones: 50% to start, 25% at design approval, and 25% at launch. We can customize payment schedules to fit your budget. Just ask during our consultation.",
      },
      {
        question: "What's included in the price?",
        answer:
          "Every project includes: custom design, responsive development, mobile optimization, basic SEO setup, contact forms, social media integration, SSL certificate, hosting setup, and 30 days of post-launch support. We also provide a free mockup before you commit.",
      },
      {
        question: "Are there any ongoing costs?",
        answer:
          "The main ongoing costs are hosting ($10-30/month) and domain registration ($10-15/year). We set everything up for you and can recommend the best options. Optional maintenance packages are available if you want us to handle updates regularly.",
      },
    ],
    support: [
      {
        question: "What does the 30-day support include?",
        answer:
          "Our 30-day post-launch support includes: bug fixes, minor content updates, performance monitoring, security checks, email support within 24 hours, and training for your team. We want to make sure you're completely comfortable managing your new website.",
      },
      {
        question: "How quickly do you respond to support requests?",
        answer:
          "We typically respond within 2-4 hours during business hours (Mon-Fri, 9am-6pm EST). For urgent issues, we offer priority support. Our average response time is under 2 hours, and we pride ourselves on being accessible when you need us.",
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer:
          "Yes! We offer monthly maintenance packages that include regular updates, security monitoring, performance optimization, content updates, and priority support. Packages start at $150/month and can be customized based on your needs.",
      },
      {
        question: "What if something breaks after the 30-day period?",
        answer:
          "We stand behind our work. If something breaks due to our code, we'll fix it free of charge even after the support period. For other issues or new features, we're always available for additional work at our standard rates.",
      },
    ],
  };

  return (
  <>
  <Navbar />
    <section className="relative bg-[#0F1D32] py-16 md:py-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 text-center md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1A2942] border border-[#1E3A5F] rounded-full px-4 py-1.5 mb-6">
            <FiHelpCircle className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider">
              FAQ
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with Worbix. Can't find what you're looking for? Feel free to reach out.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white shadow-lg shadow-[#38BDF8]/20"
                  : "bg-[#1A2942] text-[#94A3B8] border border-[#1E3A5F] hover:border-[#38BDF8]/50 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs[activeCategory].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#1A2942] border border-[#1E3A5F] rounded-2xl overflow-hidden hover:border-[#38BDF8]/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start flex-1 gap-4">
                  <span className="text-[#38BDF8] font-semibold text-sm mt-0.5 min-w-[24px]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-white pr-8 group-hover:text-[#38BDF8] transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "border-[#38BDF8] bg-[#38BDF8]/10 rotate-45"
                      : "border-[#1E3A5F] group-hover:border-[#38BDF8]/50"
                  }`}
                >
                  {openIndex === index ? (
                    <FiMinus className="w-4 h-4 text-[#38BDF8]" />
                  ) : (
                    <FiPlus className="w-4 h-4 text-[#38BDF8]" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-14">
                      <div className="w-12 h-[2px] bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full mb-4" />
                      <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center md:mt-16"
        >
          <div className="bg-[#1A2942] border border-[#1E3A5F] rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#38BDF8]/10 to-[#818CF8]/10 flex items-center justify-center mx-auto mb-4 border border-[#38BDF8]/20">
              <FiMessageSquare className="w-6 h-6 text-[#38BDF8]" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
              Still have questions?
            </h3>
            <p className="text-[#94A3B8] text-sm md:text-base mb-6 max-w-md mx-auto">
              We're here to help! Reach out and we'll get back to you within 1 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] hover:shadow-lg hover:shadow-[#38BDF8]/25 transition-all duration-300"
            >
              Contact Us
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default FAQ;