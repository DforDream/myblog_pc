<template>
  <div class="contact_main">
    <close-outlined class="close" @click="close" />
    <div class="wrap" ref="wrap">
      <div v-for="item in dataArr" :key="item.time" class="clearfix">
        <p class="time" :class="item.isAdmin ? 'left' : 'right'">
          {{ item.time }}
        </p>
        <div class="loading" :class="item.isAdmin ? 'left' : 'right'">
          <a-spin
            class="spin"
            :indicator="indicator"
            :spinning="item.isLoading"
          />
          <p
            class="content"
            :style="{ background: item.isAdmin ? '#53868a50' : '#ff725650' }"
          >
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
    <a-input
      ref="input"
      v-model:value="title"
      size="large"
      @pressEnter="submit"
      class="input"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick, h } from "vue";
import type { Ref } from "vue";
import useLayout from "@/store/layout";
import { CloseOutlined, LoadingOutlined } from "@ant-design/icons-vue";

interface DataArr {
  id: number;
  title: string;
  isAdmin: boolean;
  time: string;
  isLoading: boolean;
}
const socket = new WebSocket(
  `${import.meta.env.VITE_BASE_WS}/${localStorage.getItem("userId")}`
);
socket.onopen
socket.onmessage = (res: any) => {
  const data = JSON.parse(res.data);
  dataArr.value = data.data[0].data;
  layout.showContact = true
  nextTick(() => {
    if (wrap.value) {
      (wrap.value as HTMLDivElement).scrollTop = (
        wrap.value as HTMLDivElement
      ).scrollHeight;
    }
  });
};
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "24px",
  },
});
const layout = useLayout();
const wrap: Ref<HTMLDivElement | null> = ref(null);
const title = ref("");
const dataArr: Ref<DataArr[]> = ref([]);
const id = new Date().getTime();
const input: Ref<HTMLInputElement | null> = ref(null);
if (!localStorage.getItem("userId")) {
  localStorage.setItem("userId", `${id}`);
}

const time = () => {
  const date = new Date();
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${
    date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
  }:${date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`}`;
};
const submit = () => {
  // console.log((wrap.value as HTMLDivElement).scrollHeight)
  // console.log((wrap.value as HTMLDivElement).scrollTop)
  if (title.value) {
    dataArr.value.push({
      id: +(localStorage.getItem("userId") as string),
      title: title.value,
      isAdmin: false,
      time: time(),
      isLoading: true,
    });
    // socket.send(JSON.stringify(title.value))
    socket.send(
      JSON.stringify({
        id: localStorage.getItem("userId"),
        title: title.value,
        isAdmin: false,
        time: time(),
        isLoading: false,
      })
    );
    title.value = "";
  }
  nextTick(() => {
    (wrap.value as HTMLDivElement).scrollTop = (
      wrap.value as HTMLDivElement
    ).scrollHeight;
  });
};
const close = () => {
  layout.showContact = false;
};
setTimeout(() => {
  input.value?.focus()
},1000)
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
  .loading {
    display: flex;
    clear: both;
    .content {
      // flex: 1;
      padding: 0 15px;
      line-height: 30px;
      margin: 10px;
      color: #333;
      border-radius: 5px;
      // clear: both;
    }
    .spin {
      margin-left: 10px;
      align-self: center;
      float: right;
      margin-top: 10px;
    }
  }
}
</style>
