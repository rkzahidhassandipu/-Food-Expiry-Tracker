import React from "react";
import WhyUseFoodExpiryBody from "./WhyUseFoodExpiryBody";

const WhyUseFoodExpiry = () => {
  return (
    <section className="py-12 px-4 bg-white text-gray-900 dark:bg-transparent transition-colors duration-300">
      <div className=" mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Why Use FoodExpiry?
        </h2>

        <WhyUseFoodExpiryBody />
      </div>
    </section>
  );
};

export default WhyUseFoodExpiry;
