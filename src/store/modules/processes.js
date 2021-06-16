import { getField, updateField } from 'vuex-map-fields'

function defaultState() {
  return {
    processes: [
      {
        name: 'Microsoft Edge',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-05-17T08:00:00+0000'
      },
      {
        name: 'Google Chrome',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-05-16T17:27:53+0000'
      },
      {
        name: 'Discord',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-05-15T00:27:53+0000'
      },
      {
        name: 'Notepad++',
        description: 'Processo do Windows Explorer',
        status: 'pending',
        created_at: '2021-05-17T08:00:00+0000'
      },
      {
        name: 'Notion',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-05-16T17:27:53+0000'
      },
      {
        name: 'Slack',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-05-15T00:27:53+0000'
      },
      {
        name: 'Spotify',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-05-17T08:00:00+0000'
      },
      {
        name: 'EpicGamesLauncher',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-05-17T08:00:00+0000'
      },
      {
        name: 'Visual Studio Code',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-05-16T17:27:53+0000'
      },
      {
        name: 'Whatsapp',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-05-15T00:27:53+0000'
      },
      {
        name: 'Figma',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-05-17T08:00:00+0000'
      },
      {
        name: 'Firefox',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-05-16T17:27:53+0000'
      },
      {
        name: 'Steam',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-05-15T00:27:53+0000'
      },
      {
        name: 'Postman',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-05-15T00:27:53+0000'
      }
    ]
  }
}
export const state = defaultState

// getters
const getters = { getField }

// mutations
const mutations = {
  updateField,
  updateStatusField(state, field) {
    let processIndex = state.processes.findIndex(p => p.name === field.process)
    state.processes[processIndex]['status'] = field.status
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
