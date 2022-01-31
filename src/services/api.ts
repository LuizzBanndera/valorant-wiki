import axios from 'axios'


const Axios = axios.create({
  baseURL: process.env.url,
  params: {
    language: process.env.lang
  }
})

export default Axios