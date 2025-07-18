import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import Main from '../views/Welcome.vue'
import UserInfo from '../views/UserInfo.vue'
import Orders from '@/views/Orders.vue'
import Contact from '@/views/Contact.vue'
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
  },{
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router