<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}

</script>