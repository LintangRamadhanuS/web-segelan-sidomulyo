# 🏡 Website Segelan Sidomulyo

Website resmi Segelan Sidomulyo — sejarah dusun, dokumentasi KKN UM BBM 2026,
dan perpustakaan digital.

**Tech stack:** Next.js 14 · TypeScript · Tailwind CSS · Vercel

---

## 🚀 Cara Menjalankan Lokal (Komputer Kamu)

### 1. Install Node.js dulu
Download di: https://nodejs.org → pilih versi LTS → install

### 2. Clone / extract project ini
Jika dari ZIP: extract ke folder mana saja, misal `D:\website-dusun`

### 3. Buka terminal di folder project
- Windows: klik kanan di folder → "Open in Terminal" / "Open PowerShell here"
- Mac/Linux: buka Terminal, lalu `cd path/ke/folder/website-dusun`

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
- Nama dusun, motto, statistik → `dusunInfo`
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
   - Nama: `website-dusun-segelan`
   - Pilih: Public
   - Klik "Create repository"

3. Di terminal (di folder project), jalankan:
```bash
git init
git add .
git commit -m "first commit: website Segelan Sidomulyo"
git branch -M main
git remote add origin https://github.com/USERNAME_KAMU/website-dusun-segelan.git
git push -u origin main
```
*(Ganti USERNAME_KAMU dengan username GitHub kamu)*

### Langkah 2: Deploy ke Vercel
1. Buka https://vercel.com → klik "Sign Up" → pilih "Continue with GitHub"
2. Setelah login, klik "Add New..." → "Project"
3. Pilih repository `website-dusun-segelan`
4. Klik "Deploy" — tidak perlu ubah setting apapun!
5. Tunggu ~2 menit → website kamu LIVE! 🎉

URL: `website-dusun-segelan.vercel.app`

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
website-dusun/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Template utama (navbar + footer)
│   │   ├── page.tsx            ← Halaman Beranda
│   │   ├── globals.css         ← Style global
│   │   ├── sejarah/
│   │   │   └── page.tsx        ← Halaman Sejarah dusun
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
  src="/images/foto-dusun.jpg"
  alt="Foto Segelan Sidomulyo"
  width={800}
  height={400}
  className="rounded-xl"
/>
```

---

## 🗺 Cara Pasang Google Maps

1. Buka https://maps.google.com → cari lokasi dusun
2. Klik "Share" → "Embed a map" → copy kode iframe
3. Paste di `src/app/page.tsx` bagian Peta dusun

---

## 📞 Bantuan

Hubungi tim KKN UM BBM 2026:
- Email: umbbmbalesari1@gmail.com
- No. Telp: 085853606613
