<template>
  <div class="outer">
    <Navbar />
    <div class="background p-3"></div>
    <div class="container-fluid">
      <div class="container">
        <div class="col-sm-12 .contain-form d-flex h-10">
          <div class="col-sm-4 form-login mt-4">
            <div class="col-12 listUser">
              <div class="col-12 p-0">
                <h3>chat</h3>
                <hr class="m-1"/>
              </div>
              <div class="col-12 p-0 listMessage">
                Daftar Kontak
              </div>
            </div>
          </div>
          <div class="col-sm-8 form-login ml-3 mt-4 mb-5">
            <div class="col-12  Message">
              <div class="col-12 p-0">
                <h3>chat</h3>
                <hr class="m-1"/>
              </div>
              <div class="col-12 p-0 listMessage">
                Daftar Pesan
              </div>
              <div class="col-12 d-flex p-0 mt-3">
                <input
                  type="text"
                  class="form-control col-10"
                  placeholder="Masukkan Pesan"
                />
                <button style="height: 40px; width: 40px;" class="ml-auto btn btn btn-primary text-white rounded-circle" @click.prevent="addSkill">
                  Go
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
  }
}
</script>

<style scoped>
.outer {
  background: #e5e5e5;
}
.Message, .listUser{
  min-height: 500px;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.listMessage {
  min-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
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
