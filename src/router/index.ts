import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";
import Layout from "@/components/Layout.vue";
import AboutMe from "@/pages/AboutMe.vue"
import request from '@/http'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "blogdetail/:id",
        component: () => import("@/pages/BlogDetail.vue"),
      },
      {
        path: "blog",
        component: () => import("@/pages/Blog.vue"),
      },
      {
        path: "msgboard",
        component: () => import("@/pages/Msgboard.vue"),
      }
    ],
  },
  {
    path: '/admin',
    component: () => import('@/pages/Admin.vue'),
    redirect: '/admin/writeblog',
    children: [
      {
        path: 'writeblog',
        component: () => import('@/pages/admin/WriteBlog.vue')
      },
      {
        path: 'classify',
        component: () => import('@/pages/admin/Classify.vue')
      },
      {
        path: 'adminblog',
        component: () => import('@/pages/admin/AdminBlog.vue')
      },
    ]
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/home'
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局路由守卫 设置title
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || "Vite App";
  if(to.fullPath.includes('/admin')){
    request.get({
      url: "/user/isadmin"
    })
    .then((res:any) => {
      if(sessionStorage.getItem('adminToken') === res.data.token && to.path !== '/home'){
        next()
      }else{
        next('/home')
      }
    })
  }else{ 
    next()
  }
});

export default router;
