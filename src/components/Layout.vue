<template>
  <Loading />
  <div class="container">
    <div class="container_center" :class="layout.showAboutMe || layout.showAdmin || layout.showContact ? 'hide' : ''">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
    <transition name="from_left">
      <div class="aboutme" v-if="layout.showAboutMe">
        <AboutMe />
      </div>
    </transition>
    <transition name="from_right">
      <div class="aboutme" v-if="layout.showAdmin">
        <Login />
      </div>
    </transition>
    <transition name="from_right">
      <div class="contact" v-if="layout.showContact">
        <Contact />
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import useLayout from "@/store/layout";
import Loading from "./Loading.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Nav from "./Nav.vue";
import Main from "./Main.vue";
import AboutMe from "@/pages/AboutMe.vue";
import Login from "@/pages/Login.vue";
import Contact from "@/pages/Contact.vue";
const layout = useLayout();
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
  .contact {
    transition: all 1s;
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 20vw;
    height: 50vh;
    background: #fff;
    z-index: 999;
  }
}
.hide {
  overflow: hidden;
}
.from_left-enter-from,
.from_left-leave-to {
  transform: translateX(-100vw);
}
.from_left-enter-to,
.from_left-leave-from {
  transform: translateX(0);
}
.from_right-enter-from,
.from_right-leave-to {
  transform: translateX(100vw);
}
.from_right-enter-to,
.from_right-leave-from {
  transform: translateX(0);
}

</style>
