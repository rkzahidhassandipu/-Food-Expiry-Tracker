import React, { useEffect, useState } from "react";
import getFridgeData from "../../Apis/getFridgeData";
import { getFoodStatus } from "../../utility/Status";
import { Link, useNavigate } from "react-router";
import ExpirIcons from "../Fridge/ExpirIcons";
import Status from "../Fridge/Status";
import Expiry from "../Fridge/Expiry";
import useAuth from "../../Hooks/useAuth";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/motions";

const ExpiredItemsCard = () => {
  const [expiringItems, setExpiringItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { user } = useAuth();

  // Fetch expired food
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFridgeData();
        const expired = Array.isArray(data)
          ? data.filter((item) => getFoodStatus(item.expiryDate) === "expired")
          : [];
        setExpiringItems(expired);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Category handling
  const categories = ["All", ...new Set(expiringItems.map((item) => item.category))];
  const filteredItems =
    selectedCategory === "All"
      ? expiringItems
      : expiringItems.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirst, indexOfLast);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1); // Reset to page 1 on category change
  };

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className=" dark:bg-gray-900 w-full px-4 py-10">
      <motion.h2
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white"
      >
        Expired Items
      </motion.h2>

      {/* Tabs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-3 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 text-center
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

      {/* Grid of Items */}
      {currentItems.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">
          No expired items in this category.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map((item) => (
              <div
                key={item._id}
                className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
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
          <div className="grid grid-cols-1 place-items-center mt-10 gap-3">
            <div className="flex flex-wrap justify-center items-center gap-2">
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
          </div>
        </>
      )}
    </section>
  );
};

export default ExpiredItemsCard;
