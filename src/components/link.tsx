import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";

export interface LinkProps extends React.HTMLProps<HTMLElement> {
  to: string;
}


const Link = ({ children, to, className }: LinkProps) => (
  <ScrollLink
    to={to}
    offset={-90}
    smooth={true}
    children={children}
    className={cn("cursor-pointer", className)}
  />
);

export { Link };
