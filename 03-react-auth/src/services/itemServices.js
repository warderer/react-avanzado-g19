import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const getSingleItem = (id) => axios.get(`${BASE_URL}/items/${id}`)
const getAllItems = () => axios.get(`${BASE_URL}/items`)

export {
  getSingleItem,
  getAllItems
}
