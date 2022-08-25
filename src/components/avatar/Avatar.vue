<template>
  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" @click="toAssignUrl('liteblog/user')"></el-avatar>
</template>

<script lang="ts">
import {inject} from "vue";
export default {
  name: "Avatar",
  setup() {

    const toAssignUrl: any = inject("toAssignUrl")
    return {
      toAssignUrl
    }
  }
}
</script>

<style scoped>

</style>
