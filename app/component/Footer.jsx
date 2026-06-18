"use client";

import React from "react";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "Web Design", href: "#services" },
      { name: "Web Development", href: "#services" },
      { name: "Mobile-First Design", href: "#services" },
      { name: "E-Commerce", href: "#services" },
      { name: "SEO Optimization", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Work", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
    
    ],
    support: [
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "/Faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  const socialLinks = [
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-[#0F1D32] border-t border-[#1E3A5F]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#818CF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-12">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <h2 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
                    Worbix
                  </span>
                </h2>
              </Link>
              
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 max-w-md">
                We help founders, small businesses, and brands get a professional online presence fast with high-converting websites that drive real results.
              </p>

              {/* Contact info */}
              <div className="mb-6 space-y-3">
                <a
                  href="mailto:worbixagency@gmail.com"
                  className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors group"
                >
                  <FiMail className="w-4 h-4 flex-shrink-0 text-[#38BDF8]" />
                  <span>worbixagency@gmail.com</span>
                  <FiArrowUpRight className="w-3 h-3 transition-opacity opacity-0 group-hover:opacity-100" />
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors group"
                >
                  <FiPhone className="w-4 h-4 flex-shrink-0 text-[#38BDF8]" />
                  <span>+1 (555) 123-4567</span>
                  <FiArrowUpRight className="w-3 h-3 transition-opacity opacity-0 group-hover:opacity-100" />
                </a>
                <a
                  href="https://maps.google.com/?q=123+Design+Street+San+Francisco+CA+94105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors group"
                >
                  <FiMapPin className="w-4 h-4 flex-shrink-0 text-[#38BDF8]" />
                  <span>San Francisco, CA</span>
                  <FiArrowUpRight className="w-3 h-3 transition-opacity opacity-0 group-hover:opacity-100" />
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-[#1E3A5F] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E3A5F] py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-[#64748B] text-center sm:text-left">
              © {new Date().getFullYear()} Worbix. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-[#64748B] hover:text-[#38BDF8] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-xs text-[#64748B] hover:text-[#38BDF8] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#cookies"
                className="text-xs text-[#64748B] hover:text-[#38BDF8] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg border border-[#1E3A5F] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5 transition-all duration-200 group"
              aria-label="Scroll to top"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;