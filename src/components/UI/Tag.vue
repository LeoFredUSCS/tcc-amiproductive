<template>
  <div
    class="tag flex h-5 items-center justify-center text-center align-middle border rounded-full py-0 px-3 text-white mr-1 mb-1 text-xs "
    :class="[
      altColor ? `bg-${altColor}` : 'bg-primary-dark',
      altColor ? `border-${altColor}` : 'border-primary',
    ]"
  >
    <span class="font-bold">
      <slot></slot>
    </span>
    <XIcon v-if="dismissable" class="w-4 ml-2 text-white" />
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline"
export default {
  props: {
    dismissable: { type: Boolean, default: () => false },
    altColor: { type: Text, default: () => null },
  },
  components: {
    XIcon,
  },
}
</script>

<style lang="scss" scoped>
.tag {
  @include shadow-small;
}
</style>
