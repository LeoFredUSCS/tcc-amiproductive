<template>
  <Section>
    <template v-slot:title>
      <h2>Consumo de Processamento</h2>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        <DoughnutChart :height="300" ref="doughnut-chart" :chartData="state.chartData" />
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
      chart: null,
      state: {
        chartData: {},
        chartOptions: {
          responsive: true
        }
      }
    }
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
      this.state.chartData = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#974dc5',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
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
