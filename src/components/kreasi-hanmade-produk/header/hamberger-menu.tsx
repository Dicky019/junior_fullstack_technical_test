import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ReactNode } from "react";

interface HamburgerMenuProps {
  children: ReactNode;
}

export function HamburgerMenu({ children }: HamburgerMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-screen w-screen flex items-center justify-center bg-transparent flex-col"
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
