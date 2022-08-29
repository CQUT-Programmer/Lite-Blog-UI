<template>
  <el-container class="blog-content-view">
    <el-aside>
      <div>
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <div  >
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <div  >
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <div  >
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <br/>
      <div  >
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <div  >
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
    </el-aside>
    <el-main id="blog-content-main">
      <h1>{{ blogContent.title }}</h1>
      <div class="flex space-between">
        <div class="flex">
          <el-avatar :src="blogContent.author.headUrl"></el-avatar>
          <div class="flex-column space-between">
            <span v-html="blogContent.author.name"></span>
            <span>{{ blogContent.creationTime + ' ~ 阅读 ' + blogContent.readingVolume }} </span>
          </div>
        </div>
        <el-button type="primary" plain>
          <el-icon>
            <Plus/>
          </el-icon>
          关注
        </el-button>
      </div>
      <img :src="blogContent.posterImg" alt="大图片" v-show="blogContent.posterImg !== ''" id="main-img">
      <span v-html="blogContent.describe"></span>
      <el-divider/>
      <div v-html="blogText" class="markdown-body"></div>
    </el-main>
    <el-aside>
      <div class="background-common flex-column">
        <div class="flex">
          <el-avatar :src="blogContent.author.headUrl"></el-avatar>
          <div class="flex-column space-between">
            <span v-html="blogContent.author.name"></span>
            <span>{{ blogContent.creationTime + ' ~ 阅读 ' + blogContent.readingVolume }} </span>
          </div>
        </div>
        <el-divider/>
        <span>
          获得点赞 {{ blogContent.author.awesomeNumber }}
        </span>
        <span>
          文章被阅读 {{ blogContent.author.awesomeNumber }}
        </span>
      </div>
    </el-aside>
  </el-container>

</template>

<script lang="ts">

import {storeToRefs} from 'pinia'
import {onMounted, computed} from "vue";
import {marked} from "marked";
import "../../../node_modules/github-markdown-css/github-markdown.css";
import {useStore} from "@/store";
import {getStorage} from "@/tools/storage";

export default {
  name: "BlogContent",
  props: {
    blogId: {
      type: String
    }
  },
  created() {
    console.log('创建前')
  },
  setup() {
    const router = useStore()
    console.log(router)

    const {blogContent} = storeToRefs(router)
    onMounted(() => {
      console.log("挂载时")
    })

    const blogText = computed(() => {
      return marked(blogContent.value.content)
    })

    return {
      blogContent,
      getStorage,
      blogText
    }
  }
}
</script>
<style scoped lang="scss">

@import "@/assets/css/root.scss";

.blog-content-view {
  text-align: left;
  height: 100%;
  max-width: 1200px;
  overflow-y: hidden;
  overscroll-behavior-y: none;
  margin: 0 auto;

  .el-avatar {
    margin-right: 5px;
  }

  & > * {
    margin-right: 20px;
  }

  #blog-content-main {
    background-color: #fff;
    padding: 20px;
    margin-left: 70px;

    & > * {
      margin-bottom: 20px;
    }
  }


  .el-aside:nth-child(1) {
    width: 10%;
    position: fixed;

    > div {
      padding-bottom: 20px;
    }

    button {
      height: 42px;
      box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    }

    img {
      width: 24px;
      border-radius: 100%;
    }
  }

  .el-main {
    width: 40%;
    overflow-y: hidden;

    #main-img {
      width: 100%;
    }
  }

  h1 {
    font-size: 24px;
    font-weight: bolder;
  }

  .affix {
    text-align: right;

  }


}
</style>
