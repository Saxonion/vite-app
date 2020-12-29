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

import 'echarts/map/js/china';
import { mapData } from './data';

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
      visualMap: {
        min: 0,
        max: 1000,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: false,
        orient: 'horizontal',
        inRange: {
          color: ['#e0ffff', '#006edd'],
          symbolSize: [30, 100],
        },
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, .6)',
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
      },
      series: [
        {
          name: 'Number',
          type: 'map',
          map: 'china',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: 'rgb(249, 249, 249)',
                fontSize: 10,
              },
            },
            emphasis: {
              show: true,
              textStyle: {
                color: 'rgb(249, 249, 249)',
                fontSize: 14,
              },
            },
          },
          itemStyle: {
            normal: {
              label: { show: true },
              areaColor: '#2f82ce',
              borderColor: '#0DAAC1',
            },
            emphasis: {
              label: { show: true },
              areaColor: '#2f82ce',
            },
          },
          data: mapData,
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
