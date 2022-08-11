<template>
  <div class="content">
    <el-container>
      <el-header class="main-header-box">
        <navigation/>
      </el-header>
      <el-main>Main</el-main>
      <el-aside>Side</el-aside>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import navigation from '../components/Navigation.vue'
import {ref, reactive, inject} from "vue";

export default {
  name: "HomeView",
  components: {
    navigation
  },
  setup() {

    const reload = inject('viewReload')

    return {}
  },
}
</script>

<style scoped>

.main-header-box {
  width: 100%;
  background-color: white;
}
#blogLogo {
  width: 5%;
  height: 5%;
}

.flex-center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
