import { H1, H2 } from "@/components/typograpy";
import { cn } from "@/lib/utils";

interface ContentProdukProps {
    isRight?: boolean;
    src?: string;
    title: string;
    subtitle: string;
  }
  
  export function ContentProduk({
    isRight = false,
    src = "/bg-home.jpg",
    title,
    subtitle,
  }: ContentProdukProps) {
    return (
      <div
        className={cn(
          "flex max-lg:flex-col-reverse max-lg:gap-y-4 gap-x-10 w-full h-[600px] items-center",
          isRight && "flex-row-reverse"
        )}
      >
        <div className={cn("lg:flex-1", isRight && "text-end max-sm:text-left")}>
          <H1 className="mb-4 max-sm:mb-1">{title}</H1>
          <H2 className="text-muted-foreground font-medium">{subtitle}</H2>
        </div>
        <div
          style={{
            backgroundImage: `url(${src})`,
          }}
          className="flex-1 h-[600px] w-full bg-hero-pattern bg-cover rounded-md"
        />
      </div>
    );
  }
  