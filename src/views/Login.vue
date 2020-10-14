<template>
  <div class="login-page">
    <div class="container-fluid">
      <div class="row p-2 pl-4 pr-4">
        <div class="col-sm-7 d-none d-sm-block">
          <div class="image-left col-sm-12">
            <router-link to="/">
              <img src="../assets/images/logo.png" alt="logo Peworld" class="logo">
            </router-link>
              <h2 class="text-white font-weight-bold display-font">
                Temukan developer <br> berbakat &amp; terbaik <br> di berbagai bidang <br> keahlian
              </h2>
          </div>
        </div>
        <div class="col-sm-5 form-login">
          <div class="d-none d-sm-block">
            <h4 class="font-weight-bold">Halo, Pewpeople</h4>
            <p class="small text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <div class="d-block d-sm-none mt-5">
            <img src="../assets/images/logoPurple.png" alt="logo" class="logo-responsive mb-4">
            <h4 class="font-weight-bold mb-2">Sign In</h4>
            <p class="small text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <form class="mt-4" @submit.prevent="loginEmployee">
            <label class="small text-muted">Email</label>
            <input type="email" class="form-control mb-3" placeholder="Masukkan alamat email" v-model="form.email" autofocus required>
            <label class="small text-muted">Kata Sandi</label>
            <input type="password" class="form-control mb-3" placeholder="Masukkan kata sandi" v-model="form.password" required>
            <p class="small text-right forgot-button"  data-toggle="modal" data-target="#forgot-pass-employe">Lupa kata sandi?</p>
            <ModalForgot />
            <button type="submit" class="btn btn-orange btn-block text-white">Masuk</button>

            <p class="small text-center m-3">Anda belum punya akun?
              <router-link to="/register" class="direct-page">Daftar disini</router-link> </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../assets/css/style.css" scoped></style>

<script>
import Swal from 'sweetalert2'
import ModalForgot from '../components/ModalForgot'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    ModalForgot
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginEmployee () {
      this.actionLogin(this.form)
        .then((response) => {
          if (response === 'Success') {
            window.location = '/'
          } else if (response === 'Employe has not been actived') {
            this.alertActivate()
          } else if (response === 'wrong password') {
            this.alertMatch()
          } else {
            this.alertExist()
          }
        }).catch(err => this.alertExist(err.message))
    },
    ...mapActions({
      actionLogin: 'auth/loginEmployee'
    }),
    alertExist () {
      Swal.fire({
        icon: 'error',
        title: 'Email Doesnt Exist!',
        text: 'Please check your personal info or create a new one'
      })
    },
    alertActivate () {
      Swal.fire({
        icon: 'warning',
        title: 'This Account need to verified!',
        text: 'Please check your email account to activate'
      })
    },
    alertMatch () {
      Swal.fire({
        icon: 'question',
        title: 'Username and Password Doesnt Match!'
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
