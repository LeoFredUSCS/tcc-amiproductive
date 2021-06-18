<template>
  <Multiselect
    v-model="selectedTags"
    mode="tags"
    placeholder="Selecione uma categoria..."
    trackBy="name"
    label="name"
    :searchable="true"
    :search="true"
    :max="2"
    :clear="false"
    :options="options"
    @click="getTags()"
    @select="addTag"
  >
    <template v-slot:tag="{ option }">
      <Tag :dismissable="true" @dismiss="removeTag(option)">
        {{ option.name }}
      </Tag>
    </template>
  </Multiselect>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapMutations } from 'vuex'
import Multiselect from '@vueform/multiselect'
import Tag from '@/components/UI/Tag'
import { timeStampToMinutes } from '../../plugins/utils'

export default {
  components: {
    Multiselect,
    Tag
  },
  props: {
    app: { type: Object, default: () => {} }
  },
  data() {
    return {
      selectedTags: [],
      options: []
    }
  },
  beforeMount() {
    this.getTags()
    this.tags.forEach(tag => {
      if (tag.relatedApps.map(app => app.appId).includes(this.app.id)) {
        this.selectedTags = [...this.selectedTags, tag.tagName]
      }
    })
  },
  computed: {
    ...mapFields('tags', ['tags']),
    tagsList() {
      return this.tags
    }
  },
  methods: {
    ...mapMutations({
      relateAppToTagToTag: 'tags/relateAppToTag',
      unrelateAppFromTag: 'tags/unrelateAppFromTag'
    }),
    getTags() {
      this.options = this.tags.map(t => {
        return t.tagName
      })
    },
    addTag(option) {
      this.relateAppToTagToTag({
        app: { appId: this.app.id, appActivity: timeStampToMinutes(this.app.created_at) },
        tagName: option
      })
    },
    removeTag(option) {
      this.selectedTags = this.selectedTags.filter(tag => tag !== option.value)
      this.unrelateAppFromTag({
        appId: this.app.id,
        tagName: option.name
      })
    }
  }
}
</script>

<style lang="scss">
.multiselect {
  background-color: #ffffff;
  border-radius: 25px;
  &-input {
    border-radius: 25px;
    overflow: hidden;
  }
}
</style>
