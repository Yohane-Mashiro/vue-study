<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Aside from './components/Aside.vue'
// 这里是注册
export default {
  components: {
    Header,
    Main,
    Footer,
    Aside
  }
}
</script>

<template>
  <el-container>
  <el-header>
    <Header />
  </el-header>
  <el-container>
    <el-aside width="200px">
      <Aside />
    </el-aside>
    <el-container>
      <el-main>
        <Main />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<style>
  .el-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  /* 确保最外层容器占满全屏 */
  .el-container:first-child {
    width: 100vw;
    height: 100vh;
    border: 3px solid #409EFF;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 60px;
    border: 2px solid #409EFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #409EFF;
    border-top: none;
    border-bottom: none;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #409EFF;
    border-left: none;
    border-bottom: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>