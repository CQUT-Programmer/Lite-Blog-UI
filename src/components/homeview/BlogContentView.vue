<template>
  <el-container class="blog-content-view">
    <el-aside>
      <el-affix position="top" :offset="20"  target=".blog-content-view" class="el-affix">
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈" >
        </el-button>
      </el-affix>
      <el-affix position="top" :offset="40"  target=".blog-content-view" class="el-affix">
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈" >
        </el-button>
      </el-affix>
      <el-affix position="top" :offset="60"  target=".blog-content-view" class="el-affix">
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈" >
        </el-button>
      </el-affix>
      <el-affix position="top" :offset="80"  target=".blog-content-view" class="el-affix">
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈" >
        </el-button>
      </el-affix>
      <el-affix position="top" :offset="100"  target=".blog-content-view" class="el-affix">
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈" >
        </el-button>
      </el-affix>
      <el-affix position="top" :offset="120"  target=".blog-content-view" class="el-affix">
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈" >
        </el-button>
      </el-affix>
    </el-aside>
    <el-main>
      <h1>{{ blogContent.title }}</h1>
      <div>
        <div>
          <el-avatar :src="blogContent.author.headUrl"></el-avatar>
          <div>
            <span v-html="blogContent.author.name"></span>
            <span>{{blogContent.creationTime + ' ~ 阅读 ' + blogContent.readingVolume}} </span>
          </div>
        </div>
        <el-button type="primary" plain>
          <el-icon>
            <Plus/>
          </el-icon>
          关注
        </el-button>
      </div>
      <span v-html="blogContent.describe"></span>
      <span v-html="blogContent.content"></span>
    </el-main>
    <el-aside>
      <div class="background-common">
        <div>
          <el-avatar :src="blogContent.author.headUrl"></el-avatar>
          <div>
            <span v-html="blogContent.author.name"></span>
            <span>{{blogContent.creationTime + ' ~ 阅读 ' + blogContent.readingVolume}} </span>
          </div>
        </div>
        <el-divider/>
        <span>
          获得点赞 {{blogContent.author.awesomeNumber}}
          文章被阅读 {{blogContent.author.awesomeNumber}}
        </span>
        <span>
        </span>
      </div>
    </el-aside>
  </el-container>
  <h1></h1>

</template>

<script>

import {storeToRefs} from 'pinia'
import {onMounted} from "vue";
import {useStore} from "@/store";
import {BlogContent} from "@/tools/constants";

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

    const {blogContent} = storeToRefs(router)
    onMounted(() => {
      console.log("挂载时")
    })
    return {
      blogContent
    }
  }
}
</script>

<style scoped lang="scss">
.blog-content-view {

  .el-affix {
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
}
</style>
