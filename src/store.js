import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state() {
    return {
      itensDoCarrinhoStore: [],
      totalCarrinhoStore: 0,
    };
  },
  mutations: {
    addToCarMutation(state, produto) {
      state.itensDoCarrinhoStore.push(produto);
    },
    removeItemMutation(state, index) {
      state.itensDoCarrinhoStore.splice(index, 1);
    },
  },
  actions: {
    addToCarAction({ commit }, produto) {
      commit("addToCarMutation", produto);
    },
    removeItemAction({ commit }, index) {
      commit("removeItemMutation", index);
    },
    sumTotal({ state }) {
      state.totalCarrinhoStore = state.itensDoCarrinhoStore.reduce((a, b) => {
        return a + b.preco;
      }, 0);
    },
  },
});

export default store;
