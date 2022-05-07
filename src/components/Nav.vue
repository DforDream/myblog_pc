<template>
  <div class="nav">
    <ul>
      <li
        v-for="item in _static.nav"
        :key="item.url"
        :class="item.url === active ? 'active' : ''"
        @click="gotoPage(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
  <div class="image">
    <img :src="navImg" alt="" />
  </div>
</template>
<script setup lang="ts">
interface Item {
  url: string,
  title: string,
  show?: string
}
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import navImg from "@/assets/nav.webp";
import useStatic from "@/store/static";
import useLayout from "@/store/layout";
const _static = useStatic();
const layout = useLayout();
const active = ref("");
const router = useRouter();
const gotoPage = (item:Item) => {
  if(item.show && item.show === "showAboutMe"){
    layout.showAboutMe = true;
  }else if(item.show && item.show === "showAdmin"){
    layout.showAdmin = true;
  }else if(item.show && item.show === "showContact"){
    layout.showContact = true;
  }else{
    active.value = item.url;
    router.push(item.url)
  }
};
watch(router.currentRoute,() => {
  active.value = router.currentRoute.value.fullPath
})
active.value = router.currentRoute.value.fullPath
</script>

<style scoped lang="less">
.nav {
  width: 100%;
  height: 45px;
  background: #53868a;
  margin: 15px 0;
  border-radius: 10px 0 0 10px;
  ul {
    display: flex;
    color: #fffffa;
    li {
      user-select: none;
      line-height: 45px;
      border-radius: 10px;
      padding: 0 25px;
      cursor: pointer;
    }
    .active {
      background: #ff7256;
    }
  }
}
.image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  img {
    width: 100%;
  }
  margin-bottom: 30px;
}
</style>
