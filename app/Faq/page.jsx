"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiHelpCircle, FiMessageSquare, FiArrowRight, FiShield, FiDollarSign, FiStar, FiUsers, FiLock } from "react-icons/fi";
import Link from "next/link";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("trust");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { id: "trust", name: "Trust & Credibility", icon: <FiShield className="w-4 h-4" /> },
    { id: "investment", name: "Investment & Value", icon: <FiDollarSign className="w-4 h-4" /> },
    { id: "process", name: "How It Works", icon: <FiStar className="w-4 h-4" /> },
    { id: "results", name: "Results & Proof", icon: <FiUsers className="w-4 h-4" /> },
  ];

  const faqs = {
    trust: [
      {
        question: "How do I know I can trust Worbix with my project?",
        answer:
          "We've delivered 200+ websites for founders and businesses worldwide. Every project includes a free mockup before you pay a cent—you see exactly what you're getting. Plus, we use milestone-based payments: 50% to start, 25% at approval, 25% at launch. You're never at risk.",
        icon: <FiShield className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "Is my information and business data secure?",
        answer:
          "Absolutely. We use industry-standard encryption, secure development practices, and never share your data with third parties. Your website includes SSL certification, and we follow GDPR best practices. Your business information stays yours—always.",
        icon: <FiLock className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "What do other people think about your work?",
        answer:
          "Our clients consistently praise our speed, quality, and communication. We maintain a 5-star rating across platforms, and you can read detailed testimonials on our site. Many of our clients come from referrals—that's the best proof of trust we can offer.",
        icon: <FiStar className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "How do I know you'll deliver what you promise?",
        answer:
          "We back every project with a satisfaction guarantee. If you're not happy with the initial mockup, you owe nothing. Our 30-day post-launch support ensures everything works perfectly. We don't succeed unless you succeed.",
        icon: <FiShield className="w-5 h-5 text-[#38BDF8]" />,
      },
    ],
    investment: [
      {
        question: "Is a professional website really worth the investment?",
        answer:
          "Consider this: 75% of consumers judge a business's credibility based on its website design. A professional website pays for itself through increased inquiries, sales, and credibility. Most clients see ROI within the first month. It's not an expense—it's an investment in your business growth.",
        icon: <FiDollarSign className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "What if I'm not sure I have the budget right now?",
        answer:
          "We offer flexible payment plans split across milestones, so you don't need the full amount upfront. Starting at $500 for a landing page, we have options for every stage. Plus, our free mockup lets you see the value before committing. A professional online presence is more affordable than you think.",
        icon: <FiDollarSign className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "Can I find this service cheaper elsewhere?",
        answer:
          "You can find cheaper options, but they often come with hidden costs: templates that look generic, slow loading speeds, poor mobile experience, and no support. Our websites are custom-designed, optimized for conversion, and include 30 days of support. The free versions and cheap alternatives rarely deliver the same results.",
        icon: <FiDollarSign className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "What's the real cost of not having a professional website?",
        answer:
          "Every day without a professional website, you're losing potential customers. Studies show it takes visitors just 0.05 seconds to form an opinion about your site. A poor or non-existent online presence means lost credibility, missed opportunities, and competitors winning your potential customers.",
        icon: <FiDollarSign className="w-5 h-5 text-[#38BDF8]" />,
      },
    ],
    process: [
      {
        question: "This sounds great, but how does it actually work?",
        answer:
          "Our process is refreshingly simple: 1) We learn about your business in a quick discovery call. 2) We create a free, custom mockup for your approval. 3) Once you love it, we build it. 4) You review and we refine. 5) We launch and support you for 30 days. No surprises, no hidden steps.",
        icon: <FiStar className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "How fast can I have my website live?",
        answer:
          "Most projects go from concept to launch in just 1-3 weeks. Unlike traditional agencies that take 2-3 months, we've streamlined our process without sacrificing quality. Your business doesn't have time to wait, and neither do we.",
        icon: <FiStar className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "Will I be stuck with a website I can't manage myself?",
        answer:
          "Not at all. We build on user-friendly platforms so you can easily update content without coding. During our 30-day support period, we provide hands-on training. You'll feel confident managing your site, and we're always here if you need help beyond that.",
        icon: <FiStar className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "What if I need changes or something goes wrong?",
        answer:
          "Our 30-day post-launch support covers bug fixes, tweaks, and content updates at no extra charge. After that, if something breaks due to our code, we fix it free—even months later. For new features, we offer affordable ongoing support packages.",
        icon: <FiStar className="w-5 h-5 text-[#38BDF8]" />,
      },
    ],
    results: [
      {
        question: "Does this really work? How do I know I'll get results?",
        answer:
          "Yes, it works—and we have the proof. Our websites are designed for conversion, not just aesthetics. Clients typically see increased inquiries within the first week of launch. One client saw a 40% increase in leads within 30 days. We focus on what drives real business results.",
        icon: <FiUsers className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "What kind of results can I expect?",
        answer:
          "You can expect: a professional online presence that builds instant credibility, faster loading times that keep visitors engaged, mobile-responsive design that captures all users, clear calls-to-action that drive inquiries, and SEO foundations that help you get found. Real businesses, real results.",
        icon: <FiUsers className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "How is your approach different from DIY website builders?",
        answer:
          "DIY builders give you tools; we give you results. Templates can look amateur and don't convert well. Our custom designs are built specifically for your audience and goals. Plus, we handle the technical details—hosting, security, speed optimization, SEO—so you don't have to learn it all yourself.",
        icon: <FiUsers className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        question: "What guarantees do you offer on results?",
        answer:
          "We guarantee you'll love your mockup or you pay nothing. We guarantee 30 days of dedicated post-launch support. We guarantee fast, responsive communication. And we guarantee clean, professional code. Your satisfaction isn't just a promise—it's built into our process.",
        icon: <FiUsers className="w-5 h-5 text-[#38BDF8]" />,
      },
    ],
  };

  return (
    <>
      <Navbar />

      <section className="relative bg-[#0F1D32] pt-16 pb-24 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Header - Following "rough awesome format" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12 text-center md:mb-16"
          >
            {/* <div className="inline-flex items-center gap-2 bg-[#1A2942] border border-[#1E3A5F] rounded-full px-4 py-1.5 mb-6">
              <FiHelpCircle className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider">
                What I Want You to Know
              </span>
            </div> */}

            <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Your Questions Answered,{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
                Concerns Addressed
              </span>
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We know you have questions  and probably a few concerns too. Here&rsquo;s everything you need to feel confident about working with Worbix.
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
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white shadow-lg shadow-[#38BDF8]/20"
                    : "bg-[#1A2942] text-[#94A3B8] border border-[#1E3A5F] hover:border-[#38BDF8]/50 hover:text-white"
                }`}
              >
                <span className={activeCategory === category.id ? "text-white" : "text-[#38BDF8]"}>
                  {category.icon}
                </span>
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
                    <span className="mt-0.5 min-w-[24px]">
                      {faq.icon}
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

          {/* Bottom CTA - Following "rough awesome format" Point 4: Take Action */}
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
                Ready to See What We Can Do for You?
              </h3>
              <p className="text-[#94A3B8] text-sm md:text-base mb-6 max-w-md mx-auto">
                Get your free custom mockup today. No commitment, no pressure just a preview of your future online presence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/Contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] hover:shadow-lg hover:shadow-[#38BDF8]/25 transition-all duration-300"
                >
                  Get Your Free Mockup
                  <FiArrowRight className="w-5 h-5" />
                </Link>
                {/* <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-[#38BDF8] border border-[#38BDF8]/30 hover:bg-[#38BDF8]/10 transition-all duration-300"
                >
                  See Our Work
                  <FiArrowRight className="w-5 h-5" />
                </Link> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;



//              </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Bottom CTA - Following "rough awesome format" Point 4: Take Action */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-12 text-center md:mt-16"
//           >
//             <div className="bg-[#1A2942] border border-[#1E3A5F] rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
//               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#38BDF8]/10 to-[#818CF8]/10 flex items-center justify-center mx-auto mb-4 border border-[#38BDF8]/20">
//                 <FiMessageSquare className="w-6 h-6 text-[#38BDF8]" />
//               </div>
//               <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
//                 Ready to See What We Can Do for You?
//               </h3>
//               <p className="text-[#94A3B8] text-sm md:text-base mb-6 max-w-md mx-auto">
//                 Get your free custom mockup today. No commitment, no pressure just a preview of your future online presence.
//               </p>
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <Link
//                   href="/Contact"
//                   className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#0EA5E9] hover:to-[#6366F1] hover:shadow-lg hover:shadow-[#38BDF8]/25 transition-all duration-300"
//                 >
//                   Get Your Free Mockup
//                   <FiArrowRight className="w-5 h-5" />
//                 </Link>
//                 {/* <Link
//                   href="/portfolio"
//                   className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-[#38BDF8] border border-[#38BDF8]/30 hover:bg-[#38BDF8]/10 transition-all duration-300"
//                 >
//                   See Our Work
//                   <FiArrowRight className="w-5 h-5" />
//                 </Link> */}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default FAQ;