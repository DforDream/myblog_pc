<template>
  <div class="contact_main">
    <close-outlined class="close" @click="close" />
    <div class="wrap" ref="wrap">
      <div v-for="item in dataArr" :key="item.id" class="clearfix">
        <p class="time" :class="item.float === 'right' ? 'right' : 'left'">{{ item.time }}</p>
        <p class="content" :style="{'background': item.float === 'right' ? '#ff725650' : '#53868a50'}" :class="item.float === 'right' ? 'right' : 'left'">{{ item.title }}</p>
      </div>
    </div>
    <a-input v-model:value="title" size="large" @pressEnter="submit" class="input" />
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from "vue";
import type { Ref } from 'vue';
import useLayout from "@/store/layout"
import { CloseOutlined } from '@ant-design/icons-vue'

interface DataArr {
  id: number,
  title: string,
  float: string,
  time: string
}
const socket = new WebSocket(`ws://localhost:3301/${new Date().getTime()}`)
socket.onopen
socket.onmessage = (res:any) => {
   dataArr.value.push({
      id: id.value,
      title: res.data,
      float: 'left',
      time: time()
  })
  id.value++
}

const layout = useLayout()
const wrap:Ref<HTMLDivElement | null> = ref(null)
const title = ref("");
const dataArr:Ref<DataArr[]> = ref([]);
const id = ref(0)

const time = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
const submit = () => {
  // console.log((wrap.value as HTMLDivElement).scrollHeight)
  // console.log((wrap.value as HTMLDivElement).scrollTop)
  if(title.value){
    dataArr.value.push({
      id: id.value,
      title: title.value,
      float: 'right',
      time: time()
    })
    // socket.send(JSON.stringify(title.value))
    socket.send(JSON.stringify({'time': `${id.value}`}))
    title.value = ''
    id.value++
  }
  nextTick(() => {
    (wrap.value as HTMLDivElement).scrollTop = (wrap.value as HTMLDivElement).scrollHeight
  })
};
const close = () => {
  layout.showContact = false
}


</script>

<style scoped lang="less">
.contact_main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .close {
    font-size: 16px;
    display: block;
    margin: 10px;
    align-self: end;
    cursor: pointer;
  }
  .wrap {
    flex: 1;
    overflow-y: auto;
  }
  .content {
    padding: 0 15px;
    line-height: 30px;
    margin: 10px;
    color: #333;
    border-radius: 5px;
    clear: both;
  }
  .time {
    text-align: right;
    padding: 0 15px;
    font-size: 12px;
  }
  .right {
    float: right;
  }
  .left {
    float: left;
  }
}
</style>
