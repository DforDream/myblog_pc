<template>
  <Loading />
  <div class="container">
    <div class="container_center" :class="layout.showAboutMe ? 'hide' : '' ">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
    <transition name="move">
      <div class="aboutme" v-if="layout.showAboutMe">
      <AboutMe />
    </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import  useLayout from '@/store/layout';
import Loading from "./Loading.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Nav from "./Nav.vue";
import Main from "./Main.vue";
import AboutMe from '@/pages/AboutMe.vue'
const layout = useLayout()
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 100vh;
  background: #ebebeb;
  .container_center {
    width: 960px;
    height: 100%;
    margin: 0 auto;
  }
  .aboutme {
    transition: all 1s;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    background: #fff;
  }
}
.hide {
  overflow: hidden;
}
.move-enter-from, .move-leave-to {
  transform: translateX(-100vw);
}
.move-enter-to, .move-leave-from {
  transform: translateX(0);
}
 
</style>
