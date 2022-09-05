<template>
  <div @click="" class="user-info-window">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.user-info-window {
  margin-right: 10px;
}
</style>
