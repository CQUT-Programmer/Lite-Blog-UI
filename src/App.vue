<template>
  <div id="app">
    <router-view v-if="isRouterActive"></router-view>
  </div>

</template>

<script lang="ts">
import {nextTick, ref, provide, } from "vue";
import {useRouter} from "vue-router";
import {Howl, Howler} from 'howler'
export default {
  name: 'App',
  setup() {
    let isRouterActive = ref(true)
    const router = useRouter()
    const toAssignUrl = (url: string) => {
      router.push({
        path: '/' + url
      })
    }
    const reload = async () => {
      isRouterActive.value = false
      await nextTick()
      isRouterActive.value = true
      console.log(isRouterActive)
    }
    provide("viewReload", reload)
    const sound = new Howl({
      src: require('@/assets/mp3/sound.mp3')
    })
 /*    onMounted(() => {
      sound.stop()
      nextTick(() => {
        sound.play()
      })
      Howler.volume(1)
    })*/

    provide('toAssignUrl', toAssignUrl)
    return {
      isRouterActive,
      reload,
      toAssignUrl,
    }
  }
}
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
