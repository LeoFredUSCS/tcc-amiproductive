<template>
  <router-view />
</template>

<style lang="scss">
html,
body,
#app {
  box-sizing: border-box;
  height: 100%;
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
}

#app {
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
