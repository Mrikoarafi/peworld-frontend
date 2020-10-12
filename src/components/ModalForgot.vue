<template>
  <div>
    <div class="modal" tabindex="-1" id="forgot-pass">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <h5 class="text-center">
            <img src="../assets/images/logoPurple.png" alt="logo" class="logo" />
          </h5>
          <p class="small text-muted text-center mt-3">
            Enter your user account's verified email address
            <br>
            and we will send you a password reset link.
          </p>
          <form class="text-center" @submit.prevent="forgotPassword">
            <input type="email" class="form-control mb-4" placeholder="Email" autofocus required v-model="forgotEmail" />
            <button type="submit" class="btn btn-orange btn-block text-white">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'

export default {
  name: 'ModalForgot',
  data () {
    return {
      forgotEmail: null
    }
  },
  methods: {
    ...mapActions({
      onForgotPassword: 'auth/onForgotPassword'
    }),
    forgotPassword () {
      const data = {
        email: this.forgotEmail
      }
      this.onForgotPassword(data).then(result => {
        this.alertActivate(result)
        location.reload()
      }).catch(err => this.alertError(err.message))
    },
    alertActivate () {
      Swal.fire(
        'Check your email',
        'Please Check Your Email to reset password',
        'success'
      )
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Send Email Failed!'
      })
    }
  }
}
</script>

<style scoped>
.logo {
  height: 40px;
}
input[type="email"] {
  background-color: #FFFFFF;
  border: 1px solid #E2E5ED;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  color: #858D96;
  padding: 20px;
}
input[type="email"]:focus
.btn-orange:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-orange {
  background-color: #FBB017;
  border-radius: 5px;
  font-weight: bold;
}
</style>
