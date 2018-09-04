import axios from 'axios'

const HttpClient = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:${
    process.env.REACT_APP_API_PORT
  }`,
})

export default HttpClient
