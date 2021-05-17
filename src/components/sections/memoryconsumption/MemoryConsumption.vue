<template>
  <Section>
    <template v-slot:title>
      <h2>Consumo de Memória</h2>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        <DoughnutChart :height="300" :chartData="state.chartData" />
      </div>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import DoughnutChart from '@/components/UI/DoughnutChart'

export default {
  components: {
    Section,
    DoughnutChart
  },
  props: {},

  data() {
    return {
      loaded: false,
      state: {
        chartData: {},
        chartOptions: {
          responsive: true
        }
      }
    }
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
      this.state.chartData = {
        labels: ['Label 1', 'Label 2'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (10 - 5 + 1)) + 10
    }
  }
}
</script>

<style lang="scss" scoped></style>
