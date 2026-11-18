/* ==========================================================================
   data.js — seluruh konten portofolio (EN + ID).
   Edit konten di sini; tampilan & logika ada di index.html / styles.css / script.js.
   Aturan: hanya isi dari PDF portofolio & website lama. Kosongkan field link
   (url: "") bila belum ada — tombolnya otomatis disembunyikan.
   ========================================================================== */

const L = (en, id) => ({ en, id });

/* ---------- Identitas & kontak ---------- */
const CONFIG = {
  name: "Talitha Rahmadewati Witanto",
  degree: "S.Si.D.",
  // PDF memakai "talitharhmade", website lama memakai "talitharhmd" — pastikan mana yang aktif.
  email: "talitharhmade@gmail.com",
  location: L("Surabaya, East Java, Indonesia", "Surabaya, Jawa Timur, Indonesia"),
  availability: L("Mon–Fri, 7 AM–5 PM", "Senin–Jumat, 07.00–17.00"),
  campusLogo: "img/telkom-logo",        // logo kampus (opsional)
  showEmptyLinks: true,                 // true: tombol yang linknya belum diisi tampil redup. Ubah ke false saat semua link sudah diisi
  photo: "img/profile",                 // ekstensi dicoba otomatis: png/jpg/jpeg/webp
  files: {
    cv: "files/Talitha-Rahmadewati-CV.pdf",
    portfolio: "files/Talitha-Rahmadewati-Portfolio.pdf"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/talitha-rahmadewati-w",
    github: "https://github.com/talitharhmd",
    medium: "https://medium.com/@talitharhmd",
    instagram: "https://www.instagram.com/tatarhmde/"
  },
  roles: ["Data Analyst", "Business Intelligence", "Data Visualization", "Machine Learning"]
};

/* ---------- Tools (klik untuk melihat proyek yang memakainya) ---------- */
const TOOLS = [
  { group: L("Programming & development", "Pemrograman & pengembangan"), items: [
    { n: "Python", slug: "python", c: "3776AB" },
    { n: "MySQL", slug: "mysql", c: "4479A1" },
    { n: "Streamlit", slug: "streamlit", c: "FF4B4B" },
    { n: "JavaScript", slug: "javascript", c: "F7DF1E" },
    { n: "Java", slug: "openjdk", c: "ED8B00" },
    { n: "VS Code", slug: "visualstudiocode", c: "007ACC" },
    { n: "Git", slug: "git", c: "F05032" },
    { n: "Jupyter", slug: "jupyter", c: "F37626" },
    { n: "Google Colab", slug: "googlecolab", c: "F9AB00" }
  ]},
  { group: L("BI & visualization", "BI & visualisasi"), items: [
    { n: "Looker Studio", slug: "looker", c: "4285F4" },
    { n: "Power BI", slug: "powerbi", c: "F2C811" },
    { n: "Tableau", slug: "tableau", c: "E97627" },
    { n: "Google Apps Script", slug: "googleappsscript", c: "4285F4" },
    { n: "Figma", slug: "figma", c: "F24E1E" },
    { n: "Canva", slug: "canva", c: "00C4CC" }
  ]},
  { group: L("Office & enterprise", "Office & enterprise"), items: [
    { n: "Microsoft Office", k: ["Excel"], slug: "microsoftoffice", c: "D83B01" },
    { n: "Google Sheets", slug: "googlesheets", c: "34A853" },
    { n: "SAP", slug: "sap", c: "0FAAFF" }
  ]},
  { group: L("Data engineering & APIs", "Data engineering & API"), items: [
    { n: "Pentaho", slug: "pentaho", c: "1C7ED6" },
    { n: "Postman", slug: "postman", c: "FF6C37" },
    { n: "MongoDB", slug: "mongodb", c: "47A248" },
    { n: "NetBeans", slug: "apachenetbeanside", c: "1B6AC6" }
  ]}
];

const HARD_SKILLS = [
  L("Web scraping", "Web scraping"),
  L("Data cleaning & preprocessing", "Data cleaning & preprocessing"),
  L("Exploratory data analysis (EDA)", "Exploratory data analysis (EDA)"),
  L("Statistical analysis", "Analisis statistik"),
  L("Data transformation & validation", "Transformasi & validasi data"),
  L("Data visualization", "Visualisasi data"),
  L("Dashboard development", "Pengembangan dashboard"),
  L("SQL querying", "SQL querying"),
  L("ETL & data warehousing", "ETL & data warehousing"),
  L("Machine learning", "Machine learning"),
  L("Natural language processing (NLP)", "Natural language processing (NLP)")
];

const SOFT_SKILLS = [
  L("Analytical thinking", "Berpikir analitis"),
  L("Problem-solving", "Pemecahan masalah"),
  L("Communication", "Komunikasi"),
  L("Cross-functional collaboration", "Kolaborasi lintas fungsi"),
  L("Adaptability", "Adaptabilitas"),
  L("Time management", "Manajemen waktu"),
  L("Critical thinking", "Berpikir kritis"),
  L("Process improvement", "Perbaikan proses")
];

/* ---------- Pendidikan ---------- */
const EDUCATION = {
  school: "Telkom University Surabaya",
  degree: L("Data Science, Bachelor's degree (S.Si.D.)", "Sains Data, S1 (S.Si.D.)"),
  years: "2022 – 2026",
  courses: [
    L("Algorithms & Data Structures", "Algoritma & Struktur Data"),
    L("Data Wrangling", "Data Wrangling"),
    L("Statistics", "Statistika"),
    L("Data Analysis & Exploration", "Analisis & Eksplorasi Data"),
    L("Data Warehouse", "Data Warehouse"),
    L("Data Visualization", "Visualisasi Data"),
    L("Time Series Analysis", "Analisis Deret Waktu"),
    L("Data Science for Society", "Sains Data untuk Masyarakat"),
    L("Industrial Data Visualization", "Visualisasi Data Industri"),
    L("Text Mining", "Text Mining")
  ],
  highlights: [
    { t: L("Leadership & mentoring", "Kepemimpinan & mentoring"),
      d: L("Guided 45+ new students during campus orientation (PKKMB Dewangkara Maetala 2024 and Balwana Abhipraya); the group won the “**Most Compact Team**” award.",
           "Membimbing 45+ mahasiswa baru selama orientasi kampus (PKKMB Dewangkara Maetala 2024 dan Balwana Abhipraya); tim meraih penghargaan “**Most Compact Team**”.") },
    { t: L("Public speaking & training", "Public speaking & pelatihan"),
      d: L("Spoke to 150+ new students and led a hands-on Looker Studio workshop for vocational students at SMKN 10 Surabaya.",
           "Menjadi pembicara bagi 150+ mahasiswa baru dan memandu workshop Looker Studio langsung untuk siswa SMK di SMKN 10 Surabaya.") }
  ]
};

