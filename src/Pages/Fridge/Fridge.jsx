import { useEffect, useState } from "react";
import getFridgeData from "../../Apis/getFridgeData";
import FridgeCard from "../../Components/Fridge/FridgeCard";
import Loading from "../../Components/Loading/Loading";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Fridge = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    getFridgeData()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch fridge data:", error);
        setLoading(false);
      });
  }, []);

  const getFoodStatus = (expiryDate) => {
    const now = new Date();
    const expiry = new Date(expiryDate);
    const diffInMs = expiry - now;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInMs <= 0) return "expired";
    else if (diffInDays <= 5) return "expiring";
    return "fresh";
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    const matchesStatus = status === "all" || getFoodStatus(item.expiryDate) === status;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-11/12 md:w-4/5 mx-auto p-6 text-gray-900 dark:text-white transition-colors duration-300">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Expiry || Fridge</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-center mb-4">Community Fridge</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Browse all food items shared by the community. Filter by category,
        status, or search for specific items.
      </p>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mb-6 py-6 px-3 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-lg transition-shadow duration-300">
        <input
          type="text"
          placeholder="Search food items..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white w-full border border-gray-300 dark:border-gray-700"
        />

        <select
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white w-full border border-gray-300 dark:border-gray-700"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Others">Others</option>
        </select>

        <select
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white w-full border border-gray-300 dark:border-gray-700"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="all">All Status</option>
          <option value="fresh">Fresh</option>
          <option value="expiring">Expiring Soon</option>
          <option value="expired">Expired</option>
        </select>
      </div>

      {/* Grid */}
      {loading ? (
        <Loading />
      ) : filteredItems.length === 0 ? (
        <p className="text-center text-red-500">No matching food items found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedItems.map((item, idx) => (
              <FridgeCard key={item._id} item={item} index={idx} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 items-center flex-wrap gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 px-3 border rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-green-600 hover:text-white disabled:opacity-50 flex items-center gap-1"
              >
                <FaChevronLeft /> Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded-md border transition-all duration-200 ${
                    currentPage === i + 1
                      ? "bg-green-700 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-green-700"
                  } hover:bg-green-600 hover:text-white`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 px-3 border rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-green-600 hover:text-white disabled:opacity-50 flex items-center gap-1"
              >
                Next <FaChevronRight />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Fridge;
