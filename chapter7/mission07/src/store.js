import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sMessage:'',
    sHi: 'hello, guys!'
  },

  mutations: {
    fnSetMessage: function(state, payload) {
      return state.sMessage = payload;
    }
  },

  getters: {
    fnGetMessage(state) {
      return state.sMessage;
    },

    fnGetHi(state) {
      return state.sHi;
    }
  }
})