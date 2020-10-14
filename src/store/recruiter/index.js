import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    detail: [],
    company: []
  }
}

const getters = {
  getDetail: state => state.detail,
  getDetailCompany: state => state.company
}

const mutations = {
  SET_DETAIL (state, payload) {
    state.detail = payload
  },
  SET_DETAIL_COMPANY (state, payload) {
    state.company = payload
  }
}

const actions = {
  onDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/hire/recruiter/getDetail/${payload}`).then((response) => {
        context.commit('SET_DETAIL', response.data.data[0])
        resolve(response)
      }).catch((err) => reject(err))
    })
  },
  onDetailCompany (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/hire/recruiter/getDetailCompany/${payload}`).then((response) => {
        console.log(response.data.data)
        context.commit('SET_DETAIL_COMPANY', response.data.data[0])
        resolve(response)
      }).catch((err) => reject(err))
    })
  },
  updateBackground (context, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`${url}/hire/recruiter/updateWallpaper/${payload}`).then((response) => {
        console.log(response.data)
        resolve(response)
      }).catch((err) => reject(err))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
