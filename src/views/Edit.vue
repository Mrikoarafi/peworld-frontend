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
                src="../assets/icons/christian-buehner-DItYlc26zVI-unsplash 1.png"
                alt=""
                class="rounded-circle"
              />
              <div class="d-flex m-3" style="height: 20px">
                <img
                  src="../assets/icons/pen.svg"
                  style="width: 100%; height: 100%"
                />
                <p class="m-0 ml-2" style="color: #9b9b9b">Edit</p>
              </div>
              <div class="d-flex flex-column col mt-4">
                <h6 style="font-weight: bold">Luis Sambas</h6>
                <h6 style="font-size: 14px">Web Developer</h6>
                <div
                  class="d-flex justify-content-start p-0"
                  style="height: 14px"
                >
                  <img
                    src="../assets/icons/map-pin (4) 1.svg"
                    style="width: 14px; height: 14px; margin-right: 5px"
                  />
                  <p class="h-100" style="color: #9b9b9b; font-size: 12px">
                    Purwokerto, Jawa Tengah
                  </p>
                </div>
                <p style="font-size: 12px; margin: 0; color: #9b9b9b">
                  Freelancer
                </p>
              </div>
            </div>
            <div class="col-12 p-0 d-flex flex-column mt-3">
              <button
                type="button"
                class="btn btn-fluid btns mb-3"
                data-toggle="modal"
                data-target="#loginfor"
              >
                Simpan
              </button>
              <button
                data-toggle="modal"
                data-target="#registerfor"
                type="button"
                class="btn btn-fluid btn-outline-s"
              >
                Batal
              </button>
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
                />
                <label class="small text-muted">Job Desk</label>
                <input
                  type="email"
                  class="form-control mb-3"
                  placeholder="Masukkan job desk"
                />
                <label class="small text-muted">Domisili</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan domisili"
                />
                <label class="small text-muted">Tempat Kerja</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan tempat kerja"
                />
                <label class="small text-muted">Deskripsi Singkat</label>
                <textarea
                  class="form-control"
                  placeholder="Tuliskan deskripsi singkat"
                  rows="3"
                ></textarea>
              </form>
            </div>
            <div class="col-12 w-100 formEdit mt-4 mb-3">
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
              class="btn btn-outline-warning text-dark mr-1"
              v-for="(skill, index) in skills" :key="index"
              @click="removeSkill(index)"
              >
                {{skill}}
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
                      type="email"
                      class="form-control"
                      placeholder="PT Harus Bisa"
                    v-model="jobExp.company_name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label class="small text-muted">Bulan / Tahun</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Januari 2018"
                    v-model="jobExp.date"
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
               <button class=" btn btn-fluid w-100 btn-outline-warning" @click="addExp">
                Tambahkan Pengalaman Kerja
               </button>
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

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      skill: '',
      skills: [],
      jobExps: [
        {
          position: '',
          company_name: '',
          date: '',
          description: ''
        }
      ]
    }
  },
  methods: {
    addExp () {
      this.jobExps.push(
        {
          position: '',
          company_name: '',
          date: '',
          description: ''
        })
    },
    deleteEXp (index) {
      this.jobExps.splice(index, 1)
    },
    addSkill () {
      this.skills.push(this.skill)
      this.skill = ''
    },
    removeSkill (index) {
      this.skills.splice(index, 1)
    }
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
/* .contain-form {
    height: 700px;
} */
.btn-outline-warning {
    color: #fbb017;
    border-color: #fbb017;
}
</style>
