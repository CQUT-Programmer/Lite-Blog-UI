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

      <el-affix :offset="120">
        <div class="background-common flex-column" :style="{'height': directoryMaxHeight}" id="directory">
          <h1 style="margin: 0">目录</h1>
          <el-divider/>
          <div v-html="blogTextDirectory" ref="linkLists"></div>
        </div>
      </el-affix>

    </el-aside>
  </el-container>

</template>

<script lang="ts">

import {storeToRefs} from 'pinia'
import {onMounted, computed, ref, reactive, watch, toRefs, nextTick} from "vue";
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
  /*
    data() {
      return {
        linkLists: this.$refs.linkLists,
        listHeight:  this.$refs.linkLists
      }
    },

    watch: {
      '$route'(val) {
        // eslint-disable-next-line no-undef
        const data = document.getElementsByClassName(`toc-link-${val.hash}`)[0] as Element
        // eslint-disable-next-line no-undef
        this.linkLists.forEach((list: Element) => {
          data == list ? list.classList.add('active-color') : list.classList.remove('active-color')
        })
      }
    },

    methods: {
      handleScroll() {
        // eslint-disable-next-line no-undef
        const scrollY = window.pageYOffset
        this.fixed = scrollY > 230
        for (let i = 0; i < this.listHeight.length - 1; i++) {
          const h1: number = this.listHeight[i]
          const h2: number = this.listHeight[i + 1]
          if (scrollY >= h1 && scrollY <= h2) {
            // eslint-disable-next-line no-undef
            const data: Element = document.getElementsByClassName(`toc-link-#${i}`)[0] as Element // 获取文章滚动到目录的目标元素
            // eslint-disable-next-line no-undef
            this.linkLists.forEach((list: Element) => {
              let top = 0
              top = i > 7 ? -28 * (i - 7) : 0
              this.target[0].style.marginTop = `${top}px`
              data == list ? list.classList.add('active') : list.classList.remove('active') // 其他移除active
            })
          }
        }
      },

      getCataloglist() {
        // eslint-disable-next-line no-undef
        const catalogList = (his.$refs.linkLists as Element).getElementsByClassName('catalog-list')
        // eslint-disable-next-line no-undef
        this.linkLists = document.getElementsByName('link')
        this.target = Array.prototype.slice.call(catalogList)
      },

      getTitleHeight() {
        // eslint-disable-next-line no-undef
        const titlelist = Array.prototype.slice.call((this.$refs.linkLists as Element).getElementsByClassName('toc-title'))
        titlelist.forEach((item, index) => {
          this.listHeight.push(item.offsetTop)
        })
        // 滚动的距离无法取到最后一个，因此在数组最后加上上一个两倍达到效果
        this.listHeight.push(2 * (titlelist[titlelist.length - 1].offsetTop))
      }
    },

    mounted() {
      // eslint-disable-next-line no-undef
      window.addEventListener('scroll', this.handleScroll, true)
      this.$nextTick(async () => {
        await this.getTitleHeight()
        await this.getCataloglist()
      })
    },
  */
  setup() {

    const router = useRouter()
    const store = useStore()
    const domRefs = reactive({
      linkLists: '',
      article: ''
    })
    const activeIndex = ref(0)
    const {blogContent} = storeToRefs(store)
    const scrollModule: any = reactive({
      listHeight: [],
      catalogLists: [],
      linkLists: [],
    })
    onMounted(() => {
      window.addEventListener('scroll', handleScroll, true)
      nextTick(() => {
        getCatalogList()
        getTitleHeight()
      })
    })

    //获取目录的高度
    const directoryMaxHeight = computed(() => {
      return scrollModule.linkLists.length >= 20 ? '70vh' : scrollModule.linkLists.length / 20 * 70 + 'vh'
    })

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

      scrollModule.listHeight[scrollModule.listHeight - 1] =   2 * (scrollModule.listHeight - 1 )
    }

    watch(activeIndex, (newVal, oldVal) => {
      console.log(newVal, oldVal)
      let data: HTMLElement = document.getElementById(`toc-link-${newVal}`) as HTMLElement
      data.style.color = '#2186ff'
      data = document.getElementById(`toc-link-${oldVal}`) as HTMLElement
      data.style.color = '#000';
    },{deep: true})

    const getCatalogList = () => {
      const linkLists = domRefs.linkLists
      scrollModule.linkLists = Array.prototype.slice.call((linkLists as unknown as HTMLElement).getElementsByClassName('link'))
      scrollModule.catalogLists = Array.prototype.slice.call((linkLists as unknown as Element).getElementsByClassName('catalog-list'))

    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      for (let i = 0; i < scrollModule.listHeight.length - 1; i ++) {
        let h1 = scrollModule.listHeight[i]
        let h2 = scrollModule.listHeight[i + 1]
        const linkLists: Array<HTMLElement>  = scrollModule.linkLists
        if (scrollY >= h1 && scrollY <= h2) {
          activeIndex.value = i
          let top = 0
          top = i > 20 ? scrollModule.listHeight.length - i >= 20 ? - 28 * (i -20) : - 28 * (scrollModule.listHeight.length - 20) : 0
          linkLists[0].style.marginTop = `${top}px`
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
      margin-bottom: 20px;
    }
  }

}

</style>

<style lang="scss">


#directory {
  overflow: hidden;
  transition: margin-top 2s;
}

.catalog-list {
  font-weight: 600;
  overflow: hidden;
  padding-left: 10px;
  position: relative;
  font-size: 15px;

  &:first-child::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 1px;
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
      background-color: #ebedef;
    }
  }
}
</style>
