<template>
  <div class="footer">
    <div class="title">一只小白u <span>の</span> 博客</div>
    <div class="des">本站由一只小白u提供技术支持</div>
    <div class="copy">本站所有解释权归一只小白u所有</div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="less">
.footer {
  width: 100%;
  height: 150px;
  background: #53868a;
  color: #fffffa;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    font-size: 28px;
    margin-left: 10px;
    margin: 15px 0 30px 0;
    span {
      font-size: 50px;
      color: #ff693d;
    }
  }
  .des,
  .copy {
    line-height: 20px;
  }
}
</style>
