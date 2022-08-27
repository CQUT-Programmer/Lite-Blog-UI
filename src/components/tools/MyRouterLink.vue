<template>
  <div class="space-between flex" :style="{'width': width}">
    <router-link :to="{path: '/' + item.url}" v-for="(item, index) in viewSelect"
                 :class="{'active-color': index === selectIndex,
                  'border_bottom_hover': border_bottom,
                  'border_bottom_active': border_bottom && index === selectIndex
    }"
                 class="border_bottom"
                 @click="selectIndex = index"
                 append
                 tag="span"
    >
      <span class="flex-center-h100">{{ item.name }}</span>
    </router-link>
  </div>

</template>

<script>
import {ref, toRefs} from "vue";

export default {
  name: "MyRouterLink",
  props: {
    viewSelect: {
      type: Object
    },
    width: {
      type: String
    },
    border_bottom: {
      type: Boolean
    }
  },
  setup(props) {

    const selectIndex = ref(0)
    const outProps = toRefs(props)
    return {
      selectIndex,
      ...outProps
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/common.scss";
.border_bottom {
  position: relative;
}


.border_bottom_active:before {
  @extend .border_bottom_style
}

.border_bottom_hover:hover:before {
  @extend .border_bottom_style

}


</style>
