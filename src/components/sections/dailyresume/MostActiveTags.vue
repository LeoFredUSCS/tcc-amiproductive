<template>
  <div class="flex flex-col w-1/4">
    <div class="font-bold w-full mb-3">Categorias mais ativas</div>
    <div class="flex flex-wrap">
      <Tag v-for="tag in tags" :key="tag">
        {{ tag }}
      </Tag>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/UI/Tag";
export default {
  components: {
    Tag
  },
  data() {
    return {
      tags: ["Jogos", "Trabalho"]
    };
  }
};
</script>

<style lang="scss" scoped></style>
