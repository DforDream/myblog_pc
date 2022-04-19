<template>
  <div class="main">
    <div class="left">
      <div v-for="item in data" :key="item.url" @click="toPage(item.id)">
        <component
          :is="item.component"
          :class="item.id === activeId ? 'active' : ''"
        ></component>
      </div>
    </div>
    <div class="main">
      <component :is="showComponent"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from "vue";
import type { Component } from 'vue';
import { Space } from "ant-design-vue";
import {
  HomeFilled,
  IdcardFilled,
  BookFilled,
  AppleFilled,
  ReadFilled,
  ContactsFilled,
} from "@ant-design/icons-vue";
import Home from '@/pages/aboutme/Home.vue';
import Me from '@/pages/aboutme/Me.vue';
import Work from '@/pages/aboutme/Work.vue';
import Project from '@/pages/aboutme/Project.vue';
import Web from '@/pages/aboutme/Web.vue';
import Contact from '@/pages/aboutme/Contact.vue';
const data = [
  {
    id: 0,
    showComponent: Home,
    component: HomeFilled,
  },
  {
    id: 1,
    showComponent: Me,
    component: IdcardFilled,
  },
  {
    id: 2,
    showComponent: Work,
    component: BookFilled,
  },
  {
    id: 3,
    showComponent: Project,
    component: AppleFilled,
  },
  {
    id: 4,
    showComponent: Web,
    component: ReadFilled,
  },
  {
    id: 5,
    showComponent: Contact,
    component: ContactsFilled,
  },
];
const activeId = ref(0);
const showComponent = shallowRef(Home);
const toPage = (id: number) => {
  activeId.value = id
  showComponent.value = data[id].showComponent
};
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 80px;
    height: 100%;
    border-right: 1px solid #f5f5f5;
    padding-top: 30px;
  }
  .right {
    flex: 1;
  }
}
:deep(.anticon) {
  display: inline-block;
  margin-left: 15px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #ebebeb;
  color: #67686d;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 20px;
}
.active {
  background: #383334;
  color: #eeecea;
}
</style>
