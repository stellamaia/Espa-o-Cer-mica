import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state() {
    return {
      itensDoCarrinhoStore: [],
    }
  },
  mutations: {
    addToCarMutation(state, produto) {
      state.itensDoCarrinhoStore.push(produto)
    }
  },
  actions: {
    addToCarAction({ commit }, produto) {
      commit('addToCarMutation', produto)
    }
  }
})

export default store;


