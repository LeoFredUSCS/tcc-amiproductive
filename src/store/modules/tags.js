import { getField, updateField } from 'vuex-map-fields'
import Tag from '../../plugins/tagClass'
import { timeStampToMinutes } from '../../plugins/utils'
import moment from 'moment'
moment.locale('pt-br')

let tagList = []
const receivedTags = [
  {
    tagName: 'Jogos',
    relatedApps: [
      {
        appId: 'epic',
        appActivity: 65
      }
    ]
  },
  {
    tagName: 'Trabalho',
    relatedApps: [
      {
        appId: 'slack',
        appActivity: 35
      },
      {
        appId: 'vscode',
        appActivity: 450
      },
      {
        appId: 'hyper',
        appActivity: 175
      },
      {
        appId: 'firefox',
        appActivity: 4
      },
      {
        appId: 'figma',
        appActivity: 35
      },
    ]
  },
  {
    tagName: 'Notícias',
    relatedApps: [
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
        appId: 'edge',
        appActivity: 15
      }
    ]
  },
  {
    tagName: 'Estudo',
    relatedApps: [
      {
        appId: 'hyper',
        appActivity: 175
      },
      {
        appId: 'vscode',
        appActivity: 450
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
      }
    ]
  }
]

receivedTags.forEach(tag => {
  let newTag = new Tag(tag.tagName, tag.relatedApps)
  tagList = [...tagList, newTag]
})

const state = () => ({
  tags: tagList,
  daysOfTheWeek: [
    {
      day: 'Domingo',
      dominantTags: [
        {
          tagName: 'Jogos',
          percentage: 62,
          isAggregate: false
        },
        {
          tagName: 'Internet',
          percentage: 21,
          isAggregate: false
        },
        {
          tagName: 'Outros',
          percentage: 17,
          isAggregate: true
        }
      ]
    },
    {
      day: 'Segunda-Feira',
      dominantTags: [
        {
          tagName: 'Trabalho',
          percentage: 47,
          isAggregate: false
        },
        {
          tagName: 'Estudo',
          percentage: 35,
          isAggregate: false
        },
        {
          tagName: 'Outros',
          percentage: 18,
          isAggregate: true
        }
      ]
    },
    {
      day: 'Terça-Feira',
      dominantTags: [
        {
          tagName: 'Trabalho',
          percentage: 53,
          isAggregate: false
        },
        {
          tagName: 'Estudo',
          percentage: 38,
          isAggregate: false
        },
        {
          tagName: 'Outros',
          percentage: 9,
          isAggregate: true
        }
      ]
    },
    {
      day: 'Quarta-Feira',
      dominantTags: [
        {
          tagName: 'Trabalho',
          percentage: 62,
          isAggregate: false
        },
        {
          tagName: 'Internet',
          percentage: 33,
          isAggregate: false
        },
        {
          tagName: 'Outros',
          percentage: 5,
          isAggregate: true
        }
      ]
    },
    {
      day: 'Quinta-Feira',
      dominantTags: [
        {
          tagName: 'Trabalho',
          percentage: 36,
          isAggregate: false
        },
        {
          tagName: 'Internet',
          percentage: 21,
          isAggregate: false
        },
        {
          tagName: 'Outros',
          percentage: 43,
          isAggregate: true
        }
      ]
    },
    {
      day: 'Sexta-Feira',
      dominantTags: [
        {
          tagName: 'Trabalho',
          percentage: 56,
          isAggregate: false
        },
        {
          tagName: 'Internet',
          percentage: 20,
          isAggregate: false
        },
        {
          tagName: 'Outros',
          percentage: 24,
          isAggregate: true
        }
      ]
    },
    {
      day: 'Sábado',
      dominantTags: [
        {
          tagName: 'Jogos',
          percentage: 27,
          isAggregate: false
        },
        {
          tagName: 'Internet',
          percentage: 10,
          isAggregate: false
        },
        {
          tagName: 'Estudo',
          percentage: 18,
          isAggregate: false
        },
        {
          tagName: 'Notícias',
          percentage: 17,
          isAggregate: false
        },
        {
          tagName: 'Mídias',
          percentage: 28,
          isAggregate: false
        }
      ]
    }
  ]
})

// getters
const getters = {
  getField
}

// mutations
const mutations = {
  updateField,
  insertNewTag(state, tag) {
    state.tags.push(tag)
  },
  updateTags(state, data) {
    state.tags.forEach(tag => {
      tag.relatedApps.forEach(app => {
        if (data.id === app.appId) {
          app.appActivity = timeStampToMinutes(data.started_at)
        }
      })
    })
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
