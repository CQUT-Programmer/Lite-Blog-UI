<template>
  <el-container class="blog-content-view">
    <el-aside>
      <div>
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <div>
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <div>
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <div>
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <br/>
      <div>
        <el-button circle>
          <img :src="require('@/assets/image/message.png')" alt="反馈">
        </el-button>
      </div>
      <div>
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
      <div v-html="blogText" class="markdown-body" ref="article"></div>
    </el-main>
    <el-aside id="aside2">

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

      <keep-alive>
        <el-affix :offset="120">
          <div class="background-common flex-column" :style="{'height': directoryMaxHeight}">
            <h1 style="margin: 0">目录</h1>
            <el-divider/>
            <div v-html="blogTextDirectory" ref="linkLists" id="directory"></div>
          </div>
        </el-affix>
      </keep-alive>


    </el-aside>
  </el-container>

</template>

<script lang="ts">

import {storeToRefs} from 'pinia'
import {onMounted, computed, ref, reactive, watch, toRefs, nextTick, inject} from "vue";
import {marked} from "marked";
import "../../../node_modules/github-markdown-css/github-markdown.css";
import {useStore} from "@/store";
import {getStorage} from "@/utils/storage";
import {directoryAnchor, toToc} from "@/views/blogview/directoryAnchor";
import {useRouter} from "vue-router";

export default {
  name: "BlogContent",
  props: {
    blogId: {
      type: String
    }
  },

  methods: {
    tets() {
      {
      }
    }
  },
  setup() {

    const viewReload: any = inject('viewReload')
    const router = useRouter()
    const store = useStore()
    const domRefs: any = reactive({
      linkLists: '',
      article: ''
    })
    const activeIndex = ref(0)
    const {blogContent, clientHeight} = storeToRefs(store)
    const scrollModule: any = reactive({
      listHeight: [],
      catalogLists: [],
      linkLists: [],
    })
    onMounted(() => {

          nextTick(() => {
            getCatalogList()
            getTitleHeight()
          })

          Object.defineProperties(window, {
            changeActiveIndex: {
              set(v: any) {
                setTimeout(() => {
                  activeIndex.value = v
                }, 3)
              }
            }
          })
          window.addEventListener('scroll', handleScroll, false)


        }
    )
    // 获取目录的高度
    const directoryMaxHeight: any = computed(() => {

      let height = scrollModule.linkLists.length >= 16 ? '64' : scrollModule.linkLists.length / 16 * 64
      height = height > 0 ? height : 64
      return height + 'vh'
    })
    //格式化博客内容
    const blogTransform: { data: any, toc: string[] } = reactive(directoryAnchor(marked(blogContent.value.content)))

    const blogText = computed(() => {
      return blogTransform.data
    })

    const changeActiveIndex = (index: number) => {
      activeIndex.value = index
    }


    const blogTextDirectory = computed(() => {
      return toToc(blogTransform.toc)
    })

    const getTitleHeight = () => {

      const article = domRefs.article
      let titleLists = Array.prototype.slice.call((article as unknown as Element).getElementsByClassName('toc-title'))
      titleLists.forEach(item => {
        scrollModule.listHeight.push(item.offsetTop)
      })
      scrollModule.listHeight.push(2 * scrollModule.listHeight[scrollModule.listHeight.length - 1])
    }

    watch(activeIndex, (newVal, oldVal) => {
      let data: HTMLElement = document.getElementById(`toc-link-${oldVal}`) as HTMLElement
      data.classList.remove('active');
      data = document.getElementById(`toc-link-${newVal}`) as HTMLElement
      data.classList.add('active')
    }, {deep: true})

    const getCatalogList = () => {
      const linkLists = domRefs.linkLists
      scrollModule.linkLists = Array.prototype.slice.call((linkLists as unknown as HTMLElement).getElementsByClassName('link'))
      scrollModule.catalogLists = Array.prototype.slice.call((linkLists as unknown as Element).getElementsByClassName('catalog-list'))

    }
    //监听页面滚动事件
    const handleScroll = () => {
      const scrollY = window.scrollY - clientHeight.value
      for (let i = 0; i < scrollModule.listHeight.length - 1; i++) {
        let h1 = scrollModule.listHeight[i]
        let h2 = scrollModule.listHeight[i + 1]
        if (scrollY >= h1 && scrollY <= h2) {
          const renderIndex = i
          activeIndex.value = renderIndex
          let top = 0
          top = renderIndex >= 12 ? scrollModule.listHeight.length - renderIndex >= 12 ? 28 * (renderIndex - 12) : 28 * (scrollModule.listHeight.length - 12) : 0
          const linkList = domRefs.linkLists
          nextTick(() => {
            linkList.scrollTop = Number.parseInt(`${top}`)
          })
        }
      }
    }


    return {
      ...toRefs(domRefs),
      blogContent,
      getStorage,
      blogText,
      blogTextDirectory,
      activeIndex,
      changeActiveIndex,
      scrollModule,
      directoryMaxHeight
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
  text-overflow: ellipsis;

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


  #aside2 {
    > div {
      margin-bottom: 30px;
    }
  }

}

</style>

<style lang="scss">


#directory {
  overflow: auto;
  transition: margin-top 2s;

  &::-webkit-scrollbar {
    width: 6px;
    height: 80px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e4e6eb;
    outline: none;
    border-radius: 2px;
  }

  .active {
    color: #1e80ff;

    &:before {
      content: "";
      position: absolute;
      margin-top: 7px;
      width: 4px;
      z-index: 10;
      height: 16px;
      background: #1e80ff;
      border-radius: 0 4px 4px 0;
    }

    a {
      color: #1e80ff;
    }
  }
}

.catalog-list {
  font-weight: 600;
  overflow: hidden;
  padding-left: 10px;
  position: relative;
  font-size: 15px;

  &:first-child:before {
    content: "";
    position: absolute;
    top: 10px;
    left: 9px;
    bottom: 0;
    width: 5px;
    background-color: #ebedef;
    opacity: .8;
  }

  & > li > a {
    position: relative;
    padding-left: 16px;
    line-height: 20px;
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul > li > a {
    font-size: 14px;
    color: #333333;
    padding-left: 36px;
    font-weight: 500;
    position: relative;
  }

  ul > ul > li > a {
    line-height: 20px;
    font-size: 14px;
    color: #333333;
    padding-left: 50px;
    font-weight: normal;
  }


  li:hover {
    background-color: #fcfcfc;
  }

  a {
    color: #000;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px 0 4px 12px;

    &:hover {
      background-color: rgba(235, 237, 239, 0.99);
    }
  }
}
</style>
