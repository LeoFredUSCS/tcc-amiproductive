import { createStore } from 'vuex'
import tags from './modules/tags'
import processes from './modules/processes'
import consumptions from './modules/consumptions'
import global from './modules/global'

export default createStore({
  modules: {
    tags,
    processes,
    global,
    consumptions
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
