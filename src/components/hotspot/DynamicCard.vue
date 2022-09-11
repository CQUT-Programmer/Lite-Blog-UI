<template>
  <div class="dynamic-card">
    <div class="flex background-common">
      <avatar/>
      <div id="dynamic-content">
        <span>{{ '小刺猬' }}</span>
        <span style="color:#909090;">{{ '前端小刺猬' + "25分钟前" }}</span>
        <span>{{ '动态内容' }}</span>
        <div class="hot-reviews" v-show="true">

          评论内容
        </div>
      </div>
    </div>
    <el-divider/>
    <ul class="flex-center-h100 background-common space-around" >
      <li>
        <img src="../../assets/image/share.png" alt="分享">
        <span>分享</span>
      </li>
      <li>
        <img src="../../assets/image/comment.png" alt="评论">
        <span>10</span>
      </li>
      <li>
        <img src="../../assets/image/awesome.png" alt="点赞">
        <span>4</span>
      </li>
    </ul>
  </div>

</template>

<script>
import avatar from '@/components/avatar/Avatar.vue'

export default {
  name: "DynamicCard",
  components: {
    avatar
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/css/index.scss";
.dynamic-card {
  margin-bottom: 10px;
  font-size: 15px;
  color: #17181a;
  img {
    width: 16px;
    height: 16px;
    padding-right: 4px;
  }

  .hot-reviews {
    background: #f7f8fa;
    border-radius: 4px;
    padding: 12px 16px;
  }

  #dynamic-content {
    margin-left: 10px;
    width: 100%;
    text-align: left;
    @extend .flex-column;
    @extend .space-between;
  }

  ul {

    margin: 0;
    padding: 10px 10px 0 10px;
    li {
      display: flex;
      align-items: center;
      font-size: 10px;
      color: #86909c;
    }


  }
}

.el-divider--horizontal {
  margin: 0;
}


</style>
