<template>
  <div class="blog_detail">
    <a-button class="back" type="primary" @click="backTo">返回</a-button>
    <MdEditor v-model="content" previewOnly readOnly/> 
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import MdEditor from "md-editor-v3";
import { useRouter } from "vue-router";
import request from '@/http'
import { GET_BLOG_DETAIL } from "@/http/api";
const router = useRouter();
const content = ref('')
const id = router.currentRoute.value.params.id;
request.get({
  url: GET_BLOG_DETAIL,
  data: {
    id
  }
}).then((res:any) => {
  if(res.data.code === 200){
    content.value = res.data.data;
  }
})
const backTo = () => {
  router.back()
}
</script>

<style scoped lang="less">
.blog_detail {
  padding: 0 20px;
  background: #fff;
  margin-bottom: 20px;
  .back {
    margin: 10px;
  }
}
</style>
