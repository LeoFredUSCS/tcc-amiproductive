<template>
  <Section
    class="edit-app-container flex-grow overflow-x-hidden"
    :class="{ 'h-full overflow-y-auto': trackingApps.length >= 4, 'has-content': trackingApps.length }"
  >
    <template v-slot:title>
      <h2>Categorize seus aplicativos</h2>
    </template>
    <template v-slot:content>
      <div class="flex flex-col">
        <NewTagForm class="mt-5" />
        <transition-group mode="in-out" name="list-complete" class="mt-10" tag="ul">
          <AppBlock v-for="app in trackingApps" :app="app" :key="app.name" class="list-complete-item" />
        </transition-group>
      </div>
      <div v-if="!hasTrackingApps" class="flex flex-col items-center">
        <h3 class="text-lg text-center leading-6 font-bold mb-4 border-2 border-gray rounded-xl p-2">
          Aqui você poderá categorizar os aplicativos monitorados
        </h3>
        <router-link to="/tracking" class="w-full shadow-lg">
          <div
            class="tacking-btn border-2 font-semibold border-gray rounded-lg p-2 w-full flex items-center justify-center bg-primary-dark hover:bg-primary-darker text-white transition"
          >
            <span>Começar a monitorar aplicativos</span>
            <ArrowCircleRightIcon class="arrow-icon w-5 h-5 ml-2" />
          </div>
        </router-link>
      </div>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
import NewTagForm from '@/components/UI/NewTagForm'
import AppBlock from '@/components/UI/AppBlock'
import { mapFields } from 'vuex-map-fields'
import orderBy from 'lodash/orderBy'

export default {
  components: {
    Section,
    NewTagForm,
    ArrowCircleRightIcon,
    AppBlock
  },
  computed: {
    ...mapFields('processes', ['processes']),
    trackingApps() {
      let trackingProcesses = this.processes.filter(app => app.status === 'tracking')
      return orderBy(trackingProcesses, ['created_at'], ['asc'])
    },
    hasTrackingApps() {
      return this.trackingApps.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-app-container {
  @include scroll-bar(5px);

  .tacking-btn {
    .arrow-icon {
      transition: all ease-in-out 100ms;
    }
    &:hover {
      .arrow-icon {
        transform: translateX(4px);
      }
    }
  }
}
.list-complete-item {
  transition: all 500ms;
}
.list-complete-enter-active,
.list-complete-enter {
  opacity: 0;
  transform: translateX(90px);
}
.list-complete-leave-active {
  position: absolute;
  width: 100%;
}
</style>
