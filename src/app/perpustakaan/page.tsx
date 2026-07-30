// File ini diarahkan ke halaman artikel (pengganti perpustakaan digital)
import { redirect } from "next/navigation";
export default function PerpustakaanRedirect() {
  redirect("/artikel");
}
