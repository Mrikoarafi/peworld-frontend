<template>
  <div class="outer">
    <Navbar type="home" />
    <div class="container-fluid p-0 p-sm-3">
      <div class="container p-0 p-sm-3">
        <div class="background mt-sm-5"></div>
        <div class="col-sm-12 .contain-form d-flex flex-column p-0 mb-sm-5">
          <div class="col-12 profileBox">
            <img :src="`${url}/${detailEmploye.image_employe}`"
              alt="photo profile" class="rounded-circle imgs" />
            <div class="d-flex flex-column align-items-center col-sm-6 mt-4">
              <h6 style="font-weight: bold" class="text-center mb-2">{{detailEmploye.name}}</h6>
              <h6 style="font-size: 14px" class="text-center mb-2">{{detailEmploye.jobdesk}}</h6>
              <div
                class="d-flex justify-content-center p-0 mb-2"
                style="height: 14px"
              >
                <img
                  src="../assets/icons/map-pin (4) 1.svg"
                  style="width: 14px; height: 14px; margin-right: 5px"
                />
                <p class="h-100 mb-2" style="color: #9b9b9b; font-size: 12px">
                  {{detailEmploye.domisili}}
                </p>
              </div>
              <p
                style="font-size: 12px; margin: 0; color: #9b9b9b"
                class="text-center mb-3"
              >
                {{detailEmploye.workplace}}
              </p>
              <p
                style="font-size: 12px; margin: 0; color: #9b9b9b"
                class="text-center mb-2">
                {{detailEmploye.description}}
              </p>
              <button class="btn mt-4 mb-4 btn-violet text-white"
              v-if="role === '1'" @click="hire(detailEmploye.id_employe)"
                >Hire</button>
              <router-link to="/edit" class="btn mt-4 mb-4 btn-violet text-white"
              v-else-if="!id"
                >Edit</router-link
              >
              <h5 style="font-weight: bold" class="text-center m-3">Skills</h5>
              <div class=" mb-4 col p-0 text-center">
                <div
                class="btn btn-skill text-white mr-2 mb-3"
                v-for="(skill, index) in skills" :key="index">
                  {{skill.name_skill}}
                </div>
              </div>

              <div class="social-media">
                <p class="text-muted small">
                  <img src="../assets/icons/mail (4).svg" style="width: 20px; height: 20px; margin-right: 10px;" />
                  {{detailEmploye.email}}
                </p>
                <p class="text-muted small">
                  <img src="../assets/icons/phone 1.svg" style="width: 20px; height: 20px; margin-right: 10px;" />
                  {{detailEmploye.phone_number}}
                </p>
                <p class="text-muted small">
                  <img src="../assets/icons/instagram.svg" style="width: 20px; height: 20px; margin-right: 10px;" />
                  {{detailEmploye.instagram}}
                </p>
                <p class="text-muted small">
                  <img src="../assets/icons/linkedin 1.svg" style="width: 20px; height: 20px; margin-right: 10px;" />
                  {{detailEmploye.linkedin}}
                </p>
              </div>
            </div>
          </div>
            <div class="col-12 h-auto portExp pb-5">
              <div class="col-12 d-flex">
                <div class="col" @click="selectPort" style="cursor: pointer">
                  <h5 class="font-weight-bold" v-if="porto === true">Portfolio</h5>
                  <div class="w-100 underline" v-if="porto === true"></div>
                  <h5 class="font-weight-bold text-muted" v-else>Portfolio</h5>
                </div>
                <div class="col" @click="selectExp" style="cursor: pointer">
                  <h5 class="font-weight-bold" v-if="workExp === true">Pengalaman kerja</h5>
                  <div class="w-100 underline" v-if="workExp === true"></div>
                  <h5 class="font-weight-bold text-muted" v-else>Pengalaman kerja</h5>
                </div>
              </div>
              <div class="col-12" v-if="workExp === true" >
                <WorkExp />
              </div>
              <div class="col-12" v-if="porto === true" @click="selectPort">
                <Portfolio />
              </div>
            </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import WorkExp from '@/components/WorkExp.vue'
import Portfolio from '@/components/Portfolio.vue'
import { mapActions, mapGetters } from 'vuex'
import { url } from '../helper/env'

export default {
  components: {
    Navbar,
    Footer,
    WorkExp,
    Portfolio
  },
  data () {
    return {
      id: this.$route.query.id,
      role: localStorage.getItem('role'),
      skills: null,
      url: url,
      porto: false,
      workExp: false,
      id_profile: this.$route.query.id
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'auth/isLogin',
      detailEmploye: 'employe/getDetail'
    })
  },
  methods: {
    ...mapActions({
      onDetail: 'employe/onDetail',
      onSkills: 'employe/getSkills'
    }),
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshtoken')
      localStorage.removeItem('id')
      localStorage.removeItem('role')
      this.$router.push('/')
    },
    selectExp () {
      this.workExp = true
      this.porto = false
    },
    selectPort () {
      this.workExp = false
      this.porto = true
    },
    hire (id) {
      this.$router.push({ path: '/jobHire', query: { id } })
    }
  },
  mounted () {
    this.onDetail(this.id_profile)
      .then((response) => {
        console.log(this.detailEmploye)
      })

    this.onSkills(this.id)
      .then((response) => {
        this.skills = response.data
      })
  }
}
</script>

<style scoped>
.outer {
  background: #e5e5e5;
}
.background {
  background: #5e50a1;
  height: 200px;
  border-radius: 8px 8px 0px 0px;
}
.profileBox {
  position: relative;
  padding: 20px;
  background: #ffffff;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-violet {
  border: 1px #5e50a1;
  background: #5e50a1;
  color: #fff;
  width: 150px;
}
.btn-violet:focus {
  border: 1px #5e50a1;
  background: #423870;
  color: #fff;
  width: 150px;
}
.btn-skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #FBB017;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 3px 15px;
  font-size: 14px;
  margin-top: 2px;
}
.profileBox img {
  width: 150px;
  height: 150px;
}
.imgs {
  margin-top: -100px;
}
.portExp {
  background: #ffffff;
  border-radius: 0px 0px 8px 8px;
}
.underline {
  height: 10px;
  background: #5e50a1;
  border-radius: 5px;
}
@media (max-width: 575.98px) {
  .profileBox {
    border-radius: 0px;
  }
  .background {
    border-radius: 0px;
  }
}
</style>
