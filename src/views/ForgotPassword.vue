<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-sm-7 d-none d-sm-block">
          <div class="image-left col-sm-12">
            <img src="../assets/images/logo.png" alt="logo Peworld" class="logo">
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

          <form class="mt-4">
            <label class="small text-muted">Kata Sandi</label>
            <input type="password" class="form-control mb-3" placeholder="Masukkan kata sandi">
            <label class="small text-muted">Konfirmasi Kata Sandi</label>
            <input type="password" class="form-control mb-5" placeholder="Masukkan konfirmasi kata sandi">
            <button type="submit" class="btn btn-orange btn-block text-white">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../assets/css/style.css" scoped></style>

<script>
export default {
  name: 'ForgotPassword'
}
</script>
