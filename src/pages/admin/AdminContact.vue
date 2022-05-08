<template>
  <div class="admin_contact">
    <div class="left">
      <div v-for="item in user" :key="item">
        {{ item }}
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import type { Ref } from "vue";

interface DataArr {
  id: number;
  title: string;
  isAdmin: boolean;
  time: string;
  isLoading: boolean;
}
const user = ref([])
const dataArr:Ref<DataArr[]> = ref([])
const time = () => {
  const date = new Date();
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${
    date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
  }:${date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`}`;
};
const socket = new WebSocket(`${import.meta.env.VITE_BASE_WS}`)
socket.onopen = () => {
  // socket.send(JSON.stringify(''))
}
socket.onmessage = (res:any) => {
  console.log(res)
  const data = JSON.parse(res.data)
  user.value = data.user
  dataArr.value = data.data
}
</script>

<style scoped lang='less'>
.admin_contact {
  display: flex;
  width: 100%;
  height: 100%;
  .left {
    width: 200px;
    border-right: 1px solid #eee;
  }
  .right {
    flex: 1;
  }
}
</style>