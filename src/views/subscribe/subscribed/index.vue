<template>
  <div class="subscribed">
    <subscribe :img-url="require('@/assets/image/JavaScript.png')" :type="'javaScript'"></subscribe>
    <subscribe :img-url="require('@/assets/image/github.png')" :type="'github'"></subscribe>
    <subscribe :img-url="require('@/assets/image/java.png')" :type="'java'"></subscribe>
    <subscribe :img-url="require('@/assets/image/JavaScript.png')" :type="'javaScript'"></subscribe>
    <subscribe :img-url="require('@/assets/image/JavaScript.png')" :type="'javaScript'"></subscribe>
  </div>

</template>

<script lang="ts">

import subscribe from '@/components/subscribe/index.vue'
export default {
  name: "index",
  components: {
    subscribe
  },
  setup() {
    return {
      subscribe,
    }
  }
}
</script>

<style scoped lang="scss">
.subscribed {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
