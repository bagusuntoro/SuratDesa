<template>
  <div id="wrapper">
    <sidebar-admin />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <h1 class="text-center h3">List Pengajuan Surat</h1>



        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="table-responsive">
              <table class="table table-striped mt-2">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">NIK</th>
                    <th scope="col">Jenis Surat</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in note" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.nama }}</td>
                    <td>{{ item.nik }}</td>
                    <td>{{ item.jenis_surat }}</td>
                    <td>
                      <span
                        v-if="item.status_surat === 'proses'"
                        class="btn btn-warning"
                      >
                        {{ item.status_surat }}
                      </span>
                      <span
                        class="btn btn-primary"
                        v-if="item.status_surat === 'selesai'"
                      >
                        {{ item.status_surat }}
                      </span>
                    </td>
                    <td>
                      <!-- Example single danger button -->
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          v-if="item.status_surat === 'proses'"
                        >
                          Cetak
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                              <router-link
                                  :to="{ name: 'pengantar-umum', params: { id: item.id } }"
                                  class="dropdown-item"
                              >
                                  Pengantar Umum
                              </router-link> 
                              <!-- <a class="dropdown-item" href="/admin-skck">SKTM</a> -->
                          </li>
                          <li>
                              <router-link
                                  :to="{ name: 'pengantar-skck', params: { id: item.id } }"
                                  class="dropdown-item"
                              >
                                  Pengantar SKCK
                              </router-link>
                            <!-- <a class="dropdown-item" href="#">Pengantar SKCK</a> -->
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-sm-1"></div>
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
import Swal from "sweetalert2";
export default {
  data() {
    return {
      note: [],
    };
  },
  methods: {
    detail(id) {
      this.$router.push({ name: "user-detail-note", params: { id: id } });
    },
    async fetchNote() {
      try {
        const response = await axios.get("https://surat-desa.surabayawebtech.com/api/auth/pengajuan",{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.note = response.data.data.filter(item => item.status_surat === 'proses');
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItem(id) {
      const result = await Swal.fire({
        title: "Apakah Anda yakin ingin menghapus data ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      });

      if (result.isConfirmed) {
        // Jika user mengklik tombol "Hapus"
        // Lakukan proses delete
        axios
          .delete(`https://surat-desa.surabayawebtech.com/api/auth/notes/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            // Berhasil dihapus dari server, lakukan aksi selanjutnya jika diperlukan
            console.log(response.data);
            this.fetchNote();
          })
          .catch((error) => {
            // Terjadi error saat menghapus data dari server, tampilkan pesan error jika diperlukan
            console.error(error);
          });

        // Tampilkan SweetAlert2 jika proses delete berhasil
        await Swal.fire({
          title: `Data berhasil dihapus!`,
          icon: "success",
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false,
        });

        // Redirect ke halaman tertentu
        this.$router.push("/admin-surat");
      }
    },
  },
  created() {
    axios
      .get(`https://surat-desa.surabayawebtech.com/api/auth/me`, {
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
        } else if (role !== "admin") {
          // If the user doesn't have admin privileges, redirect to the unauthorized page
          this.$router.push("/unauthorized");
          // console.log(response.data.role)
        } else {
          console.log('role: ',role)
          console.log("success");
          this.fetchNote();
        }
      })
      .catch((error) => {
        console.error(error);
        this.$router.push("/");
      });
  },
};
</script>

<style scoped>
@media (min-width: 768px) { /* Ubah ukuran sesuai kebutuhan */
  .table-responsive{
    display:inline;
    width:100%;
    overflow-x:hidden;
    /* -webkit-overflow-scrolling:touch */
    }
}
span {
  cursor: auto !important;
}
</style>