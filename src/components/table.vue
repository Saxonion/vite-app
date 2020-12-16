<template>
  <a-table :columns="columns"
           :data-source="data"
           :pagination="pagination"
           :loading="loading"
           @change="handleTableChange">
    <template #action="{ text }">
      <a @click="handleClick(text)">{{ text.name }}</a>
    </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { Table } from 'ant-design-vue';

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

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default defineComponent({
  name: 'Home',
  components: {
    [Table.name]: Table,
  },
  setup() {
    const loading = ref(false);
    const pagination = reactive({
      current: 0,
      pageSize: 10,
      total: 3,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      showTotal: (total) => `Total ${total} items`,
    });

    const handleTableChange = (e) => {
      console.log('pagination: ', e);
    };

    const handleClick = (e) => {
      console.log('e: ', e);
    };

    return {
      columns,
      data,
      pagination,
      loading,
      handleTableChange,
      handleClick,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
