<template>
  <div class="template" id="portfolio">
    <div class="container">
      <div class="row pt-5">
        <div class="col-sm-12">
          <p class="portfolio" data-aos="fade-down" data-aos-duration="1000">
            Our Portfolio
          </p>
        </div>
      </div>
      <div class="row">
        <h2 class="work" data-aos="fade-right" data-aos-duration="1000">
          The Work We've Done
        </h2>
      </div>

      <div class="row mt-5">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-inner">
            <div
              class="carousel-item"
              v-for="(item, index) in portfolio"
              :key="index"
              :class="{ active: index === 0 }"
            >
              <div class="row">
                <div class="col-sm-12 d-sm-none">
                  <img
                    :src="'/storage/image/' + item.images"
                    class="d-block"
                    height="400"
                    alt=""
                  />
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-5">
                  <h3 class="judul ps-2">{{ item.judul }}</h3>
                  <p class="deskripsi ps-2">{{ item.deskripsi }}</p>
                  <!-- <button type="button" class="btn btn-warning buttonCustom">
                    <strong> Create Project </strong>
                  </button> -->
                </div>
                <div class="col-sm-5 d-none d-sm-block">
                  <img
                    :src="'/storage/image/' + item.images"
                    class="d-block float-end"
                    height="400"
                    alt=""
                  />
                </div>
                <div class="col-sm-1"></div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
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
import axios from "axios";

export default {
  data() {
    return {
      portfolio: [],
    };
  },
  methods: {
    async fetchPortfolio() {
      const response = await axios.get(
        "https://www.lumira.co.id/api/public-portfolio"
      );
      this.portfolio = response.data.data;
    },
  },
  created() {
    this.fetchPortfolio();
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  h2{
    font-size: 35px !important;
  }
}
.template {
  padding-top: 80px;
  background-color: #2b77eb;
  padding-bottom: 100px;
}
.customCarousel {
  height: 400px;
}

.judul {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 38px;

  color: #ffffff;
}

.deskripsi {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 172.11%;
  /* or 41px */

  color: #ffffff;
}

.buttonCustom {
  width: 296px;
  height: 68px;
  border-radius: 50px;
}

.portfolio {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

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
</style>