// ============================================================
// DATA WEBSITE DUSUN SEGELAN SIDOMULYO
// Edit file ini untuk mengubah semua konten website
// ============================================================

export const dusunInfo = {
  nama:        "Dusun Segelan Sidomulyo",
  desa:        "Desa Balesari",
  kecamatan:   "Ngajum",
  kabupaten:   "Kabupaten Malang",
  provinsi:    "Jawa Timur",
  // tahunBerdiri: belum tersedia
  // jumlahWarga: belum tersedia
  luasWilayah: "— Ha",       // isi bila sudah ada
  ketinggian:  "— mdpl",     // isi bila sudah ada
  semboyan:  "Ngawiji Guyup Rukun",
  deskripsi:
    "Dusun Segelan Sidomulyo adalah dusun bersejarah yang terletak di Desa Balesari, " +
    "Kecamatan Ngajum, Kabupaten Malang. Namanya lahir dari sejarah unik sebuah lahan " +
    "yang pernah 'disegel', dan harapan akan kemakmuran yang tercermin dalam kata 'Sidomulyo'.",
  koordinat: { lat: -8.0833, lng: 112.4500 }, // perkiraan — ganti sesuai koordinat asli
  kontak: {
    email:     "umbbmbalesari.01@gmail.com",   // ganti bila sudah punya
    telepon:   "085853609613",                              // isi bila ada
    alamat:    "Dusun Segelan Sidomulyo, Desa Balesari, Kec. Ngajum, Kab. Malang",
    facebook:  "",   // isi bila ada
    instagram: "https://www.instagram.com/bbmbalesari.1?igsh=b2d0YThkZjQxMTY1",   // isi bila ada
  },
};

// ── ASAL USUL / SEJARAH ───────────────────────────────────────────────────
export const ausalUsulDusun = {
  judulUtama: "Sejarah Pembentukan Dusun Segelan",
  narasi: [
    {
      paragraf:
        "Menurut penuturan para pendahulu, asal-usul nama Dusun Segelan berawal dari " +
        "cerita tutur bahwa dahulu tanah di wilayah ini pernah disegel atau dikunci. " +
        "Setelah itu, para pendahulu melakukan pemekaran wilayah dan membentuk permukiman " +
        "dusun baru yang diberi nama Segelan Sidomulyo.",
    },
    {
      paragraf:
        "Nama ini mencerminkan dua hal sekaligus: sejarah tempat tersebut sebagai lahan " +
        "yang dulunya 'disegel' (dikunci), dan harapan akan kemakmuran serta kesejahteraan " +
        "bagi seluruh warganya yang terkandung dalam kata 'Sidomulyo'.",
    },
    {
      paragraf:
        "Hingga kini, semangat para pendahulu yang membuka lahan dan membangun permukiman " +
        "ini terus diwariskan kepada generasi penerus Dusun Segelan Sidomulyo melalui " +
        "tradisi, gotong royong, dan kehidupan bermasyarakat yang harmonis.",
    },
  ],
  // Timeline sejarah — tambahkan bila data sudah tersedia
  timeline: [
    {
      tahun: "Masa Lampau",
      judul: "Penyegelan Lahan",
      isi:   "Tanah di wilayah ini pernah disegel atau dikunci oleh pihak tertentu, menjadi asal mula nama 'Segelan'.",
      ikon:  "🔒",
    },
    {
      tahun: "Pemekaran Wilayah",
      judul: "Pembentukan Dusun",
      isi:   "Para pendahulu melakukan pemekaran wilayah dan mendirikan permukiman baru. Nama 'Sidomulyo' dipilih sebagai lambang harapan kemakmuran.",
      ikon:  "🏕️",
    },
    {
      tahun: "2026",
      judul: "Digitalisasi Dusun",
      isi:   "KKN UM BBM Kelompok 1 hadir mendokumentasikan sejarah, budaya, dan potensi Dusun Segelan Sidomulyo melalui website resmi ini.",
      ikon:  "💻",
    },
  ],
};

// ── ANGGOTA KKN UM BBM ───────────────────────────────────────────────────
export const anggotaKKN = [
  { nama: "Zubair Umar Abidin",           nim: "230935604894", peran: "Ketua",                    
    divisi: "Ketua",        foto: "/images/anggota/1.jpg" },
  { nama: "Intan Nur Aini",               nim: "240341603596", peran: "Bendahara",                 
    divisi: "Bendahara",    foto: "/images/anggota/2.jpg" },
  { nama: "Irine Putri Setyorini Hartanto",nim: "240212603758", peran: "Sekretaris",               
    divisi: "Sekretaris",   foto: "/images/anggota/3.jpg" },
  { nama: "Maura Twicynta Ardianti",       nim: "240811606279", peran: "Sie Acara",                
    divisi: "Sie Acara",    foto: "/images/anggota/4.jpg" },
  { nama: "Cristine Santa Monica",         nim: "240516605381", peran: "Sie Acara (Co)",           
    divisi: "Sie Acara",    foto: "/images/anggota/5.jpg" },
  { nama: "Naimatu Zuriya",                nim: "240153604802", peran: "Sie Acara",                
    divisi: "Sie Acara",    foto: "/images/anggota/6.jpg" },
  { nama: "Ratna Amelia Juniarti",         nim: "240331602145", peran: "Sie Acara",                
    divisi: "Sie Acara",    foto: "/images/anggota/7.jpg" },
  { nama: "Marshella Aliya Hufni",         nim: "240761609481", peran: "PDD (Co)",                 
    divisi: "PDD",          foto: "/images/anggota/8.jpg" },
  { nama: "Andita Zahrifa Provide D.",     nim: "240251603708", peran: "PDD",                      
    divisi: "PDD",          foto: "/images/anggota/9.jpg" },
  { nama: "Krisna Pangquita Ariyani",      nim: "240741604080", peran: "PDD",                      
    divisi: "PDD",          foto: "/images/anggota/10.jpg" },
  { nama: "Firdaus Alhamzah",              nim: "240771609552", peran: "Humas (Co)",               
    divisi: "Humas",        foto: "/images/anggota/11.jpg" },
  { nama: "Lintang Ramadhanu Setyawan",   nim: "240535615901", peran: "Humas",                    
    divisi: "Humas",        foto: "/images/anggota/12.jpg" },
  { nama: "Pranta Pelikas Limbeng",        nim: "230621601514", peran: "Perkap (Co)",              
    divisi: "Perkap",       foto: "/images/anggota/13.jpg" },
  { nama: "Husnanadesi Permatakandi",      nim: "240351606201", peran: "Perkap",                   
    divisi: "Perkap",       foto: "/images/anggota/14.jpg" },
  { nama: "Vannia Rahma Aulia Ananda",     nim: "240151601505", peran: "Perkap",                   
    divisi: "Perkap",       foto: "/images/anggota/15.jpg" },
];

export const divisiWarna: Record<string, string> = {
  "Ketua":      "bg-amber-100 text-amber-800",
  "Bendahara":  "bg-green-100 text-green-800",
  "Sekretaris": "bg-blue-100 text-blue-800",
  "Sie Acara":  "bg-purple-100 text-purple-800",
  "PDD":        "bg-pink-100 text-pink-800",
  "Humas":      "bg-orange-100 text-orange-800",
  "Perkap":     "bg-teal-100 text-teal-800",
};

