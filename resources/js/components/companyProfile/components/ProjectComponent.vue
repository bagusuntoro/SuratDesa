<template>
  <div class="template">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <h2 class="judul">Punya Project atau Ingin Bekerja Sama?</h2>
          <p class="sub">Wujudkan impian membuat produkmu bersama kami</p>
        </div>
        <div class="col-sm-4">
          <a href="https://bit.ly/lumiraCS">
            <button type="button" class="btn btn-warning buttonCustom">
              <strong>
                Lets Talk
              </strong>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.buttonCustom {
  margin-top: 100px;
  width: 296px;
  height: 68px;
  margin-left: 100px;
  border-radius: 50px;
}

@media only screen and (max-width: 600px) {
  .buttonCustom{
    width: 200px;
    height: 68px;
  }
  h2{
    font-size: 35px !important;
  }
}


.template {
  padding-top: 100px;
  padding-bottom: 100px;
  background: #2b77eb;
  box-shadow: 2px 24px 53px rgba(43, 119, 235, 0.15);
}
.judul {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 74px;

  color: #ffffff;
}

.sub {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  color: #ffffff;
}
</style>