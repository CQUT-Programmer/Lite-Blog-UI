<template>
  <div class="flex space-between align-center" style="width: 100%; background-color: white">
    <el-input placeholder="请输入标题..." >
    </el-input>
    <div class="flex align-center space-around" id="editor-title-button">
      <div class="align-center flex space-around">保存成功</div>
      <el-button type="primary" plain> 草稿箱 </el-button>
      <el-button type="primary"> 发布 </el-button>
      <el-icon><Switch /></el-icon>
    </div>
    <avatar/>
  </div>
<!--  <div class="editor">-->
<!--    <textarea class=class="editor""input" :value="blogInput" @input="blogUpdate"></textarea>-->
<!--    <div class="output" v-html="blogOutput"></div>-->
<!--  </div>-->
  <MdEditor
      toolbarsExclude="['link', 'mermaid', 'katex', 'github']"
      v-model="blogInput"
      class="editor">
  </MdEditor>

</template>

<script>

import {ref} from "vue";
import Avatar from '@/components/Avatar.vue'
// script 引入
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';


export default {
  name: "BlogEditor",
  components: {
    Avatar,
    MdEditor
  },
  setup() {

    const blogInput = ref("### helloWord")

    return {
      blogInput,
      MdEditor
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

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}

#editor-title-button {
  width: 40%;
}

#editor-title-button *{
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
