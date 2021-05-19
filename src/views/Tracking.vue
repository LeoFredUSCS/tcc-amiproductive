<template>
  <div class="w-full h-screen flex auto-rows-min max-h-screen">
    <div class="main-content overflow-y-auto flex flex-col gap-6 flex-grow px-4 py-4 w-3/5">
      <TabMenu />
      <MemoryConsumption />
      <ProcessingConsumption />
    </div>
    <div class="sidebar flex flex-col flex-grow flex-shrink pr-4 py-4 border">
      <TrackingBar />
    </div>
  </div>
</template>

<script>
import TabMenu from '@/components/UI/TabMenu'
import TrackingBar from '@/components/sections/trackingbar/TrackingBar'
import MemoryConsumption from '@/components/sections/memoryconsumption/MemoryConsumption'
import ProcessingConsumption from '@/components/sections/processingconsumption/ProcessingConsumption'

export default {
  name: 'About',
  components: {
    TabMenu,
    TrackingBar,
    MemoryConsumption,
    ProcessingConsumption
  }
}
</script>
<style lang="scss" scoped>
.main-content {
  @include scroll-bar(5px);
  z-index: 1;
}
.sidebar {
  min-width: 350px;
  max-width: 450px;
}
</style>
