<template>
  <div>
    <keep-alive>
      <component :is="chartType" :chartdata="chartdata" :options="options" />
    </keep-alive>
  </div>
  
</template>

<script>
export default {
  components: {
    ChartLine: () => import('./line/Line'),
    ChartBar: () => import('./bar/Bar'),
    ChartDoughnut: () => import('./doughnut/Doughnut'),
    ChartRadar: () => import('./radar/Radar'),
    ChartPolarArea: () => import('./polar-area/PolarArea'),
    ChartBubble: () => import('./bubble/Bubble'),
  },
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