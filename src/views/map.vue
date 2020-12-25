<template>
  <map-chart />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MapChart from '../components/chart/map.vue';

export default defineComponent({
  components: {
    MapChart,
  },
});
</script>
