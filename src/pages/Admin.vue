<template>
<div class="admin">
  <div class="sider">
    <div class="logo" @click="goHome">一只小白u<span>の</span>微博</div>
    <ul>
      <li v-for="item in nav" :key="item.id" @click="toPage(item.path,item.id)" :class="{ 'active': item.id === active }">
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
import { ref } from 'vue';
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
  }
]
const active = ref(0)
const goHome = () => {
  layout.showAdmin = false;
  router.push('/home');
}
const toPage = (path:string,id:number) => {
  active.value = id;
  router.push(path);
}
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
    flex: 1;
    padding: 15px 30px;
  }
}
</style>