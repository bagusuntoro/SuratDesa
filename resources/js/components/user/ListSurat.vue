<template>
  <div id="wrapper">
    <sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <h1 class="text-center h3">List Pengajuan Surat</h1>
        <div class="row mt-5">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <div class="table-responsive">
              <table class="table table-striped mt-2">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">NIK</th>
                    <th scope="col">Jenis Surat</th>
                    <th scope="col">Status</th>
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
                        v-if="item.status_surat==='proses'"
                        class="btn btn-warning"
                      >
                        {{ item.status_surat }}
                      </span>
                      <a
                        :href="getSuratUrl(item.surat.surat)"
                        download
                        v-if="item.status_surat === 'selesai'"
                      >
                        <span class="btn btn-primary">
                          {{ item.status_surat }} <i class="fas fa-download"></i>
                        </span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-md-1"></div>
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
      note: [],
      user_id:''
    };
  },
  methods: {
    getSuratUrl(fileName) {
    return `/storage/${fileName}`; // Sesuaikan dengan folder dan path file PDF Anda
  },
    detail(id){
      this.$router.push({ name: 'user-detail-note', params: { id: id } });
    },
    async fetchNote(id) {
      try {
        const response = await axios.get(
          `https://surat-desa.surabayawebtech.com/api/auth/pengajuan-user/${id}`,{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.note = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUser() {
      try {
        const response = await axios.get(
          `https://surat-desa.surabayawebtech.com/api/auth/me`,{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.user_id = response.data.id;
        console.log(this.user_id)
        this.fetchNote(this.user_id);
      } catch (error) {
        console.error(error);
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
        } else if (role !== "user") {
          // If the user doesn't have admin privileges, redirect to the unauthorized page
          this.$router.push("/unauthorized");
          // console.log(response.data.role)
        } else {
          console.log('role: ',role)
          console.log("success");
        }
      })
      .catch((error) => {
        console.error(error);
        this.$router.push("/");
      });
    this.fetchUser();
  },
};
</script>

<style scoped>
span{
  cursor: auto !important;
}
</style>