<template>
  <li class="flex items-center app mb-4" :class="{ 'p-4 border border-gray-300 rounded-lg': !isTracked }">
    <div class="icon app-icon bg-white p-1 w-12 h-12 rounded-full overflow-hidden mr-3">
      <img
          class="app-icon-image w-full h-full "
          :src="
            `https://res.cloudinary.com/de3in00p1/image/upload/ar_1:1,c_thumb,q_auto:good,w_150/icons/${app.name
              .toLowerCase()
              .split(' ')
              .join('_')}.jpg`
          "
        />
    </div>
    <div class="app-edit flex flex-col flex-grow">
      <div class="app-edit-info flex justify-between">
        <span class="font-bold">{{ app.name }}</span>
        <TimeSpan>
          {{ activityTimeSpan }}
        </TimeSpan>
      </div>
      <div class="app-edit-input" v-if="isTracked">
        <input
          type="text"
          name="tags"
          id="tag-input"
          placeholder="Adicione categorias"
          class="rounded-md border border-gray-300 p-2 hover:border-primary focus:border-primary w-full"
        />
      </div>
      <div class="app-user-actions flex items-center justify-between mt-2 font-bold text-xs" v-if="isPending">
        <div class="flex">
          <div
            class="flex border border-primary rounded-sm p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer rounded-r-sm"
            @click="defineAppState('ignored')"
          >
            <EyeOffIcon class="w-4 mr-1" />
            <span class="">Ignorar</span>
          </div>
          <div
            class="flex border border-primary rounded-sm p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer rounded-l-sm"
            @click="defineAppState('tracking')"
          >
            <EyeIcon class="w-4 mr-1" />
            <span class="">Rastrear</span>
          </div>
        </div>
        <a href="#" class="underline text-center">Decidir depois</a>
      </div>
    </div>
  </li>
</template>

<script>
import TimeSpan from './TimeSpan'
import { EyeOffIcon, EyeIcon } from '@heroicons/vue/outline'
import { mapMutations } from 'vuex'

export default {
  components: {
    TimeSpan,
    EyeOffIcon,
    EyeIcon
  },
  props: {
    app: { type: Object, default: () => {} }
  },
  data: () => {
    return {
      icon: '',
      name: 'Aplicativo',
      activityTimeSpan: '1h 25 min',
      belongsTo: []
    }
  },
  methods: {
    ...mapMutations({
      updateStatusField: 'processes/updateStatusField'
    }),
    defineAppState(status) {
      let updatedApp = {
        process: this.app.name,
        status: status
      }
      this.updateStatusField(updatedApp)
    }
  },
  computed: {
    isTracked() {
      if (!this.app) return false
      return this.app.status === 'tracking'
    },
    isPending() {
      if (!this.app) return false
      return this.app.status === 'pending'
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  &-icon {
    &-image {
      // background-image: url('https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841');
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
