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
import mitt from 'mitt'
window.mitt = window.mitt || new mitt()

export default {
  components: {
    Section,
    ManageableAppBlock,
    FiltersTabMenu
  },
  data() {
    return {
      orderBy: 'status'
    }
  },
  mounted() {
    window.mitt.on('order-by', param => {
      this.orderBy = param
    })
  },
  computed: {
    ...mapFields('processes', ['processes']),
    orderedProcessesList() {
      let processes = this.processes
      let orderSide = this.orderBy === 'name' ? 'asc' : 'desc'
      if (this.orderBy === 'status') orderBy(processes, e => e.status === 'tracking', [orderSide])

      return orderBy(processes, [this.orderBy], [orderSide])
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.edit-app-container {
  @include scroll-bar(5px);
}
</style>
