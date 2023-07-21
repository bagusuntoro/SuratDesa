<template>
  <div class="jumbotron" id="/">
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <h2 data-aos="fade-down" data-aos-duration="1000">Ciptakan Aplikasi Terbaik Anda Bersama Kami</h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            Lumira memberikan layanan terbaik untuk menjawab segala kebutuhan
            Teknologi Perusahaan Anda.
          </p>
          <a href="#portfolio">
            <button type="button" class="btn btn-warning buttonCustom animate__animated animate__flipInY animate__delay-1s animate__slow">
              <strong>View All Works</strong>
            </button>
          </a>
        </div>
        <div class="col-sm-7 customBoxImage">
          <img src="/images/bismillah.png" alt="home" class="img-fluid customImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .buttonCustom {
    width: 296px;
    height: 68px;
    background: #f2c94c;
    border-radius: 42px;
    margin-bottom: 50px !important;
    font-size: 14px;
  }
  h2{
    font-size: 35px !important;
    line-height: 50px !important;
  }
  img {
    margin-bottom: 50px;
  }
}
.customImage{
  max-width: 85% !important;
}

.customBoxImage{
  text-align: right !important;
}

.jumbotron {
  padding-top: 100px;
  background-image: linear-gradient(296.53deg, #1a52a9 -32.62%, #2b77eb 84.15%);
  margin-top: 80px;
}

h2 {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 74px;
  color: #ffffff;
}

p {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 187.5%;
  color: #ffffff;
}

.buttonCustom {
  width: 296px;
  height: 68px;
  background: #f2c94c;
  border-radius: 42px;
  margin-bottom: 200px;
  font-size: 20px;
}
</style>
