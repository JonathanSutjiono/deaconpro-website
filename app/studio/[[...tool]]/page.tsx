import StudioClient from "./StudioClient";

const isConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET &&
    process.env.NEXT_PUBLIC_SANITY_API_VERSION,
);

export default function StudioPage() {
  if (!isConfigured) {
    return (
      <main className="fixed inset-0 z-[100] grid min-h-screen place-items-center overflow-auto bg-neutral-950 px-6 py-16 text-white">
        <section className="w-full max-w-2xl border border-white/15 bg-white/[0.04] p-8 shadow-2xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-champagne">
            DEACON PRO CMS
          </p>
          <h1 className="mt-5 text-3xl font-black uppercase leading-tight md:text-5xl">
            CMS belum dikonfigurasi.
          </h1>
          <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
            Tambahkan NEXT_PUBLIC_SANITY_PROJECT_ID,
            NEXT_PUBLIC_SANITY_DATASET, dan NEXT_PUBLIC_SANITY_API_VERSION pada
            environment Vercel atau file .env.local, lalu jalankan ulang server
            atau deploy kembali.
          </p>
        </section>
      </main>
    );
  }

  return <StudioClient />;
}
