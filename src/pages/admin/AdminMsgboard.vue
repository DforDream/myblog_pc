<template>
  <div class="admin_msgboard">
    <a-table
      :columns="columns"
      :data-source="msgboard.allMsgboard"
      :pagination="false"
      bordered
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'isshow'">
          <a-switch
            v-model:checked="record.isshow"
            checked-children="显示"
            un-checked-children="隐藏"
            :checkedValue="1"
            :unCheckedValue="0"
            @change="switchChange(record)"
          />
        </template>
      </template>
    </a-table>
    <a-pagination
      class="pagination"
      :v-model:current="msgboard.current"
      :total="msgboard.total"
      hideOnSinglePage
      @change="change"
    />
  </div>
</template>
<script setup lang="ts">
import useMsgboard from "@/store/msgboard";
import type { Msgboard } from "@/store/msgboard";
import request from "@/http";
import { CHANGE_ISSHOW } from '@/http/api';
import { message } from "ant-design-vue";
const msgboard = useMsgboard();
const columns = [
  {
    title: "留言",
    dataIndex: "msgboard",
  },
  {
    title: "是否显示",
    dataIndex: "isshow",
  },
];
const change = (current: number) => {
  msgboard.getAllMsgboard(current);
};
const switchChange = (record:Msgboard) => {
  request.get({
    url: CHANGE_ISSHOW,
    data: record
  }).then((res:any) => {
    if(res.data.code === 200){
      message.success(res.data.message);
    }else{
      message.error(res.data.message);
    }
  })
}
msgboard.getAllMsgboard();
</script>

<style scoped lang="less">
.admin_msgboard {
  .pagination {
    float: right;
    margin: 20px 0;
  }
}
</style>
