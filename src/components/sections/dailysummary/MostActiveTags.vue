<template>
  <div class="flex flex-col flex-grow items-end">
    <h3 class="font-bold w-full mb-3 text-right">Categorias mais ativas</h3>
    <div class="flex flex-wrap">
      <Tag v-for="tag in mostActiveTags" :key="tag">
        {{ tag.tagName }}
      </Tag>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import Tag from '@/components/UI/Tag'
import orderBy from 'lodash/orderBy'
import { todaysTagsActivities } from '../../../plugins/utils'

export default {
  components: {
    Tag
  },
  data() {
    return {}
  },
  methods: {
    todaysTagsActivities
  },
  computed: {
    ...mapFields('tags', ['tags']),
    mostActiveTags() {
      let activeTags = orderBy(this.todaysTagsActivities(this.tags), ['activity'], ['desc'])
      return activeTags.slice(0, 2)
    }
  }
}
</script>

<style lang="scss" scoped></style>
