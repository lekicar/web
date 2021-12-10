import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
import Details from '@/views/details.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Details',
    component: Details
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  },
  {
    path: '/app',
    name: 'App',
    redirect: { name: 'Details', query: { model: 'download' } }
  },
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配首页
    redirect: '/',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
