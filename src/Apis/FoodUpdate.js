import axios from "axios";

const updateFood = async (id, updatedData) => {
  try {
    const res = await axios.patch(
      `http://localhost:5000/fridge/${id}`,
      updatedData,
      {
        withCredentials: true 
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error updating food:", error);
    throw error;
  }
};

export default updateFood;
