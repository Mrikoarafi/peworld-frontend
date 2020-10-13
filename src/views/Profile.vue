<template>
  <div class="outer">
    <Navbar type="home" />
    <div class="container-fluid p-0 p-sm-3">
      <div class="container p-0 p-sm-3">
        <div class="background mt-sm-5"></div>
        <div class="col-sm-12 .contain-form d-flex flex-column p-0 mb-sm-5">
          <div class="col-12 profileBox">
            <img
              src="../assets/icons/christian-buehner-DItYlc26zVI-unsplash 1.png"
              alt=""
              class="rounded-circle imgs"
            />
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
              <p
                style="font-size: 12px; margin: 0; color: #9b9b9b"
                class="text-center mb-2"
              >
                Freelancer
              </p>
              <p
                style="font-size: 12px; margin: 0; color: #9b9b9b"
                class="text-center mb-2"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur aliquid, id libero optio deserunt beatae quisquam
                itaque, fuga hic animi tempore perspiciatis nobis laboriosam
                sed, architecto porro nesciunt ipsa quidem.
              </p>
              <router-link to="/editCompany" class="btn mt-4 mb-4 btn-primary"
                >Hire</router-link
              >
              <h5 style="font-weight: bold" class="text-center">Skills</h5>
              <div class=" mb-4 col">
                <div
                class="btn btn-warning text-white mr-1 mb-3"
                v-for="(skill, index) in skills" :key="index"
                >
                  {{skill}}
                </div>
              </div>
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
            <div class="col-12 h-auto portExp pb-5">
              <div class="col-12 d-flex">
                <div class="col">Portfolio</div>
                <div class="col">Pengalaman Kerja</div>
              </div>
              <div class="col-12">
                <WorkExp />
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
import WorkExp from '@/components/WorkExp.vue'

export default {
  components: {
    Navbar,
    Footer,
    WorkExp
  },
  data () {
    return {
      skills: ['PHP', 'Javascript', 'Javascript', 'Javascript', 'Javascript', 'Javascript', 'PHP', 'Javascript', 'Javascript', 'Javascript', 'Javascript', 'Javascript']
    }
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

.profileBox img {
  width: 150px;
  height: 150px;
}
.imgs {
  margin-top: -100px;
}
.portExp {
  background: #ffffff;
  border-radius: 0px 0px 8px 8px;
}
@media (max-width: 575.98px) {
  .profileBox {
    border-radius: 0px;
  }
  .background {
    border-radius: 0px;
  }
}
</style>
