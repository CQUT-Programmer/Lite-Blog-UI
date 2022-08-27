<template>
  <div class="synthetical">
    <ul class="background-white flex align-center" id="synthetical-select">

      <li v-for="(item, index) in navSelect.label">
        <a v-html="item.title" :class="{'active-color' : index === navSelect.activeIndex}"
           @click="navSelect.activeIndex = index">
        </a>
        <el-divider direction="vertical" v-if="index < navSelect.label.length"/>
      </li>
    </ul>

    <div class="blog-card-box background-white">
      <div v-for="item in 10">
        <blog-card>
      <span>
        {{ item }} blogCard
      </span>
        </blog-card>
        <div class="divider flex space-around" v-if="item < 10">
          <el-divider/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/homeview/BlogCard"
import {reactive} from "vue";

export default {
  name: "index",
  components: {
    BlogCard
  },
  setup() {

    const navSelect = reactive({
      activeIndex: 0,
      label: [
        {
          title: '推荐'
        },
        {
          title: '最新'
        },
        {
          title: '热榜'
        }
      ]
    })
    return {
      navSelect
    }
  }
}
</script>

<style scoped>

.home-view-select {
  padding: 10px 0;
}

.synthetical {
  margin-top: 2.5rem;
  padding: 10px 5px;
}

/deep/ .el-breadcrumb__inner.is-link {
  color: #71777c;
  font-weight: normal;
  cursor: pointer;
}

/deep/ #synthetical-select {
  padding: 10px;
  margin: 0 0 2px 0;
}

.divider {
  width: 100%;
}

.el-divider--horizontal {
  margin: 0;
  width: 90%;
}
</style>
