<template>
  <div class="outer">
    <Navbar />
    <div class="container-fluid p-0 p-sm-3">
      <div class="container p-0 p-sm-3">
        <div class="background mt-sm-5"></div>
        <div class="col-sm-12 .contain-form d-flex p-0 mb-sm-5">
          <div class="col-12 profileBox">
            <img
              src="../assets/icons/christian-buehner-DItYlc26zVI-unsplash 1.png"
              alt=""
              class="rounded-circle imgs"
            />
            <div class="d-flex pen" style="height: 20px">
              <p class="m-0 ml-2 d-none d-sm-block" style="width: auto; color: white">
                <img
                src="../assets/icons/pen copy.svg"
                style="width: 15%; height: 100%"
              />Ubah latar</p>
                <img
                src="../assets/icons/pen copy.svg"
                style="width: 100%; height: 100%"
                class="d-block d-sm-none"
              />
            </div>
            <div class="d-flex flex-column align-items-center col-sm-6 mt-4">
              <h6 style="font-weight: bold" class="text-center">Luis Sambas</h6>
              <h6 style="font-size: 14px" class="text-center">Web Developer</h6>
              <div
                class="d-flex justify-content-center p-0 mb-2"
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
              <p style="font-size: 12px; margin: 0; color: #9b9b9b" class="text-center mb-2">
                Freelancer
              </p>
              <p style="font-size: 12px; margin: 0; color: #9b9b9b" class="text-center mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur aliquid, id libero optio deserunt beatae quisquam itaque, fuga hic animi tempore perspiciatis nobis laboriosam sed, architecto porro nesciunt ipsa quidem.
              </p>
            <router-link to="/editCompany" class="btn mt-4 mb-4 btn-primary">Edit Profile</router-link>
              <div
                class="d-flex justify-content-start mb-2 align-items-center p-0"
                style="height: 14px"
              >
                <img
                  src="../assets/icons/mail (4).svg"
                  style="width: 14px; height: 14px; margin-right: 5px"
                />
                <p class="h-100 m-0" style="color: #9b9b9b; font-size: 14px">
                  Email Perusahaan
                </p>
              </div>
              <div
                class="d-flex justify-content-start mb-2 align-items-center p-0"
                style="height: 14px"
              >
                <img
                  src="../assets/icons/phone 1.svg"
                  style="width: 14px; height: 14px; margin-right: 5px"
                />
                <p class="h-100 m-0" style="color: #9b9b9b; font-size: 14px">
                  Telepon Perusahaan
                </p>
              </div>
              <div
                class="d-flex justify-content-center mb-2 align-items-center p-0"
                style="height: 14px"
              >
                <img
                  src="../assets/icons/instagram.svg"
                  style="width: 14px; height: 14px; margin-right: 5px"
                />
                <p class="h-100 m-0" style="color: #9b9b9b; font-size: 14px">
                  Instagram Perusahaan
                </p>
              </div>
              <div
                class="d-flex justify-content-center mb-2 align-items-center p-0"
                style="height: 14px"
              >
                <img
                  src="../assets/icons/linkedin 1.svg"
                  style="width: 14px; height: 14px; margin-right: 5px"
                />
                <p class="h-100 m-0" style="color: #9b9b9b; font-size: 14px">
                  Linkedin Perusahaan
                </p>
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
.background {
  background: #5e50a1;
  height: 200px;
  border-radius: 8px 8px 0px 0px;
}
.profileBox {
  position: relative;
  padding: 20px;
  background: #ffffff;
  border-radius: 0px 0px 8px 8px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-primary {
  border: 1px #5e50a1;
  background: #5e50a1;
  width: 150px;
 }
 .btn-primary:hover {
  border: 1px #5e50a1;
  background: #423870;
  width: 150px;
 }

.pen {
  position: absolute;
  right: 40px;
  top: -40px;
  cursor: pointer;
}
.pen p {
    width: 200px;
    color: white;
    display: inline-flex;
    justify-content: flex-end;
}
.profileBox img {
  width: 150px;
  height: 150px;
}
.imgs {
  margin-top: -100px;
}
@media (max-width: 575.98px) {
  .profileBox {
  border-radius: 0px;
}

.pen {
  position: absolute;
  right: 20px;
  top: -40px;
  cursor: pointer;
}

.background {
  border-radius:0px;
}
 }

</style>
