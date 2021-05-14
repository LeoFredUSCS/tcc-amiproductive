<template>
  <div class="my-5">
    <div class="w-2/4 mx-auto">
      <div>
        <div class="block">
          <div class="border-b border-gray-200">
            <nav
              class="-mb-px flex justify-center items-center text-center"
              aria-label="Tabs"
            >
              <router-link
                to="/"
                class="whitespace-nowrap py-4 w-2/4 border-b-2 font-medium text-lg"
                :class="activeClass[$route.path === '/' ? 'active' : 'default']"
              >
                Resumo
              </router-link>

              <router-link
                to="/tracking"
                class="whitespace-nowrap py-4 w-2/4 border-b-2 font-medium text-lg"
                :class="
                  activeClass[
                    $route.path === '/tracking' ? 'active' : 'default'
                  ]
                "
                aria-current="page"
              >
                Rastreamento
              </router-link>
            </nav>
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
      active: "/",
    }
  },
  computed: {
    activeClass() {
      return {
        active: "border-black text-black font-bold",
        default:
          "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
      }
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
