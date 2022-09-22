import Axios from 'axios'
const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  withCredentials: true,

  auth:{
    username:"username",
    password:"password"
  }
})


export default axios