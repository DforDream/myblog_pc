<template>
<div class="msgboard">
  <template v-if="msgboard.allMsgboard.length !== 0">
    <template v-for="item in msgboard.allMsgboard" :key="item.id">
    <p>{{ item.msgboard }}</p>
  </template>
  </template>
  <template v-else>
    <p>暂时还没有留言，留个言鼓励下ta吧！！！</p>
  </template>
  <a-pagination class="pagination" :v-model:current="msgboard.current" :total="msgboard.total" hideOnSinglePage @change="change" />
  <a-input :disabled="isDisable" v-model:value="content" show-count :maxlength="100" @pressEnter="handleContact" class="input" size="large" placeholder="添加一条留言，鼓励下ta吧！！！回车键添加留言" />
</div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import useMsgboard from '@/store/msgboard';
import request from "@/http";
import { ADD_MSGBOARD } from '@/http/api';
import { message } from 'ant-design-vue';

const msgboard = useMsgboard();
const content = ref('')
const isDisable = ref(false)
const handleContact = () => {
  request.post({
    url: ADD_MSGBOARD,
    data: {
      msgboard: content.value
    }
  }).then((res:any) => {
    if(res.data.code === 200){
      message.success(res.data.message);
      content.value = ''
      isDisable.value = true;
      setTimeout(() => {
        isDisable.value = false;
      },1000 * 60)
      msgboard.getShowMsgboard()
    }else{
      message.error(res.data.message);
    }
  })
}
const change = (current: number) => {
  msgboard.getShowMsgboard(current)
}
msgboard.getShowMsgboard()
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
  .pagination {
    float: right;
    margin: 20px 0;
  }
}
</style>