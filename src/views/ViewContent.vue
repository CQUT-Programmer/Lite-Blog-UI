<template>

    <el-container class="view-content" :style="{'min-height' : clientHeight}">
      <el-header class="main-header-box ">
        <navigation/>
      </el-header>

      <el-main class="container">
        <!--TODO:子路由配置优化-->
        <el-backtop :right="22" :bottom="70"/>

        <router-view/>
        <el-affix position="bottom" :offset="20" id="el-affix">
          <el-button circle>
            <img :src="require('@/assets/image/message.png')" alt="反馈">
          </el-button>
        </el-affix>
      </el-main>
    </el-container>


</template>

<script lang="ts">
import navigation from "@/components/views/Navigation.vue"
import {onMounted} from "vue";
import {setStorage} from "@/tools/storage";
import {StorageType} from "@/tools/constants";
import {useStore} from "@/store";
import {storeToRefs} from "pinia";
export default {
  name: "ViewContent",
  components: {
    navigation
  },
  setup() {
    const store = useStore()
    const {clientHeight} = storeToRefs(store)
    onMounted(() => {
      setStorage("2243771889", 'user_id', StorageType.SESSION)
    })
    return {
     clientHeight
    }
  }
}
</script>

<style scoped lang="scss">


.view-content {
  overflow: auto;
}

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
  height: 100%;
  text-align: center;
  text-align: -webkit-center;
  margin: 4rem auto 0 auto;
  padding-bottom: 0 !important;
}

#el-affix {
  text-align: right;

  button {
    height: 42px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  }

  img {
    width: 24px;
    border-radius: 100%;
  }
}
</style>
