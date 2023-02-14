import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const registerUser = (data) => axios.post(`${BASE_URL}/register`, data)

const loginUser = (data) => axios.post(`${BASE_URL}/login`, data)

export { registerUser, loginUser }
