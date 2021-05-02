<template>
  <div class="flex flex-col w-1/4">
    <div class="font-bold w-full mb-3">Categorias mais ativas</div>
    <div class="flex flex-wrap">
      <Tag v-for="tag in mostActiveTags" :key="tag">
        {{ tag.tagName }}
      </Tag>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import Tag from "@/components/UI/Tag";

export default {
  components: {
    Tag
  },
  data() {
    return {};
  },
  computed: {
    ...mapFields("tags", ["tags"]),
    mostActiveTags() {
      return this.tags.slice(0, 3);
    }
  }
};
</script>

<style lang="scss" scoped></style>
