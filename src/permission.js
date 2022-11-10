import router from '@/router'
import store from '@/store'

// 配置动态路由
router.addRoute({
  path: '/403',
  name: '403',
  // component: () => import('@/views/error/403.vue'),
  hidden: true
})

console.log('动态路由配置----xxxxx')

// let registerRouteFresh = true
// router.beforeEach(async (to, from, next) => {
//   const res = JSON.parse(
//     JSON.stringify(await store.dispatch('user/getMenuList'))
//   );
//   let arr = [];
//   res.result.filter((value, index) => {
//     let child = [];
//     if (value.children && value.children.length) {
//       value.children.filter((val, i) => {
//         child.push({
//           name: val.routeName,
//           path: val.path,
//           component: () => import(`@/${val.component}`),
//         });
//       });
//     }
//     arr.push({
//       name: value.routeName,
//       redirect: value.redirect,
//       path: value.path,
//       component: () => import(`@/${value.component}`),
//       children: child,
//     });
//   });
//   // 如果首次或者刷新界面，next(...to, replace: true)会循环遍历路由，如果to找不到对应的路由那么他会再执行一次beforeEach((to, from, next))直到找到对应的路由，我们的问题在于页面刷新以后异步获取数据，直接执行next()感觉路由添加了但是在next()之后执行的，所以我们没法导航到相应的界面。这里使用变量registerRouteFresh变量做记录，直到找到相应的路由以后，把值设置为false然后走else执行next(),整个流程就走完了，路由也就添加完了。
//   if (registerRouteFresh) {
//     arr.forEach((value, index) => {
//       router.addRoute(value);
//     });
//     next({ ...to, replace: true });
//     registerRouteFresh = false;
//   } else {
//     next();
//   }
// });

// 路由前置
router.beforeEach((to, from, next) => {
  // function _import(file) {
  //   return () => import('@/views/' + file + '.vue')
  // }
  const res = JSON.parse(JSON.stringify(store.dispatch('user/getMenuList')))

  if (res.length) {
    for (const key in res) {
      router.addRoute(res[key])
    }
  }
  //   console.log(res, 'user/getMenuList');
  console.log('beforeEach ENTER', from.path, '=>', to.path, to)

  //   const token = localStorage.getItem('token');
  //   const hasRoles = store.getters.roles && store.getters.roles.length > 0;
  //   if (!token) {
  //     next(to.path);
  //   } else {
  //     next('/login');
  //   }

  //   router.addRoute({
  //     path: '/403',
  //     name: '403',
  //     component: () => import('@/views/error/403.vue'),
  //     hidden: true,
  //   });

  //   router.addRoute({
  //     path: '/:pathMatch(.*)',
  //     redirect: '/404',
  //   });

  // 判断是否为正确的路由
  const list = ['/403-']
  const isCorrectRouter = list.includes(to.path)
  console.log('beforeEach router -- exit', isCorrectRouter)
  if (isCorrectRouter) {
    // router.replace({ path: '/403' });
    setTimeout(() => {
      router.push({
        path: '/403'
      })
      //   router.replace(toPath)
    }, 300)
  } else {
    // next();
  }

  console.log('beforeEach name', to)

  next()

  console.log('beforeEach router', router.getRoutes())

  //   next();
})

// 路由后置
router.afterEach(() => {
  console.log('afterEach router')
})
