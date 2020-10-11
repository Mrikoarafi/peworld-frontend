import axios from 'axios'
const { url } = require('../../helper/env')

const state = () => {
  return {
    token: localStorage.getItem('token') || null
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
    console.log(payload)
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
        })
    })
  },
  loginCompany (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${url}/hire/recruiter/login`, payload)
        .then((response) => {
          if (response.data.code === 200) {
            localStorage.setItem('refreshtoken', response.data.data.refreshtoken)
            localStorage.setItem('token', response.data.data.tokenacc)
            localStorage.setItem('role', response.data.data.role)
            localStorage.setItem('id', response.data.data.id)
            resolve(response.data.message)
          }
          resolve(response.data.message)
        })
    })
  },
  registerEmployee (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${url}/employe/register`, payload)
        .then((response) => {
          resolve(response.data.message)
        })
    })
  },
  registerCompany (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${url}/hire/recruiter/register`, payload)
        .then((response) => {
          resolve(response.data.message)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
