<template>
  <!-- echarts 的容器 -->
  <div ref="divRef" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch } from "vue";
import useEchart from "@/hooks/useEchart";

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  echartDatas: {
    type: Array,
    default: function () {
      return [];
    },
  },
});

// 监听 echartDatas 的变化
watch(
  () => props.echartDatas,
  (newV, oldV) => {
    setupEchart(newV);
  }
);

// 拿到div的dom对象
let divRef = ref(null);
let hyChart = null;
onMounted(() => {
  setupEchart(props.echartDatas); // 第一次走这里
});

function setupEchart(echartDatas) {
  if (!hyChart) {
    hyChart = useEchart(divRef.value);
  }
  let option = getOption(echartDatas); // 准备数据
  hyChart.setOption(option);
}
</script>

<style scoped></style>
