<template>
  <div class="flex flex-col items-center">
    <TimeFrame>
      {{ formatedTimeFrame }}
      <!-- {{ moment(tag.activity) }} -->
    </TimeFrame>
    <div class="bar-wrapper my-4 flex ">
      <div
        class="tag-bar rounded-full bg-primary-dark mt-auto"
        :style="{ 'max-height': barSize.toFixed(2) + '%' }"
      />
    </div>
    <TagComponent>
      {{ tag.tagName }}
    </TagComponent>
  </div>
</template>

<script>
import TimeFrame from "./TimeFrame"
import TagComponent from "./Tag"
import moment from "moment"
import "moment-duration-format"
import "moment/locale/pt-br"

export default {
  props: {
    tag: { type: Object, default: () => null },
    barSize: { type: Number, default: () => null },
  },
  components: {
    TimeFrame,
    TagComponent,
  },
  computed: {
    // moment,
    formatedTimeFrame() {
      let activityInMinutes =
        moment(this.tag.activity).diff(moment(), "minutes") * -1
      return moment
        .duration(activityInMinutes, "minutes")
        .format("h [hrs] m [min]")
      // return moment(this.tag.activity).fromNow(true)
    },
  },
}
</script>

<style lang="scss" scoped>
.bar-wrapper {
  height: 200px;
  .tag-bar {
    height: 100%;
    width: 15px;
  }
}
</style>
