import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dusunInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${dusunInfo.nama} — ${dusunInfo.kabupaten}`,
    template: `%s | ${dusunInfo.nama}`,
  },
  description: dusunInfo.deskripsi,
  keywords: [
    dusunInfo.nama, dusunInfo.desa, dusunInfo.kecamatan, dusunInfo.kabupaten,
    "KKN UM BBM", "sejarah dusun", "Segelan Sidomulyo", "Balesari Ngajum",
  ],
  openGraph: {
    title: dusunInfo.nama,
    description: dusunInfo.deskripsi,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-body bg-krem antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
