<template>
  <div class="home">
    <Navbar type="home" />
      <div class="content">
        <div class="header">
          <div class="container">
            <h5 class="text-white font-weight-bold p-3">Top Jobs</h5>
          </div>
        </div>

        <div class="home-content mb-5 mt-5">
          <div class="container">
            <form>
              <div class="form">
                <input type="text" class="form-control p-3" placeholder="Search for any skill" />
                <button disabled class="d-none d-sm-block">
                  <b-icon icon="search" variant="secondary" class="pr-4"></b-icon>
                </button>
                <b-dropdown no-caret text="sort" variant="violet" class="mr-3 ml-3">
                  <b-dropdown-item>Sort by name</b-dropdown-item>
                  <b-dropdown-item>Sort by skill</b-dropdown-item>
                  <b-dropdown-item>Sort by location</b-dropdown-item>
                  <b-dropdown-item>Sort by freelance</b-dropdown-item>
                  <b-dropdown-item>Sort by fulltime</b-dropdown-item>
                </b-dropdown>
                <input type="submit" class="btn btn-purple text-white" value="Search">
              </div>
            </form>
            <div class="card-home mt-4 p-4">
              <div v-for="(item, index) in allEmploye.data" :key="index">
              <b-row align-h="between">
                <b-col class="form-inline" @click="detail(item.id_employe)">
                  <img :src="`http://localhost:3000/${item.image_employe}`" alt="photo profile" class="photo-profile">
                  <div class="card-home-detail">
                    <b>{{item.name}}</b>
                    <p class="small text-muted">{{item.jobdesk}}</p>
                    <p class="small text-muted location d-none d-sm-block">
                      <img src="../assets/images/map.png" alt="location"> {{item.domisili}}
                    </p>
                    <a class="btn btn-skill text-white mr-2">PHP</a>
                  </div>
                </b-col>
                <b-col cols="auto">
                  <button class="btn btn-purple text-white d-none d-sm-block" @click="detail(item.id_employe)">
                    Lihat Profile
                  </button>
                </b-col>
              </b-row>
              <hr>
            </div>
            </div>
          </div>
        </div>

      <Footer />
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      allEmploye: 'employe/getAll'
    })
  },
  methods: {
    ...mapActions({
      onAll: 'employe/onAll'
    }),
    detail (id) {
      alert(id)
    }
  },
  mounted () {
    this.onAll()
  }
}
</script>

<style scoped>
.home {
  overflow: hidden;
}
.content {
  background-color: #E5E5E5;
}
.header {
  background-color: #5E50A1;
  height: 100%;
}
.form {
  display: flex;
  background-color: #fff;
  box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
  border-radius: 8px;
  padding: 10px;
}
input[type="text"] {
  background: transparent;
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
}
input[type="text"]:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: transparent;
}
.form button {
  border: none;
  border-right: 2px solid #ddd;
  background-color: transparent;
  margin-right: 5px;
}
.form a {
  font-size: 14px;
}
.btn-purple {
  background-color:#5E50A1;
  font-size: 14px;
}
.card-home {
  background: #FFFFFF;
  box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
  border-radius: 8px;
}
.photo-profile {
  height: 80px;
}
.location {
  margin-top: -10px;
}
.location img {
  margin-top: -3px;
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
.card-home-detail {
  margin-left: 15px;
}
@media(max-width: 350px) {
  .card-home-detail {
    margin: 5px 0;
  }
}
</style>
