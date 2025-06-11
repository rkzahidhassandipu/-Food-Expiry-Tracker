export const detailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/fridgeFood/${id}`);
  if (!res.ok) throw new Error("Failed to fetch item");
  const data = await res.json();
  return data;
};
