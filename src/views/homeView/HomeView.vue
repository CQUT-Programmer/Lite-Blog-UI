<template>
  <div style="max-width: 960px" >
    <div class="home-view-select">
      <div class="select-list">
       <my-router-link :view-select="homeViewSelect"/>
        <a href="" @click="toAssignUrl('')"></a>
      </div>
      <div>
      </div>
    </div>
    <div class="content">
      <div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import navigation from '../../components/Navigation.vue'
import synthetical from './synthetical/index.vue'
import myRouterLink from '@/components/MyRouterLink.vue'
import {ref, reactive, inject} from "vue";

export default {
  name: "HomeView",
  components: {
    navigation,
    synthetical,
    myRouterLink
  },
  setup() {

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
      toAssignUrl
    }
  },
}
</script>

<style scoped>


.home-view-select {
  position: fixed;
  top: 4.2rem;
  width: 100%;
  height: 3.133rem;
  z-index: 10;
  transition: all .2s;
  transform: translateZ(0);
  left: 0;
  background-color: #fff;

}

.select-list {
  font-size: 13px;
  max-width: 960px;
  margin: auto;
  display: flex;
  height: 100%;
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
