import Axios from 'axios'

export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=0kLRRaPkXAvhbBdHByysnCKUWYrEkofPcnqN55WO',
  timeout: 8000
})
