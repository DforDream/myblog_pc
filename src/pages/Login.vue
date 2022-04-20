<template>
  <div class="login">
    <div class="main">
      <div>
        用户名：<a-input v-model:value="username" placeholder="请输入用户名" />
      </div>
      <div>
        密码：
        <a-input-password v-model:value="password" placeholder="请输入密码" />
      </div>
    </div>
    <div class="backhome" @click="toHome">
      <forward-outlined />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ForwardOutlined } from "@ant-design/icons-vue";
import useLayout from "@/store/layout";
const layout = useLayout();
const toHome = () => {
  layout.showAdmin = false;
};
</script>

<style scoped lang="less">
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  .main {
    position: absolute;
    width: 600px;
    height: 300px;
    background: red;
    bottom: 30%;
    right: 10%;
  }
  .backhome {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    animation: back 0.5s ease-in-out infinite;
    :deep(.anticon) {
      width: 50px;
      margin: 0 auto;
      line-height: 50px;
      font-size: 26px;
      background: transparent;
      color: #333;
    }
  }
}
@keyframes back {
  0% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(5px);
  }
}
</style>
