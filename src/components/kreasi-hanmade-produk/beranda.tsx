import { H1, H2 } from "../typograpy";

interface BerandaProps {
  id: string;
}

export default function Beranda({ id }: BerandaProps) {
  return (
    <div
      id={id}
      className="flex h-[91vh] justify-center items-center bg-hero-pattern"
    >
      <div className="flex flex-col gap-y-16 max-[500px]:gap-y-10 w-full items-center sm:text-center sm:py-16 p-6 sm:px-10 text-primary dark:bg-black bg-white dark:bg-opacity-25 bg-opacity-25">
        <H1>
          Selamat Datang di Kreasi Handmade!
        </H1>
        <H2 className="max-w-[1100px]">
          Kreasi Handmade adalah UMKM yang berfokus pada produk-produk kerajinan
          tangan berkualitas tinggi dan unik. Kami menyediakan beragam produk
          yang diciptakan dengan cinta dan ketelitian oleh para pengrajin lokal
          kami. Setiap produk kami memiliki desain eksklusif dan dibuat dengan
          menggunakan bahan-bahan terbaik.
        </H2>
      </div>
    </div>
  );
}
