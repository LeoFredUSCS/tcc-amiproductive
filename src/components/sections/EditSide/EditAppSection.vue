<template>
  <Section class="edit-app-container h-auto overflow-y-auto">
    <template v-slot:title>
      <h2>Classifique seus apps</h2>
    </template>
    <template v-slot:content>
      <div class="flex flex-col">
        <NewTagForm class="my-5" />
        <ul class="mt-10">
          <AppBlock :isTracked="true" v-for="(i, j) in 8" :key="j" />
        </ul>
      </div>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import NewTagForm from '@/components/UI/NewTagForm'
import AppBlock from '@/components/UI/AppBlock'

export default {
  components: {
    Section,
    NewTagForm,
    AppBlock
  }
}
</script>

<style lang="scss" scoped>
.edit-app-container {
  @include scroll-bar(5px);
}
</style>
