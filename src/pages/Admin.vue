<template>
<div class="admin">
  <div class="sider">
    <div class="logo" @click="goHome">一只小白u<span>の</span>博客</div>
    <ul>
      <li v-for="item in nav" :key="item.id" @click="toPage(item.path)" :class="{ 'active': item.path === active }">
        {{ item.title }}
      </li>
    </ul>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</div>
</template>
<script setup lang='ts'>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import useLayout from '@/store/layout';
const router = useRouter();
const layout = useLayout();

const nav = [
  {
    id: 0,
    path: '/admin/writeblog',
    title: '写博客'
  },
  {
    id: 1,
    path: '/admin/classify',
    title: '分类管理'
  },
  {
    id: 2,
    path: '/admin/adminblog',
    title: '博客管理'
  },
  {
    id: 3,
    path: '/admin/msgboard',
    title: '留言板管理'
  },
  {
    id: 4,
    path: '/admin/contact',
    title: '联系我管理'
  }
]
const active = ref('/admin/writeblog')
const goHome = () => {
  layout.showAdmin = false;
  router.push('/home');
}
const toPage = (path:string) => {
  active.value = path;
  router.push(path);
}
watch(router.currentRoute,() => {
  active.value = router.currentRoute.value.fullPath
})
active.value = router.currentRoute.value.fullPath
</script>

<style scoped lang='less'>
.admin {
  width: 100vw;
  height: 100vh;
  display: flex;
  .sider {
    width: 250px;
    height: 100%;
    background: #001529;
    overflow: hidden;
    color: #fff;
    .logo {
      user-select: none;
      cursor: pointer;
      width: 230px;
      margin: 15px 10px 25px;
      text-align: center;
      font-size: 26px;
      line-height: 50px;
      span {
        line-height: 50px;
        font-size: 50px;
        color: #ff693d;
      }
    }
    ul {
      li {
        width: 100%;
        height: 50px;
        text-align: center;
        user-select: none;
        cursor: pointer;
        line-height: 50px;
      }
      li:hover {
        background: #1890ff;
      }
      .active {
        background: #1890ff;
      }
    }
  }
  .main {
    overflow: auto;
    flex: 1;
    padding: 15px 30px;
  }
}
</style>