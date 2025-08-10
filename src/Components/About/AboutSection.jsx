import React from "react";
import "../../index.css";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <section className="relative bg-white py-10 sm:py-16 overflow-hidden">
      {/* Shape Images */}
      <img
        className="absolute top-[5%] left-[20%] sm:top-[10%] sm:left-[43%] hidden md:block animate-bounce-image w-3 sm:w-10 lg:w-20"
        src="https://i.postimg.cc/YSmWv85Z/b48de8eabf72d7cddb12ba3462f59f82-removebg-preview.png"
        alt="Shape 1"
      />
      <img
        className="absolute right-[2%] bottom-[5%] hidden md:block animate-bounce-image w-16 sm:w-20 lg:w-auto"
        src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/about-shape-1.2.png"
        alt="Shape 2"
      />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <img
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover rounded-lg"
            src="https://i.postimg.cc/8PrtVB5K/eiliv-aceron-iq-IJE3-Jo8-YM-unsplash-1-removebg-preview.png"
            alt="About our restaurant"
          />
        </div>

        {/* Content Section */}
        <div>
          <span className="text-primary font-semibold uppercase tracking-wide text-sm sm:text-base">
            About our fridge
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-snug">
            We invite you to visit our Fast food{" "}
            <span className="text-theme">Restaurant</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            At the heart of our kitchen are bold flavors, high-quality
            ingredients, and a commitment to consistency. From juicy burgers,
            crispy fries, and cheesy pizzas to spicy wraps and refreshing
            drinks, every item on our menu is made to order and packed with
            taste.
          </p>

          {/* Owner Info */}
          <div className="mt-6">
            <h4 className="text-base sm:text-lg font-bold">
              Parvez Hossain Imon
            </h4>
            <p className="text-gray-500 text-sm sm:text-base">
              Restaurant owner
            </p>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link
              to={'/fridge'}
              className="inline-block px-5 uppercase py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-lg shadow hover:bg-primary-dark transition text-sm sm:text-base"
            >
              VISIT OUR fridge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
