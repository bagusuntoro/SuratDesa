<template>
  <div class="template" id="tech">
    <div class="container">
      <div class="row">
        <p class="technologis">Technologies</p>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <h2 class="judul">We are Using Technologies</h2>
          <p class="sub">
            Kami menggunakan teknologi yang sesuai dengan kebutuhan anda
          </p>
        </div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-4">
              <img src="images/tech/1.png" class="customImages" alt="tech" />
            </div>
            <div class="col-sm-4">
              <img src="images/tech/laravel.png" class="customImages" alt="tech" />
            </div>
            <div class="col-sm-4">
              <img src="images/tech/4.png" class="customImages" alt="tech" />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-sm-4">
              <img src="images/tech/5.png" class="customImages" alt="tech" />
            </div>
            <div class="col-sm-4">
              <img src="images/tech/6.png" class="customImages" alt="tech" />
            </div>
            <div class="col-sm-4">
              <img src="images/tech/7.png" class="customImages" alt="tech" />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-sm-4">
              <img src="images/tech/2.png" class="customImages" alt="tech" />
            </div>
            <div class="col-sm-4">
              <img src="images/tech/9.png" class="customImages" alt="tech" />
            </div>
            <div class="col-sm-4">
              <img src="images/tech/10.png" class="customImages" alt="tech" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .customImages {
    margin-bottom: 40px;
    display: block;
    max-width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    /* max-width: 100%; */
  }
  h2 {
    font-size: 35px !important;
  }
}

@media only screen and (min-width: 700px) {
  .customImages {
    height: 80%;
    /* max-width: 100%; */
  }
}

.template {
  padding-top: 100px;
  padding-bottom: 100px;
  background: #e5e5e5;
}

.technologis {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  color: #2b77eb;
}

.judul {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 74px;
  color: #333333;
}

.sub {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #4f4f4f;
}
</style>
