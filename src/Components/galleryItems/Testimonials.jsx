import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Victoria Wotton",
    company: "Fementum Odio Co.",
    text: "Every pizza starts with our hand-tossed dough, made fresh daily and topped with our signature sauce crafted from ripe tomatoes and secret herbs.",
    image: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/testi-1-1.png",
    stars: 5,
  },
  {
    name: "Emma Mia",
    company: "Fementum Odio Co.",
    text: "Freshly tossed dough forms the base of every pizza, topped with a homemade sauce made from juicy tomatoes and our special herb recipe.",
    image: "https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/testi-1-2.png",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-16 bg-white dark:bg-transparent overflow-hidden"
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Our <span className="text-green-600">Customers</span> Feedback
        </h2>
      </motion.div>

      {/* Testimonials grid */}
      <div className="grid md:grid-cols-2 gap-8 w-full mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            {/* Image animation */}
            <motion.img
              src={t.image}
              alt={t.name}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-24 h-24 rounded-full object-cover border-4 border-green-500 -mt-12"
            />

            {/* Quote */}
            <motion.img
              src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/testi-1-quote.png"
              alt="Quote"
              initial={{ opacity: 0, rotate: -15 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-8 h-8 my-4"
            />

            {/* Text */}
            <p className="text-gray-600 italic mb-6">{t.text}</p>

            {/* Name & Company */}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.company}</p>

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex gap-1 mt-2 text-yellow-400"
            >
              {Array.from({ length: t.stars }).map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
