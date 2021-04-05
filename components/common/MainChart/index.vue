<template>
  <div>
    <CommonMainChartLine v-if="chartType === 'Line'" :chartData="chartData" :options="options"/>
    <CommonMainChartBar v-if="chartType === 'Bar'" :chartData="chartData" :options="options"/>
    <CommonMainChartDoughnut v-if="chartType === 'Doughnut'" :chartData="chartData" :options="options"/>
    <CommonMainChartPie v-if="chartType === 'Pie'" :chartData="chartData" :options="options"/>
    <CommonMainChartRadar v-if="chartType === 'Radar'" :chartData="chartData" :options="options"/>
    <CommonMainChartPolarArea v-if="chartType === 'PolarArea'" :chartData="chartData" :options="options"/>
    <CommonMainChartBubble v-if="chartType === 'Bubble'" :chartData="chartData" :options="options"/>
  </div>
  
</template>

<script>
export default {
  props: {
    chartType: {
      type: String,
      default: null
    },
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>

</style>