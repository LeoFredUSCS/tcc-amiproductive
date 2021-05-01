<template>
  <Section>
    <template v-slot:title>
      <h1>Edite / Classifique seus apps</h1>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        Apps
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
