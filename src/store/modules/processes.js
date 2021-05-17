import { getField, updateField } from 'vuex-map-fields'
// import moment from 'moment'
// import 'moment/locale/pt-br'

function defaultState() {
  return {
    processes: {
      explorer: {
        name: 'explorer.exe',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        icon_url: 'image.png',
        created_at: '2021-05-17T08:00:00+0000'
      },
      chrome: {
        name: 'chrome.exe',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        icon_url: 'image.png',
        created_at: '2021-05-16T17:27:53+0000'
      },
      discord: {
        name: 'discord.exe',
        description: 'Processo do Discord',
        status: 'ignored',
        icon_url: 'image.png',
        created_at: '2021-05-15T00:27:53+0000'
      }
    }
  }
}
export const state = defaultState

// getters
const getters = { getField }

// mutations
const mutations = {
  updateField,
  updateStatusField(state, field) {
    state.processes[field.process]['status'] = field.status
    state.processes = { ...state.processes }
  }
}

// actions
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
