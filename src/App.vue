<template>
  <div id="app">
    <router-view v-if="isRouterActive"></router-view>
  </div>

</template>

<script lang="ts">
import {nextTick, ref, provide} from "vue";

export default {
  name: 'App',
  setup() {
    let isRouterActive = ref(true)

    const reload = async () => {
      isRouterActive.value = false
      await nextTick()
      isRouterActive.value = true
      console.log(isRouterActive)
    }
    provide("viewReload", reload)

    return {
      isRouterActive,
      reload,
    }
  }
}
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
