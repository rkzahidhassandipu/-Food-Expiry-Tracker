const getFridgeData = () => {
  return fetch("http://localhost:5000/fridge")
    .then((res) => res.json());
};

export default getFridgeData;