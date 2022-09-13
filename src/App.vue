<template>
  <div id="app">
    <router-view v-if="isRouterActive"></router-view>
  </div>

</template>

<script lang="ts">
import {nextTick, ref, provide, onMounted} from "vue";
import {useRouter} from "vue-router";
import {Howl, Howler} from 'howler'
import useUserStore from "@/store/modules/user";
import {Message} from "@/utils/message";

export default {
  name: 'App',
  setup() {
    let isRouterActive = ref(false)
    const router = useRouter()
    const toAssignUrl = (url: string) => {
      router.push({
        path: '/' + url
      })
    }
    const userStore = useUserStore()
    const reload = async () => {
      isRouterActive.value = false
      await nextTick()
      isRouterActive.value = true
    }
    provide("viewReload", reload)
    const sound = new Howl({
      src: require('@/assets/mp3/sound.mp3')
    })
    onMounted(() => {
      isRouterActive.value = true

         userStore.login({mail: '2633565580@qq.com', password: 'z123456'}).then(() => {
           isRouterActive.value = true
         }).catch((error) => {
           Message.error(error.message)
         })
      /*sound.stop()
            nextTick(() => {
              sound.play()
            })
            Howler.volume(1)*/
    })


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
