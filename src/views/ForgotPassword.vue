<template>
  <div class="login-page">
    <div class="container-fluid">
      <div class="row pl-4 pr-4">
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
          <img src="../assets/images/logoPurple.png" alt="logo" class="logo-responsive d-block d-sm-none mt-5 mb-4">
          <h4 class="font-weight-bold">Reset Password</h4>
          <p class="small text-muted">
            You need to change your password to activate your account
          </p>

          <form class="mt-4" @submit.prevent="resetPassword">
            <label class="small text-muted">Kata Sandi</label>
            <input required type="password" class="form-control mb-3" placeholder="Masukkan kata sandi" v-model="password">
            <label class="small text-muted">Konfirmasi Kata Sandi</label>
            <input type="password" class="form-control mb-3" placeholder="Masukkan konfirmasi kata sandi" @keyup="check" v-model="confirmPassword">
            <p v-if="error" style="font-size: 14px; color: red; text-align:center; font-weight:bold;">Password not match!</p>
            <button type="submit" class="btn btn-orange btn-block text-white mt-4">Reset Password</button>
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
  name: 'ForgotPassword',
  data () {
    return {
      password: null,
      user_key: this.$route.query.key,
      confirmPassword: '',
      error: false
    }
  },
  methods: {
    ...mapActions({
      onResetPassword: 'auth/onResetPassword'
    }),
    check () {
      if (this.password !== this.confirmPassword) {
        this.error = true
      } else {
        this.error = false
      }
    },
    resetPassword () {
      if (this.error) {
        this.alertCheck()
      } else {
        const ukey = {
          password: this.password,
          user_key: this.user_key
        }
        this.onResetPassword(ukey).then(result => {
          this.$router.push('/loginHire')
        }).catch(err => this.alertError(err))
      }
    },
    alertCheck () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Check Your Password'
      })
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Reset password Failed, Something went wrong!'
      })
    }
  }
}
</script>
