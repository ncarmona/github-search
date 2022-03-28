import { createStore } from 'vuex'

export default createStore({
  state: { repositories: {} },
  getters: {
    repositories: (state: any) => state.repositories
  },
  mutations: {
    setRepositories (state:any, repositories:any) {
      state.repositories = repositories
    }
  },
  actions: {
    setRepositories ({ commit }:any, repositories:string) {
      commit('setRepositories', repositories)
    }
  }
})
