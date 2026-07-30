// File ini diarahkan ke halaman asal-usul
// Jika kamu sudah hapus halaman ini dari navigasi, file ini bisa dihapus
import { redirect } from "next/navigation";
export default function SejarahRedirect() {
  redirect("/asal-usul");
}
