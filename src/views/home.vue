<template>
  <div>
    <a-badge dot>
      <a-avatar style="color: #f56a00; backgroundColor: #fde3cf"
                :size="64">U</a-avatar>
    </a-badge>
    <h1>{{msg}}</h1>
    <a-button type="primary">
      Primary
    </a-button>
  </div>
</template>

<script lang="ts">
import App from '../App.vue';
import { defineComponent } from 'vue';
import { Button, Avatar, Badge } from 'ant-design-vue';

export default defineComponent({
  name: 'Home',
  components: {
    [Button.name]: Button,
    [Avatar.name]: Avatar,
    [Badge.name]: Badge,
  },
  setup() {
    const msg = 'Welcome! vue3 + vite + ts';
    return { msg };
  },
});
</script>

<style lang="less" scoped>
</style>