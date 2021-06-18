<template>
  <li class="flex items-center app mb-4" :class="{ 'p-4 border border-gray-300 rounded-lg': !isTracked }">
    <AppIcon :app-name="app.name" />
    <div class="app-edit flex flex-col flex-grow">
      <div class="app-edit-info flex justify-between">
        <span class="font-bold">{{ app.name }}</span>
        <TimeSpan :activity="app.created_at" />
      </div>
      <div v-if="isTracked" class="app-edit-input">
        <TagSelector :app="app" />
      </div>
      <div v-if="isPending" class="app-user-actions flex items-center justify-between mt-2 font-bold text-xs">
        <div class="flex">
          <div
            class="flex border border-accent p-1 px-2 hover:bg-accent hover:text-white transition cursor-pointer rounded-l-full"
            @click="defineAppState('ignored')"
          >
            <EyeOffIcon class="w-4 mr-1" />
            <span class="">Ignorar</span>
          </div>
          <div
            class="flex border border-primary p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer rounded-r-full"
            @click="defineAppState('tracking')"
          >
            <EyeIcon class="w-4 mr-1" />
            <span class="">Rastrear</span>
          </div>
        </div>
        <a href="#" class="underline text-center">Decidir depois</a>
      </div>
    </div>
  </li>
</template>

<script>
import TimeSpan from './TimeSpan'
import { EyeOffIcon, EyeIcon } from '@heroicons/vue/outline'
import { mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import AppIcon from '@/components/UI/AppIcon'
import TagSelector from '@/components/UI/TagSelector'
import { formatedTimeSpan } from '../../plugins/utils.js'

export default {
  components: {
    TimeSpan,
    EyeOffIcon,
    EyeIcon,
    AppIcon,
    TagSelector
  },
  props: {
    app: { type: Object, default: () => {} }
  },
  data: () => {
    return {
      icon: '',
      name: 'Aplicativo',
      activityTimeSpan: '1h 25 min'
    }
  },
  methods: {
    formatedTimeSpan,
    ...mapMutations({
      updateStatusField: 'processes/updateStatusField'
    }),
    defineAppState(status) {
      let updatedApp = {
        process: this.app.name,
        status: status
      }
      this.updateStatusField(updatedApp)
    }
  },
  computed: {
    ...mapFields('global', ['started_at', 'myDayHasStartedAt']),
    isTracked() {
      if (!this.app) return false
      return this.app.status === 'tracking'
    },
    isPending() {
      if (!this.app) return false
      return this.app.status === 'pending'
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  &-icon {
    &-image {
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
