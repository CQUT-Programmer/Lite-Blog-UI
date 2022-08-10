<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="flex-center">
          <img src="../assets/blogLogo.png" alt="博客暂用logo" id="blogLogo">
          <h4>Vegetable Programmer</h4>
          <navigation/>
        </div>
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

    return {

    }
  },
}
</script>

<style scoped>

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
