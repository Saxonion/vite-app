<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item,index) in crumbList"
                       :key="index">
      {{ item.name }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { Breadcrumb } from 'ant-design-vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [Breadcrumb.Item.name]: Breadcrumb.Item,
  },

  setup() {
    const crumbList = ref([]);
    const router = useRouter();

    watch(router.currentRoute, (val) => {
      crumbList.value = val.matched;
    });

    return {
      crumbList,
    };
  },
});
</script>
