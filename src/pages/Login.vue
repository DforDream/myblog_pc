<template>
  <div class="login">
    <div class="main">
      <a-form
        :model="user"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 10 }"
        autocomplete="off"
        @keydown.enter="login"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input v-model:value="user.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password v-model:value="user.password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 6, span: 12 }">
          <a-button type="primary" :loading="isLoading" @click="login"
            >登录</a-button
          >
        </a-form-item>
      </a-form>
    </div>
    <div class="backhome" @click="toHome">
      <forward-outlined />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { ForwardOutlined } from "@ant-design/icons-vue";
import useLayout from "@/store/layout";
import request from "@/http";
import { message } from "ant-design-vue";
const layout = useLayout();
const router = useRouter();
const user = reactive({
  username: "",
  password: "",
});
request
  .get({
    url: "/user/isadmin",
  })
  .then((res: any) => {
    if (res.data && res.data.token === sessionStorage.getItem("adminToken")) {
      user.username = "admin";
      user.password = "dxp19961104";
    }
  });
const isLoading = ref(false);
const toHome = () => {
  layout.showAdmin = false;
};
const login = () => {
  console.log('123')
  if (user.username && user.password) {
    isLoading.value = true;
    request
      .post({
        url: "/user/login",
        data: user,
      })
      .then((res: any) => {
        isLoading.value = false;
        if (res.data.code && res.data.code === 200) {
          message.success(res.data.message);
          user.username = "";
          user.password = "";
          sessionStorage.setItem("adminToken", res.data.token);
          router.push("/admin");
        } else {
          message.warning(res.data.message);
        }
      });
  }
};
</script>

<style scoped lang="less">
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("@/assets/login_bg.gif") no-repeat;
  background-size: cover;
  .main {
    position: absolute;
    width: 600px;
    height: 300px;
    bottom: 30%;
    right: 10%;
    background: #fff;
    padding-top: 50px;
    :deep(.ant-input-group-wrapper) {
      width: 60%;
      margin-left: 20%;
      margin-top: 20px;
    }
    :deep(.ant-btn) {
      width: 60%;
      margin-left: 20%;
      margin-top: 20px;
    }
  }
  .backhome {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
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
      color: #fff;
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
