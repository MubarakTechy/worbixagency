"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FiTrendingUp, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, Bloom Beauty",
    initials: "SJ",
    content:
      "Worbix completely transformed our online presence. Our new website looks professional and we've seen a 3x increase in inquiries within the first month. The whole process was smooth from start to finish.",
    rating: 5,
    stat: "3× more inquiries",
  },
  {
    name: "Marcus Chen",
    role: "Owner, TechStart Solutions",
    initials: "MC",
    content:
      "Fast, reliable, and truly understood what we needed. The mobile-first design was exactly what our customers were asking for. Highly recommend Worbix to any business owner.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, GreenEats Delivery",
    initials: "ER",
    content:
      "The 30-day support after launch was a game-changer. They didn't just build our site — they made sure everything worked perfectly and trained our team along the way.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Co-Founder, FitLife Studio",
    initials: "DP",
    content:
      "From the initial consultation to the final launch, Worbix was professional and creative. Our booking system now runs flawlessly and clients love the new experience.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Director, Artisan Markets",
    initials: "LT",
    content:
      "We needed a website fast for our seasonal market and Worbix delivered in under 2 weeks. Clean design, easy to manage, and great communication throughout.",
    rating: 5,
  },
];

const Stars = ({ count }) => (
  <div className="flex items-center gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 fill-current text-sky-400"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Avatar = ({ initials }) => (
  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-semibold border rounded-full bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-600 border-sky-200">
    {initials}
  </div>
);

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section     id="Testimonials" className="relative py-16 overflow-hidden bg-white md:py-24">
      {/* Ambient background blobs */}
  
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-400/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-400/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="flex flex-col gap-6 mb-12 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-sky-500 font-semibold mb-3">
              Client Testimonials
            </p>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
          
          </motion.div>

          {/* Custom navigation buttons */}
          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-200 border border-gray-200 rounded-full hover:border-sky-400 hover:text-sky-400 hover:bg-sky-50 active:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextRef}
              className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-200 border border-gray-200 rounded-full hover:border-sky-400 hover:text-sky-400 hover:bg-sky-50 active:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="flex flex-col h-full p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-lg hover:border-sky-200 group">
                  {/* Quote and content */}
                  <div className="flex-1">
                    {/* Decorative quote mark */}
                    <span
                      className="block mb-2 font-serif text-6xl leading-none transition-colors duration-300 select-none text-sky-400/20 group-hover:text-sky-400/30"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    <Stars count={t.rating} />

                    <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-6">
                      {t.content}
                    </p>

                    {/* Stat badge */}
                    {t.stat && (
                      <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-200 rounded-full px-3 py-1 text-xs font-medium text-sky-600 mb-4">
                        <FiTrendingUp className="w-3 h-3" />
                        {t.stat}
                      </div>
                    )}
                  </div>

                  {/* Author section */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <Avatar initials={t.initials} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination dots */}
          <div className="flex items-center justify-center gap-2 mt-6 swiper-custom-pagination" />
        </motion.div>
      </div>

      {/* Tailwind-compatible styles */}
      <style jsx global>{`
        .swiper-custom-bullet {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 9999px;
          background-color: #e2e8f0;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .swiper-custom-bullet:hover {
          background-color: #bae6fd;
        }
        .swiper-custom-bullet-active {
          width: 1.75rem;
          background-color: #38bdf8;
        }
        .swiper-custom-bullet-active:hover {
          background-color: #0ea5e9;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;