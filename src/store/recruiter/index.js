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
        context.commit('SET_DETAIL_COMPANY', response.data.data[0])
        resolve(response)
      }).catch((err) => reject(err))
    })
  },
  updateBackground (context, payload) {
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('wallpaper_image', payload.image)
      axios.put(`${url}/hire/recruiter/updateWallpaper/${payload.id}`, fd).then((response) => {
        resolve(response)
      }).catch((err) => reject(err))
    })
  },
  updateImage (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('image_company', payload.image)
      fd.append('sector', payload.sector)
      fd.append('city', payload.city)
      fd.append('description', payload.description)
      fd.append('company_email', payload.company_email)
      fd.append('instagram', payload.instagram)
      fd.append('phone_number', payload.phone_number)
      fd.append('linkedin', payload.linkedin)
      fd.append('company_name', payload.company_name)
      axios.put(`${url}/hire/recruiter/updateCompany/${payload.id_company}`, fd).then((response) => {
        console.log(response)
        resolve(response.data)
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
