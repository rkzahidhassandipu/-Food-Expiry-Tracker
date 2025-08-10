import React from "react";
import "../../index.css";
import { Link } from "react-router";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-white dark:bg-transparent py-10 sm:py-16 overflow-hidden"
    >
      {/* Shape Images */}
      <motion.img
        initial={{ opacity: 0, y: -20, rotate: -10 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-[5%] left-[20%] sm:top-[10%] sm:left-[43%] hidden md:block animate-bounce-image w-3 sm:w-10 lg:w-20"
        src="https://i.postimg.cc/YSmWv85Z/b48de8eabf72d7cddb12ba3462f59f82-removebg-preview.png"
        alt="Shape 1"
      />
      <motion.img
        initial={{ opacity: 0, y: 20, rotate: 10 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute right-[2%] bottom-[5%] hidden md:block animate-bounce-image w-16 sm:w-20 lg:w-auto"
        src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/about-shape-1.2.png"
        alt="Shape 2"
      />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <img
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover rounded-lg"
            src="https://i.postimg.cc/8PrtVB5K/eiliv-aceron-iq-IJE3-Jo8-YM-unsplash-1-removebg-preview.png"
            alt="About our restaurant"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-green-600 font-semibold uppercase tracking-wide text-sm sm:text-base"
          >
            About our fridge
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-snug"
          >
            We invite you to visit our Fast food{" "}
            <span className="text-theme">shop</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base"
          >
            At the heart of our kitchen are bold flavors, high-quality
            ingredients, and a commitment to consistency. From juicy burgers,
            crispy fries, and cheesy pizzas to spicy wraps and refreshing
            drinks, every item on our menu is made to order and packed with
            taste.
          </motion.p>

          {/* Owner Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <h4 className="text-base sm:text-lg font-bold">Raihan Uddin</h4>
            <p className="text-gray-500 text-sm sm:text-base">owner</p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Link
              to={"/fridge"}
              className="inline-block px-5 uppercase py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-lg shadow hover:bg-primary-dark transition text-sm sm:text-base"
            >
              VISIT OUR fridge
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
