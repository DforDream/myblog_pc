<template>
  <div class="project">
    <h2><span>工作经历</span>一只小白u</h2>
    <div class="main">
      <div class="left">
        <a-timeline mode="right">
          <a-timeline-item>
            <div class="clearfix">
              <h3>面试登记前端+后台系统</h3>
              <p class="time">
                项目技术：vue3 + vuex + vue-router + Ant-Design-Vue + TypeScript
              </p>
              <div class="des" :style="{'float': 'right'}">
                <p>项目职责： 1.独立完成该项目的全部功能模块。</p>
                <p>2.根据UI设计师的设计稿，完成99%还原度的前端页面。</p>
                <p>
                  3.多端适配，通过navigator.userAgent属性判断是否为pc端，在根据路由守卫阻止进入移动端页面，做到一套代码多端使用的作用。
                </p>
                <p>
                  4.后台系统下载模块，根据后台返回的字节流，进行下载处理。得到一个execl文件，方便hr查看和统计。
                </p>
                <p>
                  5.模块及功能划分，因为该项目包含多个项目的整合，所以更加需要清晰的页面、模块、功能的划分，便于后续的维护和版本升级。
                </p>
              </div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="clearfix">
              <h3>车载微信小程序</h3>
              <p class="time">项目技术：原生小程序开发</p>
              <div class="des claerfix" :style="{'float': 'right'}">
                <p>项目职责： 1.独立完成小程序的全部功能模块。</p>
                <p>
                  2.首页字母快捷查询模块，将左侧导航、中间主产品区域、右侧字母快捷导航三个模块进行联动，并配合小程序滚动视图组件进行滚动动画处理。
                </p>
                <p>
                  3.搜索关键字查询结果高亮显示，通过关键字得到查询结果，对查询结果进行字符截取和拼接，并通过mark标签对关键字进行高亮显示。
                </p>
                <p>
                  4.视频播放模块，为配合需求方需求，通过原声组件封装视频组件，完成全屏、倍速播放、快进、快退等功能的实现及动画衔接。
                </p>
              </div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="clearfix">
              <h3>bpms系统</h3>
              <p class="time">项目技术：vue + vuex + vue-router + elementUI</p>
              <div class="des claerfix" :style="{'float': 'right'}">
                <p>项目职责： 1.对项目进行迭代，进行功能补全和逻辑完善。</p>
                <p>
                  2.鉴权模块，该系统分四种角色，实现手动添加左侧导航，并根据角色id实现动态导航组件。
                </p>
                <p>
                  3.地址栏地址与左侧菜单联动，通过全局路由守卫和vuex实现当地址栏url改变时，vuex内的左侧导航栏状态也动态改变。
                </p>
                <p>
                  4.日期选择模块，根据具体项目需求，通过原声标签实现日期组件和选中的日期区间背景高亮显示等功能。
                </p>
                <p>
                  5.完善项目其他bug，对项目进行模块划分和重构，使代码更加简洁和便于维护。
                </p>
              </div>
            </div>
          </a-timeline-item>
        </a-timeline>
      </div>
      <div class="right">
        <a-timeline mode="left">
          <a-timeline-item>
            <div class="clearfix">
              <h3>定制商城官网</h3>
              <p class="time">项目技术：JQuery + Swiper + 第三方平台接口</p>
              <div class="des">
                <p>
                  项目职责：1.对项目进行seo重构。主要使用JQuery框架、Swiper等第三方库实现页面的功能和效果，使用媒体查询实现页面的响应式布局。
                </p>
                <p>
                  2.数据请求模块。通过JQuery的ajax分装请求后台接口数据，将数据过滤并渲染。
                </p>
                <p>
                  3.登录、注册模块。通过第三方平台QQ、微信获得用户信息，实现第三方平台的快捷登录。
                </p>
                <p>
                  4.用户定制模块。通过canvas得到用户需求的定制样式，生成图片。
                </p>
              </div>
            </div>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="less">
.project {
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
    margin-left: 50px;
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
      margin-left: 30px;
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
      margin-top: 10px;
      font-size: 12px;
    }
    .des {
      margin-top: 15px;
      float: left;
      font-size: 16px;
      width: 50%;
      text-align: left;
    }
  }
}
</style>
