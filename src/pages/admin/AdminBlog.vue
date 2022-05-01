<template>
  <div class="admin_blog">
    <div class="header">
      <a-button type="primary" size="large" @click="gotoWriteBlog"
        >添加博客</a-button
      >
      <a-input-search
        v-model:value="blog.title"
        placeholder="搜索博客"
        enter-button="搜索"
        size="large"
        style="width: 300px"
        @search="onSearch"
      />
    </div>
    <div class="main">
      <a-table
        :columns="columns"
        :data-source="blog.allBlog"
        bordered
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'operation'">
            <a @click="showDrawer(record)">编辑</a>
          </template>
          <template v-else-if="column.dataIndex === 'imgpath'">
            <a-image v-if="record.imgpath" :width="100" :src="base + record.imgpath" />
            <span v-else>该博客没有上传封面图</span>
          </template>
        </template>
      </a-table>
      <a-pagination
        class="pag"
        v-model:current="blog.current"
        :total="blog.total"
        @change="onChange"
        hideOnSinglePage
      />
    </div>
    <a-drawer
      v-model:visible="visible"
      class="custom-class"
      width="100%"
      title="编辑博客"
      placement="right"
      :mask="false"
      destroyOnClose
    >
      <WriteBlog :data="data" :toClose="close" />
    </a-drawer>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import request from "@/http";
import useBlog from "@/store/blog";
import { useRouter } from "vue-router";
import WriteBlog from "./WriteBlog.vue";
import type { Blog } from "@/store/blog";

const blog = useBlog();
const router = useRouter();
const base = import.meta.env.VITE_BASE_URL;
const columns = [
  {
    title: "博客标题",
    dataIndex: "title",
  },
  {
    title: "博客所属分类",
    dataIndex: "classify",
  },
  {
    title: "博客封面图",
    dataIndex: "imgpath",
  },
  {
    title: "操作",
    dataIndex: "operation",
  },
];
const visible = ref(false);
const data = ref({});
const onSearch = () => {
  blog.findBlog(blog.title);
};
const onChange = () => {
  blog.findBlog(blog.title, blog.current);
};
const gotoWriteBlog = () => {
  router.push("/admin/writeblog");
};
const showDrawer = (record:Blog) => {
  data.value = record
  visible.value = true;
};
blog.findBlog();
const close = () => {
  visible.value = false;
  blog.findBlog(blog.title, blog.current);
};
</script>

<style scoped lang="less">
.admin_blog {
  .header {
    display: flex;
    justify-content: space-between;
  }
  .main {
    margin-top: 20px;
    .pag {
      float: right;
      margin-top: 20px;
    }
  }
}
</style>
