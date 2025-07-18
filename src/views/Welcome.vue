<template>
  <div class="welcome-page">
    <div class="welcome-content">
      <h1 class="welcome-title">
        <el-icon class="welcome-icon"><Star /></el-icon>
        欢迎使用我们的系统
      </h1>
      <p class="welcome-text">感谢您的访问，祝您使用愉快！</p>
      <div class="welcome-actions">
      </div>
    </div>
  </div>
</template>

<script>
import { Star } from '@element-plus/icons-vue'

export default {
  name: 'Welcome',
  components: {
    Star
  },
  methods: {
    handleStart() {
      this.$message.success('欢迎使用系统！')
    }
  }
}
</script>

<style scoped>
.welcome-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.welcome-content {
  text-align: center;
  padding: 60px 40px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.welcome-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.welcome-icon {
  font-size: 2.5rem;
  color: #FFD700;
}

.welcome-text {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.welcome-actions {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .welcome-content {
    padding: 40px 20px;
  }
  
  .welcome-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 10px;
  }
  
  .welcome-icon {
    font-size: 2rem;
  }
  
  .welcome-text {
    font-size: 1rem;
  }
}
</style>