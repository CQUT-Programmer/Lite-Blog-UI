<template>
  <div style="max-width: 960px" >
    <div class="home-view-select" :style="{'top': isHeader ? '4.1rem' : 0}">
      <div class="select-list">
       <my-router-link :view-select="homeViewSelect" :width="'60%'" :border_bottom="false"/>
        <a @click="toAssignUrl('liteblog/subscribe/')" v-html="'标签管理'"></a>
      </div>
      <div>
      </div>
    </div>
    <div class="content">
        <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import navigation from '../../components/views/Navigation.vue'
import synthetical from './synthetical/index.vue'
import myRouterLink from '@/components/tools/MyRouterLink.vue'
import {reactive, inject, onMounted, ref} from "vue";
import {setStorage} from "@/utils/storage";

export default {
  name: "HomeView",
  components: {
    navigation,
    synthetical,
    myRouterLink
  },
  setup() {
    onMounted(() => {
      window.addEventListener('scroll', windowScroll, true)
    })
    const isHeader = ref(true)
    const windowScroll = () => {
      const scrollY = window.scrollY
      isHeader.value = scrollY < 400;
    }
    const reload = inject('viewReload')
    const toAssignUrl: any = inject('toAssignUrl')
    const homeViewSelect = reactive([
      {name: '综合', url: 'liteblog/'},
      {name: '关注', url: 'liteblog/attention'},
      {name: '后端', url: '#'},
      {name: '前端', url: '#'},
      {name: 'Android', url: '#'},
      {name: 'iOS', url: '#'},
      {name: '人工智能', url: '#'},
      {name: '开发工具', url: '#'},
      {name: '代码人生', url: '#'},
      {name: '阅读', url: '#'}
    ])

    return {
      reload,
      homeViewSelect,
      toAssignUrl,
      isHeader
    }
  },
}
</script>

<style scoped>


.home-view-select {
  position: fixed;
  width: 100%;
  height: 3.133rem;
  z-index: 10;
  transform: translateZ(0);
  transition: all .5s ;
  left: 0;
  background-color: #fff;

}

.select-list {
  font-size: 13px;
  max-width: 960px;
  margin: auto;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  color: #71777c;
}

.select-list a {
  margin-right: 30px;
  cursor: pointer;
}

.select-list a:hover {
  color: cornflowerblue;
}

.content {
  width: 75%;
}


</style>
