<template>
  <div class="synthetical">
    <ul class="background-white flex align-center" id="synthetical-select">
      <li><a>推荐</a></li>
      <el-divider direction="vertical" />
      <li><a>最新</a></li>
      <el-divider direction="vertical" />
      <li><a>热榜</a></li>
    </ul>

    <div class="blog-card-box background-white">
      <div v-for="item in 4">
        <blog-card>
      <span>
        {{ item }} blogCard
      </span>
        </blog-card>
        <div class="divider flex space-around" v-if="item < 4">
          <el-divider/>
        </div>
      </div>


    </div>

  </div>

</template>

<script>
import BlogCard from "@/components/BlogCard"

export default {
  name: "index",
  components: {
    BlogCard
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
  margin: 0 ;
  width: 90%;
}
</style>
