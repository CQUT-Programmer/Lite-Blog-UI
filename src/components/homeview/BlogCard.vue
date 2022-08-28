<template>
  <div class="blogCard flex align-center space-around" @click="toAssignUrl('liteblog/blogview/12345678')">
    <slot></slot>
  </div>

</template>

<script lang="ts">
import {inject} from "vue";
export default {
  name: "BlogCard",
  setup() {
    const toAssignUrl: any = inject("toAssignUrl")
    return {
      toAssignUrl
    }
  }
}
</script>

<style scoped lang="scss">

.blogCard {
  background-color: white;
  height: 10vh;
  cursor: pointer;
}

.blogCard:hover {
  background-color: rgba(250, 250, 250, .4);
}

</style>
