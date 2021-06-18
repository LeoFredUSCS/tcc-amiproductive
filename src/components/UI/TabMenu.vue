<template>
  <div class="my-5">
    <div class="w-full mx-auto pr-4">
      <div>
        <div class="flex items-center justify-center">
          <div class="app-logo mr-auto w-2/4">
            <img src="https://res.cloudinary.com/de3in00p1/image/upload/c_fill,f_auto,q_auto:best/logo/logo_05_xbgw3x.png" alt="" />
          </div>
          <div class="w23/4">
            <div class="ml-auto border-b transition  w-min border-gray-300">
              <nav class="flex justify-center items-center text-center" aria-label="Tabs">
                <router-link
                  to="/"
                  class="whitespace-nowrap py-4 w-max border-b-4 font-medium text-lg px-5"
                  :class="activeClass[$route.path === '/' ? 'active' : 'default']"
                >
                  Monitoramento
                </router-link>
                <router-link
                  to="/tracking"
                  class="whitespace-nowrap transition py-4 w-max border-b-4 font-medium text-lg px-5"
                  :class="activeClass[$route.path === '/tracking' ? 'active' : 'default']"
                  aria-current="page"
                >
                  Consumo / Aplicativos
                </router-link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: '/'
    }
  },
  computed: {
    activeClass() {
      return {
        active: 'border-primary text-primary font-bold',
        default: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.app-logo {
  width: 230px;
  height: auto;
  @media screen and (min-width: 1195px) {
    width: 280px;
  }
}
.router-link-active {
  box-shadow: 0 30px 20px -15px #d2dce9;
  font-weight: 600;
}
</style>
