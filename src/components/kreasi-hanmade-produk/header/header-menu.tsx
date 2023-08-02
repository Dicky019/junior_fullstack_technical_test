import { H4 } from "@/components/typograpy";
import { homeId, kontakId, produkId } from "./header-id";
import { Link } from "@/components/link";

export const HeaderMenu = () => (
  <>
    <Link to={homeId}>
      <H4 className="pt-1">Beranda</H4>
    </Link>
    <Link to={produkId}>
      <H4 className="pt-1">Produk</H4>
    </Link>
    <Link to={kontakId}>
      <H4 className="pt-1">Kontak</H4>
    </Link>
  </>
);
