<template>
  <div class="w-full h-screen flex auto-rows-min gap-0 max-h-screen">
    <div
      class="main-content overflow-y-auto flex flex-col gap-6 flex-grow px-4 py-4"
    >
      <TabMenu />
      <DailySummarySection />
      <TodaysTagsSection />
      <PeriodsTagsSection />
    </div>
    <div
      class="sidebar h-full flex flex-col flex-grow flex-shrink gap-6 pr-4 py-4"
    >
      <EditAppSection />
      <NewAppSection />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DailySummarySection from "@/components/sections/dailysummary/DailySummarySection"
import TodaysTagsSection from "@/components/sections/todaytags/TodaysTagsSection"
import PeriodsTagsSection from "@/components/sections/periodstags/PeriodsTagsSection"
import EditAppSection from "@/components/sections/EditSide/EditAppSection"
import NewAppSection from "@/components/sections/newapp/NewAppSection"
import TabMenu from "@/components/UI/TabMenu"

export default {
  name: "Home",
  components: {
    TabMenu,
    DailySummarySection,
    TodaysTagsSection,
    PeriodsTagsSection,
    EditAppSection,
    NewAppSection,
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  // @include scroll-bar(5px);
}

.sidebar {
  min-width: 350px;
  max-width: 400px;
}

.main-content,
.sidebar {
  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
