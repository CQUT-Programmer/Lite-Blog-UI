<template>
  <div class="flex space-between align-center editor-view">
    <el-input placeholder="请输入标题..." v-model="blog.blogTitle">
    </el-input>
    <div class="flex align-center space-around" id="editor-title-button">
      <div class="align-center flex space-around">保存成功</div>
      <el-button type="primary" plain> 草稿箱</el-button>
      <el-button type="primary"> 发布</el-button>
      <el-icon @click="mdEdit = !mdEdit">
        <Switch/>
      </el-icon>
      <avatar/>
    </div>

  </div>

  <my-mark-editor
      v-show="mdEdit"
      class="editor"
      key="mdEditor"
  >
  </my-mark-editor>
  <Editor v-if="!mdEdit"
          class="editor"
          key="editor">
  </Editor>


</template>

<script>

import {reactive, ref} from "vue";
import Avatar from '@/components/avatar/Avatar.vue'
import MyMarkEditor from "@/components/editor/MyMarkEditor";
//引入tinymce编辑器
import Editor from '@tinymce/tinymce-vue';


export default {
  name: "BlogEditor",
  components: {
    Avatar,
    MyMarkEditor,
    Editor
  },
  setup() {

    const mdEdit = ref(true)
    const blog = reactive({
      blogTitle: '',
      blogText: "### helloWord"
    })


    return {
      blog,
      mdEdit
    }
  }
}
</script>

<style scoped lang="scss">
.editor-view {

  width: 100%;
  background-color: #fff;
  #editor-title-button {
    width: 30%;

    & * {
      cursor: pointer;
    }
  }
}


.editor {
  height: 94vh;
  display: flex;
  padding-top: 3vh;
}

code {
  color: #f66;
}


.el-input {
  height: 6vh;
  font-size: larger;
  font-weight: bolder;
}


</style>
