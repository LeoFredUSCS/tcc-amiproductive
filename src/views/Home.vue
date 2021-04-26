<template>
  <div class="flex w-full h-full">
    <div class="main-content w-full overflow-x-auto">
      <TabMenu />
      <DailyResume> </DailyResume>
    </div>
    <div class="sidebar  w-4/12 h-full"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import DailyResume from "@/components/sections/dailyresume/DailyResume";
import TabMenu from "@/components/UI/TabMenu";

export default {
  name: "Home",
  components: {
    DailyResume,
    TabMenu
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  &::-webkit-scrollbar {
    width: 0px;
  }

  // /* Track */
  // &::-webkit-scrollbar-track {
  //   box-shadow: inset 0 0 5px grey;
  //   border-radius: 10px;
  // }

  // /* Handle */
  // &::-webkit-scrollbar-thumb {
  //   background: darkgray;
  //   border-radius: 10px;
  // }
}
</style>
