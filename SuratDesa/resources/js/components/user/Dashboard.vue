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
                        Jumlah Pengajuan
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{jumlahPengajuan}}
                      </div>
                    </div>
                    <div class="col-auto">
                      <!-- <i class="fa-solid fa-list"></i> -->
                      <i class="fas fa-solid fa-list fa-2x text-gray-300"></i>
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
                        Pengajuan Selesai
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{pengajuanSelesai}}
                      </div>
                    </div>
                    <div class="col-auto">
                      <!-- <i class="fa-solid fa-check-double"></i> -->
                      <i class="fas fa-solid fa-check-double fa-2x text-gray-300"></i>
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
                        Pengajuan Proses 
                      </div>
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <div
                            class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                          >
                            {{pengajuanProses}}
                          </div>
                        </div>
                        <div class="col">
                          
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
                        Jumlah Pengguna
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{jumlahPengguna}}
                      </div>
                    </div>
                    <div class="col-auto">
                      <!-- <i class="fas fa-comments fa-2x text-gray-300"></i> -->
                      <i class="fas fa-solid fa-users fa-2x text-gray-300"></i>
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
    return {
      jumlahPengajuan:0,
      pengajuanProses:0,
      pengajuanSelesai:0,
      jumlahPengguna:0
    };
  },
  methods: {
    async fetchPengajuan() {
      try {
        const response = await axios.get("http://localhost:8000/api/auth/pengajuan",{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
       this.jumlahPengajuan = response.data.data.length; // jumlah pengajuan
        this.pengajuanProses = response.data.data.filter(item => item.status_surat === 'proses').length; // jumlah status proses
        this.pengajuanSelesai = response.data.data.filter(item => item.status_surat === 'selesai').length; // jumlah status selesai
      
       } catch (error) {
        console.error(error);
      }
    },
    async fetchUser() {
      try {
        const response = await axios.get("http://localhost:8000/api/auth/list-user",{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.jumlahPengguna = response.data.data.length; //jumlah pengguna
      } catch (error) {
        console.error(error);
      }
    },
  },
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
          this.fetchPengajuan();
          this.fetchUser();
        }
      })
      .catch((error) => {
        console.error(error);
        this.$router.push("/");
      });
  },
};
</script>
