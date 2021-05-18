import { getField, updateField } from "vuex-map-fields"

function defaultState() {
  return {
    'started_at': 'null'
  }
}
export const state = defaultState

// getters
const getters = { getField }

// mutations
const mutations = {
  updateField,

  setInitialActivity(state, field) {
    state['started_at'] = field
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
