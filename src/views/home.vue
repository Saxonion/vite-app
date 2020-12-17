<template>
  <Aside />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Aside from '../components/aside.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Aside,
  },
  setup() {
    const msg = 'Welcome! vue3 + vite + ts';
    return { msg };
  },
});
</script>

<style lang="less" scoped>
</style>
