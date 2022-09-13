<template>
  <div class="flex comment-content">
    <!--用户信息卡片，弹出用户的相关信息-->
    <user :user="comment.user">
      <img :src="comment.user.avatar" :style="{'width': (50 - 5 * level) + 'px', 'height':  (50 - 5 * level) + 'px'}"
           alt="用户头像"
           style="border-radius: 100%"/>
    </user>
    <div class="comment-content">
      <div class="flex-column comment-text">
        <!--TODO: 判断是不是博主自己的评论-->
        <div class="flex space-between">
          <div v-if="level === 1 || comment?.replyText === comment.commentText">
            <user :user="comment.user">
              <a v-html="comment.user.id === blogUser.id ? comment.user.name + ' (作者)' : comment.user.name"></a>
            </user>
          </div>
          <div v-else class="flex-center-h100">
              <user :user="comment.user">
                <a v-html="comment.user.id === blogUser.id ? comment.user.name + ' (作者)' : comment.user.name"></a>
              </user>
              <span style="margin-right: 10px; font-size: 14px">回复</span>
              <user :user="comment.replyUser">
                <a v-html="comment.replyUser.id === blogUser.id ? comment.replyUser.name + ' (作者)' : comment.replyUser.name"></a>
              </user>
          </div>
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
import {toRefs, ref, computed, onMounted, createApp, h} from "vue";
import {formatRangeTime} from "@/utils/format"
import commentInput from '../CommentInput'
import user from '../UserInfoWindow'
import storage from "@/utils/storage";
import {StorageType} from "@/constant/settings";

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
    const blogUser = storage.getStorage('user', StorageType.SESSION)
    onMounted(() => {

    })
    const showCommentInput = (value) => {
      console.log(value)
      commentInput.value = !value
    }
    return {
      ...commentProp,
      commentInput,
      blogUser,
      formatRangeTime,
      showCommentInput,
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
