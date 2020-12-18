<template>
  <Table :columns="tableList.columns"
         :data="tableList.data"
         :total="tableList.totalNumber"
         @page-change="handlePage" />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';

import Table from '../components/table.vue';
import mockTableData from '../mock/table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
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

export default defineComponent({
  components: {
    Table,
  },

  setup() {
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

    onMounted(() => {
      tableList.data = mockTableData;
    });

    return {
      tableList,
      handlePage,
    };
  },
});
</script>
