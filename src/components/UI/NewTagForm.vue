<template>
  <div class="relative">
    <h3 class="text-lg leading-6 font-bold">
      Adicionar nova categoria
    </h3>

    <form class="mt-2 sm:flex sm:items-center" @submit.prevent="addNewTag">
      <div class="w-full flex">
        <input
          type="text"
          name="new-tag"
          id="new_tag"
          class="shadow-sm w-full border-gray-300 hover:border-primary rounded-md rounded-r-none border p-2"
          placeholder="Digite a nova categoria"
          v-model.trim="newTag"
        />
      </div>
      <button
        type="submit"
        class="w-full inline-flex items-center justify-center p-2 px-3 h-full border border-primary hover:bg-primary-dark trandition shadow-sm font-medium rounded-md rounded-l-none text-white bg-primary-dark sm:mt-0 sm:w-auto"
      >
        Adicionar
      </button>
    </form>
    <transition name="fade">
      <div v-if="error" class="status-msg absolute" :class="setErrClass">{{ statusValue }}</div>
    </transition>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  data: () => {
    return {
      newTag: null,
      status: null,
      error: null,
      errors: {
        1: {
          type: 'fail',
          msg: 'Digite o nome de uma nova categoria...'
        },
        2: {
          type: 'fail',
          msg: 'Categoria já existe!'
        },
        3: {
          type: 'success',
          msg: 'Categoria adicionada!'
        }
      }
    }
  },

  computed: {
    ...mapFields('tags', ['tags']),
    name() {
      return this.data
    },
    setErrClass() {
      return this.errors?.[this.error]?.type === 'fail' ? 'text-red-500' : 'text-green-500'
    },
    statusValue() {
      return this.errors[this.error]?.msg
    }
  },

  methods: {
    addNewTag() {
      this.error = null
      if (!this.newTag) {
        this.error = 1
        this.clearStatus()
        return
      }
      let res = this.tags.filter(t => t.tagName.toLowerCase() === this.newTag.toLowerCase())
      if (res.length > 0) {
        this.error = 2
        return this.clearStatus()
      }
      this.error = 3
      this.clearStatus()
      this.newTag = null
      this.tags.push({ tagName: this.newTag, activity: null })
    },

    clearStatus() {
      setTimeout(() => (this.error = null), 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.status-msg {
  transform: translate(0.25rem, 1rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
