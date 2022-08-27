<template>
  <div class="flex align-center sub-all-head">
      <a>最新</a>
      <a>最热</a>
      <div>
        <el-input placeholder="搜索标签"/>
      </div>
  </div>
  <div class="subscribed">
    <subscribe :img-url="require('@/assets/image/JavaScript.png')" :type="'javaScript'"></subscribe>
    <subscribe :img-url="require('@/assets/image/github.png')" :type="'github'"></subscribe>
    <subscribe :img-url="require('@/assets/image/java.png')" :type="'java'"></subscribe>
    <subscribe :img-url="require('@/assets/image/JavaScript.png')" :type="'javaScript'"></subscribe>
    <subscribe :img-url="require('@/assets/image/mysql.png')" :type="'mysql'"></subscribe>
  </div>
</template>

<script lang="ts">

import subscribe from '@/components/subscribe/index.vue'

export default {
  name: "index",
  components: {
    subscribe
  },
  setup() {
    return {
      subscribe,
    }
  }
}
</script>

<style scoped lang="scss">
.sub-all-head {
  &>* {
    margin: 10px 0 30px 22px;
  }
}

.subscribed {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
