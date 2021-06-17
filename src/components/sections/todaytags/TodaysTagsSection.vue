<template>
  <Section>
    <template v-slot:title>
      <h2>Como você está indo hoje</h2>
    </template>
    <template v-slot:content>
      <transition-group name="list-complete" mode="out-in" class="performance-container relative flex justify-around" tag="div">
        <TagPerformance v-for="(tag, i) in topTags" :key="i" :tag="tag" :bar-size="mapActivityToBars[i]" />
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
      let tags = this.todaysTagsActivities(this.tags).filter(tag => tag.activity > 0)
      return orderBy(tags, tag => tag.activity, ['desc'])
    },
    mapActivityToBars() {
      let biggestActivityInMinutes = this.topTags[0].activity
      let activitiesList = this.topTags.map(tag => {
        let currentActivityInMinutes = tag.activity
        return (currentActivityInMinutes / biggestActivityInMinutes) * 100
      })
      return activitiesList
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
</style>
