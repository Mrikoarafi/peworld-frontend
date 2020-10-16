<template>
    <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-body">
            <div class="text-center mt-5 mb-5" v-if="listMsg.length < 1">
              <img src="../assets/images/notification.png" alt="notification empty" data-dismiss="modal">
            </div>

            <div v-else data-dismiss="modal">
              <div v-for="(item, index) in listMsg" :key="index">
                <p>You have message unread</p>
                <hr>
                <p style="font-size: 14px">
                  <b-icon-chat-right-dots-fill class="mr-2"></b-icon-chat-right-dots-fill>{{item.sender}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>

import io from 'socket.io-client'
import { url } from '../helper/env'

export default {
  props: ['listMsg'],
  data () {
    return {
      socket: io(`${url}`),
      email: localStorage.getItem('email')
    }
  },
  methods: {
    deleteNotif () {
      this.$emit('delNotif')
    }
  }
}
</script>

<style scoped>

</style>
