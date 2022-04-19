<template>
  <div class="about_me">
    <AboutMeMain />
    <div class="backhome" @click="toHome">
      <backward-filled />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import AboutMeMain from "@/components/aboutme/AboutMeMain.vue";
import { BackwardFilled } from '@ant-design/icons-vue';
import useLayout from '@/store/layout';
const router = useRouter();
const layout = useLayout();
const toHome = () =>{
  layout.showAboutMe = false
}
</script>

<style scoped lang="less">
.about_me {
  width: 100vw;
  height: 100vh;
  .backhome {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    animation: back .5s ease-in-out infinite;
    :deep(.anticon){
      width: 50px;
      margin: 0 auto;
      line-height: 50px;
      font-size: 26px;
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
