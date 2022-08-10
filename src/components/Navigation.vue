<template>
  <el-menu
      :default-active="homepageActiveIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="switchFunction">
    <el-menu-item v-for="item in navigation" v-text="item.name" :index="item.index"></el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import {ref, reactive, computed} from "vue";
import {routerKey} from "vue-router";

export default {
  name: "Navigation",
  setup() {
    const navigation = ref([
      {index: '1', name: '首页', url: 'homepage'},
      {index: '2', name: '沸点', url: 'hotspot'},
      {index: '3', name: '课程', url: 'hotspot'},
      {index: '4', name: '直播', url: 'hotspot'},
      {index: '5', name: '活动', url: 'hotspot'},
      {index: '6', name: '插件', url: 'hotspot'},
    ])

    const router : any = routerKey.description.sup()
    const homepageActiveIndex = ref('1')
    const switchFunction = (key: string, keyPath: string) => {

      console.log(key, keyPath)
    }


    return {
      navigation,
      homepageActiveIndex,
      switchFunction
    }
  },
}
</script>

<style scoped>

</style>
