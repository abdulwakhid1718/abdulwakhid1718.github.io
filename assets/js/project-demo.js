const projects = {
  pengaduan: {
    category: "Web App",
    title: "Sistem Informasi Pengaduan Masyarakat",
    subtitle: "Portal laporan yang sederhana, cepat, dan mudah dipakai.",
    description:
      "Halaman demo ini menampilkan konsep project pengaduan masyarakat dengan alur laporan, status tindak lanjut, dan tampilan ringkas untuk admin.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Form pengaduan yang responsif",
      "Status laporan dan tindak lanjut",
      "Tampilan dashboard admin yang ringkas",
      "Navigasi mudah di perangkat mobile",
    ],
    highlights: [
      {
        title: "Fokus",
        text: "Membuat proses pelaporan lebih cepat dan jelas.",
      },
      {
        title: "UI",
        text: "Menggunakan layout card agar informasi mudah dibaca.",
      },
      {
        title: "Teknologi",
        text: "Cocok untuk stack HTML, CSS, JavaScript, dan PHP.",
      },
    ],
    accent: "#8b5cf6",
    previewTitle: "Laporan Masuk",
    previewSummary: "12 laporan aktif • 4 menunggu proses • 8 selesai",
  },
  perpustakaan: {
    category: "Web App",
    title: "Sistem Informasi Perpustakaan",
    subtitle: "Pengelolaan data buku, transaksi, dan pencarian katalog.",
    description:
      "Demo ini menggambarkan project perpustakaan berbasis web dengan fokus pada data buku, peminjaman, pengembalian, dan pencarian katalog yang cepat.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Manajemen data buku",
      "Peminjaman dan pengembalian",
      "Pencarian katalog",
      "Ringkasan data perpustakaan",
    ],
    highlights: [
      { title: "Fokus", text: "Memudahkan pengelolaan inventaris buku." },
      { title: "UX", text: "Navigasi sederhana untuk petugas dan pengguna." },
      {
        title: "Teknologi",
        text: "Dibangun dengan pendekatan website sekolah/kampus.",
      },
    ],
    accent: "#22c55e",
    previewTitle: "Katalog Buku",
    previewSummary:
      "258 judul tersedia • 34 dipinjam • 19 pengembalian hari ini",
  },
  "react-dashboard": {
    category: "React UI",
    title: "Dashboard React untuk Monitoring Data",
    subtitle: "Tampilan dashboard modern dengan komponen reusable.",
    description:
      "Project demo ini menampilkan arah skill React untuk membangun dashboard modern, komponen reusable, dan visualisasi data sederhana.",
    stack: ["React", "JavaScript", "CSS", "Responsive Design"],
    features: [
      "Komponen reusable",
      "Dashboard ringkas dan modern",
      "Layout responsive",
      "Cocok untuk visualisasi data",
    ],
    highlights: [
      { title: "Fokus", text: "Membangun komponen yang mudah dipakai ulang." },
      {
        title: "UI",
        text: "Mengikuti tampilan dashboard modern dengan kartu statistik.",
      },
      {
        title: "Teknologi",
        text: "Bagus untuk menampilkan kemampuan React di portfolio.",
      },
    ],
    accent: "#38bdf8",
    previewTitle: "Overview Data",
    previewSummary: "8 widgets aktif • 3 grafik utama • 96% responsif",
  },
};

const params = new URLSearchParams(window.location.search);
const projectKey = params.get("project") || "pengaduan";
const project = projects[projectKey] || projects.pengaduan;

const demoCategory = document.getElementById("demo-category");
const demoTitle = document.getElementById("demo-title");
const demoSubtitle = document.getElementById("demo-subtitle");
const demoDescription = document.getElementById("demo-description");
const demoStack = document.getElementById("demo-stack");
const demoFeatures = document.getElementById("demo-features");
const demoHighlights = document.getElementById("demo-highlights");
const demoPreview = document.getElementById("demo-preview");

if (demoCategory) demoCategory.textContent = project.category;
if (demoTitle) demoTitle.textContent = project.title;
if (demoSubtitle) demoSubtitle.textContent = project.subtitle;
if (demoDescription) demoDescription.textContent = project.description;
document.title = `${project.title} | Portfolio Demo`;

demoStack.innerHTML = project.stack
  .map((item) => `<span class="demo-tag">${item}</span>`)
  .join("");
demoFeatures.innerHTML = project.features
  .map((item) => `<li>${item}</li>`)
  .join("");
demoHighlights.innerHTML = project.highlights
  .map(
    (item) => `
    <div class="demo-highlight">
        <strong>${item.title}</strong>
        <span>${item.text}</span>
    </div>
`,
  )
  .join("");

demoPreview.innerHTML = `
    <div class="demo-preview-panel" style="--accent: ${project.accent}">
        <div class="demo-preview-top">
            <div class="demo-preview-card">
                <p class="demo-preview-title">${project.previewTitle}</p>
                <p class="demo-subtitle" style="margin: .4rem 0 0;">${project.previewSummary}</p>
            </div>
            <div class="demo-preview-mini" style="background: linear-gradient(135deg, ${project.accent}, rgba(255,255,255,.05));"></div>
        </div>
        <div class="demo-preview-stats">
            <div class="demo-preview-row">
                <div class="demo-preview-bar"><span style="width: 86%;"></span></div>
                <div class="demo-preview-bar"><span style="width: 72%;"></span></div>
                <div class="demo-preview-bar"><span style="width: 61%;"></span></div>
            </div>
        </div>
        <div class="demo-preview-footer">
            <div class="demo-preview-card">
                <p class="demo-preview-title">Prototype</p>
                <p class="demo-subtitle" style="margin: .4rem 0 0;">Demo showcase untuk menampilkan alur project dan teknologi yang dipakai.</p>
            </div>
        </div>
    </div>
`;
