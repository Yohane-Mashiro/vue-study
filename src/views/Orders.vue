<template>
  <div class="orders-page">
    <h1>订单管理</h1>
    <el-table :data="orders" style="width: 100%">
      <el-table-column prop="id" label="订单号" width="120"></el-table-column>
      <el-table-column prop="customer" label="客户" width="150"></el-table-column>
      <el-table-column prop="amount" label="金额" width="120"></el-table-column>
      <el-table-column prop="status" label="状态" width="100">
        <template #default="scope">
          <el-tag :type="getStatusType(scope.row.status)">
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  data() {
    return {
      orders: [
        {
          id: 'ORD001',
          customer: '张三',
          amount: '¥1,200',
          status: '已完成',
          date: '2025-07-15'
        },
        {
          id: 'ORD002',
          customer: '李四',
          amount: '¥800',
          status: '进行中',
          date: '2025-07-16'
        },
        {
          id: 'ORD003',
          customer: '王五',
          amount: '¥2,500',
          status: '待支付',
          date: '2025-07-17'
        }
      ]
    }
  },
  methods: {
    getStatusType(status) {
      switch (status) {
        case '已完成': return 'success';
        case '进行中': return 'primary';
        case '待支付': return 'warning';
        default: return 'info';
      }
    }
  }
}
</script>

<style scoped>
.orders-page {
  padding: 20px;
}

.orders-page h1 {
  color: #409EFF;
  text-align: center;
  margin-bottom: 30px;
}
</style>
