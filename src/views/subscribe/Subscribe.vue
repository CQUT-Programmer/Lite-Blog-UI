<template>
    <div class="sub-head">
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
      >
        <el-menu-item index="1"> 已关注标签</el-menu-item>
        <el-menu-item index="2"> 全部标签</el-menu-item>
      </el-menu>
    </div>

    <div id="sub-content">
      <router-view />
    </div>


</template>

<script lang="ts">
import {inject, reactive, ref} from "vue";

export default {
  name: "Subscribe",
  components: {},
  setup() {
    const activeIndex = ref('1')

    const toAssignUrl: any = inject("toAssignUrl")
    const navChange = reactive({
      nav: [
        {
          index: '1',
          url: 'liteblog/subscribe/subscribed'
        },
        {
          index: '2',
          url: 'liteblog/subscribe/all',
        },

      ]
    })
    const handleSelect = (key: string) => {
      activeIndex.value = key
      toAssignUrl(navChange.nav[Number.parseInt(key) - 1].url)

    }
    return {
      handleSelect,
      activeIndex
    }
  }
}
</script>

<style scoped lang="scss">
.sub-head {
  position: fixed;
  top: 4.1rem;
  width: 100%;
  z-index: 10;
  transition: all .2s;
  transform: translateZ(0);
  display: flex;
  justify-content: center;
  left: 0;
  background-color: #fff;
  text-align: center;

}
.el-menu-demo {
  font-size: 18px;
  width: 50%;
}

#sub-content {
  margin-top: 3.5rem;
  width: 70%;
}
</style>
