// import store from '@/store'

function checkPermission(el, binding) {
  //   console.log('checkPermission', el, binding);
  const { value } = binding

  // const roles = store.getters && store.getters.roles
  const roles = ['admin', 'editor']

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value
      //   console.log('permissionRoles', permissionRoles)

      const hasPermission = roles.some((role) => {
        // console.log('hasPermission', permissionRoles.includes(role))

        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`需要roles!！例如v-permission="['admin','editor']"`)
  }
}

export default {
  mounted(el, binding) {
    checkPermission(el, binding)
  },
  updated(el, binding) {
    checkPermission(el, binding)
  }
}
