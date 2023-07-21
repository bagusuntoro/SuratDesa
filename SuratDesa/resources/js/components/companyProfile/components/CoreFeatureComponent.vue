<template>
  <div class="template" id="quality">
    <div class="container">
      <div class="row">
        <p class="feature" data-aos="fade-down" data-aos-duration="1000">Core Feature</p>
        <h2 class="quality" data-aos="fade-right" data-aos-duration="1000">Our Quality</h2>
      </div>

      <div class="row mt-5">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
          <div class="card customCard" data-aos="fade-up" data-aos-duration="500">
            <img src="images/quality/1.png" class="card-img-top" alt="gambar" />
            <div class="card-body">
              <h3>Profesional</h3>
              <p class="card-text">
                Lumira International selalu mengedepankan profesionalitas dalam setiap pekerjaan. Dilengkapi engineer berpengalaman lebih dari 6 tahun di dunia Mobile Development.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card customCard" data-aos="fade-right" data-aos-duration="1200">
            <img src="images/quality/2.png" class="card-img-top" alt="gambar" />
            <div class="card-body">
              <h3>Secure</h3>
              <p class="card-text">
                Kami menjamin setiap Privacy dan Security yang Anda dapatkan. Memberikan aplikasi dan sistem digital yang mudah, cepat dan stabil digunakan oleh Jutaan Pengguna.
              </p>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
          <div class="card customCard" data-aos="fade-down" data-aos-duration="1500">
            <img src="images/quality/3.png" class="card-img-top" alt="gambar" />
            <div class="card-body">
              <h3>Business Advisory</h3>
              <p class="card-text">
                Membantu menciptakan mahakarya aplikasi dengan Bisnis Konsultan yang kami miliki. Terciptanya Desain dan Visualisasi merupakan brand image saat pertama kali dilihat.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card customCard" data-aos="fade-up" data-aos-duration="500">
            <img src="images/quality/4.png" class="card-img-top" alt="gambar" />
            <div class="card-body">
              <h3>Customize</h3>
              <p class="card-text">
                Mobile apps atau web apps dibuat dan dikembangkan sesuai dengan permintaan dan kebutuhan Perusahaan Anda.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.feature {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;

  color: #2b77eb;
}
img{
  padding: 15px;
}
.quality {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 74px;
  /* identical to box height */

  text-align: center;

  color: #333333;
}

h3 {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #000000;
}

.customCard {
  border: none;
  box-shadow: 1px 1px 5px 2px #888888;
}
</style>