<template>
  <Section class="edit-app-container h-auto overflow-y-auto flex-grow">
    <template v-slot:title>
      <h2>Classifique seus apps</h2>
    </template>
    <template v-slot:content>
      <div class="flex flex-col">
        <NewTagForm class="my-5" />
        <ul class="mt-10">
          <AppBlock v-for="app in trackingApps" :app="app" :key="app.name" />
        </ul>
      </div>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import NewTagForm from '@/components/UI/NewTagForm'
import AppBlock from '@/components/UI/AppBlock'
import { mapFields } from 'vuex-map-fields'
import orderBy from 'lodash/orderBy'

export default {
  components: {
    Section,
    NewTagForm,
    AppBlock
  },
  computed: {
    ...mapFields('processes', ['processes']),
    trackingApps() {
      let trackingProcesses = this.processes.filter(app => app.status === 'tracking')
      return orderBy(trackingProcesses, ['created_at'], ['asc'])
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-app-container {
  @include scroll-bar(5px);
}
</style>
