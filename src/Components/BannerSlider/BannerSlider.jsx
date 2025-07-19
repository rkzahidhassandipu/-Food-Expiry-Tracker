import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/motions";

const slides = [
  {
    title: "Welcome to FreshBox",
    subtitle: "Delivering freshness to your door",
    image: "https://i.postimg.cc/BQJ9w67N/sa.jpg",
  },
  {
    title: "Customize Your Fridge",
    subtitle: "Manage your food with ease",
    image: "https://i.postimg.cc/rFgX6kvT/saa.jpg",
  },
  {
    title: "Join Our Community",
    subtitle: "Start saving and sharing today",
    image: "https://i.postimg.cc/jj2R355B/ss.jpg",
  },
];

const BannerSlider = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.7 }}
      className="w-full my-6 sm:my-8 md:my-10 lg:my-12"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6">
                <div className="text-white max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={() => navigate("/register")}
                    className="bg-primary px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base text-white hover:bg-primary/80 transition"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default BannerSlider;
