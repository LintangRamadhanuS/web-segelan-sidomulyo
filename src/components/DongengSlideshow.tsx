"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  src: string;   // path gambar, misal: /images/dongeng/slide-01.jpg
  alt: string;   // teks deskripsi (untuk aksesibilitas)
}

interface Props {
  slides: Slide[];
  autoPlayInterval?: number; // milidetik, default 4000 (4 detik). 0 = mati
  judul: string;
}

export default function DongengSlideshow({
  slides,
  autoPlayInterval = 4000,
  judul,
}: Props) {
  const [aktif, setAktif]         = useState(0);
  const [isPaused, setIsPaused]   = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const total = slides.length;

  const prev = useCallback(() => {
    setAktif((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setAktif((i) => (i + 1) % total);
  }, [total]);

  // Auto-play
  useEffect(() => {
    if (autoPlayInterval === 0 || isPaused || total <= 1) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval, isPaused, total]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setIsFullscreen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch/swipe support
  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-krem rounded-2xl border-2 border-dashed border-krem-dark">
        <p className="text-tanah/40 text-sm">Belum ada slide yang ditambahkan</p>
      </div>
    );
  }

  const SliderContent = ({ fullscreen = false }: { fullscreen?: boolean }) => (
    <div
      className={`relative select-none ${
        fullscreen
          ? "fixed inset-0 z-50 bg-black flex items-center justify-center"
          : "w-full"
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── SLIDE AREA ── */}
      <div
        className={`relative overflow-hidden ${
          fullscreen
            ? "w-screen h-screen max-w-5xl max-h-[90vh] mx-auto"
            : "w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl shadow-lg"
        } bg-amber-50`}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === aktif ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-contain"
              priority={idx === 0}
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        ))}

        {/* Tutup fullscreen */}
        {fullscreen && (
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50
                       text-white flex items-center justify-center hover:bg-black/80
                       transition-colors text-xl"
            aria-label="Tutup layar penuh"
          >
            ✕
          </button>
        )}

        {/* Tombol kiri */}
        {total > 1 && (
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full bg-black/30 hover:bg-black/60
                       text-white flex items-center justify-center
                       transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            aria-label="Slide sebelumnya"
          >
            ‹
          </button>
        )}

        {/* Tombol kanan */}
        {total > 1 && (
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full bg-black/30 hover:bg-black/60
                       text-white flex items-center justify-center
                       transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            aria-label="Slide berikutnya"
          >
            ›
          </button>
        )}

        {/* Nomor slide */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20
                        bg-black/40 backdrop-blur-sm text-white text-xs
                        px-3 py-1 rounded-full">
          {aktif + 1} / {total}
        </div>
      </div>

      {/* ── DOT NAVIGATOR ── */}
      {!fullscreen && total > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setAktif(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === aktif
                  ? "w-6 h-2.5 bg-tanah"
                  : "w-2.5 h-2.5 bg-tanah/30 hover:bg-tanah/60"
              }`}
              aria-label={`Ke slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* ── KONTROL BAWAH ── */}
      {!fullscreen && (
        <div className="flex items-center justify-between mt-3 px-1">
          {/* Auto-play toggle */}
          <button
            onClick={() => setIsPaused((p) => !p)}
            className="flex items-center gap-1.5 text-xs text-tanah/60
                       hover:text-tanah transition-colors"
          >
            <span className="text-base">{isPaused ? "▶" : "⏸"}</span>
            {isPaused ? "Putar otomatis" : "Jeda"}
          </button>

          {/* Fullscreen */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="flex items-center gap-1.5 text-xs text-tanah/60
                       hover:text-tanah transition-colors"
          >
            <span className="text-base">⛶</span>
            Layar penuh
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      <SliderContent fullscreen={false} />
      {isFullscreen && <SliderContent fullscreen={true} />}
    </>
  );
}
