<template>
  <div class="register-page">
    <div class="container-fluid">
      <div class="row p-2 pl-4 pr-4">
        <div class="col-sm-7 d-none d-sm-block">
          <div class="image-left col-sm-12">
            <img src="../assets/images/logo.png" alt="logo Peworld" class="logo">
            <h2 class="text-white font-weight-bold display-font">
              Temukan developer <br> berbakat &amp; terbaik <br> di berbagai bidang <br> keahlian
            </h2>
          </div>
        </div>
        <div class="col-sm-5 form-login mt-4">
          <div class="d-none d-sm-block">
            <h4 class="font-weight-bold">Halo, Pewpeople</h4>
            <p class="small text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <div class="d-block d-sm-none mt-5">
            <img src="../assets/images/logoPurple.png" alt="logo" class="logo-responsive mb-4">
            <h4 class="font-weight-bold mb-2">Sign Up</h4>
            <p class="small text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <form class="mt-4 mb-4" @submit.prevent="registerEmp">
            <label class="small text-muted">Nama</label>
            <input required type="text" class="form-control mb-3" placeholder="Masukkan nama panjang" v-model="form.name">
            <label class="small text-muted" >Email</label>
            <input required type="email" class="form-control mb-3" placeholder="Masukkan alamat email" v-model="form.email">
            <label class="small text-muted">No Handphone</label>
            <input required type="number" class="form-control mb-3" placeholder="Masukkan alamat no handphone" v-model="form.phone_number">
            <label class="small text-muted">Kata Sandi</label>
            <input required type="password" class="form-control mb-3" placeholder="Masukkan kata sandi" v-model="form.password">
            <label class="small text-muted">Konfirmasi Kata Sandi</label>
            <input required type="password" class="form-control mb-3" placeholder="Masukkan konfimasi kata sandi" @keyup="check" v-model="confirmPassword">
            <p v-if="error" style="font-size: 14px; color: red; text-align:center; font-weight:bold;">Password not match!</p>
            <button type="submit" class="btn btn-orange btn-block text-white">Daftar</button>
            <p class="small text-center m-3">Anda sudah punya akun?
              <router-link to="/login" class="direct-page">Masuk disini</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../assets/css/style.css" scoped></style>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone_number: '',
        password: ''
      },
      confirmPassword: '',
      error: false
    }
  },
  methods: {
    ...mapActions({
      actionRegister: 'auth/registerEmployee'
    }),
    check () {
      if (this.form.password !== this.confirmPassword) {
        this.error = true
      } else {
        this.error = false
      }
    },
    registerEmp () {
      if (this.error) {
        this.alertCheck()
      } else {
        this.actionRegister(this.form).then(result => {
          if (result === "Duplicate entry 'shofirkn@gmail.com' for key 'email'") {
            this.alertCheckEmail()
          } else {
            this.alertActivate()
            window.location = '/login'
          }
        }).catch(err => this.alertError(err))
      }
    },
    alertActivate () {
      Swal.fire(
        'Your Registration Success',
        'Please Check Your Email to activate',
        'success'
      )
    },
    alertCheck () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Check Your Password'
      })
    },
    alertCheckEmail () {
      Swal.fire({
        icon: 'error',
        title: 'Email is already registered',
        text: 'Please use another one'
      })
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  }
}
</script>
