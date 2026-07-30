"use client";

import { useState } from "react";
import { folklore, dusunInfo } from "@/lib/data";
import type { FolkloreItem } from "@/lib/data";
import FolkloreModal from "@/components/FolkloreModal";

export default function FolklorePage() {
  const [dipilih, setDipilih] = useState<FolkloreItem | null>(null);

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-900 to-tanah overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 20px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container-desa relative z-10 text-center text-white">
          <p className="text-emas font-semibold text-sm uppercase tracking-wider mb-4">
            Kearifan Lokal
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Folklore Dusun
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Cerita rakyat, legenda, dan kisah turun-temurun yang hidup di
            tengah masyarakat {dusunInfo.nama} — warisan leluhur yang tak ternilai.
          </p>
          <div className="inline-flex items-center gap-2 mt-8 bg-white/10 backdrop-blur-sm
                          border border-white/20 rounded-full px-5 py-2.5 text-sm text-white/80">
            <span>📖</span>
            <span>Klik kartu untuk membaca cerita lengkap</span>
          </div>
        </div>
      </section>

      {/* GRID KARTU */}
      <section className="py-16 bg-krem min-h-[50vh]">
        <div className="container-desa">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {folklore.map((item) => (
              <button
                key={item.id}
                onClick={() => setDipilih(item)}
                className="card p-6 text-left hover:-translate-y-1 transition-all duration-300
                           hover:shadow-lg group focus:outline-none focus:ring-2
                           focus:ring-hijau focus:ring-offset-2 rounded-2xl"
              >
                {/* Ikon area */}
                <div className="w-14 h-14 rounded-2xl bg-orange-50 group-hover:bg-orange-100
                                flex items-center justify-center text-3xl mb-4 transition-colors">
                  {item.ikon}
                </div>

                {/* Badge jenis */}
                <span className="badge bg-orange-100 text-orange-800 mb-3 inline-block">
                  {item.jenis}
                </span>

                {/* Judul */}
                <h3 className="font-display font-semibold text-tanah-dark text-lg mb-2 leading-snug">
                  {item.judul}
                </h3>

                {/* Ringkasan */}
                <p className="text-tanah/60 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.ringkasan}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-700
                                 group-hover:gap-2.5 transition-all duration-200">
                  Baca selengkapnya
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* INFO KONTRIBUSI */}
      <section className="py-10 bg-white border-t border-krem-dark">
        <div className="container-desa max-w-2xl text-center">
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>📣 Punya cerita rakyat atau legenda lokal?</strong><br />
              Bantu kami mendokumentasikan kekayaan budaya dusun. Hubungi tim KKN di{" "}
              <a href={`mailto:${dusunInfo.kontak.email}`} className="underline">
                {dusunInfo.kontak.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* MODAL POP-UP */}
      <FolkloreModal item={dipilih} onClose={() => setDipilih(null)} />
    </div>
  );
}
