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
                class="d-flex justify-content-start p-0 mb-2"
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
              <h3>Data perusahaan</h3>
              <hr />
              <form class="mt-4 mb-4">
                <label class="small text-muted">Nama Perusahaan</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan nama perusahaan"
                />
                <label class="small text-muted">Bidang</label>
                <input
                  type="email"
                  class="form-control mb-3"
                  placeholder="Masukkan bidang perusahaan ex: Finance"
                />
                <label class="small text-muted">Kota</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan kota"
                />
                <label class="small text-muted">Deskripsi Singkat</label>
                <textarea
                  class="form-control"
                  placeholder="Tuliskan deskripsi singkat"
                  rows="3"
                ></textarea>
                <label class="small text-muted">Email</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan email"
                />
                <label class="small text-muted">Instagram</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan instagram"
                />
                <label class="small text-muted">No. Telp</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan no telepon"
                />
                <label class="small text-muted">LinkedIn</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Masukkan linkedin"
                />
              </form>
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
  margin-bottom: -200px;
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
/* .contain-form {
    height: 700px;
} */
</style>
