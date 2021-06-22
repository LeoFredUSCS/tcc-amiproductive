<template>
  <Section>
    <template v-slot:title>
      <h2>Como você está indo em um período maior</h2>
    </template>
    <template v-slot:content>
      <div class="flex flex-col justify-around">
        <div class="days-distribution flex flex-col">
          <div class="day-wrapper grid grid-cols-6 auto-cols-auto relative transition transform-gpu my-3 py-2" v-for="(day, i) in daysOfTheWeek" :key="day">
            <span
              class="day mr-3 self-end col-end-2"
              :class="{
                'today border-b-4 pl-2 border-accent  font-bold': i === today
              }"
            >
              {{ day.day }}
            </span>
            <div class="day-share flex col-start-2 col-end-7">
              <div
                v-for="(tag, j) in day.dominantTags"
                :key="j"
                :class="[j % 2 !== 0 && !tag.isAggregate ? 'second-tag items-start' : 'first-tag items-end', { 'others-tag items-center': tag.isAggregate }]"
                class="share-wrapper first-tag flex flex-col"
                :style="'max-width:' + tag.percentage + '%'"
              >
                <div class="flex items-center gap-1">
                  <Tag :alt-color="j % 2 !== 0 ? 'primary-light' : ''">{{ tag.tagName }}</Tag>
                </div>
                <div class="bar rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-bold">{{ tag.percentage }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Section>
</template>

<script>
import Section from '@/components/UI/Section'
import Tag from '@/components/UI/Tag'
import { mapFields } from 'vuex-map-fields'

export default {
  components: {
    Section,
    Tag
  },
  computed: {
    ...mapFields('tags', ['daysOfTheWeek']),
    today() {
      let now = new Date()
      return now.getDay()
    }
  }
}
</script>

<style lang="scss" scoped>
.day-wrapper {
  &:hover {
    transform: scale(1.02);
    .day:not(.today) {
      text-shadow: 0 0 1px;
      border-bottom: 1px solid $accent;
    }
  }
}
.spacer {
  width: 5px;
  left: -10px;
}
.day-share {
  .share-wrapper {
    width: 100%;
    margin: 0 1px;
    .bar {
      height: 15px;
      width: 100%;
    }
    &.first-tag {
      .bar {
        background: $primary-dark;
      }
    }
    &.second-tag {
      .bar {
        background: $primary-light;
      }
    }
    &.others-tag {
      .tag {
        background: #bbb;
        border-color: #bbb;
      }
      .bar {
        background: #ccc;
      }
    }
  }
}
</style>
