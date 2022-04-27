<template>
  <a-button
    class="editable-add-btn"
    style="margin-bottom: 20px"
    @click="addClassify"
    size="large"
    type="primary"
    >添加分类</a-button
  >
  <a-table
    bordered
    :data-source="_classify.allClassify"
    :columns="columns"
    :pagination="false"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'classify'">
        <div class="editable-cell">
          <div
            v-if="editableData[record.id]"
            class="editable-cell-input-wrapper"
          >
            <a-input
              v-model:value="editableData[record.id].classify"
              @pressEnter="save(record.id)"
            />
            <check-outlined
              class="editable-cell-icon-check"
              @click="save(record.id)"
            />
          </div>
          <div v-else class="editable-cell-text-wrapper">
            {{ text || " " }}
            <edit-outlined
              class="editable-cell-icon"
              @click="edit(record.id)"
            />
          </div>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <a-popconfirm
          v-if="_classify.allClassify.length"
          title="确定删除吗？"
          @confirm="onDelete(record.id)"
        >
          <a>删除</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { computed, defineComponent, reactive, ref } from "vue";
import type { Ref, UnwrapRef } from "vue";
import { CheckOutlined, EditOutlined } from "@ant-design/icons-vue";
import request from "@/http";
import { message } from "ant-design-vue";
import useClassify from "@/store/classify";
interface DataItem {
  id: number;
  classify: string;
}

const columns = [
  {
    title: "分类",
    dataIndex: "classify",
  },
  {
    title: "操作",
    dataIndex: "operation",
  },
];
const editableData: UnwrapRef<Record<number, DataItem>> = reactive({});
const _classify = useClassify();
const addClassify = () => {
  _classify.allClassify.push({
    id: Infinity,
    classify: "",
  });
};
const edit = (id: number) => {
  editableData[id] = _classify.allClassify.filter((item) => id === item.id)[0];
};
const save = (id: number) => {
  const { classify } = editableData[id];
  request
    .post({
      url: "/blog/addclassify",
      data: { id, classify },
    })
    .then((res: any) => {
      if (res.data.code === 200) {
        message.success(res.data.message);
        delete editableData[id];
        _classify.getAllClassify();
      } else {
        message.error(res.data.message);
      }
    });
};

const onDelete = (id: number) => {
  request
    .post({
      url: "/blog/delclassify",
      data: {
        id,
      },
    })
    .then((res: any) => {
      if (res.data.code === 200) {
        message.success(res.data.message);
        _classify.getAllClassify();
      } else {
        message.error(res.data.message);
      }
    });
};
_classify.getAllClassify();
</script>
<style lang="less">
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
