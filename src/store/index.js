import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth/'
import employe from './employe'
import recruiter from './recruiter'
import company from './company/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    employe,
    recruiter,
    company
  }
})
