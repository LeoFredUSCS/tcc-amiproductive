<template>
  <div class="total-activity flex flex-col">
    <h3 class="font-bold w-full mb-3">Monitorado hoje</h3>
    <div class="flex font-light">
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

<style lang="scss" scoped></style>
