<template>
  <transition :name="transitionName">
    <router-view />
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const transitionName = ref(null || 'fade');

    return {
      transitionName,
    };
  },
});
</script>
