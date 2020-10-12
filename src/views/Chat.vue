<template>
  <div class="outer">
    <Navbar />
    <div class="background p-3"></div>
    <div class="container-fluid">
      <div class="container">
        <div class="col-sm-12 d-flex heightChat">
          <div class="col-sm-4 form-login mt-4">
            <div class="row listUser pl-0 pr-0">
              <div class="col-12 pl-0 pr-0 mt-4">
                <small class="mx-4 " style="font-size: 16px; font-weight: 600">
                  Chat
                </small>
                <div class="mt-3" style="border: 1px solid #e2e5ed"></div>
              </div>

              <div
                class="col-12 my-auto mx-auto text-center"
                v-if="chat.length === 0"
              >
                <img src="..\assets\images\Chat\chat 0.png" />
              </div>
              <div class="col-12 my-auto mx-auto text-center" v-else>
                <div v-for="(item, index) in chat" :key="index">
                  Chat looping
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8 form-login ml-3 mt-4">
            <div class="col-12 Message pl-0 pr-0">
              <div class="col-12 pl-0 pr-0">
                <img class="ml-3 mt-3" style="border-radius: 50%;" src="..\assets\images\Chat\profile.png" >
                <small class="mx-4"  style="font-size: 17px; font-weight: 600">
                  Nama Orang
                </small>
                <div class="mt-3" style="border: 1px solid #e2e5ed"></div>
              </div>
              <div class="col-12 p-0 listMessage">
                <div class="row mx-4 mt-4">Udin gele</div>
              </div>
              <div class="col-12 p-0 mt-auto">
                <div class="row mx-4">
                  <input
                    type="text"
                    class="form-control col-11"
                    placeholder="type message..."
                    style="border-radius: 30px"
                  />
                  <button
                    style="background: #5e50a1"
                    class="ml-auto btn btn text-white rounded-circle py-2"
                    @click.prevent="addSkill"
                  >
                    <img src="..\assets\images\Chat\send.png" alt="" />
                  </button>
                </div>
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
  data () {
    return {
      chat: []
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.heightChat {
  margin-bottom: 666px;
}
.outer {
  background: #e5e5e5;
}
.Message,
.listUser {
  min-height: 583px;
  background: #ffffff;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.listMessage {
  min-height: 440px;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow:hidden;
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
</style>
