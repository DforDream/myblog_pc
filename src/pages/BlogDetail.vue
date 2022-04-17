<template>
  <div>blogdetail /{{ id }}</div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const id = router.currentRoute.value.params.id;
console.log(router.currentRoute.value.params.id);
</script>

<style scoped lang="less"></style>
