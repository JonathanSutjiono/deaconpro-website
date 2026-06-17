export type Insight = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  imageAlt: string;
};

// CMS-ready static insight source. Replace this array with a CMS fetch later.
export const insights: Insight[] = [
  {
    title: "Tips Memilih Kontraktor Rumah di Jakarta",
    slug: "tips-memilih-kontraktor-rumah-di-jakarta",
    category: "Construction",
    excerpt:
      "Cara menilai kontraktor rumah Jakarta dari sisi komunikasi, perencanaan, budgeting, kualitas kerja, dan project management.",
    content: [
      "Memilih kontraktor rumah di Jakarta membutuhkan penilaian yang lebih luas daripada harga awal. Klien perlu melihat cara kontraktor memahami kebutuhan properti, menyusun tahapan kerja, dan menjelaskan risiko proyek.",
      "Kontraktor yang baik membantu menyelaraskan desain, budgeting, material, jadwal, dan kualitas lapangan sejak awal. Transparansi pada proses ini akan membuat keputusan konstruksi lebih terkendali.",
      "PT Deacon Pro Konstruksi Indonesia mendukung klien melalui pendekatan project management agar pekerjaan dapat berjalan sesuai rencana, kualitas, dan kebutuhan properti.",
    ],
    coverImage: "/images/hero-architecture.png",
    publishedAt: "2026-06-01",
    seoTitle: "Tips Memilih Kontraktor Rumah di Jakarta",
    seoDescription:
      "Tips memilih kontraktor rumah Jakarta untuk proyek Build New, renovasi, dan construction management.",
    imageAlt: "Tips memilih kontraktor rumah Jakarta",
  },
  {
    title: "Checklist Sebelum Renovasi Rumah",
    slug: "checklist-sebelum-renovasi-rumah",
    category: "Renovation",
    excerpt:
      "Hal penting yang perlu disiapkan sebelum renovasi rumah, mulai dari kondisi bangunan, prioritas ruang, budget, hingga jadwal kerja.",
    content: [
      "Renovasi rumah sebaiknya dimulai dengan pemeriksaan kondisi eksisting. Struktur, instalasi, kebocoran, kelembapan, dan kebutuhan ruang harus dipahami sebelum memilih finishing.",
      "Checklist renovasi juga perlu mencakup prioritas pekerjaan, batas budget, target waktu, dan area yang tetap harus bisa digunakan selama proyek berjalan.",
      "Dengan perencanaan yang rapi, jasa renovasi rumah Kelapa Gading dan Jakarta dapat menghasilkan ruang yang lebih fungsional tanpa kehilangan kontrol biaya dan kualitas.",
    ],
    coverImage: "/images/hero-architecture.png",
    publishedAt: "2026-05-20",
    seoTitle: "Checklist Sebelum Renovasi Rumah",
    seoDescription:
      "Checklist renovasi rumah untuk klien yang membutuhkan jasa renovasi rumah Kelapa Gading dan Jakarta.",
    imageAlt: "Checklist sebelum renovasi rumah",
  },
  {
    title: "Perbedaan Design and Build dengan Kontraktor Umum",
    slug: "perbedaan-design-and-build-dengan-kontraktor-umum",
    category: "Design & Build",
    excerpt:
      "Design and Build menyatukan desain dan pelaksanaan, sementara kontraktor umum biasanya fokus pada eksekusi konstruksi.",
    content: [
      "Design and Build mengintegrasikan proses desain, budgeting, koordinasi material, dan pelaksanaan dalam satu alur yang lebih terpadu.",
      "Kontraktor umum biasanya menjalankan pekerjaan berdasarkan gambar dan spesifikasi yang sudah tersedia. Keduanya bisa tepat, tergantung kebutuhan proyek.",
      "Untuk klien yang ingin proses lebih ringkas, Design and Build dapat membantu mengurangi gap antara konsep, biaya, dan realisasi lapangan.",
    ],
    coverImage: "/images/hero-architecture.png",
    publishedAt: "2026-05-10",
    seoTitle: "Perbedaan Design and Build dengan Kontraktor Umum",
    seoDescription:
      "Penjelasan perbedaan Design and Build dan kontraktor umum untuk proyek konstruksi dan renovasi.",
    imageAlt: "Perbedaan design and build dengan kontraktor umum",
  },
  {
    title: "Tips Desain Interior Kantor Komersial",
    slug: "tips-desain-interior-kantor-komersial",
    category: "Interior",
    excerpt:
      "Interior kantor komersial perlu menyeimbangkan produktivitas, identitas brand, sirkulasi, material, dan kebutuhan maintenance.",
    content: [
      "Desain interior kantor komersial tidak hanya mengejar tampilan visual. Ruang harus membantu produktivitas, koordinasi tim, kenyamanan, dan pengalaman tamu.",
      "Pemilihan material, lighting, akustik, storage, dan furniture perlu disesuaikan dengan intensitas penggunaan harian.",
      "Kontraktor interior Jakarta yang memahami fit-out dan project management dapat membantu kantor selesai dengan rapi, tepat waktu, dan mudah dirawat.",
    ],
    coverImage: "/images/hero-architecture.png",
    publishedAt: "2026-05-01",
    seoTitle: "Tips Desain Interior Kantor Komersial",
    seoDescription:
      "Tips desain interior kantor komersial dan fit-out untuk klien di Jakarta.",
    imageAlt: "Tips desain interior kantor komersial",
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
