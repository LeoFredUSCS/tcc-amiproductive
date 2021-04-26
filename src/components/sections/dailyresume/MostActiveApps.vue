<template>
  <div class="flex flex-col">
    <div class="font-bold w-full mb-3">Aplicativos mais utilizados</div>
    <div class="flex">
      <div
        v-for="i in 3"
        :key="i"
        class="w-12 h-12 border-2 rounded-full border-gray-100 mr-3"
      ></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
