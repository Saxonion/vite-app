<template>
  <div ref="chartRef"
       :style="{ height, width }" />
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  unref,
  onMounted,
  onUnmounted,
  PropType,
} from 'vue';
import echarts from 'echarts';

export default defineComponent({
  props: {
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
      default: '100%',
    },
  },
  setup() {
    const chartRef = ref<HTMLDivElement | null>(null);
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)',
          },
        },
      ],
    };

    onMounted(() => {
      const chartInstance = echarts.init(unref(chartRef));
      chartInstance.setOption(option);
      window.onresize = () => {
        chartInstance.resize();
      };
    });

    onUnmounted(() => {
      window.onresize = null;
    });

    return {
      chartRef,
    };
  },
});
</script>
