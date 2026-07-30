import Link from "next/link";
import { dusunInfo, ausalUsulDusun, kegiatanKKN, artikel } from "@/lib/data";

function StatCard({ angka, label, ikon }: { angka: string; label: string; ikon: string }) {
  return (
    <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
      <div className="text-3xl mb-1">{ikon}</div>
      <div className="text-3xl font-display font-bold text-emas">{angka}</div>
      <div className="text-white/80 text-sm mt-1">{label}</div>
    </div>
  );
}

function PilarCard({
  ikon, judul, deskripsi, href, warna,
}: {
  ikon: string; judul: string; deskripsi: string; href: string; warna: string;
}) {
  return (
    <Link href={href} className="group card p-8 flex flex-col gap-4 text-center hover:-translate-y-1 transition-transform duration-300">
      <div className={`w-16 h-16 rounded-2xl ${warna} flex items-center justify-center text-3xl mx-auto shadow-sm group-hover:scale-110 transition-transform`}>
        {ikon}
      </div>
      <h3 className="text-xl font-display font-semibold text-tanah-dark">{judul}</h3>
      <p className="text-tanah/70 text-sm leading-relaxed">{deskripsi}</p>
      <span className="text-hijau font-medium text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
        Selengkapnya <span className="group-hover:translate-x-1 transition-transform">→</span>
      </span>
    </Link>
  );
}

