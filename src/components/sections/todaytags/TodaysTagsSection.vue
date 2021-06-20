<template>
  <Section>
    <template v-slot:title>
      <h2>Como você está indo hoje</h2>
    </template>
    <template v-slot:content>
      <transition-group name="list-complete" mode="out-in" class="performance-container relative flex justify-around" tag="div">
        <TagPerformance v-for="(tag, i) in topTags" :key="i" :tag="tag" :biggestActivity="biggestActivity" />
      </transition-group>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import TagPerformance from '@/components/UI/TagPerformance'
import { mapFields } from 'vuex-map-fields'
import orderBy from 'lodash/orderBy'
import { todaysTagsActivities } from '../../../plugins/utils'

export default {
  components: {
    Section,
    TagPerformance
  },
  methods: {
    todaysTagsActivities
  },
  computed: {
    ...mapFields('tags', ['tags']),
    topTags() {
      return orderBy(
        this.tags.filter(tag => tag.tagActivity() > 0),
        tag => tag.tagActivity(),
        ['desc']
      )
    },
    biggestActivity() {
      return this.topTags
        .map(tag => tag.tagActivity())
        .reduce((acc, curr) => {
          return acc > curr ? acc : curr
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.performance-container {
  height: 390px;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.list-complete-move {
  transition: all 1s;
}
</style>
