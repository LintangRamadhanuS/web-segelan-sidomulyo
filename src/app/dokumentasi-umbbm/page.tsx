"use client";

import { useState } from "react";
import { kegiatanKKN, anggotaKKN, kategoriKKNWarna, divisiWarna, dusunInfo } from "@/lib/data";
import Image from "next/image";

const semuaDivisi = ["Semua", ...Array.from(new Set(anggotaKKN.map((a) => a.divisi)))];

export default function DokumentasiUMBBMPage() {
  const [aktifDivisi, setAktifDivisi] = useState("Semua");

  const anggotaFiltered =
    aktifDivisi === "Semua"
      ? anggotaKKN
      : anggotaKKN.filter((a) => a.divisi === aktifDivisi);

  const ketua = anggotaKKN.find((a) => a.divisi === "Ketua");

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-hijau-dark to-hijau overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-desa relative z-10 text-center text-white">
          <p className="text-emas font-semibold text-sm uppercase tracking-wider mb-4">
            Universitas Negeri Malang · BBM 2026
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Dokumentasi KKN UM BBM
          </h1>
          <p className="text-emas font-display text-xl mb-6">Kelompok 1</p>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Rekam jejak pengabdian tim KKN UM BBM Kelompok 1 bersama masyarakat{" "}
            {dusunInfo.nama}, {dusunInfo.desa}, Kec. {dusunInfo.kecamatan}.
          </p>
        </div>
      </section>

      {/* ── RINGKASAN ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="container-desa">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { angka: `${anggotaKKN.length}`, label: "Anggota Tim",     ikon: "👥" },
              { angka: `${kegiatanKKN.length}+`, label: "Program Kerja", ikon: "✅" },
              { angka: "1",  label: "Kelompok",                          ikon: "🏷️" },
              { angka: "UM", label: "Universitas Negeri Malang",         ikon: "🎓" },
            ].map(({ angka, label, ikon }) => (
              <div key={label} className="card p-6 text-center">
                <div className="text-3xl mb-2">{ikon}</div>
                <div className="text-3xl font-display font-bold text-hijau">{angka}</div>
                <div className="text-tanah/60 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRUKTUR TIM ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-krem">
        <div className="container-desa">
          <div className="text-center mb-10">
            <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-3">Tim Kami</p>
            <h2 className="section-title">Anggota KKN UM BBM Kelompok 1</h2>
            {ketua && (
              <p className="text-tanah/60 mt-2 text-sm">
                Ketua: <strong className="text-tanah-dark">{ketua.nama}</strong>
              </p>
            )}
          </div>

          {/* Filter divisi */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {semuaDivisi.map((div) => (
              <button
                key={div}
                onClick={() => setAktifDivisi(div)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  aktifDivisi === div
                    ? "bg-hijau text-white shadow-sm"
                    : "bg-white text-tanah border border-krem-dark hover:border-hijau/40"
                }`}
              >
                {div}
              </button>
            ))}
          </div>

          {/* Grid anggota */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {anggotaFiltered.map((anggota) => (
              <div
                key={anggota.nim}
                className="card p-4 text-center hover:-translate-y-1 transition-transform"
              >
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-3
                   border-2 border-krem-dark">
                  {anggota.foto ? (
                    <Image
                      src={anggota.foto}
                      alt={anggota.nama}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-hijau/20 to-tanah/20
                                    flex items-center justify-center text-xl">
                      👤
                    </div>
                  )}
                </div>
                <p className="font-semibold text-tanah-dark text-sm leading-tight mb-1">
                  {anggota.nama}
                </p>
                <span
                  className={`badge text-xs ${
                    divisiWarna[anggota.divisi] ?? "bg-gray-100 text-gray-700"
                  }`}
                >
                  {anggota.peran}
                </span>
                <p className="text-tanah/40 text-xs mt-2 font-mono">{anggota.nim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEGIATAN ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-desa">
          <div className="text-center mb-10">
            <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-3">Galeri</p>
            <h2 className="section-title">Dokumentasi Kegiatan</h2>
            <p className="text-tanah/50 text-sm mt-2">
              * Foto kegiatan akan ditambahkan seiring berjalannya program KKN
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kegiatanKKN.map((kegiatan) => (
              <div key={kegiatan.id} className="card overflow-hidden group">
                {/* Area foto placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-hijau/10 to-tanah/10
                                flex flex-col items-center justify-center gap-2 overflow-hidden">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    📸
                  </span>
                  <span className="text-tanah/30 text-xs">Foto segera hadir</span>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`badge ${
                        kategoriKKNWarna[kegiatan.kategori] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {kegiatan.kategori}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-tanah/50 text-xs mb-2">📅 {kegiatan.tanggal}</p>
                  <h3 className="font-display font-semibold text-tanah-dark text-lg mb-2">
                    {kegiatan.judul}
                  </h3>
                  <p className="text-tanah/70 text-sm leading-relaxed">{kegiatan.deskripsi}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {kegiatan.tag.map((t) => (
                      <span key={t} className="badge bg-krem text-tanah/50 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Card placeholder tambah kegiatan */}
            <div className="card border-2 border-dashed border-krem-dark flex items-center justify-center min-h-[300px]">
              <div className="text-center p-6 text-tanah/30">
                <div className="text-4xl mb-3">➕</div>
                <p className="text-sm">Kegiatan lain akan ditambahkan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM KERJA ────────────────────────────────────────────────── */}
      <section className="py-16 bg-hijau/5">
        <div className="container-desa">
          <div className="text-center mb-12">
            <p className="text-hijau font-semibold text-sm uppercase tracking-wider mb-3">Bidang Kerja</p>
            <h2 className="section-title">Program yang Dijalankan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                ikon: "💻",
                judul: "Digitalisasi Dusun",
                items: [
                  "Pembuatan website resmi Dusun Segelan Sidomulyo",
                  "Dokumentasi sejarah dan budaya digital",
                  "Pendampingan literasi digital warga",
                ],
              },
              {
                ikon: "📚",
                judul: "Pendidikan & Literasi",
                items: [
                  "Penulisan artikel sejarah dan budaya lokal",
                  "Penyusunan dongeng anak khas dusun",
                  "Dokumentasi folklore dan cerita rakyat",
                ],
              },
              {
                ikon: "🏘️",
                judul: "Pemberdayaan Masyarakat",
                items: [
                  "Kegiatan sosial bersama warga",
                  "Pendampingan program dusun",
                  "Kolaborasi dengan karang taruna",
                ],
              },
              {
                ikon: "📸",
                judul: "Dokumentasi & Publikasi",
                items: [
                  "Foto dan video kegiatan KKN",
                  "Pengelolaan media sosial dusun",
                  "Publikasi artikel di website",
                ],
              },
            ].map(({ ikon, judul, items }) => (
              <div key={judul} className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-hijau/10 flex items-center justify-center text-2xl">
                    {ikon}
                  </div>
                  <h3 className="font-display font-semibold text-tanah-dark text-lg">{judul}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-tanah/70">
                      <span className="text-hijau mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