export default function HomePage() {
  const timelineTerbaru = ausalUsulDusun.timeline.slice(-2);
  const kegiatanTerbaru = kegiatanKKN.slice(0, 3);
  const artikelTerbaru  = artikel.filter((a) => !a.judul.includes("Belum Diisi")).slice(0, 3);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-center overflow-hidden pt-24 pb-12"
        style={{
          backgroundImage: "url('/images/hero-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gelap agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-tanah-dark/70" />

        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        {/* Teks utama */}
        <div className="container-desa relative z-10 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm
                          border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 mb-8">
            <span className="w-2 h-2 rounded-full bg-emas animate-pulse" />
            {dusunInfo.desa}, Kec. {dusunInfo.kecamatan}, {dusunInfo.kabupaten}
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            {dusunInfo.nama}
          </h1>

          <p className="text-emas font-display italic text-xl mb-4">
            &ldquo;{dusunInfo.semboyan}&rdquo;
          </p>

          <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {dusunInfo.deskripsi}
          </p>

          {/* Tombol navigasi */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/asal-usul" className="btn-primary bg-emas text-tanah-dark hover:bg-emas-light">
              📖 Asal Usul Dusun
            </Link>
            <Link href="/dokumentasi-umbbm" className="btn-outline border-white text-white hover:bg-white hover:text-tanah-dark">
              📸 Dokumentasi KKN
            </Link>
          </div>

          {/* StatCard — di bawah tombol, dalam flow normal */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard angka={dusunInfo.desa}      label="Desa"       ikon="🏘️" />
            <StatCard angka={dusunInfo.kecamatan} label="Kecamatan"  ikon="🗺️" />
            <StatCard angka={dusunInfo.kabupaten} label="Kabupaten"  ikon="📍" />
            <StatCard angka={dusunInfo.provinsi}  label="Provinsi"   ikon="🌏" />
          </div>
        </div>
      </section>

      {/* ── 3 PILAR UTAMA ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-krem">
        <div className="container-desa">
          <div className="text-center mb-12">
            <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-3">Temukan di Website Ini</p>
            <h2 className="section-title">Jelajahi Dusun Segelan Sidomulyo</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PilarCard
              ikon="🏛️"
              judul="Asal Usul & Sejarah"
              deskripsi="Kisah di balik nama Segelan Sidomulyo — dari lahan yang disegel hingga lahirnya dusun yang makmur."
              href="/asal-usul"
              warna="bg-amber-100"
            />
            <PilarCard
              ikon="🏺"
              judul="Folklore & Dongeng"
              deskripsi="Cerita rakyat, legenda, dan dongeng anak-anak khas Dusun Segelan yang diwariskan turun-temurun."
              href="/folklore"
              warna="bg-orange-100"
            />
            <PilarCard
              ikon="📸"
              judul="Dokumentasi KKN UM BBM"
              deskripsi="Rekam jejak program kerja dan kegiatan tim KKN UM BBM Kelompok 1 selama berkarya di dusun."
              href="/dokumentasi-umbbm"
              warna="bg-green-100"
            />
          </div>
        </div>
      </section>

      {/* ── CUPLIKAN SEJARAH ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-desa">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-2">Kilas Balik</p>
              <h2 className="section-title">Asal Usul Dusun</h2>
            </div>
            <Link href="/asal-usul" className="text-hijau font-medium hover:underline text-sm flex-shrink-0">
              Baca selengkapnya →
            </Link>
          </div>

          {/* Quote utama */}
          <blockquote className="bg-krem border-l-4 border-emas rounded-r-2xl p-6 md:p-8 mb-10 max-w-3xl">
            <p className="font-display text-lg md:text-xl text-tanah-dark italic leading-relaxed">
              &ldquo;Nama Segelan Sidomulyo mencerminkan sejarah lahan yang dahulu disegel — dikunci —
              dan harapan akan kemakmuran bagi seluruh warganya.&rdquo;
            </p>
            <footer className="mt-3 text-tanah/60 text-sm not-italic">
              — Penuturan para pendahulu dusun
            </footer>
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="card p-6 border-l-4 border-tanah">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-display font-semibold text-tanah-dark text-lg mb-2">Segelan</h3>
              <p className="text-tanah/70 text-sm leading-relaxed">
                Berasal dari kata <em>segel</em> — tanah di wilayah ini dahulu pernah disegel atau dikunci.
              </p>
            </div>
            <div className="card p-6 border-l-4 border-hijau">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-display font-semibold text-tanah-dark text-lg mb-2">Sidomulyo</h3>
              <p className="text-tanah/70 text-sm leading-relaxed">
                Dari bahasa Jawa: <em>sido</em> (terwujud) + <em>mulyo</em> (makmur) — harapan kemakmuran bagi warga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOROTAN KKN ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-hijau/5">
        <div className="container-desa">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-2">KKN UM BBM · Kelompok 1</p>
              <h2 className="section-title">Dokumentasi Kegiatan</h2>
            </div>
            <Link href="/dokumentasi-umbbm" className="text-hijau font-medium hover:underline text-sm flex-shrink-0">
              Lihat semua →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kegiatanTerbaru.map((kegiatan) => (
              <div key={kegiatan.id} className="card overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-hijau/20 to-tanah/20 flex items-center justify-center text-5xl
                                group-hover:scale-105 transition-transform duration-300 origin-center overflow-hidden">
                  📸
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge bg-hijau/10 text-hijau">{kegiatan.kategori}</span>
                    <span className="text-tanah/50 text-xs">{kegiatan.tanggal}</span>
                  </div>
                  <h3 className="font-display font-semibold text-tanah-dark mb-2">{kegiatan.judul}</h3>
                  <p className="text-tanah/70 text-sm leading-relaxed line-clamp-3">{kegiatan.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTIKEL TERBARU ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-desa">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-2">Baca & Pelajari</p>
              <h2 className="section-title">Artikel Terbaru</h2>
            </div>
            <Link href="/artikel" className="text-hijau font-medium hover:underline text-sm flex-shrink-0">
              Lihat semua artikel →
            </Link>
          </div>

          {artikelTerbaru.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {artikelTerbaru.map((item) => (
                <div key={item.id} className="card p-6 flex flex-col hover:-translate-y-1 transition-transform">
                  <div className="h-32 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl flex items-center justify-center text-5xl mb-4">
                    {item.ikon}
                  </div>
                  <span className="badge bg-amber-100 text-amber-800 mb-2">{item.kategori}</span>
                  <h3 className="font-display font-semibold text-tanah-dark mt-2 mb-2 leading-snug flex-1">
                    {item.judul}
                  </h3>
                  <p className="text-tanah/60 text-sm line-clamp-2 mb-4">{item.ringkasan}</p>
                  <a
                    href={item.linkGDrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 justify-center"
                  >
                    📖 Baca Artikel
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-tanah/50">
              <div className="text-5xl mb-4">📄</div>
              <p>Artikel segera hadir — <Link href="/artikel" className="text-hijau hover:underline">lihat halaman artikel</Link></p>
            </div>
          )}
        </div>
      </section>

      {/* ── PETA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-krem">
        <div className="container-desa">
          <div className="text-center mb-10">
            <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-2">Lokasi</p>
            <h2 className="section-title">Temukan Kami</h2>
            <p className="text-tanah/70 mt-3">{dusunInfo.kontak.alamat}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-krem-dark h-80 bg-tanah/10 flex items-center justify-center">
            <div className="text-center text-tanah/40">
              <div className="text-5xl mb-3">🗺️</div>
              <p className="text-sm">Embed Google Maps di sini</p>
              <p className="text-xs mt-1">Ganti bagian ini dengan iframe dari google.com/maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-hijau-dark to-tanah-dark text-white">
        <div className="container-desa text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Bersama Mendokumentasikan Dusun Kita
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Website ini adalah karya bersama tim KKN UM BBM Kelompok 1 dan
            seluruh warga {dusunInfo.nama}. Mari kita jaga warisan budaya bersama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artikel" className="btn-primary bg-emas text-tanah-dark">
              📄 Baca Artikel
            </Link>
            <Link href="/dongeng-anak" className="btn-outline border-white text-white hover:bg-white hover:text-tanah-dark">
              📚 Dongeng Anak
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
