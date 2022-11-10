<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN'
import { ref } from 'vue'
export default {
  comments: {},
  setup() {
    const locale = ref(zhCN)
    return {
      locale
    }
  }
}
</script>
