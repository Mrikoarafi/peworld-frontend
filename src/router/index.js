import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import LoginHire from '../views/LoginHire.vue'
import Register from '../views/Register.vue'
import RegisterHire from '../views/RegisterHire.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import EditCompany from '../views/EditCompany.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import Profile from '../views/Profile.vue'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
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
    path: '/home',
    name: 'Home',
    component: Home
    // meta: { requiresAuth: true }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
    // meta: { requiresAuth: true }
  },
  {
    path: '/editcompany',
    name: 'EditCompany',
    component: EditCompany
  },
  {
    path: '/profile-company',
    name: 'Company Profile',
    component: CompanyProfile
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
    // meta: { requiresAuth: true }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
    // meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLogin']) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
