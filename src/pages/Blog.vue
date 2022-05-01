<template>
  <div class="blog">
    <div class="sort">
      <span :class="{ 'active': blog.classify === ''}" @click="selectClassify('')">全部</span>
      <span :class="{'active': blog.classify === item.classify }" v-for="item in classifyList" :key="item.id" @click="selectClassify(item.classify)">{{ item.classify }}</span>
    </div>
    <BlogList :data="blog.allBlog" />
    <a-pagination class="pagination" v-model:current="blog.current" :total="blog.total" hideOnSinglePage @change="change" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import request from "@/http";
import { GET_ALL_CLASSIFY } from '@/http/api';
import useBlog from '@/store/blog';
import BlogList from '@/components/BlogList.vue';

const blog = useBlog();
const classifyList = ref([])

request.get({
  url: GET_ALL_CLASSIFY
}).then((res:any) => {
  if(res.data.code === 200){
    classifyList.value = res.data.data;
  }
})
const selectClassify = (classify:string = '') => {
  blog.classify = classify;
  blog.findBlog(blog.title,1,blog.classify)
}
const change = (current: number) => {
  blog.findBlog(blog.title,current,blog.classify)
}
blog.findBlog(blog.title,1,blog.classify)
</script>

<style scoped lang="less">
.blog {
  width: 100%;
  .sort {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    position: sticky;
    top: -1px;
    margin-bottom: 15px;
    span {
      cursor: pointer;
      user-select: none;
      height: 30px;
      padding: 0 15px;
      margin: 10px;
      border: 1px solid #e0e1e6;
      border-radius: 15px;
      background: #fff;
      color: #333;
      line-height: 30px;
      text-align: center;
      font-weight: 700;
    }
    span:hover {
      background: #fa8f95;
      color: #f0f3f3;
    }
    .active {
      background: #e5615a;
      color: #fdf3f2;
    }
  }
  .pagination {
    float: right;
    margin-bottom: 20px;
  }
}
</style>
