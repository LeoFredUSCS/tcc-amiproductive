<template>
  <div
    class="tag flex h-5 items-center justify-center text-center align-middle border rounded-full py-0 px-3 border-black text-white mr-1 mb-1 text-xs bg-black"
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
  },
  components: {
    XIcon,
  },
}
</script>

<style lang="scss" scoped></style>
