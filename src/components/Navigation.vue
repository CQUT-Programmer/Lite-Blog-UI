<template>
  <div class="main-header">
    <div>
      <div class="align-center">
        <img src="../assets/image/blogLogo.png" alt="博客暂用logo" id="blogLogo">
      </div>
      <div class="align-center">
        <h4 style="margin: 0; width: 70%;">Vegetable Programmer</h4>
      </div>
    </div>

    <div class="align-center space-between main-nav">
      <el-menu
          :default-active="homepageActiveIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="switchFunction">
        <el-menu-item v-for="item in navigation" v-text="item.name" :index="item.index" style="height: 70px"></el-menu-item>
      </el-menu>
      <div class="space-around align-center" style="width: 60%">
        <el-input
            v-model="searchInput"
            style="width: 45%"
            class="w-50 m-2"
            placeholder="搜索 vegetable Programmer Blob"
            :suffix-icon="Search"/>
        <div>
          <el-button type="primary" id="createCenter"> 创作者中心</el-button>
          <el-button type="primary" id="more">
            <el-icon  style="color: #f6f6f6">
              <CaretTop/>
            </el-icon>
          </el-button>
        </div>
        <div>
<!--          <img src="../assets/numberIcon.png" alt="会员">-->
          <span> 会员 </span>
        </div>

        <el-badge :value="200" :max="99" id="infoBadge">
          <Bell class="icon-with"></Bell>
        </el-badge>
        <avatar></avatar>
      </div>

    </div>

  </div>


</template>

<script lang="ts">
import {ref} from "vue";
import Avatar from '../components/Avatar.vue'
import {useRouter} from "vue-router";
import {Search, ArrowDown, CaretTop, Bell} from "@element-plus/icons";


export default {
  name: "Navigation",
  components: {
    Avatar
  },
  setup() {

    const router = useRouter()
    //功能导航
    const navigation = ref([
      {index: '1', name: '首页', url: 'homepage'},
      {index: '2', name: '沸点', url: 'hotspot'},
      {index: '3', name: '课程', url: 'hotspot'},
      {index: '4', name: '直播', url: 'hotspot'},
      {index: '5', name: '活动', url: 'hotspot'},
      {index: '6', name: '插件', url: 'hotspot'},
    ])

    const homepageActiveIndex = ref('1')
    //路由跳转
    const switchFunction = (key: number) => {
      router.push({
        path: '/' + navigation.value[key].url
      })
    }

    const searchInput = ref('')

    return {
      navigation,
      homepageActiveIndex,
      switchFunction,
      Search,
      searchInput,
      ArrowDown,
      CaretTop,
      Bell
    }
  },
}
</script>

<style scoped>

.main-header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  z-index: 250;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: all .2s;
  margin: auto;
  max-width: 1440px;
  height: 66px;
}

.main-header div {
  display: flex;
}

.main-header.visible {
  /*transform: translateZ(0);*/
  transform: translate3d(0, -100%, 0);
}

.main-nav {
  width: 90%;
}

.el-menu--horizontal {
  border-bottom: none;

}

#blogLogo {
  width: 45px;
  height: 45px;
}

#infoBadge {
  width: 8%;
}
/deep/ .el-badge__content.is-fixed {
  position: inherit;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(-30%);
}

.icon-with {
  width: 100%;
}
#createCenter {
  border-bottom-right-radius: unset;
  border-top-right-radius: unset;
}

#more {
  margin: 0;
  border-left: white .1px solid;
  border-bottom-left-radius: unset;
  border-top-left-radius: unset;
  padding: 4px;
}

</style>
