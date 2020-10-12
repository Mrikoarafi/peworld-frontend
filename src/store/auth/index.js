import axios from 'axios'
const { url } = require('../../helper/env')

const state = () => {
  return {
    token: localStorage.getItem('token') || null,
    refreshToken: localStorage.getItem('refreshToken') || null
  }
}

const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  loginEmployee (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/employe/login`, payload)
        .then((response) => {
          if (response.data.code === 200) {
            localStorage.setItem('refreshtoken', response.data.data.refreshtoken)
            localStorage.setItem('token', response.data.data.tokenacc)
            localStorage.setItem('role', response.data.data.role)
            localStorage.setItem('id', response.data.data.id)
            resolve(response.data.message)
          }
          resolve(response.data.message)
        }).catch((err) => reject(err.message))
    })
  },
  loginCompany (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/hire/recruiter/login`, payload)
        .then((response) => {
          if (response.data.code === 200) {
            localStorage.setItem('token', response.data.data.tokenacc)
            localStorage.setItem('role', response.data.data.role)
            localStorage.setItem('id', response.data.data.id)
            resolve(response.data.message)
          }
          resolve(response.data.message)
        }).catch((err) => reject(err.message))
    })
  },
  registerEmployee (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/employe/register`, payload)
        .then((response) => resolve(response.data.message))
        .catch((err) => reject(err.message))
    })
  },
  registerCompany (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/hire/recruiter/register`, payload)
        .then((response) => resolve(response.data.message))
        .catch((err) => reject(err.message))
    })
  },
  onForgotPassword (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/hire/recruiter/forgotPassword`, payload)
        .then(response => {
          resolve(response.data.message)
        })
        .catch(err => reject(err.message))
    })
  },
  onResetPassword (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/hire/recruiter/resetPassword`, {
          password: payload.password,
          user_key: payload.user_key
        })
        .then(response => {
          resolve(response)
        })
        .catch(err => reject(err.message))
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
