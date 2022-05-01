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
              <h3>江西理工大学</h3>
              <p class="time">2015-9至2019.6</p>
              <p class="des right">
                在校期间，在学校的指导、⽼师的教诲、同学的帮助下，通过不断地学习理论知识和参与社会实践，将⾃⼰塑造成为了⼀个专业功底扎实、知识结构完善、适应能⼒、组织协调能⼒与沟通能⼒强、，具有团体精神的有为青年
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
          <a-timeline-item>
            <div class="clearfix">
              <h3>罗马仕科技有限公司</h3>
              <p class="time">2021.3-至今</p>
              <p class="des left">
                在职期间多次获得优秀员工称号，独立完成多个项目的从0到1的开发，并上线。
              </p>
            </div>
          </a-timeline-item>
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
      font-size: 14px;
      width: 200px;
    }
    .right {
      float: right;
    }
    .left {
      float: left;
    }
  }
}
</style>
