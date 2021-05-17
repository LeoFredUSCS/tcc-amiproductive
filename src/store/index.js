import { createStore } from 'vuex'
import tags from './modules/tags'
import processes from './modules/processes'

export default createStore({
  modules: {
    tags,
    processes
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
