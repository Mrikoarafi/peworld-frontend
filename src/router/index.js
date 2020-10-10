import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import LoginHire from '../views/LoginHire.vue'
import Register from '../views/Register.vue'
import RegisterHire from '../views/RegisterHire.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Edit from '../views/Edit.vue'
import EditCompany from '../views/EditCompany.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/registerHire',
    name: 'RegisterHire',
    component: RegisterHire
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/loginHire',
    name: 'LoginHire',
    component: LoginHire
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/editcompany',
    name: 'EditCompany',
    component: EditCompany
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
