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
import moment from 'moment'

export default {
  components: {
    Section,
    TagPerformance
  },
  computed: {
    ...mapFields('tags', ['tags']),

    topTags() {
      let tags = this.tags
      return orderBy(tags, tag => tag.activity, ['asc']).slice(0, 7)
    },
    mapActivityToBars() {
      let biggestActivityInMinutes = moment(this.topTags[0].activity).diff(moment(), 'minutes')
      let activitiesList = this.topTags.map(tag => {
        let currentActivityInMinutes = moment(tag.activity).diff(moment(), 'minutes')
        return (currentActivityInMinutes / biggestActivityInMinutes) * 100
      })
      return activitiesList
    }
  }
}
</script>

<style lang="scss" scoped></style>
