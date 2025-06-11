import React from "react";
import ExpiryCard from "./ExpiryCard";
import SoonExpiryCard from "./SoonExpiryCard";

const PlatformInsights = () => {
  return (
    <section className="py-12 px-4 bg-white text-gray-900 dark:bg-transparent transition-colors duration-300">
      <div className=" mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Platform Insights
        </h2>
         <div className="flex gap-10 justify-center">
            <SoonExpiryCard />
            <ExpiryCard />
          </div>
      </div>
    </section>
  );
};

export default PlatformInsights;
