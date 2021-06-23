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
      ghostApps: {
        1: {
          id: 'calculadora',
          name: 'Calculadora'
        },
        2: {
          id: 'opera',
          name: 'Navegador Opera'
        },
        3: {
          id: 'acrobat',
          name: 'Adobe Acrobat DC'
        }
      }
    }
  },
  mounted() {
    let initDay = moment()
      .set('hour', 9)
      .set('minute', 42)
      .format()

    this.initDay(initDay)
    this.updateAppsStartingTime()
    this.initDayTime = initDay
    this.setInitialActivity(initDay)
  },
  created: function() {
    window.onkeydown = e => {
      // e.preventDefault()
      this.ghostApps[e.key] && this.updatePending(this.ghostApps[e.key])
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
      discoverNewApp: 'processes/discoverNewApp',
      setDailyActivity: 'processes/setDailyActivity',
      updateTags: 'tags/updateTags',
      updateAppsActivity: 'tags/updateAppsActivity'
    }),
    generateRandomHour() {
      let currentHour = moment().hour()
      let startedAt = moment(this.myDayHasStartedAt).hour()
      let difference = currentHour - startedAt
      return parseInt(Math.random() * (difference - 0) + 0)
    },
    generateRandomMinutes(updatedHour) {
      let currentMinute = moment().minutes()
      let startedAt = moment(this.myDayHasStartedAt).minutes()
      let difference = updatedHour === 0 ? (startedAt < currentMinute ? currentMinute : 59) : 59
      return parseInt(Math.random() * (difference - 0) + 0)
    },
    generateRandomMin() {
      let final = parseInt(Math.random() * (59 - 0) + 0)
      return final
    },
    updateAppsStartingTime() {
      this.processes.map(process => {
        let updatedHour = this.generateRandomHour()
        let updatedMin = this.generateRandomMinutes(updatedHour)
        const processData = {
          id: process.id,
          started_at: moment(this.myDayHasStartedAt)
            .add({ hour: updatedHour, minutes: updatedMin })
            .utcOffset('-0300')
            .format()
        }
        this.setDailyActivity(processData)
        this.updateTags(processData)
      })
    },
    updatePending(option) {
      this.discoverNewApp(option.id)
      new Notification(`Novo Aplicativo Identificado`, {
        body: option.name,
        icon: 'https://res.cloudinary.com/de3in00p1/image/upload/icons/app-icon.png'
      }).onclick = () => window.open()
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
