<template>
  <div class="me">
    <div class="skill">
      <h2>专业技能</h2>
      <p>我有三年的前端开发工程师经验，我喜欢干净优雅的代码设计。我对现代网站的Node.js、CSS3、HTML5、VUE.js等有许多的开发经验。</p>
    </div>
    <div class="introduction">
      <h2>自我简介</h2>
      <p>自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介</p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="less">
.me {
  position: relative;
  width: 100%;
  height: 100%;
  .skill {
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    width: 500px;
    padding: 40px 30px;
    background: #fff;
  }
  .introduction {
    width: 500px;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    padding: 40px 30px;
  }
  h2 {
      font-size: 26px;
      font-weight: 700;
      line-height: 50px;
      color: #333;
    }
    p {
      line-height: 30px;
      color: #333;
      font-size: 16px;
    }
}
</style>
