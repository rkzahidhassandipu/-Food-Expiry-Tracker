const getComments = (foodId) => {
    return fetch(`http://localhost:5000/comments?foodId=${foodId}`)
    .then((res) => res.json())
}

export default getComments