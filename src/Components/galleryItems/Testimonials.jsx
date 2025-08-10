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
    <section className="relative py-16 bg-white dark:bg-transparent overflow-hidden">
      {/* Section title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Our <span className="text-green-600">Customers</span> Feedback
        </h2>
       
      </div>

      {/* Testimonials grid */}
      <div className="grid md:grid-cols-2 gap-8 w-full mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            {/* Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-green-500 -mt-12"
            />
            {/* Quote */}
            <img
              src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/testi-1-quote.png"
              alt="Quote"
              className="w-8 h-8 my-4"
            />
            {/* Text */}
            <p className="text-gray-600 italic mb-6">{t.text}</p>
            {/* Name */}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.company}</p>
            {/* Stars */}
            <div className="flex gap-1 mt-2 text-yellow-400">
              {Array.from({ length: t.stars }).map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
