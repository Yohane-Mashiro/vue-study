import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import Main from '../components/views/Welcome.vue'
import UserInfo from '../components/views/UserInfo.vue'
import Orders from '@/views/Orders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },{
    path: '/userinfo',
    name: 'UserInfo',
    component: UserInfo
  },{
    path: '/orders',
    name: 'Orders',
    component: Orders
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router