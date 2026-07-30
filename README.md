# 🏡 Website Desa Sumberpucung

Website resmi Desa Sumberpucung — sejarah desa, dokumentasi KKN UM BBM 2026,
dan perpustakaan digital.

**Tech stack:** Next.js 14 · TypeScript · Tailwind CSS · Vercel

---

## 🚀 Cara Menjalankan Lokal (Komputer Kamu)

### 1. Install Node.js dulu
Download di: https://nodejs.org → pilih versi LTS → install

### 2. Clone / extract project ini
Jika dari ZIP: extract ke folder mana saja, misal `D:\website-desa`

### 3. Buka terminal di folder project
- Windows: klik kanan di folder → "Open in Terminal" / "Open PowerShell here"
- Mac/Linux: buka Terminal, lalu `cd path/ke/folder/website-desa`

### 4. Install dependencies
```bash
npm install
```

### 5. Jalankan server lokal
```bash
npm run dev
```

### 6. Buka di browser
Buka: http://localhost:3000

---

## ✏️ Cara Edit Konten Website

**Semua konten ada di 1 file:**
```
src/lib/data.ts
```

Edit file itu untuk mengubah:
- Nama desa, motto, statistik → `desaInfo`
- Isi timeline sejarah       → `sejarahTimeline`
- Data kegiatan KKN          → `kegiatanKKN`
- Anggota tim KKN            → `anggotaKKN`
- Daftar buku digital        → `bukuDigital`

**Cara mengganti link download buku:**
1. Upload PDF ke Google Drive
2. Klik kanan PDF → "Share" → "Anyone with the link" → Copy link
3. Paste link ke bagian `linkDownload` di `src/lib/data.ts`

---

## 🌐 Cara Deploy ke Vercel (GRATIS)

### Langkah 1: Push ke GitHub
1. Buat akun di https://github.com jika belum punya
2. Buat repository baru: klik "+" → "New repository"
   - Nama: `website-desa-sumberpucung`
   - Pilih: Public
   - Klik "Create repository"

3. Di terminal (di folder project), jalankan:
```bash
git init
git add .
git commit -m "first commit: website desa sumberpucung"
git branch -M main
git remote add origin https://github.com/USERNAME_KAMU/website-desa-sumberpucung.git
git push -u origin main
```
*(Ganti USERNAME_KAMU dengan username GitHub kamu)*

### Langkah 2: Deploy ke Vercel
1. Buka https://vercel.com → klik "Sign Up" → pilih "Continue with GitHub"
2. Setelah login, klik "Add New..." → "Project"
3. Pilih repository `website-desa-sumberpucung`
4. Klik "Deploy" — tidak perlu ubah setting apapun!
5. Tunggu ~2 menit → website kamu LIVE! 🎉

URL: `website-desa-sumberpucung.vercel.app`

### Langkah 3: Update website (setelah perubahan)
Setiap kali edit kode, jalankan:
```bash
git add .
git commit -m "update: deskripsi perubahannya"
git push
```
Vercel akan otomatis deploy versi terbaru!

---

## 📁 Struktur File

```
website-desa/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Template utama (navbar + footer)
│   │   ├── page.tsx            ← Halaman Beranda
│   │   ├── globals.css         ← Style global
│   │   ├── sejarah/
│   │   │   └── page.tsx        ← Halaman Sejarah Desa
│   │   ├── dokumentasi-kkn/
│   │   │   └── page.tsx        ← Halaman Dokumentasi KKN
│   │   └── perpustakaan/
│   │       └── page.tsx        ← Halaman Perpustakaan Digital
│   ├── components/
│   │   ├── Navbar.tsx          ← Komponen navigasi
│   │   └── Footer.tsx          ← Komponen footer
│   └── lib/
│       └── data.ts             ← ⭐ SEMUA DATA KONTEN ADA DI SINI
├── public/
│   └── images/                 ← Taruh foto-foto di sini
├── tailwind.config.ts
└── package.json
```

---

## 🖼 Cara Menambah Foto

1. Taruh foto di folder: `public/images/` atau `public/images/kkn/`
2. Gunakan di kode dengan path: `/images/nama-foto.jpg`
3. Untuk optimasi otomatis, gunakan komponen `<Image>` dari Next.js:
```tsx
import Image from "next/image";

<Image
  src="/images/foto-desa.jpg"
  alt="Foto Desa Sumberpucung"
  width={800}
  height={400}
  className="rounded-xl"
/>
```

---

## 🗺 Cara Pasang Google Maps

1. Buka https://maps.google.com → cari lokasi desa
2. Klik "Share" → "Embed a map" → copy kode iframe
3. Paste di `src/app/page.tsx` bagian Peta Desa

---

## 📞 Bantuan

Hubungi tim KKN UM BBM 2026:
- Email: desasumberpucung@gmail.com
- No. Telp: 085853606613
