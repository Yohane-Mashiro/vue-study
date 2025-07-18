<template>
  <el-menu 
  :default-active="$route.path" 
  class="el-menu-demo" 
  mode="horizontal" 
  router
  @select="handleSelect">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-sub-menu index="2">
      <template #title>我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="/contact">联系我们</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      
      // 处理外部链接
      if (key === '4') {
        window.open('https://www.ele.me', '_blank');
      }
      
      // 这里可以添加路由跳转逻辑
      // 例如: this.$router.push('/path')
    }
  }
}
</script>

<style scoped>
.header-container {
  width: 100%;
    height: 100%;
}
</style>