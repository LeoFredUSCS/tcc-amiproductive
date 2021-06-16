<template>
  <div class="icon app-icon bg-white p-1 rounded-full overflow-hidden" :class="isHighlighted ? ' w-12 h-12' : 'w-10 h-10 mr-3'">
    <img
      class="app-icon-image w-full h-full "
      :src="`https://res.cloudinary.com/de3in00p1/image/upload/ar_1:1,c_thumb,q_auto:good,w_150/icons/${appIconSlug}.jpg`"
    />
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      default: () => 'Aplitativo'
    },
    isHighlighted: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    appIconSlug() {
      return this.appName
        .toLowerCase()
        .split(' ')
        .join('_')
    }
  }
}
</script>

<style></style>
