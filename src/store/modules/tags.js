import { getField, updateField } from "vuex-map-fields"
import moment from 'moment'
import 'moment/locale/pt-br'

const state = () => ({
  tags: [
    {
      tagName: "Jogos",
      // activity: "1h15 min"
      activity: moment(moment().locale('pt-br')).subtract(75, 'minutes').toDate()
    },
    {
      tagName: "Internet",
      // activity: "38 min"
      activity: moment(moment().locale('pt-br')).subtract(38, 'minutes').toDate()
    },
    {
      tagName: "Navegador",
      // activity: "35 min"
      activity: moment(moment().locale('pt-br')).subtract(35, 'minutes').toDate()
    },
    {
      tagName: "Mídia",
      // activity: "46 min"
      activity: moment(moment().locale('pt-br')).subtract(46, 'minutes').toDate()
    },
    {
      tagName: "Documentos",
      // activity: "33 min"
      activity: moment(moment().locale('pt-br')).subtract(33, 'minutes').toDate()
    },
    {
      tagName: "Trabalho",
      // activity: "1h35 min"
      activity: moment(moment().locale('pt-br')).subtract(95, 'minutes').toDate()
    },
    {
      tagName: "Notícias",
      // activity: "10 min"
      activity: moment(moment().locale('pt-br')).subtract(10, 'minutes').toDate()
    }
  ]
})

// getters
const getters = { getField }

// mutations
const mutations = { updateField }

// actions
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
