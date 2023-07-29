<template>
  <div class="container" id="service">
    <div class="row">
      <p class="ourservice" data-aos="fade-down" data-aos-duration="1000">Our Service</p>
    </div>
    <div class="row">
      <h2 class="judul" data-aos="fade-right" data-aos-duration="1000">What We Are Doing</h2>
    </div>

    <div class="row mt-5">
      <div class="col-sm-6">
        <div class="row customRow">
          <div class="card w-100 mb-3 customCard" data-aos="fade-up" data-aos-duration="500">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <img
                    src="/images/ourService/mobile.png"
                    width="100"
                    alt="images"
                  />
                </div>
                <div class="col-sm-8">
                  <h3 class="card-title">Mobile Apps</h3>
                  <p class="card-text">
                    Kini, dunia dalam genggaman. Jangan lewatkan kesempatan emas
                    untuk memulai bisnis online anda dengan Mobile Apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row customRow">
          <div class="card w-100 mb-3 customCard" data-aos="fade-right" data-aos-duration="1200">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <img
                    src="/images/ourService/ecommerce.png"
                    width="100"
                    alt="images"
                  />
                </div>
                <div class="col-sm-8">
                  <h3 class="card-title">eCommerce</h3>
                  <p class="card-text">
                    Miliki toko online (Ecommerce) berstandar internasional yang
                    bisa membawa bisnis anda terbang lebih tinggi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 pt-5">
        <div class="row customRow">
          <div class="card w-100 mb-3 customCard" data-aos="fade-down" data-aos-duration="1500">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <img
                    src="/images/ourService/website.png"
                    width="100"
                    alt="images"
                  />
                </div>
                <div class="col-sm-8">
                  <h3 class="card-title">Website</h3>
                  <p class="card-text">
                    Mengembangkan website premium yang user friendly, mudah
                    diedit dan digunakan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row customRow">
          <div class="card w-100 mb-3 customCard" data-aos="fade-up" data-aos-duration="500">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <img
                    src="/images/ourService/erp.png"
                    width="100"
                    alt="images"
                  />
                </div>
                <div class="col-sm-8">
                  <h3 class="card-title">ERP</h3>
                  <p class="card-text">
                    Integrasikan proses setiap lini dalam manajemen perusahaan
                    secara transparasi dan akuntable yang cukup tinggi.
                  </p>
                </div>
              </div>
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
  h2{
    font-size: 35px !important;
  }
}
.customCard {
  border: none;
  box-shadow: 1px 1px 5px 2px #888888;
}

.customRow {
  padding: 10px 50px 10px 50px;
}

.ourservice {
  margin-top: 100px;

  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  color: #2b77eb;
}

.judul {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 74px;
  /* identical to box height */

  color: #333333;
}
</style>