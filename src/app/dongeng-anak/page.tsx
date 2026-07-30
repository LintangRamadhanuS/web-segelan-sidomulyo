import type { Metadata } from "next";
import DongengSlideshow from "@/components/DongengSlideshow";
import { dusunInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dongeng Anak",
  description: `Kumpulan dongeng dan cerita anak-anak dari ${dusunInfo.nama}.`,
};

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDIT DI SINI: daftar slide gambar dongeng
//
// Cara menambah slide:
//  1. Download presentasi Canva sebagai JPG/PNG (File → Download → JPG)
//     Canva akan menghasilkan ZIP berisi file per halaman:
//     Nama-Desain-1.jpg, Nama-Desain-2.jpg, dst.
//  2. Rename jadi: slide-01.jpg, slide-02.jpg, slide-03.jpg, ...
//  3. Taruh semua file di folder: public/images/dongeng/
//  4. Tambahkan entry { src, alt } di array di bawah ini
// ─────────────────────────────────────────────────────────────────────────────
const slidesDongeng = [
  { src: "/images/dongeng/slide-01.jpg", alt: "Halaman 1 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-02.jpg", alt: "Halaman 2 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-03.jpg", alt: "Halaman 3 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-04.jpg", alt: "Halaman 4 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-05.jpg", alt: "Halaman 5 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-06.jpg", alt: "Halaman 6 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-07.jpg", alt: "Halaman 7 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-08.jpg", alt: "Halaman 8 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-09.jpg", alt: "Halaman 9 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-10.jpg", alt: "Halaman 10 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-11.jpg", alt: "Halaman 11 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-12.jpg", alt: "Halaman 12 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-13.jpg", alt: "Halaman 13 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-14.jpg", alt: "Halaman 14 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-15.jpg", alt: "Halaman 15 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-16.jpg", alt: "Halaman 16 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-17.jpg", alt: "Halaman 17 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-18.jpg", alt: "Halaman 18 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-19.jpg", alt: "Halaman 19 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-20.jpg", alt: "Halaman 20 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-21.jpg", alt: "Halaman 21 — Dongeng dari Batu Gilang" },
  { src: "/images/dongeng/slide-22.jpg", alt: "Halaman 22 — Dongeng dari Batu Gilang" },
  // { src: "/images/dongeng/slide-02.jpg", alt: "Halaman 2 — Dongeng dari Batu Gilang" },
  // { src: "/images/dongeng/slide-03.jpg", alt: "Halaman 3 — Dongeng dari Batu Gilang" },
  // Tambahkan slide berikutnya di sini:
  // { src: "/images/dongeng/slide-04.jpg", alt: "Halaman 4 — ..." },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function DongengAnakPage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 to-indigo-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="container-desa relative z-10 text-center text-white">
          <p className="text-yellow-300 font-semibold text-sm uppercase tracking-wider mb-4">
            Untuk Si Kecil
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            🌙 Dongeng Anak
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Cerita dan dongeng anak-anak dari {dusunInfo.nama} — menghibur
            sekaligus menanamkan nilai-nilai luhur bagi generasi penerus.
          </p>
        </div>
      </section>

      {/* ── SLIDESHOW UTAMA ───────────────────────────────────────────────── */}
      <section className="py-14 bg-gradient-to-b from-purple-50 to-krem">
        <div className="container-desa max-w-4xl">

          {/* Judul dongeng */}
          <div className="text-center mb-8">
            <p className="text-purple-500 font-semibold text-sm uppercase tracking-wider mb-2">
              Cerita Rakyat
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tanah-dark mb-3">
              Dongeng dari Batu Gilang
            </h2>
            <p className="text-tanah/60 text-sm max-w-xl mx-auto">
              Kisah Adi yang menemukan cerita leluhurnya di sebuah punden tua —
              belajar bahwa menghargai sejarah dimulai dari hal-hal sederhana.
            </p>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700
                             text-xs font-medium px-3 py-1.5 rounded-full">
              🎯 Usia 7–12 tahun
            </span>
            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700
                             text-xs font-medium px-3 py-1.5 rounded-full">
              ✍️ Tim KKN UM BBM 2026
            </span>
            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700
                             text-xs font-medium px-3 py-1.5 rounded-full">
              📖 Cerita bergambar
            </span>
          </div>

          {/* Slideshow */}
          <div className="bg-white rounded-3xl shadow-md p-4 md:p-6 border border-krem-dark">
            <DongengSlideshow
              slides={slidesDongeng}
              autoPlayInterval={0}
              judul="Dongeng dari Batu Gilang"
            />
          </div>

          {/* Petunjuk navigasi */}
          <div className="mt-5 text-center text-tanah/40 text-xs flex items-center justify-center gap-4 flex-wrap">
            <span>← → Tombol panah keyboard untuk navigasi</span>
            <span>·</span>
            <span>👆 Geser kiri/kanan di layar sentuh</span>
            <span>·</span>
            <span>⛶ Klik layar penuh untuk baca lebih nyaman</span>
          </div>
        </div>
      </section>

      {/* ── SINOPSIS ──────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="container-desa max-w-3xl">
          <div className="card p-8">
            <h3 className="font-display font-semibold text-xl text-tanah-dark mb-4 flex items-center gap-2">
              📚 Sinopsis Cerita
            </h3>
            <p className="text-tanah/70 leading-relaxed mb-4">
              Pagi hari di Dusun Segelan. Adi, seorang anak dusun, selalu melewati
              sebuah bangunan tua di bawah rindang pepohonan pinus. Tapi pagi itu
              langkahnya terhenti — tempat itu terasa berbeda, seolah menyimpan cerita
              yang belum pernah ia dengar.
            </p>
            <p className="text-tanah/70 leading-relaxed mb-4">
              Bersama Kakek Kasin, Adi masuk ke dalam bangunan itu dan menemukan sebuah
              makam terawat dengan batu-batu tua di sekelilingnya. Di sinilah Kakek Kasin
              bercerita tentang <strong className="text-tanah-dark">Mbah Suradi Pusponegoro</strong> —
              seorang perantau yang dengan bekal golok dan tekad kuat, membuka hutan
              lebat menjadi permukiman yang kelak dikenal sebagai Dusun Segelan.
            </p>
            <p className="text-tanah/70 leading-relaxed">
              Dari cerita itu Adi belajar bahwa menghargai sejarah bukan hanya dengan
              mendengarkan kisahnya, tetapi juga dengan ikut merawatnya —
              dimulai dari hal sederhana seperti menyapu halaman.
            </p>

            <div className="mt-6 pt-6 border-t border-krem-dark">
              <p className="text-tanah/50 text-xs italic">
                &ldquo;Cerita akan tetap hidup selama masih ada yang mau mendengarkan
                dan menjaganya.&rdquo; — Kakek Kasin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NILAI CERITA ──────────────────────────────────────────────────── */}
      <section className="py-12 bg-krem">
        <div className="container-desa max-w-3xl">
          <h3 className="font-display font-semibold text-xl text-tanah-dark mb-6 text-center">
            Nilai yang Terkandung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                ikon: "💪",
                judul: "Kerja Keras & Keberanian",
                deskripsi:
                  "Mbah Suradi membuka hutan seorang diri dengan bekal sederhana, mengajarkan bahwa tekad adalah modal utama.",
              },
              {
                ikon: "🤝",
                judul: "Gotong Royong",
                deskripsi:
                  "Kampung tumbuh karena kebersamaan — setiap orang membantu tanpa diminta.",
              },
              {
                ikon: "🏺",
                judul: "Menghargai Sejarah",
                deskripsi:
                  "Menjaga warisan leluhur dimulai dari hal kecil: mendengarkan cerita, merawat tempat, menceritakan kembali.",
              },
            ].map(({ ikon, judul, deskripsi }) => (
              <div key={judul} className="card p-5 text-center">
                <div className="text-3xl mb-3">{ikon}</div>
                <h4 className="font-semibold text-tanah-dark text-sm mb-2">{judul}</h4>
                <p className="text-tanah/60 text-xs leading-relaxed">{deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONGENG LAINNYA (placeholder) ────────────────────────────────── */}
      {/* <section className="py-12 bg-white">
        <div className="container-desa max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200
                          rounded-full px-5 py-2.5 text-sm text-purple-600 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Dongeng berikutnya segera hadir
          </div>
          <p className="text-tanah/50 text-sm">
            Tim KKN UM BBM 2026 sedang menyiapkan cerita-cerita lain dari
            Dusun Segelan Sidomulyo. Pantau terus halaman ini!
          </p>
        </div>
      </section> */}
    </div>
  );
}