/* ---------- Pengalaman ---------- */
const EXPERIENCE = {
  professional: [
    {
      role: "Data Analyst Intern",
      org: "PT PAL Indonesia",
      unit: L("Asset & Infrastructure Optimization Dept., MATRA & K3LH Division", "Departemen Optimasi Aset & Infrastruktur, Divisi MATRA & K3LH"),
      period: L("Sep 2025 – Jan 2026", "Sep 2025 – Jan 2026"),
      loc: L("Surabaya, Indonesia", "Surabaya, Indonesia"),
      projects: ["pal"],
      metrics: [
        { v: "500+", l: L("asset records integrated", "data aset terintegrasi") },
        { v: "−40%", l: L("reporting time", "waktu pelaporan") },
        { v: "−85%", l: L("recording errors", "kesalahan pencatatan") }
      ],
      bullets: L([
        "Integrated **500+ rental asset records** (2020–2025) from six asset categories into a centralized database to improve accessibility and consistency.",
        "Cleaned, standardized and validated historical data to support asset monitoring, reporting and more reliable rental-value analysis.",
        "Built a **Looker Studio dashboard** with KPI visuals, contract progress tracking, geographic mapping and an **Early Warning System**, cutting reporting time by **40%**.",
        "Built a **Google Apps Script data-entry app** with input validation and automatic rental calculation, reducing recording errors by **85%**."
      ], [
        "Mengintegrasikan **500+ data aset sewa** periode 2020–2025 dari enam kategori aset ke dalam database terpusat untuk meningkatkan aksesibilitas dan konsistensi data.",
        "Melakukan data cleaning, standardisasi, dan validasi terhadap data historis untuk mendukung asset monitoring, pelaporan, dan analisis nilai sewa yang lebih andal.",
        "Mengembangkan **dashboard Looker Studio** dengan visualisasi KPI, pemantauan progres kontrak, pemetaan geografis, dan **Early Warning System**, sehingga waktu pelaporan berkurang **40%**.",
        "Membangun **aplikasi pencatatan data berbasis Google Apps Script** dengan validasi input dan perhitungan sewa otomatis, sehingga kesalahan pencatatan berkurang **85%**."
      ]),
      logo: "img/logos/pal", mono: "PAL", doc: "https://www.linkedin.com/posts/talitha-rahmadewati-witanto_internshipjourney-ptpalindonesia-dataanalyst-ugcPost-7427988810409594881-NJy5/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7427988811407806464&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0QiPQBlWb7ML07YmVguzvF6rjouWAkhhU",
      // foto: path saja, atau { src, cap, pos } (pos = fokus potongan di kartu, mis. "50% 47%")
      photos: [{ src: "img/exp/pal-1", pos: "50% 47%" }, "img/exp/pal-2", "img/exp/pal-3"]
    },
    {
      role: "Data Analyst Intern",
      org: "KPU Kota Surabaya",
      unit: L("Rendatin Division (Planning, Data & Information)", "Divisi Rendatin (Perencanaan, Data, dan Informasi)"),
      period: L("Jun – Aug 2025", "Jun – Agu 2025"),
      loc: L("Surabaya, Indonesia", "Surabaya, Indonesia"),
      projects: ["kpu"],
      metrics: [
        { v: "1,000+", l: L("election records structured", "data pemilu distrukturkan") },
        { v: "−90%", l: L("data inconsistencies", "inkonsistensi data") },
        { v: "31", l: L("districts covered", "kecamatan tercakup") }
      ],
      bullets: L([
        "Converted **1,000+ election records** from PDF documents into a structured dataset, reducing data inconsistencies by about **90%**.",
        "Cleaned, transformed and validated data with Python, Excel and Google Sheets; reported data validity reached **95%**.",
        "Built an **interactive Looker Studio dashboard** covering voters, voter participation, ballots and election results across 31 districts.",
        "Refined the dashboard from KPU feedback. It was **accepted and implemented at KPU Kota Surabaya** to support election monitoring and public information, with potential use in the 2029 election."
      ], [
        "Mengolah **1.000+ data pemilu** dari dokumen PDF menjadi dataset terstruktur, sehingga inkonsistensi data berkurang sekitar **90%**.",
        "Melakukan data cleaning, transformasi, dan validasi menggunakan Python, Excel, dan Google Sheets, dengan tingkat validitas data yang dilaporkan mencapai **95%**.",
        "Mengembangkan **dashboard interaktif Looker Studio** yang mencakup data pemilih, partisipasi pemilih, surat suara, dan hasil pemilu di 31 kecamatan.",
        "Menyempurnakan dashboard berdasarkan masukan KPU. Dashboard kemudian **diterima dan diimplementasikan di KPU Kota Surabaya** untuk mendukung pemantauan pemilu dan penyediaan informasi publik, dengan potensi pemanfaatan pada Pemilu 2029."
      ]),
      logo: "img/logos/kpu", mono: "KPU", doc: "https://www.linkedin.com/posts/talitha-rahmadewati-witanto_kpu-dataanalytics-dataanalyst-activity-7370703579919298561-rlv9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0QiPQBlWb7ML07YmVguzvF6rjouWAkhhU",
      photos: ["img/exp/kpu-1", "img/exp/kpu-2", "img/exp/kpu-3"]
    },
    {
      role: "Mentee, Machine Learning Operations",
      org: "RISTEK Fasilkom UI",
      unit: L("SISTECH 2025 · MLOps track, Faculty of Computer Science, Universitas Indonesia", "SISTECH 2025 · jalur MLOps, Fakultas Ilmu Komputer, Universitas Indonesia"),
      period: L("Jun – Aug 2025", "Jun – Agu 2025"),
      loc: L("Depok, Indonesia · Remote", "Depok, Indonesia · Jarak jauh"),
      kind: L("Mentorship program", "Program mentorship"),
      projects: ["growpath"],
      metrics: [
        { v: "1 of 20", l: L("mentees selected", "mentee terpilih") },
        { v: "800+", l: L("applicants", "pendaftar") }
      ],
      bullets: L([
        "Selected as **1 of 20 mentees from 800+ applicants** for the **Machine Learning Operations** track of the SISTECH mentorship program.",
        "Prepared and cleaned **text data** so model inputs stayed consistent and reliable before modeling.",
        "Built a **text-based recommender system** with **TF-IDF** and **cosine similarity** to return relevant recommendations.",
        "Deployed the model as a **Flask API** so it could be used in practice, then **tested the API** and checked recommendation outputs to keep performance dependable."
      ], [
        "Terpilih sebagai **1 dari 20 mentee di antara 800+ pendaftar** pada jalur **Machine Learning Operations** program mentorship SISTECH.",
        "Menyiapkan dan membersihkan **data teks** agar input model tetap konsisten dan andal sebelum pemodelan.",
        "Membangun **sistem rekomendasi berbasis teks** dengan **TF-IDF** dan **cosine similarity** untuk menghasilkan rekomendasi yang relevan.",
        "Men-deploy model sebagai **Flask API** agar dapat digunakan secara praktis, lalu **menguji API** dan memeriksa keluaran rekomendasi agar performanya andal."
      ]),
      logo: "img/logos/ristek", mono: "RIS", doc: "",
      photos: [
        { src: "img/exp/ristek-1", cap: L("SISTECH 2025 mentee badge", "Badge mentee SISTECH 2025") },
        { src: "img/exp/ristek-2", cap: L("MLOps Session 3: Advanced Recommenders & Deployment", "MLOps Sesi 3: Advanced Recommenders & Deployment") },
        { src: "img/exp/ristek-3", cap: L("SISTECH Online Pitching Day with the judges", "SISTECH Online Pitching Day bersama para juri") }
      ]
    }
  ],
  leadership: [
    {
      role: L("Workshop Speaker: Google Looker Studio", "Pembicara Workshop: Google Looker Studio"),
      org: "SMKN 10 Surabaya",
      period: L("Nov 2024", "Nov 2024"),
      loc: L("Surabaya, Indonesia", "Surabaya, Indonesia"),
      logo: "img/logos/smkn10", mono: "SMK", doc: "https://lnkd.in/p/g7k-vAwP",
      photos: [{ src: "img/exp/smkn10-1", pos: "50% 67%" }, "img/exp/smkn10-2", "img/exp/smkn10-3"],
      metrics: [
        { v: "~30", l: L("visual communication design students", "siswa Desain Komunikasi Visual") },
        { v: "2", l: L("participants won dashboard awards", "peserta meraih penghargaan dashboard") }
      ],
      bullets: L([
        "Delivered a live **Google Looker Studio workshop** to about **30** Visual Communication Design students.",
        "Explained data visualization in an easy-to-follow way and guided participants in building interactive dashboards; **two participants won awards** for their dashboards."
      ], [
        "Menyampaikan **workshop Google Looker Studio** secara langsung kepada sekitar **30** siswa Desain Komunikasi Visual di SMKN 10 Surabaya.",
        "Memperkenalkan konsep visualisasi data dengan cara yang mudah dipahami serta membimbing peserta membuat dashboard interaktif; **dua peserta berhasil meraih penghargaan** atas dashboard mereka."
      ])
    },
    {
      role: L("Speaker: Data Science Welcome Party", "Pembicara: Welcome Party Data Science"),
      org: "Telkom University Surabaya", logo: "img/telkom-logo",
      period: L("Sep 2024", "Sep 2024"),
      loc: L("Surabaya, Indonesia", "Surabaya, Indonesia"),
      logo: "img/telkom-logo", mono: "TU", doc: "https://www.linkedin.com/in/talitha-rahmadewati-witanto/",
      photos: ["img/exp/welcome-1", "img/exp/welcome-2", "img/exp/welcome-3"],
      metrics: [
        { v: "150+", l: L("new students", "mahasiswa baru") }
      ],
      bullets: L([
        "Spoke at the Data Science 2024 Welcome Party, sharing academic and project experience with **150+ new students**.",
        "Gave practical advice on adapting to campus life and building a project portfolio early, in an interactive session."
      ], [
        "Menjadi pembicara dalam acara Data Science 2024 Welcome Party untuk berbagi pengalaman akademik dan proyek kepada **150+** mahasiswa baru.",
        "Memberikan panduan praktis mengenai adaptasi kehidupan kampus dan membangun portofolio proyek sejak dini, disampaikan secara interaktif."
      ])
    },
    {
      role: L("Facilitator: PKKMB Dewangkara Maetala 2024", "Fasilitator: PKKMB Dewangkara Maetala 2024"),
      org: "Telkom University Surabaya", logo: "img/telkom-logo",
      period: L("May – Sep 2024", "Mei – Sep 2024"),
      loc: L("Surabaya, Indonesia", "Surabaya, Indonesia"),
      logo: "img/telkom-logo", mono: "TU", doc: "https://lnkd.in/p/gpFs6DkJ",
      photos: ["img/exp/pkkmb-1", "img/exp/pkkmb-2", "img/exp/pkkmb-3"],
      metrics: [
        { v: "30+", l: L("new students guided", "mahasiswa baru dibimbing") },
        { v: "~90%", l: L("tasks submitted on time", "tugas tepat waktu") }
      ],
      bullets: L([
        "Guided **30+ new students** through campus orientation: coordinating group activities, tracking assignments and communicating regularly.",
        "Tracked participation and follow-ups in a spreadsheet, so about **90%** of assignments were submitted on time.",
        "Supported a team that earned the “**Most Compact Team**” award."
      ], [
        "Membimbing **30+ mahasiswa** baru selama orientasi kampus melalui koordinasi kegiatan kelompok, pemantauan tugas, dan komunikasi rutin.",
        "Menggunakan spreadsheet untuk memantau partisipasi dan menindaklanjuti tugas, sehingga sekitar **90%** tugas dikumpulkan tepat waktu.",
        "Mendukung kolaborasi tim yang berkontribusi pada perolehan penghargaan “**Most Compact Team**”."
      ])
    },
    {
      role: L("Facilitator: Data Science Orientation 2023", "Fasilitator: Orientasi Data Science 2023"),
      org: "Telkom University Surabaya", logo: "img/telkom-logo",
      period: L("Feb – Jun 2024", "Feb – Jun 2024"),
      logo: "img/telkom-logo", mono: "TU", doc: "",
      photos: ["img/exp/orientasi-1", "img/exp/orientasi-2", "img/exp/orientasi-3"],
      metrics: [
        { v: "15+", l: L("new Data Science students", "mahasiswa baru Sains Data") },
        { v: "~95%", l: L("tasks submitted on time", "tugas tepat waktu") }
      ],
      bullets: L([
        "Guided **15+ new Data Science students** through orientation and helped them settle into campus life.",
        "Managed assignment tracking in a spreadsheet and followed up on submissions, reaching about **95%** on-time submissions; the group earned the “**Most Compact Team**” award."
      ], [
        "Membimbing **15+ mahasiswa** baru Sains Data selama kegiatan orientasi dan membantu proses adaptasi mereka di lingkungan kampus.",
        "Mengelola pemantauan tugas melalui spreadsheet dan menindaklanjuti pengumpulan tugas, sehingga sekitar **95%** tugas dikumpulkan tepat waktu; kelompok meraih penghargaan “**Most Compact Team**”."
      ])
    }
  ]
};

/* ---------- Proyek ----------
   cats: dashboard | viz | ml   (boleh lebih dari satu)
   img : tanpa ekstensi/atau dengan ekstensi; fallback otomatis bila file belum ada
   links.live / links.detail: isi URL bila ada                                        */
/* Proyek tim (opsional): tambahkan di proyek yang dikerjakan berkelompok, contoh:
     team: { size: 4, role: L("Data analyst and dashboard designer", "Analis data dan perancang dashboard"),
             members: [ { n: "Nama Anggota", u: "https://www.linkedin.com/in/..." }, { n: "Nama Lain", u: "" } ] }
   Tanpa field "team", proyek dianggap individu. */
