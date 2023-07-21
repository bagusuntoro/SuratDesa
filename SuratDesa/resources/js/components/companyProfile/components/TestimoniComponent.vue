<template>
  <div class="template" id="testimoni">
    <div class="container">
      <div class="row pt-5">
        <div class="col-sm-12">
          <p class="portfolio" data-aos="fade-down" data-aos-duration="1000">Testimoni</p>
        </div>
      </div>
      <div class="row">
        <h2 class="work" data-aos="fade-right" data-aos-duration="1000">What They Are Saying</h2>
      </div>

      <div class="row mt-5">
        <div
          id="testimoniCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(item, index) in items"
              :key="index"
              data-bs-target="#testimoniCarousel"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
            ></li>
          </ol>
          <div class="carousel-inner mb-5">
            <div
              v-for="(item, index) in items"
              :key="item.message"
              :class="{ 'carousel-item': true, active: index === 0 }"
            >
              <div class="row">
                <div class="col-sm-12 ">
                  <img
                    :src="'/storage/image/' + item.images"
                    class="rounded-circle customImage"
                    alt=""
                  />
                  <div class="cardTestimoni">
                    <div class="box"></div>
                    <h3 class="nama">{{ item.nama }}</h3>
                    <h4 class="profesi">{{ item.profesi }}</h4>
                    <p class="txt">{{ item.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#testimoniCarousel"
            data-bs-slide="prev"
            :class="{'carousel-control-prev': true, 'show': items.length > 1}"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#testimoniCarousel"
            data-bs-slide="next"
            :class="{'carousel-control-next': true, 'show': items.length > 1}"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
export default {
  // components: { HeaderComponent },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetchData() {
      const response = await axios.get("https://www.lumira.co.id/api/public-testimoni");
      this.items = response.data.data;
    },
  },
  created() {
    // Panggil method fetchData saat pertama kali dijalankan
    this.fetchData();
  },
};
</script>

<style scoped>
.container {
  /* position: relative; */
  z-index: 0;
}
.template {
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: #2b77eb;
  padding-bottom: 100px;
  z-index: 0;
}

@media only screen and (max-width: 600px) {
  .cardTestimoni{
    width: 90% !important;
    height: 320px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 13px 54px rgba(51, 51, 51, 0.09);
    border-radius: 18px;
    z-index: 0;
    overflow: auto;
  }
  h2{
    font-size: 35px !important;
  }
}


.box {
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2 !important;
}

img {
  display: block;
  margin: 0 auto;
  margin-bottom: -45px;
  width: 80px;
  z-index: 1;
}

.nama {
  padding-top: 60px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #000000;
}

.profesi {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  color: #999999;
}

.txt {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  padding: 30px 50px 0 50px;
  color: #4f4f4f;
}

.portfolio {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;

  text-align: center;

  color: #ffffff;
}

.work {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 74px;
  /* identical to box height */

  text-align: center !important;

  color: #ffffff;
}

.cardTestimoni {
  width: 780px;
  height: 320px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 13px 54px rgba(51, 51, 51, 0.09);
  border-radius: 18px;
  z-index: 0;
}
</style>