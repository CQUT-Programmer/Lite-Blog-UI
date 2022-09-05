<template>
  <div class="flex comment-content">
    <!--用户信息卡片，弹出用户的相关信息-->
    <user :user="comment.user">
      <img :src="comment.user.avatar" :style="{'width': (50 - 5 * level) + 'px'}" alt="用户头像"
           style="border-radius: 100%"/>
    </user>
    <div class="comment-content">
      <div class="flex-column comment-text">
        <!--TODO: 判断是不是博主自己的评论-->
        <div class="flex space-between">
          <div v-html="commentUserHtml"></div>
          <span v-html="formatRangeTime(comment.commentTime)"></span>
        </div>
        <div class="comment-text" v-html="comment.commentText"></div>
        <div class="reply-text" v-html="comment?.replyText" v-show="comment?.replyText"></div>
        <div class="comment-icon">
          <span>
          <img :src="require('@/assets/image/awesome.png')" alt="点赞" class="icon-img">
          <span>4</span>
          </span>
          <span @click="showCommentInput(commentInput)" :class="commentInput? 'active-color' : null">
          <el-icon style="margin-right: 4px; cursor: pointer"><ChatDotSquare/></el-icon>
          <a v-if="!commentInput">回复</a>
          <a v-else>取消回复</a>
          </span>
        </div>
        <comment-input :replyUser="comment.user" v-show="commentInput"/>
      </div>
      <div class="reply-comment" style="min-height: 0">
        <slot name="replyComment"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {toRefs, ref, computed} from "vue";
import {formatRangeTime} from "@/utils/format"
import commentInput from '../CommentInput'
import user from '../UserInfoWindow'
import {getStorage} from "@/utils/storage";
import {StorageType} from "@/utils/constants";

export default {
  name: "CommentCard",
  components: {
    commentInput,
    user
  },
  props: {
    comment: {
      type: Object,
    },
    level: {
      type: Number
    },
    topicUser: {
      type: Object
    }
  },
  setup(props) {

    const commentProp = toRefs(props)
    const commentInput = ref(false)

    const commentUserHtml = computed(() => {

      const comment = commentProp.comment.value
      const topicUser = commentProp.topicUser.value
      const level = commentProp.level.value
      const author = getStorage('user', StorageType.SESSION)
      const commentAuthor = comment.user.id === author.id ? comment.user.name + ' (作者)' : comment.user.name
      const addInfoSpan = (ifAuthor) => {
        return `<span>${ifAuthor}</span>`
      }
      let html = ``
      //如果是第一层,不存在谁回复谁, 如果回复的第一层评论不写回复谁
      if (level === 1 || comment?.replyText === comment.commentText) {
        html += addInfoSpan(commentAuthor)
      } else {
        const replyAuthor = comment.replyUser.id === author.id ? comment.replyUser.name + ' (作者)' : comment.replyUser.name
        //如果是评论区里面的相互评论会存在谁回复谁
        html += addInfoSpan(commentAuthor)
        html += ` 回复 `
        html += addInfoSpan(replyAuthor)
      }
      return html
    })

    const showCommentInput = (value) => {
      console.log(value)
      commentInput.value = !value
    }
    return {
      ...commentProp,
      commentInput,
      formatRangeTime,
      commentUserHtml,
      showCommentInput
    }
  }
}
</script>

<style scoped lang="scss">

.comment-content {
  width: 100%;
  padding: 5px 0;

  > div {
    margin: 5px 0;
  }

  .comment-text {

    > div {
      padding: 3px 0;
    }
  }

  .comment-icon {
    display: flex;

    > * {
      padding-right: 16px;
      display: flex;
      align-items: center;
    }
  }
}

.reply-comment {
  padding: 0 5px;
  background-color: #f9fafb;
  border-radius: 4px;
}
</style>
