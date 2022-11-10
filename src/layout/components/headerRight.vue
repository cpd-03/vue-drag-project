<template>
  <div class="right">
    <div class="right-item">
      <a-select
        v-model:value="searchValue"
        show-search
        v-show="show"
        class="search"
        placeholder="搜索功能、视频教程、常见问题、帮助文档"
        :showArrow="false"
        option-label-prop="label"
        @search="handleSearch"
      >
        <a-select-option
          :value="v.name"
          :label="v.name"
          v-for="v in enterpriseList"
          :key="v.name"
        >
          {{ v.name }}
        </a-select-option>
      </a-select>
      <SearchOutlined @click="showSearch()" />
      <MessageOutlined />
    </div>
    <div class="user-avatar">
      <img :src="enterpriseLogo" alt="" />
    </div>
    <!-- :visible="true" -->
    <a-dropdown placement="bottomCenter">
      <span class="ant-dropdown-link enterprise">
        <div class="enterprise-name">欢迎您，{{ enterpriseName }}</div>
      </span>
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="v in enterpriseList" :key="v.name">
            <span>{{ v.name }}</span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import {
  reactive,
  ref,
  toRefs
} from 'vue'
import {
  SearchOutlined,
  MessageOutlined
} from '@ant-design/icons-vue'
// import { useStore } from 'vuex'
import { antiShake } from '@/utils/entity'
export default {
  components: {
    // CaretDownOutlined,
    // RightOutlined,
    SearchOutlined,
    MessageOutlined
  },
  setup() {
    // vuex
    // const store = useStore()
    let show = ref(false)
    // 企业配套权限
    const enterpriseList = reactive([
      { name: '企业信息', path: '' },
      { name: '企业认证', path: '' },
      { name: '权限管理', path: '' },
      { name: '企业切换', path: '' }
    ])
    const getPopupContainer = (triggerNode) => {
      return triggerNode.parentNode || document.body
    }
    let searchValue = ref(null)
    const showSearch = () => {
      console.log(show.value)
      show.value = !show.value
    }
    // 企业信息
    const state = reactive({
      //   avatar: store.getters.avatar,
      enterpriseLogo: 'https://test.libawall.com/img/logo.7b68b222.svg',
      peopleCounting: '20人以下',
      enterpriseAddress: '杭州市滨江区',
      enterpriseName: '王雄'
    })
    // 帮助搜索
    const handleSearch = (value) => {
      antiShake(() => {
        console.log(value, '222222222222')
      }, 500)
    }
    return {
      ...toRefs(state),
      getPopupContainer,
      showSearch,
      handleSearch,
      searchValue,
      enterpriseList,
      show
    }
  }
}
</script>
<style lang="less" scoped>
.right {
  width: 800px;
  height: 64px;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  overflow: hidden;
  cursor: pointer;
  .right-item {
    height: 64px;
    line-height: 64px;
    .search {
      width: 250px;
      height: 25px;
      border-radius: 10px;
      margin-right: 10px;
    }
    .anticon {
      font-size: 24px;
      margin-right: 10px;
    }
  }

  .user-avatar {
    margin-right: 10px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #aaaaaa;
    }
  }
}
:deep(.ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector) {
  border-radius: 20px;
}
</style>
