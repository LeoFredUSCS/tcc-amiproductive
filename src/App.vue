<template>
  <router-view />
</template>

<script>
import { mapMutations } from 'vuex'
import mitt from 'mitt'
window.mitt = new mitt()

export default {
  mounted() {
    this.setInitialActivity(new Date())
  },
  methods: {
    ...mapMutations({
      setInitialActivity: 'global/setInitialActivity'
    }),
    async getData() {
      const ax = this.axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000,
        headers: { 'Content-Type': 'application/json' }
      })

      try {
        const res = await ax.get('/tags', { data: { qty_per_page: 5, page: 1 } })
        console.log(res)
      } catch (err) {
        console.log(err.response && err.response.data)
      }
    }
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  color: $primary;
  box-sizing: border-box;
  height: 100%;
  font-family: 'Roboto Condensed', Roboto, Avenir, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
  background: $bg-primary;
  max-width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
}

#nav {
  width: 100%;
  height: 24px;
  position: absolute;
  user-select: none;
  // cursor: move;
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

.slide-animation {
  animation: slider 10s infinite reverse linear;
}

@keyframes slider {
  0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(1500px);
  }
}
</style>
