import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/motions"; // Adjust path as needed

const tips = [
  "Plan your meals for the week before shopping.",
  "Use the 'First-In, First-Out' (FIFO) method in your pantry and fridge.",
  "Get creative with leftovers to make new dishes.",
  "Store fruits and vegetables properly to extend freshness.",
  "Understand date labels: 'Best By' is quality, 'Use By' is safety.",
];

const QuickTips = () => {
  return (
    <section className="bg-green-100 dark:bg-gray-900/30 py-16 px-6 md:px-10 rounded-3xl my-20">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10"
      >
        Quick Tips for Food Savers
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.2 + index * 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-start gap-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-5 py-4 rounded-2xl shadow-md transition hover:shadow-lg"
          >
            <AiOutlineInfoCircle className="text-green-500 mt-1" size={22} />
            <p className="text-sm leading-relaxed">{tip}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuickTips;
