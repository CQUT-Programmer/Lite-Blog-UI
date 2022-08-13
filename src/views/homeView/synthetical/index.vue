<template>
  <div>
    <div>
      <el-breadcrumb separator="|">
        <el-breadcrumb-item :to="{ path: '/' }">推荐</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">最新</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">热榜</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>

export default {
  name: "index"
}
</script>

<style scoped>

</style>
