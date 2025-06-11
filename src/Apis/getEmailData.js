const getEmailData = async (email,accessToken) => {
  const res = await fetch(`http://localhost:5000/fridgeEmail?email=${email}`, {
    credentials: 'include',
    headers: {
        authorization: `Bearer ${accessToken}`
    }
  });
  const data = await res.json();
  return data;
};


export default getEmailData