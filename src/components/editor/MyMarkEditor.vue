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
import {Message} from "@/tools/message";
import {setStorage, getStorage} from "@/tools/storage";
import {defineComponent, PropType, reactive, toRefs, ref} from "vue";
import {ContentType} from '@/tools/constants'
import axios from "axios";


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
      setStorage(text, blog_storage_key)
      setStorage(htmlBlog, blog_storage_key + '_html')
      Message.success("保存成功")
    }

    const onHtmlChange = (text: string) => {
      htmlBlog.value= text
    }

    // eslint-disable-next-line no-undef
    const loadImg = async (files: Array<File>, callback: (urls: string[]) => void) => {
      const res = await Promise.all(
          files.map((file) => {
            return new Promise((rev, rej) => {
              // eslint-disable-next-line no-undef
              const form = new FormData();
              form.append('file', file)

              axios.put('http://localhost:8088/api/cos/upload/public', form, {
                headers: {
                  'Content-Type': ContentType.UPLOAD,
                  '5624d023ce7c5ce2081b64a1157c85dc773d3c9d': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhZjRlNDViOWRkN2Q0MTUyODg4NzBhZjNiNzgzNWNkNCIsInN1YiI6IntcImdlbmRlclwiOlwi55S3XCIsXCJpZFwiOjExLFwibG9naW5UaW1lXCI6XCIyMDIyLTA4LTI0IDE5OjQ3OjM1XCIsXCJtYWlsXCI6XCIxMjNAcXEuY29tXCIsXCJuaWNrTmFtZVwiOlwiYWxiYVpoYW5nXCIsXCJyb2xlSWRcIjowLFwidXVpZFwiOlwiMTIwM2Q5ZDEwODNlNDM0ZWI1MjRiY2I2Y2I1NmQxZjdcIn0iLCJpc3MiOiJmNDBkMjQ0YWZlYjFmZDdlMjQ1NWU5N2QwZGJhODYyNDU1NTkxYmRkIiwiaWF0IjoxNjYxMzQxNjU1LCJleHAiOjE2NjEzNDg4NTV9.KxiuBJVRdYB4MpWm60GlGON5kWvOXWZ6SJgAw9P6QT8'
                }
              })
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
