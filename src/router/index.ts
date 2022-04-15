import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局路由守卫 设置title
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Vite App';
  next()
})

export default router