<template>
  <div class="right">
    <div class="search">
      <h3 class="border">站内搜索</h3>
      <a-input-search
        width="80%"
        v-model:value="search"
        placeholder="搜索博客"
        enter-button="搜索"
        size="large"
        @search="onSearch"
      />
    </div>
    <div class="menu">
      <h3 class="border">快捷菜单</h3>
      <ul>
        <li
          v-for="item in _static.nav"
          :key="item.url"
          v-show="item.url !== '/home'"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="hot">
      <h3 class="border">热门推荐</h3>
      <ul>
        <li>如何制作个人博客</li>
        <li>如何制作个人博客</li>
        <li>如何制作个人博客</li>
        <li>如何制作个人博客</li>
        <li>如何制作个人博客</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import useStatic from "@/store/static";
import { InputSearch } from "ant-design-vue";
const _static = useStatic();
const search = ref("");
const onSearch = () => {};
</script>

<style scoped lang="less">
.right {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 15px;
  margin-bottom: 15px;
  user-select: none;
  .search {
    background: #fff;
    :deep(.ant-input-group-wrapper) {
      width: 90%;
      margin: 10px 5% 20px 5%;
    }
  }
  .menu {
    margin: 20px 0;
    background: #fff;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 0 20px;
        background: #f0f3f3;
        color: #fa8f95;
        line-height: 30px;
        margin: 10px 15px;
        border-radius: 10px;
        cursor: pointer;
      }
      li:nth-child(3) {
        margin-left: 30px;
      }
      li:hover {
        background: #fa8f95;
        color: #f0f3f3;
      }
    }
  }
  .hot {
    background: #fff;
    line-height: 26px;
    font-size: 12px;
    cursor: pointer;
    li {
      padding-left: 15px;
    }
    li:hover {
      font-weight: 700;
    }
  }

  .border {
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
    border-left: 3px solid red;
    padding-left: 10px;
    margin-left: 2px;
  }
}
</style>
