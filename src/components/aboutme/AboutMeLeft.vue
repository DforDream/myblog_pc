<template>
  <div v-for="item in data" :key="item.url" @click="toPage(item.url)">
    <component
      :is="item.component"
      :class="item.url === activeUrl ? 'active' : ''"
    ></component>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { Space } from "ant-design-vue";
import {
  HomeFilled,
  IdcardFilled,
  BookFilled,
  AppleFilled,
  ReadFilled,
  ContactsFilled,
} from "@ant-design/icons-vue";
const router = useRouter();
const data = [
  {
    url: "/aboutme/home",
    component: HomeFilled,
  },
  {
    url: "/aboutme/me",
    component: IdcardFilled,
  },
  {
    url: "/aboutme/work",
    component: BookFilled,
  },
  {
    url: "/aboutme/project",
    component: AppleFilled,
  },
  {
    url: "/aboutme/web",
    component: ReadFilled,
  },
  {
    url: "/aboutme/contact",
    component: ContactsFilled,
  },
];
const activeUrl = ref("");
activeUrl.value = router.currentRoute.value.path;
const toPage = (url: string) => {
  activeUrl.value = url;
  router.push(url);
};
</script>

<style scoped lang="less">
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
