<template>
  <Section>
    <template v-slot:title>
      <h2>Consumo de Processamento</h2>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        <DoughnutChart :height="300" ref="doughnut-chart" :chartData="chartData" />
      </div>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import DoughnutChart from '@/components/UI/DoughnutChart'
import { mapFields } from 'vuex-map-fields'

export default {
  components: {
    Section,
    DoughnutChart
  },

  props: {},

  data() {
    return {
      loaded: false,
      chart: null,
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: ['#974dc5', '#8030b1'],
            data: []
          }
        ]
      },
      chartOptions: {}
    }
  },

  computed: {
    ...mapFields('consumptions', ['consumptions'])
  },

  beforeMount() {
    this.fillData()
    this.chart = null
  },

  async mounted() {
    this.loaded = false
    try {
      this.loaded = true
      this.$nextTick(() => {
        this.chart = this.$refs['doughnut-chart']
      })
    } catch (e) {
      console.error(e)
    }
  },

  beforeUnmount() {
    // this.chart.destroy()
  },

  methods: {
    fillData() {
      let total = 0

      this.consumptions.forEach((process, i) => {
        this.chartData.labels[i] = process.process_name
        const value = process.cpu.percentage * 100
        total += value
        this.chartData.datasets[0].data[i] = value
      })

      if (total < 100) {
        this.chartData.labels.push('Livre')
        this.chartData.datasets[0].data.push(100 - total)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
