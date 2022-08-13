<template>
  <div class="flex space-between align-center" style="width: 100%; background-color: white">
    <el-input placeholder="请输入标题..." v-model="blog.blogTitle">
    </el-input>
    <div class="flex align-center space-around" id="editor-title-button">
      <div class="align-center flex space-around">保存成功</div>
      <el-button type="primary" plain> 草稿箱</el-button>
      <el-button type="primary"> 发布</el-button>
      <el-icon @click="mdEdit = !mdEdit">
        <Switch/>
      </el-icon>
    </div>
    <avatar/>
  </div>

  <MdEditor
      toolbarsExclude="['link', 'mermaid', 'katex', 'github']"
      v-model="blog.blogText"
      v-show="mdEdit"
      class="editor"
      key="mdEditor">
  </MdEditor>
  <Editor v-if="!mdEdit"
          class="editor"
          key="editor"
          v-model="blog.blogText">
  </Editor>


</template>

<script>

import {reactive, ref} from "vue";
import Avatar from '@/components/Avatar.vue'
// script 引入
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
//引入tinymce编辑器
import Editor from '@tinymce/tinymce-vue';


export default {
  name: "BlogEditor",
  components: {
    Avatar,
    MdEditor,
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
      MdEditor,
      mdEdit
    }
  }
}
</script>

<style scoped>
.editor {
  height: 84vh;
  display: flex;
  padding-top: 3vh;
}

code {
  color: #f66;
}

#editor-title-button {
  width: 40%;
}

#editor-title-button * {
  width: 30%;
  height: 5vh;
  cursor: pointer;
}


.el-input {
  width: 70%;
  height: 10vh;
  font-size: larger;
  font-weight: bolder;
}


</style>
