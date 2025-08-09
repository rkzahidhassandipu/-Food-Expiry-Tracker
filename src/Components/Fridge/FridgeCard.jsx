import React from "react";
import { Link } from "react-router"; // ✅ fixed import
import { motion } from "framer-motion";
import { fadeIn } from "../animation/motions";

import Expiry from "./Expiry";
import Status from "./Status";
import ExpirIcons from "./ExpirIcons";

const FridgeCard = ({ item, index = 0 }) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white dark:bg-gray-800 text-white rounded-2xl shadow-md overflow-hidden flex flex-col" // ✅ flex column
    >
      {/* Image */}
      <div className="relative rounded-2xl">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className="absolute top-2 right-2 bg-opacity-70 px-2 py-1 rounded">
          <Status expireFood={item?.expiryDate} />
        </div>
      </div>

      {/* Card content */}
      <div className="p-4 flex flex-col flex-grow"> {/* ✅ flex-grow to push button down */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold capitalize">{item.title}</h2>
          <ExpirIcons expireFood={item?.expiryDate} />
        </div>
        <p className="text-sm text-gray-400 mt-1">Category: {item.category}</p>
        <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
        <p className="text-sm text-green-400">
          <Expiry expireFood={item?.expiryDate} />
        </p>
        <p className="text-sm text-gray-500 mt-1 mb-3">Added by: {item.userName}</p>

        {/* Pushes button to bottom */}
        <div className="flex-grow"></div>

        <div className="border-t border-gray-700 mb-3"></div>

        {/* Button */}
        <Link
          to={`/fridgeFood/${item._id}`}
          className="block w-full border border-green-700 py-2 text-green-700 hover:bg-green-800 hover:text-white rounded duration-300 text-center"
        >
          See Details
        </Link>
      </div>
    </motion.div>
  );
};

export default FridgeCard;
