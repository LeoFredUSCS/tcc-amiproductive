<template>
  <li
    class="app p-2 rounded-lg mb-2 transition duration-700 grid grid-cols-2 grid-flow-col"
    :class="{
      'bg-gray-100': isIgnored
    }"
  >
    <div
      class="flex transition duration-700 items-center col-start-1 col-end-2 relative"
      :class="{
        'opacity-60 bg-grey-100': isIgnored
      }"
    >
      <div
        class="app-status-marker h-full w-1 rounded-full transition duration-700 absolute"
        :class="{
          'bg-accent': isTracked,
          'bg-gray-300': !isTracked
        }"
      />
      <AppIcon :app-name="app.name" />

      <div class="flex flex-col flex-grow">
        <div class="app-edit-info flex justify-between">
          <span class="font-bold">{{ app.name }}</span>
        </div>
        <div class="app-edit-input">
          <TimeSpan :activity="app.created_at" />
        </div>
      </div>
    </div>
    <div class="app-user-actions flex items-center justify-end font-bold col-start-2 col-end-3 relative">
      <div class="flex" v-if="!shouldExpand">
        <EyeIcon class="w-5 h-5 mr-4" v-if="isTracked" />
        <EyeOffIcon class="w-5 h-5 mr-4" v-if="isIgnored" />
        <span class=" mr-2 flex items-center text-sm text-gray-400" v-if="isPending">Defina este aplicativo</span>
      </div>
      <div class="flex absolute right-7" v-if="shouldExpand">
        <div
          class="flex border border-accent rounded-l-full p-1 px-2 hover:bg-accent hover:text-white transition cursor-pointer"
          :class="{
            'bg-accent text-white font-bold': isIgnored
          }"
          @click="defineAppState('ignored')"
        >
          <EyeOffIcon class="w-4 h-4 mr-1" />
          <span class="text-xs">Ignorar</span>
        </div>
        <div
          class="flex border border-primary rounded-r-full p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer"
          :class="{
            'bg-primary text-white font-bold': isTracked,
            undefined: undefinedState
          }"
          @click="defineAppState('tracking')"
        >
          <EyeIcon class="w-4 h-4 mr-1" />
          <span class="text-xs">Rastrerar</span>
        </div>
      </div>
      <div
        class="app-management-menu w-6 h-6 border rounded-full border-gray-500 flex cursor-pointer transition ml-1 transform hover:scale-110 hover:bg-gray-100"
        :class="{
          'rotate-90': shouldExpand,
          'attention-grabber': !shouldExpand
        }"
        @click="shouldExpand = !shouldExpand"
      >
        <DotsVerticalIcon class="m-auto w-5 h-5 " />
      </div>
    </div>
  </li>
</template>

<script>
import TimeSpan from './TimeSpan'
import { EyeOffIcon, EyeIcon, DotsVerticalIcon } from '@heroicons/vue/outline'
import { mapFields } from 'vuex-map-fields'
import { mapMutations } from 'vuex'
import AppIcon from '@/components/UI/AppIcon'

export default {
  components: {
    TimeSpan,
    AppIcon,
    EyeOffIcon,
    EyeIcon,
    DotsVerticalIcon
  },
  props: {
    app: {
      type: Object,
      default: () => {}
    }
  },
  data: () => {
    return {
      shouldExpand: false,
      undefinedState: true
    }
  },
  computed: {
    ...mapFields('processes', ['processes']),
    isTracked() {
      return this.app.status === 'tracking'
    },
    isIgnored() {
      return this.app.status === 'ignored'
    },
    isPending() {
      return this.app.status === 'pending'
    }
  },
  methods: {
    ...mapMutations({
      updateStatusField: 'processes/updateStatusField'
    }),
    defineAppState(status) {
      this.shouldExpand = !this.shouldExpand
      let updatedApp = {
        process: this.app.name,
        status
      }
      this.updateStatusField(updatedApp)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  &-status-marker {
    left: -10px;
  }
  &-icon {
    &-image {
      background-size: cover;
      background-position: center;
    }
  }
  .attention-grabber {
    animation-direction: alternate;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      border: 1px solid $primary;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      animation: pulse 2s ease-in-out infinite running;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
}
</style>
