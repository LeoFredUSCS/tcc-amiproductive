<template>
  <Section class="edit-app-container h-full overflow-y-auto">
    <template v-slot:title>
      <h2>Monitore / Ignore os aplicativos encontrados</h2>
    </template>
    <template v-slot:content>
      <FiltersTabMenu class="my-5" />
      <div class="flex flex-col font-semibold mt-5">
        <div class="flex items-center justify-end">
          <div class="flex items-center text-gray-400">
            <EyeIcon class="w-5 mr-1" />
            <span class="text-sm">Monitorando</span>
          </div>
          <div class="flex items-center ml-6 text-gray-400">
            <EyeOffIcon class="w-5 mr-1" />
            <span class="text-sm">Ignorado</span>
          </div>
        </div>
        <ul class="mt-6">
          <ManageableAppBlock v-for="(process, i) in orderedProcessesList" :app="process" :key="i" />
        </ul>
      </div>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import ManageableAppBlock from '@/components/UI/ManageableAppBlock'
import FiltersTabMenu from '@/components/UI/FiltersTabMenu'
import { mapFields } from 'vuex-map-fields'
import orderBy from 'lodash/orderBy'
import { EyeOffIcon, EyeIcon } from '@heroicons/vue/outline'

export default {
  components: {
    Section,
    EyeOffIcon,
    EyeIcon,
    ManageableAppBlock,
    FiltersTabMenu
  },

  computed: {
    ...mapFields('processes', ['processes', 'orderBy']),
    orderedProcessesList() {
      let processes = this.processes
      let orderSide = this.orderBy === 'status' ? 'desc' : 'asc'
      if (this.orderBy === 'status') return orderBy(processes, [e => e.status === 'tracking', e => e.status === 'pending', 'name'], [orderSide])
      return orderBy(processes, [this.orderBy], [orderSide])
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-app-container {
  @include scroll-bar(5px);
}
</style>
