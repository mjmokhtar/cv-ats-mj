import { ShoppingBag } from "lucide-react";

// Ikon sementara (tas belanja dari lucide-react) karena lucide tidak punya logo Gumroad.
// Untuk logo resmi: salin path dari simpleicons.org (cari "gumroad", lisensi CC0),
// lalu ganti isi komponen ini dengan pola yang sama seperti LinkedInIcon.tsx.
export const GumroadIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return <ShoppingBag aria-label="Gumroad" {...props} />;
};