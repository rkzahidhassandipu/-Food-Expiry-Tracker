import React, { useEffect, useState } from "react";
import { GoAlertFill } from "react-icons/go";
import getFridgeData from "../../Apis/getFridgeData";
import { getFoodStatus } from "../../utility/Status";

const ExpiryCard = () => {
  const [expiredCount, setExpiredCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFridgeData();
        const expiredItems = Array.isArray(data)
          ? data.filter((item) => getFoodStatus(item.expiryDate) === "expired")
          : [];
        setExpiredCount(expiredItems.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-80 bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-md border border-red-200 dark:border-gray-700 transition-all duration-300">
      <div className="flex justify-center">
        <GoAlertFill className="text-red-500 dark:text-red-400 text-3xl" />
      </div>
      <h2 className="font-bold text-5xl text-red-600 dark:text-red-400 my-4">
        {expiredCount}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
        Expired Items on Platform
      </p>
    </div>
  );
};

export default ExpiryCard;
