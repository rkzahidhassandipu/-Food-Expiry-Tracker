import React from "react";
import { FaCheckCircle, FaClock, FaExclamationTriangle } from "react-icons/fa";
import Expiry from "./Expiry";
import Status from "./Status";
import ExpirIcons from "./ExpirIcons";
import { Link } from "react-router";

const FridgeCard = ({ item }) => {
  return (
    <div className="bg-slate-900 text-white rounded-2xl">
      <div className="relative  rounded-2xl">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className="absolute top-2 right-2 bg-opacity-70 px-2 py-1 rounded">
          <Status expireFood={item?.expiryDate} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold capitalize">{item.title}</h2>
          <div>
            <ExpirIcons expireFood={item?.expiryDate} />
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-1">Category: {item.category}</p>
        <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
        <p className="text-sm text-green-400">
          <Expiry expireFood={item?.expiryDate} />
        </p>
        <p className="text-sm text-gray-500 mt-1 mb-3">Added by: {item.userName}</p>
        <p className="border-t mb-4 border-gray-700"></p>
        <Link to={`/fridgeFood/${item._id}`} className="border border-green-700 py-2 duration-300 hover:bg-gray-800 rounded mt-2">
            <button className="w-full cursor-pointer text-green-700">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FridgeCard;
