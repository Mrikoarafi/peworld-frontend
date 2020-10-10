import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import axios from 'axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// const { url } = require('./helper/env')

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// axios.defaults.headers = {
//   token: localStorage.getItem('token')
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
