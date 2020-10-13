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
        context.commit('SET_DETAIL', response.data.data[0])
        resolve(response.data)
      }).catch((err) => reject(err))
    })
  },
  editDataEmployee (context, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`${url}/employe/edit/${payload.id}`, payload).then((response) => {
        resolve(response.data.message)
      }).catch((err) => reject(err))
    })
  },
  getSkills (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/employe/getSkill/${payload}`).then((response) => {
        resolve(response.data)
      }).catch((err) => reject(err))
    })
  },
  getPortfolio (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/employe/getall/profile/${payload}`).then((response) => {
        resolve(response.data.data)
      }).catch((err) => reject(err))
    })
  },
  getExperience (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/employe/getWorkExperience/${payload}`).then((response) => {
        resolve(response.data.data)
      }).catch((err) => reject(err))
    })
  },
  addPortfolio (context, payload) {
    console.log(payload)
    const fd = new FormData()
    fd.append('image', payload.img)
    fd.append('id_employe', payload.id)
    fd.append('apk_name', payload.apk)
    fd.append('link_repo', payload.repo)
    fd.append('type_portofolio', payload.type)
    return new Promise((resolve, reject) => {
      axios.post(`${url}/employe/portofolio`, fd).then((response) => {
        console.log(response)
        resolve(response.data.message)
      }).catch((err) => reject(err))
    })
  },
  updateImage (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('image', payload.image)
      axios.put(`${url}/employe/image/${payload.id}`, fd).then((response) => {
        console.log(response)
        resolve(response.data.message)
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
