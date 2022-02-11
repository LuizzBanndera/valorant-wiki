import axios from 'axios'


const Axios = axios.create({
  baseURL: process.env.url,
})

export default Axios