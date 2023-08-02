import { H1 } from "@/components/typograpy";
import { ContentProduk } from "./content-produk";

interface ProdukProps {
  id: string;
}

export default function Produk({ id }: ProdukProps) {
  return (
    <div
      id={id}
      className="container mx-auto flex flex-col gap-y-20 max-sm:gap-y-10 py-10 lg:py-20"
    >
      <div>
        <H1 className="text-center mb-4">Produk</H1>
        <div className="font-light text-center text-muted-foreground sm:text-xl max-w-screen-md mx-auto">
          Temukan produk kreasi tangan yang unik dan berkualitas tinggi sekarang
          juga untuk menambah gaya hidup Anda.
        </div>
      </div>
      <ContentProduk
        src="/aksesoris.jpg"
        title="Aksesoris Fashion"
        subtitle="Dapatkan aksesoris fashion kreatif seperti kalung, gelang, anting, dan cincin dengan sentuhan seni yang memikat."
      />

      <ContentProduk
        src="/tas.webp"
        title="Kerajinan Kulit"
        subtitle="Produk kulit kami yang berkualitas tinggi seperti dompet, tas, dan ikat pinggang akan menambah gaya Anda."
        isRight
      />

      <ContentProduk
        src="/bantal.webp"
        title="Dekorasi Rumah"
        subtitle="Perindah rumah Anda dengan dekorasi unik kami, termasuk bantal hias, lukisan dinding, dan vas bunga."
      />
    </div>
  );
}
