<template>
  <div class="total-activity flex flex-col flex-grow">
    <div class="font-bold w-full mb-3">Atividade Total</div>
    <div class="flex items-baseline font-light">
      <span :class="started === 'Carregando' ? 'text-3xl' : 'text-5xl'">{{ started }}</span>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { formatedTimeSpan } from '../../../plugins/utils'

export default {
  data() {
    return {
      started: 'Carregando'
    }
  },
  created() {
    setInterval(() => {
      this.started = formatedTimeSpan(this.started_at)
    }, 1000)
  },

  computed: {
    ...mapFields('global', ['started_at'])
  },
  methods: {
    formatedTimeSpan
  }
}
</script>

<style lang="scss" scoped>
.total-activity {
  min-width: 265px;
}
</style>
