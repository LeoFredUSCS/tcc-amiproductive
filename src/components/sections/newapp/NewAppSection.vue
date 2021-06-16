<template>
  <Section class="new-app-section h-auto overflow-y-auto" :class="{ 'has-content': pendingApps.length }">
    <template v-slot:title>
      <h2 class="flex items-center justify-center w-full mx-auto">
        {{ pendingApps.length ? 'Novos apps identificados' : 'Sem novos aplicativos' }}
        <span v-if="pendingApps.length" class="badge ml-1 rounded-lg text-sm px-2 font-bold">
          {{ pendingApps.length }}
        </span>
      </h2>
    </template>
    <template v-slot:content>
      <ul>
        <AppBlock v-for="app in pendingApps" :app="app" :key="app.name" />
      </ul>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import AppBlock from '@/components/UI/AppBlock'
import { mapFields } from 'vuex-map-fields'

export default {
  components: {
    Section,
    AppBlock
  },
  computed: {
    ...mapFields('processes', ['processes']),
    pendingApps() {
      return this.processes.filter(process => process.status === 'pending')
    }
  }
}
</script>

<style lang="scss" scoped>
.new-app-section {
  max-height: 40%;
  @include scroll-bar(5px);
  &.has-content {
    min-height: 210px;
  }
  .badge {
    background: $accent;
    color: white;
    animation: bounce infinite alternate ease-out 500ms;
  }
  @keyframes bounce {
    0% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(-6px);
    }
  }
}
</style>
