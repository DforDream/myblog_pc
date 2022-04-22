<template>
  <div class="work">
    <h2><span>简历</span>一只小白u</h2>
    <div class="main">
      <div class="left">
        <a-timeline mode="right">
          <a-timeline-item>
            <h3>教育经历</h3>
          </a-timeline-item>
          <a-timeline-item>
            <div class="clearfix">
              <h3>阿里巴巴巴巴</h3>
              <p class="time">2020-0-22</p>
              <p class="des">
                嘻嘻嘻嘻嘻嘻喜爱嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻喜爱嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻喜爱嘻嘻嘻嘻嘻嘻嘻
              </p>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="clearfix">
              <h3>阿里巴巴巴巴</h3>
              <p class="time">2020-0-22</p>
              <p class="des claerfix">
                嘻嘻嘻嘻嘻嘻喜爱嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻喜爱嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻喜爱嘻嘻嘻嘻嘻嘻嘻
              </p>
            </div>
          </a-timeline-item>
        </a-timeline>
      </div>
      <div class="right">
        <a-timeline mode="left">
           <a-timeline-item>
            <h3>工作经历</h3>
          </a-timeline-item>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped lang="less">
.work {
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
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 60px;
    color: #333;
    .left {
      flex: 1;
    }
    .right {
      margin-left: 30px;
      flex: 1;
    }
    :deep(.anticon) {
      width: 0;
      height: 0;
    }
    h3 {
      font-size: 20px;
      font-weight: 700;
    }
    .time {
      font-size: 12px;
    }
    .des {
      float: right;
      font-size: 14px;
      width: 200px;
    }
  }
}
</style>
