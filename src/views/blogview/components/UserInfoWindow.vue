<template>
  <el-dropdown  class="user-info-window" placement="top">
    <slot></slot>
    <template #dropdown>
      <div class="user-window background-common">
        <div class="flex">
          <avatar></avatar>
          <span class="flex-column">
            <span v-html="user.name"></span>
            <span v-html="user?.discribe ?? '个人描述'" style="font-size: 14px"></span>
          </span>
        </div>
        <el-button type="primary"> 关注 </el-button>
        <el-divider/>
        <div class="user-window-span">
          <div class="align-center flex-column">
            <span>
             222
            </span>
            <span>
              关注
            </span>
          </div>
          <div class="align-center flex-column">
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
}
.user-window {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 280px;
  height: 200px;
  font-size: 16px;
  >* {
    width: 100%;
    margin: 5px 0;
  }
  .user-window-span {
    display: flex;
    justify-content: space-around;
  }
}

</style>
