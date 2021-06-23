<template>
  <Section>
    <template v-slot:title>
      <h2>Como você está indo hoje</h2>
    </template>
    <template v-slot:content>
      <transition-group name="list-complete" mode="out-in" class="performance-container relative flex justify-around" tag="div">
        <TagPerformance v-for="(tag, i) in topTags" :key="i" :tag="tag" :biggestActivity="biggestActivity" class="list-complete-item" />
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
        .reduce((first, next) => {
          return first > next ? first : next
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.performance-container {
  height: 390px;
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
}
.list-complete-leave-active {
  position: absolute;
  right: -30px;
  bottom: 0;
}
.list-complete-move {
  background: #eee;
  border-radius: 15px;
  transition: all 1500ms;
}
</style>
