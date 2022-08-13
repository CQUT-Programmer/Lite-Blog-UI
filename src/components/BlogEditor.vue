<template>
  <div class="editor">
    <textarea class="input" :value="blogInput" @input="blogUpdate"></textarea>
    <div class="output" v-html="blogOutput"></div>
  </div>
</template>

<script>
import {marked} from 'marked'
import {debounce} from 'lodash-es'
import {ref, computed} from "vue";

export default {
  name: "BlogEditor",
  setup() {

    const blogInput = ref("### helloWord")
    //marked 格式转换
    const blogOutput = computed(() => marked(blogInput.value))

    const blogUpdate = debounce((e) => {
      blogInput.value = e.target.value
    }, 50)

    return {
      blogInput,
      blogOutput,
      blogUpdate
    }
  }
}
</script>

<style scoped>
.editor {
  height: 100vh;
  display: flex;
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


</style>
