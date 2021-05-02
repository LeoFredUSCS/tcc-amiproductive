<template>
  <div class="flex w-full h-full pt-">
    <div class="main-content w-full overflow-x-auto">
      <TabMenu />
    </div>
    <div class="sidebar w-4/12 h-full"></div>
  </div>
</template>

<script>
import TabMenu from "@/components/UI/TabMenu";

export default {
  name: "About",
  components: {
    TabMenu
  }
};
</script>
