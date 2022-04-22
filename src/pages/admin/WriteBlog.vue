<template>
  <div class="write_blog">
    <div class="blog">
      <a-input
        class="title"
        v-model:value="blog.title"
        :bordered="false"
        placeholder="请输入博客标题..."
        size="large"
        :maxlength="20"
        showCount
      />
      <a-button class="add" type="primary" @click="add">发布</a-button>
      <div class="image">
        <a-upload v-model:file-list="blog.image" list-type="picture" :maxCount="1" action="http://localhost:3300">
          <a-button>
            <upload-outlined></upload-outlined>
            选择封面
          </a-button>
        </a-upload>
      </div>
    </div>
    <div class="content">
      <MdEditor v-model="blogContent" />
    </div>
  </div>
</template>
<script setup lang="ts">
// vue3 makedown 插件
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import type { UploadProps } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
import request from '@/http'
const blog = reactive({
  title: "",
  image: [],
});
const blogContent = ref("");
const add = () => {
  request.post({
    url: '/blog/add',
    data: {
      title: blog.title,
      image: blog.image,
      content: blogContent.value
    }
  })
}
</script>

<style scoped lang="less">
.write_blog {
  height: 100%;
  display: flex;
  flex-direction: column;
  .blog {
    .title {
      :deep(.ant-input ){
        font-size: 26px;
        color: #333;
        font-weight: 700;
      }
      width: 60%;
    }
    .add {
      float: right;
    }
    .image {
      margin: 5px 0;
      width: 150px;
    }
  }
  .content {
    flex: 1;
    :deep(.md){
      height: 100%;
    }
  }
}
</style>
