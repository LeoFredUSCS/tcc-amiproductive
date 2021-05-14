<template>
  <div class="flex flex-col">
    <div class="font-bold w-full mb-3">Aplicativos mais utilizados</div>
    <div class="flex">
      <div
        v-for="i in 3"
        :key="i"
        class="icon  w-12 h-12 border-2 rounded-full border-gray-100 mr-3"
      ></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.icon {
  background-image: url("https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841");
  background-size: cover;
  background-position: center;
}
</style>
