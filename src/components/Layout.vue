<template>
  <Loading />
  <div class="container">
    <div class="container_center">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  </div>
</template>
<script setup lang="ts">
import Loading from "./Loading.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Nav from "./Nav.vue";
import Main from "./Main.vue";
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
}
</style>
