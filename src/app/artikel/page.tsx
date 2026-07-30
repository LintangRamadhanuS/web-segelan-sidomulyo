import type { Metadata } from "next";
import { artikel, artikelKategoriWarna, dusunInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Artikel",
  description: `Kumpulan artikel tentang sejarah, budaya, dan kehidupan ${dusunInfo.nama}.`,
};

export default function ArtikelPage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-stone-800 to-tanah overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, white 0, white 1px, transparent 0, transparent 48px), " +
              "repeating-linear-gradient(90deg, white 0, white 1px, transparent 0, transparent 48px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-desa relative z-10 text-center text-white">
          <p className="text-emas font-semibold text-sm uppercase tracking-wider mb-4">
            Baca & Pelajari
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Artikel Dusun
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Kumpulan tulisan tentang sejarah, budaya, tradisi, dan kehidupan
            masyarakat {dusunInfo.nama}. Klik kartu untuk membaca artikel
            lengkap dalam format PDF.
          </p>

          {/* Info badge */}
          <div className="inline-flex items-center gap-2 mt-8 bg-white/10 backdrop-blur-sm
                          border border-white/20 rounded-full px-5 py-2.5 text-sm text-white/80">
            <span>📄</span>
            <span>{artikel.length} artikel tersedia · Format PDF via Google Drive</span>
          </div>
        </div>
      </section>

      {/* ── GRID ARTIKEL ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-krem min-h-[60vh]">
        <div className="container-desa">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artikel.map((item) => (
              <ArtikelCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CATATAN ──────────────────────────────────────────────────────── */}
      <section className="py-10 bg-white border-t border-krem-dark">
        <div className="container-desa max-w-2xl text-center">
          <p className="text-tanah/50 text-sm leading-relaxed">
            Semua artikel tersimpan di Google Drive dan dapat dibaca secara gratis.
            Untuk kontribusi artikel, hubungi kami di{" "}
            <a
              href={`mailto:${dusunInfo.kontak.email}`}
              className="text-hijau hover:underline"
            >
              {dusunInfo.kontak.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

// ── Komponen Card Artikel ──────────────────────────────────────────────────
function ArtikelCard({
  item,
}: {
  item: (typeof artikel)[0];
}) {
  const belumDiisi = item.judul.includes("Belum Diisi");

  return (
    <div
      className={`card flex flex-col group transition-all duration-300 hover:-translate-y-1 ${
        belumDiisi ? "opacity-50 grayscale" : ""
      }`}
    >
      {/* Header warna */}
      <div className="h-40 bg-gradient-to-br from-amber-50 via-orange-50 to-krem
                      flex items-center justify-center text-6xl border-b border-krem-dark
                      group-hover:from-amber-100 transition-colors duration-300">
        {item.ikon}
      </div>

      {/* Konten */}
      <div className="p-5 flex flex-col flex-1">
        {/* Badge kategori + nomor */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`badge ${
              artikelKategoriWarna[item.kategori] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {item.kategori}
          </span>
          <span className="text-tanah/30 text-xs font-mono">#{item.id}</span>
        </div>

        {/* Judul */}
        <h3 className="font-display font-semibold text-tanah-dark text-base leading-snug mb-2 flex-1">
          {belumDiisi ? (
            <span className="italic text-tanah/40">Judul artikel belum diisi</span>
          ) : (
            item.judul
          )}
        </h3>

        {/* Meta */}
        {!belumDiisi && (
          <>
            <p className="text-tanah/50 text-xs mb-3">
              ✍️ {item.penulis} · {item.tanggal}
            </p>
            <p className="text-tanah/70 text-sm leading-relaxed mb-4 line-clamp-3">
              {item.ringkasan}
            </p>
          </>
        )}

        {/* Tombol baca */}
        {belumDiisi ? (
          <div className="mt-auto pt-4 border-t border-krem-dark">
            <span className="text-xs text-tanah/30 italic">
              Segera hadir — artikel sedang disiapkan
            </span>
          </div>
        ) : (
          <a
            href={item.linkGDrive}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto btn-primary text-sm py-2.5 justify-center"
          >
            📖 Baca Artikel (PDF)
          </a>
        )}
      </div>
    </div>
  );
}
