<template>
  <Section class="edit-app-container h-full overflow-y-auto">
    <template v-slot:title>
      <h2>Defina o que será rastreado</h2>
    </template>
    <template v-slot:content>
      <FiltersTabMenu class="my-5" />
      <div class="flex flex-col">
        <ul class="mt-5">
          <ManageableAppBlock :isTracked="true" v-for="(i, j) in 8" :key="j" />
        </ul>
      </div>
    </template>
  </Section>
</template>

<script>
import Section from "@/components/UI/Section"
import ManageableAppBlock from "@/components/UI/ManageableAppBlock"
import FiltersTabMenu from "@/components/UI/FiltersTabMenu"

export default {
  components: {
    Section,
    ManageableAppBlock,
    FiltersTabMenu,
  },
}
</script>

<style lang="scss" scoped>
.edit-app-container {
  @include scroll-bar(5px);
}
</style>
