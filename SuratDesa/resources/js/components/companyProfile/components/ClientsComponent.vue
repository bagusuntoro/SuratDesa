<template>
  <div class="template" id="clients">
    <div class="container">
      <div class="row">
        <p class="clients" data-aos="fade-down" data-aos-duration="1000">
          Clients
        </p>
        <h2 class="someClients" data-aos="fade-right" data-aos-duration="1000">
          Some Of Our Clients
        </h2>
      </div>

      <div class="row mt-5">
        <div v-for="(item, index) in client" :key="index" class="col-sm-2 mt-3">
          <div
            class="cardImage d-flex justify-content-center"
          >
            <img
              :src="'/storage/image/' + item.images"
              class="text-center"
              alt="client"
            />
          </div>
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
      client: [],
    };
  },
  methods: {
    async fetchclient() {
      const response = await axios.get("https://www.lumira.co.id/api/public-client");
      this.client = response.data.data;
    },
  },
  created() {
    this.fetchclient();
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
  padding-top: 100px;
  padding-bottom: 100px;

  background: rgba(207, 218, 236, 0.3);
}
.clients {
  height: 33px;
  left: 442px;
  top: 5128px;

  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;

  color: #2b77eb;
}
.someClients {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 74px;
  /* identical to box height */

  text-align: center;

  color: #333333;
}

.cardImage {
  width: 100%;
  height: 100px;
  box-shadow: 1px 1px 2px 1px #c7c7c7;
  background: rgba(207, 218, 236, 0.3);
}

img {
  margin: auto !important;
}
</style>