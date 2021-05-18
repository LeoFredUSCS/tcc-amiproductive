<template>
  <Section>
    <template v-slot:title>
      <h2>Como você está indo em um período maior</h2>
    </template>
    <template v-slot:content>
      <div class="flex flex-col justify-around">
        <!-- <div class="text-center mb-8">Períodos</div> -->

        <div class="days-distribution flex flex-col">
          <div class="day-wrapper grid grid-cols-6 auto-cols-auto relative transition transform-gpu my-3 py-2" v-for="(day, i) in daysOfTheWeek" :key="day">
            <span
              class="day mr-3 self-end col-end-2"
              :class="{
                'today border-b-4 pl-2 border-accent  font-bold': i === today
              }"
            >
              {{ day }}
            </span>
            <div class="day-share flex col-start-2 col-end-7">
              <div class="share-wrapper first-tag flex flex-col items-end">
                <div class="flex items-center gap-1">
                  <Tag>Tag 1</Tag>
                </div>
                <div class="bar rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-bold">33%</span>
                </div>
              </div>
              <div class="share-wrapper second-tag flex flex-col items-start ">
                <Tag :alt-color="'primary-light'">Tag 2</Tag>
                <div class="bar rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-bold">33%</span>
                </div>
              </div>
              <div class="share-wrapper others-tag flex flex-col items-center">
                <Tag>Outros</Tag>
                <div class="bar rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-bold">33%</span>
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

export default {
  components: {
    Section,
    Tag
  },
  data() {
    return {
      daysOfTheWeek: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    }
  },
  computed: {
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
