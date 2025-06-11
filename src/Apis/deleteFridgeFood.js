const deleteFridgeFood = async (id) => {
    try {
        const respons = await fetch(`http://localhost:5000/fridgeFood/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
        return await respons.json()
    } catch (error) {
        console.log(error)
    }
}

export default deleteFridgeFood;