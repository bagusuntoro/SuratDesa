<template>
    <div id="wrapper">
    <sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->
          <div
            class="d-sm-flex align-items-center justify-content-between mb-4"
          >
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a
              href="#"
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              ><i class="fas fa-download fa-sm text-white-50"></i> Generate
              Report</a
            >
          </div>

          <!-- Content Row -->
          <div class="row">
            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                      >
                        Barang (Bulan ini)
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        40,000
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-success text-uppercase mb-1"
                      >
                        Note (Bulan ini)
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        215,000
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-info text-uppercase mb-1"
                      >
                        Belum Ditandatangani
                      </div>
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <div
                            class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                          >
                            50
                          </div>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm mr-2">
                            <div
                              class="progress-bar bg-info"
                              role="progressbar"
                              style="width: 50%"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pending Requests Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                      >
                        Petugas
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    axios
      .get(`http://localhost:8000/api/auth/me/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const role = response.data.role; // Get the user's role from the response

        const token = localStorage.getItem("token");
        const expires_in = localStorage.getItem("expires_in");
        if (!token || !expires_in || new Date() > new Date(expires_in)) {
          // If token is missing or expired, redirect to the home page
          localStorage.removeItem("token");
          localStorage.removeItem("expires_in");
          this.$router.push("/");
        } else if (role !== "user") {
          // If the user doesn't have admin privileges, redirect to the unauthorized page
          this.$router.push("/unauthorized");
          // console.log(response.data.role)
        } else {
          console.log("success");
        }
      })
      .catch((error) => {
        console.error(error);
        this.$router.push("/");
      });
  },
};
</script>