const PROJECTS = [
  {
    id: "pal", featured: true, cats: ["dashboard"],
    type: L("Internship project", "Proyek magang"),
    org: "PT PAL Indonesia", logo: "img/logos/pal", period: L("Sep 2025 – Jan 2026", "Sep 2025 – Jan 2026"),
    // dashboard + aplikasi: 3 halaman dengan keterangan singkat (halaman 1 otomatis jadi cover)
    pages: [
      { src: "img/featured-project/pal-page-1",
        cap: L("Operational monitoring: contract value, active and expiring contracts, asset map and occupancy by category",
               "Monitoring operasional: nilai sewa, kontrak aktif dan akan berakhir, peta sebaran aset, dan okupansi per kategori") },
      { src: "img/featured-project/pal-page-2",
        cap: L("Database view: contract status monitor with tenant, agreement number, rental value and remaining days",
               "Tampilan database: monitor status kontrak dengan penyewa, nomor perjanjian, nilai sewa, dan sisa hari sewa") },
      { src: "img/featured-project/pal-page-3",
        cap: L("Data-entry app (Google Apps Script): upload Excel, search or edit records, save, reset and delete",
               "Aplikasi input data (Google Apps Script): unggah Excel, cari atau ubah data, simpan, reset, dan hapus") }
    ],
    pagesTitle: L("Dashboard & app pages", "Halaman dashboard & aplikasi"),
    title: L("Rental Asset Database Optimization & Monitoring Dashboard", "Optimalisasi Database Aset Sewa & Dashboard Monitoring"),
    summary: L("Scattered rental-asset files became one **standardized database**, with a **Looker Studio dashboard** that warns before contracts expire and an input-validated entry app.",
               "Data aset sewa yang tersebar dijadikan satu **database terstandar**, lengkap dengan **dashboard Looker Studio** yang memberi peringatan sebelum kontrak berakhir dan aplikasi input dengan validasi."),
    did: L([
      "Integrated 500+ rental asset records (2020–2025) from six asset categories into a centralized, standardized database.",
      "Cleaned and validated the historical data to improve quality, consistency and accessibility.",
      "Built a Looker Studio dashboard with KPI visuals, contract progress tracking, geographic mapping and an Early Warning System.",
      "Automated rental value, pro-rata and monthly allocation calculations through spreadsheet formulas and a Google Apps Script app with input validation."
    ], [
      "Mengintegrasikan **500+ data aset sewa** periode 2020–2025 dari enam kategori aset ke dalam database terpusat dan terstandarisasi.",
      "Melakukan data cleaning dan validasi untuk meningkatkan kualitas, konsistensi, dan aksesibilitas data.",
      "Mengembangkan dashboard Looker Studio dengan visualisasi KPI, pemantauan progres kontrak, pemetaan geografis, dan Early Warning System.",
      "Mengotomatiskan perhitungan nilai sewa, prorata, dan alokasi bulanan melalui formula spreadsheet serta aplikasi Google Apps Script dengan validasi input."
    ]),
    outcome: L("Implemented to support digital asset monitoring in the department; further development or integration into the department's web system is planned.",
               "Telah diimplementasikan untuk mendukung digitalisasi dan monitoring aset internal departemen; pengembangan lanjutan atau integrasi ke sistem web departemen direncanakan."),
    metrics: [
      { v: "500+", l: L("asset records integrated", "data aset terintegrasi") },
      { v: "−40%", l: L("reporting time", "waktu pelaporan") },
      { v: "−85%", l: L("recording errors", "kesalahan pencatatan") }
    ],
    skills: ["Data Integration", "Data Cleaning & Validation", "Dashboard Development", "Workflow Automation", "Data Quality Management"],
    tools: ["Python", "Google Sheets", "Looker Studio", "Google Apps Script"],
    confidential: true, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }
  },
  {
    id: "kpu", featured: true, cats: ["dashboard"],
    type: L("Internship project", "Proyek magang"),
    org: "KPU Kota Surabaya", logo: "img/logos/kpu", period: L("Jun – Aug 2025", "Jun – Agu 2025"),
    // dashboard lebih dari satu halaman: tulis tiap halaman di sini + keterangan singkat agar mudah dipahami.
    // Halaman 1 otomatis jadi cover. Tambah halaman baru cukup dengan menambah satu baris { src, cap }.
    pages: [
      { src: "img/featured-project/kpu-page-1",
        cap: L("Election overview: key figures, voter participation and candidate results",
               "Ringkasan pemilu: angka utama, partisipasi pemilih, dan perolehan suara paslon") },
      { src: "img/featured-project/kpu-page-2",
        cap: L("Voter list (DPT), voting rights and ballots per district",
               "DPT, hak pilih, dan surat suara per kecamatan") }
    ],
    title: L("Surabaya 2024 Election Dashboard", "Dashboard Pemilu KPU Kota Surabaya Tahun 2024"),
    summary: L("PDF election results turned into a structured dataset for **31 districts** and an interactive dashboard that **KPU Kota Surabaya adopted**.",
               "Dokumen PDF hasil pemilu diubah menjadi dataset terstruktur untuk **31 kecamatan** dan dashboard interaktif yang **diterima serta dipakai KPU Kota Surabaya**."),
    did: L([
      "Converted PDF documents from the 2024 election into a structured dataset covering five election types across 31 districts in Surabaya, through data cleaning, transformation and preprocessing.",
      "Standardized and merged the data to support consistent analysis and reporting.",
      "Built an interactive Looker Studio dashboard with KPI cards, dynamic filters, and visuals for voters, voter participation, ballots and candidate or party results.",
      "Refined the dashboard from KPU stakeholder feedback until it was accepted."
    ], [
      "Mengubah dokumen PDF hasil Pemilu 2024 menjadi dataset terstruktur yang mencakup lima jenis pemilihan di 31 kecamatan di Surabaya melalui data cleaning, transformasi, dan preprocessing.",
      "Menstandarkan serta menggabungkan data untuk mendukung analisis dan pelaporan yang konsisten.",
      "Mengembangkan dashboard interaktif Looker Studio dengan KPI cards, filter dinamis, dan visualisasi data pemilih, partisipasi pemilih, surat suara, serta hasil kandidat atau partai.",
      "Menyempurnakan dashboard berdasarkan masukan stakeholder KPU hingga diterima."
    ]),
    outcome: L("Implemented at KPU Kota Surabaya to support digitalization, with planned use in the 2029 election.",
               "Telah diimplementasikan di KPU Kota Surabaya untuk mendukung digitalisasi, dengan rencana pemanfaatan pada Pemilu 2029."),
    metrics: [
      { v: "1,000+", l: L("election records", "data pemilu") },
      { v: "−90%", l: L("data inconsistencies", "inkonsistensi data") },
      { v: "31", l: L("districts", "kecamatan") }
    ],
    skills: ["Data Cleaning", "Data Transformation", "Data Visualization", "Dashboard Development", "Stakeholder Collaboration"],
    tools: ["Python", "Google Sheets", "Looker Studio", "VS Code"],
    confidential: true, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }
  },
  {
    id: "thesis", featured: true, cats: ["ml"],
    type: L("Bachelor's thesis", "Skripsi S1"),
    org: "Telkom University Surabaya", logo: "img/telkom-logo", period: L("2026", "2026"),
    img: "img/featured-project/project-thesis.png",
    title: L("Data Science Research Trend Analysis with Topic Modeling and Word Embedding", "Analisis Tren Riset Sains Data Menggunakan Topic Modeling dan Word Embedding"),
    summary: L("LDA topic distributions fused with word embeddings, then clustered, to map where data science research is heading across **3,326 abstracts**.",
               "Distribusi topik LDA digabung dengan word embedding lalu diklasterisasi untuk memetakan arah riset sains data dari **3.326 abstrak**."),
    did: L([
      "Analyzed 3,326 scientific article abstracts from the DOAJ Open API (2020–2026) to map research themes and publication trends in Data Science.",
      "Applied text preprocessing and Latent Dirichlet Allocation (LDA), identifying four main topics with a coherence score of 0.6212.",
      "Fused LDA topic distributions with Word2Vec, FastText and Fast2Vec embeddings (feature fusion) to capture thematic and semantic relationships between documents.",
      "Compared PCA and UMAP before K-Means clustering. FastText Skip-gram with UMAP performed best on four research clusters."
    ], [
      "Menganalisis 3.326 abstrak artikel ilmiah dari DOAJ Open API periode 2020–2026 untuk memetakan tema riset dan tren publikasi di bidang Data Science.",
      "Menerapkan text preprocessing dan Latent Dirichlet Allocation (LDA) untuk mengidentifikasi empat topik utama dengan coherence score 0,6212.",
      "Menggabungkan distribusi topik LDA dengan embedding Word2Vec, FastText, dan Fast2Vec melalui feature fusion untuk menangkap hubungan tematik dan semantik antar dokumen.",
      "Membandingkan PCA dan UMAP sebelum clustering K-Means; FastText Skip-gram dengan UMAP menghasilkan performa terbaik pada empat cluster riset."
    ]),
    outcome: L("Has potential to support research-trend mapping, literature exploration and research planning in the Data Science program.",
               "Berpotensi mendukung pemetaan tren riset, eksplorasi literatur, dan perencanaan penelitian dalam program studi Sains Data."),
    metrics: [
      { v: "0.922", l: L("Silhouette score", "Silhouette score") },
      { v: "0.109", l: L("Davies–Bouldin index", "Davies–Bouldin index") },
      { v: "3,326", l: L("abstracts analyzed", "abstrak dianalisis") }
    ],
    skills: ["Text Preprocessing", "Topic Modeling", "Feature Engineering", "Document Clustering", "Model Evaluation"],
    tools: ["Python", "Streamlit", "VS Code", "Git"],
    pagesTitle: L("Research workflow, results & dashboard", "Alur riset, hasil, dan dashboard"),
    pages: [
      { src: "img/projects/thesis-1", cap: L("Research workflow: from abstract collection through LDA, feature fusion and K-Means clustering", "Alur penelitian: dari pengumpulan abstrak, LDA, penggabungan fitur, hingga klasterisasi K-Means") },
      { src: "img/projects/thesis-2", cap: L("Full evaluation of the embedding and dimensionality-reduction scenarios: FastText Skip-gram with UMAP scored best", "Rekapitulasi evaluasi seluruh skenario embedding dan reduksi dimensi: FastText Skip-gram dengan UMAP terbaik") },
      { src: "img/projects/thesis-3", cap: L("Silhouette and Davies–Bouldin by embedding: FastText 0.922 / 0.109", "Perbandingan Silhouette dan Davies–Bouldin per embedding: FastText 0,922 / 0,109") },
      { src: "img/projects/thesis-4", cap: L("Streamlit dashboard: dataset overview and LDA topic modeling", "Dashboard Streamlit: ringkasan dataset dan topic modeling LDA") },
      { src: "img/projects/thesis-5", cap: L("Streamlit dashboard: dimensionality reduction, embeddings and clustering results", "Dashboard Streamlit: reduksi dimensi, embedding, dan hasil klasterisasi") }
    ],
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }
  },
  {
    id: "bike-dw", featured: false, cats: ["dashboard"],
    type: L("Course project", "Proyek perkuliahan"),
    org: "Telkom University Surabaya", logo: "img/telkom-logo", ctx: L("Data Warehouse course", "Mata kuliah Data Warehouse"), period: "",
    img: "img/projects/bike-dw",
    title: L("Bicycle Sales Data Warehouse Design & Implementation", "Perancangan dan Implementasi Data Warehouse Penjualan Sepeda"),
    summary: L("A Kimball-style sales data warehouse with a Pentaho ETL pipeline and an interactive Looker Studio dashboard.",
               "Data warehouse penjualan berbasis metodologi Kimball dengan ETL Pentaho dan dashboard Looker Studio interaktif."),
    did: L([
      "Designed a sales data warehouse using Kimball's Nine-Step Methodology.",
      "Built an ETL pipeline in Pentaho that integrates sales data into six dimension tables and one fact table.",
      "Built an interactive Looker Studio dashboard for sales performance, customer distribution, product trends and monthly revenue to support data-driven marketing decisions."
    ], [
      "Merancang sales data warehouse menggunakan Kimball's Nine-Step Methodology.",
      "Membangun ETL pipeline dengan Pentaho untuk mengintegrasikan data penjualan ke dalam enam tabel dimensi dan satu tabel fakta.",
      "Mengembangkan dashboard Looker Studio interaktif untuk memvisualisasikan performa penjualan, distribusi pelanggan, tren produk, dan pendapatan bulanan guna mendukung keputusan pemasaran berbasis data."
    ]),
    outcome: L("**Mountain Bikes** were the best-selling category, **Trek** the top brand, and **New York** the main market with 68% of customers.",
               "Mountain Bikes menjadi kategori terlaris, Trek merek dengan penjualan tertinggi, dan New York pasar utama dengan 68% pelanggan."),
    metrics: [
      { v: "6 + 1", l: L("dimension + fact tables", "tabel dimensi + fakta") },
      { v: "68%", l: L("customers in New York", "pelanggan di New York") }
    ],
    skills: ["Data Warehousing", "ETL", "Data Modeling", "Sales Analysis", "Data Visualization"],
    tools: ["Pentaho", "Excel", "Power BI", "Looker Studio"],
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }
  },
  {
    id: "health-eda", featured: false, cats: ["dashboard"],
    type: L("Course project", "Proyek perkuliahan"),
    org: "Telkom University Surabaya", logo: "img/telkom-logo", ctx: L("EDA on 2018–2021 data", "EDA data 2018–2021"), period: "",
    img: "img/projects/health-eda",
    title: L("Central Java Health EDA & Dashboard (SDG 3)", "Exploratory Data Analysis dan Dashboard Kesehatan Jawa Tengah (SDG 3)"),
    summary: L("Exploratory analysis of health facilities, workers, disease cases and insurance coverage in Central Java, delivered as a Power BI dashboard with recommendations.",
               "Analisis eksploratif fasilitas, tenaga kesehatan, kasus penyakit, dan jaminan kesehatan di Jawa Tengah, disajikan dalam dashboard Power BI beserta rekomendasi."),
    did: L([
      "Ran an exploratory data analysis of health conditions in Central Java for 2018–2021, aligned with SDG 3: Good Health and Well-Being.",
      "Cleaned and integrated data on health facilities, health workers, disease cases and health insurance to assess data quality and gaps between regions.",
      "Identified outliers and potential inequality in access to services, resource distribution and insurance participation.",
      "Presented findings in an interactive Power BI dashboard."
    ], [
      "Melakukan Exploratory Data Analysis (EDA) terhadap kondisi kesehatan di Jawa Tengah periode 2018–2021, selaras dengan SDG 3: Good Health and Well-Being.",
      "Membersihkan dan mengintegrasikan data fasilitas kesehatan, tenaga kesehatan, kasus penyakit, serta jaminan kesehatan untuk mengevaluasi kualitas data dan kesenjangan antarwilayah.",
      "Mengidentifikasi outlier dan potensi ketimpangan dalam akses layanan kesehatan, distribusi sumber daya, dan kepesertaan jaminan kesehatan.",
      "Menyajikan hasil analisis melalui dashboard Power BI interaktif."
    ]),
    outcome: L("Recommendations: balance health-resource distribution, widen access to health insurance, and improve public health education.",
               "Rekomendasi: pemerataan sumber daya kesehatan, perluasan akses jaminan kesehatan, dan peningkatan edukasi kesehatan masyarakat."),
    metrics: [
      { v: "4", l: L("data themes integrated", "tema data diintegrasikan") },
      { v: "SDG 3", l: L("aligned goal", "tujuan terkait") }
    ],
    skills: ["EDA", "Data Cleaning", "Data Integration", "Data Visualization", "Dashboard Development"],
    tools: ["Python", "Excel", "VS Code", "Power BI"],
    confidential: true, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }
  },
  {
    id: "mental-health", featured: false, cats: ["dashboard", "ml"],
    type: L("Research project", "Proyek riset"),
    org: "Telkom University Surabaya", logo: "img/telkom-logo", period: L("Feb – Jun 2025", "Feb – Jun 2025"),
    img: "img/projects/mental-health",
    title: L("Mental Health Sentiment Classification with Naïve Bayes and SVM", "Klasifikasi Sentimen Kesehatan Mental Menggunakan Naïve Bayes dan SVM"),
    summary: L("Two classifiers compared on social media posts about mental health, with the results shown in a sentiment dashboard.",
               "Dua model klasifikasi dibandingkan pada data media sosial terkait kesehatan mental, hasilnya ditampilkan di dashboard sentimen."),
    did: L([
      "Analyzed 11,877 social media posts related to mental health and kept 11,864 after cleaning.",
      "Applied text preprocessing and TF-IDF feature extraction.",
      "Compared Multinomial Naïve Bayes and Linear Support Vector Machine (SVM) on an 80:20 train-test split.",
      "Evaluated with accuracy, precision, recall and F1-score, and presented the results in a sentiment analysis dashboard."
    ], [
      "Menganalisis 11.877 data media sosial terkait kesehatan mental dan mempertahankan 11.864 data setelah proses pembersihan.",
      "Menerapkan text preprocessing dan TF-IDF feature extraction.",
      "Membandingkan Multinomial Naïve Bayes dan Linear Support Vector Machine (SVM) dengan pembagian data train-test 80:20.",
      "Mengevaluasi model berdasarkan accuracy, precision, recall, dan F1-score, lalu menyajikan hasilnya melalui dashboard analisis sentimen."
    ]),
    outcome: L("**SVM reached 99% accuracy** against 87% for Naïve Bayes.", "**SVM mencapai akurasi 99%**, dibandingkan 87% pada Naïve Bayes."),
    metrics: [
      { v: "99%", l: L("SVM accuracy", "akurasi SVM") },
      { v: "87%", l: L("Naïve Bayes accuracy", "akurasi Naïve Bayes") },
      { v: "11,864", l: L("posts after cleaning", "data setelah dibersihkan") }
    ],
    skills: ["Feature Extraction", "Sentiment Analysis", "Machine Learning", "Model Evaluation", "Dashboarding"],
    tools: ["Python", "Google Sheets", "Looker Studio", "VS Code"],
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "https://lnkd.in/p/guQNtFyg", detail: "" }
  },
  {
    id: "tefar", featured: false, cats: ["dashboard"],
    type: L("Course project", "Proyek perkuliahan"),
    org: "Telkom University Surabaya", logo: "img/telkom-logo", ctx: L("OOP course", "Mata kuliah OOP"), period: "",
    // tampilan aplikasi: 5 halaman dengan keterangan singkat (halaman 1 otomatis jadi cover)
    pages: [
      { src: "img/projects/tefar-1",
        cap: L("Home: welcome page with the FARANG parcel-delivery menu", "Beranda: halaman selamat datang dengan menu aplikasi FARANG") },
      { src: "img/projects/tefar-2",
        cap: L("FaRang form: sender and recipient data, destination city, weight and total cost", "Form FaRang: data pengirim dan penerima, kota tujuan, berat, dan total biaya") },
      { src: "img/projects/tefar-3",
        cap: L("About page: the story behind the TEFAR team name", "Halaman About: cerita di balik nama tim TEFAR") },
      { src: "img/projects/tefar-4",
        cap: L("Our Team page with the team members", "Halaman Our Team: anggota tim TEFAR") },
      { src: "img/projects/tefar-5",
        cap: L("Sign-up page with full name, email, password and role", "Halaman pendaftaran: nama lengkap, email, kata sandi, dan peran") }
    ],
    pagesTitle: L("App screens", "Tampilan aplikasi"),
    title: L("TEFAR: Parcel Delivery Management App (OOP)", "Aplikasi Manajemen Pengiriman Barang TEFAR Berbasis OOP"),
    summary: L("A Java app for managing parcel deliveries from Surabaya, with separate customer and administrator interfaces and automatic shipping cost.",
               "Aplikasi Java untuk mengelola pengiriman barang dari Surabaya, dengan antarmuka terpisah untuk pelanggan dan administrator serta biaya kirim otomatis."),
    did: L([
      "Built an object-oriented application for managing parcel deliveries from Surabaya, with separate interfaces for customers and administrators.",
      "Implemented automatic shipping cost based on package weight and database-backed transaction records.",
      "Added input validation and delivery feedback to prevent incomplete data and improve the user experience.",
      "Built admin features for delivery monitoring and data management, including manual shipment entry and updating or deleting customer data."
    ], [
      "Mengembangkan TEFAR, aplikasi berbasis object-oriented programming untuk mengelola pengiriman barang dari Surabaya, dengan antarmuka terpisah bagi pelanggan dan administrator.",
      "Menerapkan perhitungan biaya pengiriman otomatis berdasarkan berat paket serta pencatatan transaksi berbasis database.",
      "Menambahkan validasi input dan feedback pengiriman untuk mencegah data tidak lengkap serta meningkatkan pengalaman pengguna.",
      "Mengembangkan fitur administrator untuk monitoring pengiriman dan pengelolaan data, termasuk input pengiriman manual serta pembaruan dan penghapusan data pelanggan."
    ]),
    outcome: L("", ""),
    metrics: [
      { v: "2", l: L("user roles (customer, admin)", "peran pengguna (pelanggan, admin)") }
    ],
    skills: ["OOP", "Business Process Automation", "Data Validation", "Data Management", "Functional Design"],
    tools: ["NetBeans", "MySQL", "Java"],
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }
  },
  {
    id: "digital-divide", featured: false, cats: ["viz"],
    type: L("Infographic competition", "Kompetisi infografis"),
    org: "PENS", logo: "img/logos/pens", ctx: "E-COMP 2024", result: L("Finalist", "Finalis"), period: L("2024", "2024"), sub: L("E-COMP 2024 | Finalist", "E-COMP 2024 | Finalis"),
    img: "img/projects/digital-divide",
    title: L("Infographic: Internet Access Divide: “Desa ke Dunia”", "Infografis Kesenjangan Akses Internet: “Desa ke Dunia”"),
    summary: L("An infographic on the digital divide between urban and rural Indonesia, built from 2024 internet-penetration data and a survey.",
               "Infografis kesenjangan digital antara perkotaan dan pedesaan di Indonesia, berdasarkan data penetrasi internet 2024 dan hasil survei."),
    did: L([
      "Examined the digital divide between urban and rural communities in Indonesia using 2024 internet-penetration data and communication patterns.",
      "Found that connectivity gaps persist despite infrastructure efforts such as Palapa Ring.",
      "Recommended expanding telecommunications infrastructure, maintaining facilities and strengthening strategic partnerships to improve digital inclusion."
    ], [
      "Mengkaji kesenjangan digital antara masyarakat perkotaan dan pedesaan di Indonesia menggunakan data penetrasi internet 2024 dan pola komunikasi.",
      "Analisis mengungkap kesenjangan konektivitas yang masih terjadi meskipun telah ada inisiatif infrastruktur seperti Palapa Ring.",
      "Merekomendasikan perluasan infrastruktur telekomunikasi, pemeliharaan fasilitas, dan penguatan kemitraan strategis untuk meningkatkan inklusi digital."
    ]),
    outcome: L("PLIK survey: 45% of respondents had used the service, 55% had not.", "Survei PLIK: 45% responden pernah menggunakan layanan, 55% belum pernah."),
    metrics: [
      { v: "45% / 55%", l: L("used vs. never used the service (PLIK survey)", "pernah vs. belum pernah memakai layanan (survei PLIK)") }
    ],
    skills: ["Infographic Design", "Data Visualization", "Data Analysis", "Research"],
    tools: ["Excel", "Canva", "Google Forms"],
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "https://lnkd.in/p/gs_ki3aM", detail: "" }
  },
  {
    id: "social-comparison", featured: false, cats: ["viz"],
    type: L("Scientific poster competition", "Lomba poster ilmiah"),
    org: "Universitas Sumatera Utara", logo: "img/logos/usu", ctx: "Psy Accretion 2023", result: L("Finalist", "Finalis"), period: L("2023", "2023"), sub: L("Psy Accretion 2023 | Finalist", "Psy Accretion 2023 | Finalis"),
    img: "img/projects/social-comparison",
    title: L("Infographic: Stop Social Comparison", "Infografis: Stop Perbandingan Sosial, Mulai Menghargai Diri Sendiri"),
    summary: L("A 30-respondent survey on social comparison, social media and mental health, turned into a visual story with practical tips.",
               "Survei 30 responden tentang perbandingan sosial, media sosial, dan kesehatan mental yang dikemas sebagai cerita visual dengan tips praktis."),
    did: L([
      "Surveyed 30 respondents to explore the relationship between social comparison, social media and mental health.",
      "Visualized the findings to highlight comparison patterns, their potential effect on mental health and the importance of self-acceptance.",
      "Added practical recommendations for reducing comparison habits and building healthier social media use."
    ], [
      "Melakukan survei terhadap 30 responden untuk mengeksplorasi hubungan antara perbandingan sosial, media sosial, dan kesehatan mental.",
      "Menyajikan temuan melalui visualisasi data untuk menyoroti pola perbandingan sosial, potensi dampaknya terhadap kesehatan mental, dan pentingnya penerimaan diri.",
      "Memuat rekomendasi praktis untuk mengurangi kebiasaan membandingkan diri dan membangun penggunaan media sosial yang lebih sehat."
    ]),
    outcome: L("56.3% of respondents most often compare their physical appearance; over 70% reported negative effects on self-love.",
               "56,3% responden paling sering membandingkan penampilan fisik; lebih dari 70% melaporkan dampak negatif terhadap self love."),
    metrics: [
      { v: "30", l: L("survey respondents", "responden survei") },
      { v: "56.3%", l: L("compare appearance most often", "paling sering membandingkan penampilan") },
      { v: "70%+", l: L("report negative effects", "melaporkan dampak negatif") }
    ],
    skills: ["Infographic Design", "Data Visualization", "Data Analysis", "Research"],
    tools: ["Excel", "Canva", "Google Forms"],
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }, doc: { url: "https://drive.google.com/file/d/1hqyJRI3ZcZhao_IYlkI7M2xGNryQxWXc/view?usp=drive_link" }
  },
  {
    id: "sentra-edu", featured: false, cats: ["viz"],
    type: L("Infographic competition", "Kompetisi infografis"),
    org: "Puspresnas", logo: "img/logos/puspresnas", period: L("2025", "2025"),
    img: "img/projects/sentra-edu",
    title: L("SENTRA-EDU: Education Inequality in Indonesia", "SENTRA-EDU: Ketimpangan Pendidikan di Indonesia"),
    summary: L("Regions classified by education indicators to show where inequality sits and which interventions fit each cluster.",
               "Wilayah diklasifikasikan berdasarkan indikator pendidikan untuk menunjukkan letak ketimpangan dan intervensi yang cocok bagi tiap klaster."),
    did: L([
      "Compared regional education indicators and classified areas by their educational conditions.",
      "Compared indicators such as student-to-teacher ratios, school participation and educational attainment across clusters.",
      "Identified challenges in disadvantaged regions: limited access, teacher shortages and barriers that can reinforce the cycle of poverty.",
      "Proposed targeted interventions: better teacher distribution, digital learning access and region-specific support."
    ], [
      "Membandingkan indikator pendidikan antarwilayah dan mengklasifikasikan daerah berdasarkan kondisi pendidikannya.",
      "Membandingkan indikator seperti rasio siswa-guru, partisipasi sekolah, dan capaian pendidikan antar klaster.",
      "Mengidentifikasi tantangan di wilayah tertinggal: akses terbatas, kekurangan guru, dan hambatan yang dapat memperkuat siklus kemiskinan.",
      "Mengusulkan intervensi tepat sasaran: distribusi guru yang lebih baik, akses pembelajaran digital, dan dukungan khusus wilayah."
    ]),
    outcome: L("The infographic highlights an 87.4% participation rate.", "Infografis menyoroti angka partisipasi sebesar 87,4%."),
    metrics: [
      { v: "87.4%", l: L("participation rate highlighted", "angka partisipasi yang disorot") }
    ],
    skills: ["Data Visualization", "Cluster Analysis", "Insight Communication"],
    tools: ["Python", "Excel", "Figma", "VS Code"],
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }, doc: { url: "https://drive.google.com/file/d/1GM6kO_rCqQ9RMb6L_VQT8uPPh3CiBpSw/view?usp=drive_link" }
  },
  {
    id: "jateng-disaster", featured: false, cats: ["viz"],
    type: L("Infographic competition", "Kompetisi infografis"),
    org: "Puspresnas", logo: "img/logos/puspresnas", period: L("2023", "2023"),
    img: "img/projects/jateng-disaster",
    title: L("Infographic: Central Java Natural Disaster Alert", "Infografis Waspada! Jawa Tengah Darurat Bencana Alam"),
    summary: L("Natural-disaster risk in Central Java told through fatalities, vulnerability and 2009–2019 trends.",
               "Risiko bencana alam di Jawa Tengah dikisahkan lewat korban jiwa, kerentanan, dan tren 2009–2019."),
    did: L([
      "Analyzed natural disaster risk in Central Java using data on fatalities, regional vulnerability and historical trends from 2009–2019.",
      "Presented Indonesia's World Risk Index ranking (No. 37 of 108 countries in 2019), compared reported deaths across six disaster types, and highlighted flood and landslide incidents.",
      "Visualized disaster trends over time and used the region's topography to explain potential vulnerability.",
      "Closed with recommendations on disaster preparedness, early warning systems, infrastructure and public awareness."
    ], [
      "Menganalisis risiko bencana alam di Jawa Tengah menggunakan data korban jiwa, kerentanan wilayah, dan tren historis 2009–2019.",
      "Menyajikan peringkat World Risk Index Indonesia (No. 37 dari 108 negara pada 2019), membandingkan korban jiwa pada enam jenis bencana, dan menyoroti kejadian banjir dan longsor.",
      "Memvisualisasikan tren bencana dari waktu ke waktu dan memakai topografi wilayah untuk menjelaskan potensi kerentanan.",
      "Ditutup dengan rekomendasi kesiapsiagaan bencana, sistem peringatan dini, perbaikan infrastruktur, dan kesadaran publik."
    ]),
    outcome: L("", ""),
    metrics: [
      { v: "No. 37", l: L("of 108 countries, World Risk Index 2019", "dari 108 negara, World Risk Index 2019") },
      { v: "2009–2019", l: L("trend period analyzed", "periode tren yang dianalisis") }
    ],
    skills: ["Data Visualization", "Trend Analysis", "Comparative Analysis", "Data Storytelling"],
    tools: ["Python", "Excel", "Figma", "VS Code"],
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }, doc: { url: "https://drive.google.com/file/d/1c-yt17BBhCEd61P-yiBw3JExchoN6csR/view?usp=drive_link" }
  },
  {
    id: "growpath", featured: false, cats: ["ml"],
    type: L("External project", "Proyek eksternal"),
    org: "Ristek Fasilkom UI", logo: "img/logos/ristek", ctx: L("SISTECH 2025: MLOps program", "SISTECH 2025: Program MLOps"), period: "",
    // slide laporan akhir: 4 halaman dengan keterangan singkat (halaman 1 otomatis jadi cover)
    pages: [
      { src: "img/projects/growpath-1",
        cap: L("Final project report cover: SISTECH 2025, Group 10 team", "Sampul laporan akhir: SISTECH 2025, tim Group 10") },
      { src: "img/projects/growpath-2",
        cap: L("End-to-end MLOps pipeline: from data scraping and preprocessing to a REST API", "Pipeline MLOps end-to-end: dari scraping dan preprocessing data hingga REST API") },
      { src: "img/projects/growpath-3",
        cap: L("Text vectorization (TF-IDF), cosine similarity, and the recommendation model and API", "Vektorisasi teks (TF-IDF), cosine similarity, serta model rekomendasi dan API") },
      { src: "img/projects/growpath-4",
        cap: L("Sample JSON output from the /recommend API and the deployment architecture", "Contoh output JSON dari API /recommend dan arsitektur deployment") }
    ],
    pagesTitle: L("Report slides", "Slide laporan"),
    title: L("GrowPath: Career & Learning Recommendation System", "GrowPath: Sistem Rekomendasi Karier dan Pembelajaran"),
    summary: L("A recommender that matches online courses to career interests, served through a Flask REST API and tested with Postman.",
               "Sistem rekomendasi yang mencocokkan kursus online dengan minat karier, disajikan lewat Flask REST API dan diuji dengan Postman."),
    did: L([
      "Developed through the MLOps SISTECH 2025 program to help students find courses that fit their career interests.",
      "Processed about 7,000 online-course records and 500 JobStreet job listings through web scraping and data preprocessing.",
      "Used TF-IDF and cosine similarity to recommend courses based on relevance to a job.",
      "Integrated the model into a Flask REST API with JSON responses and tested it with Postman to support frontend integration."
    ], [
      "Dikembangkan melalui program MLOps SISTECH 2025 untuk membantu mahasiswa menemukan kursus yang sesuai dengan minat karier.",
      "Mengolah sekitar 7.000 data kursus online dan 500 lowongan JobStreet melalui web scraping dan data preprocessing.",
      "Menggunakan TF-IDF dan Cosine Similarity untuk menghasilkan rekomendasi kursus berdasarkan relevansi dengan pekerjaan.",
      "Mengintegrasikan model ke Flask REST API dengan respons JSON dan mengujinya menggunakan Postman untuk mendukung integrasi dengan frontend."
    ]),
    outcome: L("", ""),
    metrics: [
      { v: "~7,000", l: L("online courses processed", "data kursus online diolah") },
      { v: "500", l: L("JobStreet listings", "lowongan JobStreet") }
    ],
    skills: ["Web Scraping", "Data Preprocessing", "Text Vectorization", "Similarity Analysis", "Recommendation Systems"],
    tools: ["Python", "VS Code", "Postman", "Excel", "Git"],
    // proyek tim SISTECH 2025 (Group 10): 9 orang; r = divisi anggota
    team: {
      size: 9, role: L("MLOps", "MLOps"),
      members: [
        { n: "Keisha H.Z.", r: L("MLOps", "MLOps"), u: "" },
        { n: "Farah Fadhilah A.", r: L("Front-End Engineering", "Front-End Engineering"), u: "" },
        { n: "Sabira Putri C.", r: L("UI/UX Design", "UI/UX Design"), u: "" },
        { n: "Winona Amadea", r: L("UI/UX Design", "UI/UX Design"), u: "" },
        { n: "Rafila Dihan A.", r: L("Product Management", "Product Management"), u: "" },
        { n: "Rebeccaniaga N.", r: L("Product Management", "Product Management"), u: "" },
        { n: "Saidatul Wulya", r: L("Digital Marketing", "Digital Marketing"), u: "" },
        { n: "Galatea Aqilah", r: L("Digital Marketing", "Digital Marketing"), u: "" }
      ]
    },
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }
  },
  {
    id: "election-sentiment", featured: false, cats: ["ml"],
    type: L("Competition project", "Proyek kompetisi"),
    org: "UPN “Veteran” Jawa Timur", logo: "img/logos/upn", ctx: L("2024 election data", "Data Pemilu 2024"), period: "",
    img: "img/projects/election-sentiment",
    title: L("Election Sentiment Analysis on Twitter Data", "Analisis Sentimen Pemilu Menggunakan Data Twitter"),
    summary: L("**IndoBERT** sentiment classification on **2,818 tweets** about the 2024 election, including an honest look at how far the model generalizes.",
               "Klasifikasi sentimen **IndoBERT** pada **2.818 tweet** tentang Pemilu 2024, termasuk evaluasi jujur atas kemampuan generalisasi model."),
    did: L([
      "Analyzed public sentiment toward the 2024 election using 2,818 tweets to identify political-discussion trends and public perception.",
      "Applied text preprocessing and IndoBERT-based classification into positive, negative and neutral.",
      "Ran an exploratory data analysis: negative sentiment dominated, interaction peaked in October, and tweets, likes, quotes and replies were related."
    ], [
      "Menganalisis sentimen publik terhadap Pemilu 2024 menggunakan 2.818 tweet untuk mengidentifikasi tren diskusi politik dan persepsi masyarakat.",
      "Menerapkan text preprocessing dan klasifikasi sentimen berbasis IndoBERT untuk mengelompokkan tweet menjadi positif, negatif, atau netral.",
      "Hasil Exploratory Data Analysis (EDA) menunjukkan dominasi sentimen negatif, puncak interaksi pada Oktober, serta keterkaitan antara tweet, likes, quotes, dan replies."
    ]),
    outcome: L("Accuracy was 90.90% on training data but **49.16% on testing data**, which exposed limited generalization to unseen data.",
               "Akurasi 90,90% pada data training dan **49,16% pada data testing**, yang menunjukkan keterbatasan generalisasi pada data yang belum pernah dilihat model."),
    metrics: [
      { v: "2,818", l: L("tweets analyzed", "tweet dianalisis") },
      { v: "90.90%", l: L("training accuracy", "akurasi training") },
      { v: "49.16%", l: L("testing accuracy", "akurasi testing") }
    ],
    skills: ["Web Scraping", "Text Preprocessing", "Sentiment Analysis", "Model Evaluation", "EDA"],
    tools: ["Python", "Excel", "VS Code"],
    confidential: false, links: { live: "", slides: "", github: "", linkedin: "", detail: "" }
  },
  {
    id: "essay-scoring", featured: false, cats: ["ml"],
    type: L("Course project", "Proyek mata kuliah"),
    org: "Telkom University Surabaya", logo: "img/telkom-logo", ctx: L("Text Mining course", "Mata kuliah Text Mining"), period: L("2025", "2025"),
    pages: [
      { src: "img/projects/essay-scoring-1",
        cap: L("Results overview: average cosine similarity (FastText 0.80 vs Word2Vec 0.53) and score distribution", "Ringkasan hasil: rata-rata cosine similarity (FastText 0,80 vs Word2Vec 0,53) dan distribusi skor") },
      { src: "img/projects/essay-scoring-2",
        cap: L("Background: why automated essay scoring, the supporting techniques and the student survey", "Latar belakang: alasan penilaian esai otomatis, teknik pendukung, dan survei mahasiswa") },
      { src: "img/projects/essay-scoring-3",
        cap: L("Dataset overview: five reflective questions from 41 students, collected 25–26 May 2025", "Overview dataset: lima pertanyaan reflektif dari 41 mahasiswa, dikumpulkan 25–26 Mei 2025") },
      { src: "img/projects/essay-scoring-4",
        cap: L("Workflow and preprocessing steps, from case folding to stemming", "Alur kerja dan langkah pra-pemrosesan, dari case folding hingga stemming") },
      { src: "img/projects/essay-scoring-5",
        cap: L("Word2Vec and FastText embeddings with their parameters and sample vectors", "Embedding Word2Vec dan FastText beserta parameter dan contoh vektor") },
      { src: "img/projects/essay-scoring-6",
        cap: L("Modeling with cosine similarity: each answer is scored by its closest answer key", "Pemodelan dengan cosine similarity: tiap jawaban dinilai dari kunci jawaban terdekat") },
      { src: "img/projects/essay-scoring-7",
        cap: L("Answer categories per model (Word2Vec vs FastText)", "Kategori jawaban per model (Word2Vec vs FastText)") },
      { src: "img/projects/essay-scoring-8",
        cap: L("Average score per student and per question for both models", "Rata-rata nilai per mahasiswa dan per pertanyaan untuk kedua model") }
    ],
    pagesTitle: L("Project slides", "Slide proyek"),
    title: L("Word2Vec vs FastText for Automatic Scoring of Student Reflections", "Word2Vec vs FastText untuk Penilaian Otomatis Refleksi Mahasiswa"),
    summary: L("An **Automated Essay Scoring** system for Indonesian reflective essays that compares **Word2Vec** and **FastText** with **cosine similarity**, where FastText scored higher at **0.80 vs 0.53**.",
               "Sistem **Automated Essay Scoring** untuk esai reflektif berbahasa Indonesia yang membandingkan **Word2Vec** dan **FastText** dengan **cosine similarity**, dan FastText unggul dengan skor **0,80 vs 0,53**."),
    did: L([
      "Collected reflective answers from 41 students through a survey on the impact of AI on coursework, used as the basis for scoring.",
      "Built an Indonesian text-preprocessing pipeline: case folding, slang normalization, tokenizing, stopword removal (NLTK, Sastrawi and a manual list), POS tagging with Stanza and stemming.",
      "Trained Word2Vec and FastText embeddings (100 dimensions, window 7) and scored each answer by its highest cosine similarity to the answer key.",
      "Compared both models per method, per student and per question, with score distributions and category charts."
    ], [
      "Mengumpulkan jawaban reflektif dari 41 mahasiswa melalui survei tentang pengaruh AI dalam mengerjakan tugas kuliah, sebagai dasar penilaian.",
      "Membangun pipeline text preprocessing bahasa Indonesia: case folding, normalisasi slang, tokenizing, stopword removal (NLTK, Sastrawi, dan daftar manual), POS tagging dengan Stanza, serta stemming.",
      "Melatih embedding Word2Vec dan FastText (100 dimensi, window 7) lalu menilai tiap jawaban dari cosine similarity tertinggi terhadap kunci jawaban.",
      "Membandingkan kedua model per metode, per mahasiswa, dan per pertanyaan, lengkap dengan distribusi skor dan grafik kategori."
    ]),
    outcome: L("FastText averaged **0.80** cosine similarity against **0.53** for Word2Vec and led on every student and every question, which suits morphologically rich Indonesian text.",
               "FastText rata-rata mencapai cosine similarity **0,80** dibanding **0,53** pada Word2Vec dan unggul di setiap mahasiswa dan setiap pertanyaan, sesuai untuk teks bahasa Indonesia yang kaya morfologi."),
    metrics: [
      { v: "41", l: L("student respondents", "mahasiswa responden") },
      { v: "0.80", l: L("FastText avg. similarity", "rata-rata similarity FastText") },
      { v: "0.53", l: L("Word2Vec avg. similarity", "rata-rata similarity Word2Vec") }
    ],
    skills: ["Text Mining", "NLP", "Word Embedding", "Similarity Analysis", "Model Evaluation"],
    tools: ["Python", "NLTK", "Sastrawi", "Stanza"],
    team: { size: 3, members: [{ n: "Salsabila Felda A.", u: "" }, { n: "Salomon Abraham", u: "" }] },
    confidential: false, links: { live: "", slides: "", github: "https://github.com/talitharhmd/Essay-Answer-Scoring/tree/master", linkedin: "", detail: "" }
  },
  {
    id: "kmeans-segmentation", featured: false, cats: ["ml"],
    type: L("Course project", "Proyek mata kuliah"),
    org: "Telkom University Surabaya", logo: "img/telkom-logo", ctx: L("Machine Learning course", "Mata kuliah Machine Learning"), period: "",
    pages: [
      { src: "img/projects/kmeans-segmentation-1",
        cap: L("Clustering result: two customer segments by annual income and purchases (k = 2)", "Hasil clustering: dua segmen pelanggan berdasarkan pendapatan tahunan dan pembelian (k = 2)") },
      { src: "img/projects/kmeans-segmentation-2",
        cap: L("Exploratory visualizations: age, marital status, education and spending by product", "Visualisasi eksploratif: usia, status pernikahan, pendidikan, dan pengeluaran per produk") },
      { src: "img/projects/kmeans-segmentation-3",
        cap: L("Silhouette Score for k = 2 to 10, highest at k = 2 (0.5890)", "Silhouette Score untuk k = 2 sampai 10, tertinggi pada k = 2 (0,5890)") },
      { src: "img/projects/kmeans-segmentation-4",
        cap: L("Elbow Method: inertia drops sharply from k = 1 to k = 2", "Elbow Method: inertia turun tajam dari k = 1 ke k = 2") },
      { src: "img/projects/kmeans-segmentation-5",
        cap: L("Steps of the manual K-Means implementation", "Langkah implementasi K-Means manual") },
      { src: "img/projects/kmeans-segmentation-6",
        cap: L("Evaluation with Silhouette Score and the scatter plot", "Evaluasi dengan Silhouette Score dan scatter plot") },
      { src: "img/projects/kmeans-segmentation-7",
        cap: L("Conclusion: k = 2 converged in 8 iterations; the follow-up experiment settled on k = 9", "Kesimpulan: k = 2 konvergen dalam 8 iterasi; eksperimen lanjutan memilih k = 9") }
    ],
    pagesTitle: L("Project slides", "Slide proyek"),
    title: L("Customer Segmentation with a Manual K-Means by Income and Purchases", "Segmentasi Pelanggan dengan K-Means Manual Berdasarkan Pendapatan dan Pembelian"),
    summary: L("**K-Means clustering** written without a library to segment **2,240 customers** by income and purchases, with k chosen through **Silhouette Score** and the **Elbow Method**.",
               "**K-Means clustering** yang ditulis tanpa library untuk segmentasi **2.240 pelanggan** berdasarkan pendapatan dan pembelian, dengan k ditentukan lewat **Silhouette Score** dan **Elbow Method**."),
    did: L([
      "Used the Customer Personality Analysis dataset from Kaggle (2,240 rows, 29 columns) to group customers into homogeneous segments.",
      "Filled 24 missing Income values with KNN Imputer (n_neighbors = 5), then renamed columns and profiled the data with descriptive statistics and exploratory charts.",
      "Chose the number of clusters with Silhouette Score and the Elbow Method, then implemented K-Means manually: centroid initialization, Euclidean distance, assignment, centroid update and convergence check.",
      "Visualized the result as a scatter plot and ran a follow-up experiment with demographic and behavioral features (RFM and demographics)."
    ], [
      "Menggunakan dataset Customer Personality Analysis dari Kaggle (2.240 baris, 29 kolom) untuk mengelompokkan pelanggan ke segmen yang homogen.",
      "Mengisi 24 nilai Income yang hilang dengan KNN Imputer (n_neighbors = 5), lalu mengganti nama kolom dan memprofilkan data dengan statistik deskriptif dan grafik eksploratif.",
      "Menentukan jumlah klaster dengan Silhouette Score dan Elbow Method, lalu mengimplementasikan K-Means secara manual: inisialisasi centroid, jarak Euclidean, penugasan klaster, pembaruan centroid, dan cek konvergensi.",
      "Memvisualisasikan hasilnya dalam scatter plot dan menjalankan eksperimen lanjutan dengan fitur demografi dan perilaku (RFM dan demografi)."
    ]),
    outcome: L("Two clear segments emerged (**high-value** and **low-value** customers) with a **Silhouette Score of 0.5890** at k = 2, converging in **8 iterations**. The follow-up experiment settled on k = 9 for finer segments.",
               "Terbentuk dua segmen yang jelas (pelanggan **bernilai tinggi** dan **bernilai rendah**) dengan **Silhouette Score 0,5890** pada k = 2, konvergen dalam **8 iterasi**. Eksperimen lanjutan memilih k = 9 untuk segmen yang lebih detail."),
    metrics: [
      { v: "2,240", l: L("customers segmented", "pelanggan disegmentasi") },
      { v: "0.5890", l: L("Silhouette Score (k = 2)", "Silhouette Score (k = 2)") },
      { v: "8", l: L("iterations to converge", "iterasi hingga konvergen") }
    ],
    skills: ["Clustering", "Customer Segmentation", "Data Imputation", "Model Evaluation", "EDA"],
    tools: ["Python", "NumPy", "Scikit-learn", "Google Colab"],
    team: { size: 3, members: [{ n: "Marsha Trista Aulia", u: "" }, { n: "Ahmad Ihda Falah Annur", u: "" }] },
    confidential: false, links: { live: "", slides: "", github: "https://bit.ly/3HXFEGh", linkedin: "", detail: "" }
  }
];

