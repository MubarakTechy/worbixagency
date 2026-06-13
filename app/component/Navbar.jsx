// components/Navbar.jsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import max from "../images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },

    { name: 'Why Worbix', href: '#Why' },
    { name: 'Testimonials', href: '#Testimonials' },
    { name: 'Contact', href: '#Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg shadow-blue-900/20'
          : 'bg-[#0F1D32]/90 backdrop-blur-sm'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative w-[180px] h-[50px] md:w-[200px] md:h-[55px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src={max}
                alt="Worbix"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 180px, 200px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#1E3A5F]/30 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
            <Link
              href="/Quote"
              className="ml-4 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white px-6 py-2.5 rounded-full hover:from-[#0EA5E9] hover:to-[#6366F1] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-medium text-sm"
            >
              Get a Free Mockup
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-12 h-12 lg:hidden focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute h-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-7">
              {/* Top bar */}
              <span
                className={`absolute left-0 w-full h-[2.5px] bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full transition-all duration-300 ease-in-out ${
                  isOpen 
                    ? 'top-1/2 -translate-y-1/2 rotate-45' 
                    : 'top-0 group-hover:top-0.5'
                }`}
              />
              {/* Middle bar */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-3/4 h-[2.5px] bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full transition-all duration-300 ease-in-out ${
                  isOpen 
                    ? 'opacity-0 translate-x-4' 
                    : 'opacity-100 group-hover:w-full'
                }`}
              />
              {/* Bottom bar */}
              <span
                className={`absolute left-0 w-full h-[2.5px] bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full transition-all duration-300 ease-in-out ${
                  isOpen 
                    ? 'top-1/2 -translate-y-1/2 -rotate-45' 
                    : 'bottom-0 group-hover:bottom-0.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2 bg-[#0F1D32]/98 backdrop-blur-lg border-t border-[#1E3A5F]/50">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3.5 text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#1E3A5F]/40 rounded-xl transition-all duration-300 font-medium transform hover:translate-x-2 ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 75}ms` : '0ms'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/Quote"
            onClick={() => setIsOpen(false)}
            className={`block w-full text-center bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white px-4 py-3.5 rounded-xl hover:from-[#0EA5E9] hover:to-[#6366F1] transition-all duration-300 font-medium mt-6 shadow-lg shadow-blue-500/20 transform hover:scale-[1.02] ${
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 75}ms` : '0ms'
            }}
          >
            Get a Free Mockup
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar