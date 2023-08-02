import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function KontakKami() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-center">Hubungi Kami</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nama">Nama</Label>
              <Input id="nama" placeholder="Full Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pesan">Pesan</Label>
              <Textarea id="pesan" placeholder="Pesan of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Kirim</Button>
      </CardFooter>
    </Card>
  );
}
