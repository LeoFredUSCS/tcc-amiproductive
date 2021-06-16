<template>
  <div class="flex flex-col items-center mt-auto">
    <div class="bar-wrapper  flex flex-col justify-end items-center mb-4">
      <div class="relative percentage-bar flex rounded-full bg-primary-dark" :style="{ 'max-height': barSize.toFixed(2) + '%' }">
        <TimeSpan class="timespan mb-4 absolute bottom-full w-max">
          {{ minutesToTimespan(tag.activity) }}
        </TimeSpan>
      </div>
    </div>
    <TagComponent>
      {{ tag.tagName }}
    </TagComponent>
  </div>
</template>

<script>
import { minutesToTimespan } from '../../plugins/utils'
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
    minutesToTimespan
  }
}
</script>

<style lang="scss" scoped>
.bar-wrapper {
  height: 300px;
  .percentage-bar {
    height: 100%;
    width: 15px;
    .timespan {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