/* ---------- Sertifikat & penghargaan ----------
   cat: license | award | activity ; img: img/certs/<id> (ekstensi otomatis) */
const CERTS = [
  { id: "datacamp-da", cat: "license", url: "", cred: "DAA0019640235388", field: L("Data Analytics", "Data Analytics"),
    title: L("Data Analyst Associate", "Data Analyst Associate"),
    issuer: "DataCamp", date: "",
    note: L("Professional **Data Analyst Associate** certification from DataCamp.", "Sertifikasi profesional **Data Analyst Associate** dari DataCamp.") },
  { id: "datacamp-ds", cat: "license", url: "", cred: "DSA0015411390097", field: L("Data Science", "Data Science"),
    title: L("Data Scientist Associate", "Data Scientist Associate"),
    issuer: "DataCamp", date: "",
    note: L("Professional **Data Scientist Associate** certification from DataCamp.", "Sertifikasi profesional **Data Scientist Associate** dari DataCamp.") },
  { id: "top99-indonesianext", cat: "award", url: "", cred: "", field: L("AI & Digital Talent", "AI & Talenta Digital"),
    title: L("Top 99 Digital Talents: IndonesiaNEXT (AI-Driven)", "Top 99 Digital Talents: IndonesiaNEXT (AI-Driven)"),
    issuer: "Telkomsel", date: "2026",
    note: L("Selected among the top 99 digital talents after completing a hackathon challenge with an AI approach.", "Terpilih sebagai salah satu dari 99 talenta digital terbaik setelah menyelesaikan tantangan hackathon dengan pendekatan AI.") },
  { id: "samsung-sic", cat: "award", url: "", cred: "", field: L("Artificial Intelligence", "Artificial Intelligence"),
    title: L("Samsung Innovation Campus Batch 6: Stages 1–3", "Samsung Innovation Campus Batch 6: Tahap 1–3"),
    issuer: "Samsung Innovation Campus · Hacktiv8 Indonesia", date: "2024/2025",
    note: L("Completed the intensive Stages 1–3 program (3 months), theme: AI in Everyday Life.", "Menyelesaikan program intensif Tahap 1–3 (3 bulan), tema: AI in Everyday Life.") },
  { id: "gelar-rasa", cat: "award", url: "", cred: "005/UN63.7/GELAR-RASA/XI/2023", field: L("Data Science", "Data Science"),
    title: L("Top 5 Finalist: Gelar Rasa 2023", "Top 5 Finalis: Gelar Rasa 2023"),
    issuer: "UPN Veteran Jawa Timur", date: "2023",
    note: L("Contribution of Data Scientist for Optimizing Social Media in Digitalization Era.", "Contribution of Data Scientist for Optimizing Social Media in Digitalization Era.") },
  { id: "psy-accretion", cat: "award", url: "", cred: "03/056/PSY-ACCRETION/X/2023", field: L("Mental Health Research", "Riset Kesehatan Mental"),
    title: L("Finalist: Psy Accretion 2023 (scientific poster)", "Finalis: Psy Accretion 2023 (poster ilmiah)"),
    issuer: "Universitas Sumatera Utara", date: "2023",
    note: L("The Era of Growth: Improving Mental Health and Well-Being for Everyone, Everywhere.", "The Era of Growth: Improving Mental Health and Well-Being for Everyone, Everywhere.") },
  { id: "ecomp-2024", cat: "award", url: "", cred: "", field: L("Data Visualization", "Visualisasi Data"),
    title: L("Finalist: Infographic E-COMP Season 2 (2024)", "Finalis: Infographic E-COMP Season 2 (2024)"),
    issuer: "PENS (Politeknik Elektronika Negeri Surabaya)", date: "2024",
    note: L("Theme: Technology and Society 5.0: Utilizing Technology for Public Services.", "Tema: Technology and Society 5.0: Pemanfaatan Teknologi untuk Pelayanan Publik.") },

  { id: "intern-pal", cat: "activity", url: "", cred: "051-B/43200/I/2026",
    title: L("Data Analyst Internship: PT PAL Indonesia", "Magang Data Analyst: PT PAL Indonesia"),
    issuer: "PT PAL Indonesia (Persero) · Matra Division", date: "Jan 2026",
    note: L("Professional internship certificate, Sep 2025 – Jan 2026.", "Sertifikat magang profesional, Sep 2025 – Jan 2026.") },
  { id: "intern-kpu", cat: "activity", url: "", cred: "113/HM.03.4-Kt/3578/K/2025",
    title: L("Data Analyst Internship: KPU Kota Surabaya", "Magang Data Analyst: KPU Kota Surabaya"),
    issuer: "KPU Kota Surabaya · Rendati Division", date: "30 Jun – 15 Aug 2025",
    note: L("Professional internship certificate (Mandiri internship program).", "Sertifikat magang profesional (program Magang Mandiri).") },
  { id: "speaker-welcome", cat: "activity", url: "", cred: "01.010/WELPART/HIMASDATA-TUS/IX/2024",
    title: L("Speaker: Welcome Party Data Science 2024", "Pembicara: Welcome Party Data Science 2024"),
    issuer: "Himasdata (Data Science events)", date: "29 Sep 2024",
    note: L("Certificate of participation as speaker.", "Sertifikat partisipasi sebagai pemateri.") },
  { id: "facilitator-pkkmb", cat: "activity", url: "", cred: "1277/KMH10/TUKS-WDR03/2024",
    title: L("Facilitator: PKKMB Telkom University 2024", "Fasilitator: PKKMB Telkom University 2024"),
    issuer: "Telkom University Surabaya", date: "2024",
    note: L("Guided and mentored new students during the university orientation.", "Membimbing dan mendampingi mahasiswa baru selama orientasi universitas.") },

  { id: "asean-sap", cat: "license", url: "", cred: "4049/SERT/24-DSI-04/V/2024", field: L("Data Analytics", "Data Analytics"),
    title: L("ASEAN Data Science Explorers 2024: SAP Analytics Cloud & SAP Build Apps", "ASEAN Data Science Explorers 2024: SAP Analytics Cloud & SAP Build Apps"),
    issuer: "SAP · ASEAN Foundation · Dampak Sosial Indonesia", date: "2024",
    // desc = deskripsi singkat yang tampil di kartu & viewer. Isi untuk tiap sertifikat; kalau kosong dipakai "note".
    desc: L("Applied data analysis with SAP Analytics Cloud by building data models, exploring ASEAN data and developing interactive visualizations. Used the Smart Discovery feature to identify patterns and gain insights from the data. Applied data analysis and visualization skills to present information in a structured way and support understanding of the data.",
            "Menerapkan analisis data menggunakan SAP Analytics Cloud melalui pembuatan model data, eksplorasi data ASEAN, dan pengembangan visualisasi interaktif. Menggunakan fitur Smart Discovery untuk mengidentifikasi pola dan memperoleh insight dari data. Menerapkan kemampuan analisis dan visualisasi data untuk menyajikan informasi secara terstruktur dan mendukung pemahaman terhadap data."),
    note: L("Certificate of participation, Enablement Session online training.", "Sertifikat partisipasi, pelatihan online Enablement Session.") },
  { id: "looker-myskill", cat: "license", url: "", cred: "", field: L("Data Visualization", "Visualisasi Data"),
    title: L("Google Looker Studio: Skill Specialization", "Google Looker Studio: Skill Specialization"),
    issuer: "MySkill", date: "5 Jul 2024",
    note: L("Full topic completed, 6 courses (Data Science & Data Analysis path).", "Topik lengkap diselesaikan, 6 kursus (jalur Data Science & Data Analysis).") },
  { id: "python-myskill", cat: "license", url: "", cred: "", field: L("Python", "Python"),
    title: L("Python Fundamental: Skill Specialization", "Python Fundamental: Skill Specialization"),
    issuer: "MySkill", date: "6 Aug 2023",
    note: L("Full topic completed, 26 courses (Data Science & Data Analysis path).", "Topik lengkap diselesaikan, 26 kursus (jalur Data Science & Data Analysis).") },
  { id: "hackerrank-sql", cat: "license", url: "", cred: "", field: L("SQL", "SQL"),
    // satu sertifikat dengan beberapa gambar: tiap gambar jadi satu slide di viewer (cap/date/cred opsional per gambar)
    pages: [
      { src: "img/certs/hackerrank-sql-basic", cap: L("SQL (Basic)", "SQL (Basic)"), date: "31 Aug 2023", cred: "1955C9DCD0D5" },
      { src: "img/certs/hackerrank-sql-intermediate", cap: L("SQL (Intermediate)", "SQL (Intermediate)"), date: "10 Jan 2025", cred: "1D7EB339DAB1" },
      { src: "img/certs/hackerrank-sql-advanced", cap: L("SQL (Advanced)", "SQL (Advanced)"), date: "10 Jan 2025", cred: "4CCCCF139B75" }
    ],
    title: L("HackerRank SQL Certificates (Basic, Intermediate, Advanced)", "HackerRank SQL Certificates (Basic, Intermediate, Advanced)"),
    issuer: "HackerRank", date: "Aug 2023 – Jan 2025",
    note: L("Passed the HackerRank skill certification tests for SQL at three levels.", "Lulus tes sertifikasi keterampilan HackerRank untuk SQL pada tiga level.") },
  { id: "rakamin-kickstart", cat: "license", url: "", cred: "", field: L("Data Science", "Data Science"),
    title: L("Kickstart Data Science Journey 2023: Excellent Grade", "Kickstart Data Science Journey 2023: Excellent Grade"),
    issuer: "Rakamin Academy", date: "Apr – May 2023",
    note: L("Certificate of achievement with an excellent grade.", "Sertifikat pencapaian dengan predikat excellent.") },
  { id: "ai900-prep", cat: "license", url: "", cred: "", field: L("AI & Cloud", "AI & Cloud"),
    title: L("Azure AI Fundamentals (AI-900): Preparation Course", "Azure AI Fundamentals (AI-900): Kursus Persiapan"),
    issuer: "Microsoft Learn · elevAIte", date: "2025",
    note: L("Certificate of completion for the AI-900 preparation course.", "Sertifikat penyelesaian kursus persiapan AI-900.") },
  { id: "dqlab", cat: "license", url: "", cred: "", field: L("Data Science", "Data Science"),
    title: L("Data Science Course Completions", "Penyelesaian Kursus Data Science"),
    issuer: "DQLab", date: "2023",
    note: L("Data Wrangling with Python; Statistics with Python for Data Science (Part 1); Data Scientist case study in retail.", "Data Wrangling Python; Statistik dengan Python untuk Data Science (Part 1); Pemecahan kasus Data Scientist pada ritel.") },
  { id: "revou-mini", cat: "license", url: "", cred: "", field: L("Data Analytics", "Data Analytics"),
    title: L("Mini Course: Intro to Data Analytics", "Mini Course: Intro to Data Analytics"),
    issuer: "RevoU", date: "Aug 2023",
    note: L("Two-week certified online course.", "Kursus online bersertifikat selama dua minggu.") }
];

