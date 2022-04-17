import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";
import Layout from "@/components/Layout.vue";

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
    ],
  },
  {
    path: "/aboutme",
    component: () => import("@/pages/AboutMe.vue"),
    redirect: "/aboutme/home",
    children: [
      {
        name: "home",
        path: "home",
        component: () => import("@/pages/aboutme/Home.vue"),
      },
      {
        path: "me",
        component: () => import("@/pages/aboutme/Me.vue"),
      },
      {
        path: "work",
        component: () => import("@/pages/aboutme/Work.vue"),
      },
      {
        path: "project",
        component: () => import("@/pages/aboutme/Project.vue"),
      },
      {
        path: "web",
        component: () => import("@/pages/aboutme/Web.vue"),
      },
      {
        path: "contact",
        component: () => import("@/pages/aboutme/Contact.vue"),
      },
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
