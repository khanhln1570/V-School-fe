<template>
  <div>
    <CommonMainChartLine v-if="chartType === 'Line'" :chartdata="chartdata" :options="options"/>
    <CommonMainChartBar v-if="chartType === 'Bar'" :chartdata="chartdata" :options="options"/>
    <CommonMainChartDoughnut v-if="chartType === 'Doughnut'" :chartdata="chartdata" :options="options"/>
    <CommonMainChartRadar v-if="chartType === 'Radar'" :chartdata="chartdata" :options="options"/>
    <CommonMainChartPolarArea v-if="chartType === 'PolarArea'" :chartdata="chartdata" :options="options"/>
    <CommonMainChartBubble v-if="chartType === 'Bubble'" :chartdata="chartdata" :options="options"/>
  </div>
  
</template>

<script>
export default {
  props: {
    chartType: {
      type: String,
      default: null
    },
    chartdata: {
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