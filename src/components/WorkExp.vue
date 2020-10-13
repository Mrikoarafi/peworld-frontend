<template>
  <div>
    <div class="col-12 zero" v-if="experience.length < 1">
        Belum Ada pengalaman Kerja
    </div>
    <div class="col-12 zero" v-else>
        <div class="col-12 expitem p-3" v-for="(item, index) in experience" :key="index">
            <h5 class="col-12 text-left font-weight-bold">{{item.position}}</h5>
            <h6 class="col-12 text-left">{{item.company_name}}</h6>
            <h6 class="col-12 text-left text-muted">{{item.month_year}}</h6>
            <hr>
            <p class="col-12 text-left m-0">{{item.description}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      id: localStorage.getItem('id'),
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
}
.expitem {
    border: 1px #e5e5e5 solid;
    margin-bottom: 10px;
    border-radius: 8px;
}
</style>
