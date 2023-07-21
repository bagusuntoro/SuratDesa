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
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="row mt-5">
              <div class="col-sm-3">
                <router-link class="btn btn-primary me-2" to="user-input-note">
                  <i class="bi bi-plus"></i>
                </router-link>
              </div>
              <div class="col-sm-9"></div>
            </div>
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
                    <span v-if="item.status_surat==='proses'" class="btn btn-warning">
                      {{ item.status_surat }}
                    </span>
                    <span class="btn btn-primary" v-if="item.status_surat==='selesai'">
                      {{ item.status_surat }}
                    </span>
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
    };
  },
  methods: {
    detail(id){
      this.$router.push({ name: 'user-detail-note', params: { id: id } });
    },
    async fetchNote() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/auth/pengajuan",{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.note = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    // const token = localStorage.getItem("token");
    // const expires_in = localStorage.getItem("expires_in");
    // // console.log(new Date());
    // // console.log(new Date(expires_in));
    // if (!token || !expires_in || new Date() > new Date(expires_in)) {
    //   // Jika token tidak ada atau kadaluarsa, redirect ke halaman utama
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("expires_in");
    //   this.$router.push("/");
    //   return;
    // }
    this.fetchNote();
  },
};
</script>

<style scoped>
span{
  cursor: auto !important;
}
</style>