/* ---------- Blog ---------- */
/* ---------- Tulisan (Medium) ----------
   feat: true -> kartu besar teratas | soon: true -> kartu "segera hadir" (tanpa link)
   img: img/blog/<nama> (ekstensi otomatis) | tags: label topik | mins: waktu baca  */
const BLOG = [
  { feat: true, img: "img/blog/blog-edgeone",
    url: "https://medium.com/@talitharhmd/deploying-a-data-visualization-website-with-tencent-edgeone-makers-a-beginners-experience-127fc5a7a28e",
    title: L("Deploying a Data Visualization Website with Tencent EdgeOne Makers: A Beginner’s Experience", "Deploying a Data Visualization Website with Tencent EdgeOne Makers: A Beginner’s Experience"),
    date: L("September 4, 2026", "4 September 2026"), mins: 6,
    tags: ["Deployment", "Data Visualization", "Tencent EdgeOne"],
    desc: L("What happens after a data project is finished? My first walkthrough of taking a **data visualization website** from a local folder to a **public URL**: upload, build, deploy and access. It also covers the lesson that a project that runs locally may need adjustments for the hosting platform, plus the **serverless, storage and AI features** I want to explore next.",
            "Apa yang terjadi setelah proyek data selesai? Catatan pertamaku membawa **website visualisasi data** dari folder lokal ke **URL publik**: upload, build, deploy, lalu akses. Termasuk pelajaran bahwa proyek yang berjalan di lokal bisa perlu penyesuaian di platform hosting, serta fitur **serverless, storage, dan AI** yang ingin kujelajahi berikutnya.") },
  { n: 1, img: "img/blog/blog-1",
    url: "https://medium.com/@talitharhmd/understanding-data-8f8e385b35c4",
    title: L("Understanding Data: Basic Data Science #1", "Understanding Data: Basic Data Science #1"),
    date: L("July 10, 2024", "10 Juli 2024"), tags: ["Data Basics"],
    desc: L("Getting to know the core foundations of the data world. This article covers the basic data concepts to understand before moving on to more complex analysis techniques.",
            "Mengenal fondasi utama dalam dunia data. Artikel ini membahas konsep dasar data yang wajib dipahami sebelum melangkah lebih jauh ke teknik analisis yang kompleks.") },
  { n: 3, img: "img/blog/blog-3",
    url: "https://medium.com/@talitharhmd/basic-data-from-data-science-data-analysis-3-c60118c0e19a",
    title: L("Data Story Vs Dashboard? #3", "Data Story Vs Dashboard? #3"),
    date: L("May 11, 2024", "11 Mei 2024"), tags: ["Data Storytelling", "Dashboard"],
    desc: L("Is a dashboard enough? Learn the difference between static data visualization on a dashboard and the deeper narrative that data storytelling offers.",
            "Apakah dashboard saja cukup? Pelajari perbedaan antara visualisasi data statis pada dashboard dengan narasi mendalam yang ditawarkan oleh Data Storytelling.") },
  { n: 2, img: "img/blog/blog-2",
    url: "https://medium.com/@talitharhmd/basic-data-from-data-science-data-analysis-2-de90fc205d78",
    title: L("What is Data Story in Data Science? #2", "What is Data Story in Data Science? #2"),
    date: L("May 4, 2024", "4 Mei 2024"), tags: ["Data Storytelling"],
    desc: L("Data without a story is just numbers. Discover how to build a strong narrative that turns data insights into real action through data storytelling.",
            "Data tanpa cerita hanyalah angka. Temukan bagaimana membangun narasi yang kuat untuk mengubah insight data menjadi aksi nyata melalui Data Storytelling.") },
  { soon: true,
    title: L("Next article in progress", "Artikel berikutnya sedang disiapkan"),
    desc: L("A new post is on its way. Follow on Medium to read it first.", "Tulisan baru sedang disiapkan. Ikuti di Medium agar tidak ketinggalan.") }
];

