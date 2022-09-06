<template>
  <el-dropdown  class="user-info-window" placement="top">
    <slot></slot>
    <template #dropdown>
      <div class="user-window background-common">
        <div class="flex">
          <avatar></avatar>
          <span class="flex-column">
            <span v-html="user.name"></span>
            <span v-html="user?.discribe ?? '个人描述'"></span>
          </span>
        </div>
        <el-button type="default"> 关注 </el-button>
        <hr/>
        <div class="user-window-span">
          <div class="flex-column">
            <span>
             222
            </span>
            <span>
              关注
            </span>
          </div>
          <div class="flex-column">
            <span>2</span>
            <span>粉丝</span>
          </div>
        </div>
      </div>
    </template>
  </el-dropdown>
</template>

<script>

import avatar from '@/components/avatar/Avatar.vue'
import {toRefs} from "vue";
export default {
  name: "User",
  props: {
    user: {
      type: Object
    }
  },
  components: {
    avatar
  },
  setup(props) {

    const domProps = toRefs(props)
    return {
      ...domProps,
    }
  }
}
</script>

<style lang="scss">
.user-info-window {
  margin-right: 10px;

  .user-window {
    display: flex;
    flex-direction: column;
    width: 100%;

    >* {
      width: 100%;
      margin-bottom: 5px;
    }
    span {
      @extend .user-window
    }

    .el-divider--horizontal {
      margin: 5px 0;
    }

    .user-window-span {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
