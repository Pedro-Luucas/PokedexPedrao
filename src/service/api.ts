import axios from 'axios'

const api = axios.create({
  baseURL: "https://pokeapi.co/docs/v2/"
})

export default api;