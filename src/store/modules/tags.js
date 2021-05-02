import { getField, updateField } from "vuex-map-fields";

const state = () => ({
  tags: [
    {
      tagName: "Jogos",
      totalTime: "1h15 min"
    },
    {
      tagName: "Internet",
      totalTime: "38 min"
    },
    {
      tagName: "Navegador",
      totalTime: "35 min"
    },
    {
      tagName: "Mídia",
      totalTime: "46 min"
    },
    {
      tagName: "Documentos",
      totalTime: "33 min"
    },
    {
      tagName: "Trabalho",
      totalTime: "1h35 min"
    },
    {
      tagName: "Notícias",
      totalTime: "10 min"
    }
  ]
});

// getters
const getters = { getField };

// mutations
const mutations = { updateField };

// actions
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
