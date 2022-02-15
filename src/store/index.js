import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// TODO
// por a requisição de usuario na tela inicial e só passar pra de search
// se de fato tiver uma reposta, dai la ja seta o usuario e no search faz 
// a req de repositorios no mounted e defininindo na store também

export default new Vuex.Store({
  state: {
    user:{},
    userRepos:[]
  },
  mutations: {
    setUser(state, payload){
      state.user = payload;
    },
    setUserRepos(state, payload){
      state.userRepos = payload;
    }
  },
  actions: {},
  modules: {},
});

