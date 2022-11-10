import { request } from '@/utils/request'

// 获取图形验证码
const getVerifyCode = () => {
  return request({
    url: '/usercenter/open/captcha',
    responseType: 'arraybuffer',
    method: 'get'
  })
}

// 登录接口
const login = (params) => {
  return request({
    url: '/usercenter/open/phoneLogin/oa',
    method: 'POST',
    data: params
  })
}

export { getVerifyCode, login }
