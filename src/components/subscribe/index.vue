<template>
  <div class="subscribe-card">
    <div>
      <img :src="imgUrl" :alt="type + '图标'">
      <h3>{{ type }}</h3>
      <div>
        <span>{{ 1223334 }}关注</span>
        <span>{{ 1212333 }}文章</span>
      </div>
    </div>
    <div>
      <el-button type="success" plain v-if="true">关注</el-button>
      <el-button type="success" v-else>已关注</el-button>
    </div>
  </div>

</template>

<script>
import {toRefs} from "vue";

export default {
  name: "index",
  props: {
    imgUrl: {
      type: Object
    },
    type: {
      type: String
    }
  },
  setup(props) {

    const outProps = toRefs(props)
    return {
      ...outProps
    }
  }
}
</script>

<style scoped lang="scss">

.subscribe-card {
  width: 25vm;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.3rem;
  padding: 1rem;
  box-sizing: border-box;
  border: .5px #e9e9eb solid;
  height: 13rem;
  background-color: #FAFAFA;
  img {
    width: 50px;
    height: 50px;
  }

  span {
    padding: 0 4px;
  }

  h3 {
    margin: 10px 0 5px 0 !important;
  }
}
</style>
