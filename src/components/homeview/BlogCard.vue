<template>
  <!--  -->
  <div class="blogCard flex background-common" @mouseover="mouseOver = true" @mouseleave="mouseOver = false" @click="toAssignUrl('liteblog/blogview/12345678')">
    <el-icon id="close-icon" v-if="mouseOver" @click.stop="{}"><Close /></el-icon>
    <div class="flex-column space-between" style="height: 100%;">
      <el-space :size="size" :spacer="spacer" @click.stop="{}">
        <span>{{ blogContent.author.name }}</span>
        <span>{{ blogContent.creationTime }}</span>
        <span>
          <span v-for="(item, index) in blogContent.label">
              <a v-html="item.name"></a>
          <span v-show="blogContent.label.length - 1> index"> . </span>
          </span>
        </span>
      </el-space>

        <h4 v-html="blogContent.title"></h4>
        <div v-html="blogContent.describe"></div>
        <div class="icon flex">
          <span  @click.stop="{}"><el-icon><View/></el-icon>762</span>
          <span>
          <img src="../../assets/image/awesome.png" alt="点赞" class="icon-img" @click.stop="{}">
          <span>4</span>
        </span>
          <span><el-icon><ChatRound/></el-icon>10</span>
        </div>
    </div>
    <img :src="blogContent.posterImg" alt="描述图片" class="poster-img" @click="toAssignUrl('liteblog/blogview/12345678')">
  </div>

</template>

<script lang="ts">
import testStore from "@/store/modules/test/piniaTest";
import {storeToRefs} from "pinia";
import {inject, ref, h} from "vue";
import {ElDivider} from 'element-plus'

export default {
  name: "BlogCard",
  setup() {

    const spacerSize = ref(1)
    const spacer = h(ElDivider, {direction: 'vertical'})
    const toAssignUrl: any = inject("toAssignUrl")
    const store = testStore()

    const mouseOver = ref(false)
    const {blogContent} = storeToRefs(store)
    return {
      toAssignUrl,
      blogContent,
      size: spacerSize,
      spacer,
      mouseOver,
    }
  }
}
</script>

<style scoped lang="scss">

.blogCard {
  position: relative;
  background-color: white;
  height: 15vh;
  font-size: 15px;
  color: #71777c;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;

  #close-icon {
    position: absolute;
    right: 4%;
    top: 4%;
    font-size: 20px;
    &:hover {
      color: #1e80ff;
    };
  }
  > > * {
    display: flex;
    align-content: center;
    padding-bottom: 10px;
  }

  &:nth-child(1) {

  }

  .icon {
    padding-top: 10px;
    width: 30%;
    justify-content: space-between;
    & * {
      display: flex;
      align-items: center;
      &:hover {
        color: #1e80ff;
      }
    }


  }

  h4 {
    font-size: large;
    font-weight: bold;
    color: #000;
    margin: 10px auto;
  }

  .poster-img {
    width: 18%;
    padding-top: 5vh;
  }

  &:hover {
    background-color: rgba(250, 250, 250, .4);
  }
}


</style>
