import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'Home',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/account.vue'),
    hidden: true
  },
  //   {
  //     path: '/403',
  //     name: '403',
  //     component: () => import('@/views/error/403.vue'),
  //     hidden: true,
  //   },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    hidden: true
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router
