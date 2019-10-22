import axios from 'axios'
import JSONbig from 'json-bigint'
const request = axios.create({
  baseURL: ''
})

// 定义全局请求头
request.defaults.headers.post['Content-Type'] = 'application/json'

request.defaults.transformRequest = [ function (data) {
  return JSON.stringify(data)
}]

// 判断后台返回的数据
request.interceptors.response.use(function (response) {
  return response.data.data || response.data
}, async error => {
  return Promise.reject(error)
})

// 获取的数据转换
request.defaults.transformResponse = [ function (data) {
  try {
    return JSONbig.parse(data)
  } catch (err) {
    return data
  }
}]

export default request
