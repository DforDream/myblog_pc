import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";
import Layout from "@/components/Layout.vue";
import AboutMe from "@/pages/AboutMe.vue"

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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局路由守卫 设置title
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || "Vite App";
  next();
});

export default router;
