<template>
  <div class="flex items-center time-frame-wrapper text-gray-400 text-sm">
    <ClockIcon class="w-4 h-4 mr-1" />
    <span class="font-semibold">
      {{ currentActivity }}
    </span>
  </div>
</template>

<script>
import { ClockIcon } from '@heroicons/vue/outline'
import { formatedTimeSpan, minutesToTimespan } from '../../plugins/utils'

export default {
  components: { ClockIcon },
  props: {
    activity: {
      type: String,
      default: () => ''
    },
    isTotalActivity: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      currentActivity: 'carregando'
    }
  },
  created() {
    setInterval(() => {
      if (this.isTotalActivity) {
        this.currentActivity = minutesToTimespan(this.activity)
        return
      }
      this.currentActivity = formatedTimeSpan(this.activity)
    }, 1000)
  }
}
</script>

<style lang="scss" scoped></style>
