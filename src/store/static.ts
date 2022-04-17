import { defineStore } from "pinia";

const useStatic = defineStore("static", {
  state: () => ({
    nav: [
      {
        url: "/",
        title: "首页",
      },
      {
        url: "/blog",
        title: "博客",
      },
      {
        url: "/aboutme",
        title: "关于我",
      },
      {
        url: "/contact",
        title: "联系我",
      },
      {
        url: "/msgboard",
        title: "留言版",
      },
      {
        url: "/admin",
        title: "写博客",
      },
    ],
  }),
});

export default useStatic;
