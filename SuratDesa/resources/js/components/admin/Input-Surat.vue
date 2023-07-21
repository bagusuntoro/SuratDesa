<template>
    <div id="wrapper">
    <sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <h1 class="text-center customMargin h3">Input Data Note</h1>
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
          <div class="headerNote">
            <div class="row">
              <div class="col-sm-1"></div>
              <div class="col-sm-10">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="location" class="form-label">Location</label>
                      <input
                        type="text"
                        class="form-control"
                        id="location"
                        placeholder="input barang"
                        v-model="form.location"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="truck" class="form-label">Nomor Truck</label>
                      <input
                        type="text"
                        class="form-control"
                        id="no_truck"
                        placeholder="input barang"
                        v-model="form.no_truck"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="location" class="form-label">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        id="date"
                        placeholder="input date"
                        v-model="form.date"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="driver" class="form-label">Driver</label>
                      <input
                        type="text"
                        class="form-control"
                        id="driver"
                        placeholder="input driver"
                        v-model="form.driver"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="container" class="form-label"
                        >Nomor Container</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="no_container"
                        placeholder="input nomor container"
                        v-model="form.no_container"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="telp" class="form-label">No Telp</label>
                      <input
                        type="text"
                        class="form-control"
                        id="telp"
                        placeholder="input telp"
                        v-model="form.telp"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="seal" class="form-label">Nomor Seal</label>
                      <input
                        type="text"
                        class="form-control"
                        id="no_seal"
                        placeholder="input nomor seal"
                        v-model="form.no_seal"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="destination" class="form-label"
                        >Destination</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="destination"
                        placeholder="input nomor destination"
                        v-model="form.destination"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <router-link
                      to="/user-note"
                      class="btn btn-danger mb-5"
                      >Kembali</router-link
                    >
                  </div>
                  <div class="col-sm-6">
                    <button type="submit" class="btn btn-primary" style="float:right;">
                      Selanjutnya
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-1"></div>
            </div>
          </div>
        </form>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
</template>