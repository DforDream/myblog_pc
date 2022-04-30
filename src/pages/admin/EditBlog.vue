<template>
  <div class="write_blog">
    <a-form
      :model="blogState"
      @finish="addBlog"
      :rules="formRules"
      class="blog"
    >
      <a-form-item name="title">
        <a-input
          class="title"
          v-model:value="blogState.title"
          :bordered="false"
          placeholder="请输入博客标题..."
          size="large"
          :maxlength="20"
          showCount
          style="width: 600px"
        />
        <a-button class="add" type="primary" html-type="submit">发布</a-button>
      </a-form-item>

      <a-form-item name="classify">
        <a-select
          v-model:value="blogState.classify"
          placeholder="请选择博客分类..."
          style="width: 300px"
        >
          <a-select-option
            v-for="item in classify.allClassify"
            :key="item.id"
            :value="item.classify"
          >
            {{ item.classify }}
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item name="image">
        <a-upload
          v-model:file-list="blogState.image"
          list-type="picture"
          :maxCount="1"
          action="http://localhost:3300/blog/addimg"
          name="image"
          @change="changeImg"
          @remove="removeImg"
          :disabled="isDisable"
        >
          <a-button>
            <upload-outlined></upload-outlined>
            选择封面
          </a-button>
        </a-upload>
      </a-form-item>
    </a-form>
    <div class="content">
      <MdEditor v-model="blogState.content" />
    </div>
  </div>
</template>
<script setup lang="ts">
// vue3 makedown 插件
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { message, UploadChangeParam } from "ant-design-vue";
import type { SelectProps } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { ref, reactive, computed } from "vue";
import request from "@/http";
import useClassify from "@/store/classify";
import { DEL_IMAGE,EDIT_BLOG } from "@/http/api";
interface BlogState {
  title: string;
  classify: string | null;
  image: any[];
  content: string;
}
// 获取传入的props
const props = defineProps(["data","toClose"]);
const formRules = {
  title: [{ required: true, message: "博客标题不能为空" }],
  classify: [{ required: true, message: "博客分类不能为空" }],
  image: [{ required: true, message: "博客封面图不能为空", type: "array" }],
  content: [{ required: true, message: "博客内容不能为空" }],
};
const blogState: BlogState = reactive({
  title: "",
  classify: null,
  image: [],
  content: "",
});
const imgPath = ref("");
const classifyOptions = ref<SelectProps["options"]>([]);
const classify = useClassify();
const addBlog = () => {
  request
    .post({
      url: EDIT_BLOG,
      data: {
        title: blogState.title,
        classify: blogState.classify,
        content: blogState.content,
        imgpath: imgPath.value,
        blogpath: props.data.blogpath,
        id: props.data.id
      },
    })
    .then((res: any) => {
      if (res.data.code === 200) {
        message.success(res.data.message);
        // blogState.title = "";
        // blogState.classify = null;
        // blogState.content = "";
        // blogState.image = [];
        // imgPath.value = "";
        props.toClose()
      } else {
        message.error(res.data.message);
      }
    });
};
const changeImg = (info: UploadChangeParam) => {
  if (imgPath.value) {
    request.post({
      url: DEL_IMAGE,
      data: {
        path: imgPath.value,
      },
    });
    imgPath.value = "";
  }
  if (info.file.status === "done") {
    imgPath.value = info.file.response.path;
  }
};
const removeImg = () => {
  request
    .post({
      url: DEL_IMAGE,
      data: {
        path: imgPath.value,
      },
    })
    .then((res: any) => {
      if (res.data.code === 200) {
        message.success(res.data.message);
      } else {
        message.success("删除失败");
      }
    });
  imgPath.value = "";
};
classify.getAllClassify();
const isDisable = computed(() => {
  return blogState.title === "" ||
    blogState.classify === null ||
    blogState.content === ""
    ? true
    : false;
});
blogState.title = props.data.title;
blogState.classify = props.data.classify;
imgPath.value = props.data.imgpath;
blogState.image.push({
  uid: "-1",
  name: "image.png",
  status: "done",
  url: `${import.meta.env.VITE_BASE_URL}${props.data.imgpath}`,
});

request
  .get({
    url: "/blog/getblog",
    data: {
      blogpath: props.data.blogpath,
    },
  })
  .then((res: any) => {
    blogState.content = res.data.data;
  });
</script>

<style scoped lang="less">
.write_blog {
  height: 100%;
  display: flex;
  flex-direction: column;
  .blog {
    .title {
      :deep(.ant-input) {
        color: #333;
        font-size: 26px;
        font-weight: 700;
      }
    }
    .add {
      float: right;
      margin-right: 20px;
      width: 120px;
      height: 50px;
      font-size: 16px;
    }
  }
  .content {
    flex: 1;
    :deep(.md) {
      height: 100%;
    }
  }
}
</style>
