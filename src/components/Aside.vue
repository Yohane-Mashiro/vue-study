<template>
<div class="aside-container">
    <h5>导航菜单</h5>
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
            <template #title>
                <el-icon><Location /></el-icon>
            </template>
            <el-menu-item-group>
                <!-- 添加路由链接 -->
                <el-menu-item index="/">
                    <el-icon><House /></el-icon>
                    <span>欢迎页面</span>
                </el-menu-item>
                <el-menu-item index="/userinfo">
                    <el-icon><User /></el-icon>
                    <span>用户信息</span>
                </el-menu-item>
                <el-menu-item index="/orders">
                    <el-icon><Document /></el-icon>
                    <span>订单管理</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</div>
</template>

<script>
import { Location, House, User, Document } from '@element-plus/icons-vue'

export default {
  components: {
    Location,
    House,
    User,
    Document
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.aside-container {
  height: 100%;
  width: 100%;
}

.el-menu-vertical-demo {
  height: 100%;
  border-right: none;
}

h5 {
  text-align: center;
  margin: 10px 0;
  color: #666;
}

/* 添加菜单项样式 */
.el-menu-item {
  display: flex;
  align-items: center;
}

.el-menu-item .el-icon {
  margin-right: 8px;
}
</style>