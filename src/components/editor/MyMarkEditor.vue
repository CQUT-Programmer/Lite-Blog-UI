<template>
  <md-editor
      editorId="lite-blog"
      :onSave="onSave"
      v-model="text.mdValue"
      :onUploadImg="loadImg"
  >
  </md-editor>
</template>

<script lang="ts">


// script 引入
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

import {setToken, getToken, clearToken} from "@/tools/storage";
import {defineComponent, PropType, reactive, watch, toRefs} from "vue";
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
    const text = reactive({
      mdValue: getToken() || ""
    })
    const onSave = (x: any) => {
      setToken(x)
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
                  '5624d023ce7c5ce2081b64a1157c85dc773d3c9d': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5YWE2Yzk3NjI0ZjM0OGEwOGM1ODcwOGMxNmY0YWQyZiIsInN1YiI6IntcImF2YXRhclwiOlwiMjYzMzU2NTU4MFwiLFwiZ2VuZGVyXCI6XCLnlLdcIixcImlkXCI6MTAsXCJsb2dpblRpbWVcIjpcIjIwMjItMDgtMjMgMTk6MDM6MTVcIixcIm1haWxcIjpcIjI2MzM1NjU1ODBAcXEuY29tXCIsXCJuaWNrTmFtZVwiOlwid3loXCIsXCJyb2xlSWRcIjowLFwidXVpZFwiOlwiMTFmM2ViZGY3ZGJiNDZkZjhmYzUxMjFiNzI3NDFjZmRcIn0iLCJpc3MiOiJmNDBkMjQ0YWZlYjFmZDdlMjQ1NWU5N2QwZGJhODYyNDU1NTkxYmRkIiwiaWF0IjoxNjYxMjUyNTk2LCJleHAiOjE2NjEyNTk3OTZ9.-_QcPsopomBdXmS89vNyaOi93iMQ1-nx6IrwoLf13Fk',
                }
              })
                  .then((res) => rev(res))
                  .catch((error) => rej(error))
            })
          })
      )
      callback(res.map((item: any) => item.data.data.url))
    }
    watch(() => text.mdValue, () => {

      setToken(text.mdValue)
    })
    return {
      onSave,
      text,
      ...toRefs(prop),
      loadImg
    }
  }
})
</script>

<style scoped>

</style>
