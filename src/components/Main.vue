<template>
  <div class="main">
    <div class="main_left">
      <router-view></router-view>
    </div>
    <div class="main_right">
      <MainRight />
    </div>
  </div>
</template>
<script setup lang="ts">
import MainRight from "./Main_right.vue";
</script>

<style scoped lang="less">
.main {
  width: 100%;
  display: flex;
  .main_left {
    flex: 2.5;
    margin-right: 10px;
  }
  .main_right {
    flex: 1;
  }
}
</style>
