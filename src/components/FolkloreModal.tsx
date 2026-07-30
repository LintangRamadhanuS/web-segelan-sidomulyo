"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { FolkloreItem } from "@/lib/data";

interface Props {
  item: FolkloreItem | null;
  onClose: () => void;
}

export default function FolkloreModal({ item, onClose }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [item, handleKey]);

  if (!item) return null;

  return (
    <>
      {/* OVERLAY */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL PANEL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
        <div
          className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl
                     flex flex-col overflow-hidden pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-krem-dark flex-shrink-0">
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0 mt-0.5">{item.ikon}</span>
              <div>
                <span className="badge bg-orange-100 text-orange-800 mb-1 inline-block">{item.jenis}</span>
                <h2 className="font-display font-bold text-xl text-tanah-dark leading-snug">
                  {item.judul}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-9 h-9 rounded-full bg-krem hover:bg-krem-dark
                         flex items-center justify-center text-tanah/60 hover:text-tanah
                         transition-colors text-lg font-bold"
              aria-label="Tutup"
            >
              ✕
            </button>
          </div>

          {/* KONTEN SCROLLABLE */}
          <div className="overflow-y-auto flex-1 px-6 py-5 space-y-6">
            {item.konten.map((bagian, idx) => (
              <div key={idx}>
                {bagian.subjudul && (
                  <h3 className="font-display font-semibold text-lg text-tanah-dark mb-2 mt-1">
                    {bagian.subjudul}
                  </h3>
                )}

                <p className="text-tanah/80 text-sm leading-relaxed">{bagian.teks}</p>

                {bagian.gambar && bagian.gambar.length > 0 && (
                  <div className={`mt-4 grid gap-3 ${
                    bagian.gambar.length === 1 ? "grid-cols-1" :
                    bagian.gambar.length === 2 ? "grid-cols-2" :
                    "grid-cols-2 md:grid-cols-3"
                  }`}>
                    {bagian.gambar.map((img, gIdx) => (
                      <figure key={gIdx} className="rounded-xl overflow-hidden">
                        <div className="relative aspect-[4/3] bg-gradient-to-br from-orange-50 to-amber-50">
                          {/* Placeholder emoji saat foto belum ada */}
                          <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">
                            {item.ikon}
                          </div>
                          <Image
                            src={img.src}
                            alt={img.caption ?? item.judul}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 90vw, 400px"
                          />
                        </div>
                        {img.caption && (
                          <figcaption className="text-xs text-tanah/50 text-center mt-1.5 px-2 italic">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}

                {idx < item.konten.length - 1 && (
                  <div className="mt-5 border-b border-krem-dark" />
                )}
              </div>
            ))}
            <div className="h-2" />
          </div>

          {/* FOOTER */}
          <div className="flex-shrink-0 px-6 py-4 border-t border-krem-dark
                          bg-krem/50 flex items-center justify-between gap-4">
            <p className="text-tanah/40 text-xs italic">
              Dusun Segelan Sidomulyo · KKN UM BBM 2026
            </p>
            <button onClick={onClose} className="btn-outline text-sm py-1.5 px-4">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
