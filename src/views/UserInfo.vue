<template>
  <div class="user-info-container">
    <h2>用户信息管理</h2>
    
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      v-loading="loading">
      <el-table-column
        prop="date"
        label="注册日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="150">
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next, sizes"
      :total="totalCount"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      tableData: []
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    
    handleCurrentChange(page) {
      this.currentPage = page;
    },
    
    handleSizeChange(size) {
      this.pageSize = size;
    },
    
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        // 转换API数据为表格需要的格式
        this.tableData = response.data.map(user => ({
          date: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
          name: user.name,
          address: `${user.address.city}, ${user.address.street}, ${user.address.suite}`,
          email: user.email,
          phone: user.phone
        }));
        
        this.totalCount = this.tableData.length;
        
      } catch (error) {
        console.error('获取用户数据失败:', error);
        this.$message.error('获取用户数据失败，请检查网络连接');
      } finally {
        this.loading = false;
      }
    }
  },
  
  mounted() {
    this.fetchUsers();
  }
}
</script>

<style scoped>
.user-info-container {
  padding: 20px;
}

.user-info-container h2 {
  margin-bottom: 20px;
  color: #333;
}
</style>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>