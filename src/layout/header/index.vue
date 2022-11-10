<!--  -->
<template>
  <div class="page-header">
    <!-- 左侧logo+企业信息 -->
    <header-left></header-left>
    <!-- 中间content -->
    <div class="header-content">
      <div
        class="header-item"
        :class="headerActive == i ? 'header-itemActive' : ''"
        v-for="(v, i) in headerList"
        :key="i"
        @click="goPath(i)"
      >
        {{ v.name }}
      </div>
    </div>
    <!-- 右侧 客服+操作+搜索 -->
    <header-right></header-right>
  </div>
</template>

<script>
// import { DownOutlined } from '@ant-design/icons-vue'
import { reactive, ref } from 'vue'
// import { useStore } from 'vuex'
// import { useRouter, useRoute } from 'vue-router'
import HeaderLeft from '../components/headerLeft'
import HeaderRight from '../components/headerRight'
export default {
  components: {
    // DownOutlined,
    HeaderLeft,
    HeaderRight
  },
  setup() {
    // const store = useStore()
    // const router = useRouter()
    // const route = useRoute()

    // 判断显示tab
    let headerActive = ref(0)

    // 头部路由列表
    const headerList = reactive([
      { name: '首页', path: '0' },
      { name: '人事管理', path: '1' },
      { name: '考勤管理', path: '2' },
      { name: '招聘管理', path: '3' },
      { name: '档案管理', path: '4' },
      { name: '学习提升', path: '5' }
    ])

    // 跳转路由
    const goPath = (i) => {
      headerActive.value = i
    }
    return {
      headerList,
      headerActive,
      goPath
    }
  }
}
</script>
<style lang="less" scoped>
.page-header {
  display: flex;
  align-items: center;
  width: 100%;
  background: white;

  .ant-dropdown-link {
    display: block;
    min-height: 64px;
    cursor: pointer;
    overflow: hidden;
  }
  .header-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 20px;

    .header-item {
      width: 64px;
      margin-right: 40px;
      text-align: center;
    }
    .header-itemActive::after {
      display: block;
      content: '';
      position: absolute;
      width: 64px;
      height: 4px;
      top: 60px;
      background: @primary-color;
    }
  }
}
</style>
