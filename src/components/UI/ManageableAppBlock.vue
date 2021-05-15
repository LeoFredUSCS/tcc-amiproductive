<template>
  <li class="flex items-center app mb-6">
    <div
      class="status-indicator h-12 w-1 mr-2 rounded-full transition"
      :class="{
        'bg-accent': isTracked && !undefinedState,
        'bg-gray-300': !isTracked && !undefinedState,
      }"
    />
    <div class="icon app-icon w-10 h-10 rounded-full overflow-hidden mr-3">
      <div class="app-icon-image w-full h-full "></div>
    </div>
    <div class="flex flex-col flex-grow">
      <div class="app-edit-info flex justify-between">
        <span class="font-bold">{{ app.name }}</span>
      </div>
      <div class="app-edit-input">
        <TimeSpan>
          {{ app.activityTimeFrame }}
        </TimeSpan>
      </div>
    </div>
    <div
      class="app-user-actions flex items-center justify-between mt-2 font-bold text-xs"
    >
      <div class="flex" v-if="!shouldExpand">
        <EyeOffIcon class="w-5 h-5 mr-4" v-if="!isTracked && !undefinedState" />
        <EyeIcon class="w-5 h-5 mr-4" v-if="isTracked && !undefinedState" />
      </div>
      <div class="flex" v-if="shouldExpand">
        <div
          class="flex border border-primary rounded-l-sm p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer"
          :class="{
            'bg-primary text-white font-bold': isTracked && !undefinedState,
            undefined: undefinedState,
          }"
          @click="defineAppState(true)"
        >
          <EyeIcon class="w-4 h-4 mr-1" />
          <span class="text-xs">Rastrerar</span>
        </div>
        <div
          class="flex border border-primary rounded-r-sm p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer"
          :class="{
            'bg-primary text-white font-bold': !isTracked && !undefinedState,
          }"
          @click="defineAppState(false)"
        >
          <EyeOffIcon class="w-4 h-4 mr-1" />
          <span class="text-xs">Ignorar</span>
        </div>
      </div>
      <div
        class="app-management-menu w-6 h-6 border rounded-full border-gray-500 flex cursor-pointer  transition ml-1 transform hover:scale-110 hover:bg-gray-100"
        :class="{
          'rotate-90': shouldExpand,
          'attention-grabber': undefinedState && !shouldExpand,
        }"
        @click="shouldExpand = !shouldExpand"
      >
        <DotsVerticalIcon class="m-auto w-5 h-5 " />
      </div>
    </div>
  </li>
</template>

<script>
import TimeSpan from "./TimeSpan"
import { EyeOffIcon, EyeIcon, DotsVerticalIcon } from "@heroicons/vue/outline"

export default {
  components: {
    TimeSpan,
    EyeOffIcon,
    EyeIcon,
    DotsVerticalIcon,
  },
  props: {
    // isTracked: { type: Boolean, default: () => false },
  },
  data: () => {
    return {
      app: {
        icon: "",
        name: "Aplicativo",
        activityTimeFrame: "1h 25 min",
        belongsTo: [],
      },
      shouldExpand: false,
      isTracked: false,
      undefinedState: true,
    }
  },
  methods: {
    defineAppState(state) {
      if (state === this.isTracked && !this.undefinedState) {
        this.undefinedState = true
      } else {
        this.undefinedState = false
      }
      this.isTracked = state
      this.shouldExpand = !this.shouldExpand
    },
  },
}
</script>

<style lang="scss" scoped>
.app {
  &-icon {
    &-image {
      background-image: url("https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841");
      background-size: cover;
      background-position: center;
    }
  }
  .attention-grabber {
    animation-direction: alternate;
    position: relative;
    &:after {
      content: "";
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
