<template>
    <div id="wrapper">
    <sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <h1 class="text-center customMargin h3">Form Pengajuan Surat Pengnatar</h1>
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
          <div class="headerNote">
            <div class="row">
              <div class="col-sm-1"></div>
              <div class="col-sm-10">
                <div class="row">
                  <div class="col-sm-6">
                    <!-- jenis surat -->
                    <div class="mb-3">
                      <label for="jenis_surat" class="form-label">Jenis Surat</label>
                      <select class="form-select" aria-label="Default select example" v-model="form.jenis_surat">
                        <option disabled value="">Pilih</option>
                        <option value="Pengantar Umum">Pengantar Umum</option>
                        <option value="Pengantar SKCK">Pengantar SKCK</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <!-- nama -->
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
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <!-- nik -->
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
                  <div class="col-sm-6">
                    <!-- ttl -->
                    <div class="mb-3">
                      <label for="ttl" class="form-label">Tempat, Tanggal Lahir</label>
                      <input
                        type="text"
                        class="form-control"
                        id="ttl"
                        placeholder="masukkan tempat tanggal lahir"
                        v-model="form.ttl"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <!-- jenis kelamin -->
                    <div class="mb-3">
                      <label for="jenis_kelamin" class="form-label">Jenis Kelamin</label>
                      <select class="form-select" aria-label="Default select example" v-model="form.jenis_kelamin">
                        <option disabled value="">Pilih</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <!-- negara -->
                    <div class="mb-3">
                      <label for="warganegara" class="form-label">Warganegara</label>
                      <input
                        type="text"
                        class="form-control"
                        id="warganegara"
                        placeholder="masukkan warganegara"
                        v-model="form.warganegara"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <!-- agama -->
                    <div class="mb-3">
                      <label for="agama" class="form-label">Agama</label>
                      <select class="form-select" aria-label="Default select example" v-model="form.agama">
                        <option disabled value="">Pilih</option>
                        <option value="Islam">Islam</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Budha">Budha</option>
                        <option value="Konghucu">Konghucu</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <!-- pekerjaan -->
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
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <!-- alamat -->
                    <div class="mb-3">
                      <label for="alamat" class="form-label">Alamat</label>
                      <input
                        type="text"
                        class="form-control"
                        id="alamat"
                        placeholder="masukkan alamat"
                        v-model="form.alamat"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <!-- status -->
                    <div class="mb-3">
                      <label for="status" class="form-label">Status</label>
                      <select class="form-select" aria-label="Default select example" v-model="form.status">
                        <option disabled value="">Pilih</option>
                        <option value="Kawin">Kawin</option>
                        <option value="Belum">Belum</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <!-- bukti diri -->
                    <div class="mb-3">
                      <label for="bukti_diri" class="form-label">Bukti Diri</label>
                      <input
                        type="text"
                        class="form-control"
                        id="bukti_diri"
                        placeholder="masukkan bukti diri"
                        v-model="form.bukti_diri"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <!-- keperluan -->
                    <div class="mb-3">
                      <label for="keperluan" class="form-label">Keperluan</label>
                      <input
                        type="text"
                        class="form-control"
                        id="keperluan"
                        placeholder="masukkan keperluan"
                        v-model="form.keperluan"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <!-- tujuan -->
                    <div class="mb-3">
                      <label for="tujuan" class="form-label">Tujuan</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tujuan"
                        placeholder="masukkan tujuan"
                        v-model="form.tujuan"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                     <!--berlaku mulai-->
                    <div class="mb-3">
                      <label for="berlaku_mulai" class="form-label">Berlaku Mulai</label>
                      <input
                        type="date"
                        class="form-control"
                        id="berlaku_mulai"
                        placeholder="masukkan berlaku_mulai"
                        v-model="form.berlaku_mulai"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <!-- keterangan -->
                  <div class="form-floating">
                    <textarea v-model="form.keterangan" class="form-control" placeholder="masukkan keterangan tambahan" id="keterangan" style="height: 100px"></textarea>
                    <label for="keterangan">Keterangan Tambahan</label>
                  </div>
                </div>

                <!-- <div class="row mt-3">
                  <div class="col-sm-6">
                    <router-link
                      to="/user-note"
                      class="btn btn-danger mb-5"
                      >Kembali</router-link
                    >
                  </div>
                  <div class="col-sm-6">
                    <button type="submit" class="btn btn-primary" style="float:right;">
                      Kirim
                    </button>
                  </div>
                </div> -->
                <div class="row mt-3">
              <div class="col-6">
                <router-link to="/user-note" class="btn btn-danger btn-block mb-5" style="width:100px;">
                  Kembali
                </router-link>
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-primary btn-block" style="width:100px; float:right">
                  Kirim
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
        jenis_surat: "",
        nama: "",
        nik: "",
        ttl: "",
        jenis_kelamin: "",
        warganegara: "",
        agama: "",
        pekerjaan: "",
        alamat: "",
        status: "",
        bukti_diri: "",
        keperluan: "",
        tujuan: "",
        berlaku_mulai: "",
        keterangan: "",
        user_id: ""
      },
      user_id:''
    };
  },
  methods: {
    handleSubmit() {
      let formData = new FormData();
      formData.append("nama", this.form.nama);
      formData.append("jenis_surat", this.form.jenis_surat);
      formData.append("nik", this.form.nik);
      formData.append("ttl", this.form.ttl);
      formData.append("jenis_kelamin", this.form.jenis_kelamin);
      formData.append("warganegara", this.form.warganegara);
      formData.append("agama", this.form.agama);
      formData.append("pekerjaan", this.form.pekerjaan);
      formData.append("alamat", this.form.alamat);
      formData.append("status", this.form.status);
      formData.append("bukti_diri", this.form.bukti_diri);
      formData.append("keperluan", this.form.keperluan);
      formData.append("tujuan", this.form.tujuan);
      formData.append("berlaku_mulai", this.form.berlaku_mulai);
      formData.append("keterangan", this.form.keterangan);
      // formData.append("status_surat", this.form.status_surat);
      formData.append("user_id", this.user_id);

      axios.post("https://surat-desa.surabayawebtech.com/api/auth/pengajuan-surat", formData,{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then((response) => {
          this.showAlert()
          
        })
        .catch((error) => {
          console.error(error);
        });
    },
     showAlert() {
      // Use sweetalert2
      this.$swal("Data Berhasil di inputkan!!").then(() => {
        this.$router.push('/user-surat');;
      });
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
        this.user_id = response.data.id;
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