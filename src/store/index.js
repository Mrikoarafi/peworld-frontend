import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth/'
import employe from './employe/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    employe
  }
})
