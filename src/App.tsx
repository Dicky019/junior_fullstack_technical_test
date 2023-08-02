import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { comments } from "./data/comments-dummy";
import { fruits } from "./data/fruits-dummy";
import { jawaban5 } from "./services/comment-service";
import { jawaban1, jawaban2, jawaban3 } from "./services/fruits-services";

interface IPertanyaanJawaban {
  pertanyaan: string;
  jawaban: React.ReactNode;
}

export default function App() {
  const buahYangDimiliki = jawaban1(fruits);
  const { jumlahWadah, massingBuah } = jawaban2(fruits);
  const totalStok = jawaban3(fruits);
  const jumlahKomentar = jawaban5(comments);

  const pertanyaanJawaban: IPertanyaanJawaban[] = [
    {
      pertanyaan: "1. Buah apa saja yang dimiliki Andi? (fruitName)",
      jawaban: (
        <div className="text-lg text-muted-foreground">
          Buah yang dimiliki Andi:{" "}
          <span className="text-primary">{buahYangDimiliki}</span>
        </div>
      ),
    },
    {
      pertanyaan:
        "2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja dimasing-masing wadah?",
      jawaban: (
        <div className="flex flex-col">
          <div className="text-lg text-muted-foreground">
            Jumlah wadah yang dibutuhkan:{" "}
            <span className="text-primary">{jumlahWadah}</span>
          </div>
          <div className="text-lg text-muted-foreground">
            Buah apa saja yang ada dimasing-masing wadah :{" "}
            <span className="text-primary">{massingBuah}</span>
          </div>
        </div>
      ),
    },
    {
      pertanyaan: "3. Berapa total stock buah yang ada di masing-masing wadah?",
      jawaban: (
        <div className="text-lg text-muted-foreground">
          Buah apa saja dimasing-masing wadah:{" "}
          <span className="text-primary">{totalStok}</span>
        </div>
      ),
    },
    {
      pertanyaan: "4. Apakah ada komentar terkait kasus di atas?",
      jawaban: <div className="text-lg text-primary">Tidak Ada</div>,
    },
    {
      pertanyaan:
        "5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.?",
      jawaban: (
        <div className="text-lg text-muted-foreground">
          Jumlah Komentar:{" "}
          <span className="text-primary">{jumlahKomentar}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-10 px-8">
      <h1 className="text-center text-4xl font-semibold">
        Junior Fullstack - Technical Test
      </h1>
      <div className="card">
        <Accordion type="single" collapsible className="w-full text-left">
          {pertanyaanJawaban.map((value) => (
            <AccordionItem value={value.pertanyaan} key={value.pertanyaan}>
              <AccordionTrigger className="text-left">
                {value.pertanyaan}
              </AccordionTrigger>
              <AccordionContent>{value.jawaban}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
