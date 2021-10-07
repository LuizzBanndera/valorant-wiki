
import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://valorant-api.com/v1'
})

export default Axios