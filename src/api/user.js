import { request } from '@/utils/request'

// 获取用户信息
const getUserInfo = (params) => {
  return request({
    url: 'http://localhost:9999/data.json',
    method: 'get',
    params: params
  })
}

export { getUserInfo }
