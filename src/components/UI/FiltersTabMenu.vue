<template>
  <div class="border-b border-gray-200 px-3">
    <h3 class="text-lg text-center font-bold mb-2">
      Ordenar os aplicativos
    </h3>
    <nav class="-mb-px flex justify-between" aria-label="Tabs">
      <div :class="[baseClass, { selected: orderBy === 'name' }]" @click="orderBy = 'name'">
        <span class="label">Por Nome</span>
      </div>
      <div :class="[baseClass, { selected: orderBy === 'created_at' }]" @click="orderBy = 'created_at'">
        <span class="label">Por Tempo ativo</span>
      </div>
      <div :class="[baseClass, { selected: orderBy === 'status' }]" @click="orderBy = 'status'">
        <span class="label">Por Estado</span>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  data() {
    return {
      baseClass:
        'w-full border-transparent text-center text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium cursor-pointer'
    }
  },

  computed: {
    ...mapFields('processes', ['processes', 'orderBy'])
  }
}
</script>

<style lang="scss" scoped>
.selected {
  border-bottom: 2px solid $primary;
  color: $primary;
  text-shadow: 0 0 1px;
  box-shadow: 0 20px 20px -10px #d2dce9;
}
</style>
