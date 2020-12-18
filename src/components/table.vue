<template>
  <a-table :columns="columns"
           :data-source="data"
           :pagination="pagination"
           :loading="loading"
           :scroll="{y: 700 }"
           @change="handleTableChange">
    <template #action="{ text }">
      <a @click="handleClick(text)">{{ text.name }}</a>
    </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { Table } from 'ant-design-vue';

export default defineComponent({
  name: 'Table',
  components: {
    [Table.name]: Table,
  },

  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    page: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 20,
    },
    total: {
      type: Number,
      default: 0,
    },
  },

  emits: ['page-change'],

  setup(props, { emit }) {
    const loading = ref(false);
    const pagination = reactive({
      current: props.page,
      pageSize: props.pageSize,
      total: props.total,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      showTotal: (total) => `Total ${total} items`,
    });

    const handleTableChange = (e) => {
      emit('page-change', { page: e.current, pageSize: e.pageSize });
    };

    const handleClick = (e) => {
      console.log('e: ', e);
    };

    return {
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
