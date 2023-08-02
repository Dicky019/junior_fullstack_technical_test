import { Building, MapPin, Phone } from "lucide-react";
import { KontakKami } from "./kontak-kami";
import { H1 } from "@/components/typograpy";
import { KontakInformasi } from "./kontak-informasi";

interface KontakProps {
  id: string;
}

export default function Kontak({ id }: KontakProps) {
  return (
    <section className="container mx-auto">
      <div id={id} className="max-w-2xl mx-auto flex flex-col gap-y-10 pb-10">
        <div>
          <H1 className="text-center mb-4">Kontak</H1>
          <div className="font-light text-center text-muted-foreground sm:text-xl max-w-screen-md mx-auto">
            Mulailah berbelanja di Kreasi Handmade dan rasakan kesenangan
            memiliki produk eksklusif buatan tangan!
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-col gap-8">
          <div className="flex w-full gap-2 flex-col sm:flex-row">
            <KontakInformasi
              icon={<Building className="w-10 h-10" />}
              title="Flowbite LLC Tax id: USXXXXXX"
            />
            <KontakInformasi
              icon={<MapPin className="w-10 h-10" />}
              title="SILVER LAKE, United States 1941 Late Avenue Zip Code/Postal code: 03875"
            />
            <KontakInformasi
              icon={<Phone className="w-10 h-10" />}
              title="Email kami untuk pertanyaan umum, termasuk peluang pemasaran dan kemitraan. halo@flowbite.com"
            />
          </div>
          <KontakKami />
        </div>
      </div>
    </section>
  );
}
