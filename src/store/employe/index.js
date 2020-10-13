import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    all: {
      data: [],
      isLoading: false
    },
    detail: []
  }
}

const getters = {
  getAll: state => state.all,
  getDetail: state => state.detail
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.all.data = payload
  },
  SET_ALL_LOADING (state, payload) {
    state.all.isLoading = payload
  },
  SET_DETAIL (state, payload) {
    state.detail = payload
  }
}

const actions = {
  onAll (context, payload) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/employe/getAll`)
        .then(response => {
          context.commit('SET_ALL_DATA', response.data.data)
        })
        .catch(err => console.log(err))
        .finally(() => {
          context.commit('SET_ALL_LOADING', false)
        })
    })
  },
  OnDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/employe/getDetail/${payload}`).then((response) => {
        context.commit('SET_DETAIL', response.data[0])
        resolve(response)
        console.log(response)
      }).catch((err) => reject(err))
    })
  },
  editDataEmployee (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.put(`${url}/employe/edit/${payload.id}`, payload).then((response) => {
        // resolve()
        console.log(response)
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
