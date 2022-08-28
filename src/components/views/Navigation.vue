<template>
  <div class="main-header">
    <div>
      <div class="align-center">
        <img src="../../assets/image/blogLogo.png" alt="博客暂用logo" id="blogLogo" style="border-radius: 100%">
      </div>
      <div class="align-center blog-title">
        <h4>Vegetable Programmer</h4>
      </div>
    </div>

    <div class="align-center space-between main-nav">
      <div class="flex space-between " style="width: 30%; height: 100%;">
        <my-router-link :view-select="navigation" :width="'100%'" :border_bottom="true"/>
      </div>


      <div class="space-around align-center" style="width: 60%">
        <el-input
            v-model="searchInput"
            style="width: 45%"
            class="w-50 m-2"
            placeholder="搜索 vegetable Programmer Blob"
        >
          <template #append>
            <el-button :icon="Search"/>
          </template>
        </el-input>
        <div>
          <el-dropdown size="default"
                       trigger="click"
                       split-button
                       type="primary"
                       @click="toAssignUrl('blogEditor')"
          >
            创作者中心
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="edit" @click="toAssignUrl('blogEditor')"><span>写文章</span></el-dropdown-item>
                <el-dropdown-item icon="share" @click="toAssignUrl('blogEditor')"><span>发沸点</span></el-dropdown-item>
                <el-dropdown-item icon="discount" @click="toAssignUrl('blogEditor')"><span>写代码</span></el-dropdown-item>
                <el-dropdown-item icon="folderChecked" @click="toAssignUrl('blogEditor')"><span>草稿箱</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div>
          <img src="../../assets/image/numberIcon.png" alt="会员" id="memberIcon">
          <span> 会员 </span>
        </div>

        <el-badge :value="200" :max="99" id="infoBadge">
          <Bell class="icon-with"></Bell>
        </el-badge>

        <el-dropdown trigger="click">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <template #dropdown>
            <el-dropdown-menu class="background-common nav-person-info">

              <div class="flex">
                <avatar></avatar>
                <div class="flex-column">
                  <span class="info-padding">用户<span class="font-large">{{ 3333333 }}</span></span>
                  <span class="font-small info-padding">矿石: {{ 400 }} ></span>
                </div>
              </div>
              <ul class="flex space-around">
                <li>
                  {{ 0 }}
                  <span>关注</span>
                </li>
                <li>
                  {{ 0 }}
                  <span>赞过</span>
                </li>
                <li>
                 {{ 0 }}
                  <span>收藏</span>
                </li>
              </ul>
              <el-divider/>
              <div class="flex" id="info-content">
                <div>
                  <el-icon>
                    <User/>
                  </el-icon>
                  <span>我的主页</span>
                </div>
                <div>
                  <el-icon><Present /></el-icon>
                  <span>成长福利</span>
                </div>
                <div>
                  <el-icon><Collection /></el-icon>
                  <span>会员中心</span>
                </div>
                <div>
                  <el-icon><Reading /></el-icon>
                  <span>我的课程</span>
                </div>
                <div>
                  <el-icon><DataLine /></el-icon>
                  <span>我的优惠</span>
                </div>
                <div>
                  <el-icon><WindPower /></el-icon>
                  <span>我的报名</span>
                </div>
                <div>
                  <el-icon><Place /></el-icon>
                  <span>我的足迹</span>
                </div>

              </div>
              <el-divider/>
              <div class="flex space-between font-small lowlight">
                <span><a href="">我的设置</a></span>
                <span><a href="">退出登录</a></span>
              </div>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {ref, inject} from "vue";
import Avatar from '../avatar/Avatar.vue'
import {Search, CaretBottom, CaretTop, Bell} from "@element-plus/icons";
import myRouterLink from '@/components/tools/MyRouterLink.vue'

export default {
  name: "Navigation",
  components: {
    Avatar,
    myRouterLink
  },
  setup() {

    const toAssignUrl: any = inject('toAssignUrl')
    //功能导航
    const navigation = ref([
      {index: '1', name: '首页', url: 'liteblog/'},
      {index: '2', name: '沸点', url: 'liteblog/hotspot'},
      {index: '3', name: '课程', url: 'liteblog/hotspot'},
      {index: '4', name: '直播', url: 'liteblog/hotspot'},
      {index: '5', name: '活动', url: 'liteblog/hotspot'},
      {index: '6', name: '插件', url: 'liteblog/hotspot'},
    ])

    const homepageActiveIndex = ref('1')
    //路由跳转
    const switchFunction = (key: string) => {
      toAssignUrl(navigation.value[Number.parseInt(key) - 1].url)
    }


    const searchInput = ref('')

    return {
      CaretBottom,
      CaretTop,
      Bell,
      Search,
      navigation,
      homepageActiveIndex,
      switchFunction,
      searchInput,
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
  color: #909090;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: all .2s;
  margin: 0 auto;
  max-width: 1440px;
  height: 65px;
  border-bottom: 1px #dcdfe6 solid;
}

.main-header * {
  z-index: 1000;
}

.main-header div {
  display: flex;
}

.main-header.visible {
  transform: translate3d(0, -100%, 0);
}

.main-nav {
  width: 90%;
  height: 66px;
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

/deep/ .el-divider--horizontal {
  margin: 12px 0 !important;
}


.icon-with {
  width: 60%;
}
</style>

<style lang="scss">
@import "../../assets/css/root";
.blog-title {
  justify-content: center;

  h4 {
    @extend .flex;
    @extend .align-center;
    width: 80%;
  }
}
.nav-person-info {
  @include font-size(16);
  color: #252933;
  width: 250px;
  el-icon {
    @include font-size(20);
  }
  .lowlight {
    color: #8a919f;
  }
  .font-large {
    @include font-size(18);
  }
  .font-small {
    @include font-size();
  }
  ul {
    padding-top: 10px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        @extend .lowlight;
        @extend .font-small
      }
    }
  }
  .info-padding {
    padding-left: 5px;
    padding-bottom: 5px;
  }
  #info-content {
    @extend .flex;
    @extend .space-between;
    @extend .align-center;
    flex-wrap: wrap;
    >div {
      padding: 10px;
      &:hover {
        background-color: #f7f8fa;
        border-radius: 4px;
      }
    }
    span {
      padding: 5px;
    }
  }
}
</style>




