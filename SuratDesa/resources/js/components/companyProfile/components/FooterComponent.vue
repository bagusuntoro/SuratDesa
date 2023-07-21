<template>
  <div class="template">
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-6">
          <img src="images/footer/surabaya.png" alt="surabaya" width="100%" height="200px" />
          <h2 class="kota">Surabaya</h2>
          <p class="alamat">
            Semampir Selatan I no. 5 Surabaya Jawa Timur 60119
          </p>
        </div>
        <div class="col-sm-6">
          <img src="images/footer/jogja.png" alt="surabaya" width="100%" height="200px"/>
          <h2 class="kota">Sidoarjo</h2>
          <p class="alamat">
            Heavenland Park W-16 Sidoarjo, Jawa Timur 61271
          </p>
        </div>
        <!-- <img src="images/footer/1.png" alt="gambar" /> -->
      </div>
      <!-- <div class="row customBorder">
            <hr>

            <div class="row">
                <div class="col-sm-8">
                    <p class="footer">© 2021 Lumira.All rights reserved.</p>
                </div>
                <div class="col-sm-4">
                    <div class="row">
                        <div class="col-sm-9"></div>
                        <div class="col-sm-1">
                            <a href="#">
                                <img src="images/footer/ig.png" alt="instagram">
                            </a>
                        </div>
                        <div class="col-sm-1">
                            <a href="#">
                                <img src="images/footer/fb.png" alt="instagram">
                            </a>
                        </div>
                        <div class="col-sm-1">
                            <a href="#">
                                <img src="images/footer/tw.png" alt="instagram">
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div> -->
    </div>


    <div class="row fixed-bottom mb-3">
      <div class="col-sm-6">
          <chat-component/>
        <!-- <a href="/wa"> -->
          <!-- <img class="ms-3 waicon" src="/images/wa.png" alt="whatsapp" width="50" /> -->
        <!-- </a> -->
      </div>
      <div class="col-sm-6">
        <a href="#/">
          <img
            class="me-3 float-end"
            src="/images/top1.png"
            alt="back"
            v-if="shouldShowImage"
            width="40"
          />
        </a>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="row customFooter">
          <div class="col-sm-8">
            <div class="row">
              <img class="lumira" src="/images/logo/logo.png" alt="logo" />
            </div>
            <div class="row">
              <p class="text-light customJustify">
                Lumira adalah IT Developer dengan spesialisasi di bidang Jasa Pembuatan Aplikasi Android & iOS Profesional dengan Team yang tersebar di Area Surabaya, Sidoarjo, Malang & Pasuruan. Memiliki kualitas Mobile Apps Development terbaik dilengkapi dengan tim System Analyst dan Business Advisory yang tidak anda temukan di tempat lain.
              </p>
            </div>
          </div>
          <!-- <div class="col-sm-4 text-center">
            <h2 class="text-light">Office</h2>
            <h3 class="text-light fw-bold">Address:</h3>
            <div class="text-light">
              <i class="bi bi-send-fill"></i>
              Office I : Heavenland Park W-16 Sidoarjo, <br />
              Jawa Timur 61271
            </div>
            <div class="text-light">
              <i class="bi bi-send-fill"></i>
              Office II : Semampir Selatan I no. 5 Surabaya <br />
              Jawa Timur 60119
            </div>
          </div> -->
          <div class="col-sm-4 text-center">
            <h2 class="text-light contact">Contact</h2>
            <!-- <p class="text-light fw-bold">email</p> -->
            <div class="text-light">cs@lumira.co.id</div>
            <!-- <p class="text-light fw-bold">phones:</p> -->
            <div class="text-light">
              +62-856-3615-692 Fast Respon..!! <br />
              +62-813-3192-8838 WA Only..!!
            </div>
          </div>
        </div>
        <div class="row">
          <h2 class="text-light text-center">FAQs:</h2>
          <p class="text-light customJustify">
            Lumira: Media Untuk Membuat Berbagai Macam Aplikasi dan Website.
            Berkembangnya ketertarikan masyarakat terhadap bisnis digital
            menuntut para ahli bidang teknologi informasi membuat suatu gebrakan
            yang mampu mendukung aktivitas bisnis tersebut. Maka dari itu, saat
            ini banyak jasa pembuatan aplikasi dan website yang dapat membantu
            para pelaku bisnis untuk mengembangkan jenis usaha mereka, salah
            satunya adalah Lumira.
          </p>

          <p class="text-light customJustify">
            Lumira hadir untuk melayani dan menjawab dari segala kebutuhan dalam
            bidang teknologi dalam perkembangan usaha Anda. Lumira dapat
            melayani pembuatan aplikasi Mobile Development, UI/UX Design, Web
            Development, dan masih banyak lagi layanan di bidang teknologi yang
            dapat diberikan. Lumira telah banyak digunakan oleh
            perusahaan-perusahaan besar di Indonesia maupun luar negeri.
          </p>
        </div>
        <div class="row mb-3">
          <button
            class="btn btn-secondary m-auto customButton"
            @click="showText = !showText"
          >
            Lihat Lebih Lengkap
          </button>
        </div>
        <div class="row text-light" v-if="showText">
          <p style="font-size: 15px; text-align: justify; color: #fff">
            Pembuatan Aplikasi eCommerce<br />Media website sebagai sarana untuk
            melakukan promosi atau transaksi jual-beli saat ini dirasa kurang
            memberi peningkatan pendapatan terhadap suatu usaha. Maka dari itu,
            banyak perusahaan membuat aplikasi berbentuk toko online yang
            disebut dengan eCommerce. Berbagai manfaat akan diberikan jika Anda
            menggunakan aplikasi eCommerce sebagai salah satu strategi bisnis
            perusahaan. <br />Dengan pengalaman yang dimiliki, Lumira dapat
            membantu Anda dalam membuat suatu platform eCommerce yang user
            friendly dan tentunya mudah untuk digunakan oleh para konsumen.
            Selain itu, terdapat beberapa keuntungan lainnya dalam menggunakan
            aplikasi eCommerce di dalam strategi perusahaan Anda, antara lain<br />●
            Memudahkan Konsumen<br />Aplikasi eCommerce dapat dengan mudah di
            unduh melalui perangkat iOS dan Android. Aplikasi eCommerce pun
            dapat dibuat dalam bentuk website. Dengan banyaknya media yang dapat
            digunakan untuk mengakses eCommerce tentunya akan memudahkan
            konsumen untuk melihat ataupun melakukan transaksi pada produk yang
            Anda tawarkan.<br />● Pemasaran Optimal<br />Strategi pemasaran di
            dalam perusahaan menjadi lebih optimal karena Anda dapat memberikan
            informasi tentang promo, potongan harga atau hal-hal lain yang dapat
            meningkatkan daya tarik masyarakat terhadap produk Anda. Jika telah
            dilakukan dengan benar dan sesuai dengan target pasar, tentunya akan
            meningkatkan penjualan dari usaha Anda.<br />● Desain yang
            Kreatif<br />Tampilan yang kreatif pada aplikasi atau website
            eCommerce perusahaan adalah salah satu faktor konsumen menjadi
            tertarik terhadap produk Anda. Lumira memberikan kebebasan terhadap
            Anda untuk mengkreasikan tampilan dari platform eCommerce sesuai
            selera dan keinginan. Nantinya konsumen akan merasa nyaman dan kagum
            terhadap strategi pemasaran produk Anda.<br />● Alat Riset
            Konsumen<br />eCommerce pun dapat Anda gunakan sebagai alat riset
            untuk menganalisa perilaku konsumen terhadap produk usaha Anda.
            Konsumen yang telah menggunakan atau mengunjungi eCommerce akan
            terekam aktivitasnya ketika mereka melakukan pencarian atau memilih
            produk yang mereka minati. Dengan data tersebut, Anda dapat
            menentukan rencana bisnis di kemudian hari.<br />● Meningkatkan
            Loyalitas<br />Anda dapat meningkatkan Loyalitas konsumen terhadap
            produk Anda dengan menggunakan sistem poin atau cashback di dalam
            eCommerce. Hal ini akan memberikan kesan bahwa konsumen merasa lebih
            diapresiasi setelah membeli dan menggunakan produk Anda. Poin atau
            cashback nantinya dapat ditukarkan dengan hadiah yang telah
            ditentukan oleh Anda.<br /><br />Pembuatan Aplikasi Manajemen
            Keuangan<br />Lumira pun dapat mengembangkan aplikasi manajemen
            keuangan kegunaanya adalah untuk Anda yang ingin mengatur dan
            merencanakan sistem keuangan dengan rapi. Dengan cara baru seperti
            ini, tidak sedikit konsumen masih merasa kebingungan dalam
            menggunakan aplikasi ini. Maka dari itu, perlunya aplikasi manajemen
            keuangan yang dapat dengan mudah untuk digunakan secara ringkas dan
            praktis.<br />Terdapat beberapa jenis aplikasi keuangan yang
            masing-masing memiliki fungsi dan manfaat dalam penggunaannya.
            Berikut adalah beberapa jenis aplikasi manajemen keuangan yang
            banyak terdapat di apple store ataupun google play store.<br />●
            Aplikasi Budgeting<br />Jenis aplikasi ini memberikan layanan
            informasi pengeluaran keuangan Anda. Aplikasi jenis ini lebih cocok
            digunakan untuk keperluan pribadi maupun untuk rumah tangga. Anda
            sangat mudah mengatur tagihan, anggaran untuk belanja bulanan, atau
            aktivitas lainnya. Dengan berbagai fungsi yang dimilikinya, aplikasi
            budgeting tentu dapat mengatur aspek finansial dengan baik.<br />●
            Aplikasi Financial Assisting<br />Selain jenis budgeting, aplikasi
            manajemen keuangan lainnya adalah jenis financial assisting.
            Fungsinya adalah untuk merencanakan keuangan Anda yang dilihat dari
            pendapatan, penghematan, dan pengeluaran. Dengan menggunakan
            aplikasi ini Anda akan dapat mengidentifikasi pengeluaran maupun
            pemasukan terhadap sistem keuangan Anda.<br />● Aplikasi Debt
            Control<br />Tentunya saat ini sangat sulit, terlebih untuk Anda
            yang berkecimpung di dunia bisnis agar terhindar dari yang namanya
            hutang piutang. Lumira pun dapat membuat sebuah aplikasi yang dapat
            memberikan informasi tentang utang piutang yang sedang Anda miliki.
            Aplikasi ini dapat membantu Anda untuk mengatur pinjaman dan
            merencanakan penggunaan kartu kredit.<br />● Aplikasi Manajemen
            Investasi<br />Lumira dapat membantu Anda dalam mengatur investasi
            yang akan atau yang sedang Anda lakukan dengan membuat aplikasi
            manajemen investasi. Aplikasi ini memberikan informasi tentang
            rekomendasi investasi yang tepat sesuai dengan kemampuan yang Anda
            miliki.<br />Untuk membuat sebuah aplikasi manajemen keuangan yang
            berkualitas tentunya perlu ahli yang profesional di bidang informasi
            teknologi. Lumira adalah
            <a href="https://www.lumira.co.id/" style="color: #007bff"
              >jasa pembuatan aplikasi</a
            >
            dan website yang sudah tidak perlu diragukan lagi kemampuannya.
            Memiliki pengalaman yang sudah cukup lama di dunia teknologi untuk
            mengembangkan berbagai aplikasi yang dapat membantu Anda dalam
            mengatur struktur keuangan.<br /><br />Pembuatan Aplikasi Jasa
            Titip<br />Saat ini bisnis jasa titip menjadi salah satu bisnis yang
            banyak dimanfaatkan dalam meningkatkan pendapatan. Untuk
            mengoptimalkan hal tersebut, telah banyak bisnis jasa titip yang
            menggunakan aplikasi sebagai strategi pemasarannya. Lumira sebagai
            jasa pembuatan aplikasi dan website tentunya dapat membantu Anda
            dalam membuat aplikasi jasa titip berbasis mobile ataupun
            website.<br />Lumira sampai saat ini telah mengembangkan sekitar 518
            proyek aplikasi jasa titip dengan berbagai macam fitur yang tentunya
            membantu konsumen dalam memilih barang yang diinginkannya. Bagi
            konsumen, adanya aplikasi jasa titip seperti ini sangat membantu
            dalam membeli produk luar negeri tanpa perlu pergi ke negara
            tersebut. Berikut ini adalah beberapa keuntungan adanya aplikasi
            jasa titip.<br />● Mempermudah dalam Membeli Produk Luar Negeri<br />Dengan
            adanya aplikasi jasa titip ini, Anda sebagai konsumen dapat bebas
            mengeksplorasi penyedia jasa titip sesuai cakupan dan jangkauan dari
            layanan mereka. Semakin luas cakupan dan jangkauan dari layanan jasa
            titip, semakin bagus juga kualitas dari layanan tersebut. Hanya
            menggunakan aplikasi ini, Anda pun tidak perlu jauh-jauh ke negara
            dimana produk itu berasal.<br />● Harga Lebih Miring<br />Maraknya
            bisnis ini pun salah satunya adalah karena harganya yang lebih murah
            dari harga normal jika barang tersebut telah masuk di pasaran
            Indonesia ataupun melalui toko online. Aplikasi jasa titip memiliki
            lebih dari seratus orang yang menyediakan jasa titip produk luar
            negeri di berbagai negara.<br />Untuk Anda yang ingin memulai terjun
            ke dalam bisnis aplikasi jasa titip pun tidak perlu mengeluarkan
            modal yang banyak. Keuntungan yang Anda dapatkan nantinya akan
            bersumber dari proses jual beli yang dilakukan konsumen dan penyedia
            jasa titip yang menggunakan aplikasi Anda sebagai fasilitator
            nya.<br /><br />Pembuatan Aplikasi Jasa Pengiriman Barang<br />Aplikasi
            jasa pengiriman barang adalah suatu media yang digunakan perusahaan
            dalam menyewa jasa pengiriman barang. Jenis aplikasi ini
            dikembangkan oleh pihak ketiga sebagai perusahaan pengantar yang
            akan menjadi perantara untuk mengirimkan barang. Aplikasi ini dapat
            digunakan jasa antar barang dalam skala kecil maupun skala yang
            lebih besar.Dengan menggunakan aplikasi ini pun Anda sebagai
            konsumen dapat menawar jasa yang paling murah dan sesuai dengan
            kebutuhan Anda. Lumira sebagai developer yang dapat membuat aplikasi
            ini telah memberikan beberapa fitur canggih, berikut adalah beberapa
            diantaranya.<br />● Penawaran Jasa Pengantar Barang<br />Daftar
            perusahaan-perusahaan pengantar barang yang dapat Anda gunakan
            adalah fitur inti dari aplikasi ini. Anda dapat menghubungi jasa
            pengantar barang tersebut melalui aplikasi ini dengan mudah.<br />●
            Integrasi Berbagai Macam Layanan<br />Selain dapat memilih
            perusahaan pengantar barang sesuai keinginan, Anda pun akan akan
            diberikan beberapa layanan antar seperti layanan kargo, pengiriman
            dokumen, penyewaan kontainer, atau penyewaan truk.<br />● Monitoring
            Online<br />Lumira juga memberikan fitur pelacakan untuk melihat
            proses pengiriman barang. Fitur ini cukup dibuka melalui aplikasi
            yang telah tersedia. Anda tidak perlu lagi menghubungi atau datang
            ke perusahaan pengantar untuk menanyakan informasi proses pengiriman
            barang, jadi waktu Anda pun juga menjadi efektif.<br /><br />Pembuatan
            Aplikasi Berbasis Web<br />Aplikasi berbasis web adalah aplikasi
            yang dapat Anda gunakan tanpa mengunduh aplikasi tersebut ke
            perangkat gadget milik Anda. Aplikasi berbasis web dipilih digunakan
            oleh beberapa perusahaan besar karena kemudahan dalam pemakaiannya,
            memiliki kestabilan ketika digunakan, dan tingkat keamanan yang
            lebih tinggi.<br />Perusahaan yang menggunakan aplikasi berbasis web
            biasanya ada di bidang industri keuangan, edukasi, atau riset.
            Semakin pentingnya penggunaan website sebagai media informasi suatu
            perusahaan tentu membutuhkan developer yang dapat membuat sebuah
            website dengan tampilan menarik. Disini lumira hadir sebagai jasa
            pembuatan aplikasi dan website yang telah berpengalaman di
            bidangnya.<br /><br />Lumira akan membantu Anda dalam mengembangkan
            bisnis dengan tampilan website yang menarik perhatian para konsumen.
            Aplikasi Website yang dibuat oleh Lumira memiliki beberapa
            keunggulan jika dibandingkan dengan aplikasi website developer
            lainnya, berikut adalah beberapa diantaranya.<br />● Dapat Digunakan
            di Komputer dan Ponsel Pintar<br />Seorang pebisnis atau perusahaan
            butuh cakupan yang luas terhadap pengguna aplikasi karena berkaitan
            dengan produk yang ditawarkannya. Maka dari itu perlu aplikasi
            berbasis web yang dapat digunakan pada komputer maupun pada ponsel
            pintar penggunaannya.<br />● Dapat Digunakan pada Semua Sistem
            Operasi<br />Sebuah aplikasi web butuh fleksibilitas dalam
            penggunaannya di segala sistem operasi, seperti Windows, Linux, Mac,
            Android, atau iOS. <br />● Ringan dan Tidak Memakan Ruang
            Penyimpanan<br />Karena tidak perlu diunduh terlebih dahulu jika
            ingin menggunakannya, aplikasi berbasis web tentu tidak akan memakan
            ruang penyimpanan di perangkat ponsel atau komputer milik Anda.
            Aplikasi berbasis website pun ringan untuk dijalankan secara optimal
            tanpa perlu melakukan upgrade pada perangkat ponsel atau komputer
            Anda.<br />● Tidak Perlu Mengunduhnya.<br />Proses mengunduh tentu
            akan memerlukan waktu yang lama jika memiliki ukuran file yang cukup
            besar. Berbeda dengan aplikasi berbasis web yang melakukan proses
            instalasi / mengunduh di dalam server internet. Anda dapat langsung
            menggunakan website tersebut dengan mudah dan tidak rumit.<br />●
            Proses Pembaharuan yang Cepat<br />Jika pada aplikasi mobile dan
            desktop perlu melakukan dua proses pembaharuan, yaitu proses
            mengunduh data dan proses menginstal data. Hal ini tidak terdapat
            pada aplikasi berbasis web yang dalam proses pembaharuannya hanya
            perlu satu proses saja, yaitu proses instalasi. Maka dari itu
            aplikasi berbasis web dapat digunakan lebih cepat dan lebih
            mudah.Pembuatan Aplikasi Pembayaran<br />Memilih developer yang
            tepat di dalam membuat suatu aplikasi pembayaran dapat menentukan
            kualitas fitur maupun tampilan dari aplikasi tersebut. Lumira juga
            mampu mengembangkan jenis aplikasi pembayaran yang mampu
            menyesuaikan keinginan dan kualitas yang Anda inginkan.
            <br /><br />Selain fungsi pembayarannya, lumira juga dapat
            meningkatkan pemasaran perusahaan dengan tampilan dan desain
            aplikasi yang menarik. Adapun keuntungan menggunakan aplikasi
            pembayaran pada proses transaksi perusahaan sebagai berikut.<br />●
            Invoice Profesional<br />Aplikasi pembayaran bukan hanya mempermudah
            dalam pembuatan invoice transaksi, tapi dapat juga membuat invoice
            menjadi lebih terlihat profesional. Selain informasi dari transaksi,
            di dalam invoice Anda dapat menambahkan desain, logo produk, atau
            warna yang dapat Anda pilih sesuai keinginan.<br />● Mempermudah
            Transaksi<br />Dengan menggunakan aplikasi pembayaran, konsumen
            dipermudah karena tidak perlu melakukan transaksi dengan mengantri
            terlebih dahulu. Aplikasi pembayaran dapat diintegrasikan dengan
            berbagai metode pembayaran, seperti dengan menggunakan kartu kredit
            ataupun pembayaran online. Jadi proses pembayaran akan menjadi lebih
            cepat dan efektif.<br /><br />Aplikasi pembayaran pun tidak hanya
            memberikan kemudahan, tapi juga mengoptimalkan proses pembayaran.
            Anda dapat menggunakan layanan deposit yang telah tersedia di dalam
            aplikasi tanpa perlu melakukan transaksi fisik yang tidak praktis.
            Karena jumlah biaya yang dikeluarkan sama dengan pembayaran, tentu
            Anda tidak perlu mengeluarkan uang yang tidak dibutuhkan.<br />●
            Waktu Menjadi Lebih Optimal<br />Aplikasi pembayaran dapat bekerja
            secara otomatis sesuai dengan instruksi yang telah Anda berikan. Hal
            ini tentunya akan mempermudah Anda dalam menjalankan kegiatan
            lainnya tanpa perlu terlibat langsung di dalam proses pembayaran.
            Kerja otomatis yang dimiliki oleh aplikasi ini tentunya akan membuat
            Anda lebih memiliki waktu yang produktif.<br />● Mempermudah
            Manajemen Bisnis<br />Anda pun dapat mengatur dan mengelola bisnis
            yang sedang Anda geluti dengan lebih baik jika menggunakan aplikasi
            pembayaran. Fitur-fitur di dalam aplikasi pembayaran dapat membantu
            manajemen bisnis menjadi lebih baik, sistematis, dan lebih mudah.
            Fungsi pengawasan terhadap pengeluaran dan pemasukan biaya juga
            dapat dijalankan dengan lebih akurat dan teratur.<br />● Mobilitas
            Tidak Terganggu<br />Dengan aplikasi pembayaran yang dapat Anda
            gunakan cukup melalui perangkat ponsel pintar akan membuat mobilitas
            dan aktivitas menjadi tidak terganggu. Penyesuaian dapat dilakukan
            melalui aplikasi desktop di dalam komputer agar mendapatkan update
            terkini secara langsung dari sumber utama.<br /><br />Pembuatan
            Aplikasi Pulsa<br />Lumira sebagai jasa pembuatan aplikasi dan
            website menawarkan pembuatan aplikasi pulsa untuk membantu
            mengembangkan usaha konsumennya. Dengan aplikasi pulsa yang dibuat
            oleh Lumira, Anda dapat mengembangkan usaha yang sedang Anda geluti
            dengan visi dan strategi pemasaran yang sesuai dengan yang
            diharapkan. Fitur utama dari aplikasi pulsa adalah fitur pembayaran
            dan pembelian.<br />● Fitur Pembayaran<br />Di dalam aplikasi pulsa
            akan terdapat beragam metode pembayaran. Tentunya dengan banyaknya
            metode pembayaran akan meningkatkan kepercayaan terhadap aplikasi
            pulsa Anda. Selain pembayaran paket data HP, terdapat juga
            pembayaran untuk keperluan lainnya, seperti pembayaran token pulsa
            PLN, tagihan Telkom, dan pembayaran angsuran kredit.<br />● Fitur
            Pembelian<br />Fitur selanjutnya yang wajib terdapat di dalam
            aplikasi pulsa adalah fitur pembelian. Disini Anda akan mendapatkan
            berbagai fasilitas pembelian produk, seperti pembelian pulsa,
            voucher, atau tiket alat transportasi.<br />Terdapat banyak manfaat
            yang akan dirasakan jika Anda menggunakan Lumira sebagai jasa
            pembuatan aplikasi dan website. Dengan ahli yang berpengalaman dan
            telah paham tentang dunia teknologi informasi, tentunya akan
            memberikan pelayanan yang terbaik di dalam membuat sebuah aplikasi
            atau website sesuai dengan keinginan Anda.<br /><br /><br />
            Lumira: Professional Service Perusahaan Jasa Pembuatan Aplikasi
            Terbaik Indonesia<br />Migrasi dari website ke aplikasi mobile
            adalah keputusan yang dinilai tepat. Periode dimana website menjadi
            media bisnis terdepan sudah usai. Saatnya Anda memutuskan untuk
            mulai mengembangkan aplikasi bisnis Anda. Banyaknya penyedia jasa
            pembuatan aplikasi dan website akan memudahkan Anda mengembangkan
            aplikasi berkualitas yang akan memberikan manfaat besar pada
            perusahaan Anda.<br />Jika dimanfaatkan dan dioptimalkan dengan
            baik, sebuah aplikasi mobile dapat menjadi penentu nasib akhir dari
            perusahaan Anda. Tidak ada waktu yang tepat untuk membuat dan
            mengembangkan aplikasi selain saat ini. Kredilitas tidak lagi diukur
            dari eksistensi website dan reputasi, tetapi juga dari eksistensi
            aplikasi mobile perusahaan Anda. Bahkan, sebagian orang menganggap
            jika tidak ada aplikasi maka tidak kredibel bisnisnya.<br /><br />Perkembangan
            Pesat Aplikasi Mobile<br />Tingkat ketergantungan terhadap
            smartphone dan apa yang ditawarkannya tidak mengalami tanda-tanda
            penurunan. Sejak hadir dan menemani pemiliknya, smartphone kian
            memegang peran penting dalam membantu manusia menyelesaikan beragam
            permasalahan maupun sebagai alat hiburan yang lengkap. Hampir
            mustahil membayangkan manusia hidup tanpa smartphone di masa kini,
            apalagi di masa depan.<br />Salah satu aspek yang membuat depedensi
            manusia terhadap smartphone adalah semakin lengkap dan bervariasinya
            aplikasi mobile. Hampir semua jenis aplikasi hadir dan mempermudah
            beragam aktivitas penggunanya. Dalam 10 tahun terakhir, perkembangan
            aplikasi mobile semakin tidak terbendung dan tidak ada tanda-tanda
            akan ada perlambatan. Hal tersebut mengindikasikan jika aplikasi
            mobile adalah industri besar.<br />Pesatnya perkembangan aplikasi
            mobile tersebut memicu cara baru untuk meraup keuntungan. Selain
            melalui transaksi produk dan download berbayar, in-app purchases
            (IAP), iklan, dan subscription adalah beberapa fasilitas yang kerap
            disertakan pada sebuah aplikasi dan dinilai ampuh untuk mendapatkan
            keuntungan yang lebih besar. Ruang inovasi selalu terbuka untuk cara
            baru meraih profit melalui aplikasi mobile di masa depan.<br />Dengan
            meningkatnya jumlah smartphone yang murah dengan kualitas mumpuni,
            industri ponsel pintar berada pada masa kejayaan dengan peningkatan
            jumlah ponsel pintar yang tinggi dari tahun ke tahun. Meningkatnya
            jumlah smartphone ini merangsang dan dirangsang oleh teknologi
            mutakhir yang semakin hari semakin mudah dijangkau oleh masyarakat
            tidak hanya di negara maju, tetapi di negara berkembang.<br />Statistik
            lain yang mengindikasikan bahwa ponsel pintar semakin berperan
            penting dalam kehidupan manusia adalah persentase penggunaan
            smartphone harian. Secara perlahan, ponsel pintar bisa menggantikan
            peran komputer dan televisi sebagai media hiburan maupun media yang
            dapat mengakses informasi melalui internet dengan cepat.
            Statistik-statistik tersebut sudah tidak mungkin lagi diabaikan.<br />Sejalan
            dengan perkembangan ponsel pintar dan aplikasi mobile, penyedia
            <a href="https://www.lumira.co.id/" style="color: #007bff"
              >jasa pembuatan aplikasi android ios</a
            >
            dan website pun semakin hari semakin banyak. Fakta-fakta yang telah
            dipaparkan tersebut dapat Anda jadikan sebagai bahan pertimbangan
            untuk sesegera mungkin merencanakan aplikasi mobile untuk perusahaan
            Anda. Memiliki website dan aplikasi mobile menjadi tren positif di
            dunia bisnis untuk jangka waktu yang panjang.<br /><br />6 Alasan
            Kenapa Perusahaan Anda Membutuhkan Aplikasi Mobile<br /><br />Jumlah
            pengguna smartphone yang semakin meningkat di seluruh dunia bukan
            satu-satunya alasan kenapa Anda sangat direkomendasikan untuk
            memiliki aplikasi mobile. Banyak keuntungan yang akan Anda dapatkan
            dengan membuat dan mengembangkan aplikasi mobile sendiri. Keuntungan
            yang akan Anda dapatkan tidak dapat diremehkan dan dapat berdampak
            besar bagi kesuksesan perusahaan Anda.<br />Terdapat 6 alasan kenapa
            perusahaan Anda membutuhkan aplikasi mobile. Ke-6 alasan tersebut
            adalah meningkatkan visibilitas, media marketing yang efektif,
            membangun citra atau brand perusahaan, meningkatkan loyalitas
            konsumen, menyediakan pelayanan konsumen, dan meningkatkan
            profit.<br /><br />1.Meningkatkan Visibilitas<br />Salah satu cara
            menarik perhatian pengguna adalah dengan menghadirkan produk atau
            brand Anda sesering mungkin. Sebuah aplikasi mobile akan terekam
            secara tidak sadar oleh siapapun yang dengan sengaja atau tidak
            menemukannya di Google Play Store maupun Apple App Store. Memang
            tidak ada jaminan jika aplikasi Anda akan langsung dipilih dan
            didownload secara serta merta.<br />Fakta bahwa orang menghabiskan
            waktu 2 jam per hari di ponselnya memperkuat kemungkinan produk Anda
            diingat dengan baik. Meningkatnya visibilitas produk Anda akan
            membantu bisnis Anda untuk lebih berkembang. Anda bisa menggunakan
            cara yang kreatif dengan menampilkan iklan atau menyertakan promosi
            pada aplikasi yang Anda buat ketika aplikasi tersebut terpapang di
            internet.<br /><br />2.Media Marketing yang Efektif<br />Promosi
            secara door to door yang dilakukan oleh para salesman terlihat kuno
            dan tidak efektif. Begitu juga dengan promosi melalui media
            mainstream yang tidak murah dengan tingkat efektivitas yang
            diragukan. Aplikasi mobile yang Anda kembangkan memiliki peluang
            lebih tinggi untuk menjadi media promosi yang efektif. Karena hadir
            setiap waktu di saku celanan pengguna, Anda bisa mempromosikan
            produk dengan cepat dan langsung.<br />Kembangkan aplikasi mobile
            yang komplet dengan fasilitas promosi dan informasi mengenai
            produk-produk yang Anda tawarkan. Tidak butuh waktu lama bagi
            pengguna aplikasi untuk meilirik dan mencari tahu lebih jauh
            mengenai sesuatu yang baru tersebut. Fitur notifikasi bisa
            disertakan untuk membuta pengguna dengan pasti menerima informasi
            dan penawaran mengenai produk baru dan diskon terkini.<br /><br />3.Membangun
            Citra<br />Aplikasi mobile memberikan peluang bagi Anda untuk
            melakukan kreasi tanpa batas. Citra atau brand perusahaan Anda dapat
            dimunculkan dengan jenis teks, gambar, audio, dan aspek visual
            lainnya. Hal lain yang bisa dilakukan adalah menyediakan fitur yang
            memang ikonik dan konsumen Anda sukai. Penyebarluasan konten
            informatif pun dapat Anda lakukan untuk membuat citra positif dan
            menguatkan brand bisnis Anda.<br />Hal lain yang bisa Anda nikmati
            dari adanya aplikasi mobile adalah fakta bahwa integrasi konsumen
            dengan aplikasi ternyata dapat meningkatkan brand recognition.
            Konsumen akan terbiasa dengan aplikasi dan benar-benar mengenal
            brand Anda dengan baik. Jika demikian, tidak mudah bagi Mereka untuk
            pindah ke brand lain apalagi jika Anda berhasil mengeluarkan promosi
            dan penawaran yang membuat konsumen merasa dilibatkan.<br /><br />4.Meningkatkan
            Loyalitas Konsumen<br />Dibandingkan dengan promosi dan interaksi
            yang bisa Anda lakukan melalui media konvensional, promosi dan
            interaksi yang Anda lakukan melalui aplikasi mobile dinilai lebih
            efektif meningkatkan loyalitas konsumen. Beberapa interaksi yang
            biasanya bisa dilakukan melalui aplikasi mobile adalah penawaran
            menarik, diskon, menyediakan media komunikasi langsung, dan jajak
            pendapat.<br />Anda bisa meningkatkan loyalitas konsumen dengan
            memberikan apresiasi berupa bintang atau poin yang nantinya bisa
            dikumpulkan dan ditukarkan untuk mendapatkan rewards menarik.
            Aplikasi mobile yang didesain dengan baik memungkinkan Anda merekam
            kebiasaan dan preferensi konsumen. Hal tersebut membuat Anda bisa
            mempromosikan produk dengan tepat dan konsumen merasa diperhatikan
            dengan baik.<br /><br />5.Meningkatkan Kualitas Pelayanan
            Konsumen<br />Pelayanan konsumen kerap kali diremehkan dan berada di
            urutan prioritas yang semestinya. Sebelum berbicara mengenai
            bagaiaman melayani konsumen dengan baik, Anda perlu memikirkan
            bagaimana bisa menjangkau konsumen dengan mudah dan cepat, begitu
            pun sebaliknya. Untungnya, smartphone memungkinkan akses cepat dan
            mudah tersebut terjadi. Hadirnya aplikasi setiap saat di ponsel
            konsumen memungkinkan hal tersebut terjadi.<br />Selalu berada di
            ponsel konsumen membuat konsumen merasa lebih diperhatikan dan
            berpikir jika perusahaan Anda selalu dapat diandalkan dalam situasi
            apapun. Segala bentuk laporan, keluhan, kritik, dan saran dapat
            ditampung dengan mudah dan cepat. Dengan adanya fitur statistik dan
            analisis data yang canggih pada aplikasi, Anda dapat memformulasikan
            solusi dan penanganan permasalahan dengan lebih baik.<br /><br />6.Meningkatkan
            Profit<br />Ada banyak metode untuk meningkatkan profit perusahaan
            melalui aplikasi mobile. Anda bisa meningkatkan profit dengan
            menyertakan iklan, membuat partnership, mengundang sponsor, dan
            menyediakan fasilitas in-app purchases. Teknik tersebut merupakan
            teknik yang lumrah dan merupakan cara alternatif untuk memaksimalkan
            profit melalui aplikasi mobile yang Anda kembangkan.<br /><br />Eksistensi
            aplikasi mobile tersebut sudah bagian dari upaya meningkatkan profit
            dan bagian dari proses branding bisnis Anda. Jika dikembangkan dan
            dikelola dengan baik, dampak adanya aplikasi mobile tersebut dapat
            mempercepat proses kesuksesan bisnis Anda. Selain itu, dengan adanya
            aplikasi mobile, Anda berada dalam jalur persaingan yang tepat
            dimana Anda tidak akan tertinggal dari perusahaan lain.<br /><br />Memaksimalkan
            Potensi Aplikasi Mobile untuk Peningkatan Profit<br />Sebuah
            aplikasi mobile lebih dari media atau alat transaksi dan eksistensi.
            Pemanfaatan aplikasi mobile untuk peningkatan profit bisa Anda
            lakukan ketika dalam proses pengembangan. Pemilihan dan kerja sama
            yang baik dengan provider jasa pembuatan aplikasi dan website yang
            profesional menjadi saratnya. Pengoptimalan juga bisa Anda lakukan
            pasca aplikasi selesai dibuat dan dikembangkan.<br />Tidak mudah
            memang untuk mendapatkan keuntungan yang cepat. Namun, berkaca pada
            banyak kasus, opsi monetization pada aplikasi mobile ternyata cukup
            bervariasi. Pada umumnya, terdapat 4 cara mengoptimalkan aplikasi
            yang relatif mudah untuk mendapatkan lebih banyak profit. Ke-4 cara
            tersebut adalah memasang iklan, menyertakan fitur IAP, menyediakan
            versi berbayar, dan memanfaatkan sponsor.<br /><br />1.Iklan<br />Menyertakan
            iklan dalam aplikasi Anda berarti menjaga peluang untuk mendapatkan
            profit dari cara yang mudah dan sederhana. Jumlah waktu yang
            dihabiskan oleh pengguna pada smartphone-nya memungkinkan interaksi
            yang lebih banyak dan lebih intim antara iklan dengan konsumen. Cara
            terbaik untuk mengoptimalkan iklan adalah membuat aplikasi yang Anda
            buat dan kembangkan gratis untuk didownload dan digunakan.<br />Pada
            umumnya, orang lebih memilih aplikasi gratis dengan risiko harus
            menonton iklan yang disediakan pengembang. Terdapat beragam jenis
            iklan yang bisa Anda sertakan, diantaranya iklan layar penuh
            (aplikasi distop), iklan berupa notifikasi (pop-up), dan iklan
            spanduk. Kunci kesuksesan strategi ini adalah menerapkan iklan yang
            tidak mengganggu dan membuat frustrasi, tetapi iklan yang mampu
            mengajak konsumen berinteraksi.<br /><br />2.In-app Purchases<br />Jika
            perusahaan Anda bergerak di industri game atau konten, Anda boleh
            memanfaatkan tren pembelian yang disebut in-app purchases (IAP).
            Melalui IAP, Anda bisa menawarkan atau menjual konten premium.
            Aplikasi yang Anda buat memang gratis, tetapi Anda bisa memanfaatkan
            gratisnya aplikasi Anda untuk menawarkan produk premium yang lebih
            baik atau lebih lengkap dari produk gratis yang Anda tawarkan.<br /><br />3.Versi
            Berbayar<br />Menyediakan fasilitas IAP bukan satu-satunya cara
            untuk mendapatkan keuntungan dari konten premium yang lebih baik dan
            lebih lengkap dari konten gratis. Anda bisa meminta penyedia jasa
            pembuatan aplikasi dan website yang Anda kontrak untuk membuat 2
            versi dari aplikasi Anda. Versi pertama adalah versi gratis dan
            versi kedua adalah versi berbayar. Konten dari masing-masing versi
            tentu saja berbeda.<br />Anda bayangkan saja versi gratis sebagai
            versi “pancingan” agar konsumen beralih ke versi berbayar. Anda juga
            bisa menjadikan aplikasi versi berbayar sebagai aplikasi pembuka
            yang memperkenalkan apa yang Anda tawarkan pada aplikasi berbayar.
            Agar profit yang Anda dapatkan maksimal, pastikan Anda benar-benar
            membuat aplikasi berbayar dengan konten yang memang pantas konsumen
            tukar dengan uang.<br /><br />4.Sponsor<br />Menjalin dan membuat
            partnership dengan perusahaan lain yang memiliki basis konsumen yang
            sama atau berkaitan bisa Anda terapkan. Taktik ini berlaku untuk
            Anda dan partner Anda. Anda bisa menyertakan iklan di aplikasi lain,
            begitu juga dengan perusahaan lain yang juga menyertakan produknya
            di aplikasi Anda. Profit juga bisa didapatkan dengan menyisipkan
            produk lain ke produk Anda, begitu juga sebaliknya.<br /><br />Aplikasi
            Mobile Berkualitas Dikembangkan oleh Pengembang Profesional<br />Untuk
            memaksimalkan apa yang ditawarkan oleh sebuah aplikasi mobile, Anda
            hanya bisa melakukannya dengan mengembangkan aplikasi yang sesuai
            dengan standar dan memenuhi ekspektasi target pasar perusahaan Anda.
            Anda tidak boleh sembarang ketika memilih provider jasa pengembangan
            aplikasi. Lumira adalah provider jasa pembuatan aplikasi dan website
            yang berpengalaman dan mampu mengembangkan beragam jenis
            aplikasi.<br />Lumira telah bekerja sama dengan beragam perusahaan
            ternama dan bertanggung jawab dalam pembuatan beberapa produk yang
            dinilai berkualitas. Beberapa perusahaan dan produk yang sudah
            bekerja sama dengan Lumira adalah Berrybenka, Kulina, RBCPRO, RV
            Mall, Sejasa, Recomn Malaysia, Shiseido Global Mobile Apps CMS,
            Factory Outlet Kapal Api, Armenian, Ayana Hotel, Eiger, Elevenia,
            Suzuki, dan Orang Tua.<br /><br />Berdasarkan perusahaan dan produk
            yang telah dipaparkan tersebut, Lumira telah menyelesaikan banyak
            proyek di berbagai bidang, dari mulai e-commerce, market place,
            perhotelan, pariwisata, edukasi, fintech, hingga industri. Hingga
            saat ini Lumira telah menyelesaikan 518 proyek dengan total klien
            berjumlah 317 klien. 6 tahun bukan waktu yang sebentar untuk sebuah
            perusahaan IT mampu bertahan di industri IT dengan persaingan yang
            ketat.<br /><br />Untuk membantu Anda mensukseskan bisnis melalui
            aplikasi mobile, Lumira menjunjung tinggi 7 prinsip.<br />1.Lumira
            mengedepankan profesionalitas dalam setiap proyek dan pekerjaan yang
            dambil.<br />2.Lumira menyediakan desain visual yang sesuai dengan
            proses branding yang Anda inginkan.<br />3.Lumira hanya membuat
            aplikasi yang stabil, mudah dan cepat diakses, serta ringan dan
            tidak membebani.<br />4.Lumira mengedepankan aspek keamanan dan
            privasi pada setiap proyek dan pekerjaan yang diambil.<br />5.Lumira
            hanya bekerja dengan para teknisi dan ahli yang berpengalaman di
            bidangnya masing-masing.<br />6.Lumira memberikan bantuan berupa
            ilmu dan teknik untuk mampu unggul dalam persaingan bisnis
            digital.<br />7.Lumira selalu berusaha membuat dan mengembangkan
            aplikasi dengan biaya seefektif mungkin.<br /><br />Ke-5 prinsip
            tersebut akan ditunjang oleh media dan infrastruktur IT yang mumpuni
            dan canggih. Mustahil sebuah aplikasi mobile bisa dibuat dengan baik
            tanpa adanya pemanfaatan teknologi terkini. Lumira menggunakan
            infrastruktur dan teknologi jaringan, infrastruktur pemrograman, dan
            berbagai data serta ilmu dengan beragam komunitas IT yang kredibel.
            Semua teknologi yang digunakan sudah memenuhi standar
            internasional.<br /><br />Sebagai penyedia jasa pembuatan aplikasi
            dan website yang profesional, Lumira juga menawarkan produk premium
            di bidang IT. Produk premium tersebut adalah Data Compression, Data
            Buffering Optimization, Security &amp; Tracking, Quantum Computing
            Platform, Data Mining, dan Business Advisory. Banyaknya jasa yang
            ditawarkan membuat Lumira dapat menjadi solusi terbaik untuk masalah
            dan kebutuhan produk IT perusahaan Anda.<br />
          </p>
        </div>

        <div class="row">
          <p class="text-light text-center">
            &copy; PT. Ion Smart Teknologi - 2023 Lumira Indonesia Mobile Apps
            Developer. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: false,
      shouldShowImage: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Jarak dari atas halaman saat ini
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      // Tambahkan logika kondisional Anda di sini
      if (scrollTop > 0) {
        this.shouldShowImage = true;
      } else {
        this.shouldShowImage = false;
      }
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .float-end{
    display: none;
  }
  h2{
    font-size: 35px !important;
  }
}
@media only screen and (min-width: 700px) {
  .contact{
    margin-top: 18px;
  }
}


section {
  background-color: #273f5b;
  padding-top: 50px;
  padding-bottom: 50px;
}

.template {
}
.customButton {
  width: 200px;
}
.row > img.lumira {
  width: 260px !important;
  margin: auto;
}

.customJustify{
  text-align: justify;
}

.kota {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 38px;
  margin-top: 20px;
  color: #333333;
}
.waicon{
  position: fixed;
  bottom: 15px;
}

.alamat {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  color: #333333;
}

.footer {
  text-align: right;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #2b77eb;
}

.customBorder {
  margin-top: 50px;
}

.flex-container {
  display: flex;
  flex-direction: row; /* default value, can be omitted */
  justify-content: space-between;
  align-items: center;
  height: 100px;
  float: right;
}

.flex-item {
  padding: 10px;
}
@media only screen and (max-width: 600px) {
  .kota {
    font-family: "Avenir", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 38px;
    margin-top: 20px;
    color: #333333;
    text-align: center;
  }
}
</style>