// ── KEGIATAN KKN (Dokumentasi UMBBM) ────────────────────────────────────
export const kegiatanKKN = [
  {
    id:        1,
    judul:     "Pembukaan & Penyambutan KKN",
    tanggal:   "— 2026",          // isi tanggal sebenarnya
    kategori:  "Seremonial",
    deskripsi: "Acara penyambutan tim KKN UM BBM Kelompok 1 oleh perangkat dusun dan tokoh masyarakat Dusun Segelan Sidomulyo.",
    foto:      null,
    tag:       ["seremonial", "pembukaan"],
  },
  {
    id:        2,
    judul:     "Pembuatan Website Dusun",
    tanggal:   "— 2026",
    kategori:  "Teknologi",
    deskripsi: "Proses pembuatan website resmi Dusun Segelan Sidomulyo sebagai media dokumentasi sejarah, budaya, dan kegiatan KKN.",
    foto:      null,
    tag:       ["teknologi", "website", "digital"],
  },
  {
    id:        3,
    judul:     "Dokumentasi Sejarah & Budaya",
    tanggal:   "— 2026",
    kategori:  "Budaya",
    deskripsi: "Pengumpulan cerita tutur, foto, dan data sejarah dusun melalui wawancara dengan para sesepuh dan tokoh masyarakat.",
    foto:      null,
    tag:       ["budaya", "sejarah", "dokumentasi"],
  },
  // Tambahkan kegiatan lain di sini sesuai data nyata
];

export const kategoriKKNWarna: Record<string, string> = {
  Seremonial:  "bg-purple-100 text-purple-800",
  Pendidikan:  "bg-blue-100 text-blue-800",
  Teknologi:   "bg-indigo-100 text-indigo-800",
  Kesehatan:   "bg-green-100 text-green-800",
  Budaya:      "bg-orange-100 text-orange-800",
  Lingkungan:  "bg-teal-100 text-teal-800",
};

// ── FOLKLORE & DONGENG ───────────────────────────────────────────────────

export type FolkloreGambar = {
  src: string;
  caption?: string;
};

export type FolkloreParagraf = {
  subjudul?: string;
  teks: string;
  gambar?: FolkloreGambar[];
};

export type FolkloreItem = {
  id: number;
  judul: string;
  jenis: string;
  ringkasan: string;
  ikon: string;
  konten: FolkloreParagraf[];
};

