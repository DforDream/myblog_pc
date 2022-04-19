<template>
  <div class="home">
    <h1>一只小白u</h1>
    <p>I AM A <span>Web Developer</span></p>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="less">
.home {
  flex: 1;
  position: relative;
  background: #f2f3f5;
  text-align: center;
  overflow-y: scroll;
  .center {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    h1 {
      font-size: 100px;
      line-height: 140px;
      font-weight: 700;
      color: #333;
    }
    p {
      font-size: 26px;
      color: #333;
      span {
        display: inline-block;
        background: #2f3332;
        color: #eee;
        padding: 5px;
      }
    }
  }
}
</style>
