import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  const token = window.localStorage.getItem(ACCESS_TOKEN)

  if(token) {
    config.headers['Authorization'] = token
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
  /**
  * status 可结合自己业务进行修改
  */
   const res = response.data
   if (res.status !== 1) {
     console.log(res)
     Message({
       message: res.message,
       type: 'error',
       duration: 2 * 1000
     })
     return Promise.reject('error')
   } else {
     return response.data
   }
  },
  error => {
    if (error.response.status === 403 || error.response.status === 401) {
      Message({
      message: error.message,
      type: 'error',
      duration: 1000
      })
      sessionStorage.clear()
      window.location.href = '/user/login'
    }
    return Promise.reject(error)
  }
)

export default service
