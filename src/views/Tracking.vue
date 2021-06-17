<template>
  <div class="w-full h-screen flex auto-rows-min max-h-screen">
    <div class="main-content overflow-y-auto flex flex-col gap-6 flex-grow px-4 py-4">
      <TabMenu class="pointer-none" />
      <MemoryConsumption />
      <ProcessingConsumption />
    </div>
    <div class="sidebar h-full flex flex-col flex-grow flex-shrink gap-6 pr-4 py-4">
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
  },
  mounted() {
    setTimeout(() => {
      document.querySelector('.pointer-none').classList.remove('pointer-none')
    }, 800)
  }
}
</script>
<style lang="scss" scoped>
.main-content {
  @include scroll-bar(5px);
}
.sidebar {
  min-width: 350px;
  max-width: 450px;
  z-index: 1;
}
.pointer-none {
  pointer-events: none;
}
.main-content,
.sidebar {
  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
