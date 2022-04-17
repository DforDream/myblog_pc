<template>
  <div class="home">
    <div class="blog" @click="toBlog(1314)">
      <div class="blog_left">
        <img :src="navImg" alt="" />
      </div>
      <div class="blog_right">
        <h2 class="title">如何搭建个人博客</h2>
        <div class="author">
          <img :src="logo" alt="" />
          <span class="name">一只小白u</span>
          <span class="time">发布时间：2022-04-16 17:25:30</span>
        </div>
        <div class="des">
          关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，
        </div>
      </div>
    </div>
    <div class="blog">
      <div class="blog_left">
        <img :src="navImg" alt="" />
      </div>
      <div class="blog_right">
        <h2 class="title">如何搭建个人博客</h2>
        <div class="author">
          <img :src="logo" alt="" />
          <span class="name">一只小白u</span>
          <span class="time">发布时间：2022-04-16 17:25:30</span>
        </div>
        <div class="des">
          关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，
        </div>
      </div>
    </div>
    <div class="blog">
      <div class="blog_left">
        <img :src="navImg" alt="" />
      </div>
      <div class="blog_right">
        <h2 class="title">如何搭建个人博客</h2>
        <div class="author">
          <img :src="logo" alt="" />
          <span class="name">一只小白u</span>
          <span class="time">发布时间：2022-04-16 17:25:30</span>
        </div>
        <div class="des">
          关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，
        </div>
      </div>
    </div>
    <div class="blog">
      <div class="blog_left">
        <img :src="navImg" alt="" />
      </div>
      <div class="blog_right">
        <h2 class="title">如何搭建个人博客</h2>
        <div class="author">
          <img :src="logo" alt="" />
          <span class="name">一只小白u</span>
          <span class="time">发布时间：2022-04-16 17:25:30</span>
        </div>
        <div class="des">
          关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，
        </div>
      </div>
    </div>
    <div class="blog">
      <div class="blog_left">
        <img :src="navImg" alt="" />
      </div>
      <div class="blog_right">
        <h2 class="title">如何搭建个人博客</h2>
        <div class="author">
          <img :src="logo" alt="" />
          <span class="name">一只小白u</span>
          <span class="time">发布时间：2022-04-16 17:25:30</span>
        </div>
        <div class="des">
          关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，
        </div>
      </div>
    </div>
    <div class="blog">
      <div class="blog_left">
        <img :src="navImg" alt="" />
      </div>
      <div class="blog_right">
        <h2 class="title">如何搭建个人博客</h2>
        <div class="author">
          <img :src="logo" alt="" />
          <span class="name">一只小白u</span>
          <span class="time">发布时间：2022-04-16 17:25:30</span>
        </div>
        <div class="des">
          关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，
        </div>
      </div>
    </div>
    <div class="blog">
      <div class="blog_left">
        <img :src="navImg" alt="" />
      </div>
      <div class="blog_right">
        <h2 class="title">如何搭建个人博客</h2>
        <div class="author">
          <img :src="logo" alt="" />
          <span class="name">一只小白u</span>
          <span class="time">发布时间：2022-04-16 17:25:30</span>
        </div>
        <div class="des">
          关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，关于如何搭建个人博客，
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import navImg from "@/assets/nav.webp";
import logo from "@/assets/logo.webp";
const router = useRouter();
const toBlog = (id: number) => {
  router.push(`/blogdetail/${id}`);
};
</script>

<style scoped lang="less">
.home {
  user-select: none;
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
}
</style>
