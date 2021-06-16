import { getField, updateField } from 'vuex-map-fields'
import moment from 'moment'
moment.locale('pt-br')

const state = () => ({
  tags: [
    {
      tagName: 'Jogos',
      activity: moment(moment())
        .subtract(75, 'minutes')
        .toDate()
    },
    {
      tagName: 'Internet',
      activity: moment(moment())
        .subtract(38, 'minutes')
        .toDate()
    },
    {
      tagName: 'Navegador',
      processes: [{ processName: '', activity: '' }],
      activity: moment(moment())
        .subtract(35, 'minutes')
        .toDate(),
    },
    {
      tagName: 'Mídia',
      activity: moment(moment())
        .subtract(46, 'minutes')
        .toDate()
    },
    {
      tagName: 'Documentos',
      activity: moment(moment())
        .subtract(33, 'minutes')
        .toDate()
    },
    {
      tagName: 'Trabalho',
      activity: moment(moment())
        .subtract(95, 'minutes')
        .toDate()
    },
    {
      tagName: 'Notícias',
      activity: moment(moment())
        .subtract(10, 'minutes')
        .toDate()
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
