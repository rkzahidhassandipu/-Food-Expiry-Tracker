import React, { useEffect, useState } from "react";
import { FaPlusCircle, FaEye } from "react-icons/fa";
import { Link } from "react-router";
import EditBtn from "../../Components/EditFood/EditBtn";
import useAuth from "../../Hooks/useAuth";
import getFridgeData from "../../Apis/getFridgeData";
import Loading from "../../Components/Loading/Loading";
import {
  getFoodStatus,
  getExpiryTextColor,
  statusText,
} from "../../utility/Status";
import Delete from "../../Components/Delete/Delete";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn } from "../../Components/animation/motions";

const MyItems = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const filteredItems = Array.isArray(items)
    ? items.filter((item) => item.email === user.email)
    : [];

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      getFridgeData(user.email, user.accessToken)
        .then((data) => {
          const dataArray = Array.isArray(data)
            ? data
            : data && typeof data === "object"
            ? [data]
            : [];
          setItems(dataArray);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch items:", error);
          setItems([]);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleUpdateSuccess = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id === updatedItem._id ? updatedItem : item
      )
    );
  };

  const handleDeleteSuccess = (deletedItemId) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item._id !== deletedItemId)
    );
  };

  if (loading) return <Loading />;

  return (
    <div className="p-4 md:p-10 text-white font-sans">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Expiry || My Items</title>
      </Helmet>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">My Food Items</h1>
            <p className="text-gray-400">
              Manage your personal food inventory.
            </p>
          </div>
          <Link to={"/addFood"}>
            <button className="bg-green-500 duration-300 cursor-pointer hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center gap-2">
              <FaPlusCircle /> Add New Item
            </button>
          </Link>
        </div>

        {/* Table for medium+ screens */}
        <div className="overflow-x-auto rounded-xl shadow-md border dark:border-gray-700 bg-white dark:bg-gray-900">
  <table className="table w-full min-w-[800px]">
    <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm uppercase">
      <tr>
        <th className="px-6 py-4">Name</th>
        <th className="px-6 py-4">Category</th>
        <th className="px-6 py-4">Quantity</th>
        <th className="px-6 py-4">Expiry Date</th>
        <th className="px-6 py-4">Status</th>
        <th className="px-6 py-4 text-right">Actions</th>
      </tr>
    </thead>

    <tbody className="text-gray-800 dark:text-gray-100">
      {filteredItems.map((item, idx) => {
        const expiryStatus = getFoodStatus(item.expiryDate);
        const expiryColorClass = getExpiryTextColor(expiryStatus);
        const expiryStatusText = statusText[expiryStatus];

        return (
          <motion.tr
            key={item._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          >
            <td className="px-6 py-4 font-medium">{item.title}</td>
            <td className="px-6 py-4">{item.category}</td>
            <td className="px-6 py-4">{item.quantity}</td>
            <td className="px-6 py-4">{item.expiryDate}</td>
            <td className={`px-6 py-4 font-semibold ${expiryColorClass}`}>
              {expiryStatusText}
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex justify-end items-center gap-3">
                <Link
                  to={`/fridgeFood/${item._id}`}
                  className="text-blue-500 hover:text-blue-700"
                  title="View"
                >
                  <FaEye />
                </Link>
                <EditBtn
                  foodId={item._id}
                  onUpdate={handleUpdateSuccess}
                  className="text-yellow-500 hover:text-yellow-600"
                />
                <Delete
                  item={item._id}
                  onDeleteSuccess={handleDeleteSuccess}
                />
              </div>
            </td>
          </motion.tr>
        );
      })}
    </tbody>
  </table>
</div>


        {/* Card view for small screens */}
        {/* Card view for small screens */}
        <div className="md:hidden space-y-4">
          {filteredItems.map((item, idx) => {
            const expiryStatus = getFoodStatus(item.expiryDate);
            const expiryColorClass = getExpiryTextColor(expiryStatus);
            const expiryStatusText = statusText[expiryStatus];

            return (
              <motion.div
                key={item._id}
                variants={fadeIn("up", idx * 0.1)}
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                className="bg-[#1e293b] p-4 rounded-md text-gray-800 dark:text-white"
              >
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">
                  Category: {item.category}
                </p>
                <p className="text-sm text-gray-400">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-400">
                  Expiry: {item.expiryDate}
                </p>
                <p className={`text-sm ${expiryColorClass}`}>
                  {expiryStatusText}
                </p>
                <div className="flex gap-4 mt-3 text-gray-300">
                  <Link to={`/fridgeFood/${item._id}`}>
                    <FaEye className="hover:text-white" />
                  </Link>
                  <EditBtn
                    foodId={item._id}
                    onUpdate={handleUpdateSuccess}
                    className="text-lg hover:text-white"
                  />
                  <Delete
                    item={item._id}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
