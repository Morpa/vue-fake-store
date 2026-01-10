import axios from "axios"

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
})

// api.interceptors.request.use(
//   (config) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(config)
//       }, 1000)
//     })
//   },
//   (error) => Promise.reject(error),
// )
