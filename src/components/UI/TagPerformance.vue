<template>
  <div class="flex flex-col items-center mt-auto transition duration-500">
    <div class="bar-wrapper flex flex-col justify-end items-center mb-4">
      <div class="relative percentage-bar flex rounded-full bg-primary-dark transition-all duration-1000" :style="{ 'max-height': barSize.toFixed(2) + '%' }">
        <TimeSpan :activity="tag.tagActivity().toString()" :is-total-activity="true" class="timespan mb-4 absolute bottom-full w-max" />
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
    biggestActivity: { type: Number, default: () => 100 },
    indexPosition: { type: Number, default: () => null }
  },
  components: {
    TimeSpan,
    TagComponent
  },
  computed: {
    barSize() {
      return (this.tag.tagActivity() / this.biggestActivity) * 100
    }
  },
  methods: {
    minutesToTimespan
  }
}
</script>

<style lang="scss" scoped>
.bar-wrapper {
  height: 300px;
  // width: 100px;
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
