// src/api/FoodExpiryPromise.js
const postFoodExpiry = (foodData) => {
  return fetch("http://localhost:5000/FoodExpiry", {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(foodData),
  }).then((res) => res.json());
};

export default postFoodExpiry;
