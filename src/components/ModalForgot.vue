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
          <form class="text-center">
            <input type="text" class="form-control mb-4" placeholder="Email" autofocus required />
            <button type="submit" class="btn btn-orange btn-block text-white">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style src="../assets/css/style.css" scoped></style>

<script>
export default {
  name: 'ModalForgot'
}
</script>

<style scoped>
.logo {
  height: 40px;
}
.btn-orange {
  background-color: #FBB017;
  border-radius: 5px;
  font-weight: bold;
}
</style>
