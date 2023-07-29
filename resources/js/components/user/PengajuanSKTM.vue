<template>
    <div id="wrapper">
    <sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <h1 class="text-center customMargin h3">Form Pengajuan Surat SKCK</h1>
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
          <div class="headerNote">
            <div class="row">
              <div class="col-sm-1"></div>
              <div class="col-sm-10">

                <div class="pemohon" v-if="this.posisi === 'pemohon'">
                  <div class="row">
                    <div class="col-sm-6">
                      <!-- pemohon -->
                      <div class="mb-3">
                        <div class="mb-3">
                        <label for="nama" class="form-label">Nama</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nama_pemohon"
                          placeholder="masukkan nama"
                          v-model="form.nama_pemohon"
                        />
                      </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <!-- nama -->
                      <div class="mb-3">
                        <label for="ttl_pemohon" class="form-label">Tempat tanggal lahir</label>
                        <input
                          type="text"
                          class="form-control"
                          id="ttl_pemohon"
                          placeholder="masukkan nama"
                          v-model="form.ttl_pemohon"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <!-- nik -->
                      <div class="mb-3">
                        <label for="nik_pemohon" class="form-label">NIK</label>
                        <input
                          type="number"
                          class="form-control"
                          id="nik_pemohon"
                          placeholder="masukkan nik"
                          v-model="form.nik_pemohon"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <!-- ttl -->
                      <div class="mb-3">
                        <label for="pendidikan_pemohon" class="form-label">Pendidikan</label>
                        <input
                          type="text"
                          class="form-control"
                          id="pendidikan_pemohon"
                          placeholder="masukkan pendidikan"
                          v-model="form.pendidikan_pemohon"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <!-- jenis kelamin -->
                      <div class="mb-3">
                        <label for="jenis_kelamin_pemohon" class="form-label">Jenis Kelamin</label>
                        <select class="form-select" aria-label="Default select example" v-model="form.jenis_kelamin_pemohon">
                          <option disabled value="">Pilih</option>
                          <option value="laki">Laki-laki</option>
                          <option value="perempuan">Perempuan</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <button class="btn btn-primary float-end mt-4" type="button" @click="setPosisi('orangtua')">Selanjutnya</button>
                    </div>
                  </div>
                </div>

                <div class="orangtua" v-if="this.posisi === 'orangtua'">
                  <div class="row">
                    <div class="col-sm-6">
                    <div class="mb-3">
                        <label for="nama_orangtua" class="form-label"
                          >Nama Orangtua</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="nama_orangtua"
                          placeholder="masukkan nama orangtua"
                          v-model="form.nama_orangtua"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <!-- pekerjaan -->
                      <div class="mb-3">
                        <label for="ttl_orangtua" class="form-label"
                          >Tempat tanggal lahir</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="ttl_orangtua"
                          placeholder="masukkan tempat tanggal lahir"
                          v-model="form.ttl_orangtua"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <!-- jenis kelamin -->
                        <div class="mb-3">
                          <label for="jenis_kelamin_orangtua" class="form-label">Jenis Kelamin</label>
                          <select class="form-select" aria-label="Default select example" v-model="form.jenis_kelamin_orangtua">
                            <option disabled value="">Pilih</option>
                            <option value="laki">Laki-laki</option>
                            <option value="perempuan">Perempuan</option>
                          </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                      <!-- agama -->
                      <div class="mb-3">
                        <label for="agama_orangtua" class="form-label">Agama</label>
                        <select class="form-select" aria-label="Default select example" v-model="form.agama_orangtua">
                          <option disabled value="">Pilih</option>
                          <option value="islam">Islam</option>
                          <option value="kristen">Kristen</option>
                          <option value="hindu">Hindu</option>
                          <option value="budha">Budha</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label for="status" class="form-label">Status</label>
                        <select class="form-select" aria-label="Default select example" v-model="form.status_pernikahan_orangtua">
                          <option disabled value="">Pilih</option>
                          <option value="menikah">Menikah</option>
                          <option value="jada-duda">Janda/Duda</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <!-- keperluan -->
                      <div class="mb-3">
                        <label for="warganegara_orangtua" class="form-label">Warganegara</label>
                        <input
                          type="text"
                          class="form-control"
                          id="warganegara_orangtua"
                          placeholder="masukkan warganegara"
                          v-model="form.warganegara_orangtua"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <!-- tujuan -->
                      <div class="mb-3">
                        <label for="no_kk" class="form-label">Nomor KK</label>
                        <input
                          type="number"
                          class="form-control"
                          id="no_kk"
                          placeholder="masukkan nomor kk"
                          v-model="form.no_kk"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <!--berlaku mulai-->
                      <div class="mb-3">
                        <label for="nik_orangtua" class="form-label">NIK</label>
                        <input
                          type="number"
                          class="form-control"
                          id="nik_orangtua"
                          placeholder="masukkan nik_orangtua"
                          v-model="form.nik_orangtua"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <!-- tujuan -->
                      <div class="mb-3">
                        <label for="pekerjaan_orangtua" class="form-label">Pekerjaan</label>
                        <input
                          type="text"
                          class="form-control"
                          id="pekerjaan_orangtua"
                          placeholder="masukkan pekerjaan"
                          v-model="form.pekerjaan_orangtua"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label for="alamat_orangtua" class="form-label">Alamat</label>
                        <input
                          type="text"
                          class="form-control"
                          id="alamat_orangtua"
                          placeholder="masukkan alamat"
                          v-model="form.alamat_orangtua"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <!-- tujuan -->
                    <div class="form-floating">
                      <textarea v-model="form.tujuan" class="form-control" placeholder="masukkan tujuan" id="tujuan" style="height: 100px"></textarea>
                      <label for="tujuan">Tujuan</label>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-sm-6">
                      <router-link
                        to="/user-surat-pengantar"
                        class="btn btn-danger mb-5"
                        >Kembali</router-link
                      >
                    </div>
                    <div class="col-sm-6">
                      <button type="submit" class="btn btn-primary" style="float:right;">
                        Kirim
                      </button>
                    </div>
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
        nama_pemohon:"",
        ttl_pemohon:"",
        nik_pemohon:"",
        pendidikan_pemohon:"",
        jenis_kelamin_pemohon:"",
        
        nama_orangtua:"",
        ttl_orangtua:"",
        jenis_kelamin_orangtua:"",
        agama_orangtua:"",
        status_pernikahan_orangtua:"",
        warganegara_orangtua:"",
        no_kk:"",
        nik_orangtua:"",
        pekerjaan_orangtua:"",
        alamat_orangtua:"",
        tujuan:"",
        user_id: ""
      },
      user_id:'',
      posisi: 'pemohon'
    };
  },
  methods: {
    setPosisi(data)
    {
      this.posisi = data
    },
    handleSubmit() {
      let formData = new FormData();
      formData.append("nama_pemohon", this.form.nama_pemohon);
      formData.append("ttl_pemohon", this.form.ttl_pemohon);
      formData.append("nik_pemohon", this.form.nik_pemohon);
      formData.append("pendidikan_pemohon", this.form.pendidikan_pemohon);
      formData.append("jenis_kelamin_pemohon", this.form.jenis_kelamin_pemohon);

      formData.append("nama_orangtua", this.form.nama_orangtua);
      formData.append("ttl_orangtua", this.form.ttl_orangtua);
      formData.append("jenis_kelamin_orangtua", this.form.jenis_kelamin_orangtua);
      formData.append("agama_orangtua", this.form.agama_orangtua);
      formData.append("status_pernikahan_orangtua", this.form.status_pernikahan_orangtua);
      formData.append("warganegara_orangtua", this.form.warganegara_orangtua);
      formData.append("no_kk", this.form.no_kk);
      formData.append("nik_orangtua", this.form.nik_orangtua);
      formData.append("pekerjaan_orangtua", this.form.pekerjaan_orangtua);
      formData.append("alamat_orangtua", this.form.alamat_orangtua);
      formData.append("tujuan", this.form.tujuan);

      formData.append("user_id", this.user_id);

      axios.post("http://localhost:8000/api/auth/pengajuan-sktm/", formData,{
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
      .get(`http://localhost:8000/api/auth/me/`, {
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