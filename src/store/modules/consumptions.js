import { getField, updateField } from 'vuex-map-fields'

function defaultState() {
  return {
    chosen_period: 'day',
    consumptions: [
      {
        process_name: 'Trabalho',
        memmory: {
          percentage: 0.2713
        },
        network: {
          percentage: 0.3
        },
        cpu: {
          percentage: 0.2123
        },
        power: {
          percentage: 0.4
        }
      },
      {
        process_name: 'Jogos',
        memmory: {
          percentage: 0.1672
        },
        network: {
          percentage: 0.3
        },
        cpu: {
          percentage: 0.2981
        },
        power: {
          percentage: 0.4
        }
      },
      {
        process_name: 'Notícias',
        memmory: {
          percentage: 0.0478
        },
        network: {
          percentage: 0.3
        },
        cpu: {
          percentage: 0.0344
        },
        power: {
          percentage: 0.4
        }
      },
      {
        process_name: 'Internet',
        memmory: {
          percentage: 0.2293
        },
        network: {
          percentage: 0.3
        },
        cpu: {
          percentage: 0.2267
        },
        power: {
          percentage: 0.4
        }
      },
      {
        process_name: 'Estudo',
        memmory: {
          percentage: 0.2405
        },
        network: {
          percentage: 0.3
        },
        cpu: {
          percentage: 0.1705
        },
        power: {
          percentage: 0.4
        }
      },
      {
        process_name: 'Mídias',
        memmory: {
          percentage: 0.0529
        },
        network: {
          percentage: 0.3
        },
        cpu: {
          percentage: 0.0598
        },
        power: {
          percentage: 0.4
        }
      },
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
