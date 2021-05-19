<template>
  <li class="app mb-6 grid grid-cols-2 grid-flow-col">
    <div class="flex items-center col-start-1 col-end-2 relative">
      <div
        class="app-status-marker h-full w-1 mr-2 rounded-full transition absolute"
        :class="{
          'bg-accent': isTracked,
          'bg-gray-300': !isTracked
        }"
      />
      <div class="icon app-icon w-10 h-10 rounded-full overflow-hidden mr-3">
        <div class="app-icon-image w-full h-full "></div>
      </div>
      <div class="flex flex-col flex-grow">
        <div class="app-edit-info flex justify-between">
          <span class="font-bold">{{ appName }}</span>
        </div>
        <div class="app-edit-input">
          <TimeSpan>
            {{ formatedTimeSpan(app.created_at) }}
          </TimeSpan>
        </div>
      </div>
    </div>
    <div class="app-user-actions flex items-center justify-end mt-2 font-bold text-xs col-start-2 col-end-3 relative">
      <div class="flex" v-if="!shouldExpand">
        <!-- <EyeOffIcon class="w-5 h-5 mr-4" v-if="!isTracked" /> -->
        <EyeIcon class="w-5 h-5 mr-4" v-if="isTracked" />
        <span class="text-gray-400 mr-2" v-if="!isTracked">Não Rastreado</span>
      </div>
      <div class="flex absolute right-7" v-if="shouldExpand">
        <div
          class="flex border border-primary rounded-r-sm p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer"
          :class="{
            'bg-primary text-white font-bold': !isTracked
          }"
          @click="defineAppState(false)"
        >
          <EyeOffIcon class="w-4 h-4 mr-1" />
          <span class="text-xs">Ignorar</span>
        </div>
        <div
          class="flex border border-primary rounded-l-sm p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer"
          :class="{
            'bg-primary text-white font-bold': isTracked,
            undefined: undefinedState
          }"
          @click="defineAppState(true)"
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
import { formatedTimeSpan } from '../../plugins/utils'

export default {
  components: {
    TimeSpan,
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
    appName() {
      let name = this.app['name'].split('.')[0]
      let capital = name.charAt(0).toUpperCase()
      return capital + name.substring(1)
    }
  },
  methods: {
    formatedTimeSpan,
    ...mapMutations({
      updateStatusField: 'processes/updateStatusField'
    }),
    defineAppState(status) {
      this.shouldExpand = !this.shouldExpand
      let updatedApp = {
        process: this.appName.toLowerCase() + '.exe',
        status: status ? 'tracking' : 'ignored'
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
      background-image: url('https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841');
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
