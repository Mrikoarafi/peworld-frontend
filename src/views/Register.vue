<template>
  <div class="register-page">
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
          <form class="mt-4 mb-4">
            <label class="small text-muted">Nama</label>
            <input type="text" class="form-control mb-3" placeholder="Masukkan nama panjang">
            <label class="small text-muted">Email</label>
            <input type="email" class="form-control mb-3" placeholder="Masukkan alamat email">
            <label class="small text-muted">No Handphone</label>
            <input type="number" class="form-control mb-3" placeholder="Masukkan alamat no handphone">
            <label class="small text-muted">Kata Sandi</label>
            <input type="password" class="form-control mb-3" placeholder="Masukkan kata sandi">
            <label class="small text-muted">Konfirmasi Kata Sandi</label>
            <input type="password" class="form-control mb-3" placeholder="Masukkan konfimasi kata sandi">
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
export default {
  name: 'Register'
}
</script>
