<template>
  <div id="wrapper">
    <sidebar-admin />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <h1 class="text-center h3">List User</h1>
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="row mt-5">
              <div class="col-sm-3">
                <router-link class="btn btn-primary me-2" to="admin-tambah-user">
                  <i class="bi bi-plus"></i>
                </router-link>
              </div>
              <div class="col-sm-9"></div>
            </div>
            <div class="table-responsive">
              <table class="table table-striped mt-2">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in user" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>
                      <!-- <router-link
                      :to="{ name: 'admin-edit-user', params: { id: item.id } }"
                      class="btn btn-warning"
                      >
                        <i class="bi bi-pencil-square"></i>
                      </router-link> -->
                      <button @click="deleteItem(item.id)" class="btn btn-danger">
                        <i class="bi bi-trash3"></i>
                      </button>
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
      user: [],
    };
  },
  methods: {
    async fetchUser() {
      try {
        const response = await axios.get("https://surat-desa.surabayawebtech.com/api/auth/list-user",{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.user = response.data.data;
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
          .delete(`https://surat-desa.surabayawebtech.com/api/auth/delete-user/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            // Berhasil dihapus dari server, lakukan aksi selanjutnya jika diperlukan
            console.log(response.data);
            this.fetchUser();
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
        this.$router.push("/admin-list-user");
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

<style scoped>
span {
  cursor: auto !important;
}
</style>