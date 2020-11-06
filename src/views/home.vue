<template>
  <div>
    <a-badge dot>
      <a-avatar style="color: #f56a00; backgroundColor: #fde3cf"
                :size="64">U</a-avatar>
    </a-badge>
    <h1>{{msg}}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { loginApi } from '/@api/index.ts';

export default defineComponent({
  name: 'Home',
  setup() {
    const msg = 'Welcome! vue3 + vite + ts';
    console.log('1111111', process.env);

    loginApi();
    return { msg };
  },
});
</script>>




