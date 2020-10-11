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
  loginEmployee (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${url}/employe/login`, payload)
        .then((response) => {
          if (response.code === 200) {
            console.log(response)
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('token', response.data.tokenacc)
            localStorage.setItem('refreshtoken', response.data.refreshToken)
            resolve(response.message)
          } else if (response.code === 500) {}
        }).catch((err) => reject(err.message))
    })
  },
  loginCompany (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${url}/hire/recruiter/login`, payload)
        .then((response) => {
          if (response.code === 200) {
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('token', response.data.tokenacc)
            localStorage.setItem('refreshtoken', response.data.refreshToken)
            resolve(response.message)
          }
        }).catch((err) => reject(err.message))
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
