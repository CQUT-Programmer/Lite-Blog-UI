<template>
  <div class="main-header">
    <div>
      <h4>Vegetable Programmer</h4>
    </div>

    <div class="align-center space-around main-nav">
      <el-menu
          :default-active="homepageActiveIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="switchFunction">
        <el-menu-item v-for="item in navigation" v-text="item.name" :index="item.index"></el-menu-item>
      </el-menu>
      <div class="space-around align-center">
        <el-input
            v-model="searchInput"
            style="width: 20%"
            class="w-50 m-2"
            placeholder="Type something"
            :suffix-icon="Search"/>
        <div>
          <el-button type="primary" id="createCenter"> 创作者中心</el-button>
          <el-button type="primary" id="more">
            <el-icon class="el-icon--right" style="color: #f6f6f6">
              <CaretTop/>
            </el-icon>
          </el-button>
        </div>
        <Bell class="icon-with"></Bell>
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

    const searchInput = ref('搜索 vegetable Programmer Blob')

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
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  z-index: 250;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: all .2s;
  justify-content: space-around;
  margin: auto;
  max-width: 1440px;
  height: 66px;
}

.main-header * {
  display: flex;
}

.main-header.visible {
  /*transform: translateZ(0);*/
  transform: translate3d(0, -100%, 0);
}

.main-nav {
  flex: 1 0 auto;
  width: 40%;

}

.el-menu--horizontal {
  border-bottom: none;

}

#blogLogo {
  width: 4%;
}

.icon-with {
  width: 2%;
}

.align-center {
  align-items: center;
}

.align-center div {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

#createCenter {
  border-bottom-right-radius: unset;
  border-top-right-radius: unset;
}

#more {
  margin-left: .7px;
  border-bottom-left-radius: unset;
  border-top-left-radius: unset;
  padding: 4px;
  box-shadow: #cccccc;

}

</style>
