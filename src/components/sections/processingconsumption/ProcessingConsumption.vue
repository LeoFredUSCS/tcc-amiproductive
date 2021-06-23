<template>
  <Section>
    <template v-slot:title>
      <h2>Consumo de Processamento</h2>
    </template>
    <template v-slot:content>
      <div class="flex items-center justify-around">
        <div class="chart-wrapper w-3/5">
          <DoughnutChart :height="300" :chartData="chartData" />
        </div>
        <ul class="tags-container w-2/5">
          <li class="tag-item my-5 items-center grid grid-cols-10" v-for="(tag, i) in chartData.labels" :key="i">
            <span class="tag-title font-bold col-span-2">{{ tag }}</span>
            <div class="col-span-8 flex items-center">
              <div
                class="tag-percentage rounded-full col-span-8 transition duration-500"
                :style="{
                  backgroundColor: chartData.datasets[0].backgroundColor[i],
                  maxWidth: chartData.datasets[0].data[i] * 2 + '%'
                }"
              />
              <span class="text-sm ml-2 text-gray-400 font-bold percentage">{{ chartData.datasets[0].data[i] }}%</span>
            </div>
          </li>
        </ul>
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
            backgroundColor: ['#974dc5', '#36E6AD', '#f030b1', '#0196e3', '#F1A428', '#10EAC2'],
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
  methods: {
    fillData() {
      let total = 0
      this.consumptions.forEach((process, i) => {
        this.chartData.labels[i] = process.process_name
        const value = process.cpu.percentage * 100
        total += value
        this.chartData.datasets[0].data[i] = value.toFixed(2)
      })

      if (total < 100) {
        this.chartData.labels.push('Livre')
        this.chartData.datasets[0].data.push(100 - total)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-percentage {
  height: 12px;
  width: 100%;
  max-width: 0;
}
</style>
