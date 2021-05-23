<script>
import { defineComponent } from 'vue'
import { Doughnut } from 'vue3-chart-v2'

export default defineComponent({
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    }
  },
  mounted() {
    this.renderChart(this.chartData, {
      ...this.chartOptions,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              var label = context.dataset.label || ''

              console.log(context)

              return label + '%'
            }
          }
        }
      }
    })
  }
})
</script>
