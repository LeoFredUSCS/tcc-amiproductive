<template>
  <div
    class="section bg-white rounded-2xl border border-gray-100 pt-8 pb-4 px-5 border-gray-200"
  >
    <div class="flex flex-col">
      <div class="w-full text-center text-2xl mb-5">
        <slot name="title">Titulo</slot>
      </div>

      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section {
  @include shadow;
  background-color: $bg-secondary;
}
</style>
