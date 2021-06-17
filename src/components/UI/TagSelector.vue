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
      selectedTags: null,
      options: []
    }
  },
  beforeMount() {
    this.getTags()
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
.multiselect-tag.is-user {
  padding: 5px 8px;
  border-radius: 22px;
  background: #35495e;
  margin: 3px 3px 8px;
}

.multiselect-tag.is-user img {
  width: 18px;
  border-radius: 50%;
  height: 18px;
  margin-right: 8px;
  border: 2px solid #ffffffbf;
}

.multiselect-tag.is-user i:before {
  color: #ffffff;
  border-radius: 50%;
}
</style>
