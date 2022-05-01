<template>
  <div class="me">
    <div class="skill">
      <h2>专业技能</h2>
      <p>1. 我有三年的前端开发经验，我喜欢干净优雅的代码设计；</p>
      <p>2. 我熟悉HTML、CSS、Javascript等Web开发技术，熟悉页面结构和布局，有良好的代码编写习惯；</p>
      <p>3. 熟悉jQuery、bootstrap、swiper、echarts等类库；</p>
      <p>4. 熟悉Vue、Vue3、React编写代码，掌握vant-ui，element-ui，ant-Dedign，Mint-ui，iView等组件库的使用；</p>
      <p>5. 熟悉react函数式组件开发，Hooks的使用，高阶组件的使用和编写，及react组件的性能优化；</p>
      <p>6. 熟悉vue组件封装，拥有独立封装vue组件的能力；</p>
      <p>7. 熟悉小程序原生开发，了解uni-app、Taro混合开发框架，熟悉其常用的组件；</p>
      <p>8. 熟悉Photshop，熟悉Photshop中的各项基本功能及操作；</p>
      <p>9. 掌握webpack打包工具；</p>
      <p>10. 掌握http，https，tcp/ip协议以及网络方面的知识，能够配合后台开发人员实现需求页面和功能，维护及优化前端页面性能；</p>
      <p>11. 掌握node.js、mongodb、mysql、php，能利用 nodejs 搭建简单的服务器；</p>
      <p>12. 了解TypeScript的使用，了解装饰编写。</p>
    </div>
    <div class="introduction">
      <h2>自我简介</h2>
      <p>　　本人为人开朗乐观，热心助人，交际能力强，待人接物，正直处世；在业余生活中，热爱运动，热爱各种体育竞技项目，能够积极参与到各类学、艺、体活动中。</p>
      <p>　　在工作方面，有较强的动手实操能力，对待工作认真负责，毫不拖沓，吃苦耐劳，抗压能力强，有3年前端的从业经验；专业素质良好，善于发现，并且能从容面对调整来自各方面难题。个人认为，即使不在同一个起跑线上，依靠后天的奋斗，我一样能脱颖而出!</p>
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
      color: #000;
      font-size: 16px;
    }
}
</style>
