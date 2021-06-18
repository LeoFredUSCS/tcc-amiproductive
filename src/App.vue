<template>
  <router-view />
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapMutations } from 'vuex'
import mitt from 'mitt'
import moment from 'moment'
import 'moment-duration-format'
import 'moment/locale/pt-br'
window.mitt = new mitt()
import { timeStampToMinutes } from './plugins/utils'

export default {
  data() {
    return {
      initDayTime: null,
      ghostApps: { 1: 'calculadora', 2: 'opera', 3: 'acrobat' }
    }
  },
  mounted() {
    let initDay = moment()
      .set('hour', 8)
      .set('minute', 37)
      .format()

    this.initDay(initDay)
    this.updateAppsStartingTime()
    this.initDayTime = initDay
    this.setInitialActivity(initDay)
  },
  created: function() {
    window.onkeydown = e => {
      e.preventDefault()
      this.upatePending(this.ghostApps[e.key])
    }
  },

  computed: {
    ...mapFields('tags', ['tags']),
    ...mapFields('processes', ['processes']),
    ...mapFields('global', ['myDayHasStartedAt'])
  },
  methods: {
    timeStampToMinutes,
    ...mapMutations({
      initDay: 'global/initDay',
      setInitialActivity: 'global/setInitialActivity',
      setDailyActivity: 'processes/setDailyActivity',
      discoverNewApp: 'processes/discoverNewApp',
      updateAppsActivity: 'tags/updateAppsActivity'
    }),
    generateRandomHour() {
      let currentHour = moment().hour()
      let startedAt = moment(this.myDayHasStartedAt).hour()
      let difference = currentHour - startedAt
      return parseInt(Math.random() * (difference - 1) + 1)
    },
    generateRandomMin() {
      let final = parseInt(Math.random() * (59 - 1) + 1)
      return final
    },
    updateAppsStartingTime() {
      this.processes.map(process => {
        let updatedHour = this.generateRandomHour()
        let updatedMin = this.generateRandomMin()
        this.setDailyActivity({
          id: process.id,
          started_at: moment(this.myDayHasStartedAt)
            .add({ hour: updatedHour, minutes: updatedMin })
            .utcOffset('-0300')
            .format()
        })
      })
    },
    getProcessActivity(appId) {
      return this.processes.find(proc => proc.id === appId)
    },
    updateRelatedAppsActivity() {
      this.tags.forEach(tag => {
        tag.relatedApps.forEach(app => {
          let created_at = this.getProcessActivity(app.appId).created_at
          let convertToMinutes = this.timeStampToMinutes(created_at)
          this.updateAppsActivity({
            tagName: tag.tagName,
            appId: app.appId,
            appActivity: convertToMinutes
          })
        })
      })
    },
    upatePending(option) {
      this.discoverNewApp(option)
    }
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  color: $primary;
  box-sizing: border-box;
  height: 100%;
  font-family: 'Roboto Condensed', Roboto, Avenir, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
  background: $bg-primary;
  max-width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
}

#nav {
  width: 100%;
  height: 24px;
  position: absolute;
  user-select: none;
  // cursor: move;
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

.slide-animation {
  animation: slider 10s infinite reverse linear;
}

@keyframes slider {
  0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(1500px);
  }
}
</style>
