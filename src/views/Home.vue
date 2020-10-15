<template>
  <div class="home">
    <Navbar type="home" />
      <div class="content">
        <div class="header">
          <div class="container">
            <h5 class="text-white font-weight-bold p-3">Top Jobs</h5>
          </div>
        </div>

        <div class="home-content mb-4 mt-5">
          <div class="container">
            <form @submit.prevent="search">
              <div class="form">
                <input type="text" class="form-control p-3" placeholder="Search for any skill" v-model="keyword" @keyup="search" />
                <button disabled class="d-none d-sm-block">
                  <b-icon icon="search" variant="secondary" class="pr-4"></b-icon>
                </button>
                <b-dropdown no-caret text="sort" variant="violet" class="mr-3 ml-3">
                  <b-dropdown-item @click="sortAsc('name')">Sort by name</b-dropdown-item>
                  <b-dropdown-item @click="sortDesc('name_skill')">Sort by skill</b-dropdown-item>
                  <b-dropdown-item @click="sortAsc('domisili')">Sort by location</b-dropdown-item>
                </b-dropdown>
                <input type="submit" class="btn btn-purple text-white" value="Search">
              </div>
            </form>
              <div class="gallery">
                <div v-for="(item, index) in allEmploye.data" :key="index" class="card-home mt-4 p-3">
                <div>
                  <b-row align-h="between" @click="detail(item.id_employe)" >
                    <b-col cols="4" class="text-center">
                      <img :src="`${url}/${item.image_employe}`" alt="photo profile" class="photo-profile mr-2 mt-3">
                    </b-col>
                    <b-col cols="7" class="ml-2">
                      <b class="name">{{item.name}}</b>
                      <p class="small text-muted mt-2">{{item.jobdesk}}</p>
                      <p class="small text-muted location">
                        <img src="../assets/images/map.png" alt="location"> {{item.domisili}}
                      </p>
                      <a class="btn btn-skill text-white mr-2 mt-2" v-for="(item, index) in item.skill_employe.split(',')" :key="index">{{item}}</a>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
            <div class="container mt-5">
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="2" align="fill" @click.native="see">
              </b-pagination>
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
import Swal from 'sweetalert2'
import { url } from '../helper/env'

export default {
  name: 'Home',
  data () {
    return {
      rows: 20,
      currentPage: 1,
      id: localStorage.getItem('id'),
      role: localStorage.getItem('role'),
      keyword: null,
      url,
      sorting: 'name'
    }
  },
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
      onAll: 'employe/onAll',
      onSortDataAsc: 'employe/onSortDataAsc',
      onSortDataDesc: 'employe/onSortDataDesc',
      onSearch: 'employe/onSearch',
      onSkills: 'employe/getSkills'
    }),
    search () {
      this.onSearch({
        keyword: this.keyword,
        where: this.sorting
      })
      this.$router.push({ query: { search: this.keyword } })
    },
    sortAsc (sort) {
      this.sorting = sort
      this.$router.push({ path: '/home', query: { sort } })
      this.onSortDataAsc(sort)
    },
    sortDesc (sort) {
      this.sorting = sort
      this.$router.push({ path: '/home', query: { sort } })
      this.onSortDataDesc(sort)
    },
    detail (id) {
      this.$router.push({ path: '/profile', query: { id } })
    },
    see () {
      this.onAll(this.currentPage)
    },
    alertSkill () {
      Swal.fire({
        icon: 'error',
        title: 'Please, insert your skill first!'
      })
    }
  },
  mounted () {
    this.onAll(this.currentPage).then((res) => {
      this.rows = res.totalRow
    })
    if (this.role === '0') {
      this.onSkills(this.id).then((response) => {
        this.skills = response.data
        if (this.skills.length < 1) {
          this.alertSkill()
        }
      })
    }
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
.home-content {
  display: grid;
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
  border-radius: 5px;
}
.photo-profile {
  width: 80%;
}
.name {
  font-size: 18px;
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
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 30px;
  cursor: pointer;
}
@media(max-width: 999px) {
  .gallery {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .photo-profile {
    width: 100px;
  }
}
@media(max-width: 576px) {
  .gallery {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .photo-profile {
    width: 80px;
  }
  .name {
    font-size: 16px;
  }
}
</style>
