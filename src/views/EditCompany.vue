<template>
  <div class="outer">
    <Navbar />
    <div class="background p-3"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4 mb-5">
          <div class="profileBox">
            <img :src="`${url}/${detail.image_company}`" alt="profile company" class="rounded-circle" />
            <div class="d-flex m-3 position-relative" style="height: 20px">
              <input type="file" class="input-file" @change="imageReady($event)">
              <img src="../assets/icons/pen.svg" style="width: 80%; height: 70%; margin-top: 3px; margin-left: -10px" />
              <p class="font-weight-bold text-muted ml-1">Edit</p>
            </div>
            <div class="d-flex flex-column col mt-4">
              <h5 style="font-weight: bold">{{detail.company_name}}</h5>
              <h6 style="font-size: 14px">{{detail.sector}}</h6>
              <div class="d-flex justify-content-start p-0 mb-2" style="height: 14px" >
                <img src="../assets/icons/map-pin (4) 1.svg" style="width: 14px; height: 14px; margin-right: 5px" />
                <p class="h-100" style="color: #9b9b9b; font-size: 12px">
                  {{detail.city}}
                </p>
              </div>
              <p class="small text-muted mt-3">{{detail.description}}</p>
            </div>
          </div>
          <button @click.prevent="insertUpdate" class="btn btn-block btns mt-3" >
            Simpan
          </button>
          <router-link to="/profile-company" class="btn btn-block btn-outline-s font-weight-bold mt-3" >
            Batal
          </router-link>
        </div>

        <div class="col-sm-8 mb-5">
          <div class="formEdit">
            <h3 class="font-weight-bold" >Data Perusahaan</h3>
            <hr />
            <form class="mt-4 mb-4" id="myForm" >
              <label class="small text-muted">Nama Perusahaan</label>
              <input v-model="company_name" type="text" class="form-control mb-3" placeholder="Masukkan nama perusahaan" />
              <label class="small text-muted">Bidang</label>
              <input v-model="sector" type="text" class="form-control mb-3" placeholder="Masukkan bidang perusahaan ex: Finance" />
              <label class="small text-muted">Kota</label>
              <input v-model="city" type="text" class="form-control mb-3" placeholder="Masukkan kota" />
              <label class="small text-muted">Deskripsi Singkat</label>
              <textarea minlength="5" v-model="description" class="form-control mb-3" placeholder="Tuliskan deskripsi singkat" rows="4" ></textarea>
              <label class="small text-muted">Email</label>
              <input type="text" v-model="company_email" class="form-control mb-3" placeholder="Masukkan email" />
              <label class="small text-muted">Instagram</label>
              <input v-model="instagram" type="text" class="form-control mb-3" placeholder="Masukkan instagram" />
              <label class="small text-muted">No. Telp</label>
              <input v-model="phone_number" @keypress="no" type="text" class="form-control mb-3" placeholder="Masukkan no telepon" />
              <label class="small text-muted">LinkedIn</label>
              <input v-model="linkedin" type="text" class="form-control mb-3" placeholder="Masukkan linkedin" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Swal from 'sweetalert2'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapGetters } from 'vuex'
import { url } from '../helper/env'

export default {
  data () {
    return {
      id_company: localStorage.getItem('idCompany'),
      company_name: null,
      sector: null,
      city: null,
      description: null,
      company_email: null,
      instagram: null,
      phone_number: null,
      linkedin: null,
      id: this.id_company,
      errors: [],
      url
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    ...mapActions({
      updateCompany: 'employe/updateCompany',
      onDetail: 'recruiter/onDetail'
    }),
    insertUpdate () {
      if (!this.company_name || !this.sector || !this.city || !this.description || !this.company_email || !this.instagram || !this.phone_number || !this.linkedin || !this.id_company) {
        this.alertData()
      } else {
        this.alertSimpan()
      }
    },
    no ($event) {
      const keyCode = ($event.keyCode ? $event.keyCode : $event.which)
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault()
      }
    },
    alertData () {
      Swal.fire({
        icon: 'warning',
        title: 'Input tidak boleh kosong'
      })
    },
    alertSimpan () {
      Swal.fire({
        title: 'Data Akan disimpan',
        text: 'Pastikan Anda mengisi info dengan benar',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Periksa Kembali',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya'
      }).then((result) => {
        if (result.isConfirmed) {
          this.updateCompany({
            company_name: this.company_name,
            sector: this.sector,
            city: this.city,
            description: this.description,
            company_email: this.company_email,
            instagram: this.instagram,
            phone_number: this.phone_number,
            linkedin: this.linkedin,
            id_company: this.id_company
          })
          Swal.fire(
            'Success',
            'Profile perusahaan Anda berhasil disimpan'
          )
        }
      })
    },
    imageReady (event) {
      // const data = event.target.files[0]
      // this.upImage({
      //   id: this.id_user,
      //   image: data
      // }).then(() => {
      //   this.onDetail(this.id_user)
      // })
      console.log(event.target.files[0])
    }
  },
  computed: {
    ...mapGetters({
      detail: 'recruiter/getDetail'
    })
  },
  mounted () {
    this.onDetail(this.id)
  }
}
</script>

<style scoped>
.outer {
  background: #e5e5e5;
  overflow: hidden;
}
.background {
  background: #5e50a1;
  height: 300px;
  margin-bottom: -200px;
}
.profileBox {
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  height: 500px;
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
input[type="email"],
input[type="number"],
textarea {
  background: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
}
input[type="text"]:focus,
input[type="email"]:focus,
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
.input-file {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
@media(min-width: 1024px) {
 .row {
   margin: 0 50px;
 }
}
</style>
