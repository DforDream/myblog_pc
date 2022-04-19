<template>
  <div class="blog">
    <div class="sort">
      <span class="active">全部</span>
      <span>html</span>
      <span>js</span>
      <span>css</span>
      <span>vue</span>
      <span>react</span>
      <span>node</span>
      <span>git</span>
      <span>mysql</span>
      <span>其他</span>
    </div>
    <Home />
  </div>
</template>
<script setup lang="ts">
import Home from "@/pages/Home.vue";
</script>

<style scoped lang="less">
.blog {
  width: 100%;
  .sort {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    position: sticky;
    top: -1px;
    margin-bottom: 15px;
    span {
      cursor: pointer;
      user-select: none;
      height: 30px;
      padding: 0 15px;
      margin: 10px;
      border: 1px solid #e0e1e6;
      border-radius: 15px;
      background: #fff;
      color: #333;
      line-height: 30px;
      text-align: center;
      font-weight: 700;
    }
    span:hover {
      background: #fa8f95;
      color: #f0f3f3;
    }
    .active {
      background: #e5615a;
      color: #fdf3f2;
    }
  }
}
</style>
