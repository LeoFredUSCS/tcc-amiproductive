<template>
  <div class="px-8 py-6 bg-white">
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
                class="whitespace-nowrap py-4 w-2/4 border-b-2 font-medium text-sm"
                :class="activeClass[$route.path === '/' ? 'active' : 'default']"
              >
                Aba 1
              </router-link>

              <router-link
                to="/2"
                class="whitespace-nowrap py-4 w-2/4 border-b-2 font-medium text-sm"
                :class="
                  activeClass[$route.path === '/2' ? 'active' : 'default']
                "
                aria-current="page"
              >
                Aba 2
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
      active: 1
    };
  },
  computed: {
    activeClass() {
      return {
        active: "border-black text-black font-bold",
        default:
          "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      };
    }
  },
  methods: {
    select(select) {
      this.active = select;
    }
  }
};
</script>

<style lang="scss" scoped></style>
