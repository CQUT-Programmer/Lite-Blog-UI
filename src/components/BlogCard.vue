<template>
  <div class="blogCard flex align-center space-around">
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: "BlogCard"
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
