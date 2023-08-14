<template>
  <div id="wrapper">
    <sidebar-admin />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <div id="app" ref="document">
          <button @click="exportToPDF">Export to PDF</button>
          <div id="element-to-convert">
            <div class="text-black">
              <div class="row mt-5">
                <div class="col-sm-1"></div>
                <div class="col-sm-2 surat">
                  <img src="/images/logo.png" alt="logo" width="100" />
                </div>
                <div class="col-sm-8 surat">
                  <h5 class="text-center fw-bold">
                    PEMERINTAH KABUPATEN SUKOHARJO
                  </h5>
                  <h5 class="text-center fw-bold">KECAMATAN NGUTER</h5>
                  <h5 class="text-center fw-bold">DESA TANJUNGREJO</h5>
                  <p>
                    Alamat : Jl. Alternatif Pengkol-Wonogiri KM 03 Tanjungrejo,
                    Sukoharjo
                  </p>
                </div>
                <div class="col-sm-1"></div>
              </div>
              <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10 surat">
                  <hr />
                  <p>No Kode Desa/Kelurahan</p>
                  <p>33 11 052001</p>
                </div>
                <div class="col-sm-1"></div>
              </div>
              <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10 surat">
                  <p class="text-center">KETERANGAN</p>
                  <p class="text-center">
                    Surat {{ pengajuanSurat.jenis_surat }}
                  </p>
                  <p class="text-center">PENGANTAR</p>
                  <p class="text-center">
                    <span v-if="nomor_surat != null">{{ nomor_surat }}</span>
                    <!-- modal -->
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      v-if="nomor_surat === null"
                    >
                      Input Nomor Surat
                    </button>
                  </p>
                  <p>
                    Yang bertandatangan di bawah ini kami Kepala Desa
                    Tanjungrejo Kecamatan Nguter Kabupaten Sukoharjo,
                    menerangkan bahwa :
                  </p>
                  <div class="row">
                    <div class="col-sm-4">Nama</div>
                    <div class="col-sm-4">: {{ pengajuanSurat.nama }}</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Tempat tanggal lahir</div>
                    <div class="col-sm-4">: {{ pengajuanSurat.ttl }}</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Kewarganegaraan</div>
                    <div class="col-sm-4">
                      : {{ pengajuanSurat.warganegara }}
                    </div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Agama</div>
                    <div class="col-sm-4">: {{ pengajuanSurat.agama }}</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Pekerjaan</div>
                    <div class="col-sm-4">: {{ pengajuanSurat.pekerjaan }}</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Alamat KTP</div>
                    <div class="col-sm-4">: {{ pengajuanSurat.alamat }}</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Surat Bukti Diri</div>
                    <div class="col-sm-4">
                      : {{ pengajuanSurat.bukti_diri }}
                    </div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Keperluan</div>
                    <div class="col-sm-4">: {{ pengajuanSurat.keperluan }}</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Tujuan</div>
                    <div class="col-sm-4">: {{ pengajuanSurat.tujuan }}</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Berlaku Mulai</div>
                    <div class="col-sm-4">
                      : {{ pengajuanSurat.berlaku_mulai }}
                    </div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Keterangan Lain-lain</div>
                    <div class="col-sm-4">
                      : {{ pengajuanSurat.keterangan }}
                    </div>
                    <div class="col-sm-3"></div>
                  </div>
                  <p>
                    Demikian untuk menjadikan maklum bagi yang berkepentingan.
                  </p>
                  <div class="row">
                    <div class="col-sm-8"></div>
                    <div class="col-sm-4">
                      Tanjungrejo, {{ pengajuanSurat.created_at }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <p class="text-center">Pemohon</p>
                      <div class="row mt-5">
                        <p class="fw-bold text-center">
                          ({{ pengajuanSurat.nama }})
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <p class="text-center">Sekretaris Desa</p>
                      <div class="row mt-5">
                        <p class="fw-bold text-center">
                          (FERI PRIHANANTO, S.E)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-1"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Masukkan Nomor Surat
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
                <div class="row">
                  <div class="mb-3">
                    <label for="nomor surat" class="form-label"
                      >Nomor Surat</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nomor_surat"
                      placeholder="masukkan nomor surat"
                      v-model="nomor_surat"
                    />
                  </div>
                  <div class="row mt-3">
                    <div class="col-6">
                      <button
                        type="button"
                        class="btn btn-danger mb-5"
                        data-bs-dismiss="modal"
                      >
                        Batal
                      </button>
                    </div>
                    <div class="col-6">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        style="float: right"
                        data-bs-dismiss="modal"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      pengajuanSurat: [],
      fileName: "",
      itemID: null,
      user_id: "",
      jumlahPengajuan: null,
      nomor_surat: null
    };
  },
  name: "app",
  methods: {
    async fetchPengajuan() {
      try {
        const response = await axios.get(
          "https://surat-desa.surabayawebtech.com/api/auth/pengajuan",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        this.jumlahPengajuan = response.data.data.length; // jumlah pengajuan
      } catch (error) {
        console.error(error);
      }
    },
    async fetchData() {
      this.itemID = this.$route.params.id;
      const response = await axios.get(`https://surat-desa.surabayawebtech.com/api/auth/pengajuan/${this.itemID}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log("id :", this.itemID);
      this.pengajuanSurat = response.data.data;

      // Format the created_at field to Asia/Jakarta timezone with "dd-mm-yyyy" format
      const created_at = new Date(this.pengajuanSurat.created_at);
      const options = {
        timeZone: "Asia/Jakarta",
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      this.pengajuanSurat.created_at = created_at
        .toLocaleString("en-US", options)
        .replace(",", "");

      console.log("data :", this.pengajuanSurat.created_at);
    },

    // tesst
    async exportToPDF() {
      const elementToConvert = document.getElementById("element-to-convert");
      const pdfData = await html2pdf().from(elementToConvert).output("blob");

      const formData = new FormData();
      formData.append("surat", pdfData, "surat_pengantar.pdf");
      formData.append("user_id", this.pengajuanSurat.user_id); // Memperbaiki 'user_id' yang sebelumnya adalah 'this.user_id'
      formData.append("pengajuan_id", this.pengajuanSurat.id);

      try {
        const response = await axios.post(`https://surat-desa.surabayawebtech.com/api/auth/surat`, formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log("test", response.data.message);
        if (!response.data.message) {
          // Mengubah pengecekan respon karena tidak ada response.ok pada axios
          throw new Error("Gagal mengirimkan PDF ke API.");
        }

        console.log("PDF berhasil dikirim ke API.");
        await this.updateStatus();
        // Lakukan tindakan lain setelah berhasil mengirimkan PDF ke API
      } catch (error) {
        console.error(error);
        // Tangani kesalahan jika terjadi masalah saat mengirimkan PDF ke API
      }
    },

    // update status
    async updateStatus() {
      try {
        const statusData = { status_surat: "selesai" };
        const response = await axios.put(
          `https://surat-desa.surabayawebtech.com/api/auth/pengajuan/${this.pengajuanSurat.id}`,
          statusData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (!response.data.message) {
          throw new Error("Gagal memperbarui status surat.");
        }
        this.showAlert();
      } catch (error) {
        console.error(error);
        throw error; // Lanjutkan melemparkan error ke pemanggil fungsi jika terjadi kesalahan
      }
    },
    showAlert() {
      // Use sweetalert2
      this.$swal("Surat berhasil diexport!!").then(() => {
        this.$router.push("/admin-surat");
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
        const role = response.data.role; // Get the user's role from the response
        this.user_id = response.data.id;

        const token = localStorage.getItem("token");
        const expires_in = localStorage.getItem("expires_in");
        if (!token || !expires_in || new Date() > new Date(expires_in)) {
          // If token is missing or expired, redirect to the home page
          localStorage.removeItem("token");
          localStorage.removeItem("expires_in");
          this.$router.push("/");
        } else if (role !== "admin") {
          // If the admin doesn't have admin privileges, redirect to the unauthorized page
          this.$router.push("/unauthorized");
          // console.log(response.data.role)
        } else {
          this.fetchData();
          this.fetchPengajuan();
        }
      })
      .catch((error) => {
        console.error(error);
        this.$router.push("/");
      });

    // axios
    //   .get(`https://surat-desa.surabayawebtech.com/api/auth/me/`, {
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("token"),
    //     },
    //   }) // Gunakan properti 'id' sebagai bagian dari URL endpoint
    //   .then((response) => {
    //     this.user_id = response.data.id;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // console.log(Vue.version)
  },
  mounted() {
    // Panggil method fetchData setiap kali nilai itemID berubah
    this.$watch("itemID", this.fetchData);
  },
};
</script>

<style scoped>
.surat {
  background-color: #ffffff !important;
}
hr {
  border: none;
  height: 3px;
  /* Set the hr color */
  color: #000000 !important; /* old IE */
  background-color: #000000 !important; /* Modern Browsers */
}
#app {
  margin-top: 60px;
  text-align: center;
}
</style>