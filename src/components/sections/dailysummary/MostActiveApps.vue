<template>
  <div class="flex flex-col flex-grow items-center">
    <h3 class="font-bold w-full mb-3 text-center">
      Aplicativos mais ativos
    </h3>
    <div class="flex gap-3">
      <div v-for="(app, i) in getMostActiveApps" :key="i" class="icon w-12 h-12 bg-white p-1 rounded-full overflow-hidden border-gray-100 p-1">
        <img
          class="app-icon-image w-full h-full "
          :src="
            `https://res.cloudinary.com/de3in00p1/image/upload/ar_1:1,c_thumb,q_auto:good,w_150/icons/${app.name
              .toLowerCase()
              .split(' ')
              .join('_')}.jpg`
          "
        />
      </div>
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
  background-size: cover;
  background-position: center;
}
</style>
