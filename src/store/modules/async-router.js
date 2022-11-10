const asyncRouter = {

  namespaced: true,
  state: {
    routes: [],
    addRoutes: []
  },

  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      // state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRoutes = []
        if (roles.includes('admin')) {
          // accessedRoutes = asyncRoutes
        } else {
          // accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        commit('SET_ROUTES', accessedRoutes)

        resolve(accessedRoutes)
      })
    }
  }

}

export default asyncRouter
