<template>
  <div id="user_content">
    <div class="content_left">
      <div class="content_left_head">
        <div class="flex space-between" style="height: 30%;">
          <div class="flex">
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="头像图片" id="avatar"/>
            <div class="flex-column" style="justify-content: center">
              <span>用户{{ 111111111 }}</span>
              <span> + 你从事什么职业？</span>
              <span> + 你有哪些爱好？</span>
            </div>
          </div>
          <div>
            <ul class="flex space-between">
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
            </ul>
            <el-button type="primary" plain style="margin-top: 50px">编辑个人资料</el-button>
          </div>
        </div>
        <el-divider/>
      </div>

      <div>
        <el-menu
            default-active="1"
            class="el-menu-demo"
            mode="horizontal"
            @select="navSelect"
        >
          <el-menu-item index="1">动态</el-menu-item>
          <el-menu-item index="2">文章</el-menu-item>
          <el-menu-item index="3">专栏</el-menu-item>
          <el-menu-item index="4">沸点</el-menu-item>
          <el-menu-item index="5">收藏集</el-menu-item>
          <el-menu-item index="6">关注</el-menu-item>
          <el-sub-menu index="7">
            <template #title>
              赞
              <span style="color:#b2bac2;font-size: 14px; padding-left: 2px">{{0}}</span>
            </template>
            <el-menu-item index="7-1">文章{{0}}</el-menu-item>
            <el-menu-item index="7-2">沸点{{0}}</el-menu-item>
            <el-menu-item index="7-3">咨询{{0}}</el-menu-item>
          </el-sub-menu>

        </el-menu>
        <router-view/>
      </div>

    </div>
    <div class="content_right">
      <div>
        <div>
          关注了
          <span>{{0}}</span>
        </div>
        <div>
          关注者
          <span>{{0}}</span>
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import {inject, onMounted, reactive} from "vue";
import {StorageType} from '@/utils/constants'
import {getStorage} from "@/utils/storage";
export default {
  name: "User",
  setup() {

    const toAssignUrl: any = inject("toAssignUrl")

    const userId =  getStorage('user_id', StorageType.SESSION)
    const navChange = reactive({
      activeIndex: '1',
      nav: [
        {
          index: '1',
          url: 'liteblog/user/' + userId + "/",
        },
        {
          index: '2',
          url: 'liteblog/user/' + userId + "/posts",
        },
        {
          index: '3',
          url: 'liteblog/user/' + userId + "/columns",
        },
        {
          index: '4',
          url: 'liteblog/user/' + userId + "/hotspot",
        },
        {
          index: '5',
          url: 'liteblog/user/' + userId + "/collections",
        },
        {
          index: '6',
          url: 'liteblog/user/' + userId + "/tags",
        },
      ]
    })

    onMounted(() => {
      navSelect('1')
    })

    const navSelect = (key: string) => {
      toAssignUrl(navChange.nav[Number.parseInt(key) - 1].url)
    }
    return {
      navChange,
      navSelect
    }
  }
}
</script>

<style scoped>

</style>

<style scoped lang="scss">
@import '@/assets/css/index.scss';

#user_content {
  @extend .flex;
  justify-content: center;

  .content_left {
    width: 50%;
    font-size: 16px;
    .content_left_head {

      @extend .background-common;
      margin-bottom: 10px;
      .flex-column {
        span {
          text-align: -webkit-left;
          padding: 5px;
        }
        span:nth-child(1) {
          font-size: 22px;
          color: #000;
          font-weight: bold;
        }
      }

      #avatar {
        width: 70px;
        height: 70px;
        border-radius: 100%;

        margin: 10px 20px 10px 10px;
      }

    }

  }
  .content_right {
    margin-left: 20px;
    height: 10vh;
    @extend .background-common;
    div:nth-child(1) {
      @extend .flex;
      justify-content: center;
      div {
        padding: 20px;
        @extend .flex-column;
        justify-content: center;
        span {
          font-weight: bold;
          padding-top: 5px;
          font-size: large;
        }
      }
    }
  }
}

</style>
