<template>
    <div id="wrapper">
    <sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
         <h1 class="text-center h3">List Pengajuan Surat SKTM</h1>
         <div class="row mt-5">
          <div class="col-sm-1"></div>
          <div class="col-sm-11">
            <router-link class="btn btn-primary" to="user-surat-pengantar">Pengantar</router-link>
            <router-link class="btn btn-primary" to="user-surat-sktm">SKTM</router-link>
          </div>
         </div>
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="row">
              <div class="col-sm-3">
                <!-- <router-link class="btn btn-primary me-2" to="/pengajuan-surat">
                  <i class="bi bi-plus"></i>
                </router-link> -->
              </div>
              <div class="col-sm-9"></div>
            </div>
            <table class="table table-striped mt-2">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama</th>
                  <th scope="col">NIK</th>
                  <th scope="col">Tujuan</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in note" :key="item.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.nama_pemohon }}</td>
                  <td>{{ item.nik_pemohon }}</td>
                  <td>{{ item.tujuan }}</td>
                  <td>
                    <span v-if="item.status_surat==='proses'" class="btn btn-warning">
                      {{ item.status_surat }}
                    </span>
                   <a :href="getSuratUrl(item.surat.surat)" download v-if="item.status_surat === 'selesai'">
                      <span class="btn btn-primary">
                        {{ item.status_surat }} <i class="fas fa-download"></i>
                      </span>
                    </a>
                    </td>
                  <td>
                    <button type="button" @click="detail(item.id)" class="btn btn-warning" style="float:right;">
                      <i class="bi bi-ticket-detailed"></i>
                    </button>
                    <!-- <router-link
                      :to="{
                        name: 'user-detail-note',
                        params: { id: item.id },
                      }"
                      class="btn btn-warning me-2"
                    >
                    </router-link> -->
                  </td>
                </tr>
              </tbody>
            </table>
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
          `api/auth/pengajuan-sktm-user/${id}`,{
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
          `api/auth/me/`,{
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