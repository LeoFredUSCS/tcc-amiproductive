<template>
  <div class="flex w-full h-full">
    <div class="main-content w-full overflow-x-auto">
      <TabMenu />
      <DailyResumeSection> </DailyResumeSection>
      <TodayTagsSection> </TodayTagsSection>
      <PeriodsTagsSection> </PeriodsTagsSection>
    </div>
    <div class="sidebar h-full">
      <EditAppSection> </EditAppSection>
      <NewAppSection> </NewAppSection>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DailyResumeSection from "@/components/sections/dailyresume/DailyResumeSection";
import TodayTagsSection from "@/components/sections/todaytags/TodayTagsSection";
import PeriodsTagsSection from "@/components/sections/periodstags/PeriodsTagsSection";
import EditAppSection from "@/components/sections/EditSide/EditAppSection";
import NewAppSection from "@/components/sections/newapp/NewAppSection";
import TabMenu from "@/components/UI/TabMenu";

export default {
  name: "Home",
  components: {
    TabMenu,
    DailyResumeSection,
    TodayTagsSection,
    PeriodsTagsSection,
    EditAppSection,
    NewAppSection
  }
};
</script>

<style lang="scss" scoped>
.main-content {
}

.sidebar {
  min-width: 325px;
}

.main-content,
.sidebar {
  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
