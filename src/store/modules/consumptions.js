import { getField, updateField } from 'vuex-map-fields'

function defaultState() {
  return {
    chosen_period: 'day',
    consumptions: [
      {
        process_name: 'explorer.exe',
        memmory: {
          percentage: 0.2
        },
        network: {
          percentage: 0.3
        },
        cpu: {
          percentage: 0.5
        },
        power: {
          percentage: 0.4
        }
      },
      {
        process_name: 'chrome.exe',
        memmory: {
          percentage: 0.2
        },
        network: {
          percentage: 0.3
        },
        cpu: {
          percentage: 0.5
        },
        power: {
          percentage: 0.4
        }
      }
    ]
  }
}
export const state = defaultState

// getters
const getters = { getField }

// mutations
const mutations = {
  updateField
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
