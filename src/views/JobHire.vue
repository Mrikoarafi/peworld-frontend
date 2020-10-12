<template>
  <div class="job-hire">
    <Navbar type="home" />
    <div class="container mt-4 mb-5">
      <div class="row">
        <div class="col-sm-4 mb-5">
          <div class="card-left p-4">
            <div class=" text-center mb-3">
              <img src="../assets/images/profile.png" alt="photo profile">
            </div>
            <h5 class="font-weight-bold">{{ detailEmploye.name }}</h5>
            <p class="small">{{ detailEmploye.jobdesk }}</p>
            <p class="small text-muted">
              <img src="../assets/images/map.png" alt="location" class="location mr-1">
              {{ detailEmploye.domisili }}
            </p>
            <p class="small text-muted">
              {{ detailEmploye.description }}
            </p>
            <h5 class="font-weight-bold">Skill</h5>
            <a class="btn btn-skill text-white mr-2 mt-2 mb-2">PHP</a>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="card-right">
            <h3 class="font-weight-bold">Hubungi Louis Tomlinson</h3>
            <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <form>
              <label class="small text-muted mt-3">Tujuan tentang pesan ini</label>
              <select class="form-control">
                <option>Projek</option>
              </select>
              <label class="small text-muted mt-3">Nama Lengkap</label>
              <input type="text" class="form-control" placeholder="Masukkan nama lengkap">
              <label class="small text-muted mt-3">Email</label>
              <input type="text" class="form-control" placeholder="Masukkan email">
              <label class="small text-muted mt-3">No Handphone</label>
              <input type="text" class="form-control" placeholder="Masukkan no handphone">
              <label class="small text-muted mt-3">Deskripsi</label>
              <textarea class="form-control" rows="8" placeholder="Deskripsi / jelaskan lebih detail"></textarea>
              <button type="submit" class="btn btn-orange btn-block text-white mt-5">
                Hire
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'JobHire',
  data () {
    return {
      id: localStorage.getItem('id')
    }
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      detailEmploye: 'employe/getDetail'
    })
  },
  methods: {
    ...mapActions({
      onDetail: 'employe/onDetail'
    })
  },
  mounted () {
    this.onDetail(this.id)
  }
}
</script>

<style scoped>
.job-hire {
  background-color: #E5E5E5;
  overflow: hidden;
}
.card-left {
  background-color: #fff;
  border-radius: 8px;
}
.location {
  margin-top: -5px;
}
.btn-skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #FBB017;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 3px 15px;
  font-size: 12px;
  margin-top: -5px;
}
select,
input[type="text"],
input[type="email"],
textarea {
  background: #fff;
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
}
select:focus,
input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-orange {
  background-color: #FBB017;
  border-radius: 5px;
  font-weight: bold;
}
</style>
