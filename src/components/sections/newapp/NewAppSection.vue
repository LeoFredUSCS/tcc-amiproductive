<template>
  <Section>
    <template v-slot:title>
      <h2>Novo app foi identificado</h2>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        Novos apps
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
