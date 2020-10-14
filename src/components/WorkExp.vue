<template>
  <div>
    <div class="col-12 zero" v-if="experience.length < 1">
      <p class="text-muted text-center mt-2">Belum Ada pengalaman Kerja</p>
    </div>
    <div class="zero" v-else>
      <div class="container">
        <div class="col-12 expitem p-2" v-for="(item, index) in experience" :key="index">
          <div class="form-inline row">
            <div class="col-sm-3 text-center">
              <img src="../assets/images/work.png" alt="Work Image" class="image d-none d-sm-block">
            </div>
            <div class="col-sm-9">
              <h5 class="font-weight-bold">{{item.position}}</h5>
              <h6 class="small font-weight-bold text-muted">{{item.company_name}}</h6>
              <p class="text-muted">{{item.month_year}}</p>
              <b>{{item.description}}</b>
              <hr>
            </div>
          </div>
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
  margin-bottom: 10px;
  border-radius: 8px;
}
.image {
  height: 130px;
}
p, b {
  font-size: 14px;
}
@media(max-width: 768px) {
  .image {
    height: 100px;
  }
}
</style>
