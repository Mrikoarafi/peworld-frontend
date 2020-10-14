<template>
  <div class="outer">
    <Navbar type="home" />
    <div class="container-fluid p-0 p-sm-3">
      <div class="container p-0 p-sm-3">
        <div class="background mt-sm-5" v-if="background_img === null"></div>
        <div class="background mt-sm-5 backg" v-else>
          <img :src="`${url}/${detail.wallpaper_image}`" alt="background">
        </div>
        <div class="col-sm-12 .contain-form d-flex p-0 mb-sm-5">
          <div class="col-12 profileBox">
            <img
              :src="`${url}/${detail.image_company}`"
              alt=""
              class="rounded-circle imgs">
            <div class="d-flex pen" style="height: 20px">
              <p class="m-0 ml-2 d-none d-sm-block position-relative" style="width: auto; color: white">
                <input type="file" class="input-file"
                  @change="imageReady($event)">
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
              <h6 style="font-weight: bold" class="text-center">{{detail.company_name}}</h6>
              <h6 style="font-size: 14px" class="text-center">{{detailCompany.sector}}</h6>
              <div
                class="d-flex justify-content-center p-0 mb-2"
                style="height: 14px"
              >
                <img
                  src="../assets/icons/map-pin (4) 1.svg"
                  style="width: 14px; height: 14px; margin-right: 5px"
                />
                <p class="h-100" style="color: #9b9b9b; font-size: 12px">
                  {{detailCompany.city}}
                </p>
              </div>
              <p style="font-size: 12px; color: #9b9b9b; line-height: 20px" class="text-center mb-2 mt-2">
                {{detailCompany.description}}
              </p>
            <router-link to="/editCompany" class="btn mt-4 mb-4 btn-violet text-white">Edit Profile</router-link>

              <div class="social-media">
                <p class="text-muted small">
                  <img src="../assets/icons/mail (4).svg" style="width: 20px; height: 20px; margin-right: 10px;" />
                  {{detailCompany.company_email}}
                </p>
                <p class="text-muted small">
                  <img src="../assets/icons/phone 1.svg" style="width: 20px; height: 20px; margin-right: 10px;" />
                  {{detailCompany.phone_number}}
                </p>
                <p class="text-muted small">
                  <img src="../assets/icons/instagram.svg" style="width: 20px; height: 20px; margin-right: 10px;" />
                  {{detailCompany.instagram}}
                </p>
                <p class="text-muted small">
                  <img src="../assets/icons/linkedin 1.svg" style="width: 20px; height: 20px; margin-right: 10px;" />
                  {{detailCompany.linkedin}}
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
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'
import { url } from '../helper/env'

export default {
  data () {
    return {
      idCompany: localStorage.getItem('idCompany'),
      id: localStorage.getItem('id'),
      url,
      background_img: null
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    imageReady (event) {
      this.onUpBackground({
        id: this.idCompany,
        image: event.target.files[0]
      })
        .then((response) => {
          this.onDetailCompany(this.idCompany)
        })
      console.log(event.target.files[0])
    },
    alertUpdate () {
      Swal.fire({
        icon: 'success',
        title: 'Background Image Updated'
      })
    },
    ...mapActions({
      onDetailCompany: 'recruiter/onDetailCompany',
      onDetail: 'recruiter/onDetail',
      onUpBackground: 'recruiter/updateBackground'
    })
  },
  computed: {
    ...mapGetters({
      detailCompany: 'recruiter/getDetailCompany',
      detail: 'recruiter/getDetail'
    })
  },
  mounted () {
    this.onDetailCompany(this.idCompany)
      .then(() => {
        console.log(this.detailCompany)
      })
    this.onDetail(this.id)
      .then(() => {
        this.background_img = this.detail.wallpaper_image
        console.log(this.detail)
      })
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
.btn-violet {
  border: 1px #5e50a1;
  background: #5e50a1;
  width: 150px;
}
.btn-violet:focus {
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
.input-file {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
.backg img{
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0px 0px;
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
