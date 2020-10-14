<template>
              <div
                class="card text-center border-0 mx-1"
                style="width: 18rem"
              >
                <img
                  class="card-img-top mx-auto mt-3 mt-lg-5"
                  src="..\..\assets\images\home\Section\udingele.jpg"
                />
                <div class="mt-3 mt-lg-4 ">
                  <h5 class=" card-title mt-n1">{{user2.nama}}</h5>
                  <h6 class="card-subtitle mb-2 mt-n2 mt-lg-n1 text-muted">
                    Web Developer
                  </h6>
                  <p class="cardText mt-3 mt-lg-4 mx-lg-1" >
                    Lorem ipsum aku suka,Lorem ipsum kebanggaanku, Lorem ipsum
                    di hatiku.
                  </p>
                </div>
              </div>

</template>

<script>
export default {
  props: ['user2']
}
</script>

<style scoped>
.card-img-top {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background: rgba(251, 176, 23, 0.37);
  padding: 10px;
}
.card {
  box-shadow: 0px 8px 16px rgba(197, 197, 197, 0.25);

  width: 339px !important;
  height: 437px !important;
}
.card-title {
  font-weight: 600;
  font-size: 30px;
  color: #1f2a36;
}
.roundedPicture {
  border: 4px solid rgb(255, 255, 255);
  padding: 10px;
  border-radius: 25px;
}
.card-text {
  font-size: 18px;
  color: #46505c;
}

@media screen and (max-width: 550px) {
  .card-title {
  font-weight: 600;
  font-size: 14px;
  color: #1f2a36;
}
  .card-img-top {
  border-radius: 50%;
  width: auto;
  height: 70px;
  background: rgba(251, 176, 23, 0.37);
  padding: 4px;
}
  .card {
  box-shadow: 0px 8px 16px rgba(197, 197, 197, 0.25);

  width: auto !important;
  height: auto !important;
}
.card-subtitle{
  font-size: 11px;
}
.cardText {
  font-size: 12px;
  overflow-y: auto !important;
  height:90px;
  margin-left: 1px;
  margin-right: 1px;
}
}
</style>
