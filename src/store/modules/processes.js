import { getField, updateField } from 'vuex-map-fields'

function defaultState() {
  return {
    orderBy: 'created_at',
    processes: [
      {
        id: 'edge',
        name: 'Microsoft Edge',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-06-16T08:00:00+0000'
      },
      {
        id: 'chrome',
        name: 'Google Chrome',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-06-16T17:27:53+0000'
      },
      {
        id: 'discord',
        name: 'Discord',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-16T09:27:53+0000'
      },
      {
        id: 'notepad',
        name: 'Notepad++',
        description: 'Processo do Windows Explorer',
        status: 'pending',
        created_at: '2021-06-16T08:00:00+0000'
      },
      {
        id: 'notion',
        name: 'Notion',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-06-15T10:27:53+0000'
      },
      {
        id: 'slack',
        name: 'Slack',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-16T00:27:53+0000'
      },
      {
        id: 'spotify',
        name: 'Spotify',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-06-16T08:00:00+0000'
      },
      {
        id: 'vlc',
        name: 'VLC Media Player',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-06-16T08:00:00+0000'
      },
      {
        id: 'epic',
        name: 'EpicGamesLauncher',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-06-16T08:00:00+0000'
      },
      {
        id: 'vscode',
        name: 'Visual Studio Code',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-06-15T07:27:53+0000'
      },
      {
        id: 'whatsapp',
        name: 'Whatsapp',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-15T23:27:53+0000'
      },
      {
        id: 'figma',
        name: 'Figma',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-06-16T08:00:00+0000'
      },
      {
        id: 'firefox',
        name: 'Firefox',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-06-16T17:27:53+0000'
      },
      {
        id: 'steam',
        name: 'Steam',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-15T10:27:53+0000'
      },
      {
        id: 'postman',
        name: 'Postman',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-15T11:27:53+0000'
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
