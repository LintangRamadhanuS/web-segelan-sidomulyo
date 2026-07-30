import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dusunInfo } from "@/lib/data";
import { Analytics } from "@vercel/analytics/next"

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
    default: `${dusunInfo.nama} - ${dusunInfo.kabupaten}`,
    template: `%s | ${dusunInfo.nama}`,
  },
  description: dusunInfo.deskripsi,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
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
  verification: {
       google: "google-site-verification=uWULfppwL13d7hmgsy24YPw6HdJD0c3hc2Bl4NRgAfc",
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
        <Analytics />
      </body>
    </html>
  );
}