export const folklore: FolkloreItem[] = [
  {
    id: 1,
    judul: "Menjaga Kilau Batu Gilang",
    jenis: "Legenda & Sejarah Lisan",
    ringkasan: "Di Dusun Magersari terdapat punden Situs Batu Gilang, makam Mbah Suradi Pusponegara yang membuka hutan dan mendirikan cikal bakal Dusun Segelan. Namanya dari batu-batu yang berkilau (gilang-gilang) saat terkena cahaya.",
    ikon: "✨",
    konten: [
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/batu-gilang-1.jpg"},
        ],
      },
      {
        teks: "Di Dusun Magersari, Dusun Segelan, Desa Balesari, Kecamatan Ngajum, Kabupaten Malang, terdapat sebuah punden yang hingga kini masih ramai didatangi peziarah. Masyarakat mengenalnya sebagai Situs Batu Gilang. Bagi sebagian orang, tempat itu hanyalah bangunan sederhana yang menaungi sebuah makam dan batu tua. Namun, bagi warga setempat, Batu Gilang merupakan ruang tempat sejarah, keyakinan, dan ingatan leluhur yang saling bertaut. Menurut penuturan para sesepuh desa, jauh sebelum kampung ini dipenuhi rumah-rumah penduduk, kawasan Segelan masih berupa hutan lebat. Pada masa itu banyak pendatang datang membuka lahan pertanian. Sebagian besar berasal dari wilayah Yogyakarta dan kawasan Gunung Kawi. Mereka mencari tempat yang aman untuk memulai kehidupan baru, salah satunya adalah seorang tokoh yang kemudian dikenal sebagai Mbah Suradi Pusponegara.",
      },
      // {
      //   teks: "",
      // },
      {
        teks: "Masyarakat percaya bahwa Mbah Suradi masih memiliki hubungan dengan lingkungan Keraton Yogyakarta. Beliau disebut hidup pada masa yang sama dengan Mbah Eyang Jugo atau Kiai Zakaria. Dalam cerita yang diwariskan turun-temurun, Mbah Suradi merupakan bagian dari keturunan atau pengikut Laskar Diponegoro yang melarikan diri setelah berakhirnya Perang Jawa. Demi menghindari kejaran pemerintah kolonial Belanda, beliau memilih masuk ke kawasan pedalaman yang masih sunyi. Ia meninggalkan keluarga dan hanya membawa senjata sebagai bekal bertahan hidup. Di tempat yang kini menjadi Dusun Segelan itulah Mbah Suradi mulai membabat hutan. Lahan-lahan dibuka untuk ditanami jagung, pohong, dan berbagai tanaman pangan lainnya. Perlahan, kawasan yang semula sepi mulai dihuni oleh masyarakat hingga tumbuh menjadi sebuah perkampungan.",
      },
      {
        teks: "Suatu hari, ketika warga membuka lahan, ditemukan sebuah tanda berupa ukiran dari tanah liat yang oleh masyarakat disebut maesan. Penemuan itu dianggap bukan sesuatu yang biasa. Warga kemudian membuat sebuah tungkup atau bangunan kecil sebagai pelindungnya. Sejak saat itulah orang-orang mulai berdatangan untuk berziarah. Lambat laun, jumlah peziarah semakin banyak. Banyak di antara mereka yang meyakini bahwa doa-doa yang dipanjatkan di tempat tersebut dikabulkan oleh Allah Swt. Masyarakat setempat menegaskan bahwa terkabulnya doa bukanlah karena kekuatan Mbah Suradi, melainkan karena beliau dipandang sebagai seorang saleh yang menjadi perantara (wasilah) dalam memohon kepada Tuhan. Atas dasar penghormatan itulah bangunan sederhana tersebut kemudian diperbaiki menjadi punden yang lebih layak seperti yang dapat dilihat sekarang.",
      },
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/batu-gilang-2.jpg" },
        ],
      },
      {
        teks: "Nama Batu Gilang sendiri memiliki kisah yang menarik. Menurut cerita para leluhur, dahulu di lokasi tersebut terdapat tumpukan batu-batu besar yang jika terkena cahaya tampak berkilau dari kejauhan. Dalam bahasa Jawa keadaan itu disebut gilang-gilang, yakni memancarkan kilau. Seiring waktu, penyebutannya berubah menjadi Batu Gilang, nama yang akhirnya dikenal hingga sekarang. Di bagian tengah punden terdapat sebuah batu berwarna hitam yang kini sengaja ditanam dan dijaga keberadaannya. Warga meyakini batu tersebut memiliki keistimewaan dan daya spiritual yang kuat. Dahulu, menurut cerita masyarakat, kekuatan batu itu jauh lebih terasa dibandingkan sekarang. Namun, seiring berjalannya waktu, daya tersebut dipercaya mulai memudar karena berbagai pantangan yang dilanggar manusia. Di antaranya larangan membawa atau memakan daging babi di area punden serta larangan bagi perempuan yang sedang haid untuk memasuki kawasan tersebut. Kepercayaan itu masih dipegang oleh sebagian masyarakat hingga kini sebagai bentuk penghormatan terhadap tempat yang dianggap sakral.",
      },
      {
        teks: "Selain batu hitam tersebut, masyarakat juga menyimpan berbagai kisah mengenai peninggalan-peninggalan yang pernah ditemukan di sekitar punden. Dahulu pernah ditemukan uang gobog, yakni mata uang kuno berlubang di bagian tengah yang digunakan pada masa lampau. Kini benda-benda semacam itu sudah tidak lagi ditemukan karena sebagian telah diambil oleh orang-orang. Cerita lain yang masih sering dituturkan adalah tentang sebuah gentong air peninggalan lama. Konon pernah ada seseorang yang membawa pulang gentong tersebut. Namun pada malam harinya ia mengalami peristiwa yang dianggap ganjil. Seseorang mengetuk pintunya dan meminta agar gentong itu dikembalikan ke tempat asalnya. Sejak saat itu tidak ada lagi warga yang berani mengambil benda-benda peninggalan dari kawasan punden.",
      },
      {
        teks: "Di sekitar wilayah tersebut juga terdapat sebuah mata air yang dikenal sebagai Sumber Mbah Brojonolo. Menurut cerita masyarakat, mata air itu dahulu digunakan Mbah Suradi untuk mandi sekaligus memenuhi kebutuhan hidup sehari-hari ketika membuka hutan. Keberadaan sumber itu menjadi bagian penting dari rangkaian kisah yang menghubungkan Mbah Suradi dengan awal mula kehidupan masyarakat di Dusun Segelan. Menariknya, masyarakat juga menuturkan bahwa di sekitar punden tumbuh sebuah pohon jenar yang diperkirakan telah berusia sangat tua. Pohon itu diyakini menjadi penanda bahwa kawasan tersebut telah dihuni sejak masa lampau. Sementara itu, letak punden yang berada jauh dari sumber air juga memunculkan dugaan masyarakat bahwa tempat tersebut sejak awal bukanlah kawasan permukiman, melainkan memiliki fungsi lain yang belum sepenuhnya diketahui hingga sekarang.",
      },

      {
        teks: "",
        gambar: [
          { src: "/images/folklore/batu-gilang-3.jpg" },
        ],
      },
      {
        teks: "Hingga kini, setiap Jumat Legi banyak peziarah datang ke Batu Gilang. Selain itu, pada Senin Kliwon di bulan Selo, masyarakat mengadakan selamatan sebagai bentuk penghormatan kepada leluhur sekaligus ungkapan syukur kepada Tuhan. Mereka meyakini bahwa siapapun yang datang hendaknya menjaga kebersihan hati, menjauhkan prasangka buruk, dan tetap mengingat bahwa segala doa hanya ditujukan kepada Allah Swt. Di kalangan masyarakat Magersari juga berkembang keyakinan bahwa Mbah Suradi masih menjaga keselamatan kampung. Apabila suatu saat desa akan mengalami musibah, dipercaya beliau terlebih dahulu memberikan petunjuk melalui mimpi atau firasat kepada seseorang. Orang yang menerima petunjuk tersebut kemudian menyampaikan pesan kepada warga agar melakukan tindakan tertentu sebagai bentuk ikhtiar menghindari marabahaya. Terlepas dari benar atau tidaknya kepercayaan itu, kisah tersebut telah menjadi bagian dari warisan lisan yang terus hidup di tengah masyarakat.",
      },
      {
        teks: "Sebagian warga bahkan percaya bahwa secara kasatmata kawasan Batu Gilang dijaga oleh sosok harimau putih dan harimau hitam yang hanya dapat dilihat oleh orang-orang tertentu. Kepercayaan ini memperkaya lapisan cerita yang mengiringi keberadaan punden, meskipun tidak semua masyarakat memiliki keyakinan yang sama terhadap kisah tersebut. Di sisi lain, para sesepuh juga menegaskan bahwa anggapan Batu Gilang sebagai tempat pesugihan tidak pernah menjadi ajaran yang diwariskan oleh leluhur. Menurut mereka, cerita-cerita semacam itu lebih banyak lahir dari penafsiran dan rekayasa manusia. Bagi masyarakat Magersari sendiri, Batu Gilang bukanlah tempat untuk mencari kekayaan secara instan, melainkan ruang untuk mengenang jasa leluhur, memanjatkan doa kepada Allah, serta merawat hubungan antara sejarah, budaya, dan identitas kampung yang telah diwariskan dari generasi ke generasi.",
      },
    ],
  },
  {
    id: 2,
    judul: "Dua Sumber Mata Air di Dusun Segelan: Sumber Mbah Brojonolo dan Sumber Mbah Painah",
    jenis: "Cerita Rakyat",
    ringkasan: "Dua sumber mata air utama Dusun Segelan yang menghidupi warga hingga desa sekitarnya. Sumber Mbah Painah menyimpan misteri seseorang yang mandi tiba-tiba menghilang saat ditanya namanya.",
    ikon: "💧",
    konten: [
      {
        teks: "Di Dusun Segelan, Desa Balesari, Kecamatan Ngajum, Kabupaten Malang, terdapat dua sumber mata air yang menjadi bagian penting dalam kehidupan masyarakat, yaitu Sumber Mbah Brojonolo dan Sumber Mbah Painah. Kedua sumber mata air ini tidak hanya dimanfaatkan oleh warga Dusun Segelan, tetapi juga mengalir hingga ke desa-desa di sekitarnya. Sejak dahulu, air dari kedua sumber tersebut menjadi penopang kehidupan masyarakat untuk memenuhi berbagai kebutuhan sehari-hari, seperti mandi, mencuci, hingga kebutuhan rumah tangga lainnya.",
      },
      {
        teks: "Bagi masyarakat Dusun Segelan, mata air bukan hanya dipandang sebagai sumber air, tetapi juga sebagai anugerah yang harus dijaga dan disyukuri. Oleh karena itu, setiap tahun masyarakat mengadakan sebuah tradisi selamatan yang dikenal dengan Barikan. Tradisi ini biasanya dilaksanakan pada bulan Selo atau bulan Sapar, tepatnya pada tanggal 1 menurut penanggalan Jawa.",
      },
      {
        teks: "Pelaksanaan Barikan dilakukan secara gotong royong oleh masyarakat yang memanfaatkan air dari kedua sumber tersebut. Menariknya, upacara ini tidak dilaksanakan di sekitar mata air, melainkan di perempatan jalan yang dianggap sebagai titik paling strategis di dusun. Menurut kepercayaan masyarakat setempat, jalan merupakan pusat aktivitas kehidupan warga. Melalui filosofi tersebut, doa-doa yang dipanjatkan dalam Barikan diharapkan dapat menyebar kepada seluruh masyarakat dan membawa keselamatan, keberkahan, serta kelancaran rezeki bagi semua yang menikmati manfaat dari sumber mata air tersebut.",
      },
      {
        subjudul: "Sumber Mbah Brojonolo",
        teks: "",
        gambar: [
          { src: "/images/folklore/sumber-brojonolo-1.jpg" },
        ],
      },
      {
        teks: "Sumber Mbah Brojonolo merupakan salah satu mata air utama yang hingga kini masih dimanfaatkan oleh masyarakat. Airnya mengalir jernih dan menjadi sumber kehidupan bagi warga Dusun Segelan maupun wilayah di sekitarnya. Keberadaan sumber ini telah diwariskan secara turun-temurun dan menjadi bagian yang tidak terpisahkan dari kehidupan masyarakat setempat. Selain dimanfaatkan sebagai sumber air bersih, masyarakat juga menjaga kelestarian kawasan di sekitar sumber agar debit air tetap terjaga. Sikap tersebut menunjukkan adanya hubungan yang erat antara masyarakat dengan alam, di mana keberadaan mata air dipandang sebagai titipan yang harus dirawat bersama.",
      },
      {
        subjudul: "Sumber Mbah Painah",
        teks: "",
        gambar: [
          { src: "/images/folklore/mbah-painah-1.jpg" },
        ],
      },
      {
        teks: "Tidak jauh dari Sumber Mbah Brojonolo terdapat Sumber Mbah Painah yang juga memiliki nilai penting bagi masyarakat. Selain dimanfaatkan sebagai sumber air, mata air ini menyimpan cerita rakyat yang masih diceritakan secara turun-temurun. Konon, pada zaman dahulu terdapat seseorang yang sedang mandi di sumber tersebut. Ketika ada warga yang bertanya, 'Njenengan sinten?' (Siapa Anda?), sosok yang sedang mandi itu tiba-tiba menghilang dan tidak terlihat lagi. Peristiwa itulah yang kemudian berkembang menjadi cerita lisan di masyarakat dan dikaitkan dengan asal-usul penamaan Sumber Mbah Painah.",
      },
      {
        teks: "Hingga saat ini, kisah tersebut masih menjadi bagian dari folklor masyarakat Dusun Segelan. Terlepas dari benar atau tidaknya peristiwa tersebut secara historis, cerita ini menunjukkan bagaimana masyarakat memaknai keberadaan mata air bukan hanya sebagai sumber kehidupan, tetapi juga sebagai ruang yang menyimpan nilai budaya, kepercayaan, dan warisan cerita dari generasi ke generasi. Keberadaan Sumber Mbah Brojonolo dan Sumber Mbah Painah menjadi bukti bahwa mata air memiliki peran yang sangat penting dalam kehidupan masyarakat Dusun Segelan. Selain memenuhi kebutuhan sehari-hari, kedua sumber ini juga melahirkan tradisi serta cerita rakyat yang memperkaya identitas budaya masyarakat setempat. Tradisi Barikan yang masih dilaksanakan hingga sekarang menjadi bentuk rasa syukur sekaligus harapan agar sumber mata air tetap lestari dan terus memberikan manfaat bagi generasi yang akan datang.",
      },
      {
        teks: "Sebagai bentuk kepedulian terhadap pelestarian potensi alam dan budaya desa, mahasiswa Universitas Negeri Malang yang tergabung dalam UM BBM 2026 Desa Balesari Kelompok 1 turut melaksanakan kegiatan revitalisasi di kawasan Sumber Mbah Brojonolo dan Sumber Mbah Painah. Kegiatan ini dilakukan bersama Kepala Dusun Segelan sebagai wujud kolaborasi antara mahasiswa dan masyarakat dalam menjaga keberlangsungan kedua sumber mata air tersebut. Revitalisasi yang dilakukan meliputi pembersihan area di sekitar mata air, penataan lingkungan, serta pemasangan papan informasi sebagai upaya memperkenalkan nilai sejarah, budaya, dan fungsi kedua sumber kepada masyarakat maupun pengunjung. Melalui kegiatan ini diharapkan keberadaan Sumber Mbah Brojonolo dan Sumber Mbah Painah tidak hanya tetap terjaga kebersihan dan kelestariannya, tetapi juga semakin dikenal sebagai bagian dari warisan budaya lokal Dusun Segelan yang patut dilestarikan bersama.",
      },
      {
        teks: "Kegiatan revitalisasi ini menjadi salah satu bentuk nyata pengabdian mahasiswa kepada masyarakat. Dengan melibatkan pemerintah dusun dan warga setempat, diharapkan tumbuh kesadaran bersama bahwa menjaga kelestarian sumber mata air bukan hanya menjadi tanggung jawab satu pihak, melainkan merupakan tanggung jawab seluruh elemen masyarakat agar manfaatnya dapat terus dirasakan oleh generasi mendatang.",
      },
    ],
  },
  {
    id: 3,
    judul: "Situs Candi Pasar: Jejak Peradaban yang Tersembunyi di Lereng Gunung Kawi",
    jenis: "Situs Bersejarah",
    ringkasan: "Hamparan batu andesit dan gundukan tanah di lereng Gunung Kawi yang diduga berkaitan dengan masa kerajaan. Ada cerita sebuah batu besar yang kembali ke tempat asalnya setelah dipindahkan.",
    ikon: "🏛️",
    konten: [
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/candi-pasar-1.jpg" },
        ],
      },
      {
        teks: "Di balik rindangnya pepohonan dan sejuknya udara lereng Gunung Kawi, terdapat sebuah tempat yang hingga kini masih menyimpan banyak kisah yang belum sepenuhnya terungkap. Tempat itu dikenal masyarakat sebagai Situs Candi Pasar, sebuah kawasan yang menyisakan hamparan batu-batu andesit, gundukan tanah, serta berbagai cerita yang diwariskan dari satu generasi ke generasi berikutnya. Tidak ada prasasti ataupun catatan sejarah yang mampu menjelaskan secara pasti kapan situs ini dibangun dan siapa yang mendirikannya. Sebagian besar pengetahuan mengenai Candi Pasar hidup melalui ingatan para sesepuh desa yang terus menuturkan kisah-kisah tentang masa lalu.",
      },
      {
        teks: "Menurut cerita masyarakat, kawasan ini dahulu diduga pernah menjadi sebuah pasar. Penamaan 'Candi Pasar' dipercaya berasal dari keberadaan pasar tersebut, meskipun tidak diketahui secara pasti bagaimana bentuk maupun aktivitasnya pada masa lampau. Letaknya yang berada di bawah kawasan Keraton Gunung Kawi menimbulkan dugaan bahwa tempat ini memiliki hubungan dengan kehidupan masyarakat pada masa kerajaan. Bahkan sebagian masyarakat mengaitkannya dengan kisah Mpu Sindok dan Prabu Kameswara yang dipercaya pernah bertapa hingga mencapai muksa di kawasan Gunung Kawi. Meski demikian, kisah tersebut masih menjadi bagian dari tradisi lisan yang belum dapat dibuktikan melalui sumber sejarah tertulis.",
      },
      {
        teks: "Salah satu peninggalan yang masih dapat dijumpai hingga sekarang adalah batu-batu andesit yang tersebar di berbagai sudut kawasan. Batu-batu tersebut diduga merupakan sisa bangunan kuno yang telah runtuh. Di bagian selatan situs terdapat sebuah gundukan batu yang oleh masyarakat dipercaya sebagai bekas gapura menuju kompleks bangunan pada masa lalu. Tidak jauh dari lokasi tersebut terdapat pula makam yang diyakini sebagai makam Mbah Semak Dipo dan Mbah Marsini, tokoh yang dihormati oleh masyarakat setempat.",
      },
      {
        teks: "Di antara berbagai cerita yang berkembang, terdapat sebuah legenda yang hingga kini masih sering diceritakan. Pada saat pembangunan jalan menuju kawasan industri PT Japfa Comfeed, masyarakat mengambil sebagian batu dari kawasan Candi Pasar untuk dijadikan material pembangunan. Konon, sebuah batu berukuran besar yang telah dipindahkan justru kembali ke tempat asalnya. Peristiwa itu membuat masyarakat merasa bahwa batu tersebut tidak boleh dipindahkan. Sejak saat itu, batu tersebut dibiarkan tetap berada di lokasi sebagai bagian dari warisan yang harus dihormati. Masyarakat juga memiliki berbagai dugaan mengenai hilangnya bangunan utama Candi Pasar. Ada yang berpendapat bahwa bangunan tersebut runtuh akibat bencana alam, seperti gempa bumi yang pernah melanda kawasan ini. Ada pula yang meyakini bahwa situs tersebut mengalami kerusakan pada masa peperangan atau sengaja diruntuhkan agar tidak dimanfaatkan sebagai tempat persembunyian. Namun hingga kini belum ditemukan bukti sejarah yang dapat memastikan berbagai dugaan tersebut.",
      },
      {
        teks: "Meski bangunan candinya tidak lagi berdiri utuh, Situs Candi Pasar tetap memiliki peran penting dalam kehidupan masyarakat. Setiap bulan Suro, kawasan ini menjadi tempat pelaksanaan tradisi Bersih Dusun, sebuah upacara adat sebagai ungkapan rasa syukur sekaligus doa untuk keselamatan dan kesejahteraan warga. Selain itu, situs ini juga kerap menjadi tempat berdoa dan melakukan laku spiritual oleh masyarakat dari berbagai aliran kepercayaan. Kehadiran berbagai tradisi tersebut menunjukkan bahwa Candi Pasar tidak hanya dipandang sebagai peninggalan masa lalu, tetapi juga sebagai ruang budaya yang masih hidup dan terus dijaga keberadaannya.",
      },
      {
        teks: "Hingga saat ini, Situs Candi Pasar masih menyimpan banyak misteri yang menunggu untuk diungkap. Di balik batu-batu yang berserakan dan cerita-cerita yang terus diwariskan, tersimpan jejak perjalanan panjang masyarakat lereng Gunung Kawi. Oleh karena itu, keberadaan situs ini bukan sekadar peninggalan sejarah, melainkan juga warisan budaya yang memperkaya identitas Desa Balesari serta menjadi pengingat bahwa sejarah tidak hanya tersimpan dalam prasasti dan naskah kuno, tetapi juga hidup dalam ingatan dan cerita masyarakat yang terus menjaganya.",
      },
    ],
  },
  {
    id: 4,
    judul: "Pemandian Eyang Djoego, Jejak Spiritual di Sumber Manggis",
    jenis: "Sejarah & Tradisi Spiritual",
    ringkasan: "Mata air di lereng selatan Gunung Kawi berkaitan dengan perjalanan dakwah Raden Mas Imam Soedjono. Dari batu besar yang diketuk memancarlah air jernih, lalu ditanami pohon manggis yang menjadi nama tempat ini.",
    ikon: "🌿",
    konten: [
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/sumber-manggis-1.jpg" },
        ],
      },
      {
        teks: "Di lereng selatan Gunung Kawi mengalir sebuah mata air yang tak pernah berhenti memberi kehidupan. Masyarakat mengenalnya sebagai Sumber Manggis atau Pemandian Eyang Djoego, sebuah tempat yang tidak hanya menawarkan kesejukan alam, tetapi juga menyimpan kisah sejarah dan nilai spiritual yang telah diwariskan secara turun-temurun. Keberadaan Sumber Manggis berkaitan erat dengan perjalanan dakwah Raden Mas Imam Soedjono, seorang keturunan Sri Sultan Hamengkubuwono sekaligus murid setia Eyang Djoego yang juga memiliki garis keturunan Sri Susuhunan Pakubuwono. Pada masa itu, Raden Mas Imam Soedjono bersama gurunya membuka hutan di lereng selatan Gunung Kawi sebagai tempat menyebarkan agama Islam sekaligus mempersiapkan lokasi pemakaman Eyang Djoego.",
      },
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/sumber-manggis-2.jpg" },
        ],
      },
      {
        teks: "Dalam proses membuka kawasan tersebut, Raden Mas Imam Soedjono menemukan sebuah batu besar. Menurut cerita yang berkembang di masyarakat, ketika batu itu diketuk, memancarlah air jernih yang terus mengalir tanpa pernah mengalami kekeringan. Mata air itulah yang kemudian menjadi sumber kehidupan bagi masyarakat sekitar dan dikenal hingga sekarang sebagai Sumber Manggis. Tidak jauh dari mata air tersebut, Raden Mas Imam Soedjono menanam benih pohon manggis. Seiring berjalannya waktu, pohon itu tumbuh dengan subur dan menjadi penanda khas kawasan tersebut. Dari keberadaan pohon manggis inilah nama Sumber Manggis kemudian melekat dan terus digunakan oleh masyarakat hingga saat ini.",
      },
      {
        teks: "Eyang Djoego wafat pada tahun 1871, disusul Raden Mas Imam Soedjono pada tahun 1876. Keduanya dimakamkan di Pesarean Gunung Kawi yang letaknya tidak jauh dari Sumber Manggis. Kedekatan lokasi antara makam dan mata air tersebut semakin memperkuat hubungan historis sekaligus spiritual yang dipercaya oleh masyarakat setempat. Hingga kini, Pemandian Eyang Djoego atau Sumber Manggis masih ramai dikunjungi peziarah maupun wisatawan. Sebagian masyarakat memanfaatkan tempat ini sebagai lokasi untuk berdoa kepada Tuhan Yang Maha Esa, menyucikan diri, serta memohon kesehatan dan keselamatan. Meski demikian, masyarakat setempat selalu mengingatkan bahwa doa dan harapan hendaknya tetap ditujukan kepada Tuhan Yang Maha Esa dengan niat yang baik, sementara keberadaan Sumber Manggis dipandang sebagai bagian dari warisan sejarah, budaya, dan spiritual yang patut dijaga kelestariannya.",
      },
    ],
  },
  {
    id: 5,
    judul: "Sumber Waras: Mata Air Bersejarah yang Menjadi Simbol Kehidupan dan Tradisi Masyarakat Wonosari",
    jenis: "Sejarah & Tradisi",
    ringkasan: "Ditemukan oleh Kiai Zakaria (Mbah Jugo) bersama Kanjeng Raden Mas Iman Sujono. Airnya dimanfaatkan untuk terapi refleksi dan tradisi memandikan ibu hamil, bayi, hingga anak yang akan dikhitan — diiringi selawat dan tabuhan jidor.",
    ikon: "🌊",
    konten: [
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/sumber-waras-1.jpg" },
        ],
      },
      {
        teks: "Di lereng Pegunungan Kawitan (Gunung Kawi) mengalir sebuah mata air yang hingga kini menjadi bagian penting dari kehidupan masyarakat, yaitu Sumber Waras. Mata air ini berasal dari beberapa sumber kecil yang muncul di kawasan lereng pegunungan, kemudian menyatu menjadi satu aliran yang tidak terpisahkan. Airnya mengalir jernih melalui celah-celah bebatuan hitam berukuran besar dan hamparan batu kerikil yang kaya akan kandungan mineral, sebelum akhirnya membentuk aliran sungai kecil yang menyejukkan.",
      },
      {
        teks: "Kejernihan air serta kondisi alam di sekitarnya menjadikan Sumber Waras dikenal sebagai tempat pengobatan alami. Batu-batu kerikil di dasar aliran air sering dimanfaatkan sebagai pijakan terapi refleksi. Masyarakat percaya bahwa berjalan di atas bebatuan tersebut dapat membantu melenturkan otot dan saraf kaki serta melancarkan peredaran darah, baik bagi orang yang sedang menjalani pemulihan kesehatan maupun mereka yang ingin menjaga kebugaran tubuh.",
      },
      {
        subjudul: "Awal Mula Penemuan Sumber Waras",
        teks: "Menurut cerita yang diwariskan secara turun-temurun, Sumber Waras ditemukan ketika Kiai Zakaria (Mbah Jugo) bersama Kanjeng Raden Mas Iman Sujono melakukan pembukaan hutan atau babat alas di kawasan lereng Gunung Kawi. Dalam kegiatan tersebut, mereka menemukan mata air yang memancar deras dari sela-sela bebatuan. Melihat manfaat dan kejernihan airnya, keduanya kemudian memberi nama mata air tersebut sebagai Sumber Waras, yang mengandung makna sebagai sumber kehidupan dan kesehatan.",
      },
      {
        teks: "Aliran Sumber Waras kemudian bertemu dengan aliran sungai lain sehingga membentuk sebuah tempuran atau pertemuan dua aliran sungai. Sejak saat itu, kawasan ini dimanfaatkan sebagai tempat pemandian oleh Kanjeng Raden Mas Iman Sujono beserta para pengikutnya. Hingga sekarang, pemandian tersebut masih digunakan dan menjadi salah satu bagian penting dari kawasan Gunung Kawi.",
      },
      {
        subjudul: "Tradisi yang Tetap Dilestarikan",
        teks: "Bagi masyarakat Wonosari, Sumber Waras bukan sekadar mata air, tetapi juga memiliki nilai budaya dan spiritual yang sangat tinggi. Berbagai tradisi adat masih dilaksanakan di tempat ini sebagai bentuk penghormatan terhadap warisan leluhur. Salah satu tradisi yang masih dijalankan adalah memandikan ibu hamil yang memasuki usia kandungan tujuh bulan sebagai bagian dari rangkaian doa keselamatan menjelang persalinan. Selain itu, bayi yang baru pertama kali menginjakkan kaki di tanah serta anak laki-laki yang akan menjalani khitan juga dimandikan di Sumber Waras.",
      },
      {
        teks: "Prosesi tersebut biasanya diiringi lantunan selawat serta tabuhan jidor atau rebana. Tradisi ini mengandung doa dan harapan agar ibu diberikan kelancaran saat melahirkan, bayi tumbuh sehat dan kuat, serta anak yang dikhitan kelak menjadi pribadi yang saleh, berbakti kepada orang tua, menjunjung tinggi adab, sopan santun, dan menghormati sesama.",
      },
      {
        subjudul: "Jejak Sejarah pada Masa Kolonial",
        teks: "",
      },
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/sumber-waras-2.jpg" },
        ],
      },
      {
        teks: "Selain memiliki nilai budaya, Sumber Waras juga menyimpan bukti sejarah pemanfaatan sumber daya air sejak masa kolonial Belanda. Dahulu, di kawasan ini terdapat sebuah dongki, yaitu pompa air manual yang didatangkan dari Belanda untuk mengalirkan air ke daerah yang lebih tinggi. Meskipun saat ini pompa tersebut sudah tidak berfungsi, keberadaannya masih tetap dipertahankan sebagai saksi bisu perjalanan sejarah masyarakat setempat. Benda bersejarah ini menjadi pengingat bahwa Sumber Waras telah lama dimanfaatkan sebagai sumber kehidupan bagi masyarakat sekitar.",
      },
      {
        teks: "Pada masa lalu, aliran air dari Sumber Waras juga pernah dimanfaatkan sebagai pembangkit listrik tenaga air sederhana yang digunakan untuk menerangi kawasan Pendopo Pesarehan Kiai Zakaria (Mbah Jugo) dan Kanjeng Raden Mas Iman Sujono.",
      },
      {
        subjudul: "Sumber Waras dan Tradisi Ziarah",
        teks: "Hingga kini, Sumber Waras memiliki keterkaitan erat dengan tradisi ziarah religi di kawasan Pesarehan Gunung Kawi. Banyak peziarah yang terlebih dahulu membersihkan diri di Sumber Waras sebelum melaksanakan ziarah. Bagi umat Islam, prosesi tersebut dilakukan dengan mandi dan berwudu sebagai bentuk penyucian diri sebelum beribadah.",
      },
      {
        teks: "Sebagian masyarakat juga meyakini bahwa air Sumber Waras dapat menjadi sarana ikhtiar untuk memperoleh kesehatan, ketenangan batin, serta keberkahan dalam kehidupan. Beberapa tradisi seperti ruwat sengkala, tolak bala, maupun malukat dilakukan oleh sebagian masyarakat sebagai bagian dari tradisi budaya yang berkembang secara turun-temurun. Dalam keyakinan masyarakat setempat, seluruh harapan dan doa tersebut tetap dipanjatkan kepada Tuhan Yang Maha Esa.",
      },
      {
        subjudul: "Warisan Alam dan Budaya yang Perlu Dijaga",
        teks: "Sumber Waras merupakan perpaduan antara keindahan alam, nilai sejarah, serta kekayaan tradisi yang telah diwariskan dari generasi ke generasi. Keberadaan mata air ini tidak hanya memenuhi kebutuhan masyarakat akan air bersih, tetapi juga menjadi bagian penting dari identitas budaya Dusun Wonosari dan kawasan Gunung Kawi.",
      },
      {
        teks: "Melalui pelestarian Sumber Waras, masyarakat berharap nilai-nilai sejarah, budaya, dan kearifan lokal yang terkandung di dalamnya dapat terus dikenalkan kepada generasi mendatang sekaligus menjadi daya tarik wisata budaya dan religi yang tetap menghormati tradisi serta kelestarian alam.",
      },
      {
        subjudul: "Sumber Keterangan:",
        teks: "Wadri Suyono, Solikin Sailin, Tukiman, Sukomo, Iwan Suryandoko, Antok J. (Kepala Dusun), dan Sunarto.",
      },
      {
        subjudul: "Penyusun Data Awal:",
        teks: "Herman Shen.",
      },
    ],
  },
  {
    id: 6,
    judul: "Sumber Urip: Mata Air Kehidupan di Lereng Gunung Kawi",
    jenis: "Filosofi & Tradisi Spiritual",
    ringkasan: "Bersama Sumber Waras dan Sumber Manggis, Sumber Urip membentuk tritunggal mata air Gunung Kawi. Filosofinya: kepala, tubuh, dan kaki — perjalanan dari kesehatan, kehidupan, hingga kebahagiaan.",
    ikon: "🔮",
    konten: [
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/sumber-urip-1.jpg" },
        ],
      },
      {
        teks: "Di lereng Gunung Kawi, setiap mata air tidak hanya dipandang sebagai sumber kehidupan, tetapi juga menyimpan makna filosofis yang diwariskan secara turun-temurun. Salah satu di antaranya adalah Sumber Urip, sebuah mata air yang dipercaya sebagai simbol kehidupan. Bersama Sumber Waras dan Sumber Manggis, ketiga sumber ini membentuk satu kesatuan yang tidak dapat dipisahkan, baik secara alamiah maupun dalam tradisi spiritual masyarakat setempat. Menurut penuturan para sesepuh, Sumber Urip ditemukan oleh Kyai Zakaria (Eyang Djoego) bersama Raden Mas Imam Soedjono ketika membuka kawasan lereng Gunung Kawi. Penemuan mata air ini kemudian menjadi bagian penting dari perkembangan kawasan pesarean yang hingga kini dikenal sebagai salah satu tujuan ziarah spiritual di Malang.",
      },
      {
        teks: "Masyarakat memiliki sebuah filosofi yang sederhana namun sarat makna mengenai ketiga sumber tersebut. Jika diibaratkan sebagai tubuh manusia, Sumber Waras merupakan kepala, Sumber Urip adalah tubuh, dan Sumber Manggis menjadi kaki. Filosofi ini kemudian melahirkan ungkapan yang masih sering disampaikan oleh para juru kunci dan peziarah, 'Hidup belum tentu sehat, tetapi jika sehat sudah pasti hidup, kemudian menikmati manisnya kehidupan.' Ungkapan tersebut menggambarkan perjalanan manusia yang dimulai dari kesehatan, memperoleh kehidupan yang baik, hingga mencapai kebahagiaan. Secara fisik, Sumber Urip memiliki mata airnya sendiri. Namun, aliran air dari Sumber Waras juga bermuara dan menyatu dengan aliran Sumber Urip. Fenomena ini dapat dijelaskan secara ilmiah karena air dari daerah yang lebih tinggi secara alami akan mengalir menuju wilayah yang lebih rendah. Oleh sebab itu, meskipun kedua sumber memiliki mata air yang berbeda, alirannya akhirnya bertemu menjadi satu kesatuan.",
      },
      {
        teks: "Di kawasan Sumber Urip juga berdiri sebuah musala yang dibangun sekitar tahun 2022 oleh Jamaah Siddiqiyah. Kehadiran musala tersebut menjadi fasilitas ibadah bagi para peziarah maupun masyarakat yang datang berkunjung. Menariknya, di salah satu ruangan di kawasan ini juga terdapat altar Dewi Kwan Im, Dewa Panglima Kwan Kong, serta Dewa Bumi Tien Kong. Keberadaan altar tersebut menunjukkan bagaimana kawasan Gunung Kawi sejak dahulu menjadi ruang perjumpaan berbagai tradisi dan kepercayaan yang hidup berdampingan. Bagi sebagian peziarah yang menjalankan tradisi spiritual, penyucian diri di Sumber Urip tidak berhenti hanya dengan mandi di mata air. Setelah membersihkan diri, mereka biasanya memasuki ruangan yang terdapat altar untuk berdoa atau bermeditasi sebagai bentuk penyucian batin. Prosesi tersebut kemudian dilanjutkan dengan berziarah ke Pesarean Gunung Kawi, yaitu padepokan atau rumah Eyang Djoego serta makam Raden Mas Imam Soedjono.",
      },
      {
        teks: "Menurut kepercayaan yang berkembang secara turun-temurun, mandi di mata air tanpa melanjutkan ziarah ke pesarean dianggap belum menyempurnakan rangkaian spiritual yang telah diwariskan oleh para leluhur. Namun demikian, masyarakat juga meyakini bahwa seseorang tetap diperbolehkan melakukan penyucian diri hanya di satu mata air, selama tetap mengunjungi pesarean dengan niat yang tulus. Bagi mereka, yang terpenting adalah keyakinan, keikhlasan, dan penghormatan terhadap nilai-nilai yang telah diwariskan. Sebagian peziarah bahkan memilih menjalankan rangkaian penyucian diri secara lengkap dengan mengunjungi ketiga sumber mata air. Urutan yang umum dilakukan dimulai dari Sumber Waras sebagai simbol kepala, kemudian menuju Sumber Urip sebagai lambang tubuh, dan diakhiri di Sumber Manggis sebagai simbol kaki. Ada pula yang melakukannya dari arah sebaliknya, yakni dimulai dari Sumber Manggis, dilanjutkan ke Sumber Urip, kemudian berakhir di Sumber Waras. Kedua urutan tersebut sama-sama dipercaya memiliki makna penyempurnaan perjalanan spiritual, selama akhirnya ditutup dengan berziarah ke Pesarean Gunung Kawi.",
      },
      {
        teks: "Terlepas dari berbagai tradisi yang berkembang, Sumber Urip tetap menjadi mata air yang memberikan manfaat nyata bagi kehidupan masyarakat. Airnya yang jernih terus mengalir tanpa henti, menjadi sumber kehidupan sekaligus menyimpan warisan budaya yang memperlihatkan bagaimana alam, sejarah, dan nilai-nilai spiritual berpadu dalam satu kawasan. Di sinilah Sumber Urip tidak hanya dimaknai sebagai tempat mengalirnya air, melainkan juga sebagai pengingat bahwa kehidupan, kesehatan, dan kebahagiaan merupakan sebuah perjalanan yang saling berkaitan.",
      },
    ],
  },
  {
    id: 7,
    judul: "Bari'an Saparan: Tradisi Tolak Bala yang Menjaga Kebersamaan Masyarakat Dusun Segelan",
    jenis: "Tradisi Adat",
    ringkasan: "Setiap tanggal 1 Sapar, warga berkumpul di perempatan membawa nasi ambengan dalam Takir Plontang — wadah daun pisang berbentuk perahu bermakna tatake pikir (pikiran jernih) sebagai ikhtiar tolak bala.",
    ikon: "🙏",
    konten: [
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/barian-saparan-1.jpg" },
        ],
      },
      {
        teks: "Di Dusun Segelan, pergantian bulan dalam penanggalan Jawa tidak hanya menjadi penanda waktu, tetapi juga menjadi momen untuk mempererat hubungan antar masyarakat melalui sebuah tradisi yang telah diwariskan secara turun-temurun, yaitu Bari'an Saparan. Tradisi ini merupakan salah satu warisan budaya yang hingga kini masih terus dilestarikan sebagai bentuk rasa syukur sekaligus doa bersama agar masyarakat senantiasa diberikan keselamatan. Istilah bari'an diyakini berasal dari kata barokah atau berkah. Sesuai dengan namanya, tradisi ini dilaksanakan untuk memohon keberkahan kepada Tuhan Yang Maha Esa saat memasuki bulan Sapar, yaitu bulan kedua dalam kalender Jawa. Dalam kepercayaan masyarakat Jawa, bulan Sapar sering dipandang sebagai bulan yang penuh ujian. Masyarakat meyakini bahwa pada bulan ini berbagai musibah, wabah penyakit, maupun bala dapat lebih mudah terjadi. Oleh karena itu, Bari'an Saparan dilaksanakan sebagai ikhtiar spiritual untuk memohon perlindungan dan keselamatan.",
      },
      {
        teks: "Pelaksanaan Bari'an Saparan biasanya dilakukan pada tanggal 1 Sapar. Sejak pagi hari, setiap keluarga berkumpul di perempatan jalan utama Dusun Segelan dengan membawa berbagai hidangan tradisional. Makanan yang dibawa umumnya berupa nasi ambengan, tumpeng, beserta aneka lauk-pauk yang kemudian didoakan bersama. Setelah doa selesai dipanjatkan, makanan tersebut dinikmati secara bersama-sama atau dibagikan kepada warga sebagai simbol rasa syukur dan kebersamaan. Lebih dari sekadar ritual adat, Bari'an Saparan menjadi ruang silaturahmi yang mempertemukan seluruh lapisan masyarakat. Suasana hangat dan penuh kekeluargaan begitu terasa ketika warga duduk berdampingan, saling berbagi makanan, serta memanjatkan doa bersama. Tradisi ini mencerminkan nilai gotong royong, solidaritas sosial, dan semangat hidup berdampingan yang masih terjaga kuat di tengah masyarakat Dusun Segelan. Melalui Bari'an Saparan, masyarakat tidak hanya berharap terhindar dari berbagai mara bahaya, tetapi juga mensyukuri nikmat kesehatan, keselamatan, dan rezeki yang telah diberikan.",
      },
      {
        subjudul: "Takir Plontang: Wadah Sederhana Sarat Makna",
        teks: "Salah satu unsur penting dalam pelaksanaan Bari'an Saparan adalah Takir Plontang, yaitu wadah tradisional yang terbuat dari daun pisang dan dibentuk menyerupai perahu dengan empat sisi. Bagian sudutnya disematkan janur atau daun kelapa muda sebagai pengikat sekaligus pelengkap bentuknya. Hingga kini, Takir Plontang masih digunakan sebagai bagian dari perlengkapan utama (ubo rampe) dalam ritual Bari'an Saparan. Menurut filosofi yang hidup di masyarakat, Takir Plontang mengandung makna yang mendalam. Istilah tatake pikir dimaknai sebagai pengingat agar manusia senantiasa menjaga pikiran yang jernih dan hati yang bersih dalam menjalani kehidupan. Sementara itu, janur yang menghiasi takir dimaknai sebagai harapan agar manusia selalu memperoleh rahmat, petunjuk, dan cahaya Ilahi dari Gusti Kang Akaryo Jagad, Sang Pencipta alam semesta.",
      },
      {
        teks: "",
        gambar: [
          { src: "/images/folklore/barian-saparan-2.jpg" },
        ],
      },
      { 
        teks: "Di dalam Takir Plontang diisi nasi kuning beserta berbagai lauk-pauk sebagai simbol rasa syukur atas rezeki yang telah diterima. Jumlah takir yang dibawa setiap keluarga biasanya disesuaikan dengan jumlah anggota keluarga. Menurut kepercayaan masyarakat, setiap takir menjadi lambang doa dan harapan agar seluruh anggota keluarga senantiasa diberikan keselamatan, dijauhkan dari berbagai rintangan, cobaan, penyakit, serta segala bentuk mara bahaya. Di balik bentuknya yang sederhana, Takir Plontang tidak hanya menjadi wadah makanan, tetapi juga menjadi simbol kebersamaan, doa, dan harapan yang diwariskan dari generasi ke generasi. Kehadirannya dalam setiap pelaksanaan Bari'an Saparan memperlihatkan bagaimana masyarakat Dusun Segelan mampu menjaga tradisi leluhur sambil mempertahankan nilai-nilai spiritual, gotong royong, dan rasa syukur yang menjadi bagian penting dari kehidupan mereka.",
      },
      // { 
      //   teks: "",
      // },
    ],
  },
];


