<script>
import { Bubble, mixins } from 'vue-chartjs'

export default {
  extends: Bubble,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
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
    this.renderChart(this.chartData, this.options)
  }
}

</script>