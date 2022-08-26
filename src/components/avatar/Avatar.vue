<template>
  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" @click="toAssignUrl('liteblog/user/' + getStorage('user_id', StorageType.SESSION))"></el-avatar>
</template>

<script lang="ts">
import {inject} from "vue";
import {getStorage} from "@/tools/storage";
import {StorageType} from "@/tools/constants";
export default {
  name: "Avatar",
  setup() {

    const toAssignUrl: any = inject("toAssignUrl")
    return {
      toAssignUrl,
      getStorage,
      StorageType
    }
  }
}
</script>

<style scoped>

</style>
