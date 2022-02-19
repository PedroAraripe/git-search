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
    vueContributorsNames: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUserRepos(state, payload) {
      state.userRepos = payload;
    },
    setVueContributorsNames(state, payload) {
      state.vueContributorsNames = payload;
    },
  },
  actions: {
    fetchUser({ commit }, payload) {
      return axios
        .get(`https://api.github.com/users/${payload}`)
        .then(({ data }) => {
          commit("setUser", data);

          axios
            .get(data.repos_url)
            .then(({ data: repos }) => commit("setUserRepos", repos));
        });
    },
    fetchVueContributors({ commit }) {
      return axios
        .get("https://api.github.com/repos/vuejs/vue/contributors")
        .then(({ data }) =>{
          commit(
            "setVueContributorsNames",
            data.map((c) => c.login)
          )
        }
        );
    },
  },
  modules: {},
});
