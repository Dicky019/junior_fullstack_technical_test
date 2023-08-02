import {
  homeId,
  produkId,
  kontakId,
} from "@/components/kreasi-hanmade-produk/header/header-id";

import Produk from "@/components/kreasi-hanmade-produk/produk";
import Kontak from "@/components/kreasi-hanmade-produk/kontak";
import Header from "@/components/kreasi-hanmade-produk/header";
import Beranda from "@/components/kreasi-hanmade-produk/beranda";

export default function KreasiHandmadeProduk() {
  return (
    <>
      <Header />
      <Beranda id={homeId} />
      <Produk id={produkId} />
      <Kontak id={kontakId} />
    </>
  );
}
