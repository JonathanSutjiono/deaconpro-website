import { Card, Container, Stack, Text } from "@sanity/ui";

const steps = [
  "Pilih menu konten di sisi kiri, lalu buka dokumen atau item yang ingin diperbarui.",
  "Isi judul, teks, tautan, urutan tampil, dan gambar seperlunya. Simpan perubahan sebagai draft terlebih dahulu.",
  "Gunakan tombol Publish saat konten sudah siap tampil. Untuk menyembunyikan layanan, proyek, proses, atau insight tanpa menghapusnya, nonaktifkan Tampilkan di website.",
  "Tombol Hapus gambar dari konten ini hanya menghapus referensi gambar di halaman tersebut. File asli tetap tersimpan di Media Library.",
  "Setelah publish, cek halaman publik di tab baru. Pastikan nomor WhatsApp, tautan peta, urutan tampil, dan gambar sudah sesuai.",
];

export function CmsGuidePane() {
  return (
    <Container width={2} padding={5}>
      <Stack space={5}>
        <Stack space={3}>
          <Text size={1} weight="semibold" muted>
            PANDUAN CMS
          </Text>
          <Text size={4} weight="bold">
            Cara memperbarui website Deacon Pro
          </Text>
          <Text size={2} muted>
            Panduan singkat untuk mengelola konten tanpa mengubah tampilan website.
          </Text>
        </Stack>

        <Stack space={3}>
          {steps.map((step, index) => (
            <Card border padding={4} radius={2} tone="transparent" key={step}>
              <Stack space={2}>
                <Text size={1} weight="bold" muted>
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <Text size={2}>{step}</Text>
              </Stack>
            </Card>
          ))}
        </Stack>

        <Card border padding={4} radius={2} tone="transparent">
          <Stack space={3}>
            <Text size={2} weight="bold">
              Peta Lokasi
            </Text>
            <Text size={1}>
              Peta interaktif di website memakai OpenStreetMap, bukan Google Maps API. Field Latitude Peta dan Longitude Peta menentukan titik marker kantor.
            </Text>
            <Text size={1}>
              Jika belum yakin koordinatnya, jangan ubah sembarangan. Tautan Google Maps tetap dipakai untuk tombol navigasi, sedangkan peta website hanya untuk membantu pengunjung melihat lokasi.
            </Text>
            <Text size={1}>
              Matikan Tampilkan Peta Interaktif di menu Kontak dan Peta jika peta belum ingin ditampilkan di website.
            </Text>
          </Stack>
        </Card>

        <Card border padding={4} radius={2} tone="caution">
          <Stack space={2}>
            <Text size={2} weight="bold">
              Catatan penting
            </Text>
            <Text size={1}>
              Jangan menghapus konten contoh bila belum memiliki penggantinya. Gunakan pengaturan visibilitas bila konten hanya ingin disembunyikan sementara.
            </Text>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
