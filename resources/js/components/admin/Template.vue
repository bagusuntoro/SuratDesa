<template>
  <div id="wrapper">
    <sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <div class="text-black">
            <div class="row mt-5">
                <div class="col-sm-2"></div>
                <div class="col-sm-2 surat">
                    <img src="/images/logo.png" alt="logo" width="100">
                </div>
                <div class="col-sm-6 surat">
                    <h5 class="text-center fw-bold">
                        PEMERINTAH KABUPATEN SUKOHARJO
                    </h5>
                    <h5 class="text-center fw-bold">
                        KECAMATAN NGUTER
                    </h5>
                    <h5 class="text-center fw-bold">
                        DESA TANJUNGREJO
                    </h5>
                    <p>Alamat : Jl. Alternatif Pengkol-Wonogiri KM 03 Tanjungrejo, Sukoharjo</p>
                </div>
                <div class="col-sm-2"></div>
            </div>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8 surat">
                    <hr>
                </div>
                <div class="col-sm-2"></div>
            </div>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8 surat">
                    <p>No Kode Desa/Kelurahan</p>
                    <p>33 11 052001</p>
                </div>
                <div class="col-sm-2"></div>
            </div>
            <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8 surat">
                <p class="text-center">KETERANGAN</p>
                <p class="text-center">Surat …………………………………</p>
                <p class="text-center">PENGANTAR</p>
                <p class="text-center">Nomor : 331/032/ VII/2023</p>
                <p>Yang bertandatangan di bawah ini kami Kepala Desa Tanjungrejo Kecamatan Nguter Kabupaten Sukoharjo, menerangkan  bahwa :</p>
                <div class="row">
                    <div class="col-sm-4">Nama</div>
                    <div class="col-sm-4">: {{pengajuanSurat.nama}}</div>
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
                    <div class="col-sm-4">: {{pengajuanSurat.pekerjaan}}</div>
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
                <p>Demikian untuk menjadikan  maklum bagi yang berkepentingan.</p>
                <div class="row">
                    <div class="col-sm-9"></div>
                    <div class="col-sm-3">Tanjungrejo, {{pengajuanSurat.created_at}}</div>
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
            <div class="col-sm-2"></div>
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
  <!-- End of Page Wrapper -->
</template>
<script>
  export default {
    data() {
      return {
        pengajuanSurat: [],
        fileName: '',
        itemID: null,
      };
    },
    methods: {
      async fetchData() {
        this.itemID = this.$route.params.id;
        const response = await axios.get(`/api/pengajuan/${this.itemID}`);
        console.log('id :',this.itemID);
        this.pengajuanSurat = response.data.data;
        console.log('data :',this.pengajuanSurat.created_at);
      },
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
.surat{
    background-color: #ffffff !important;
}
hr {
  border: none;
  height: 3px;
  /* Set the hr color */
  color: #000000 !important;  /* old IE */
  background-color: #000000 !important;  /* Modern Browsers */
}
</style>