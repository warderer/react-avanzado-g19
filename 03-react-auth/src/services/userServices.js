import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const token = window.localStorage.getItem('token')

const config = {
  headers: {
    Authorization: `JWT ${token}`
  }
}

const registerUser = (data) => axios.post(`${BASE_URL}/register`, data)

const loginUser = (data) => axios.post(`${BASE_URL}/login`, data)

const getSingleUser = (id) => axios.get(`${BASE_URL}/users/${id}`, config)

export { registerUser, loginUser, getSingleUser }
