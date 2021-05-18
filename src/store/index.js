import { createStore } from 'vuex'
import tags from './modules/tags'
import processes from './modules/processes'
import global from './modules/global'

export default createStore({
  modules: {
    tags,
    processes,
    global
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
