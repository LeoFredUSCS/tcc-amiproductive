<template>
  <div class="border-b border-gray-200 px-3">
    <h3 class="text-lg text-center font-bold mb-2">
      Ordenar os aplicativos
    </h3>
    <nav class="-mb-px flex justify-between" aria-label="Tabs">
      <div
        class="w-full border-transparent text-center text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium cursor-pointer"
        :class="{ selected: selectedFilter === 'name' }"
        @click="applyFilter('name')"
      >
        <span class="label">Nome</span>
      </div>
      <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
      <div
        class="w-full border-transparent text-center text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium cursor-pointer"
        :class="{ selected: selectedFilter === 'activity' }"
        @click="applyFilter('activity')"
      >
        <span class="label">Atividade</span>
      </div>
      <div
        class="w-full border-transparent text-center text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium cursor-pointer"
        :class="{ selected: selectedFilter === 'status' }"
        @click="applyFilter('status')"
      >
        <span class="label">Status</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedFilter: 'name'
  }),
  methods: {
    applyFilter(filter) {
      this.selectedFilter = filter
    }
  }
}
</script>
<style lang="scss" scoped>
// Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
.selected {
  border-bottom: 2px solid $primary;
  color: $primary;
  text-shadow: 0 0 1px;
}
</style>
