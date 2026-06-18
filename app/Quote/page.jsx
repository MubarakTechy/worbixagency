"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiZap,
  FiGlobe,
  FiSmartphone,
  FiShoppingCart,
  FiSearch,
  FiUsers,
  FiDollarSign,
  FiClock,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Quote = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // shows "Sending..." on button
  const [error, setError] = useState(""); // shows error if something fails
  const [formData, setFormData] = useState({
    projectType: "",
    features: [],
    pages: "1-5",
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const totalSteps = 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  // ✅ THIS IS THE ONLY THING THAT CHANGED — now sends data to your Python backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8000/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Success — show the success screen
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError("");
      }
    } catch (err) {
      // This fires if the backend server isn't running
      setError("Could not reach the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projectTypes = [
    {
      id: "landing",
      icon: FiZap,
      title: "Landing Page",
      description: "Single page for product launch or campaign",
      price: "Custom Quote",
      timeline: "2 days",
    },
    {
      id: "business",
      icon: FiGlobe,
      title: "Business Website",
      description: "Multi-page site for your company",
      price: "depends on features",
      timeline: "1-2 weeks",
    },
    {
      id: "ecommerce",
      icon: FiShoppingCart,
      title: "E-Commerce Store",
      description: "Online store with payment processing",
      price: "depends on features",
      timeline: "2-3 weeks",
    },
    {
      id: "custom",
      icon: FiSmartphone,
      title: "Custom Web App",
      description: "Complex functionality & integrations",
      price: "Custom Quote",
      timeline: "Discuss",
    },
  ];

  const features = [
    { id: "responsive", label: "Mobile Responsive", icon: FiSmartphone },
    { id: "seo", label: "SEO Optimization", icon: FiSearch },
    { id: "cms", label: "Content Management", icon: FiUsers },
    { id: "ecommerce", label: "E-Commerce", icon: FiShoppingCart },
    { id: "blog", label: "Blog/News", icon: FiGlobe },
    { id: "analytics", label: "Analytics Setup", icon: FiZap },
  ];

  const budgetRanges = [
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Not sure yet",
  ];

  const timelineOptions = [
    "ASAP (within 1 week)",
    "1-2 weeks",
    "2-4 weeks",
    "1-2 months",
    "Flexible",
  ];

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-[#1E3A5F] bg-[#0F1D32] text-white placeholder-[#94A3B8] transition-all duration-200 focus:outline-none focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/10 hover:border-[#38BDF8]/50";
  const labelClasses = "block text-sm font-medium text-[#E2E8F0] mb-2";

  return (
    <>
      <Navbar />
      
      {isSubmitted ? (
        <section className="min-h-screen bg-[#0F1D32] flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-lg mx-auto text-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#38BDF8]/25">
              <FiCheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Quote Request Sent!
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8">
              We'll review your project and send you a custom quote within 24 hours. 
              Check your email for a confirmation.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                setFormData({
                  projectType: "",
                  features: [],
                  pages: "1-5",
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  budget: "",
                  timeline: "",
                  message: "",
                });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] transition-all duration-300"
            >
              Request Another Quote
              <FiArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </section>
      ) : (
        <section className="min-h-screen bg-[#0F1D32] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl" />

          <div className="relative w-full max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-[#1A2942] border border-[#1E3A5F] rounded-full px-4 py-1.5 mb-6">
                <FiZap className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider">
                  Get a Free Quote
                </span>
              </div>

              <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Let's{" "}
                <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
                  build your project
                </span>
              </h1>
              <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto">
                Tell us about your project and we'll send you a custom quote within 24 hours. 
                No commitment required.
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <div className="flex items-center justify-between mb-4">
                {["Project Type", "Features", "Your Details"].map((label, index) => (
                  <div key={label} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                          index + 1 <= step
                            ? "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white"
                            : "bg-[#1A2942] text-[#64748B] border border-[#1E3A5F]"
                        }`}
                      >
                        {index + 1 < step ? <FiCheck className="w-5 h-5" /> : index + 1}
                      </div>
                      <span className={`text-xs mt-2 hidden sm:block ${index + 1 <= step ? "text-[#38BDF8]" : "text-[#64748B]"}`}>
                        {label}
                      </span>
                    </div>
                    {index < 2 && (
                      <div className="w-20 sm:w-32 h-0.5 mx-2 sm:mx-4 bg-[#1E3A5F] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] transition-all duration-500"
                          style={{ width: index + 1 < step ? "100%" : "0%" }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#1A2942] border border-[#1E3A5F] rounded-2xl shadow-xl overflow-hidden"
            >
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Project Type */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 md:p-8"
                    >
                      <h3 className="mb-6 text-xl font-semibold text-white">
                        What type of project do you need?
                      </h3>
                      <div className="grid gap-4 mb-8 sm:grid-cols-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, projectType: type.id }))}
                            className={`p-5 rounded-xl border text-left transition-all duration-200 group ${
                              formData.projectType === type.id
                                ? "border-[#38BDF8] bg-[#38BDF8]/10 shadow-lg shadow-[#38BDF8]/10"
                                : "border-[#1E3A5F] hover:border-[#38BDF8]/50 hover:bg-[#0F1D32]"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${formData.projectType === type.id ? "bg-[#38BDF8]/20" : "bg-[#0F1D32] group-hover:bg-[#1A2942]"}`}>
                                <type.icon className={`w-5 h-5 ${formData.projectType === type.id ? "text-[#38BDF8]" : "text-[#64748B] group-hover:text-[#38BDF8]"}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="mb-1 text-sm font-semibold text-white">{type.title}</h4>
                                <p className="text-[#94A3B8] text-xs mb-2">{type.description}</p>
                                <div className="flex items-center gap-3 text-xs">
                                  <span className="flex items-center gap-1 text-[#38BDF8]">
                                    <FiDollarSign className="w-3 h-3" />{type.price}
                                  </span>
                                  <span className="flex items-center gap-1 text-[#64748B]">
                                    <FiClock className="w-3 h-3" />{type.timeline}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Features */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 md:p-8"
                    >
                      <h3 className="mb-2 text-xl font-semibold text-white">
                        What features do you need?
                      </h3>
                      <p className="text-[#94A3B8] text-sm mb-6">Select all that apply</p>

                      <div className="grid gap-3 mb-8 sm:grid-cols-2">
                        {features.map((feature) => (
                          <button
                            key={feature.id}
                            type="button"
                            onClick={() => handleFeatureToggle(feature.id)}
                            className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                              formData.features.includes(feature.id)
                                ? "border-[#38BDF8] bg-[#38BDF8]/10"
                                : "border-[#1E3A5F] hover:border-[#38BDF8]/50 hover:bg-[#0F1D32]"
                            }`}
                          >
                            <feature.icon className={`w-5 h-5 ${formData.features.includes(feature.id) ? "text-[#38BDF8]" : "text-[#64748B]"}`} />
                            <span className="text-sm text-white">{feature.label}</span>
                            {formData.features.includes(feature.id) && (
                              <FiCheck className="w-4 h-4 text-[#38BDF8] ml-auto" />
                            )}
                          </button>
                        ))}
                      </div>

                      <div>
                        <label htmlFor="pages" className={labelClasses}>Number of Pages</label>
                        <select id="pages" name="pages" value={formData.pages} onChange={handleChange} className={inputClasses}>
                          <option value="1-3">1-3 pages</option>
                          <option value="1-5">1-5 pages</option>
                          <option value="5-10">5-10 pages</option>
                          <option value="10-20">10-20 pages</option>
                          <option value="20+">20+ pages</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact Details */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 md:p-8"
                    >
                      <h3 className="mb-2 text-xl font-semibold text-white">Your Details</h3>
                      <p className="text-[#94A3B8] text-sm mb-6">We'll send your custom quote to this email</p>

                      <div className="grid gap-4 mb-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className={labelClasses}>Full Name *</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="" required className={inputClasses} />
                        </div>
                        <div>
                          <label htmlFor="email" className={labelClasses}>Email Address *</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="" required className={inputClasses} />
                        </div>
                      </div>

                      <div className="grid gap-4 mb-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="" className={inputClasses} />
                        </div>
                        <div>
                          <label htmlFor="company" className={labelClasses}>Business  Name</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="" className={inputClasses} />
                        </div>
                      </div>

                      <div className="grid gap-4 mb-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="budget" className={labelClasses}>Budget Range *</label>
                          <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required className={inputClasses}>
                            <option value="">Select budget</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className={labelClasses}>Timeline *</label>
                          <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} required className={inputClasses}>
                            <option value="">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label htmlFor="message" className={labelClasses}>Project Details</label>
                        <textarea
                          id="message" name="message" value={formData.message} onChange={handleChange}
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          rows={4} className={`${inputClasses} resize-none`}
                        />
                      </div>

                      {/* ✅ Error message — shows if backend is down or something fails */}
                      {error && (
                        <p className="px-4 py-3 mb-4 text-sm text-red-400 border bg-red-400/10 border-red-400/20 rounded-xl">
                          {error}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="border-t border-[#1E3A5F] px-6 md:px-8 py-4 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[#1E3A5F] text-[#94A3B8] hover:text-white hover:border-[#38BDF8]/50 transition-all duration-200 text-sm font-medium"
                    >
                      <FiArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] transition-all duration-300"
                    >
                      Continue
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] hover:shadow-lg hover:shadow-[#38BDF8]/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <FiSend className="w-5 h-5" />
                      {isLoading ? "Sending..." : "Submit Request"}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#64748B]"
            >
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4 text-[#38BDF8]" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-[#38BDF8]" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <FiSend className="w-4 h-4 text-[#38BDF8]" />
                <span>Free custom quote</span>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      <Footer />
    </>
  );
};

export default Quote;