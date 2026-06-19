export interface News {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const news: News[] = [
  // ─── POLITIK ───────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "DPR Sahkan RUU Pemilu Baru, Ambang Batas Parlemen Turun Jadi 3%",
    slug: "dpr-sahkan-ruu-pemilu-baru-ambang-batas-parlemen",
    category: "Politik",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop",
    excerpt:
      "DPR RI resmi mengesahkan Rancangan Undang-Undang Pemilu dalam sidang paripurna. Salah satu poin krusial adalah penurunan ambang batas parlemen dari 4% menjadi 3%.",
    content:
      "Jakarta — DPR RI resmi mengesahkan Rancangan Undang-Undang Pemilihan Umum dalam sidang paripurna yang berlangsung hingga dini hari. Penurunan ambang batas parlemen (parliamentary threshold) dari 4% menjadi 3% menjadi salah satu perubahan paling signifikan. Keputusan ini disambut beragam oleh fraksi-fraksi di parlemen. Pihak yang mendukung menilai langkah ini membuka ruang lebih luas bagi partai-partai kecil untuk berkontribusi dalam pemerintahan. Sementara itu, sejumlah fraksi besar mengingatkan potensi fragmentasi politik yang dapat menghambat stabilitas pemerintahan ke depan. Menteri Dalam Negeri menyatakan pemerintah siap mengawal implementasi aturan baru ini menjelang Pemilu 2029.",
  },
  {
    id: 2,
    title: "Presiden Lantik 12 Menteri Baru dalam Reshuffle Kabinet Gelombang Ketiga",
    slug: "presiden-lantik-12-menteri-baru-reshuffle-kabinet",
    category: "Politik",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&auto=format&fit=crop",
    excerpt:
      "Presiden melantik 12 menteri baru dan 8 wakil menteri dalam reshuffle kabinet gelombang ketiga di Istana Negara. Sejumlah pos kementerian strategis berganti kepemimpinan.",
    content:
      "Jakarta — Presiden Republik Indonesia melantik 12 menteri baru dan delapan wakil menteri dalam upacara reshuffle kabinet gelombang ketiga yang digelar di Istana Negara. Beberapa kementerian strategis seperti Kementerian Keuangan, Kementerian BUMN, dan Kementerian Investasi mengalami pergantian pimpinan. Presiden menegaskan perombakan ini bertujuan mempercepat program-program prioritas nasional, termasuk hilirisasi industri dan pemerataan pembangunan. Para menteri baru langsung diberikan arahan untuk segera berkoordinasi dengan jajaran lama guna memastikan transisi berjalan mulus tanpa hambatan birokrasi.",
  },
  {
    id: 3,
    title: "KPU Tetapkan Jadwal Tahapan Pilkada Serentak 2027",
    slug: "kpu-tetapkan-jadwal-pilkada-serentak-2027",
    category: "Politik",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&auto=format&fit=crop",
    excerpt:
      "KPU resmi mengumumkan jadwal tahapan Pilkada Serentak 2027. Pendaftaran pasangan calon dijadwalkan dimulai pada bulan Maret 2027.",
    content:
      "Jakarta — Komisi Pemilihan Umum (KPU) resmi mengumumkan jadwal lengkap tahapan Pilkada Serentak 2027 yang akan digelar secara bersamaan di seluruh provinsi, kabupaten, dan kota di Indonesia. Pendaftaran pasangan calon gubernur, bupati, dan wali kota dijadwalkan dibuka pada Maret 2027. KPU menekankan pentingnya kesiapan daerah dalam penyediaan anggaran dan logistik pemilihan. Ketua KPU mengajak seluruh partai politik untuk mulai mempersiapkan kader terbaik mereka agar proses Pilkada berjalan demokratis, jujur, dan adil.",
  },

  // ─── EKONOMI ───────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "BI Pertahankan Suku Bunga Acuan di Level 5,75% di Tengah Tekanan Inflasi",
    slug: "bi-pertahankan-suku-bunga-acuan-5-75-persen",
    category: "Ekonomi",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
    excerpt:
      "Bank Indonesia mempertahankan suku bunga acuan BI Rate di level 5,75% dalam Rapat Dewan Gubernur bulan ini guna menjaga stabilitas nilai tukar rupiah.",
    content:
      "Jakarta — Bank Indonesia (BI) kembali mempertahankan suku bunga acuan BI Rate di level 5,75% dalam Rapat Dewan Gubernur (RDG) yang digelar dua hari di Jakarta. Gubernur BI menyampaikan keputusan ini diambil sebagai langkah pre-emptive untuk mengendalikan inflasi yang masih berada di kisaran 3,2% serta menjaga stabilitas nilai tukar rupiah di tengah ketidakpastian pasar global. BI juga memproyeksikan pertumbuhan ekonomi Indonesia tahun ini berada di kisaran 5,0-5,4%, didukung oleh konsumsi domestik yang tetap kuat dan ekspor komoditas yang terjaga.",
  },
  {
    id: 5,
    title: "Ekspor Nikel Indonesia Melonjak 34% Berkat Hilirisasi Industri",
    slug: "ekspor-nikel-indonesia-melonjak-hilirisasi",
    category: "Ekonomi",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
    excerpt:
      "Nilai ekspor produk turunan nikel Indonesia melonjak 34% secara tahunan pada kuartal pertama, menjadi bukti nyata keberhasilan kebijakan hilirisasi industri.",
    content:
      "Jakarta — Kementerian Perindustrian mencatat nilai ekspor produk turunan nikel Indonesia melonjak 34% secara year-on-year pada kuartal pertama tahun ini. Lonjakan ini merupakan hasil nyata dari kebijakan hilirisasi industri yang mewajibkan pengolahan bahan mentah di dalam negeri sebelum diekspor. Produk-produk seperti feronikel, stainless steel, dan bahan baku baterai kendaraan listrik menjadi penyumbang terbesar. Menteri Perindustrian menyebut capaian ini membuktikan bahwa kebijakan larangan ekspor bahan mentah memberikan nilai tambah signifikan bagi perekonomian nasional.",
  },
  {
    id: 6,
    title: "Rupiah Menguat ke Level Rp15.400 per Dolar AS Setelah Data Inflasi AS Mereda",
    slug: "rupiah-menguat-rp15400-per-dolar",
    category: "Ekonomi",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=800&auto=format&fit=crop",
    excerpt:
      "Rupiah menguat signifikan ke level Rp15.400 per dolar AS setelah data inflasi Amerika Serikat menunjukkan perlambatan, memicu harapan pemangkasan suku bunga The Fed.",
    content:
      "Jakarta — Nilai tukar rupiah menguat signifikan ke level Rp15.400 per dolar AS pada perdagangan sore ini, setelah data inflasi Amerika Serikat bulan lalu menunjukkan perlambatan yang lebih besar dari perkiraan. Kondisi ini memicu harapan bahwa The Federal Reserve akan segera memangkas suku bunga, sehingga mendorong aliran modal masuk ke pasar negara berkembang termasuk Indonesia. Analis dari sejumlah lembaga keuangan memperkirakan rupiah masih berpotensi menguat ke kisaran Rp15.200 apabila siklus pemangkasan suku bunga AS benar-benar dimulai pada kuartal ketiga.",
  },

  // ─── TEKNOLOGI ─────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Startup AI Lokal Luncurkan Model Bahasa Indonesia Pertama Berbasis Open Source",
    slug: "startup-ai-lokal-luncurkan-model-bahasa-indonesia",
    category: "Teknologi",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    excerpt:
      "Sebuah startup kecerdasan buatan asal Bandung meluncurkan model bahasa besar (LLM) berbahasa Indonesia pertama yang sepenuhnya open source dan dapat digunakan secara gratis.",
    content:
      "Bandung — Sebuah startup kecerdasan buatan asal Bandung, IndonesiaAI, resmi meluncurkan model bahasa besar (Large Language Model/LLM) berbahasa Indonesia pertama yang sepenuhnya open source. Model bernama \"NusaBERT-XL\" ini dilatih menggunakan lebih dari 200 miliar token teks berbahasa Indonesia dari berbagai sumber, termasuk Wikipedia, berita daring, dan dokumen pemerintah. CEO IndonesiaAI menjelaskan model ini dirancang untuk mendukung berbagai aplikasi, mulai dari chatbot layanan publik hingga sistem analisis dokumen hukum. Komunitas pengembang dapat mengunduh dan menggunakannya secara gratis melalui platform Hugging Face.",
  },
  {
    id: 8,
    title: "Pemerintah Rilis Regulasi Baru Tata Kelola AI, Wajib Audit Setiap Tahun",
    slug: "pemerintah-rilis-regulasi-tata-kelola-ai",
    category: "Teknologi",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
    excerpt:
      "Pemerintah Indonesia menerbitkan Peraturan Presiden tentang Tata Kelola Kecerdasan Buatan yang mewajibkan perusahaan pengguna AI berisiko tinggi untuk menjalani audit tahunan.",
    content:
      "Jakarta — Pemerintah Indonesia resmi menerbitkan Peraturan Presiden tentang Tata Kelola Kecerdasan Buatan (AI Governance). Regulasi ini mewajibkan setiap perusahaan yang menggunakan sistem AI berisiko tinggi—seperti di sektor keuangan, kesehatan, dan infrastruktur kritis—untuk menjalani audit kepatuhan setiap tahun oleh lembaga independen bersertifikat. Pelanggaran dapat dikenai sanksi berupa denda hingga Rp10 miliar atau pencabutan izin operasional. Menteri Kominfo menyatakan regulasi ini merupakan langkah Indonesia menuju ekosistem digital yang aman, transparan, dan bertanggung jawab.",
  },
  {
    id: 9,
    title: "Starlink Perluas Jaringan ke 500 Desa Terpencil di Indonesia Timur",
    slug: "starlink-perluas-jaringan-desa-terpencil-indonesia-timur",
    category: "Teknologi",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format&fit=crop",
    excerpt:
      "Layanan internet satelit Starlink memperluas jangkauan ke 500 desa terpencil di Indonesia Timur, memberikan akses internet berkecepatan tinggi bagi ratusan ribu warga.",
    content:
      "Jayapura — Starlink, layanan internet satelit milik SpaceX, resmi mengumumkan perluasan jaringan ke 500 desa terpencil di Papua, Maluku, dan Nusa Tenggara Timur. Langkah ini merupakan bagian dari kemitraan strategis dengan Kementerian Komunikasi dan Informatika dalam program Desa Pintar. Kecepatan unduh rata-rata yang ditawarkan mencapai 100 Mbps, jauh melampaui koneksi yang tersedia sebelumnya di wilayah-wilayah tersebut. Warga desa kini dapat menikmati layanan telemedicine, e-learning, dan akses platform pemerintah digital tanpa hambatan geografis.",
  },

  // ─── OLAHRAGA ──────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Timnas Indonesia U-23 Lolos ke Semifinal Piala Asia, Kalahkan Jepang Lewat Adu Penalti",
    slug: "timnas-u23-lolos-semifinal-piala-asia-kalahkan-jepang",
    category: "Olahraga",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&auto=format&fit=crop",
    excerpt:
      "Timnas Indonesia U-23 menciptakan kejutan besar dengan mengalahkan Jepang melalui adu penalti dan melangkah ke semifinal Piala Asia U-23 untuk pertama kalinya dalam sejarah.",
    content:
      "Doha — Timnas Indonesia U-23 menciptakan momen bersejarah dengan mengalahkan Jepang melalui drama adu penalti dalam babak perempat final Piala Asia U-23. Pertandingan berakhir 1-1 setelah 120 menit, dan Indonesia unggul 4-2 dalam adu penalti. Kiper Ernando Ari tampil gemilang dengan menggagalkan dua tendangan penalti Jepang. Ini merupakan kali pertama Indonesia melangkah ke babak semifinal turnamen bergengsi tingkat Asia. Pelatih Shin Tae-yong memuji semangat juang para pemain yang tak pernah menyerah meski tertinggal di babak pertama.",
  },
  {
    id: 11,
    title: "Greysia Polii Resmi Pensiun, Kenang Perjalanan Menuju Medali Emas Olimpiade",
    slug: "greysia-polii-resmi-pensiun",
    category: "Olahraga",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop",
    excerpt:
      "Legenda bulu tangkis Indonesia Greysia Polii resmi mengumumkan pensiun dari dunia profesional dalam konferensi pers haru yang dihadiri keluarga dan rekan-rekan atlet.",
    content:
      "Jakarta — Greysia Polii, peraih medali emas Olimpiade Tokyo 2020 bersama Apriyani Rahayu, resmi mengumumkan pensiunnya dari dunia bulu tangkis profesional. Dalam konferensi pers yang sarat emosi, Greysia mengenang perjalanan panjangnya selama lebih dari dua dekade, mulai dari kegagalan pertama di Olimpiade hingga akhirnya meraih puncak kejayaan di Tokyo. \"Setiap keringat, setiap air mata, semuanya terbayar di momen Tokyo,\" ujarnya dengan mata berkaca-kaca. PP PBSI memberikan penghargaan khusus atas kontribusinya yang luar biasa bagi olahraga Indonesia.",
  },
  {
    id: 12,
    title: "Indonesia Terpilih Jadi Tuan Rumah Kejuaraan Dunia Bulutangkis 2026",
    slug: "indonesia-tuan-rumah-kejuaraan-dunia-bulutangkis-2026",
    category: "Olahraga",
    image: "https://images.unsplash.com/photo-1613918431703-aa50889e3be7?w=800&auto=format&fit=crop",
    excerpt:
      "BWF resmi mengumumkan Indonesia sebagai tuan rumah Kejuaraan Dunia Bulutangkis 2026. Istora Senayan Jakarta akan menjadi arena utama pertandingan.",
    content:
      "Kuala Lumpur — Federasi Bulu Tangkis Dunia (BWF) resmi mengumumkan Indonesia sebagai tuan rumah Kejuaraan Dunia Bulu Tangkis 2026. Istora Senayan, Jakarta, akan menjadi venue utama yang menampung seluruh pertandingan dari babak penyisihan hingga final. Ketua Umum PP PBSI menyambut keputusan ini dengan penuh kebanggaan dan berjanji menghadirkan penyelenggaraan bertaraf internasional. Pemerintah Indonesia juga telah menjanjikan dukungan anggaran penuh untuk memastikan renovasi infrastruktur Istora Senayan rampung sebelum turnamen berlangsung.",
  },

  // ─── GAYA HIDUP ────────────────────────────────────────────────────────────
  {
    id: 13,
    title: "Tren 'Slow Living' Makin Diminati Generasi Muda Indonesia di Kota Besar",
    slug: "tren-slow-living-generasi-muda-indonesia",
    category: "Gaya Hidup",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    excerpt:
      "Gaya hidup 'slow living' yang mengutamakan ketenangan, kesederhanaan, dan keseimbangan hidup semakin populer di kalangan generasi muda perkotaan Indonesia.",
    content:
      "Jakarta — Di tengah hiruk-pikuk kehidupan kota besar, semakin banyak anak muda Indonesia yang memilih gaya hidup slow living—sebuah filosofi yang menekankan kesederhanaan, kehadiran penuh di setiap momen, dan penolakan terhadap budaya serba cepat. Komunitas slow living di berbagai kota besar seperti Jakarta, Bandung, dan Surabaya kini memiliki ribuan anggota aktif. Mereka rutin mengadakan kegiatan seperti meditasi, berkebun urban, memasak makanan rumahan, dan membatasi penggunaan media sosial. Psikolog menilai tren ini sebagai respons sehat terhadap tekanan produktivitas yang semakin tinggi di era digital.",
  },
  {
    id: 14,
    title: "Kafe Bertemakan Alam Terbuka Jadi Magnet Wisatawan di Bali",
    slug: "kafe-alam-terbuka-magnet-wisatawan-bali",
    category: "Gaya Hidup",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&auto=format&fit=crop",
    excerpt:
      "Konsep kafe bertemakan alam terbuka dengan pemandangan sawah dan hutan menjadi daya tarik utama wisatawan domestik maupun mancanegara yang berkunjung ke Bali.",
    content:
      "Ubud, Bali — Kafe-kafe bertemakan alam terbuka semakin menjamur di Ubud dan sekitarnya, menawarkan pengalaman bersantai di tengah hamparan sawah hijau, gemericik sungai, dan kicauan burung. Konsep \"jungle café\" dan \"rice field dining\" ini telah berhasil menarik jutaan pengunjung dari berbagai penjuru dunia. Salah satu kafe paling populer bahkan memiliki antrean reservasi hingga tiga bulan ke depan. Para pelaku usaha menyebut keberhasilan konsep ini tidak lepas dari pergeseran preferensi wisatawan yang kini lebih menginginkan pengalaman otentik ketimbang sekadar makan dan minum.",
  },
  {
    id: 15,
    title: "Olahraga Padel Meledak Populer, 200 Lapangan Baru Dibangun di Indonesia",
    slug: "olahraga-padel-populer-200-lapangan-baru",
    category: "Gaya Hidup",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&auto=format&fit=crop",
    excerpt:
      "Olahraga padel yang memadukan elemen tenis dan squash meledak popularitasnya di Indonesia. Lebih dari 200 lapangan baru telah dibangun dalam setahun terakhir.",
    content:
      "Jakarta — Olahraga padel, yang memadukan elemen tenis dan squash dalam arena berdinding kaca, tengah mengalami lonjakan popularitas yang luar biasa di Indonesia. Data dari Federasi Padel Indonesia (FPI) menunjukkan lebih dari 200 lapangan baru telah dibangun di seluruh Indonesia dalam 12 bulan terakhir, terutama di Jakarta, Surabaya, dan Medan. Jumlah anggota komunitas padel nasional juga meningkat tiga kali lipat. Padel dinilai lebih mudah dipelajari dibanding tenis dan cocok untuk berbagai kelompok usia, sehingga cepat diterima oleh masyarakat luas.",
  },

  // ─── DUNIA ─────────────────────────────────────────────────────────────────
  {
    id: 16,
    title: "KTT G20 di Brasil Hasilkan Kesepakatan Pajak Kekayaan Global Minimum",
    slug: "ktt-g20-brasil-pajak-kekayaan-global",
    category: "Dunia",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    excerpt:
      "Para pemimpin negara G20 di Brasil menyepakati kerangka kerja pajak kekayaan global minimum sebesar 2% untuk individu dengan aset di atas 1 miliar dolar AS.",
    content:
      "Rio de Janeiro — Para pemimpin negara-negara G20 yang berkumpul di Rio de Janeiro menyepakati kerangka kerja bersejarah mengenai pajak kekayaan global minimum. Individu dengan total aset di atas satu miliar dolar AS akan dikenai pajak minimal 2% dari kekayaan bersih mereka per tahun. Brasil sebagai tuan rumah menyatakan kesepakatan ini merupakan langkah revolusioner dalam memerangi kesenjangan global. Namun implementasinya masih membutuhkan ratifikasi di masing-masing negara anggota, dan sejumlah negara menyatakan keberatan atas mekanisme pengawasannya.",
  },
  {
    id: 17,
    title: "Uni Eropa Larang Penggunaan Microplastik dalam Produk Kosmetik Mulai 2025",
    slug: "uni-eropa-larang-microplastik-kosmetik",
    category: "Dunia",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop",
    excerpt:
      "Uni Eropa resmi memberlakukan larangan penggunaan microplastik yang disengaja dalam produk kosmetik dan perawatan pribadi, sebuah langkah besar dalam perlindungan lingkungan.",
    content:
      "Brussels — Uni Eropa resmi memberlakukan larangan penggunaan microplastik yang ditambahkan secara disengaja dalam produk kosmetik, perawatan pribadi, dan deterjen. Regulasi ini diperkirakan akan mencegah lebih dari 500.000 ton microplastik terlepas ke lingkungan selama dua dekade ke depan. Para produsen kosmetik diberi masa transisi hingga akhir tahun untuk menyesuaikan formula produk mereka. Kebijakan ini disambut positif oleh komunitas lingkungan internasional, namun industri kosmetik global memperkirakan biaya adaptasi yang cukup besar.",
  },
  {
    id: 18,
    title: "NASA Konfirmasi Penemuan Air dalam Bentuk Es di Bulan Selatan Mars",
    slug: "nasa-konfirmasi-es-air-bulan-selatan-mars",
    category: "Dunia",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop",
    excerpt:
      "NASA mengonfirmasi penemuan deposit es air yang sangat besar di dekat kutub selatan Mars, membuka peluang baru bagi misi manusia ke Planet Merah.",
    content:
      "Washington D.C. — NASA mengonfirmasi penemuan deposit es air dalam jumlah sangat besar di dekat wilayah kutub selatan Mars melalui data terbaru dari wahana Mars Reconnaissance Orbiter. Ilmuwan memperkirakan cadangan es ini cukup untuk menutupi seluruh permukaan Mars dengan lapisan air sedalam 1,5 meter jika dicairkan. Penemuan ini dinilai sebagai terobosan penting bagi rencana misi berawak ke Mars, karena air dapat menjadi sumber minum, oksigen, dan bahan bakar roket. Administrator NASA menyebut temuan ini \"mengubah cara kita memandang kemungkinan kehidupan di luar Bumi\".",
  },

  // ─── BISNIS ────────────────────────────────────────────────────────────────
  {
    id: 19,
    title: "GoTo Group Umumkan Akuisisi Platform Logistik SiCepat Senilai Rp8 Triliun",
    slug: "goto-akuisisi-sicepat-rp8-triliun",
    category: "Bisnis",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop",
    excerpt:
      "GoTo Group mengumumkan akuisisi platform logistik SiCepat dengan nilai transaksi sekitar Rp8 triliun, memperkuat posisi GoTo dalam ekosistem e-commerce Indonesia.",
    content:
      "Jakarta — GoTo Group, induk perusahaan Gojek, Tokopedia, dan GoPay, resmi mengumumkan akuisisi SiCepat Ekspres—salah satu perusahaan logistik terbesar Indonesia—dengan nilai transaksi sekitar Rp8 triliun. Langkah strategis ini dinilai akan memperkuat ekosistem end-to-end GoTo, mulai dari transaksi di Tokopedia hingga pengiriman barang melalui SiCepat. CEO GoTo menyatakan integrasi ini akan memungkinkan layanan pengiriman same-day ke lebih dari 500 kota di Indonesia. Analis pasar menilai akuisisi ini sebagai sinyal bahwa GoTo serius memperkuat daya saing melawan Shopee dan Lazada.",
  },
  {
    id: 20,
    title: "BCA dan Mandiri Bergabung dalam Konsorsium Pembiayaan Infrastruktur Hijau Rp50 Triliun",
    slug: "bca-mandiri-konsorsium-infrastruktur-hijau",
    category: "Bisnis",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop",
    excerpt:
      "BCA dan Bank Mandiri bersama tiga bank BUMN lainnya membentuk konsorsium pembiayaan untuk proyek infrastruktur hijau senilai Rp50 triliun dalam lima tahun ke depan.",
    content:
      "Jakarta — Bank Central Asia (BCA) dan Bank Mandiri bersama-sama mengumumkan pembentukan konsorsium pembiayaan infrastruktur hijau (green infrastructure) bersama tiga bank BUMN lainnya. Total komitmen dana yang disiapkan mencapai Rp50 triliun untuk periode 2024-2029. Konsorsium ini akan membiayai proyek-proyek prioritas seperti energi terbarukan, transportasi ramah lingkungan, pengelolaan air bersih, dan efisiensi energi di gedung-gedung komersial. Ketua konsorsium menyebut langkah ini merupakan bentuk nyata komitmen perbankan Indonesia terhadap tujuan net-zero emission nasional pada 2060.",
  },
  {
    id: 21,
    title: "Pertamina Geothermal Energy Catat Rekor Produksi Listrik 1.000 MW dari Panas Bumi",
    slug: "pertamina-geothermal-rekor-produksi-1000-mw",
    category: "Bisnis",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    excerpt:
      "Pertamina Geothermal Energy (PGE) mencatatkan rekor produksi listrik panas bumi sebesar 1.000 megawatt, menjadikan Indonesia sebagai produsen listrik geothermal terbesar kedua di dunia.",
    content:
      "Jakarta — PT Pertamina Geothermal Energy (PGE) Tbk mencatatkan rekor produksi listrik dari panas bumi sebesar 1.000 megawatt (MW), menjadikan Indonesia sebagai produsen listrik geothermal terbesar kedua di dunia setelah Amerika Serikat. Capaian ini merupakan hasil dari ekspansi kapasitas di sejumlah wilayah kerja panas bumi, termasuk Kamojang (Jawa Barat), Lahendong (Sulawesi Utara), dan Ulubelu (Lampung). Direktur Utama PGE menyatakan perusahaan menargetkan kapasitas 2.000 MW pada 2030, sejalan dengan program transisi energi nasional.",
  },

  // ─── CAMPURAN TAMBAHAN ──────────────────────────────────────────────────────
  {
    id: 22,
    title: "Riset: Konsumsi Kopi Tiga Cangkir per Hari Turunkan Risiko Diabetes Tipe 2",
    slug: "riset-kopi-tiga-cangkir-turunkan-risiko-diabetes",
    category: "Gaya Hidup",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop",
    excerpt:
      "Studi terbaru yang melibatkan lebih dari 200.000 responden menemukan bahwa konsumsi kopi tanpa gula sebanyak tiga cangkir per hari berkaitan dengan penurunan risiko diabetes tipe 2.",
    content:
      "London — Sebuah studi komprehensif yang diterbitkan dalam jurnal The Lancet melibatkan lebih dari 200.000 responden dari 17 negara menemukan bahwa konsumsi kopi hitam tanpa gula sebanyak tiga cangkir per hari berkaitan dengan penurunan risiko diabetes tipe 2 hingga 23%. Peneliti menyebut kandungan senyawa polifenol dan asam klorogenat dalam kopi berperan dalam meningkatkan sensitivitas insulin. Namun para ahli mengingatkan bahwa manfaat ini berlaku untuk kopi tanpa tambahan gula dan krim berlebih, serta tidak menggantikan pentingnya pola makan sehat dan olahraga teratur.",
  },
  {
    id: 23,
    title: "Gempa M 7,1 Guncang Kepulauan Maluku, Tidak Berpotensi Tsunami",
    slug: "gempa-m71-guncang-kepulauan-maluku",
    category: "Dunia",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop",
    excerpt:
      "Gempa berkekuatan M 7,1 mengguncang wilayah Kepulauan Maluku pada Rabu dini hari. BMKG menyatakan gempa tidak berpotensi tsunami namun warga diminta tetap waspada.",
    content:
      "Ambon — Gempa bumi berkekuatan Magnitudo 7,1 mengguncang wilayah Kepulauan Maluku pada Rabu dini hari pukul 02.34 WIT. Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) menyatakan episenter gempa berada di laut, 85 kilometer barat daya Kota Ambon pada kedalaman 45 kilometer. BMKG menegaskan gempa ini tidak berpotensi menimbulkan tsunami. Namun, beberapa bangunan dilaporkan mengalami kerusakan ringan dan warga berhamburan keluar rumah. Tim BPBD Maluku segera diterjunkan untuk melakukan pendataan kerusakan dan memastikan tidak ada korban jiwa.",
  },
  {
    id: 24,
    title: "Apple Umumkan iPhone 17 dengan Layar Lipat Pertama, Harga Mulai $1.299",
    slug: "apple-umumkan-iphone-17-layar-lipat",
    category: "Teknologi",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop",
    excerpt:
      "Apple secara resmi memperkenalkan iPhone 17 Fold, iPhone pertama mereka dengan layar lipat berukuran 7,9 inci, menandai era baru dalam lini produk iPhone.",
    content:
      "Cupertino — Apple secara resmi memperkenalkan iPhone 17 Fold dalam acara peluncuran tahunan di Apple Park, Cupertino. Ini merupakan iPhone pertama Apple yang menggunakan teknologi layar lipat, menghadirkan layar utama berukuran 7,9 inci dan layar luar 5,5 inci. Diperkuat oleh chip A19 Pro, iPhone 17 Fold juga hadir dengan kamera utama 48 MP dan dukungan Apple Intelligence generasi terbaru. Harga resmi dimulai dari $1.299 untuk varian 256 GB. Pre-order dibuka mulai pekan depan dengan pengiriman dijadwalkan pada bulan berikutnya. Analis memperkirakan produk ini akan langsung bersaing ketat dengan Samsung Galaxy Z Fold.",
  },
  {
    id: 25,
    title: "Liga 1 Indonesia: Persib Bandung Juara Usai Tundukkan Persija 3-1 di Partai Final",
    slug: "liga-1-persib-juara-tundukkan-persija",
    category: "Olahraga",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop",
    excerpt:
      "Persib Bandung meraih gelar juara Liga 1 Indonesia musim ini setelah mengalahkan Persija Jakarta 3-1 dalam partai final yang digelar di Stadion Utama Gelora Bung Karno.",
    content:
      "Jakarta — Persib Bandung resmi dinobatkan sebagai juara Liga 1 Indonesia musim ini setelah tampil dominan mengalahkan Persija Jakarta 3-1 dalam partai puncak yang digelar di Stadion Utama Gelora Bung Karno (SUGBK) di hadapan lebih dari 70.000 penonton. David da Silva membuka keunggulan di menit ke-23, diikuti dua gol tambahan dari Ciro Alves dan Beckham Putra. Persija sempat memperkecil jarak melalui tandukan Gustavo Almeida di menit ke-67, namun tidak mampu membalikkan keadaan. Kapten Persib Marc Klok mengangkat trofi juara di hadapan ribuan bobotoh yang hadir memenuhi tribun stadion kebanggaan Ibu Kota.",
  },
];