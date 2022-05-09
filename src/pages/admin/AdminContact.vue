<template>
  <div class="admin_contact">
    <div class="main_left">
      <div v-for="item in dataArr" :key="item.id" @click.self="changeUser(item.id)" class="user_item" :class="item.id === userId ? 'active' : ''">
        {{ item.id }}
        <CloseOutlined class="close" @click="close(item.id)" />
      </div>
    </div>
    <div class="main_right">
      <div class="wrap" ref="wrap">
        <div v-for="item in rightArr" :key="item.time" class="clearfix">
          <p class="time" :class="item.isAdmin ? 'right' : 'left'">
            {{ item.time }}
          </p>
          <div class="loading" :class="item.isAdmin ? 'right' : 'left'">
            <a-spin
              class="spin"
              :indicator="indicator"
              :spinning="item.isLoading"
            />
            <p
              class="content"
              :style="{ background: item.isAdmin ? '#ff725650' : '#53868a50' }"
            >
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
      <a-input
        v-model:value="title"
        size="large"
        @pressEnter="submit"
        class="input"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, h, nextTick } from "vue";
import type { Ref } from "vue";
import { CloseOutlined, LoadingOutlined } from "@ant-design/icons-vue";

interface RightArr {
  id: number;
  title: string;
  isAdmin: boolean;
  time: string;
  isLoading: boolean;
}
interface DataArr {
  id: number;
  wss: WebSocket;
  data: RightArr;
}
const dataArr: Ref<DataArr[]> = ref([]);
const rightArr: Ref<RightArr[]> = ref([]);
const userId: Ref<null | number> = ref(null);
const title = ref("");
const wrap: Ref<HTMLDivElement | null> = ref(null);
const time = () => {
  const date = new Date();
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${
    date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
  }:${date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`}`;
};
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "24px",
  },
});
const socket = new WebSocket(`${import.meta.env.VITE_BASE_WS}/admin`);
socket.onopen;
socket.onmessage = (res: any) => {
  const data = JSON.parse(res.data);
  dataArr.value = data.user;
  if (userId.value) {
    const arr = dataArr.value.filter((item) => item.id === userId.value);
    rightArr.value = arr[0].data as unknown as RightArr[];
    nextTick(() => {
      (wrap.value as HTMLDivElement).scrollTop = (
        wrap.value as HTMLDivElement
      ).scrollHeight;
    });
  }else{
    rightArr.value = []
  }
};

const changeUser = (id: number) => {
  userId.value = id;
  const res = dataArr.value.filter((item) => item.id === id);
  rightArr.value = res[0].data as unknown as RightArr[];
  nextTick(() => {
    (wrap.value as HTMLDivElement).scrollTop = (
      wrap.value as HTMLDivElement
    ).scrollHeight;
  });
};
const submit = () => {
  if (title.value) {
    rightArr.value.push({
      id: userId.value as number,
      title: title.value,
      isAdmin: true,
      time: time(),
      isLoading: true,
    });
    socket.send(
      JSON.stringify({
        id: userId.value,
        title: title.value,
        isAdmin: true,
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
const close = (id:number) => {
  userId.value = null;
  socket.send(JSON.stringify({'closeId': id}))
}
</script>

<style scoped lang="less">
.admin_contact {
  display: flex;
  width: 100%;
  height: 100%;
  // background: #eee;
  .main_left {
    width: 200px;
    border-right: 1px solid #eee;
    .user_item {
      position: relative;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: #1890ff;
        color: #fff;
      }
      .close {
        position: absolute;
        top: 15px;
        right: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        font-size: 16px;
        text-align: center;
        line-height: 26px;
        &:hover {
          background: #fff;
          color: #1890ff;
        }
      }
    }
    .active {
      background: #1890ff;
      color: #fff;
    }
   
  }
  .main_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .wrap {
      flex: 1;
      overflow-y: auto;
    }
    .input {
      margin-bottom: 20px;
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
}
</style>
