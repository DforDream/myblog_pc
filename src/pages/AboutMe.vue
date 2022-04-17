<template>
  <div class="about_me">
    <div class="left">
      <AboutMeLeft />
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import AboutMeLeft from "@/components/aboutme/AboutMeLeft.vue";
</script>

<style scoped lang="less">
.about_me {
  width: 100vw;
  height: 100vh;
  display: flex;
  .left {
    width: 80px;
    height: 100%;
    border-right: 1px solid #f5f5f5;
    padding-top: 30px;
  }
}
</style>
