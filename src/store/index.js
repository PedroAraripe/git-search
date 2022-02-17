import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// TODO
// por a requisição de usuario na tela inicial e só passar pra de search
// se de fato tiver uma reposta, dai la ja seta o usuario e no search faz
// a req de repositorios no mounted e defininindo na store também

export default new Vuex.Store({
  state: {
    user: null,
    userRepos: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUserRepos(state, payload) {
      state.userRepos = payload;
    },
  },
  actions: {
    fetchUser({ commit }, payload) {
      console.log(payload)
      return axios
        .get(`https://api.github.com/users/${payload}`)
        .then((response) => commit("setUser", response.data));
    },
  },
  modules: {},
});
