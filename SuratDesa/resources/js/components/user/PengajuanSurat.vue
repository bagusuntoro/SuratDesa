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
                      <label for="nama" class="form-label">Nama</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nama"
                        placeholder="masukkan nama"
                        v-model="form.nama"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="nik" class="form-label">NIK</label>
                      <input
                        type="number"
                        class="form-control"
                        id="no_nik"
                        placeholder="masukkan nik"
                        v-model="form.nik"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="location" class="form-label">Jenis Kelamin</label>
                      <select class="form-select" aria-label="Default select example" v-model="form.jenis_kelamin">
                        <option selected>Pilih</option>
                        <option value="laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="status" class="form-label">Status</label>
                      <select class="form-select" aria-label="Default select example" v-model="form.status">
                        <option selected>Pilih</option>
                        <option value="menikah">Menikah</option>
                        <option value="jada-duda">Janda/Duda</option>
                        <option value="pelajar">Pelajar/Mahasiswa</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="pekerjaan" class="form-label"
                        >Pekerjaan</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="pekerjaan"
                        placeholder="masukkan pekerjaan"
                        v-model="form.pekerjaan"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="jenis-surat" class="form-label">Jenis Surat</label>
                      <select class="form-select" aria-label="Default select example" v-model="form.jenis_surat">
                        <option selected>Pilih</option>
                        <option value="sktm">SKTM</option>
                        <option value="skck">SKCK</option>
                      </select>
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

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        nama: "", 
        nik: "", 
        jenis_kelamin: "", 
        status: "", 
        pekerjaan: "", 
        jenis_surat: "", 
        user_id: "",
      },
      user_id:''
    };
  },
  methods: {
    handleSubmit() {
      let formData = new FormData();
      formData.append("nama", this.form.nama);
      formData.append("nik", this.form.nik);
      formData.append("jenis_kelamin", this.form.jenis_kelamin);
      formData.append("status", this.form.status);
      formData.append("pekerjaan", this.form.pekerjaan);
      formData.append("jenis_surat", this.form.jenis_surat);
      formData.append("user_id", this.user_id);

      axios.post("http://localhost:8000/api/auth/pengajuan/", formData,{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then((response) => {
          this.$router.push('/user-surat');
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    axios
      .get(`http://localhost:8000/api/auth/me/`,{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }) // Gunakan properti 'id' sebagai bagian dari URL endpoint
      .then((response) => {
        this.user_id = response.data.id;
      })
      .catch((error) => {
        console.error(error);
      });
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
  },
};
</script>