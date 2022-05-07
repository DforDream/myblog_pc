<template>
  <div class="right">
    <div class="search">
      <h3 class="border">站内搜索</h3>
      <a-input-search
        width="80%"
        v-model:value="blog.title"
        placeholder="搜索博客"
        enter-button="搜索"
        size="large"
        @search="onSearch"
      />
    </div>
    <div class="menu">
      <h3 class="border">快捷菜单</h3>
      <ul>
        <li
          v-for="item in _static.nav"
          :key="item.url"
          v-show="item.url !== '/home'"
          @click="gotoPage(item)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="hot">
      <h3 class="border">热门推荐</h3>
      <ul>
        <li v-for="item in hotBlog" :key="item.id" @click="toBlogDetail(item.id)">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';
import useStatic from "@/store/static";
import useBlog from "@/store/blog";
import useLayout from "@/store/layout";
import request from "@/http"
import { FIND_HOT_BLOG } from "@/http/api"
interface Item {
  url: string,
  title: string,
  show?: string
}
const router = useRouter()
const _static = useStatic();
const blog = useBlog();
const layout = useLayout();

const hotBlog = ref([])
const onSearch = () => {
  if(router.currentRoute.value.fullPath !== '/blog'){
    router.push('/blog')
  }
  blog.findBlog(blog.title,1,blog.classify)
};
const gotoPage = (item:Item) => {
  if(item.show && item.show === "showAboutMe"){
    layout.showAboutMe = true;
  }else if(item.show && item.show === "showAdmin"){
    layout.showAdmin = true;
  }else if(item.show && item.show === "showContact"){
    layout.showContact = true;
  }else{
    router.push(item.url)
  }
};
const toBlogDetail = (id:number) => {
  router.push(`/blogdetail/${id}`)
}
request.get({
  url: FIND_HOT_BLOG
}).then((res:any) => {
  if(res.data.code === 200){
    hotBlog.value = res.data.data;
  }
})
</script>

<style scoped lang="less">
.right {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 15px;
  margin-bottom: 15px;
  user-select: none;
  .search {
    background: #fff;
    :deep(.ant-input-group-wrapper) {
      width: 90%;
      margin: 10px 5% 20px 5%;
    }
  }
  .menu {
    margin: 20px 0;
    background: #fff;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 0 20px;
        background: #f0f3f3;
        color: #fa8f95;
        line-height: 30px;
        margin: 10px 15px;
        border-radius: 10px;
        cursor: pointer;
      }
      li:nth-child(3) {
        margin-left: 30px;
      }
      li:hover {
        background: #fa8f95;
        color: #f0f3f3;
      }
    }
  }
  .hot {
    background: #fff;
    line-height: 26px;
    font-size: 12px;
    cursor: pointer;
    li {
      padding-left: 15px;
    }
    li:hover {
      font-weight: 700;
    }
  }

  .border {
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
    border-left: 3px solid red;
    padding-left: 10px;
    margin-left: 2px;
  }
}
</style>
