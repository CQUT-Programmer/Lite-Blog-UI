<template>
  <md-editor
      editorId="lite-blog"
      v-model="text.mdValue"
      @onSave="onSave"
      @onUploadImg="loadImg"
      @onHtmlChange="onHtmlChange"
  >
  </md-editor>
</template>

<script lang="ts">


// script 引入
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {Message} from "@/utils/message";
import storage from "@/utils/storage";
import {defineComponent, PropType, reactive, ref, toRefs} from "vue";
import {saveEditorApi} from "@/api/editor";


export type Theme = 'dark' | 'light';
export default defineComponent({
  name: "MyMarkEditor",
  props: {
    theme: String as PropType<Theme>,
    previewTheme: String as PropType<string>,
    codeTheme: String as PropType<string>,
    lang: String as PropType<string>
  },
  components: {
    MdEditor
  },
  setup(props) {

    const prop = reactive(props)
    const blog_storage_key = 'blog_text'
    const text = reactive({
      mdValue: ''
    })

    const htmlBlog = ref('')

    const onSave = (text: string) => {
      storage.setStorage(text, blog_storage_key)
      Message.success("保存成功")
    }

    const onHtmlChange = (text: string) => {
      htmlBlog.value = text
    }

    const loadImg = async (files: Array<File>, callback: (urls: string[]) => void) => {
      const res = await Promise.all(
          files.map((file) => {
            return new Promise((rev, rej) => {
              const form = new FormData();
              form.append('file', file)
              saveEditorApi(form)
                  .then((res) => rev(res))
                  .catch((error) => rej(error))
            })
          })
      )
      callback(res.map((item: any) => item.data.data.url))
    }
    return {
      onSave,
      text,
      ...toRefs(prop),
      loadImg,
      onHtmlChange
    }
  }
})
</script>

<style scoped>

</style>
