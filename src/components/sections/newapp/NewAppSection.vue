<template>
  <Section class="new-app-section h-auto overflow-y-auto">
    <template v-slot:title>
      <h2>Novos apps identificados</h2>
    </template>
    <template v-slot:content>
      <ul>
        <AppBlock :isTracked="false" />
      </ul>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import AppBlock from '@/components/UI/AppBlock'

export default {
  components: {
    Section,
    AppBlock
  }
}
</script>

<style lang="scss" scoped>
.new-app-section {
  min-height: 265px;
  @include scroll-bar(5px);
}
</style>
