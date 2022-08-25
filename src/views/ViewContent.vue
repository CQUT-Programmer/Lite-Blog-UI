<template>
  <el-container>
    <el-header class="main-header-box">
      <navigation/>
    </el-header>

    <el-main class="container">
      <!--TODO:子路由配置优化-->
      <router-view/>
    </el-main>

    <el-footer>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import navigation from "@/components/Navigation.vue"
import {onMounted} from "vue";
import {setStorage} from "@/tools/storage";
import {StorageType} from "@/tools/constants";

export default {
  name: "ViewContent",
  components: {
    navigation
  },
  setup() {

    onMounted(() => {
      setStorage("2243771889",'user_id', StorageType.SESSION)
    })
    return {
    }
  }
}
</script>

<style scoped>

.main-header-box {
  width: 100%;
  background-color: white;
  height: 66px;
  position: fixed;
  z-index: 100;
  border-bottom: 1px #dcdfe6 solid;
}

.container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  text-align: center;
  text-align: -webkit-center;
  margin: 4rem auto 0 auto;
}
</style>
