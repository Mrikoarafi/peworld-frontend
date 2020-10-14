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
                v-if="listCalling[0].length === 0"
              >
                <img src="..\assets\images\Chat\chat 0.png" />
              </div>

              <div class="col-12 mt-4 mx-auto text-center" v-else>
                <div class="btn btn-primary" v-for="(item, index) in listCalling[0]" :key="index">
                  <div v-if="role == 0" @click="chats(item.email_recruiter)">
                    {{item.email_recruiter}}
                  </div>

                  <div v-else @click="chats(item.email_employe)">
                    {{item.email_employe}}
                  </div>
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
              <div class="ml-4 d-inline" v-for="(item, index) in historyMsg" :key="index">
                {{item.sender}}<div v-html="item.message"></div>
              </div>
              <div class="col-12 p-0 listMessage" v-if="receiver !== null">
                <div v-for="(item, index) in getAllPrivateMessage" :key="index">
                  {{item.message}}
                </div>
              </div>

              <div v-else>
                <div class="row mt-4" v-for="(item, index) in listMsg" :key="index">
                  {{item.message}}
                </div>
              </div>
              <div class="col-12 p-0 mt-auto mb-4">
                <div class="row mx-4">
                  <form @submit.prevent="send">
                    <input
                    type="text"
                    class="form-control col-11"
                    placeholder="type message..."
                    style="border-radius: 30px"
                    v-model="message"
                  />
                  <button
                  type="submit"
                    style="background: #5e50a1"
                    class="ml-auto btn btn text-white rounded-circle py-2"
                  >
                    <img src="..\assets\images\Chat\send.png" alt="" />
                  </button>
                  </form>
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
import io from 'socket.io-client'

export default {
  data () {
    return {
      chat: [],
      socket: io('http://localhost:3000'),
      listCalling: [],
      email: localStorage.getItem('email'),
      role: localStorage.getItem('role'),
      message: '',
      receiver: null,
      listMsg: [],
      getAllPrivateMessage: [],
      historyMsg: []
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    chats (emailReceiver) {
      this.listMsg = []
      this.getAllPrivateMessage = []
      this.receiver = emailReceiver
      this.getPrivateMessage()
      this.socket.emit('get-all-message', {
        sender: this.email,
        receiver: emailReceiver
      })

      this.getHistoryMsg()
    },
    send () {
      if (!this.receiver) {
        alert('receiver is null')
      } else {
        const msg = `${this.email} : ${this.message}`

        this.listMsg = [...this.listMsg, {
          sender: this.email,
          receiver: this.receiver,
          message: msg
        }]

        this.getPrivateMessage()

        this.socket.emit('send-message', {
          sender: this.email,
          receiver: this.receiver,
          message: this.message
        })

        this.message = ''
      }
    },
    getPrivateMessage () {
      const privateMsg = this.listMsg.filter(e => {
        if (this.receiver === null) {
          return e.sender === this.receiver || e.sender === this.email
        } else {
          return e.receiver === this.receiver || e.sender === this.receiver
        }
      })

      this.getAllPrivateMessage = privateMsg
    },
    getHistoryMsg () {
      this.socket.on('get-history-message', payload => {
        this.historyMsg = payload
        console.log(payload)
      })
    }
  },
  mounted () {
    // this.socket.on('list-calling', (payload) => {
    //   console.log(payload)
    // })

    this.getHistoryMsg()
    this.socket.emit('get-all-calling', (this.email))

    this.socket.on('list-calling', (payload) => {
      this.listCalling = [...this.listCalling, payload]
    })

    this.socket.emit('join-room', this.email)

    this.socket.on('get-message', payload => {
      this.listMsg = [...this.listMsg, payload]

      if (this.receiver !== null) {
        this.getPrivateMessage()
      }
    })
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
  /* align-items: center; */
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
