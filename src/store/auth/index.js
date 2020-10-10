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
          console.log(response)
          if (response.code === 200) {
            console.log(response.data)
            // localStorage.setItem('token', response.data.token)
            // localStorage.setItem('refreshtoken', response.data.refreshToken)
          }
          resolve(response.message)
        })
    })
  },
  loginCompany (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${url}/hire/recruiter/login`, payload)
        .then((response) => {
          console.log(response)
          if (response.code === 200) {
            console.log(response.data)
            // localStorage.setItem('token', response.data.token)
            // localStorage.setItem('refreshtoken', response.data.refreshToken)
          }
          resolve(response.message)
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
