const SearchFood = async (search = "") => {
  const res = await fetch(`http://localhost:5000/fridge?search=${search}`, {
    credentials: 'include',
  });
  const data = await res.json();
  return data;
};

export default SearchFood;