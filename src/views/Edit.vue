<template>
  <div class="outer">
    <Navbar />
    <div class="background p-3"></div>
    <div class="container-fluid">
      <div class="container">
        <div class="col-sm-12 .contain-form d-flex h-10">
          <div class="col-sm-4 form-login mt-4">
            <div class="col-12 profileBox">
              <img
                :src="`${url}/${detailEmploye.image_employe}`"
                alt=""
                class="rounded-circle"
              />
              <div class="d-flex m-3 position-relative" style="height: 20px">
                  <input type="file" class="input-file"
                  @change="imageReady($event)">
                <img
                  src="../assets/icons/pen.svg"
                  style="width: 100%; height: 100%"
                />
                <p class="m-0 ml-2" style="color: #9b9b9b">Edit</p>
              </div>
              <div class="d-flex flex-column col mt-4">
                <h6 style="font-weight: bold">{{detailEmploye.name}}</h6>
                <h6 style="font-size: 14px">{{detailEmploye.jobdesk}}</h6>
                <div
                  class="d-flex justify-content-start p-0 mb-1"
                  style="height: 14px"
                >
                  <img
                    src="../assets/icons/map-pin (4) 1.svg"
                    style="width: 14px; height: 14px; margin-right: 5px"
                  />
                  <p class="h-100" style="color: #9b9b9b; font-size: 12px">
                    {{detailEmploye.domisili}}
                  </p>
                </div>
                <p style="font-size: 12px; margin: 0; color: #9b9b9b">
                  {{detailEmploye.workplace}}
                </p>
              </div>
            </div>
            <div class="col-12 p-0 d-flex flex-column mt-3">
              <button
                type="button"
                class="btn btn-fluid btns mb-3"
                @click="SendData"
              >
                Simpan
              </button>
              <router-link
                type="button"
                class="btn btn-fluid btn-outline-s"
                to="/profile"
              >
                Batal
              </router-link>
            </div>
          </div>
          <div class="col-sm-8 form-login ml-3 mt-4 mb-5">
            <div class="col-12 formEdit">
              <h3>Data diri</h3>
              <hr />
              <form class="mt-4 mb-4">
                <label class="small text-muted">Nama Lengkap</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan nama lengkap"
                  v-model="name"
                />
                <label class="small text-muted">Job Desk</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan job desk"
                  v-model="jobdesk"
                />
                <label class="small text-muted">Domisili</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan domisili"
                  v-model="domisili"
                />
                <label class="small text-muted">Tempat Kerja</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan tempat kerja"
                  v-model="workplace"
                />
                <label class="small text-muted">Phone Number</label>
                <input
                  type="number"
                  class="form-control mb-3"
                  placeholder="Masukkan tempat kerja"
                  v-model="phone_number"
                />
                <label class="small text-muted">Deskripsi Singkat</label>
                <textarea
                  class="form-control mb-3"
                  placeholder="Tuliskan deskripsi singkat"
                  rows="5"
                  v-model="description"
                ></textarea>
                <label class="small text-muted">Instagram</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Instagram"
                  v-model="instagram"
                />
                <label class="small text-muted">GitHub</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Github"
                  v-model="github"
                />
                <label class="small text-muted">LinkedIn</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="LinkedIn"
                  v-model="linkedin"
                />
              </form>
            </div>
            <div class="col-12 w-100 formEdit mt-4 mb-4">
              <h3>Skills</h3>
              <hr />
              <form class="d-flex mt-4 mb-4">
                <input
                  type="text"
                  class="form-control m-0 col-10"
                  placeholder="Masukkan skills"
                  v-model="skill"
                />
                <button class="col-2 btn btnSkills ml-2 text-white" @click.prevent="addSkill">
                  Simpan
                </button>
              </form>
              <div
              class="btn btn-skill text-white mr-1"
              v-for="(skill, index) in skills" :key="index"
              @click="removeSkill(index)"
              >
                {{skill.name_skill}}
              </div>
            </div>
            <div class="col-12 formEdit">
              <h3>Pengalaman Kerja</h3>
              <hr />
              <form  v-for="(jobExp, index) in jobExps" :key="index">
                <div class="d-flex justify-content-between">
                  <p>Pengalaman kerja {{index+1}}</p>
                  <p style="color: red; cursor: pointer;" @click="deleteEXp(index)">hapus</p>
                </div>
                <div class="form-group">
                  <label class="small text-muted">Posisi</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Web Developer"
                    v-model="jobExp.position"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label class="small text-muted">Nama Perusahaan</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="PT Harus Bisa"
                    v-model="jobExp.company_name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label class="small text-muted">Bulan / Tahun</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Januari 2018"
                    v-model="jobExp.month_year"
                    />
                  </div>
                </div>
                <label class="small text-muted">Deskripsi Singkat</label>
                <textarea
                  class="form-control"
                  placeholder="Deskripsikan pekerjaan anda"
                  rows="5"
                    v-model="jobExp.description"
                ></textarea>
                <hr>
              </form>
              <div class="col 12">
               <button class=" btn btn-fluid w-100 outline-warning text-warning" @click="addExp">
                Tambahkan Pengalaman Kerja
               </button>
              </div>
            </div>
            <div class="col-12 formEdit  mt-4">
              <h3>Portofolio</h3>
              <hr />
              <form class="mt-4 mb-4" v-for="(portfolio, index) in portfolios" :key="index" enctype="multipart/form-data">
                <div class="d-flex justify-content-between">
                </div>
                <label class="small text-muted">Nama Aplikasi</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan nama aplikasi"
                  v-model="portfolio.app_name"
                />
                <label class="small text-muted">Link Repository</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan link repository"
                  v-model="portfolio.link_repository"
                />
                <div class="form-check form-check-inline radioBtn p-2">
                  <input type="radio" id="appMobile" name="checkApp"
                  value="mobileApp" v-model="portfolio.type"
                  class="form-check-input">
                  <label class="form-check-label" for="appMobile">Aplikasi Mobile</label>
                </div>
                <div class="form-check form-check-inline radioBtn p-2">
                  <input type="radio" id="appWeb" name="checkApp" class="form-check-input" value="webApp" v-model="portfolio.type">
                  <label class="form-check-label" for="appWeb">Aplikasi Web</label>
                </div>
                <div class="dropzone col-12 p-0 mt-3">
                  <input type="file" class="input-file"
                  ref="file"
                  @change="fileReady($event)">
                  <img src="../assets/images/Vector (1).png" class="mb-5" alt="">
                  <p v-if="!uploading">Drag and Drop Untuk Upload gambar aplikasi </p>
                  <p v-if="!uploading" style="font-size: 12px">atau cari untuk mengupload file dari direktorimu </p>
                  <div class="d-flex">
                    <img src="../assets/images/Group.png" class="m-1" alt="">
                    <p class="m-0" style="font-size: 12px">High Resolution images <br> IMG,JPG, or JPEG</p>
                    <img src="../assets/images/expand 2.png" class="m-1"  alt="">
                    <p class="m-0" style="font-size: 12px">Size <br>1080x1920 or 600x800p</p>
                  </div>
                </div>
                <hr />
               <button class=" btn btn-fluid w-100 outline-warning text-warning" @click.prevent="addPortfolio">
                Tambahkan Portofolio
               </button>
              </form>
              <div class="col 12">
              </div>
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
import { mapActions, mapGetters } from 'vuex'
// import Swal from 'sweetalert2'
import { url } from '../helper/env'

