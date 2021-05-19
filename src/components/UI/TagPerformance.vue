<template>
  <div class="flex flex-col items-center">
    <div class="bar-wrapper flex flex-col justify-end items-center mb-4">
      <TimeSpan class=" mb-4">
        {{ formatedTimeSpan(tag.activity) }}
      </TimeSpan>
      <div class="percentage-bar flex rounded-full bg-primary-dark" :style="{ 'max-height': barSize.toFixed(2) + '%' }" />
    </div>
    <TagComponent>
      {{ tag.tagName }}
    </TagComponent>
  </div>
</template>

<script>
import { formatedTimeSpan } from '../../plugins/utils'
import TimeSpan from './TimeSpan'
import TagComponent from './Tag'

export default {
  props: {
    tag: { type: Object, default: () => null },
    barSize: { type: Number, default: () => null }
  },
  components: {
    TimeSpan,
    TagComponent
  },
  methods: {
    formatedTimeSpan
  }
}
</script>

<style lang="scss" scoped>
.bar-wrapper {
  height: 300px;
  .percentage-bar {
    height: 100%;
    width: 15px;
  }
}
</style>
