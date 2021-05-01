<template>
  <div
    class="section m-5 bg-white rounded-xl border border-gray-300 shadow-md p-6"
  >
    <div class="flex flex-col">
      <div class="w-full text-center font-bold text-lg mb-8">
        <slot name="title">Titulo</slot>
      </div>

      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
