<template>
  <div>
    <el-container>
      <el-header class="main-header-box">
        <navigation/>
      </el-header>
      <el-main class="container">
        <div class="home-view-select">
          <div class="select-list">
            <a v-for="item in homeViewSelect" v-html="item.name"></a>
          </div>
          <div>
          </div>
        </div>
        <div class="content">
          <div class="synthetical">
            <router-link to="synthetical"></router-link>
            <synthetical/>
          </div>
        </div>

      </el-main>
<!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </div>
</template>

<script lang="ts">
import navigation from '../../components/Navigation.vue'
import synthetical from './synthetical/index.vue'
import {ref, reactive, inject} from "vue";

export default {
  name: "HomeView",
  components: {
    navigation,
    synthetical,
  },
  setup() {

    const reload = inject('viewReload')

    const homeViewSelect = reactive([
      {name: '综合', url: ''},
      {name: '关注', url: ''},
      {name: '后端', url: ''},
      {name: '前端', url: ''},
      {name: 'Android', url: ''},
      {name: 'iOS', url: ''},
      {name: '人工智能', url: ''},
      {name: '开发工具', url: ''},
      {name: '代码人生', url: ''},
      {name: '阅读', url: ''}
    ])
    return {
      reload,
      homeViewSelect
    }
  },
}
</script>

<style scoped>

.main-header-box {
  width: 100%;
  background-color: white;
}

.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}


.home-view-select {
  position: fixed;
  top: 4rem;
  width: 100%;
  height: 3.133rem;
  z-index: 100;
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

.synthetical {
  margin-top: 4.5rem;
}

</style>
