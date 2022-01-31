
import React, { useContext } from 'react'
import { ReactContext } from '@ctx/state'
import axios from 'axios'


const Axios = axios.create({
  baseURL: 'https://valorant-api.com/v1',
  params: {
    language: 'pt-BR'
  }
})

export default Axios