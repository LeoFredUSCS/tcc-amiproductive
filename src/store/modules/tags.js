import { getField, updateField } from 'vuex-map-fields'
import moment from 'moment'
moment.locale('pt-br')

const state = () => ({
  tags: [
    {
      tagName: 'Jogos',
      relatedApps: [
        {
          appId: 'discord',
          appActivity: 250
        },
        {
          appId: 'epic',
          appActivity: 65
        },
        {
          appId: 'steam',
          appActivity: 123
        }
      ]
    },
    {
      tagName: 'Trabalho',
      relatedApps: [
        {
          appId: 'notion',
          appActivity: 65
        },
        {
          appId: 'slack',
          appActivity: 35
        },
        {
          appId: 'vscode',
          appActivity: 450
        },
        {
          appId: 'firefox',
          appActivity: 4
        },
        {
          appId: 'postman',
          appActivity: 35
        },
        {
          appId: 'figma',
          appActivity: 35
        },
        {
          appId: 'notepad',
          appActivity: 35
        },
        {
          appId: 'chrome',
          appActivity: 379
        },
        {
          appId: 'edge',
          appActivity: 15
        }
      ]
    },
    {
      tagName: 'Notícias',
      relatedApps: [
        {
          appId: 'chrome',
          appActivity: 379
        }
      ]
    },
    {
      tagName: 'Internet',
      relatedApps: [
        {
          appId: 'chrome',
          appActivity: 379
        },
        {
          appId: 'whatsapp',
          appActivity: 92
        },
        {
          appId: 'discord',
          appActivity: 250
        },
        {
          appId: 'edge',
          appActivity: 15
        }
      ]
    },
    {
      tagName: 'Estudo',
      relatedApps: [
        {
          appId: 'discord',
          appActivity: 250
        },
        {
          appId: 'notepad',
          appActivity: 35
        },
        {
          appId: 'notion',
          appActivity: 65
        },
        {
          appId: 'vscode',
          appActivity: 450
        },
        {
          appId: 'whatsapp',
          appActivity: 92
        },
        {
          appId: 'figma',
          appActivity: 35
        },
        {
          appId: 'postman',
          appActivity: 35
        }
      ]
    },
    {
      tagName: 'Mídias',
      relatedApps: [
        {
          appId: 'vlc',
          appActivity: 25
        },
        {
          appId: 'spotify',
          appActivity: 25
        },
        {
          appId: 'chrome',
          appActivity: 379
        }
      ]
    }
  ]
})

// getters
const getters = { getField }

// mutations
const mutations = {
  updateField,
  insertNewTag(state, tag) {
    state.tags.push(tag)
  },
  updateAppsActivity(state, data) {
    let tag = state.tags.find(tag => tag.tagName === data.tagName)
    let app = tag.relatedApps.find(app => app.appId === data.appId)
    app.appActivity = data.appActivity
  },
  relateAppToTag(state, data) {
    let targetTag = state.tags.find(tag => tag.tagName === data.tagName)
    targetTag['relatedApps'].push(data.app)
  },
  unrelateAppFromTag(state, data) {
    let targetTag = state.tags.find(tag => tag.tagName === data.tagName)
    targetTag['relatedApps'] = targetTag['relatedApps'].filter(app => app.appId !== data.appId)
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
