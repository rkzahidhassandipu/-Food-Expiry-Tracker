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
    <div className="w-80 bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-md border border-green-300 dark:border-gray-700 transition-all duration-300">
      <div className="flex justify-center">
        <FaClock className="text-yellow-500 text-3xl" />
      </div>
      <h2 className="font-bold text-5xl text-green-600 dark:text-yellow-400 my-4">
        {expiringCount}
      </h2>
      <p className="text-md text-gray-700 dark:text-gray-300 font-medium">
        Items Expiring Soon (Next 5 Days)
      </p>
    </div>
  );
};

export default SoonExpiryCard;
