<template>
  <Section>
    <template v-slot:title>
      <h1>Como você está indo hoje</h1>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        Hoje
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
