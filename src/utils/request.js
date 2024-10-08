import axios from "axios"
import { useUserStore } from '@/stores'
import router from "@/router"

const baseURL = 'http://localhost:5173'

const request = axios.create({
  baseURL,
  timeout: 5000,
})


//请求拦截器
request.interceptors.request.use(
  config => {
    const userStore = useUserStore()
    if(userStore.token){
      config.headers.Authorization = userStore.token
    }
    return config
  },
  error => {
    if(error.response.status===401&&response.response)[
      console.error(error)
    ]
    return Promise.reject(error)
  }
  
)


//相应拦截求
request.interceptors.response.use(
  response => {
    
      return response
    
  },

  error => {
    if (error.response.status === 401) {
      router.push('/user')
    }
    console.error(error)
    return Promise.reject(error)
  }
)

export default request
export {baseURL}