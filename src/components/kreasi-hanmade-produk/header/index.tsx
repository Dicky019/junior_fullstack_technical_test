import { HamburgerMenu } from "./hamberger-menu";
import { Link } from "@/components/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { H2 } from "@/components/typograpy";
import { homeId } from "./header-id";
import { HeaderMenu } from "./header-menu";

export default function Header() {
  return (
    <div className="bg-primary-foreground sticky top-0 z-40 ">
      <div className="container mx-auto py-5 flex justify-between items-center ">
        <Link to={homeId}>
          <H2 className="border-b-2">KreHand</H2>
        </Link>

        <div className="flex gap-x-8 max-[500px]:hidden">
          <HeaderMenu />
          <ThemeToggle />
        </div>

        <div className="min-[500px]:hidden">
          <HamburgerMenu>
            <ThemeToggle />
            <HeaderMenu />
          </HamburgerMenu>
        </div>
      </div>
    </div>
  );
}
