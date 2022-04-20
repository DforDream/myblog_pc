<template>
  <div class="contact">
    <h2><span>联系</span>一只小白u</h2>
    <div class="main">
      <div class="main_contact">
        <h3>联系方式</h3>
        <p>手机:18720776336</p>
        <p>邮箱:1500549325@qq.com</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped lang="less">
.contact {
  width: 100%;
  height: 100%;
  background: #fff;
  h2 {
    height: 100px;
    margin: 0 20px;
    border-bottom: 1px solid #ddd;
    line-height: 100px;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    span {
      display: inline-block;
      margin-top: -3px;
      margin-right: 30px;
      font-size: 40px;
      font-weight: 700;
      border-bottom: 4px solid #ddd;
    }
  }
  .main {
    width: 100%;
    height: 100%;
    color: #333;
    position: relative;
    .main_contact {
      width: 300px;
      padding: 40px 20px;
      position: absolute;
      top: 50%;
      right: 60px;
      transform: translateY(-50%);
      color: #333;
      h3 {
        font-size: 30px;
        font-weight: 700;
        line-height: 80px;
      }
      p {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
}
</style>


