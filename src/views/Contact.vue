<template>
  <div class="contact-page">
    <h1>联系我们</h1>
    <el-form :model="contactForm" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="contactForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="contactForm.email"></el-input>
      </el-form-item>
      <el-form-item label="消息">
        <el-input type="textarea" v-model="contactForm.message"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('提交联系表单:', this.contactForm);
      this.$message.success('消息已发送！');
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.contact-page h1 {
  color: #409EFF;
  text-align: center;
  margin-bottom: 30px;
}
</style>
