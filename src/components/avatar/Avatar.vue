<template>
  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
             @click="toAssignUrl('liteblog/user/' + getStorage('user_id', StorageType.SESSION))"
             class="avatar"></el-avatar>
</template>

<script lang="ts">
import {inject} from "vue";
import {getStorage} from "@/utils/storage";
import {StorageType} from "@/constant/settings";
import useUserStore from "@/store/modules/user"
import {storeToRefs} from "pinia";

export default {
  name: "Avatar",
  setup() {

    //TODO 将当前登录的数据通过仓库存储进行展示
    const userInfoStore = useUserStore
    const userInfo = storeToRefs(userInfoStore)
    const toAssignUrl: any = inject("toAssignUrl")
    return {
      toAssignUrl,
      getStorage,
      StorageType,
      userInfo
    }
  }
}
</script>

<style scoped>
.avatar {
  margin-right: 5px;
}
</style>
