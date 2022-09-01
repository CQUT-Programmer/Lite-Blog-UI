<template>

  <el-container class="view-content" :style="{'min-height' : clientHeight+ 'px'}">
    <el-header class="main-header-box " :class="isHeader ? 'header-show ' : 'header-hide'">
      <navigation :class="isHeader ? 'header-show ' : 'header-hide'"/>
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
import {computed, onMounted, ref} from "vue";
import {setStorage} from "@/utils/storage";
import {StorageType} from "@/utils/constants";
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
    const isHeader = ref(true)
    onMounted(() => {
      setStorage("2243771889", 'user_id', StorageType.SESSION)

      window.addEventListener('scroll', windowScroll, true)
    })

    const windowScroll = () => {
      const scrollY = window.scrollY
      isHeader.value = scrollY < 400;
    }
    return {
      clientHeight,
      isHeader
    }
  }
}
</script>

<style scoped lang="scss">

.header-show {
  max-height: 100px;  // 尽可能大 不过满足最大高度即可
  transition: all 0.5s ease-in;
}

// 默认hide
.header-hide {
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-out;
}

.view-content {
  overflow: auto;
}

.main-header-box {
  width: 100%;
  display: flex;
  height: 66px;
  background-color: white;
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
