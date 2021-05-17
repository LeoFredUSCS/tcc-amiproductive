<template>
  <div class="flex items-center time-frame-wrapper text-gray-400 text-sm">
    <ClockIcon class="w-4 h-4 mr-1" />
    <span class="font-semibold">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { ClockIcon } from '@heroicons/vue/outline'
export default {
  components: { ClockIcon }
}
</script>

<style lang="scss" scoped></style>