export const dongengAnak: {
  id: number; judul: string; usia: string; ringkasan: string;
  linkBaca: string; ikon: string;
}[] = [
  {
    id: 1,
    judul: "Dongeng dari Batu Gilang",
    usia: "7–12 tahun",
    ringkasan:
      "Adi, seorang anak Dusun Segelan, penasaran dengan bangunan tua yang selalu " +
      "ia lewati. Bersama Kakek Kasin, ia mendengar kisah Mbah Suradi Pusponegoro " +
      "yang membuka hutan dan mendirikan kampung dengan penuh keberanian. Dari " +
      "cerita itu Adi belajar bahwa menghargai sejarah dimulai dari hal-hal sederhana " +
      "— seperti menyapu halaman.",
    linkBaca: "https://drive.google.com/file/d/GANTI_ID_DONGENG_1/view",
    ikon: "🪨",
  },
];

// ── ARTIKEL ──────────────────────────────────────────────────────────────
// Cards yang mengarah ke PDF di Google Drive
// Cara dapat linkGDrive: upload PDF ke Drive → klik kanan → Share →
// "Anyone with the link" → Copy link → paste di sini
export const artikel = [
  {
    id:        1,
    judul:     "Dusun Segelan: Sejarah Lahirnya Sebuah Permukiman di Lereng Gunung Kawi",
    penulis:   "Tim KKN UM BBM 2026",
    tanggal:   "2026",
    kategori:  "Sejarah",
    ringkasan:
      "Dari hutan lebat bekas perkebunan kopi Tuan Bonen di era kolonial, " +
      "hingga penyegelan pascakemerdekaan yang melahirkan nama 'Segelan' — " +
      "kisah para perintis yang membuka lahan, menanam ubi jalar, dan " +
      "membangun permukiman secara bergotong royong di lereng Gunung Kawi.",
    linkGDrive: "https://drive.google.com/file/d/1Vvd035V1R9R9pUahCCqC_wot2xmldJAW/view?usp=drive_link",
    ikon: "📜",
  },
  {
    id:        2,
    judul:     "Menjaga Kilau Batu Gilang",
    penulis:   "Tim KKN UM BBM 2026",
    tanggal:   "2026",
    kategori:  "Sejarah",
    ringkasan:
      "Punden Batu Gilang menyimpan kisah Mbah Suradi Pusponegara, " +
      "tokoh yang diduga keturunan pengikut Laskar Diponegoro, yang membuka " +
      "hutan Dusun Segelan. Namanya berasal dari batu-batu yang berkilau " +
      "(gilang-gilang). Setiap Jumat Legi dan Senin Kliwon bulan Selo warga " +
      "mengadakan selamatan di tempat ini.",
    linkGDrive: "https://drive.google.com/file/d/1d7wdGhd7nY920M-gAD780taKQkkTC1Ru/view?usp=drive_link",
    ikon: "✨",
  },
  {
    id:        3,
    judul:     "Situs Candi Pasar: Jejak Peradaban yang Tersembunyi di Lereng Gunung Kawi",
    penulis:   "Tim KKN UM BBM 2026",
    tanggal:   "2026",
    kategori:  "Sejarah",
    ringkasan:
      "Hamparan batu andesit dan gundukan tanah di lereng Gunung Kawi yang " +
      "diduga berkaitan dengan masa kerajaan. Ada cerita sebuah batu besar yang " +
      "kembali ke tempat asalnya setelah dipindahkan. Setiap bulan Suro, kawasan " +
      "ini menjadi tempat tradisi Bersih Dusun masyarakat.",
    linkGDrive: "https://drive.google.com/file/d/1tfiKsRSXdlw5YkZJ-pzpW69eYefz7Dei/view?usp=drive_link",
    ikon: "🏛️",
  },
  {
    id:        4,
    judul:     "Dua Sumber Mata Air di Dusun Segelan: Sumber Mbah Brojonolo dan Sumber Mbah Painah",
    penulis:   "Tim KKN UM BBM 2026",
    tanggal:   "2026",
    kategori:  "Budaya",
    ringkasan:
      "Dua mata air yang menghidupi Dusun Segelan dan desa sekitarnya. " +
      "Sumber Mbah Painah menyimpan misteri: seseorang yang mandi tiba-tiba " +
      "menghilang saat ditanya namanya. Mahasiswa KKN UM BBM 2026 turut " +
      "merevitalisasi kedua sumber ini bersama Kepala Dusun Segelan.",
    linkGDrive: "https://drive.google.com/file/d/1pCS50dh1Y3w1XTmMzfuZv-fzNsapwOME/view?usp=drive_link",
    ikon: "💧",
  },
  {
    id:        5,
    judul:     "Sumber Waras: Mata Air Bersejarah Simbol Kehidupan",
    penulis:   "Tim KKN UM BBM 2026",
    tanggal:   "2026",
    kategori:  "Budaya",
    ringkasan:
      "Ditemukan oleh Kiai Zakaria (Mbah Jugo) dan Kanjeng Raden Mas Iman Sujono " +
      "saat membabat hutan lereng Gunung Kawi. Selain terapi refleksi batu kerikil, " +
      "Sumber Waras menjadi tempat tradisi memandikan ibu hamil 7 bulan, bayi, " +
      "dan anak yang akan dikhitan — diiringi selawat dan tabuhan jidor.",
    linkGDrive: "https://drive.google.com/file/d/1BqOGp5LROadlymCEwcqqKKdnKxScvDs2/view?usp=drive_link",
    ikon: "🌊",
  },
  {
    id:        6,
    judul:     "Sumber Urip: Mata Air Kehidupan di Lereng Gunung Kawi",
    penulis:   "Tim KKN UM BBM 2026",
    tanggal:   "2026",
    kategori:  "Budaya",
    ringkasan:
      "Bersama Sumber Waras dan Sumber Manggis, Sumber Urip membentuk tritunggal " +
      "mata air dengan filosofi mendalam: kepala, tubuh, dan kaki manusia. " +
      "Ungkapan para juru kunci: 'Hidup belum tentu sehat, tapi jika sehat sudah " +
      "pasti hidup, kemudian menikmati manisnya kehidupan.'",
    linkGDrive: "https://drive.google.com/file/d/1fm_acKpq74I7QhpaiusuguJe5ywyUaT-/view?usp=drive_link",
    ikon: "🔮",
  },
  {
    id:        7,
    judul:     "Pemandian Eyang Djoego: Jejak Spiritual di Sumber Manggis",
    penulis:   "Tim KKN UM BBM 2026",
    tanggal:   "2026",
    kategori:  "Budaya",
    ringkasan:
      "Mata air yang muncul dari batu besar saat diketuk Raden Mas Imam Soedjono " +
      "ketika membuka hutan bersama gurunya, Eyang Djoego. Pohon manggis yang " +
      "ditanam di dekatnya menjadi asal nama tempat ini. Eyang Djoego wafat 1871, " +
      "dimakamkan di Pesarean Gunung Kawi tak jauh dari sumber ini.",
    linkGDrive: "https://drive.google.com/file/d/1WbHzOMKfo_pWEUqrE74AlOjdMgBeDuHK/view?usp=drive_link",
    ikon: "🌿",
  },
  {
    id:        8,
    judul:     "Bari'an Saparan: Tradisi Tolak Bala yang Menjaga Kebersamaan",
    penulis:   "Tim KKN UM BBM 2026",
    tanggal:   "2026",
    kategori:  "Budaya",
    ringkasan:
      "Setiap 1 Sapar, warga Dusun Segelan berkumpul di perempatan membawa " +
      "hidangan dalam Takir Plontang — wadah daun pisang berbentuk perahu. " +
      "'Tatake pikir' bermakna menjaga pikiran jernih; janur bermakna harapan " +
      "akan cahaya Ilahi. Tradisi ini menjaga solidaritas dan gotong royong warga.",
    linkGDrive: "https://drive.google.com/file/d/1oA1RlHm6WsC2Tsukg6qDh5S_6DkjITWX/view?usp=drive_link",
    ikon: "🙏",
  },
];

export const artikelKategoriWarna: Record<string, string> = {
  "Sejarah":   "bg-amber-100 text-amber-800",
  "Budaya":    "bg-orange-100 text-orange-800",
  "Pendidikan":"bg-blue-100 text-blue-800",
  "Kesehatan": "bg-green-100 text-green-800",
  "Lingkungan":"bg-teal-100 text-teal-800",
  "Umum":      "bg-gray-100 text-gray-700",
};

// ── NAVIGASI ─────────────────────────────────────────────────────────────
// Digunakan oleh Navbar — sesuai dengan halaman yang ada
export const navLinks = [
  { href: "/",                 label: "Beranda" },
  { href: "/asal-usul",        label: "Asal Usul Dusun" },
  { href: "/folklore",         label: "Folklore Dusun" },
  { href: "/dongeng-anak",     label: "Dongeng Anak" },
  { href: "/dokumentasi-umbbm",label: "Dokumentasi UMBBM" },
  { href: "/artikel",          label: "Artikel" },
];
