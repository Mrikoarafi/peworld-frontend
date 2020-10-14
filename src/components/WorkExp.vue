<template>
  <div>
    <div class="col-12 zero" v-if="experience.length < 1">
      <p class="text-muted text-center mt-2">Belum Ada pengalaman Kerja</p>
    </div>
    <div class="col-10 zero" v-else>
      <div class="container">
        <div class="col-12 expitem p-3" v-for="(item, index) in experience" :key="index">
          <h5 class="col-12 text-left font-weight-bold">{{item.position}}</h5>
          <h6 class="col-12 text-left">{{item.company_name}}</h6>
          <p class="col-12 text-left text-muted small">{{item.month_year}}</p>
          <hr>
          <p class="col-12 text-left small">{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      id: this.$route.query.id,
      experience: []
    }
  },
  methods: {
    ...mapActions({
      onExperience: 'employe/getExperience'
    })
  },
  mounted () {
    this.onExperience(this.id)
      .then((response) => {
        console.log(response)
        this.experience = response
      })
  }
}
</script>

<style scoped>
.zero {
  font-size : 20px;
  padding-top: 20px;
  margin: auto;
}
.expitem {
  border: 1px #e5e5e5 solid;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>
