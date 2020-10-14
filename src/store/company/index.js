import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    detail: [],
    detailCompany: []
  }
}

const getters = {
  getDetail: state => state.detail,
  getDetailCompany: state => state.detailCompany
}

const mutations = {
  SET_DETAIL (state, payload) {
    state.detail = payload
  },
  SET_DETAIL_COMPANY (state, payload) {
    state.detailCompany = payload
  }
}

const actions = {
  onDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/hire/recruiter/getDetail/${payload}`).then((response) => {
        context.commit('SET_DETAIL', response.data.data[0])
        resolve(response)
        console.log(response)
      }).catch((err) => reject(err))
    })
  },
  onDetailCompany (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/hire/recruiter/getDetailCompany/${payload}`).then((response) => {
        context.commit('SET_DETAIL_COMPANY', response.data.data[0])
        resolve(response)
        console.log(response.data)
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
