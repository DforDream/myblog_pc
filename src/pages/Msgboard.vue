<template>
<div class="msgboard">
  <p>暂时还没有留言，你可以添加一条留言，鼓励下他吧！！！</p>
  <p>留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言</p>
  <p>留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言</p>
  <p>留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言</p>
  <p>留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言</p>
  <p>留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言</p>
  <p>留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言</p>
  <a-input v-model:value="contact" show-count :maxlength="100" @pressEnter="handleContact" class="input" size="large" placeholder="添加一条留言，鼓励下他吧！！！回车键添加留言" />
</div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
const contact = ref('')
const handleContact = () => {
  console.log(contact.value)
}
</script>

<style scoped lang='less'>
.msgboard {
  margin-bottom: 15px;
  p {
    color: #333;
    line-height: 20px;
    border-bottom: 1px solid #ccc;
    margin: 5px 20px;
    padding: 10px 5px;
  }
  .input {
    position: sticky;
    bottom: 0;
  }
}
</style>