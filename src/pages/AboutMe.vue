<template>
  <div class="about_me">
    <div class="left">
      <div v-for="item in data" :key="item.id" @click="toPage(item.id)">
        <component
          :is="item.component"
          :class="item.id === activeId ? 'active' : ''"
        ></component>
      </div>
    </div>
    <div class="main">
      <transition name="main_move" mode="out-in">
        <component :is="showComponent"></component>
      </transition>
    </div>
    <div class="backhome" @click="toHome">
      <backward-filled />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from "vue";
import useLayout from "@/store/layout";
import {
  HomeFilled,
  IdcardFilled,
  BookFilled,
  AppleFilled,
  ReadFilled,
  ContactsFilled,
  BackwardFilled,
} from "@ant-design/icons-vue";
import Home from "@/pages/aboutme/Home.vue";
import Me from "@/pages/aboutme/Me.vue";
import Work from "@/pages/aboutme/Work.vue";
import Project from "@/pages/aboutme/Project.vue";
import Web from "@/pages/aboutme/Web.vue";
import Contact from "@/pages/aboutme/Contact.vue";
const data = [
  {
    id: 0,
    showComponent: Home,
    component: HomeFilled,
  },
  {
    id: 1,
    showComponent: Me,
    component: IdcardFilled,
  },
  {
    id: 2,
    showComponent: Work,
    component: BookFilled,
  },
  {
    id: 3,
    showComponent: Project,
    component: AppleFilled,
  },
  {
    id: 4,
    showComponent: Web,
    component: ReadFilled,
  },
  {
    id: 5,
    showComponent: Contact,
    component: ContactsFilled,
  },
];
const activeId = ref(0);
const showComponent = shallowRef(Home);
const flag = ref(false);
const layout = useLayout();
const toHome = () => {
  window.removeEventListener("mousewheel", mousewheel);
  layout.showAboutMe = false;
};
const toPage = (id: number) => {
  activeId.value = id;
  showComponent.value = data[id].showComponent;
};
const mousewheel = (e: WheelEventInit) => {
  if (flag.value) {
    return;
  } else {
    flag.value = true;
    if (e.deltaY && e.deltaY > 0) {
      activeId.value++
      if(activeId.value > data.length - 1){
        activeId.value = data.length - 1;
        showComponent.value = data[activeId.value].showComponent;
      }else{
        showComponent.value = data[activeId.value].showComponent;
      }
    }else if(e.deltaY && e.deltaY < 0){
      activeId.value--
      if(activeId.value < 0){
        activeId.value = 0;
        showComponent.value = data[activeId.value].showComponent;
      }else{
        showComponent.value = data[activeId.value].showComponent;
      }
    }
    setTimeout(() => {
      flag.value = false;
    }, 500);
  }
};
window.addEventListener("mousewheel", mousewheel);
</script>

<style scoped lang="less">
.about_me {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  .left {
    width: 80px;
    height: 100%;
    border-right: 1px solid #f5f5f5;
    padding-top: 30px;
  }
  .main {
    flex: 1;
    background: #f2f3f5;
    overflow: hidden;
    .main_move {
      transition: all 10s ease-in-out;
    }
  }
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
  :deep(.anticon) {
    display: inline-block;
    margin-left: 15px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #ebebeb;
    color: #67686d;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 15px;
    font-size: 20px;
    svg {
      margin-top: 15px;
    }
  }
  .active {
    background: #383334;
    color: #eeecea;
  }
/*   .main_move-enter-from {

  }
  .main_move-enter-to {

  } */
  .main_move-leave-from,.main_move-enter-to {
    transition: all .5s ease-in-out;
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .main_move-leave-to, .main_move-enter-from {
    transition: all .5s ease-in-out;
    transform: scale(0.5) translateY(-100vh);
    opacity: 0;
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
}
</style>
