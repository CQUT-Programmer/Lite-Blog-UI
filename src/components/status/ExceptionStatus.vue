<template>
  <div>
    <img :src="exceptionImg" alt="错误页面">
    <span>{{ exceptionMsg }}</span>
    <el-button @click="back">回到首页</el-button>
  </div>
</template>

<script setup lang="ts">

import {defineProps} from "vue";
import img_404 from "@/assets/image/status/404.svg";
import img_403 from "@/assets/image/status/403.svg";
import img_500 from "@/assets/image/status/500.svg";
import img_err from "@/assets/image/status/error.svg";
import {useRouter} from "vue-router";

const props = defineProps({
  status: {
    type: Number,
    required: true
  }
});

//异常图片
let exceptionImg;
//异常信息
let exceptionMsg;

//根据异常状态码选择对应的图片与信息
switch (props.status) {
  case 404: {
    exceptionImg = img_404;
    exceptionMsg = "当前访问的路径不存在";
  }
    break;
  case 403: {
    exceptionImg = img_403;
    exceptionMsg = "没有足够的权限访问当前页面";
  }
    break;
  case 500: {
    exceptionImg = img_500;
    exceptionMsg = "当前页面系统错误";
  }
    break;
  default : {
    exceptionImg = img_err;
    exceptionMsg = "当前页面网络错误";
  }
}

const router = useRouter();

const back = (): void => {
  router.push({name: "home"});
};


</script>

<style scoped>

</style>