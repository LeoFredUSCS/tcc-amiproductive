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
          class="shadow-sm rounded-lg w-full border-gray-300 hover:border-primary  rounded-r-none border py-2 px-4"
          placeholder="Digite a nova categoria"
          v-model.trim="newTag"
        />
      </div>
      <button
        type="submit"
        class="w-full inline-flex items-center justify-center p-2 px-3 h-full border border-primary hover:bg-primary-darker shadow-lg trandition font-medium rounded-lg rounded-l-none text-white bg-primary-dark sm:mt-0 sm:w-auto"
      >
        Adicionar
      </button>
    </form>
    <transition name="fade">
      <div v-if="error" class="status-msg flex items-center absolute justify-center w-full rounded-md py-1 font-bold shadow-md" :class="setErrClass">
        <CheckCircleIcon v-if="errType === 'success'" class="w-5 h-5 mr-1" />
        <ExclamationCircleIcon v-else class="w-5 h-5 mr-1" />
        {{ statusValue }}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapMutations } from 'vuex'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/outline'

export default {
  components: { CheckCircleIcon, ExclamationCircleIcon },
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
          msg: 'Nova categoria adicionada!'
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
      return this.errors?.[this.error]?.type === 'fail' ? 'text-red-500 bg-red-100' : 'text-green-500 bg-green-100'
    },
    errType() {
      return this.errors?.[this.error]?.type
    },
    statusValue() {
      return this.errors[this.error]?.msg
    }
  },

  methods: {
    ...mapMutations({
      insertNewTag: 'tags/insertNewTag'
    }),

    addNewTag() {
      this.error = null
      if (!this.newTag) {
        this.error = 1
        this.clearStatus()
        return
      }
      let res = this.tags.filter(tag => tag.tagName.toLowerCase() === this.newTag.toLowerCase())
      if (res.length > 0) {
        this.error = 2
        return this.clearStatus()
      }
      this.error = 3
      this.clearStatus()
      this.insertNewTag({ tagName: this.newTag, activity: null, relatedApps: [] })
    },

    clearStatus() {
      setTimeout(() => {
        if (this.errType === 'success') this.newTag = null
        this.error = null
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.status-msg {
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 225%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
