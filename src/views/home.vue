<template>
  <Table :loading="loading"
         :columns="tableList.columns"
         :data="tableList.data"
         :total="tableList.totalNumber"
         :buttons="buttons"
         @page-change="handlePage"
         @handle-del="handleDel" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, createVNode } from 'vue';
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';

import Table from '../components/table.vue';
import mockTableData from '../mock/table';
import { loginApi } from '/@/serve/api/index';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    customRender: ({ text }) => text,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const buttons = [
  {
    text: '编辑',
    handleName: 'handle-edit',
  },
  {
    text: '删除',
    handleName: 'handle-del',
    type: 'warning',
  },
];

export default defineComponent({
  components: {
    Table,
  },

  setup() {
    const loading = ref(false);
    const tableList = reactive({
      columns,
      data: [],
      page: 0,
      pageSize: 20,
      totalNumber: 20,
    });

    const handlePage = (e) => {
      tableList.page = e.page;
      tableList.pageSize = e.pageSize;
    };

    const handleDel = (e) => {
      Modal.confirm({
        title: `Do you Want to delete ${e.name}?`,
        icon: createVNode(ExclamationCircleOutlined),
        okType: 'danger',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    };

    onMounted(() => {
      loginApi();
      tableList.data = mockTableData;
    });

    return {
      loading,
      tableList,
      buttons,
      handlePage,
      handleDel,
    };
  },
});
</script>
