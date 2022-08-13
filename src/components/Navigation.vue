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
        <el-menu-item v-for="item in navigation" v-text="item.name" :index="item.index"
                      style="height: 70px"></el-menu-item>
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
          <el-button type="primary" id="more" @click="buttonMoreIsClicked = !buttonMoreIsClicked">
            <el-icon style="color: #f6f6f6">
              <CaretBottom v-if="!buttonMoreIsClicked"></CaretBottom>
              <CaretTop v-else></CaretTop>
            </el-icon>
          </el-button>
          <ul class="more-list" v-show="buttonMoreIsClicked">
            <li class="item" @click="toAssignUrl('blogEditor')">
              <span>写文章</span>
            </li>
            <li class="item" @click="toAssignUrl('blogEditor')">
              <span>发沸点</span>
            </li>
            <li class="item" @click="toAssignUrl('blogEditor')">
              <span>写代码</span>
            </li>
          </ul>
        </div>
        <div>
          <img src="../assets/image/numberIcon.png" alt="会员" id="memberIcon">
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
import {ref, getCurrentInstance, onMounted, inject} from "vue";
import Avatar from '../components/Avatar.vue'
import {useRouter} from "vue-router";
import {Search, CaretBottom, CaretTop, Bell} from "@element-plus/icons";

export default {
  name: "Navigation",
  components: {
    Avatar
  },
  setup() {

    const proxy = getCurrentInstance()
    const toAssignUrl:any = inject('toAssignUrl')
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
      toAssignUrl(navigation.value[key].url)
      }


    const searchInput = ref('')
    const buttonMoreIsClicked = ref(false)

    return {
      CaretBottom,
      CaretTop,
      Bell,
      Search,
      navigation,
      homepageActiveIndex,
      switchFunction,
      searchInput,
      buttonMoreIsClicked,
      toAssignUrl
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
  width: 6%;
}

#memberIcon {
  width: 22px;
  height: 22px;
  padding-right: 5px;
}

/deep/ .el-badge__content.is-fixed {
  top: 0;
  right: 0;
  transform: translateY(-50%);
}

.icon-with {
  width: 60%;
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

.more-list {
  position: absolute;
  top: 70%;
  padding: .417rem 0;
  background-color: #fff;
  display: block;
  z-index: 1;
  border-radius: 6px;
  width: 8rem;
}

.item {
  margin: 0 8px;
  padding: 2px;
  border-radius: 4px;
  line-height: 24px;
  font-weight: 400;
  font-size: inherit;
  color: #252933;
  cursor: pointer;
}

.item:hover {
  background-color: #ebedf2;
}

</style>
