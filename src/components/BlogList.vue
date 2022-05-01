<template>
<div v-if="props.data.length !== 0">
  <div
    class="blog"
    @click="toBlog(item.id)"
    v-for="item in props.data"
    :key="item.id"
  >
    <div class="blog_left">
      <img v-if="item.imgpath" :src="`${BASE}${item.imgpath}`" alt="" />
      <img v-else :src="nav" alt="">
    </div>
    <div class="blog_right">
      <h2 class="title">{{ item.title }}</h2>
      <div class="author">
        <img :src="logo" alt="" />
        <span class="name">一只小白u</span>
        <span class="time">发布时间：{{ item.createdate }}</span>
      </div>
      <div class="des">
        {{ item.des }}
      </div>
    </div>
  </div>
</div>
<div v-else>
  该分类下暂没有博客哈。。。
</div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import logo from "@/assets/logo.webp";
import nav from '@/assets/nav.webp';
const props = defineProps(["data"]);
const BASE = import.meta.env.VITE_BASE_URL;
const router = useRouter();
const toBlog = (id: number) => {
  router.push(`/blogdetail/${id}`);
};
</script>

<style scoped lang="less">
.blog {
  width: 100%;
  height: 200px;
  background: #fff;
  display: flex;
  cursor: pointer;
  margin-bottom: 15px;
  .blog_left {
    width: 40%;
    height: 100%;
    overflow: hidden;
    img {
      height: 100%;
      padding: 15px;
    }
  }
  .blog_right {
    margin-left: 15px;
    margin-right: 15px;
    flex: 1;
    .title {
      font-weight: 700;
      font-size: 26px;
      line-height: 50px;
    }
    .author {
      font-size: 12px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .name {
        font-weight: 700;
        display: inline-block;
        margin: 0 10px;
      }
    }
    .des {
      text-indent: 2em;
      line-height: 20px;
      font-size: 14px;
    }
  }
}
</style>
