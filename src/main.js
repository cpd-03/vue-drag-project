import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import permission from '@/directive/permission/index.js' // 权限按钮

import Antd from 'ant-design-vue/es' //  "/es" es6 版本 用于覆盖之前按需加载导致全部加载无法识别

// 公共样式
import './assets/less/global.less'
// 重置样式
import './assets/less/reset.less'

const app = createApp(App)
app.directive('permission', permission)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')
