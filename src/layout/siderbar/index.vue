<template>
  <a-menu
    theme="dark menu-style"
    mode="inline"
    v-model:selectedKeys="selectedKeys"
    :inline-collapsed="collapsed"
  >
    <a-menu-item
      v-for="item in menuList"
      :key="item.name"
      @click="clickMenuItem(item)"
    >
      <!--  <a-icon style="font-size: 24px" :type="items.meta.icon" />-->
      <HomeOutlined />
      <span>{{ item.name }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'
// import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { HomeOutlined } from '@ant-design/icons-vue'
import { constantRoutes } from '@/router'

export default {
  components: {
    HomeOutlined
  },

  props: {
    collapsed: {
      type: Boolean
    }
  },

  setup() {
    // const store = useStore()
    const router = useRouter()
    // const menus = computed(() => store.getters.menus)
    const state = reactive({
      selectedKeys: ['Home'],
      menuList: constantRoutes
    })

    // const selectedKeys = ref(['Demo'])
    // 使用watch监控当前 router 的变化
    watch(
      () => router.name,
      (k) => {
        console.log('router------yyyy3', k)
      }
    )

    // 点击菜单跳转
    const clickMenuItem = (key) => {
      console.log('--5--', key)
      //   router.push({ name: key.name });
      //   router.addRoute({
      //     path: '/403',
      //     name: '403',
      //     component: () => import('@/views/error/403.vue'),
      //     hidden: true,
      //   });
      router.push({ name: '403' })

      //   if (router.hasRoute(key)) {
      //     router.push({ name: key })
      //   } else {
      //     router.push({ name: 'Error403' })
      //   }
    }

    return {
      ...toRefs(state),
      clickMenuItem
    }
  }
}
</script>
<style lang="less" scoped>
.icon {
  font-size: 24px;
}

.menu-style {
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
