<template>
  <div class="header">
    <div class="logo">
      <a-image :preview="false" :src="logo" />
    </div>
    <div class="title">一只小白u <span>の</span> 博客</div>
    <div class="wellKnown">
      <div v-html="formatWellKnown"></div>
    </div>
  </div>
  <div></div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import logo from "@/assets/logo.webp";
const wellKnown =
  "人生，就像一盒巧克力，你永远不知道下一块会是什么味道！---《阿甘正传》";
const formatWellKnown = computed(() => {
  const arr = wellKnown.trim().split(/，|。|！/);
  const str = arr.map((item) => `<div>${item}</div>`);
  return str.join("");
});
</script>

<style scoped lang="less">
.header {
  width: 100%;
  min-height: 150px;
  background: #53868a;
  display: flex;
  align-items: center;
  color: #fffffa;
  user-select: none;
  .logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 20px;
    overflow: hidden;
  }
  .title {
    flex: 1;
    font-size: 28px;
    margin-left: 10px;
    span {
      font-size: 50px;
      color: #ff693d;
    }
  }
  .wellKnown {
    margin-right: 50px;
    text-align: right;
    line-height: 24px;
  }
}
</style>
