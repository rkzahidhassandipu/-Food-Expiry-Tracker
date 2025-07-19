import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import getFridgeData from "../../Apis/getFridgeData";
import { getFoodStatus } from "../../utility/Status";

const SoonExpiryCard = () => {
  const [expiringCount, setExpiringCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFridgeData();
        const expiringItems = Array.isArray(data)
          ? data.filter((item) => getFoodStatus(item.expiryDate) === "expiring")
          : [];
        setExpiringCount(expiringItems.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-80 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center shadow text-gray-800 dark:text-white space-y-2 transition-colors duration-300">
      <div className="flex justify-center">
        <FaClock className="text-yellow-500 text-3xl" />
      </div>
      <h2 className="font-bold text-5xl text-yellow-500 my-5">
        {expiringCount}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        Items Expiring Soon (Next 5 Days)
      </p>
    </div>
  );
};

export default SoonExpiryCard;
