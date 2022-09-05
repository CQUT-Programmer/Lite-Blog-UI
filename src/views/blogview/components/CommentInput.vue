<template>
  <div>
    <el-input
        v-model="commentText"
        :autosize="{ minRows: 3}"
        type="textarea"
        :placeholder="placeholder"
    />
    <div class="flex space-between" style="margin-top: 10px">
      <div class="comment-icon">
                <span>
                  <img :src="require('@/assets/image/expression.png')" alt="表情">
                  <span>表情</span>
                </span>
        <span>
                  <img :src="require('@/assets/image/img.png')" alt="图片">
                  <span>图片</span>
                </span>
      </div>
      <span>
        Ctrl + Enter
                <el-button type="primary" :disabled="commentText.toString().length <= 0" style="margin-left: 4px">发表评论</el-button>
              </span>
    </div>
  </div>
</template>

<script>
import {computed, ref, toRefs} from "vue";

export default {
  name: "CommentInput",
  props: {
    replyUser: {
      type: Object
    }
  },
  setup(props) {
    const domProps = toRefs(props)
    const commentText = ref('')
    const placeholder = computed(() => {
      if (domProps.replyUser.value !== null && domProps.replyUser.value !== undefined) {
        return "回复" + domProps.replyUser.name + "..."
      } else {
        return "输入评论 (Enter换行, Ctrl + Enter发送)"
      }
    })
    return {
      ...domProps,
      commentText,
      placeholder
    }
  }
}
</script>

<style scoped lang="scss">


@import "@/assets/css/root.scss";

.comment-icon {
  display: flex;

  img {
    @extend .icon-img;
  }

  > span {
    padding-right: 30px;
  }

  span {
    display: flex;
    align-items: center;
  }
}
</style>
