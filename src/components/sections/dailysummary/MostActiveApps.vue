<template>
  <div class="flex flex-col flex-grow items-center">
    <h3 class="font-bold w-full mb-3 text-center">
      Aplicativos mais ativos
    </h3>
    <div class="flex gap-3">
      <AppIcon v-for="(app, i) in getMostActiveApps" :key="i" :app-name="app.name" :is-highlighted="true" />
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import orderBy from 'lodash/orderBy'
import AppIcon from '@/components/UI/AppIcon'

export default {
  components: {
    AppIcon
  },
  computed: {
    ...mapFields('processes', ['processes']),

    getMostActiveApps() {
      let orderedProcesses = orderBy(this.processes, ['created_at', 'desc'])
      return orderedProcesses.slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  background-size: cover;
  background-position: center;
}
</style>
