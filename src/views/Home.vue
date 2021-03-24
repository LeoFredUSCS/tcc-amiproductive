<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  title: "Welcome to your Vue.js App",
  components: {
    HelloWorld
  }
};
</script>
