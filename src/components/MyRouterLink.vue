<template>
  <div class="space-between flex-center-h100" style="width: 100%;">
    <router-link :to="{path: '/' + item.url}" v-for="(item, index) in selectRef"
                 :class="{'active-color': index === selectIndex}"
                 @click="selectIndex = index"
                 v-html="item.name"
                 class="flex-center-h100"
                 style="height: 90%;"
                 append
                 tag="a"
    >

    </router-link>

    <!--    <router-link :to="{path: '/' + item.url}" v-for="(item, index) in selectRef"-->
    <!--                 active-class="active-color"-->
    <!--                 v-html="item.name"-->
    <!--                 append-->
    <!--    >-->
  </div>

</template>

<script>
import {ref, toRef, onMounted} from "vue";
export default {
  name: "MyRouterLink",
  props: {
    viewSelect: {
      type: Object
    }
  },
  setup(props) {

    const selectIndex = ref(0)
    const selectRef = toRef(props, 'viewSelect')
    onMounted(() => {

    })
    return {
      selectIndex,
      selectRef
    }
  }
}
</script>

<style scoped>

</style>
