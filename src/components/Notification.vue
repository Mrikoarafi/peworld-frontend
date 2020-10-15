<template>
    <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="listMsg.length < 1">
              No Notification !
            </div>

            <div v-else>
              <div v-for="(item, index) in listMsg" :key="index">
                <div>New message from {{item.sender}}</div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="deleteNotif">Close</button>
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
