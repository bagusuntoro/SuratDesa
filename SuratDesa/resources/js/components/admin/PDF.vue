<template>
  <div id="wrapper">
    <sidebar />

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
                  <p class="text-center">Surat …………………………………</p>
                  <p class="text-center">PENGANTAR</p>
                  <p class="text-center">Nomor : 331/032/ VII/2023</p>
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
                    <div class="col-sm-4">:</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Kewarganegaraan</div>
                    <div class="col-sm-4">: Indonesia</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Agama</div>
                    <div class="col-sm-4">:</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Pekerjaan</div>
                    <div class="col-sm-4">: {{ pengajuanSurat.pekerjaan }}</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Alamat KTP</div>
                    <div class="col-sm-4">:</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Surat Bukti Diri</div>
                    <div class="col-sm-4">:</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Keperluan</div>
                    <div class="col-sm-4">:</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Tujuan</div>
                    <div class="col-sm-4">:</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Berlaku Mulai</div>
                    <div class="col-sm-4">:</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">Keterangan Lain-lain</div>
                    <div class="col-sm-4">:</div>
                    <div class="col-sm-3"></div>
                  </div>
                  <p>
                    Demikian untuk menjadikan maklum bagi yang berkepentingan.
                  </p>
                  <div class="row">
                    <div class="col-sm-9"></div>
                    <div class="col-sm-3">
                      Tanjungrejo, {{ pengajuanSurat.created_at }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <p>Pemohon</p>
                    </div>
                    <div class="col-sm-6">
                      <p class="float-end">Sekretaris Desa</p>
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
    };
  },
  name: "app",
  methods: {
    async fetchData() {
      this.itemID = this.$route.params.id;
      const response = await axios.get(`/api/pengajuan/${this.itemID}`);
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
    exportToPDF() {
  // Ekspor ke PDF menggunakan html2pdf
  const elementToConvert = document.getElementById("element-to-convert");
  html2pdf(elementToConvert, {
    margin: [10, 20, 10, 20],
    filename: "surat_pengantar.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  }).then((pdfData) => {
    // Panggil fungsi untuk mengirimkan data PDF ke API
    this.sendPDFToAPI(pdfData);
  });
},

sendPDFToAPI(pdfData) {
  // Ubah data PDF ke format yang sesuai dengan API
  // Misalnya, jika API menerima data sebagai FormData:
  const formData = new FormData();
  formData.append("file", new Blob([pdfData], { type: "application/pdf" }), "surat_pengantar.pdf");
    console.log("data :",formData)
  // Kirim data PDF ke API menggunakan metode POST dengan Fetch API
  fetch("api/surat", {
    method: "POST",
    body: formData,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Gagal mengirimkan PDF ke API.");
    }
    console.log("PDF berhasil dikirim ke API.");
    // Lakukan tindakan lain setelah berhasil mengirimkan PDF ke API
  })
  .catch((error) => {
    console.error(error);
    // Tangani kesalahan jika terjadi kesalahan dalam mengirimkan PDF ke API
  });
},





    // successs
    // exportToPDF() {
    //   html2pdf(document.getElementById("element-to-convert"), {
    //     margin: [10, 20, 10, 20], // Atur margin bagian atas, kanan, bawah, kiri
    //     filename: "surat_pengantar.pdf",
    //     image: { type: "jpeg", quality: 0.98 }, // Kualitas gambar (opsional)
    //     html2canvas: { scale: 2 }, // Scale HTML2Canvas (opsional)
    //     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // Format PDF (opsional)
    //   });
    // },
  },
  created() {
    this.fetchData();
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