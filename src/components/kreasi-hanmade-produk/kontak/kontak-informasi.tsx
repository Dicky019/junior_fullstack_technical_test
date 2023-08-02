import { H4 } from "@/components/typograpy";
import { Card, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface KontakInformasiProps {
  icon: ReactNode;
  title: string;
}

export function KontakInformasi({ icon, title }: KontakInformasiProps) {
  return (
    <Card className="p-4 flex flex-col gap-3">
      <CardTitle className="flex justify-center">{icon}</CardTitle>
      <H4 className="font-light text-muted-foreground text-xs text-center">
        {title}
      </H4>
    </Card>
  );
}
