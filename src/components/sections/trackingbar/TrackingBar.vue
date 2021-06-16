<template>
  <Section class="edit-app-container h-full overflow-y-auto">
    <template v-slot:title>
      <h2>Defina o que será rastreado</h2>
    </template>
    <template v-slot:content>
      <FiltersTabMenu class="my-5" />
      <div class="flex flex-col">
        <ul class="mt-5">
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

export default {
  components: {
    Section,
    ManageableAppBlock,
    FiltersTabMenu
  },

  computed: {
    ...mapFields('processes', ['processes', 'orderBy']),
    orderedProcessesList() {
      let processes = this.processes
      let orderSide = this.orderBy === 'status' ? 'desc' : 'asc'
      if (this.orderBy === 'status') return orderBy(processes, [e => e.status === 'tracking', 'name'], [orderSide])
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
