<template>
  <Section>
    <template v-slot:title>
      <h1>Resumo do dia</h1>
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
import Section from "@/components/UI/Section";
import TotalActivityTime from "@/components/sections/dailyresume/TotalActivityTime";
import MostActiveApps from "@/components/sections/dailyresume/MostActiveApps";
import MostActiveTags from "@/components/sections/dailyresume/MostActiveTags";

export default {
  components: {
    Section,
    TotalActivityTime,
    MostActiveApps,
    MostActiveTags
  }
};
</script>

<style lang="scss" scoped></style>
