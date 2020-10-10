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
                <a class="btn mr-2 ml-2 text-muted">Category</a>
                <input type="submit" class="btn btn-purple text-white" value="Search">
              </div>
            </form>
            <div class="card-home mt-5 p-4">
              <b-row align-h="between">
                <b-col class="form-inline">
                  <img src="../assets/images/profile.png" alt="photo profile" class="photo-profile">
                  <div class="card-home-detail">
                    <b>Louis Tomlinson</b>
                    <p class="small text-muted">Web Developer</p>
                    <p class="small text-muted location d-none d-sm-block">
                      <img src="../assets/images/map.png" alt="location"> Lorem ipsum
                    </p>
                    <a class="btn btn-skill text-white mr-2">PHP</a>
                  </div>
                </b-col>
                <b-col cols="auto">
                  <button class="btn btn-purple text-white d-none d-sm-block">
                    Lihat Profile
                  </button>
                </b-col>
              </b-row>
              <hr>
            </div>
          </div>
        </div>

      <Footer />
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
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
.location {
  margin-top: -10px;
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
