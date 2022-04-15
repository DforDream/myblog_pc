<template>
  <div class="loading" v-show="http.isLoading">
    <a-spin />
  </div>
  <h1>hello world my blog</h1>
  <a-button @click="save" type="primary">保存</a-button>
</template>

<script setup lang="ts">
import request, { cancelAllRequest, cancelRequest } from "@/http";
import { Spin } from "ant-design-vue";
import useHttp from "@/store/http";
const http = useHttp();
request
  .get({
    url: "/",
    interceptors: {
      requestInterceptors: (config) => {
        console.log("接口请求拦截");
        return config;
      },
      responseInterceptors: (res) => {
        console.log("接口响应拦截");
        return res;
      },
    },
  })
  .then((res) => {
    console.log(res);
  });
const save = async () => {
  const data = await request.post({
    url: "/save",
    data: {
      username: 123,
      password: 456,
    },
  });
  console.log(data);
};
</script>

<style scoped lang="less">
.loading {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  :deep(.ant-spin) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
  }
}
</style>