export default {
  name: 'edit',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      id_user: localStorage.getItem('id'),
      skill: '',
      skills: [],
      name: '',
      email: '',
      jobdesk: '',
      domisili: '',
      workplace: '',
      phone_number: '',
      description: '',
      instagram: '',
      github: '',
      linkedin: '',
      portfolioImg: null,
      jobExps: [],
      uploading: false,
      portfolios: [
        {
          app_name: '',
          link_repository: '',
          type: ''
        }
      ],
      url
    }
  },
  methods: {
    addExp () {
      this.jobExps.push(
        {
          position: '',
          company_name: '',
          month_year: '',
          description: '',
          id_employe: this.id_user
        })
    },
    deleteEXp (index) {
      this.jobExps.splice(index, 1)
    },
    addSkill () {
      this.skills.push({
        name_skill: this.skill,
        id_employe: this.id_user
      })
      this.skill = ''
    },
    removeSkill (index) {
      this.skills.splice(index, 1)
    },
    fileReady (event) {
      this.portfolioImg = event.target.files[0]
      console.log(this.portfolioImg)
    },
    imageReady (event) {
      const data = event.target.files[0]
      this.upImage({
        id: this.id_user,
        image: data
      }).then(() => {
        this.onDetail(this.id_user)
      })
      console.log(event.target.files[0])
    },
    addPortfolio () {
      const data = {
        id: this.id_user,
        img: this.portfolioImg,
        apk: this.portfolios[0].app_name,
        repo: this.portfolios[0].link_repository,
        type: this.portfolios[0].type
      }
      this.sendPort(data)
    },
    SendData () {
      this.sendtoData({
        skill: this.skills,
        work_experience: this.jobExps,
        name: this.name,
        email: this.email,
        jobdesk: this.jobdesk,
        domisili: this.domisili,
        workplace: this.workplace,
        phone_number: this.phone_number,
        description: this.description,
        instagram: this.instagram,
        github: this.github,
        linkedin: this.linkedin,
<<<<<<< HEAD
        id: this.id_company
=======
        id: this.id_user
      }).then((response) => {
        alert(response)
        this.$router.push({ path: '/profile' })
>>>>>>> 8ff5de0e9999cd8751e17471cb80829c99434c19
      })
    },
    ...mapActions({
      onDetail: 'employe/OnDetail',
      sendPort: 'employe/addPortfolio',
      sendtoData: 'employe/editDataEmployee',
      upImage: 'employe/updateImage'
    })
  },
  computed: {
    ...mapGetters({
      detailEmploye: 'employe/getDetail'
    })
  },
  mounted () {
    this.onDetail(this.id_user)
      .then((response) => {
        console.log(this.detailEmploye)
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
  height: 300px;
  margin-bottom: -150px;
}
.profileBox {
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profileBox img {
  width: 150px;
  height: 150px;
}
.formEdit {
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
}
input[type="text"],
input[type="number"],
textarea {
  background: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
}
input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus,
.outline-warning:focus,
.btn:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btns {
  background: #5e50a1;
  border-radius: 4px;
  border: none;
  color: white;
  border: 2px #5e50a1 solid;
}
.btns:hover {
  color: whitesmoke;
}
.btn-outline-s {
  border: 2px #5e50a1 solid;
  border-radius: 4px;
  background: white;
  color: #5e50a1;
}
.btnSkills {
  background: #fbb017;
  border-radius: 4px;
}
.btn-skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #FBB017;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 3px 15px;
  font-size: 14px;
}
/* .contain-form {
    height: 700px;
} */
.outline-warning {
  border-color: #fbb017;
}
.outline-warning:focus {
  border-color: #fbb017;
}
.radioBtn {
  background: #FFFFFF;
  border: 1px solid #E2E5ED;
  box-sizing: border-box;
  border-radius: 4px;
}
.dropzone {
  min-height: 350px;
  border: 2px dashed #9EA0A5;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.input-file {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
