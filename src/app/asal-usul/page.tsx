import type { Metadata } from "next";
import { dusunInfo, ausalUsulDusun } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asal Usul Dusun",
  description: `Sejarah pembentukan dan asal usul nama ${dusunInfo.nama}.`,
};

export default function AsalUsulPage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-tanah-dark via-tanah to-coklat overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), " +
              "radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-desa relative z-10 text-center text-white">
          <p className="text-emas font-semibold text-sm uppercase tracking-wider mb-4">
            Mengenal Lebih Dekat
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Asal Usul Dusun
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Kisah di balik nama <em className="text-emas not-italic font-semibold">Segelan Sidomulyo</em> —
            dari lahan yang pernah dikunci hingga lahirnya harapan akan kemakmuran.
          </p>
        </div>
      </section>

      {/* ── MAKNA NAMA ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-desa max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-3">
              Filosofi Nama
            </p>
            <h2 className="section-title">Makna di Balik Nama Segelan Sidomulyo</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="card p-8 border-l-4 border-tanah text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-display font-bold text-2xl text-tanah-dark mb-3">
                Segelan
              </h3>
              <p className="text-tanah/70 leading-relaxed">
                Berasal dari kata <em className="text-tanah-dark font-semibold">segel</em> —
                merujuk pada sejarah bahwa lahan di wilayah ini dahulu pernah
                <strong className="text-tanah-dark"> disegel atau dikunci</strong>.
                Peristiwa inilah yang menjadi titik awal terbentuknya dusun ini.
              </p>
            </div>

            <div className="card p-8 border-l-4 border-hijau text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-display font-bold text-2xl text-tanah-dark mb-3">
                Sidomulyo
              </h3>
              <p className="text-tanah/70 leading-relaxed">
                Berasal dari bahasa Jawa: <em className="text-tanah-dark font-semibold">sido</em> (jadi/terwujud)
                dan <em className="text-tanah-dark font-semibold">mulyo</em> (mulia/makmur).
                Mencerminkan <strong className="text-tanah-dark">harapan dan doa</strong> para
                pendahulu agar dusun ini menjadi tempat yang makmur dan sejahtera.
              </p>
            </div>
          </div>

          {/* Quote sejarah */}
          <blockquote className="bg-krem border-l-4 border-emas rounded-r-2xl p-6 md:p-8">
            <p className="font-display text-lg md:text-xl text-tanah-dark italic leading-relaxed">
              &ldquo;Nama ini mencerminkan sejarah tempat tersebut sebagai lahan yang
              dulunya disegel — dikunci — dan harapan akan kemakmuran serta
              kesejahteraan bagi warganya.&rdquo;
            </p>
            <footer className="mt-4 text-tanah/60 text-sm not-italic">
              — Penuturan para pendahulu Dusun Segelan Sidomulyo
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── NARASI SEJARAH ───────────────────────────────────────────────── */}
      <section className="py-16 bg-krem">
        <div className="container-desa max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-3">Cerita Tutur</p>
            <h2 className="section-title">{ausalUsulDusun.judulUtama}</h2>
          </div>

          <div className="space-y-6">
            {ausalUsulDusun.narasi.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-tanah/10 flex items-center justify-center
                                text-tanah font-bold text-sm flex-shrink-0 mt-1">
                  {idx + 1}
                </div>
                <p className="text-tanah/80 leading-relaxed text-base">{item.paragraf}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-desa max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-3">Linimasa</p>
            <h2 className="section-title">Perjalanan Dusun dari Masa ke Masa</h2>
            <p className="text-tanah/60 mt-3 text-sm">
              * Data tahun masih dalam proses penelusuran. Timeline akan diperbarui.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tanah via-emas to-hijau" />

            <div className="space-y-8">
              {ausalUsulDusun.timeline.map((item, idx) => (
                <div key={idx} className="pl-16 relative">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-white border-2 border-tanah
                                  flex items-center justify-center text-2xl shadow-sm">
                    {item.ikon}
                  </div>
                  <div className="card p-5">
                    <span className="badge bg-emas/20 text-tanah-dark font-semibold mb-2 inline-block">
                      {item.tahun}
                    </span>
                    <h3 className="font-display font-semibold text-tanah-dark text-lg mb-2">
                      {item.judul}
                    </h3>
                    <p className="text-tanah/70 text-sm leading-relaxed">{item.isi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IDENTITAS WILAYAH ────────────────────────────────────────────── */}
      <section className="py-16 bg-krem">
        <div className="container-desa max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-3">Identitas</p>
            <h2 className="section-title">Posisi Wilayah</h2>
          </div>

          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "Nama Dusun",   nilai: dusunInfo.nama },
                  { label: "Desa",         nilai: dusunInfo.desa },
                  { label: "Kecamatan",    nilai: dusunInfo.kecamatan },
                  { label: "Kabupaten",    nilai: dusunInfo.kabupaten },
                  { label: "Provinsi",     nilai: dusunInfo.provinsi },
                  { label: "Luas Wilayah", nilai: dusunInfo.luasWilayah + " (segera diperbarui)" },
                ].map(({ label, nilai }, i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-krem"}>
                    <td className="px-6 py-3.5 font-medium text-tanah-dark w-40">{label}</td>
                    <td className="px-2 py-3.5 text-tanah/40">:</td>
                    <td className="px-4 py-3.5 text-tanah/80">{nilai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
