<template>
  <div class="outer">
    <Navbar type="home" />
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-sm-4 mb-5 d-none d-sm-block">
            <div class="listUser">
              <b class="mx-4 mt-4" style="font-size: 20px">
                <b-icon-chat-square-dots-fill class="mr-2"></b-icon-chat-square-dots-fill>
                Chat
              </b>
              <div class="mt-3" style="border: 1px solid #e2e5ed"></div>

              <div class="my-auto mx-auto text-center" v-if="listCalling.length === 0">
                <img src="..\assets\images\Chat\chat 0.png" />
              </div>

              <div class="col-12 mt-4 mx-auto text-center" v-else>
                <div class="btn w-100 text-white bg-violet" style="margin-bottom: 10px;" v-for="(item, index) in listCalling[0]" :key="index">
                  <div v-if="role == '0'" @click="chats(item.email_recruiter)">
                    {{item.email_recruiter}}
                  </div>

                  <div v-else @click="chats(item.email_employe)">
                    {{item.email_employe}}
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div class="d-block d-sm-none">
          <b-button v-b-toggle.chat-left style="background-color: transparent; border: none; outline: none" class="connect">
            <b-icon-chat-square-dots-fill variant="dark"></b-icon-chat-square-dots-fill>
          </b-button>
          <b-sidebar id="chat-left" shadow>
            <div class="px-3 py-2">
              <div class="listUser">
                <b class="mx-4 mt-4" style="font-size: 20px">
                  <b-icon-chat-square-dots-fill class="mr-2"></b-icon-chat-square-dots-fill>
                  Chat
                </b>
                <div class="mt-3" style="border: 1px solid #e2e5ed"></div>

                <div class="my-auto mx-auto text-center" v-if="listCalling.length === 0">
                  <img src="..\assets\images\Chat\chat 0.png" />
                </div>

                <div class="col-12 mt-4 mx-auto text-center" v-else>
                  <div class="btn w-100 text-white bg-violet" style="margin-bottom: 10px;" v-for="(item, index) in listCalling[0]" :key="index">
                    <div v-if="role == '0'" @click="chats(item.email_recruiter)">
                      {{item.email_recruiter}}
                    </div>

                    <div v-else @click="chats(item.email_employe)">
                      {{item.email_employe}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-sidebar>
        </div>

          <div class="col-sm-7 chaaat mb-5">
            <div class="Message">
              <div class="row container">
                <img class="ml-2 mt-3" style="border-radius: 50%;" src="..\assets\images\Chat\profile.png" >
                <b class="mx-3 mt-4"  style="font-size: 17px" v-if="receiver === null">
                  Nama Orang
                </b>
                <b class="mx-3 mt-4"  style="font-size: 17px">
                  {{receiver}}
                </b>
              </div>
              <div class="mt-3" style="border: 1px solid #e2e5ed"></div>
              <div class="box-message">
                <div v-for="(item, index) in historyMsg" :key="index">
                  <div v-if="item.sender === email" class="bg-violet in-chat text-white text-right ml-auto chat-in p-2 mb-2 "
                  style="max-width: 100%;" >
                    <p class="m-0" style="font-size: 12px;">{{item.sender}}</p>
                    <div v-html="item.message"></div>
                  </div>
                  <div v-else class="chat-out p-2  mb-2">
                    <p class="m-0" style="font-size: 12px;">{{item.sender}}</p>
                    <div v-html="item.message"></div>
                  </div>
                </div>
                <div v-for="(item, index) in getAllPrivateMessage" :key="'a'+index">
                  <div v-if="item.sender === email" class="bg-violet text-white text-right ml-auto chat-in p-2 mb-2 "
                  style="max-width: 100%;">
                    <p class="m-0" style="font-size: 12px;">{{item.sender}}</p>
                    <div v-html="item.message"></div>
                  </div>
                  <div v-else class="chat-out p-2 in-chat mb-2">
                    <p class="m-0" style="font-size: 12px;">{{item.sender}}</p>
                    <div v-html="item.message"></div>
                  </div>
                </div>
              </div>

              <div class="mt-3" style="border: 1px solid #e2e5ed"></div>
              <div class="container mt-3 mb-4">
                <form @submit.prevent="send" class="d-flex flex-row">
                  <input type="text" class="form-control col-11" placeholder="type message..." style="border-radius: 30px" v-model="message" />
                  <button type="submit" class="send-btn text-center ml-2 btn text-white rounded-circle d-none d-sm-block" >
                    <img src="..\assets\images\Chat\send.png" alt="button send" class="img-send"/>
                  </button>
                </form>
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
import Swal from 'sweetalert2'
import { url } from '../helper/env'

export default {
  data () {
    return {
      chat: [],
      socket: io(`${url}`),
      listCalling: [],
      email: localStorage.getItem('email'),
      role: localStorage.getItem('role'),
      message: '',
      receiver: null,
      listMsg: [],
      getAllPrivateMessage: [],
      historyMsg: [],
      url
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
        this.alertExist()
      } else {
        this.listMsg = [...this.listMsg, {
          sender: this.email,
          receiver: this.receiver,
          message: this.message
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
    alertExist () {
      Swal.fire({
        icon: 'error',
        title: 'Receiver is null',
        text: 'Please select receiver first'
      })
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
      console.log(payload)
      this.listCalling = [...this.listCalling, payload]
      console.log(this.listCalling)
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
.outer {
  background: #e5e5e5;
  overflow: hidden;
}
.Message,
.listUser {
  min-height: 580px;
  background: #ffffff;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
}
.listMessage {
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
.box-message {
  height: 500px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 20px;
}
.box-message::-webkit-scrollbar {
    width: 0.2em;
}
.bg-violet {
  background: #5e50a1;
}
.box-message::-webkit-scrollbar-thumb {
  background-color: #5e50a1;
}
.chat-in {
  width: fit-content;
  justify-content: end;
  border-radius: 10px 10px 0px 10px;
}
.chat-out {
  border: 1px #5e50a1 solid;
  width: fit-content;
  border-radius: 0px 10px 10px 10px;
}
/* .in-chat::-webkit-scrollbar {
    width: 0.2em;
    height: 0.2em;
} */
.bg-violet {
  background: #5e50a1;
  border: none;
}
.bg-violet :hover {
  background: #5e50a1;
  border: none;
}
.in-chat::-webkit-scrollbar-thumb {
  background-color: #5e50a1;
}
.send-btn {
  background-color: #5e50a1;
  width: 40px;
  height: 40px;
}
.connect {
  position: fixed;
  right: 20px;
  bottom: 40px;
  z-index: 1;
}
@media(min-width: 1024px) {
  .row {
    margin-left: 30px;
  }
}
@media(max-width: 768px) {
  .send-btn {
    width: 30px;
    height: 40px;
  }
  .img-send {
    margin-left: -5px;
  }
}
</style>
