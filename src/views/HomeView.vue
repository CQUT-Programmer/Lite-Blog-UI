<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-aside>Side</el-aside>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import navigation from '../components/Navigation.vue'
import {ref, onMounted, reactive, inject} from "vue";

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

</style>
