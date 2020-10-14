<template>
  <div class="job-hire">
    <Navbar type="home" />
    <div class="container-fluid mt-4 mb-5">
      <div class="row mt-3">
        <div class="col-sm-4 mb-5">
          <div class="profileBox p-4">
            <img
              :src="`${url}/${detailEmploye.image_employe}`"
              alt="profile employe"
              class="rounded-circle"
            />
            <div class="d-flex flex-column col mt-4 p-0">
              <h6 style="font-weight: bold">{{ detailEmploye.name }}</h6>
              <h6 style="font-size: 14px">{{ detailEmploye.jobdesk }}</h6>
              <div
                class="d-flex justify-content-start p-0 mb-1"
                style="height: 14px"
              >
                <img
                  src="../assets/icons/map-pin (4) 1.svg"
                  style="width: 14px; height: 14px; margin-right: 5px"
                />
                <p class="h-100" style="color: #9b9b9b; font-size: 12px">
                  {{ detailEmploye.domisili }}
                </p>
              </div>
              <p style="font-size: 12px; margin: 0; color: #9b9b9b">
                {{ detailEmploye.workplace }}
              </p>
            </div>
            <p class="small mt-1 text-muted">
              {{ detailEmploye.description }}
            </p>
            <div>
              <h5 class="font-weight-bold">Skill</h5>
              <a
                class="btn btn-skill text-white mr-2 mt-2"
                v-for="(skill, index) in skills"
                :key="index"
              >
                {{ skill.name_skill }}
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="card-right">
            <h3 class="font-weight-bold">Hubungi Louis Tomlinson</h3>
            <p class="small m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <form  @submit.prevent="sendHire()">
              <label class="small text-muted mt-3"
                >Tujuan tentang pesan ini</label
              >
              <select class="form-control">
                <option value="Project">Project</option>
                <option value="Full Time">Full Time</option>
                <option value="Fix Bugs">Fix Bugs</option>
                <option value="Part Time">Part Time</option>
              </select>
              <label class="small text-muted mt-3">Nama Lengkap</label>
              <input
                type="text"
                class="form-control"
                placeholder="Masukkan nama lengkap"
                v-model="detailCompany.company_name"
              />
              <label class="small text-muted mt-3">Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Masukkan email"
                v-model="detailCompany.company_email"
              />
              <label class="small text-muted mt-3">No Handphone</label>
              <input
                type="text"
                class="form-control"
                placeholder="Masukkan no handphone"
                v-model="detailCompany.phone_number"
              />
              <label class="small text-muted mt-3">Deskripsi</label>
              <textarea
                class="form-control"
                rows="8"
                placeholder="Deskripsi / jelaskan lebih detail"
              ></textarea>
              <button
                type="submit"
                class="btn btn-orange btn-block text-white mt-5"
              >
                Hire
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { url } from '../helper/env'
import io from 'socket.io-client'

export default {
  name: 'JobHire',
  data () {
    return {
      id_employe: this.$route.query.id,
      url,
      id: localStorage.getItem('id'),
      socket: io(`${url}`),
      email: localStorage.getItem('email'),
      idCompany: localStorage.getItem('idCompany'),
      image: '',
      skills: null
    }
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      detailEmploye: 'employe/getDetail',
      skillEmploye: 'employe/getSkill',
      detailRecruiter: 'company/getDetail',
      detailCompany: 'company/getDetailCompany'
    })
  },
  methods: {
    ...mapActions({
      onDetail: 'employe/onDetail',
      onSkills: 'employe/getSkills',
      onDetailRecruiter: 'company/onDetail',
      onDetailCompany: 'company/onDetailCompany'
    }),
    sendHire () {
      this.socket.emit('send-hire-calling', {
        id_company: this.idCompany,
        email_recruiter: this.email,
        email_employe: this.detailEmploye.email
      })

      this.socket.emit('send-hire-message', {
        sender: this.email,
        receiver: this.detailEmploye.email,
        message: `<div class="card mb-3 mt-3" style="width: 35rem;">
                    <img src="${this.detailCompany.image_company}" class="card-img-top" style="height: 20%;">
                    <div class="card-body">
                      <div class="list-group">
                        <div class="list-group-item text-center"><h5 class="card-title">${this.detailRecruiter.company_name}</h5></div>
                        <div class="list-group-item text-left"><p class="card-text">to: satusebelas0@gmail.com</p></div>
                        <div class="list-group-item text-left"><p class="card-text">Job Desk: Pembuatan Aplikasi Ekopoi</p></div>
                        <div class="list-group-item"><p class="card-text">Membuat aplikasi Ekopoi menggunakan VueJS dan NodeJS</p></div>
                        <div class="list-group-item"><p class="card-text"><small class="text-muted">Contact Us: ${this.detailCompany.phone_number}</small></p></div>
                      </div>

                      <div class="text-center">
                        <button class="btn btn-primary btn-sm mt-3">Apply</button>
                      </div>
                    </div>
                  </div>
                `
      })

      window.location = '/chat'
    }
  },
  mounted () {
    this.onDetail(this.id_employe).then(() => {
      console.log(this.detailEmploye.email)
    })
    this.onSkills(this.id_employe).then((response) => {
      this.skills = response.data
    })
    this.onDetailRecruiter(this.id)
      .then((res) => {
        console.log(this.detailRecruiter)
      })
    this.onDetailCompany(this.idCompany)
      .then((res) => {
        console.log(this.detailCompany)
      })
    console.log(this.email)
    this.socket.emit('join-room', this.email)
  }
}
</script>

<style scoped>
.job-hire {
  background-color: #e5e5e5;
  overflow: hidden;
}
.card-left {
  background-color: #fff;
  border-radius: 8px;
}
.location {
  margin-top: -5px;
}
.btn-skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 3px 15px;
  font-size: 12px;
  margin-top: -5px;
}
select,
input[type="text"],
input[type="email"],
textarea {
  background: #fff;
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
}
select:focus,
input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-orange {
  background-color: #fbb017;
  border-radius: 5px;
  font-weight: bold;
}
.photo-profile {
  width: 50%;
  border-radius: 60px;
}
.profileBox {
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profileBox img {
  width: 150px;
  height: 150px;
}
@media(max-width: 768px) {
  .profileBox img {
    width: 130px;
    height: 130px;
  }
}
@media(min-width: 1024px) {
 .row {
   margin: 0 50px;
 }
}
</style>
