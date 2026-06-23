# Seed Sanity untuk Deacon Pro

Script seed ini hanya dijalankan manual untuk membuat konten awal di Sanity. Script tidak pernah dipanggil saat `npm run build` atau deploy Vercel.

## Persiapan

Tambahkan variabel berikut ke `.env.local` dan Vercel. Jangan pernah commit file atau token ini.

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_WRITE_TOKEN=your_write_token
```

Token harus memiliki izin write untuk dataset yang digunakan.

## Menjalankan seed

```bash
npm run seed:sanity
```

Seed bersifat idempoten: dokumen singleton yang sudah ada, serta layanan, proyek, dan artikel dengan slug yang sudah ada, akan dilewati. Untuk singleton, field baru yang belum ada dapat dilengkapi tanpa menimpa nilai milik klien. Script tidak menghapus, menggandakan, atau menimpa konten yang sudah terisi.

## Setelah seed

1. Buka `/studio` dan periksa setiap menu konten.
2. Ganti gambar representative dengan foto proyek asli melalui Media Library.
3. Periksa `Tampilkan di website`, `Siap Dipublikasikan`, dan `Urutan Tampil` sebelum publish.
4. Buka website publik di tab baru untuk mengecek WhatsApp, Google Maps, dan susunan kartu.
