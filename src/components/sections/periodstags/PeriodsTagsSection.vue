<template>
  <Section>
    <template v-slot:title>
      <h2>Como você está indo em um período maior</h2>
    </template>
    <template v-slot:content>
      <div class="flex flex-col justify-around">
        <div class="text-center mb-8">Períodos</div>

        <div class="days-distribution flex flex-col">
          <div
            class="day grid grid-cols-7 auto-cols-auto my-3"
            v-for="(day, i) in daysOfTheWeek"
            :key="i"
          >
            <span class="self-end text-sm col-end-2 font-bold mr-3">
              {{ day }}
            </span>
            <div class="day-share flex col-start-2 col-end-8">
              <div class="share-wrapper first-tag flex flex-col items-end">
                <Tag>Tag 1</Tag>
                <div class="bar rounded-full"></div>
              </div>
              <div class="share-wrapper second-tag flex flex-col items-start">
                <Tag>Tag 2</Tag>
                <div class="bar rounded-full"></div>
              </div>
              <div class="share-wrapper others-tag flex flex-col items-center">
                <Tag>Outros</Tag>
                <div class="bar rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Section>
</template>

<script>
import Section from "@/components/UI/Section"
import Tag from "@/components/UI/Tag"

export default {
  components: {
    Section,
    Tag,
  },
  data() {
    return {
      daysOfTheWeek: [
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado",
        "Domingo",
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.day-share {
  .share-wrapper {
    width: 100%;
    margin: 0 1px;
    .bar {
      height: 7px;
      width: 100%;
    }
    &.first-tag {
      .bar {
        background: black;
      }
    }
    &.second-tag {
      .bar {
        background: #999;
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
