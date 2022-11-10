import { request } from '@/utils/request'

// 获取动态菜单
const getMenuList = (params) => {
  return request({
    url: '/usercenter/admin/user/getUserMenu',
    method: 'get',
    params: params
  })
}

export { getMenuList }
