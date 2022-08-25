<template>
  <div  class="dynamic-card background-common">
    <div class="flex" style="align-items: flex-start">
      <avatar/>
    </div>
    <h1>聊天卡片</h1>
    <el-divider/>
    <ul class="flex-center-h100 space-around" style="margin: 0; padding: 10px;">
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

<style scoped>

.dynamic-card {
  background-color: #fff;
  margin: 0 0 20px 0;
  padding-bottom: 0;
}
.dynamic-card img {
  width: 16px;
  height: 16px;
  padding-right: 4px;
}

.dynamic-card ul li {
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #86909c;

}

.el-divider--horizontal {
  margin: 0;
}
</style>
