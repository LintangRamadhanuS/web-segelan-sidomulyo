import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-krem flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🏡</div>
        <h1 className="text-6xl font-display font-bold text-tanah-dark mb-4">404</h1>
        <p className="text-tanah/70 text-lg mb-8">
          Halaman yang kamu cari tidak ditemukan.
        </p>
        <Link href="/" className="btn-primary">
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
