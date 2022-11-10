<template>
  <a-layout class="app-wapper">
    <a-layout-header class="app-header">
      <app-header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <app-siderbar :collapsed="collapsed" />
      </a-layout-sider>
      <a-layout-content class="layout-content">
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <component
              v-if="route.meta.keepAlive"
              :is="Component"
              :key="route.path"
            />
            <keep-alive v-else>
              <component :is="Component" :key="route.path" />
            </keep-alive>
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import AppHeader from './header/index.vue'
import AppSiderbar from './siderbar/index.vue'
import { ref, onMounted } from 'vue'
export default {
  components: {
    AppHeader,
    AppSiderbar
  },
  setup() {
    const collapsed = ref(false)
    onMounted(() => {
      console.log('这是 layout')
    })
    return {
      collapsed
    }
  }
}
</script>
<style lang="less" scoped>
.ant-layout-header {
  height: 64px;
  padding: 0 30px !important;
  color: rgba(0, 0, 0, 0.65);
  line-height: 64px;
  background: white;
}
.app-wapper {
  display: flex;
  overflow: hidden;
  height: 100vh;
  .layout-content {
    max-height: calc(100vh - 64px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
