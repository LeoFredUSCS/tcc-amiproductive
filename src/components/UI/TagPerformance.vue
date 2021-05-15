<template>
  <div class="flex flex-col items-center justify-end">
    <TimeSpan>
      {{ formatedTimeSpan }}
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
import TimeSpan from "./TimeSpan"
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
    TimeSpan,
    TagComponent,
  },
  computed: {
    // moment,
    formatedTimeSpan() {
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
.percentage-bar {
  height: 200px;
  width: 15px;
}
</style>
