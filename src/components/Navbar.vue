<template>
  <div class="container-fluid p-0" id="navbar">
    <div class="container">
    <b-navbar toggleable="md" type="light" class=" h-158 mt-10">
      <b-navbar-brand to="/" class=" d-flex">
        <img src="../assets/icons/Peworld Logo.svg" alt="Logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"
        ><img src="../assets/icons/align-right.png"
      /></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="ml-sm-auto">
        <a href="/home" class="text-dark font-weight-bold ml-5" v-if="type !== 'home' && isLogin === true">Home</a>
        <b-navbar-nav class=" ml-auto" v-if="type === 'home' && isLogin === true">
          <b-navbar-nav class=" mr-xl-auto notif-chat">
            <b-nav-item href="#" class="d-block d-md-none nav-ChatNotif">Chats</b-nav-item>
            <b-nav-item href="#" class="d-block d-md-none nav-ChatNotif"
              >Notifications</b-nav-item
            >
            <b-nav-item href="/notifications" class="d-none mr-2 d-md-flex"
              ><img src="../assets/icons/bell.png"
            /></b-nav-item>
            <b-nav-item href="#" class="d-none mr-2 d-md-flex"
              ><img src="../assets/icons/mail.png"
            /></b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown
            toggle-class=" text-decoration-none mr-5"
            no-caret
            right
          >

            <template v-slot:button-content>
              <div class=" borderprofile rounded-circle ">
                <img class="rounded-circle"
                  src="../assets/icons/christian-buehner-DItYlc26zVI-unsplash 1.png" alt="photo profile" />
                <!-- <img class="rounded-circle"
                  :src="`http://localhost:3000/${detail.image_employe}`" alt="photo profile" /> -->
              </div>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else-if="isLogin === true">
          <a href="/profile" class="btn btnsignup">
            Profile
          </a>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <button
            type="button"
            class="btn mr-2 btn-outline-signup"
            data-toggle="modal" data-target="#loginfor"
            >Masuk</button
          >
          <button
            data-toggle="modal" data-target="#registerfor"
            type="button"
            class="btn btnsignup"
            >Daftar</button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="modal" tabindex="-1" id="loginfor">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5 class="text-center">
              <img src="../assets/images/logoPurple.png" alt="logo" class="logo" />
            </h5>
            <router-link
            to="/login"
            data-dismiss="modal"
            class="btn btn-fluid btnsignup">
              Masuk sebagai Pekerja
            </router-link>
            <router-link
            to="/loginHire"
            data-dismiss="modal"
            class="btn btn-fluid btn-outline-signup">
              Masuk sebagai Perekrut
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" tabindex="-1" id="registerfor">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5 class="text-center">
              <img src="../assets/images/logoPurple.png" alt="logo" class="logo" />
            </h5>
            <router-link
            to="/register"
            data-dismiss="modal"
            class="btn btn-fluid btnsignup">
              Daftar sebagai Pekerja
            </router-link>
            <router-link
            to="/registerHire"
            data-dismiss="modal"
            class="btn btn-fluid btn-outline-signup">
              Daftar sebagai Perekrut
            </router-link>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// const { url } = require('../helper/env')

export default {
  props: ['type'],
  data () {
    return {
      id: localStorage.getItem('id_employe')
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'auth/isLogin',
      detail: 'employe/getDetail'
    })
  },
  methods: {
    ...mapActions({
      onDetail: 'employe/onDetail'
    }),
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshtoken')
      localStorage.removeItem('id')
      localStorage.removeItem('role')
      window.location = '/'
    }
  },
  mounted () {
    this.onDetail(this.id)
    const token = localStorage.getItem('token')
    if (token) {
      this.logged = true
    }
  }
}
</script>

<style scoped>
#navbar {
  background: white;
}
.bg-lighto {
  background: #fff;
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border: none;
}
/* .navbar {
    padding: 0.5rem 1rem;
    margin: 10px 0px;
} */
.notif-chat {
  width: 80px;
}
.notif-chat img {
  width: 100%;
}
.notif-chat li.nav-item {
  display: flex;
  align-items: center;
}
.borderprofile {
  border: 2px #5E50A1 solid;
  width: 40px;
  height: 40px;
  padding: 2px;
}
.borderprofile img {
  width: 100%;
  height: 100%;
}
.navlink.dropdown-toggle::after {
  display: none;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.navigation {
  color: #000;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  margin: 0px 10px;
}
.btn {
  width: 100%;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin: 10px 0px;
  border-radius: 10px;
}
.btnsignup {
  background: #5E50A1;
  border-radius: 4px;
  border: none;
  color: white;
}
.btnsignup:hover {
  color: whitesmoke
}
.btn-outline-signup {
  border: 2px #5E50A1 solid;
  border-radius: 4px;
  background: none;
  color: #5E50A1;
}
@media (max-width: 767px) {
  .active::after {
    display: none;
  }
  #nav-collapse {
    background-color: white;
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
    border-bottom: 2px #5E50A1 solid;
  }
  .borderprofile {
    border: 2px #5E50A1 solid;
  }
  .nav-ChatNotif {
    color: #5E50A1 !important;
  }
}
</style>
