<template>
  <div class="codeShare">
    <div>
      <el-alert
          style="margin: 10px 0"
          title="信息"
          type="warning"
          description="我们不会公开你的代码，代码分享后将会给你一个访问链接，链接有效期为三天。在刷新页面前请保存好你的链接"
          show-icon
      ></el-alert>
      <el-progress v-show="isDis" :percentage="load" />
      <!-- 只读模式 :previewOnly="true" -->
      <!-- :sanitize="sanitize" 使用会导致代码不高亮 -->
      <el-button style="margin-bottom: 10px;" @click="shareCode">分享</el-button>
      <MdEditor
          toolbarsExclude="['link', 'mermaid', 'katex', 'github']"
          v-model="text"
          @onSave="codeSave"
      >
      </MdEditor>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted} from 'vue'

import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
// 使用 sanitizeHtml 处理不安全的 html
import sanitizeHtml from 'sanitize-html/index';
import { ElMessage, ElMessageBox  } from 'element-plus';

interface shareData {
  text: string,
  load: number,
  isDis: boolean
}

export default defineComponent({
  name: "codeShare",
  components: {MdEditor},
  setup() {
    const data = <shareData> reactive({
      text: '',
      load: 0,
      isDis: false
    })

    const codeSave = (v: string):void => {
      ElMessage.info('已保存')
      localStorage.setItem('codeSave', v)
    }

    const sanitize = (html: string): string => {
      console.log(sanitizeHtml(html))
      return sanitizeHtml(html)
    }

    const href = window.location.href;
    const url = href.substring(0, href.length - 10);

    // 分享代码
    const shareCode = () => {
      if(data.text === '') {
        return ElMessage.error('为空不能分享！！！')
      }
      // @ts-ignore
      shareCodeApi({text: data.text}).then( (res) => {
        if(res.data.code === 200) {
          ElMessageBox.alert(`你的访问链接为：<br /><a style="word-break:break-all;" target='_blank' href="${url}/getCodeShare/${res.data.data}">${url}/getCodeShare/${res.data.data}</a>`, '提示', {
            confirmButtonText: 'OK',
            dangerouslyUseHTMLString: true,
          })
          localStorage.removeItem('codeSave')
        }
      })
    }

    onMounted(() => {
      if(localStorage.getItem('codeSave')) {
        data.text = localStorage.getItem('codeSave') || ''
      }
    })

    return {
      ...toRefs(data),
      codeSave,
      sanitize, shareCode
    }
  },
  methods: {
/*    // 图片上传
    async onUploadImg(files: FileList, callback: (urls: string[]) => void) {
      this.load = 0
      this.isDis = true
      const res = await Promise.all(
          Array.from(files).map((file) => {
            return new Promise((rev, rej) => {
              const form = new FormData();
              form.append('img', file);
              // @ts-ignore
              onUploadImg(form, this.onUploadProgress).then((res) => {
                rev(res)
              })
            });
          })
      );

      callback(res.map((item: any) => item.data.data));
    },
    // 获取图片上传进度
    onUploadProgress(e: number) {
      this.load = e
      if(e === 100) {
        setTimeout(() => {
          this.isDis = false
        },1000)
      }
    },*/


  }
});
</script>

<style scoped>
/deep/ .md {
  height: 600px!important;
}
</style>


