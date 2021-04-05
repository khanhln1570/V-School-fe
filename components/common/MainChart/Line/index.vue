<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
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
    // let gradient = this.$refs.canvas
    //   .getContext('2d')
    //   .createLinearGradient(0, 0, 0, 450)

    // gradient.addColorStop(0, 'rgba(52, 217, 221, 0.6)')
    // gradient.addColorStop(0.5, 'rgba(52, 217, 221, 0.25)')
    // gradient.addColorStop(1, 'rgba(52, 217, 221, 0)')

    // let gradient2 = this.$refs.canvas
    //   .getContext('2d')
    //   .createLinearGradient(0, 0, 0, 450)

    // gradient2.addColorStop(0, 'rgba(0, 197, 42, 0.6)')
    // gradient2.addColorStop(0.5, 'rgba(0, 197, 42, 0.25)')
    // gradient2.addColorStop(1, 'rgba(0, 197, 42, 0)')

    // let gradient3 = this.$refs.canvas
    //   .getContext('2d')
    //   .createLinearGradient(0, 0, 0, 450)

    // gradient3.addColorStop(0, 'rgba(248, 121, 121, 0.6)')
    // gradient3.addColorStop(0.5, 'rgba(248, 121, 121, 0.25)')
    // gradient3.addColorStop(1, 'rgba(248, 121, 121, 0)')

    this.renderChart(this.chartData, this.options)
  }
}

</script>