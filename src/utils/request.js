import axios, { CancelToken } from 'axios'
import store from '@/store'
import { inform } from './information'
import { Modal } from 'ant-design-vue'
import { generatorRequestKey } from './index'

// 创建 axios 实例
// 获取token
const token = localStorage.getItem('token')
// 正式环境地址
// const dingPcRealm = 'https://hr.libawall.com'

// 本地联调（vue.config.js设置代理）
// const publicUrl = '/lbw'

// const publicUrl = dingRequstUrl

// 测试打包环境
const publicUrl = process.env.VUE_APP_URL

// 请求队列
const queue = new Map()

const service = axios.create({
  baseURL: publicUrl,
  timeout: 60000 // 请求超时时间
  // withCredentials: true
})

service.defaults.withCredentials = true

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    // console.log("------异常响应------",error.response.status)
    switch (error.response.status) {
      case 2000 || 2001:
        Modal.error({
          title: '无权限',
          content: '无权操作，若当前账号已授权请退出重新登录',
          okText: '重新登录',
          mask: false,
          onOk: () => {
            store.dispatch('Logout').then(() => {
              window.location.reload()
            })
          }
        })
        break
      case 403:
        inform('error', '拒绝访问', '系统提示')
        break
      case 500:
        inform('error', data.message, '系统提示')
        if (
          token &&
          data.message === 'Token失效，请重新登录' &&
          data.message === '未登录'
        ) {
          // update-begin- --- author:scott ------ date:20190225 ---- for:Token失效采用弹框模式，不直接跳转----
          // store.dispatch('Logout').then(() => {
          //     window.location.reload()
          // })
          Modal.error({
            title: '登录已失效',
            content: '很抱歉，登录已失效，请重新登录',
            okText: '重新登录',
            mask: false,
            onOk: () => {
              store.dispatch('Logout').then(() => {
                window.location.reload()
              })
            }
          })
          // update-end- --- author:scott ------ date:20190225 ---- for:Token失效采用弹框模式，不直接跳转----
        }
        break
      case 404:
        inform('error', '很抱歉，资源未找到', '系统提示')
        break
      case 504:
        inform('error', '网络超时', '系统提示')
        break
      case 401:
        inform('error', '无权操作，若当前账号已授权请退出重新登录', '系统提示')
        if (token) {
          store.dispatch('Logout').then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 1500)
          })
        }
        break
      default:
        inform('error', data.message, '系统提示')
        break
    }
  }
  return Promise.reject(error)
}

service.interceptors.request.use(
  (config) => {
    // 请求拦截器
    console.log(config, 'config')

    // 生成请求 key
    const requestKey = generatorRequestKey(config)

    // 每个请求携带自定义 token
    if (token) {
      config.headers['X-Access-Token'] = token
      config.headers.Authorization = token
    }
    if (config.method === 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }

    // 判断请求队列中是否存在相同请求，存在则取消
    queue.has(requestKey) && queue.get(requestKey).cancel()
    // 生成 cancelToken
    config.cancelToken = new CancelToken((cancel) => {
      queue.set(requestKey, cancel)
    })

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use((response) => {
  // 返回拦截器
  // alert(JSON.stringify(response))
  if (response.data.success === false) {
    if (response.data.code === 202) {
      // console.log('comein')
      // store.dispatch('Logout').then(() => {
      //     window.location.reload()
      // })
      store.commit('SET_TOKEN', '')
      // window.location.reload();
    } else {
      inform('error', response.data.message)
    }
    return response.data
  }
  // 生成请求 key
  const requestKey = generatorRequestKey(response.config)

  // 请求成功，从队列中移除
  queue.delete(requestKey)

  return response.data
}, err)

export { service as request }
