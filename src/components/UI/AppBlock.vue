<template>
  <li class="flex items-center app mb-4" :class="{ 'p-4 border border-gray-300 rounded-lg': !isTracked }">
    <div class="icon app-icon w-12 h-12 rounded-full overflow-hidden mr-3">
      <div class="app-icon-image w-full h-full "></div>
    </div>
    <div class="app-edit flex flex-col flex-grow">
      <div class="app-edit-info flex justify-between">
        <span class="font-bold">{{ appName }}</span>
        <TimeSpan>
          {{ activityTimeSpan }}
        </TimeSpan>
      </div>
      <div class="app-edit-input">
        <input
          type="text"
          name="tags"
          id="tag-input"
          placeholder="Adicione categorias"
          class="rounded-md border border-gray-300 p-2 hover:border-primary focus:border-primary w-full"
        />
      </div>
      <div class="app-user-actions flex items-center justify-between mt-2 font-bold text-xs" v-if="!isTracked">
        <div class="flex">
          <div class="flex border border-primary rounded-sm p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer rounded-r-sm">
            <EyeOffIcon class="w-4 mr-1" />
            <span class="">Ignorar</span>
          </div>
          <div class="flex border border-primary rounded-sm p-1 px-2 hover:bg-primary hover:text-white transition cursor-pointer rounded-l-sm">
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
  computed: {
    isTracked() {
      if (!this.app) return false
      return this.app.status === 'tracking'
    },
    appName() {
      if (!this.app) return 'aplicativo'
      let name = this.app.name.split('.')[0]
      let capital = name[0].toUpperCase()
      return capital + name.substring(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  &-icon {
    &-image {
      background-image: url('https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841');
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
