<template>
  <div class="home">
    <BlogList :data="hotBlog" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import BlogList from "@/components/BlogList.vue";
import { FIND_HOT_BLOG } from '@/http/api';
import request from '@/http';
const hotBlog = ref([])
request.get({
  url: FIND_HOT_BLOG
}).then((res:any) => {
  if(res.data.code === 200){
    hotBlog.value = res.data.data
  }
})
</script>

<style scoped lang="less">
.home {
  user-select: none;
}
</style>
