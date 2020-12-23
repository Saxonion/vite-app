<template>
  <a-table :bordered="bordered"
           :columns="columns"
           :data-source="data"
           :pagination="pagination"
           :loading="loading"
           :scroll="{y: scrollY }"
           @change="handleTableChange">
    <template v-if="buttons.length > 0"
              #action="{ record }">
      <template v-for="(item,index) in buttons"
                :key="index">
        <a v-if="typeof item.show === 'function' ? item.show(record) : true"
           class="opreation"
           :class="item.type"
           @click="handleClick(record, item.handleName)">{{ item.text }}</a>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
import { Table } from 'ant-design-vue';

export default defineComponent({
  name: 'Table',
  components: {
    [Table.name]: Table,
  },

  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
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
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     *  !columns 对应的key为 action
     * 表格对应的操作按钮, 为空数组不展示
     * {text: String} [required] 文本名字
     * {handleName: String} [required] 对应的方法名
     * {show: Boolean || Function} 可选，默认true, 可按条件配置按钮展示与否
     * {type: String} 可选，可选值[primary, warning]
     */
    buttons: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['page-change'],

  setup(props, { emit }) {
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

    const handleClick = (e, handleName) => {
      emit(handleName, e);
    };

    watch(props, (val) => {
      pagination.total = val.total;
    });

    return {
      pagination,
      handleTableChange,
      handleClick,
      scrollY: document.body.clientHeight - 300,
    };
  },
});
</script>

<style lang="less" scoped>
@import (reference) '../assets/styles/base/index.less';

.opreation {
  margin-right: 10px;
  color: inherit;
  .set-size(30px);

  &.primary {
    color: @primary-color;
  }

  &.warning {
    color: @error-color;
  }
}
</style>
