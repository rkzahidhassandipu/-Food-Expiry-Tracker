const commentsFood = async (com) => {
  return fetch("http://localhost:5000/comments", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(com),
  }).then((res) => res.json());
};
export default commentsFood;
