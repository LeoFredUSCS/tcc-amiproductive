<template>
  <Section>
    <template v-slot:title>
      <h1>Como você está indo em um período maior</h1>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        Periodos
      </div>
    </template>
  </Section>
</template>

<script>
import Section from "@/components/UI/Section";

export default {
  components: {
    Section
  }
};
</script>

<style lang="scss" scoped></style>
