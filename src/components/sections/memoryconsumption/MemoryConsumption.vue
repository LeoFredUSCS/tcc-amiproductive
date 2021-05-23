<template>
  <Section>
    <template v-slot:title>
      <h2>Consumo de Memória</h2>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        <DoughnutChart :height="300" :chartData="chartData" />
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
      chartData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ['#f87979', '#f87909']
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },

  computed: {
    ...mapFields('consumptions', ['consumptions'])
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

  beforeMount() {
    this.fillData()
    this.chart = null
  },

  methods: {
    fillData() {
      let total = 0

      this.consumptions.forEach((process, i) => {
        this.chartData.labels[i] = process.process_name
        const value = process.memmory.percentage * 100
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
