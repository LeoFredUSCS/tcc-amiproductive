<template>
  <li
    class="flex items-center app mb-4"
    :class="{ 'p-3 border border-gray-300 rounded-lg': !isTracked }"
  >
    <div class="shadow-md app-icon w-12 h-12 rounded-full overflow-hidden mr-3">
      <div class="app-icon-image w-full h-full "></div>
    </div>
    <div class="app-edit flex flex-col flex-grow">
      <div class="app-edit-info flex justify-between">
        <span class="font-bold">{{ name }}</span>
        <TimeFrame>
          {{ activityTimeFrame }}
        </TimeFrame>
      </div>
      <div class="app-edit-input">
        <input
          type="text"
          name="tags"
          id="tag-input"
          placeholder="Adicione categorias"
          class="rounded-md border border-gray-300 p-2 hover:border-black focus:border-black w-full"
        />
      </div>
      <div
        class="app-user-actions flex items-center justify-between mt-2 font-bold text-xs"
        v-if="!isTracked"
      >
        <div
          class="cursor-pointer hover:font-bold inline-flex items-center justify-center p-2 px-3 h-full border border-black font-medium rounded-md"
        >
          <EyeOffIcon class="w-4 mr-2" />
          <span class="">Bloquear</span>
        </div>
        <a href="#" class="underline text-center">Decidir depois</a>
      </div>
    </div>
  </li>
</template>

<script>
import TimeFrame from "./TimeFrame"
import { EyeOffIcon } from "@heroicons/vue/outline"

export default {
  components: {
    TimeFrame,
    EyeOffIcon,
  },
  props: {
    isTracked: { type: Boolean, default: () => false },
  },
  data: () => {
    return {
      icon: "",
      name: "Aplicativo",
      activityTimeFrame: "1h 25 min",
      belongsTo: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.app {
  &-icon {
    &-image {
      background-image: url("https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841");
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
