<template>
  <div>
    <h1>{{ str }}</h1>
    <p>test reset.css</p>
    <p>test reset.css</p>
    <a-card title="vue3-admin系统更新信息" class="version-info">
      <a-list
        :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
        :data-source="data"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card :title="item.title">{{ item.content }}</a-card>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const data = [
  {
    title: 'Vue',
    content: '3.0.0'
  },
  {
    title: 'vue-router',
    content: '4.0.1'
  },
  {
    title: '@vue/cli',
    content: '4.5.0'
  },
  {
    title: 'vuex',
    content: '4.0.0-rc.2'
  },
  {
    title: 'ant-design-vue',
    content: '2.0.0-rc.3'
  },
  {
    title: 'axios',
    content: '0.21.1'
  }
]

export default {
  setup() {
    const str = ref('ddddddd-3')
    onMounted(() => {
      const route = useRoute()
      console.log(route)
    })
    return {
      str,
      data
    }
  }
}
</script>
<style lang="less" scoped>
.version-info {
  margin-top: 20px;
}

h1 {
  color: @primary-color;
}
</style>
