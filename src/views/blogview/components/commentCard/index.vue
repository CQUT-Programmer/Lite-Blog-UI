<template>
  <comment-card :level="1" :comment="{
    user: commentObject.user,
  commentText: commentObject.commentText,
  commentTime: commentObject.commentTime
  }"
                :topic-user="commentObject.user">
    <template #replyComment>
      <comment-card v-for="item in commentObject.replyComment" :comment="item" :level="2"
                    :topic-user="commentObject.user">

      </comment-card>
    </template>
  </comment-card>
</template>

<script>

import commentCard from './CommentCard'
import {toRefs} from "vue";
import testStore from "@/store/modules/test/piniaTest";
import {storeToRefs} from "pinia";

export default {
  name: "index",
  components: {
    commentCard
  },

  props: {
    commentObject: {
      type: Object
    }
  },
  setup(props) {

    const domProps = toRefs(props)
    return {
      ...domProps
    }
  }
}
</script>

<style scoped>

</style>
