import React, { useEffect, useState } from "react";
import getFridgeData from "../../Apis/getFridgeData";
import { getFoodStatus } from "../../utility/Status";
import { Link } from "react-router";
import ExpirIcons from "../Fridge/ExpirIcons";
import Status from "../Fridge/Status";
import Expiry from "../Fridge/Expiry";
import useAuth from "../../Hooks/useAuth";
import { fadeIn } from "../animation/motions";
import { motion } from "framer-motion";

const ExpiredItemsCard = () => {
  const [expiredItems, setExpiredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFridgeData();
        const expired = Array.isArray(data)
          ? data.filter((item) => getFoodStatus(item.expiryDate) === "expired")
          : [];
        setExpiredItems(expired);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const categories = ["All", ...new Set(expiredItems.map((item) => item.category))];

  const filteredItems =
    selectedCategory === "All"
      ? expiredItems
      : expiredItems.filter((item) => item.category === selectedCategory);

  // Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1); // Reset to first page on tab change
  };

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="w-full px-4 py-8">
      <motion.h2
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Expired Items
        </motion.h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300
              ${
                selectedCategory === cat
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 dark:bg-gray-700 dark:text-white border-gray-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      {currentItems.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">No expired items in this category.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map((item) => (
              <div
                key={item._id}
                className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
                    <Status expireFood={item?.expiryDate} />
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <ExpirIcons expireFood={item?.expiryDate} />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Category: {item.category}</p>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                  <p className="text-sm text-green-600">
                    <Expiry expireFood={item?.expiryDate} />
                  </p>
                  <p className="text-xs text-gray-500">Added by: {item.userName}</p>
                  <Link
                    to={user ? `/fridgeFood/${item._id}` : "/login"}
                    state={user ? undefined : { from: `/fridgeFood/${item._id}` }}
                    className="block mt-3 text-center py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border bg-gray-200 dark:bg-gray-700 text-sm disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => changePage(pageNum)}
                className={`px-3 py-1 rounded text-sm border ${
                  currentPage === pageNum
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white dark:bg-gray-700 border-gray-300 text-gray-700 dark:text-white"
                }`}
              >
                {pageNum}
              </button>
            ))}
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border bg-gray-200 dark:bg-gray-700 text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExpiredItemsCard;
