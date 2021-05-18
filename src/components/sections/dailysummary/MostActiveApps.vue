<template>
  <div class="flex flex-col flex-grow items-center">
    <div class="font-bold w-full mb-3 text-center">
      Aplicativos mais ativos
    </div>
    <div class="flex gap-3">
      <div v-for="i in getMostActiveApps" :key="i" class="icon w-12 h-12 border-2 rounded-full border-gray-100"></div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import orderBy from 'lodash/orderBy'

export default {
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
  background-image: url('https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841');
  background-size: cover;
  background-position: center;
}
</style>
