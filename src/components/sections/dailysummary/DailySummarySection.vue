<template>
  <Section>
    <template v-slot:title>
      <h2>Resumo do dia</h2>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        <TotalActivityTime></TotalActivityTime>
        <MostActiveApps></MostActiveApps>
        <MostActiveTags></MostActiveTags>
      </div>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import TotalActivityTime from '@/components/sections/dailysummary/TotalActivityTime'
import MostActiveApps from '@/components/sections/dailysummary/MostActiveApps'
import MostActiveTags from '@/components/sections/dailysummary/MostActiveTags'

export default {
  components: {
    Section,
    TotalActivityTime,
    MostActiveApps,
    MostActiveTags
  }
}
</script>

<style lang="scss" scoped></style>
