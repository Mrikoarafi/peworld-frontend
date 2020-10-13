import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    all: {
      data: [],
      isLoading: false
    },
    detail: [],
    skill: []
  }
}

const getters = {
  getAll: state => state.all,
  getDetail: state => state.detail,
  getSkill: state => state.skill
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
  },
  SET_SKILL (state, payload) {
    state.skill = payload
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
  onDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/employe/getDetail/${payload}`).then((response) => {
        context.commit('SET_DETAIL', response.data.data[0])
        resolve(response)
      }).catch((err) => reject(err))
    })
  },
  onSortDataAsc (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/employe/getAll?orderby=${payload}&sort=asc`)
        .then((result) => {
          context.commit('SET_ALL_DATA', result.data.data)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  onSortDataDesc (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/employe/getAll?orderby=${payload}&sort=desc`)
        .then((result) => {
          context.commit('SET_ALL_DATA', result.data.data)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  onSearch (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/employe/getAll?where=name_skill&name=${payload}`)
        .then((result) => {
          context.commit('SET_ALL_DATA', result.data.data)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  onGetSkill (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/employe/getSkill/${payload}`).then((response) => {
        context.commit('SET_SKILL', response.data.data[0])
        resolve(response)
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