/* ---------- Teks antarmuka ---------- */
const I18N = {
  en: {
    "skip": "Skip to content",
    "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.certs": "Certificates", "nav.blog": "Blog", "nav.contact": "Contact",
    "theme.toggle": "Switch between dark and light theme",
    "hero.status": "Open to Data Analyst, BI & Data Science roles",
    "hero.hi": "Hi, I'm",
    "hero.lead": "**Data Science graduate** with **about one year of hands-on experience** in data analysis, data visualization and machine learning. I turn messy, complex data into **dashboards and insights that support real decisions**.",
    "hero.cta.projects": "View projects", "hero.cta.cv": "Download CV", "hero.cta.pf": "Download portfolio",
    "hero.gpa": "GPA", "hero.based": "Current location", "hero.loc": "Surabaya, Indonesia", "hero.interns": "internships", "hero.projects": "projects", "hero.certs": "certificates & awards",
    "about.title": "About me",
    "about.sub": "Who I am and what I bring to a data team.",
    "about.p1": "I'm a **Data Science graduate (S.Si.D.)** from Telkom University Surabaya with **about one year of hands-on experience** through internships and projects in data analysis, data visualization and machine learning.",
    "about.p2": "I've **cleaned and validated data, built dashboards, automated reporting** and evaluated models in asset management, elections, health and research-trend analysis.",
    "about.p3": "What I enjoy most is turning **complex data into insights and practical solutions** that people can act on, and I keep learning to sharpen my technical skills.",
    "about.domains": "Where I've applied data",
    "dom.asset": "Asset management", "dom.election": "Elections & public information", "dom.health": "Health", "dom.research": "Research-trend analysis", "dom.edu": "Education & society",
    "edu.title": "Education",
    "edu.course": "Relevant coursework", "edu.sub": "Formal academic background, relevant coursework and leadership activities.", "edu.gpa": "Cumulative GPA", "edu.roles": "Roles & activities", "nav.edu": "Education",
    "skills.title": "Tools & skills",
    "skills.sub": "Click a tool to see the projects where I used it.",
    "skills.usedin": "Used in", "skills.none": "No project lists this tool yet.",
    "skills.hard": "Hard skills", "skills.soft": "Soft skills",
    "exp.title": "Professional Experience",
    "exp.sub": "Hands-on internships in **asset management** and **election data**, an **MLOps** mentorship, plus leadership and speaking work alongside my studies.", "exp.doc": "View documentation on LinkedIn", "exp.nophoto": "Documentation",
    "exp.tab.pro": "Professional", "exp.tab.lead": "Leadership & speaking",
    "proj.title": "Featured projects",
    "proj.sub": "Three projects that show how I work from raw data to something people use.",
    "more.title": "More projects",
    "more.sub": "Course, competition and research work across dashboards, visualization and machine learning.",
    "f.all": "All", "f.dashboard": "Dashboard analytics", "f.viz": "Data visualization", "f.ml": "Machine learning & AI",
    "f.license": "Certifications", "f.award": "Competitions & awards", "f.activity": "Internships & activities",
    "btn.inspect": "Open preview", "btn.verify": "View certificate", "btn.verifyOnline": "Open credential page", "btn.soon": "Link coming soon", "btn.fullsize": "Open full view", "btn.viewproj": "See the project", "m.docs": "Documentation", "btn.slides": "Slides / PPT", "btn.github": "GitHub", "btn.linkedin": "LinkedIn", "cert.done": "Issued", "lb.cred": "Credential ID", "m.noimg": "Project images not added yet", "m.page": "Page", "m.pages": "pages", "m.fullview": "Click to view full size", "m.pagesTitle": "Dashboard pages", "btn.viewpages": "See all {n} pages", "exp.docs": "Documentation", "exp.related": "Related project", "exp.docs.open": "View documentation", "fact.type": "Type", "fact.period": "Period", "fact.result": "Result", "lb.issuer": "Issued by", "lb.issued": "Issued", "lb.field": "Field", "lb.about": "About this certificate", "lb.zoom": "Click to zoom in or out", "cert.item": "Certificate", "cert.n": "certificates", "team.tag": "Team project", "team.title": "Team project", "team.of": "Team of {n}", "team.role": "My role", "team.members": "Team members", "team.intro": "This project was built together with a team.", "btn.details": "View details", "btn.live": "Open dashboard", "btn.more": "Read more",
    "conf": "Confidential data: the dashboard is not public",
    "showing": "Showing {a}–{b} of {t}", "pg.prev": "Previous page", "pg.next": "Next page", "btn.viewcert": "View certificate",
    "m.overview": "Overview", "m.did": "What I did", "m.results": "Results", "m.skills": "Skills", "m.tools": "Tools", "m.close": "Close",
    "certs.title": "Certificates & awards",
    "certs.sub": "Professional certifications first, then competitions and internship certificates. Click a certificate image to preview it.",
    "certs.more": "Show more", "certs.less": "Show fewer",
    "lb.prev": "Previous", "lb.next": "Next", "lb.noimg": "Certificate image not added yet",
    "blog.title": "Writing",
    "blog.sub": "Short writing on data basics, data storytelling and my first steps in deploying a data project, published on Medium.",
    "blog.read": "Read on Medium", "blog.soon": "Link coming soon", "blog.all": "All posts on Medium", "blog.latest": "Latest", "blog.mins": "min read", "blog.series": "Series", "blog.follow": "Follow on Instagram", "blog.comingsoon": "Coming soon", "blog.count": "articles published", "blog.platform": "Platform", "blog.topics": "Topics", "blog.topics.v": "Data basics · Data storytelling · Deployment",
    "contact.title": "Let's connect",
    "contact.sub": "Thanks for visiting my portfolio. I'm open to new opportunities, meaningful collaboration and constructive feedback. Reach out to talk data analysis or data science, trade ideas, or explore a data-driven project.",
    "contact.email": "Email", "contact.loc": "Location", "contact.avail": "Available",
    "contact.copy": "Copy email", "contact.copied": "Email copied",
    "form.name": "Your name", "form.email": "Your email", "form.subject": "Subject", "form.msg": "Your message",
    "form.send": "Open in email app", "form.note": "This opens your email app with the message ready to send.",
    "form.err.name": "Enter your name.", "form.err.email": "Enter a valid email address.", "form.err.msg": "Write a short message.",
    "foot.built": "© 2026 Talitharhmd. All Rights Reserved.", "foot.top": "Back to top", "dock.talk": "Let's talk"
  },
  id: {
    "skip": "Lewati ke konten",
    "nav.home": "Beranda", "nav.about": "Tentang", "nav.skills": "Keahlian", "nav.experience": "Pengalaman",
    "nav.projects": "Proyek", "nav.certs": "Sertifikat", "nav.blog": "Blog", "nav.contact": "Kontak",
    "theme.toggle": "Ganti tema gelap atau terang",
    "hero.status": "Terbuka untuk posisi Data Analyst, BI & Data Science",
    "hero.hi": "Halo, saya",
    "hero.lead": "Lulusan Sains Data dengan pengalaman praktis sekitar 1 tahun di analisis data, visualisasi data, dan machine learning. Saya mengubah data yang kompleks dan berantakan menjadi dashboard dan insight untuk mendukung pengambilan keputusan.",
    "hero.cta.projects": "Lihat proyek", "hero.cta.cv": "Unduh CV", "hero.cta.pf": "Unduh portofolio",
    "hero.gpa": "IPK", "hero.based": "Lokasi saat ini", "hero.loc": "Surabaya, Indonesia", "hero.interns": "magang", "hero.projects": "proyek", "hero.certs": "sertifikat & penghargaan",
    "about.title": "Tentang saya",
    "about.sub": "Siapa saya dan apa yang bisa saya bawa ke tim data.",
    "about.p1": "Saya **lulusan Sains Data (S.Si.D.)** Telkom University Surabaya dengan **pengalaman praktis sekitar 1 tahun** melalui magang dan proyek di bidang analisis data, visualisasi data, dan machine learning.",
    "about.p2": "Saya berpengalaman dalam **data cleaning, validasi data, pengembangan dashboard, otomatisasi pelaporan**, dan evaluasi model pada bidang pengelolaan aset, pemilu, kesehatan, dan analisis tren penelitian.",
    "about.p3": "Yang paling saya sukai adalah mengolah **data yang kompleks menjadi insight dan solusi praktis** yang dapat ditindaklanjuti, disertai rasa ingin tahu yang tinggi dan komitmen untuk terus belajar.",
    "about.domains": "Bidang yang pernah saya garap",
    "dom.asset": "Pengelolaan aset", "dom.election": "Pemilu & informasi publik", "dom.health": "Kesehatan", "dom.research": "Analisis tren penelitian", "dom.edu": "Pendidikan & sosial",
    "edu.title": "Pendidikan",
    "edu.course": "Mata kuliah relevan", "edu.sub": "Latar belakang akademik, mata kuliah relevan, dan aktivitas kepemimpinan.", "edu.gpa": "IPK kumulatif", "edu.roles": "Peran & aktivitas", "nav.edu": "Pendidikan",
    "skills.title": "Tools & keahlian",
    "skills.sub": "Klik sebuah tool untuk melihat proyek tempat saya memakainya.",
    "skills.usedin": "Dipakai di", "skills.none": "Belum ada proyek yang mencantumkan tool ini.",
    "skills.hard": "Hard skills", "skills.soft": "Soft skills",
    "exp.title": "Pengalaman Profesional",
    "exp.sub": "Magang langsung di bidang **pengelolaan aset** dan **data pemilu**, mentorship **MLOps**, ditambah kegiatan kepemimpinan dan public speaking di sela kuliah.", "exp.doc": "Lihat dokumentasi di LinkedIn", "exp.nophoto": "Dokumentasi",
    "exp.tab.pro": "Profesional", "exp.tab.lead": "Kepemimpinan & public speaking",
    "proj.title": "Proyek unggulan",
    "proj.sub": "Tiga proyek yang menunjukkan cara kerja saya dari data mentah hingga sesuatu yang benar-benar dipakai.",
    "more.title": "Proyek lainnya",
    "more.sub": "Proyek kuliah, kompetisi, dan riset di bidang dashboard, visualisasi, dan machine learning.",
    "f.all": "Semua", "f.dashboard": "Dashboard analytics", "f.viz": "Visualisasi data", "f.ml": "Machine learning & AI",
    "f.license": "Sertifikasi", "f.award": "Kompetisi & penghargaan", "f.activity": "Magang & kegiatan",
    "btn.inspect": "Lihat pratinjau", "btn.verify": "Lihat sertifikat", "btn.verifyOnline": "Buka halaman kredensial", "btn.soon": "Link menyusul", "btn.fullsize": "Buka tampilan penuh", "btn.viewproj": "Lihat proyek", "m.docs": "Dokumentasi", "btn.slides": "Slide / PPT", "btn.github": "GitHub", "btn.linkedin": "LinkedIn", "cert.done": "Terbit", "lb.cred": "ID Kredensial", "m.noimg": "Gambar proyek belum ditambahkan", "m.page": "Halaman", "m.pages": "halaman", "m.fullview": "Klik untuk melihat ukuran penuh", "m.pagesTitle": "Halaman dashboard", "btn.viewpages": "Lihat {n} halaman", "exp.docs": "Dokumentasi", "exp.related": "Proyek terkait", "exp.docs.open": "Lihat dokumentasi", "fact.type": "Jenis", "fact.period": "Periode", "fact.result": "Hasil", "lb.issuer": "Diterbitkan oleh", "lb.issued": "Tanggal terbit", "lb.field": "Bidang", "lb.about": "Tentang sertifikat", "lb.zoom": "Klik untuk memperbesar atau memperkecil", "cert.item": "Sertifikat", "cert.n": "sertifikat", "team.tag": "Proyek tim", "team.title": "Proyek tim", "team.of": "Tim {n} orang", "team.role": "Peran saya", "team.members": "Anggota tim", "team.intro": "Proyek ini dikerjakan bersama tim.", "btn.details": "Lihat detail", "btn.live": "Buka dashboard", "btn.more": "Selengkapnya",
    "conf": "Data rahasia: dashboard tidak dapat diakses publik",
    "showing": "Menampilkan {a}–{b} dari {t}", "pg.prev": "Halaman sebelumnya", "pg.next": "Halaman berikutnya", "btn.viewcert": "Lihat sertifikat",
    "m.overview": "Ringkasan", "m.did": "Yang saya kerjakan", "m.results": "Hasil", "m.skills": "Keahlian", "m.tools": "Tools", "m.close": "Tutup",
    "certs.title": "Sertifikat & penghargaan",
    "certs.sub": "Sertifikasi profesional lebih dulu, lalu kompetisi dan sertifikat magang. Klik gambar sertifikat untuk melihat pratinjau.",
    "certs.more": "Tampilkan lebih banyak", "certs.less": "Tampilkan lebih sedikit",
    "lb.prev": "Sebelumnya", "lb.next": "Berikutnya", "lb.noimg": "Gambar sertifikat belum ditambahkan",
    "blog.title": "Tulisan",
    "blog.sub": "Tulisan singkat tentang dasar data, data storytelling, dan langkah pertamaku men-deploy proyek data, diterbitkan di Medium.",
    "blog.read": "Baca di Medium", "blog.soon": "Tautan segera hadir", "blog.all": "Semua tulisan di Medium", "blog.latest": "Terbaru", "blog.mins": "menit baca", "blog.series": "Seri", "blog.follow": "Ikuti di Instagram", "blog.comingsoon": "Segera hadir", "blog.count": "artikel terbit", "blog.platform": "Platform", "blog.topics": "Topik", "blog.topics.v": "Dasar data · Data storytelling · Deployment",
    "contact.title": "Mari terhubung",
    "contact.sub": "Terima kasih telah mengunjungi portofolio saya. Saya terbuka terhadap peluang baru, kolaborasi yang bermakna, dan masukan yang membangun. Hubungi saya untuk berdiskusi seputar analisis data atau sains data, bertukar ide, maupun menjajaki proyek berbasis data.",
    "contact.email": "Email", "contact.loc": "Lokasi", "contact.avail": "Ketersediaan",
    "contact.copy": "Salin email", "contact.copied": "Email disalin",
    "form.name": "Nama Anda", "form.email": "Email Anda", "form.subject": "Subjek", "form.msg": "Pesan Anda",
    "form.send": "Buka di aplikasi email", "form.note": "Tombol ini membuka aplikasi email dengan pesan yang sudah terisi.",
    "form.err.name": "Isi nama Anda.", "form.err.email": "Masukkan alamat email yang valid.", "form.err.msg": "Tulis pesan singkat.",
    "foot.built": "© 2026 Talitharhmd. Seluruh hak cipta dilindungi.", "foot.top": "Kembali ke atas", "dock.talk": "Ayo ngobrol"
  }
};
