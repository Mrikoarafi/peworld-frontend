<template>
  <div>
    <div class="col-12 zero" v-if="portfolio.length < 1">
      <p class="text-muted text-center mt-2">Belum Ada Portfolio</p>
    </div>
    <div class="col-12 zero" v-else>
        <div class="portItem">
          <div
        v-for="(item, index) in portfolio"
        :key="index">
            <img class="imgPort" :src="`${url}/${item.image_portfolio}`" />
            <p class="m-0 font-weight-bold text-center">{{ item.apk_name }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { url } from '../helper/env'

export default {
  data () {
    return {
      id: this.$route.query.id,
      portfolio: [],
      url
    }
  },
  methods: {
    ...mapActions({
      onPortfolio: 'employe/getPortfolio'
    })
  },
  mounted () {
    this.onPortfolio(this.id).then((response) => {
      this.portfolio = response
      console.log(this.portfolio)
    })
  }
}
</script>

<style scoped>
.zero {
  font-size: 20px;
  padding-top: 20px;
}
.expitem {
  border: 1px #e5e5e5 solid;
  margin-bottom: 10px;
  border-radius: 8px;
}
.portItem {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  column-gap: 10px;
  justify-content: center;
}
.portItem div {
  display: grid;
  justify-content: center;
}
.imgPort {
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 4px solid #e5e5e5;
}
</style>
