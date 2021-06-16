<template>
  <Multiselect
    v-model="selectedTags"
    mode="tags"
    placeholder="Select employees"
    trackBy="name"
    label="name"
    :searchable="true"
    :search="true"
    :max="2"
    :clear="false"
    :options="options"
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
    this.options = this.getTags()
  },
  computed: {
    ...mapFields('tags', ['tags'])
  },
  methods: {
    ...mapMutations({
      relateAppToTag: 'tags/relateApp',
      removeAppFromTag: 'tags/removeAppFromTag'
    }),
    getTags() {
      return this.tags.map(t => {
        return t.tagName
      })
    },
    addTag(option) {
      this.relateAppToTag({ app: this.app, tagName: option })
    },
    removeTag(option) {
      this.selectedTags = this.selectedTags.filter(tag => tag !== option.value)
      this.removeAppFromTag({ app: this.app, tagName: option })
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
