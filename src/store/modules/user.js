// import { login } from '@/api/login'
import { getMenuList } from '@/api/public'
import router from '@/router'
// import { inform } from '@/utils/information'

const user = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token'),
    avatar: '',
    username: '',
    roles: [],
    menus: []
  },
  getters: {
    menus: (state) => state.menus
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles || []
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
    }
  },

  actions: {
    /* 登录逻辑 */
    // loginResult({ commit, dispatch }, userInfo) {
    //   login(userInfo).then((res) => {
    //     console.log('---loginResult---', res)
    //     localStorage.setItem('token', res.result.token)
    //     //   获取动态路由
    //     dispatch('getMenuList')
    //     //   登录成功
    //     inform('success', '登录成功！')
    //   })
    // },

    /* 获取用户信息 */
    // getInfo({ commit }, token) {
    //   return new Promise((resolve, reject) => {
    //     UserInfo(token)
    //       .then((res) => {
    //         const { code, data } = res.data

    //         if (code === 200) {
    //           commit('SET_AVATAR', data.avatar)
    //           commit('SET_USERNAME', data.username)
    //           commit('SET_ROLES', data.roles)
    //           commit('SET_MENUS', data.menus)
    //           resolve(res.data)
    //         }
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       })
    //   })
    // },

    /* 用户登出 */
    LogoutResult({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_AVATAR', '')
      commit('SET_USERNAME', '')
      commit('SET_ROLES', '')
      commit('SET_MENUS', '')
      const Routes = router.getRoutes()

      console.log('用户登出', Routes)

      /* 清除动态路由 */
      //   if (asyncRoutes && asyncRoutes.length) {
      //     asyncRoutes.forEach((item) => {
      //       router.removeRoute(item.name);
      //     });
      //   }

      localStorage.clear()

      router.push('/login')
    },
    // 获取左侧导航权限
    getMenuList({ commit }) {
      return new Promise((resolve, reject) => {
        getMenuList()
          .then((res) => {
            const menuData = res.result || []
            console.log('menuData', menuData, window.location.href)
            commit('SET_MENUS', menuData)
            // //   动态创建路由
            // const list = [
            //   {
            //     path: '/403',
            //     name: '403',
            //     component: () => import('@/views/error/403.vue'),
            //     hidden: true,
            //   },
            //   {
            //     path: '/404',
            //     name: '404',
            //     component: () => import('@/views/error/404.vue'),
            //     hidden: true,
            //   },
            // ];
            // // list.forEach((item) => {
            // //   router.addRoute(item);
            // // //   router.replace(router.currentRoute.value.fullPath);
            // // });
            // function _import(file) {
            //   return () => import('@/views/' + file + '.vue');
            // }
            // router.addRoute({
            //   path: '/403',
            //   name: '403',
            //   component: () => import('@/views/error/403.vue'),
            //   hidden: true,
            // });

            // // router.addRoute({
            // //   path: '/404',
            // //   name: '404',
            // //   component: () => import('@/views/error/404.vue'),
            // //   hidden: true,
            // // });

            // // 路由跳转
            // let toPath = '/';
            // if (window.location.href.includes('redirect')) {
            //   toPath = window.location.href.split('redirect=')[1];
            // }
            // console.log('路由跳转', toPath, router);

            // setTimeout(() => {
            //   router.push({
            //     path: '/403',
            //   });
            //   //   router.replace(toPath)
            // }, 300);
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
}

export default user
