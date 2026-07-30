import Link from "next/link";
import { dusunInfo, navLinks } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-tanah-dark text-white mt-20">
      <div className="container-desa py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Kolom 1: Identitas */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm
                   group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.png"
                  alt="Logo Dusun Segelan Sidomulyo"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                <p className="font-display font-semibold">{dusunInfo.nama}</p>
                <p className="text-white/60 text-xs">{dusunInfo.kabupaten}</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              {dusunInfo.deskripsi.slice(0, 150)}...
            </p>
            <p className="text-emas text-sm font-display italic">
              &ldquo;{dusunInfo.semboyan}&rdquo;
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-emas">Halaman</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/70 hover:text-emas transition-colors flex items-center gap-2">
                    <span className="text-hijau-light">→</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-emas">Kontak</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-hijau mt-0.5">📍</span>
                <span>{dusunInfo.kontak.alamat}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-hijau">📞</span>
                <a href={`tel:${dusunInfo.kontak.telepon}`} className="hover:text-emas transition-colors">
                  {dusunInfo.kontak.telepon}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-hijau">✉️</span>
                <a href={`mailto:${dusunInfo.kontak.email}`} className="hover:text-emas transition-colors">
                  {dusunInfo.kontak.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              {/* <a
                href={dusunInfo.kontak.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                           hover:bg-hijau transition-colors text-sm"
                aria-label="Facebook"
              >
                f
              </a> */}
              <a
                href={dusunInfo.kontak.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                           hover:bg-hijau transition-colors text-sm"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row
                        items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {dusunInfo.nama}. Dibuat dengan ❤️ oleh KKN UM BBM 2026.</p>
          <p>Powered by Next.js · Tailwind CSS · Vercel</p>
        </div>
      </div>
    </footer>
  );
}
