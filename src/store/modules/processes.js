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
        created_at: '2021-06-17T08:00:00-0300'
      },
      {
        id: 'chrome',
        name: 'Google Chrome',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-06-17T17:27:53-0300'
      },
      {
        id: 'discord',
        name: 'Discord',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-17T09:27:53-0300'
      },
      {
        id: 'notepad',
        name: 'Notepad++',
        description: 'Processo do Windows Explorer',
        status: 'pending',
        created_at: '2021-06-17T08:00:00-0300'
      },
      {
        id: 'notion',
        name: 'Notion',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-06-17T10:27:53-0300'
      },
      {
        id: 'slack',
        name: 'Slack',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-17T00:27:53-0300'
      },
      {
        id: 'spotify',
        name: 'Spotify',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-06-17T08:00:00-0300'
      },
      {
        id: 'vlc',
        name: 'VLC Media Player',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-06-17T08:00:00-0300'
      },
      {
        id: 'epic',
        name: 'EpicGamesLauncher',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-06-17T08:00:00-0300'
      },
      {
        id: 'vscode',
        name: 'Visual Studio Code',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-06-17T07:27:53-0300'
      },
      {
        id: 'whatsapp',
        name: 'Whatsapp',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-17T23:27:53-0300'
      },
      {
        id: 'figma',
        name: 'Figma',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        created_at: '2021-06-17T08:00:00-0300'
      },
      {
        id: 'firefox',
        name: 'Firefox',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        created_at: '2021-06-17T17:27:53-0300'
      },
      {
        id: 'steam',
        name: 'Steam',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-17T10:27:53-0300'
      },
      {
        id: 'postman',
        name: 'Postman',
        description: 'Processo do Discord',
        status: 'pending',
        created_at: '2021-06-17T11:27:53-0300'
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
  },
  setDailyActivity(state, app) {
    let process = state.processes.find(proc => proc.id === app.id)
    process.created_at = app.started_at
  },
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
