<template>
  <Section>
    <template v-slot:title>
      <h2>Como você está indo hoje</h2>
    </template>
    <template v-slot:content>
      <div class="flex justify-around">
        <TagPerformance v-for="(tag, i) in topTags" :key="i" :tag="tag" :bar-size="mapActivityToBars[i]" />
      </div>
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
      let tags = this.todaysTagsActivities(this.tags)
      return orderBy(tags, tag => tag.activity, ['desc']).slice(0, 7)
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

<style lang="scss" scoped></style>
