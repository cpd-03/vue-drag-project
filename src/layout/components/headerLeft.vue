<template>
  <div class="left">
    <div class="logo">
      <img :src="enterpriseLogo" alt="" />
    </div>
    <!-- :visible="true" -->
    <a-dropdown placement="bottomCenter">
      <span class="ant-dropdown-link enterprise">
        <div class="enterprise-name">{{ enterpriseName }}</div>
        <CaretDownOutlined />
      </span>
      <!--  收纳部分template  -->
      <template #overlay>
        <a-menu>
          <div class="enterprise-info">
            <div class="enterprise-logo">
              <img :src="enterpriseLogo" alt="" />
            </div>
            <div class="enterprise-details">
              <div>{{ enterpriseName }}</div>
              <div>{{ peopleCounting }}</div>
              <div>{{ enterpriseAddress }}</div>
            </div>
          </div>
          <a-menu-item v-for="v in enterpriseList" class="enterpriseList" :key="v.name">
            <span>{{ v.name }}</span>
            <RightOutlined v-if="v.icon" />
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import {
  reactive,
  toRefs
} from 'vue'
import { CaretDownOutlined, RightOutlined } from '@ant-design/icons-vue'
// import { useStore } from 'vuex'
export default {
  components: {
    CaretDownOutlined,
    RightOutlined
  },
  setup() {
    // vuex
    // const store = useStore()

    // 企业配套权限
    const enterpriseList = reactive([
      { name: '企业信息', path: '', icon: true },
      { name: '企业认证', path: '', icon: true },
      { name: '权限管理', path: '', icon: false },
      { name: '企业切换', path: '', icon: false }
    ])

    // 企业信息
    const state = reactive({
      //   avatar: store.getters.avatar,
      enterpriseLogo: 'https://test.libawall.com/img/logo.7b68b222.svg',
      peopleCounting: '20人以下',
      enterpriseAddress: '杭州市滨江区',
      enterpriseName: '会好的科技股份有限会好的科技股份有限会好的科技股份有限'
    })

    return {
      ...toRefs(state),
      enterpriseList
    }
  }
}
</script>
<style lang="less" scoped>
.left {
  width: 300px;
  display: flex;
  align-content: center;
  .logo {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-content: center;
    img {
      width: 100%;
    }
  }
  .enterprise {
    display: flex;
    align-items: center;
    .enterprise-name {
      width: 100px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-right: 10px;
      line-height: 20px;
    }
  }
}
.enterprise-info {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 12px;
  box-sizing: border-box;
  .enterprise-logo {
    width: 64px;
    height: 64px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .enterprise-details {
    width: 110px;
    div {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
:deep(.ant-dropdown-menu-title-content) {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
