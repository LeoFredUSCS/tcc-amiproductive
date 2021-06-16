<template>
  <Section class="new-app-section h-auto" :class="{ 'has-content overflow-y-auto': pendingApps.length }">
    <template v-slot:title>
      <h2 class="flex items-center justify-center w-full mx-auto m-0">
        {{ pendingApps.length ? 'Novos apps identificados' : 'Buscando novos aplicativos' }}
        <span v-if="pendingApps.length" class="badge ml-1 rounded-lg text-sm px-2 font-bold">
          {{ pendingApps.length }}
        </span>
      </h2>
      <div class="searching-feedback absolute m-auto" v-if="!pendingApps.length" />
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
  .searching-feedback {
    height: 3px;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    width: 180px;
    background: lighten($accent, 35);

    &::after {
      content: '';
      position: absolute;
      background: $accent;
      height: 100%;
      width: 25px;
      animation: elastic infinite alternate ease-in-out 1.5s;
    }
  }
}
@keyframes elastic {
  0% {
    left: 0;
  }
  50% {
    width: 50px;
  }
  100% {
    left: 100%;
  }
}
@keyframes bounce {
  0% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(-6px);
  }
}
</style>
