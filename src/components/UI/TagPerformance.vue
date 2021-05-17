<template>
  <div class="flex flex-col items-center justify-end">
    <TimeSpan>
      {{ formatedTimeSpan(tag.activity) }}
    </TimeSpan>
    <div
      class="percentage-bar my-4 flex rounded-full bg-primary-dark"
      :style="{ 'max-height': barSize.toFixed(2) + '%' }"
    />
    <TagComponent>
      {{ tag.tagName }}
    </TagComponent>
  </div>
</template>

<script>
import { formatedTimeSpan } from "../../plugins/utils"
import TimeSpan from "./TimeSpan"
import TagComponent from "./Tag"

export default {
  props: {
    tag: { type: Object, default: () => null },
    barSize: { type: Number, default: () => null },
  },
  components: {
    TimeSpan,
    TagComponent,
  },
  methods: {
    formatedTimeSpan,
  },
}
</script>

<style lang="scss" scoped>
.percentage-bar {
  height: 200px;
  width: 15px;
}
</style>
